# Astro on AWS

This project is a robust and user-friendly Astro website template equipped with seamless AWS Amplify authentication integration. It offers developers an efficient starting point for creating secure and performant web applications. With a focus on speed and scalability, this template harnesses the power of Astro's static site generation and AWS Amplify's authentication services to streamline the development process. Leveraging Amplify's easy authentication and hosting, an Astro website can be deployed within minutes.

## △ Deploy to Amplify

[![amplifybutton](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/aws-samples/amplify-authentication-for-astro)

## 📁 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
├── public/
├── src/
│   ├── components/
│   │   ├── App.css
│   │   ├── App.tsx
│   │   ├── BaseHead.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── HeaderLink.astro
│   ├── pages/
│   │   ├── index.astro
│   └── styles/
│       ├── global.css
│   ├── consts.ts
│   ├── env.d.ts
├── .gitignore
├── astro.config.mjs
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── package.json
├── pnpm-lock.yaml
├── README.md
├── TROUBLESHOOTING.md
└── tsconfig.json
```

## 💻 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## ✅ Prerequisites:

- [ ] An active [AWS Account](https://aws.amazon.com/getting-started/)
- [ ] [Amplify CLI](https://docs.amplify.aws/cli/) installed and configured
- [ ] [PNPM installed](https://pnpm.io/installation)
- [ ] [Node installed](https://nodejs.org/en) (will need NPM which is included)
- [ ] Basic knowledge in:

  - [React](https://react.dev/)
  - [Typescript](https://www.typescriptlang.org/)
  - [AWS](https://aws.amazon.com/)
  - [AWS Amplify](https://aws.amazon.com/amplify/)
  - [Amazon Cognito](https://aws.amazon.com/cognito/)
  - [Astro](https://astro.build/)

> [!NOTE]
> Run `npm doctor` and check if everything is `ok`

## 🚀 Getting Started

1. Clone the repository onto your local machine

via HTTPS

```
git clone https://github.com/aws-samples/amplify-authentication-for-astro.git
```

or via SSH

```
git clone git@github.com:aws-samples/amplify-authentication-for-astro.git
```

or via Github CLI

```
gh repo clone aws-samples/amplify-authentication-for-astro
```

- Edit the `src/consts.ts` file to update the title and the website description
- Make any edits you see fit!
- Deploy your new application using the steps below

## 🐚 Steps:

1. Create an [Amplify project](https://docs.amplify.aws/lib/project-setup/prereq/q/platform/js/)
   - Run `amplify configure` if necessary
2. Run `amplify init`
   - This [initializes your Amplify application](https://docs.amplify.aws/cli/start/workflows/#initialize-new-project)
   - Keep everything default other than this step:
     - Change the `Distribution Directory Path` from `build` to `dist`
3. Run `amplify add auth`
   - This adds [Authentication to your Amplify app](https://docs.amplify.aws/lib/auth/getting-started/q/platform/js/#set-up-and-configure-amplify-auth)
   - You can keep everything default and then username
4. Run `amplify add hosting`
   - This adds [Hosting to your Amplify App](https://docs.amplify.aws/start/getting-started/hosting/q/integration/react/)
   - Select hosting with Amplify console
   - Select Manual deployment (or if you have a repository to connect you can connect via git integration)
5. Run `amplify publish`
   - This will [build the front-end](https://docs.amplify.aws/start/getting-started/hosting/q/integration/js/#publish-your-app) with the purpose of a static web-page and will give you a url by default ending with `.amplifyapp.com`
6. You will need to copy this url and update the Astro configuration file
   1. Copy the url
   2. Navigate to the root of the code
   3. Open the file `astro.config.mjs`
   4. Update the `site: "UPDATE_ME.COM"` to the url copied earlier
7. Run `amplify publish` once more if you are in manual deployment mode. If you are not, then you can commit and make a new push.
8. If you now navigate to the URL, you will see the website live!

## 🔧 Troubleshooting

Check out the [TROUBLESHOOTING](TROUBLESHOOTING) file for more information.

## 🧹 Cleanup

1. Run `amplify delete`
   - This will remove all cloud environments and resources and wipe out locally created files by the Amplify CLI
2. Navigate to the AWS console and to the IAM service
   - Remove the IAM user `amplify-dev` created earlier

## 💫 Astro

> Check out [the Astro documentation](https://docs.astro.build)!

This was modeled after the [Astro blog starter template](https://github.com/withastro/astro/tree/main/examples/blog), which is based off of [Bear Blog](https://github.com/HermanMartinus/bearblog/).

## 🔒 Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## 📜 License

This library is licensed under the MIT-0 License. See the [LICENSE](LICENSE) file.

## ✍️ Authors

- [Aditya Addepalli](https://github.com/adiadd) -- Cloud Developer @ AWS Professional Services
