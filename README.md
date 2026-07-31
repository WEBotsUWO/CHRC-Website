# CHRC website

The official website for the Canadian Humanoid Robotics Competition.

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
