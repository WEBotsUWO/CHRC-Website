import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("ships the revised CHRC conversion experience", async () => {
  const [
    home,
    layout,
    siteChrome,
    legacyTeamPage,
    competition,
    competitionSignup,
    eventDetails,
    registrationForm,
    sponsors,
  ] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/SiteChrome.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/start-a-team/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/competition/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/competition-signup/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/site.ts", import.meta.url), "utf8"),
    readFile(
      new URL("../app/components/CompetitionRegistrationForm.tsx", import.meta.url),
      "utf8",
    ),
    readFile(new URL("../app/sponsors/page.tsx", import.meta.url), "utf8"),
  ]);

  const homeHeading = home.match(/<h1\b[^>]*>(.*?)<\/h1>/s)?.[1] ?? "";
  const homeHeadingText = homeHeading
    .replace(/<[^>]+>/g, "")
    .replaceAll('{" "}', " ")
    .replace(/\s+/g, " ")
    .trim();
  assert.equal(homeHeadingText, "Canadian Humanoid Robotics Competition");
  assert.match(home, /Register now/);
  assert.match(home, /Every season adds a system/);
  assert.match(home, /season-2027-hand-v4\.png/);
  assert.match(home, /season-2028-upper-body-v4\.png/);
  assert.match(home, /season-2029-biped-v4\.png/);
  assert.match(home, /season-2030-humanoid-v4\.png/);
  assert.doesNotMatch(home, /roadmap-evolution/);
  assert.match(home, /Humanoid Hand Competition/);
  assert.match(home, /Join the movement/);
  assert.match(home, /I started the competition to bridge the gap between/);
  assert.match(siteChrome, /href="\/competition-signup"/);
  assert.match(siteChrome, />\s*Sign up\s*</);
  assert.match(competition, /CompetitionEventDetails/);
  assert.match(eventDetails, /May 8, 2027/);
  assert.match(eventDetails, /Western University/);
  assert.match(eventDetails, /9:00 AM to 5:00 PM ET/);
  assert.match(eventDetails, /Subject to change/);
  assert.match(competition, /Competition package coming soon/);
  assert.match(competitionSignup, /CompetitionRegistrationForm/);
  assert.doesNotMatch([home, siteChrome, competitionSignup].join("\n"), /start-a-team/);
  assert.match(legacyTeamPage, /httpEquiv="refresh"/);
  assert.match(legacyTeamPage, /competition-signup/);
  assert.match(registrationForm, /Register your team/);
  assert.match(sponsors, /Where sponsorship funding goes/);
  assert.match(sponsors, /Competition development/);
  assert.doesNotMatch(sponsors, /Student awards/);
  assert.match(sponsors, /Sponsorship levels/);
  assert.match(layout, /CHRC \| Canadian Humanoid Robotics Competition/);
});

test("removes starter-only code and keeps required assets", async () => {
  const packageJson = await readFile(
    new URL("../package.json", import.meta.url),
    "utf8",
  );

  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(access(new URL("app/_sites-preview", root)));
  await Promise.all([
    access(new URL("public/images/chrc-hero-v5.png", root)),
    access(new URL("public/images/season-2027-hand-v4.png", root)),
    access(new URL("public/images/season-2028-upper-body-v4.png", root)),
    access(new URL("public/images/season-2029-biped-v4.png", root)),
    access(new URL("public/images/season-2030-humanoid-v4.png", root)),
    access(new URL("public/images/hand-competition-v9.png", root)),
    access(new URL("public/images/sponsor-hardware-v6.png", root)),
    access(new URL("public/og.png", root)),
    access(new URL("public/CHRC-sponsorship-package-2026-27.pdf", root)),
  ]);
});

test("removes the banned copy and default arrow glyphs", async () => {
  const files = [
    "../app/page.tsx",
    "../app/layout.tsx",
    "../app/competition/page.tsx",
    "../app/competition-signup/page.tsx",
    "../app/start-a-team/page.tsx",
    "../app/sponsors/page.tsx",
    "../app/components/SiteChrome.tsx",
    "../app/components/CompetitionRegistrationForm.tsx",
  ];
  const source = (
    await Promise.all(
      files.map((file) => readFile(new URL(file, import.meta.url), "utf8")),
    )
  ).join("\n");

  assert.doesNotMatch(source.replaceAll("Domino Challenge", ""), /challenge/i);
  assert.doesNotMatch(source, /[—→↗↓✓×]/);
  assert.doesNotMatch(source, /The future needs a team|Why not yours|proving ground/i);
  assert.doesNotMatch(source, /university-exclusive|May 15, 2027|10:00 AM to 5:00 PM/i);
});

test("includes a GitHub Pages deployment and hosted form delivery", async () => {
  const [workflow, nextConfig, registrationForm] = await Promise.all([
    readFile(new URL("../.github/workflows/deploy-pages.yml", import.meta.url), "utf8"),
    readFile(new URL("../next.config.ts", import.meta.url), "utf8"),
    readFile(
      new URL("../app/components/CompetitionRegistrationForm.tsx", import.meta.url),
      "utf8",
    ),
  ]);

  assert.match(workflow, /actions\/configure-pages@v5/);
  assert.match(workflow, /actions\/upload-pages-artifact@v4/);
  assert.match(workflow, /actions\/deploy-pages@v4/);
  assert.match(workflow, /NEXT_PUBLIC_FORM_ENDPOINT/);
  assert.match(workflow, /NEXT_PUBLIC_BASE_PATH: ""/);
  assert.doesNotMatch(workflow, /steps\.pages\.outputs\.base_path/);
  assert.match(nextConfig, /output: "export"/);
  assert.match(nextConfig, /basePath: pagesBasePath/);
  assert.doesNotMatch(nextConfig, /\/CHRC-Website/);
  assert.match(registrationForm, /NEXT_PUBLIC_FORM_ENDPOINT/);
});
