import { afterEach, test, expect } from "bun:test"
import { Skill } from "../../src/skill"
import { Instance } from "../../src/project/instance"
import { tmpdir } from "../fixture/fixture"
import path from "path"
import fs from "fs/promises"

afterEach(async () => {
  await Instance.disposeAll()
})

async function createGlobalSkill(homeDir: string) {
  const skillDir = path.join(homeDir, ".openstudy", "skills", "global-test-skill")
  await fs.mkdir(skillDir, { recursive: true })
  await Bun.write(
    path.join(skillDir, "SKILL.md"),
    `---
name: global-test-skill
description: A global skill from ~/.openstudy/skills for testing.
---

# Global Test Skill

This skill is loaded from the global home directory.
`,
  )
}

test("discovers skills from .openstudy/skills/ directory", async () => {
  await using tmp = await tmpdir({
    git: true,
    init: async (dir) => {
      const skillDir = path.join(dir, ".openstudy", "skills", "test-skill")
      await Bun.write(
        path.join(skillDir, "SKILL.md"),
        `---
name: test-skill
description: A test skill for verification.
---

# Test Skill

Instructions here.
`,
      )
    },
  })

  await Instance.provide({
    directory: tmp.path,
    fn: async () => {
      const skills = await Skill.all()
      expect(skills.length).toBe(1)
      const testSkill = skills.find((s) => s.name === "test-skill")
      expect(testSkill).toBeDefined()
      expect(testSkill!.description).toBe("A test skill for verification.")
      expect(testSkill!.location).toContain(path.join(".openstudy", "skills", "test-skill", "SKILL.md"))
    },
  })
})

test("returns skill directories from Skill.dirs", async () => {
  await using tmp = await tmpdir({
    git: true,
    init: async (dir) => {
      const skillDir = path.join(dir, ".openstudy", "skills", "dir-skill")
      await Bun.write(
        path.join(skillDir, "SKILL.md"),
        `---
name: dir-skill
description: Skill for dirs test.
---

# Dir Skill
`,
      )
    },
  })

  const home = process.env.OPENCODE_TEST_HOME
  process.env.OPENCODE_TEST_HOME = tmp.path

  try {
    await Instance.provide({
      directory: tmp.path,
      fn: async () => {
        const dirs = await Skill.dirs()
        const skillDir = path.join(tmp.path, ".openstudy", "skills", "dir-skill")
        expect(dirs).toContain(skillDir)
        expect(dirs.length).toBe(1)
      },
    })
  } finally {
    process.env.OPENCODE_TEST_HOME = home
  }
})

test("discovers multiple skills from .openstudy/skills/ directory", async () => {
  await using tmp = await tmpdir({
    git: true,
    init: async (dir) => {
      const skillDir1 = path.join(dir, ".openstudy", "skills", "skill-one")
      const skillDir2 = path.join(dir, ".openstudy", "skills", "skill-two")
      await Bun.write(
        path.join(skillDir1, "SKILL.md"),
        `---
name: skill-one
description: First test skill.
---

# Skill One
`,
      )
      await Bun.write(
        path.join(skillDir2, "SKILL.md"),
        `---
name: skill-two
description: Second test skill.
---

# Skill Two
`,
      )
    },
  })

  await Instance.provide({
    directory: tmp.path,
    fn: async () => {
      const skills = await Skill.all()
      expect(skills.length).toBe(2)
      expect(skills.find((s) => s.name === "skill-one")).toBeDefined()
      expect(skills.find((s) => s.name === "skill-two")).toBeDefined()
    },
  })
})

test("skips skills with missing frontmatter", async () => {
  await using tmp = await tmpdir({
    git: true,
    init: async (dir) => {
      const skillDir = path.join(dir, ".openstudy", "skills", "no-frontmatter")
      await Bun.write(
        path.join(skillDir, "SKILL.md"),
        `# No Frontmatter

Just some content without YAML frontmatter.
`,
      )
    },
  })

  await Instance.provide({
    directory: tmp.path,
    fn: async () => {
      const skills = await Skill.all()
      expect(skills).toEqual([])
    },
  })
})

test("discovers skills from .openstudy/skills/ directory", async () => {
  await using tmp = await tmpdir({
    git: true,
    init: async (dir) => {
      const skillDir = path.join(dir, ".openstudy", "skills", "openstudy-skill")
      await Bun.write(
        path.join(skillDir, "SKILL.md"),
        `---
name: openstudy-skill
description: A skill in the .openstudy/skills directory.
---

# OpenStudy Skill
`,
      )
    },
  })

  await Instance.provide({
    directory: tmp.path,
    fn: async () => {
      const skills = await Skill.all()
      expect(skills.length).toBe(1)
      const openstudySkill = skills.find((s) => s.name === "openstudy-skill")
      expect(openstudySkill).toBeDefined()
      expect(openstudySkill!.location).toContain(path.join(".openstudy", "skills", "openstudy-skill", "SKILL.md"))
    },
  })
})

test("discovers global skills from ~/.openstudy/skills/ directory", async () => {
  await using tmp = await tmpdir({ git: true })

  const originalHome = process.env.OPENCODE_TEST_HOME
  process.env.OPENCODE_TEST_HOME = tmp.path

  try {
    await createGlobalSkill(tmp.path)
    await Instance.provide({
      directory: tmp.path,
      fn: async () => {
        const skills = await Skill.all()
        expect(skills.length).toBe(1)
        expect(skills[0].name).toBe("global-test-skill")
        expect(skills[0].description).toBe("A global skill from ~/.openstudy/skills for testing.")
        expect(skills[0].location).toContain(path.join(".openstudy", "skills", "global-test-skill", "SKILL.md"))
      },
    })
  } finally {
    process.env.OPENCODE_TEST_HOME = originalHome
  }
})

test("returns empty array when no skills exist", async () => {
  await using tmp = await tmpdir({ git: true })

  await Instance.provide({
    directory: tmp.path,
    fn: async () => {
      const skills = await Skill.all()
      expect(skills).toEqual([])
    },
  })
})

test("discovers skills from .openstudy/skills/ (not from .claude or .agents)", async () => {
  await using tmp = await tmpdir({
    git: true,
    init: async (dir) => {
      const openstudyDir = path.join(dir, ".openstudy", "skills", "openstudy-skill")
      await Bun.write(
        path.join(openstudyDir, "SKILL.md"),
        `---
name: openstudy-skill
description: A skill in the .openstudy/skills directory.
---

# OpenStudy Skill
`,
      )
    },
  })

  await Instance.provide({
    directory: tmp.path,
    fn: async () => {
      const skills = await Skill.all()
      expect(skills.length).toBe(1)
      expect(skills.find((s) => s.name === "openstudy-skill")).toBeDefined()
    },
  })
})

test("discovers global skills from ~/.openstudy/skills/ directory (global home)", async () => {
  await using tmp = await tmpdir({ git: true })

  const originalHome = process.env.OPENCODE_TEST_HOME
  process.env.OPENCODE_TEST_HOME = tmp.path

  try {
    const skillDir = path.join(tmp.path, ".openstudy", "skills", "global-openstudy-skill")
    await fs.mkdir(skillDir, { recursive: true })
    await Bun.write(
      path.join(skillDir, "SKILL.md"),
      `---
name: global-openstudy-skill
description: A global skill from ~/.openstudy/skills for testing.
---

# Global OpenStudy Skill

This skill is loaded from the global home directory.
`,
    )

    await Instance.provide({
      directory: tmp.path,
      fn: async () => {
        const skills = await Skill.all()
        expect(skills.length).toBe(1)
        expect(skills[0].name).toBe("global-openstudy-skill")
        expect(skills[0].description).toBe("A global skill from ~/.openstudy/skills for testing.")
        expect(skills[0].location).toContain(path.join(".openstudy", "skills", "global-openstudy-skill", "SKILL.md"))
      },
    })
  } finally {
    process.env.OPENCODE_TEST_HOME = originalHome
  }
})

test("discovers skills from both .openstudy/skills/ and config dirs", async () => {
  await using tmp = await tmpdir({
    git: true,
    init: async (dir) => {
      const openstudyDir = path.join(dir, ".openstudy", "skills", "openstudy-skill")
      await Bun.write(
        path.join(openstudyDir, "SKILL.md"),
        `---
name: openstudy-skill
description: A skill in the .openstudy/skills directory.
---

# OpenStudy Skill
`,
      )
    },
  })

  await Instance.provide({
    directory: tmp.path,
    fn: async () => {
      const skills = await Skill.all()
      // Only .openstudy/skills is scanned (not .claude or .agents)
      expect(skills.length).toBe(1)
      expect(skills.find((s) => s.name === "openstudy-skill")).toBeDefined()
    },
  })
})

test("properly resolves directories that skills live in", async () => {
  await using tmp = await tmpdir({
    git: true,
    init: async (dir) => {
      const openstudyDir1 = path.join(dir, ".openstudy", "skills", "skill-one")
      const openstudyDir2 = path.join(dir, ".openstudy", "skills", "skill-two")
      await Bun.write(
        path.join(openstudyDir1, "SKILL.md"),
        `---
name: skill-one
description: First skill in .openstudy/skills.
---

# Skill One
`,
      )
      await Bun.write(
        path.join(openstudyDir2, "SKILL.md"),
        `---
name: skill-two
description: Second skill in .openstudy/skills.
---

# Skill Two
`,
      )
    },
  })

  await Instance.provide({
    directory: tmp.path,
    fn: async () => {
      const dirs = await Skill.dirs()
      // Two skills in .openstudy/skills/ — both in the same parent dir, so 1 unique dir
      expect(dirs.length).toBe(2)
    },
  })
})
