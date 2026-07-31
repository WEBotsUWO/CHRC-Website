import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("ships the revised CHRC conversion experience", async () => {
  const [
    home,
    layout,
    form,
    leadForm,
    competition,
    competitionSignup,
    registrationForm,
    sponsors,
  ] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/start-a-team/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/LeadForm.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/competition/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/competition-signup/page.tsx", import.meta.url), "utf8"),
    readFile(
      new URL("../app/components/CompetitionRegistrationForm.tsx", import.meta.url),
      "utf8",
    ),
    readFile(new URL("../app/sponsors/page.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(home, /Canadian Humanoid Robotics Competition/);
  assert.match(home, /CHRC 2027 - sign up/);
  assert.match(home, /Every season adds a system/);
  assert.match(home, /season-2027-hand-v3\.png/);
  assert.match(home, /season-2028-upper-body-v3\.png/);
  assert.match(home, /season-2029-biped-v3\.png/);
  assert.match(home, /season-2030-humanoid-v3\.png/);
  assert.doesNotMatch(home, /roadmap-evolution/);
  assert.match(home, /Humanoid Hand Competition/);
  assert.match(home, /Join the movement/);
  assert.match(form, /One student is enough to begin/);
  assert.match(leadForm, /Join the movement/);
  assert.match(competition, /May 15, 2027/);
  assert.match(competition, /Competition package coming soon/);
  assert.match(competitionSignup, /CompetitionRegistrationForm/);
  assert.match(registrationForm, /Register your team&apos;s interest/);
  assert.match(sponsors, /Where sponsorship funding goes/);
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
    access(new URL("public/images/season-2027-hand-v3.png", root)),
    access(new URL("public/images/season-2028-upper-body-v3.png", root)),
    access(new URL("public/images/season-2029-biped-v3.png", root)),
    access(new URL("public/images/season-2030-humanoid-v3.png", root)),
    access(new URL("public/images/hand-competition.png", root)),
    access(new URL("public/images/sponsor-hardware.png", root)),
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
    "../app/components/LeadForm.tsx",
    "../app/components/CompetitionRegistrationForm.tsx",
  ];
  const source = (
    await Promise.all(
      files.map((file) => readFile(new URL(file, import.meta.url), "utf8")),
    )
  ).join("\n");

  assert.doesNotMatch(source, /challenge/i);
  assert.doesNotMatch(source, /[—→↗↓✓×]/);
  assert.doesNotMatch(source, /The future needs a team|Why not yours|proving ground/i);
});
