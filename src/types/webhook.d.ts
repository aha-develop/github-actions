declare namespace Webhook {
  interface Params {
    headers?: IHeader;
    payload?: IPayload;
  }

  interface IHeader {
    HTTP_HOST?: string;
    HTTP_ACCEPT?: string;
    HTTP_VERSION?: string;
    HTTP_USER_AGENT?: string;
    HTTP_X_QUEUE_START?: string;
    HTTP_X_QUEUE_TOTAL?: number;
    HTTP_X_GITHUB_EVENT?: string;
    HTTP_X_PRE_ALB_HOST?: string;
    HTTP_X_AMZN_TRACE_ID?: string;
    HTTP_X_FORWARDED_FOR?: string;
    HTTP_X_PRE_ALB_PROTO?: string;
    HTTP_X_FORWARDED_PORT?: string;
    HTTP_X_GITHUB_HOOK_ID?: string;
    HTTP_X_FORWARDED_PROTO?: string;
    HTTP_X_GITHUB_DELIVERY?: string;
    HTTP_X_GITHUB_HOOK_INSTALLATION_TARGET_ID?: string;
    HTTP_X_GITHUB_HOOK_INSTALLATION_TARGET_TYPE?: string;
  }

  type IPayload = GithubActions.IWebhookPayload;
}
