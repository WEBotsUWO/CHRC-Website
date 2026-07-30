import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("ships the CHRC conversion experience", async () => {
  const [home, layout, form, leadForm, competition, sponsors] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/start-a-team/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/LeadForm.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/competition/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/sponsors/page.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(home, /Canadian Humanoid Robotics Competition/);
  assert.match(home, /Start a team/);
  assert.match(home, /Every season adds a system/);
  assert.match(home, /The Humanoid Arm Challenge/);
  assert.match(form, /Your university could be next/);
  assert.match(leadForm, /Put your university on the CHRC map/);
  assert.match(competition, /May 15, 2027/);
  assert.match(sponsors, /Choose your level of impact/);
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
    access(new URL("public/images/chrc-hero.png", root)),
    access(new URL("public/images/roadmap-evolution.png", root)),
    access(new URL("public/images/arm-challenge.png", root)),
    access(new URL("public/CHRC-sponsorship-package-2026-27.pdf", root)),
  ]);
});
