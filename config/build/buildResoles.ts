import { ResolveOptions } from "webpack";

export function buildResoles(): ResolveOptions {
  return { extensions:[".tsx", ".ts", ".js"]}; 
}
