import { $ } from "bun"
import semver from "semver"
import path from "path"

const rootPkgPath = path.resolve(import.meta.dir, "../../../package.json")
const rootPkg = await Bun.file(rootPkgPath).json()
const expectedBunVersion = rootPkg.packageManager?.split("@")[1]

if (!expectedBunVersion) {
  throw new Error("packageManager field not found in root package.json")
}

// relax version requirement
const expectedBunVersionRange = `^${expectedBunVersion}`

if (!semver.satisfies(process.versions.bun, expectedBunVersionRange)) {
  throw new Error(`This script requires bun@${expectedBunVersionRange}, but you are using bun@${process.versions.bun}`)
}

const env = {
  OPENSTUDY_CHANNEL: process.env["OPENSTUDY_CHANNEL"] || process.env["OPENCODE_CHANNEL"],
  OPENSTUDY_BUMP: process.env["OPENSTUDY_BUMP"] || process.env["OPENCODE_BUMP"],
  OPENSTUDY_VERSION: process.env["OPENSTUDY_VERSION"] || process.env["OPENCODE_VERSION"],
  OPENSTUDY_RELEASE: process.env["OPENSTUDY_RELEASE"] || process.env["OPENCODE_RELEASE"],
}
const CHANNEL = await (async () => {
  if (env.OPENSTUDY_CHANNEL) return env.OPENSTUDY_CHANNEL
  if (env.OPENSTUDY_BUMP) return "latest"
  if (env.OPENSTUDY_VERSION && !env.OPENSTUDY_VERSION.startsWith("0.0.0-")) return "latest"
  return await $`git branch --show-current`.text().then((x) => x.trim())
})()
const IS_PREVIEW = CHANNEL !== "latest"

const VERSION = await (async () => {
  if (env.OPENSTUDY_VERSION) return env.OPENSTUDY_VERSION
  if (IS_PREVIEW) return `0.0.0-${CHANNEL}-${new Date().toISOString().slice(0, 16).replace(/[-:T]/g, "")}`
  // OpenStudy starts at 1.0.0
  return "1.0.0"
})()

export const Script = {
  get channel() {
    return CHANNEL
  },
  get version() {
    return VERSION
  },
  get preview() {
    return IS_PREVIEW
  },
  get release(): boolean {
    return !!env.OPENSTUDY_RELEASE
  },
  get team(): string[] {
    return []
  },
}
console.log(`openstudy script`, JSON.stringify(Script, null, 2))
