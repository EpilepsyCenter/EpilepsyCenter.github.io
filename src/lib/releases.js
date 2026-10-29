// Version numbers are read from the GitHub releases API when the site is built,
// so a new release shows up here without anyone editing this repo. The deploy
// workflow also runs weekly for that reason.
//
// Unauthenticated API calls are rate-limited (60/hour/IP); a failure is not an
// error, it just falls back to the version recorded in src/data/apps.js.

import { ORG } from '../data/apps.js';

export async function latestRelease(repo) {
  try {
    const res = await fetch(`https://api.github.com/repos/${ORG}/${repo}/releases/latest`, {
      headers: {
        accept: 'application/vnd.github+json',
        'user-agent': 'epilepsycenter.github.io build',
      },
    });
    if (!res.ok) return null;
    const json = await res.json();
    return { tag: json.tag_name, url: json.html_url };
  } catch {
    return null;
  }
}

// Resolves every app's version in one pass. Returns a map keyed by app id:
//   { tracer: { version: 'v1.0.1', url: '…' }, … }
export async function resolveVersions(apps) {
  const entries = await Promise.all(
    apps.map(async (app) => {
      if (!app.hasReleases) {
        return [app.id, { version: null, url: `https://github.com/${ORG}/${app.repo}` }];
      }
      const release = await latestRelease(app.repo);
      return [
        app.id,
        {
          version: release?.tag ?? app.fallbackVersion,
          url: release?.url ?? `https://github.com/${ORG}/${app.repo}/releases`,
        },
      ];
    })
  );
  return Object.fromEntries(entries);
}
