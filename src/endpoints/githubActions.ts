import { getRecord } from '@helpers/getRecord';
import { saveActionInRecord } from '@helpers/saveActionInRecord';

/**
 * Webhook Listener
 *
 */
aha.on('githubActionsHook', async ({ headers, payload }: Webhook.Params) => {
  switch (payload.action) {
    case 'completed':
      if (payload.workflow_run) {
        // Accept only workflow run hooks
        await handleBuildCompleted(payload);
      }
      break;
    default:
      break;
  }
});

/**
 * Handle Build Complete Event
 *
 * @param payload
 * @returns
 */
const handleBuildCompleted = async (payload: Webhook.IPayload) => {
  const recordField = parsePayloadToAction(payload);
  if (!recordField) {
    return;
  }

  const [workflow] = Object.values(recordField?.workflows ?? {});

  // Make sure the MR is linked to its record.
  let record = await getRecord(workflow?.branch);
  if (!record) {
    record = await getRecord(workflow?.commitMsg);
  }

  if (!record) {
    return;
  }

  await saveActionInRecord(record, recordField);
};

/**
 * Parse webhook payload to extension field by Resource Version
 *
 * @param payload
 * @returns
 */
const parsePayloadToAction = (payload: Webhook.IPayload): IExtensionFieldGithubAction => {
  let githubAction: IExtensionFieldGithubAction;

  const { repository, workflow, workflow_run } = payload;
  githubAction = {
    project: {
      id: `${repository?.id}`,
      name: repository?.name,
      url: repository?.html_url
    },
    workflows: {
      [workflow_run.head_branch]: {
        id: workflow?.id,
        buildNumber: `${workflow_run.run_number}`,
        buildStatus: workflow_run.conclusion,
        startTime: workflow_run.run_started_at,
        finishTime: workflow_run.updated_at,
        name: workflow.name,
        commitHash: workflow_run?.head_sha,
        commitMsg: workflow_run?.head_commit?.message,
        branch: workflow_run?.head_branch,
        authorName: workflow_run?.actor?.login,
        authorURL: workflow_run?.actor?.avatar_url
      }
    }
  };

  return githubAction;
};
