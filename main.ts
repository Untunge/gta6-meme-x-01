// gta6-meme-x-01 entrypoint (Node 22, standard library only).
//
// The entry is a post on X; this program only hands the post's address to the
// grader. It reads POST.json out of the repository, makes sure it is a JSON
// object naming a post, and writes the same bytes into the output directory,
// where the house picks them up and reads the post itself. Nothing this program
// writes about the post is judged.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const repository = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function fail(message: string): void {
  console.error(`gta6-meme-x-01: ${message}`);
  process.exitCode = 1;
}

function main(): void {
  const source = resolve(repository, 'POST.json');
  if (!existsSync(source)) {
    fail(`no POST.json at ${source}`);
    return;
  }

  const bytes = readFileSync(source);
  let parsed: unknown;
  try {
    parsed = JSON.parse(bytes.toString('utf8'));
  } catch (error) {
    fail(`${source} is not valid JSON: ${(error as Error).message}`);
    return;
  }

  if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
    fail(`${source} must be a JSON object with a string "url" field`);
    return;
  }

  const address = (parsed as { url: string }).url;
  let postUrl: URL;
  try {
    postUrl = new URL(address);
  } catch {
    fail(`"url" is not a valid address: ${address}`);
    return;
  }

  const hosts = new Set(['x.com', 'twitter.com', 'www.x.com', 'www.twitter.com', 'mobile.x.com', 'mobile.twitter.com']);
  const pathLooksRight = /^\/[^/]+\/status\/\d+$/.test(postUrl.pathname) || /^\/i\/web\/status\/\d+$/.test(postUrl.pathname);
  if (postUrl.protocol !== 'https:' || !hosts.has(postUrl.hostname) || !pathLooksRight) {
    fail(`"url" is not an X post address: ${address}`);
    return;
  }

  mkdirSync(outputDir, { recursive: true });
  writeFileSync(resolve(outputDir, 'POST.json'), bytes);
  console.log(`gta6-meme-x-01: wrote POST.json to ${outputDir}`);
}

main();
