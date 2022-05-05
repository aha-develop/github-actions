/**
 * Find Aha! single record from search string
 *
 * @param searchStr
 * @returns
 */
export const getRecord = async (searchStr: string): Promise<Aha.RecordUnion | null> => {
  try {
    const reference = extractStrToReference(searchStr);

    if (!reference) {
      return null;
    }
    return getRecordFromReference(reference);
  } catch (error) {
    console.log('Error in extractStrToReference => ', error);
    return null;
  }
};

/**
 * Queries the Aha! API to fetch the record described by `descriptor`.
 *
 * @param descriptor
 * @returns A promise yielding the matching record, if any
 */
export const getRecordFromReference = async (descriptor: IReferenceDescriptor): Promise<Aha.RecordUnion | null> => {
  console.log(`Extracted ${descriptor.referenceNum} from payload`);

  const RecordClass = aha.models[descriptor.type];
  if (!RecordClass) {
    console.log(`Invalid Record Type ${descriptor.type}`);
    return null;
  }

  try {
    // @ts-ignore
    const record: Aha.RecordUnion = await RecordClass.select('id', 'referenceNum').find(
      descriptor.referenceNum.toUpperCase()
    );
    console.log(`Found record for ${descriptor.referenceNum}`);

    return record;
  } catch (error) {
    //This is the case that branch has correct naming convention but aha! doesn't have that record
    console.log(`Unable to find record for ${descriptor.referenceNum}`);
    console.error(error);

    return null;
  }
};

/**
 * Extract Aha! record reference from given string
 *
 * @param name
 * @returns
 */
const extractStrToReference = (name: string): IReferenceDescriptor | null => {
  let matches;

  // Requirement
  if ((matches = name.match(/[0-9a-z]{1,10}-[0-9]+-[0-9]+/i))) {
    return {
      type: 'Requirement',
      referenceNum: matches[0]
    };
  }
  // Epic
  if ((matches = name.match(/[0-9a-z]{1,10}-E-[0-9]+/i))) {
    return {
      type: 'Epic',
      referenceNum: matches[0]
    };
  }
  // Feature
  if ((matches = name.match(/[0-9a-z]{1,10}-[0-9]+/i))) {
    return {
      type: 'Feature',
      referenceNum: matches[0]
    };
  }

  return null;
};
