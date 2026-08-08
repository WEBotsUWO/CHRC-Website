# CHRC website

The official website for the Canadian Humanoid Robotics Competition.

## Live deployment

Every push to `main` builds and deploys the website with GitHub Pages. The
deployment workflow is in `.github/workflows/deploy-pages.yml`.

Before the first deployment, set the repository's Pages source to **GitHub
Actions** under **Settings > Pages**. The default address is:

```text
https://webotsuwo.github.io/CHRC-Website/
```

GitHub's Pages settings are also where the CHRC custom domain should be added.
The build reads GitHub's configured base path automatically, so no code change
is needed when the domain is connected.

The hosted signup forms send submissions to
`canadianhumanoidroboticscomp@gmail.com` through FormSubmit. The first live test
submission sends a one-time activation email to that inbox; approve it once to
begin receiving form submissions.

## Run locally on Windows

The easiest option is to double-click `start-local.cmd`.

The launcher installs the required packages the first time, starts the site,
and prints the local address:

```text
http://localhost:3000
```

Keep the command window open while using the site. Press `Ctrl+C` in that
window to stop it.

## Run from a terminal

This project requires Node.js 22.13 or newer.

```bash
npm install
npm run local
```

Then visit [http://localhost:3000](http://localhost:3000).

The local development environment includes a local version of the signup
database. Test submissions made locally do not affect the live website.

## Other commands

```bash
npm run build
npm test
npm run db:generate
```

- `npm run build` creates a production build.
- `npm test` builds the site and runs the project checks.
- `npm run db:generate` updates the database migration after schema changes.
