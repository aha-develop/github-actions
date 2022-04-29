declare interface IExtensionFields {
  [index: string]: IExtensionFieldGithubAction;
}

declare interface IExtensionFieldGithubAction {
  project?: IProject;
  workflows?: {
    [index: string]: IWorkflow;
  };
}

declare interface IProject {
  id?: string;
  name?: string;
  url?: string;
}

declare interface IWorkflow {
  id: number;
  url?: string;
  buildNumber?: string;
  buildStatus?: GithubActions.IWorkflowConclusion;
  startTime?: string;
  finishTime?: string;
  name?: string;
  commitHash?: string;
  commitMsg?: string;
  branch?: string;
  workflow?: string;
  authorName?: string;
  authorURL?: string;
}
