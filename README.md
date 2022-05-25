# GitHub Actions for Aha! Develop
  
This is an extension for [Aha! Develop](https://www.aha.io/develop) providing integration with GitHub Actions.

It provides these contributions:

- `Actions` attribute - Shows the projects and workflows for a given record.
- `Webhook` - Automatically links workflows to records if the branch name or commit message contains the record reference number.

## Screenshot

![GitHub Actions](https://user-images.githubusercontent.com/125077/170320333-c16c1bda-30c7-4020-acb8-e14f67f9e0d6.png)

## Installing the extension

**Note: In order to install an extension into your Aha! Develop account, you must be an account administrator.**

1. Install the GitHub extension by clicking [here](https://secure.aha.io/settings/account/extensions/install?url=https%3A%2F%2Fsecure.aha.io%2Fextensions%2Faha-develop.github-actions.gz).

2. Configure a webhook in GitHub. The extension will automatically link Aha! records to branches and pull requests in GitHub if you include the Aha! reference number (like `APP-123`) in the name of the branch or pull request. To enable this:

   - In Aha! go to Settings -> Account -> Extensions -> GitHub Integration -> Webhook from Github. Copy the hidden URL.

   - In GitHub go to each repo that you want to integrate with Aha!. In Settings -> Webhook create a new webhook. The payload URL is the URL you copied from the extension. The content type should be `application/json`. Select the following individual events: Branch or tag creation, Check runs, Pull requests, Pull request reviews, Pushes, Statuses. Enable the webhook.

    - Instead of doing this at the repo level, it is also possible to create an organization-wide webhook that wil work for all repos.

3. Configure the extension with your repos. In Aha! go to Settings -> Account -> Extensions -> GitHub Integration. In the Related repositories section add each repo that should be considered when looking for PRs that match a feature ID.

## Working on the extension

Install `aha-cli`:

```sh
npm install -g aha-cli
```

Clone the repo:

```sh
git clone https://github.com/aha-develop/github-actions.git
```

Install required modules:

```sh
yarn install
```

**Note: In order to install an extension into your Aha! Develop account, you must be an account administrator.**

Install the extension into Aha! and set up a watcher:

```sh
aha extension:install
aha extension:watch
```

Now, any change you make inside your working copy will automatically take effect in your Aha! account.

## Building

When you have finished working on your extension, package it into a `.gz` file so that others can install it:

```sh
aha extension:build
```

After building, you can upload the `.gz` file to a publicly accessible URL, such as a GitHub release, so that others can install it using that URL.

To learn more about developing Aha! Develop extensions, including the API reference, the full documentation is located here: [Aha! Develop Extension API](https://www.aha.io/support/develop/extensions)
