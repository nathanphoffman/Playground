import { dest, src, series } from "gulp";
import { rm } from "node:fs/promises";

// Each task is just a function. Gulp chains streams: src -> transforms -> dest.
export const clean = () => rm("dist", { recursive: true, force: true });
const copy = () => src("src/*.txt").pipe(dest("dist"));

export default series(clean, copy);
