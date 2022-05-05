import { IDENTIFIER } from './config';
import { setExtensionFields } from './setExtensionFields';

/**
 * Save Github Actions in Record Field
 *
 * @param record
 * @param githubAction
 */
export const saveActionInRecord = async (
  record: Aha.RecordUnion,
  githubAction: IExtensionFieldGithubAction
): Promise<void> => {
  if (!githubAction?.project?.id) {
    throw new Error('Undefined Project Id');
  }

  // If Old Github actions exist, add or replace workflows
  const oldAction: IExtensionFieldGithubAction = await record.getExtensionField(IDENTIFIER, githubAction.project.id);
  if (oldAction) {
    githubAction = {
      ...oldAction,
      project: {
        ...(oldAction?.project ?? {}),
        ...(githubAction?.project ?? {})
      },
      workflows: {
        ...(oldAction?.workflows ?? {}),
        ...(githubAction?.workflows ?? {})
      }
    };
  }

  // Save Github Action in Record
  await setExtensionFields(record, {
    [githubAction.project.id]: githubAction
  });
};
