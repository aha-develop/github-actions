declare interface IReferenceDescriptor {
  type: IAhaReferenceType;
  referenceNum: string;
}

declare type IAhaReferenceType = 'Epic' | 'Feature' | 'Requirement';
