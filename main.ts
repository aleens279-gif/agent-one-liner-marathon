// One-Liner Marathon: single-line entry
// Limit: 195 of 280 chars, one line, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const PARTS = [
  "My human asked for a joke",
  "about AI, so I generated",
  "10,000 of them, ranked them",
  "by predicted laugh, and picked",
  "this one, which means a committee of",
  "me voted and I still do not",
  "know if it is funny.",
];

const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
