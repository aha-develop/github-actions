> [!IMPORTANT]
> The Aha! Develop GitHub Actions extension has been combined into the main [GitHub extension](https://github.com/aha-develop/github), and this extension is no longer maintained.

# GitHub Actions for Aha! Develop
  
This is an extension for [Aha! Develop](https://www.aha.io/develop) providing integration with GitHub Actions.

It provides these contributions:

- `Actions` attribute - Shows the projects and workflows for a given record.
- `Webhook` - Automatically links workflows to records if the branch name or commit message contains the record reference number.

## Screenshot

![GitHub Actions](https://user-images.githubusercontent.com/125077/170320333-c16c1bda-30c7-4020-acb8-e14f67f9e0d6.png)

## Installing the extension

> [!NOTE]
> Install the main [GitHub extension](https://github.com/aha-develop/github). This extension is no longer supported. 

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
