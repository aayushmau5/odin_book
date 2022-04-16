import { readFileSync } from "fs";
import { resolve } from "path";

export default function readFromFile(path: string) {
  return readFileSync(resolve(path), { encoding: "utf-8" });
}
