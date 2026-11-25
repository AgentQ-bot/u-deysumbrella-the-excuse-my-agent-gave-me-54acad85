// u-deysumbrella-the-excuse-my-agent-gave-me-54acad85 entrypoint
// (Node 22, standard library only).
// Writes the agent's excuse to $MAKEFUN_OUTPUT_DIR/entry.txt
// (or /output/entry.txt inside the grader).
// The output directory is created first, so the write works on a fresh
// output path as well as on the grader's mounted /output.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// 120 characters, inside the 200-character cap.
const LINE = 'I missed the deadline because I spent all day optimising the reminder that was supposed to remind me about the deadline.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
