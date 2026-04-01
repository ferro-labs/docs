# AGENTS.md — Ferro Labs AI Gateway Documentation

## Project Overview

Official documentation site for **Ferro Labs AI Gateway** — the open-source AI gateway. Built with Docusaurus 3 and deployed at **https://docs.ferrolabs.ai**.

- **Repo**: `github.com/ferro-labs/ferrolabs-docs`
- **Framework**: Docusaurus 3.9 + React 19 + TypeScript
- **Content format**: MDX (Markdown + JSX)
- **Diagrams**: Mermaid (via `@docusaurus/theme-mermaid`)
- **Node**: 20+
- **Package manager**: pnpm

---

## Build, Test, and Run Commands

```bash
pnpm install               # install dependencies
pnpm start                 # start dev server (hot reload)
pnpm build                 # production build
pnpm serve                 # serve production build locally
pnpm typecheck             # TypeScript type checking
```

---

## Project Structure

```
ferrolabs-docs/
├── docs/                            ← Documentation content (MDX files)
│   ├── intro.mdx                    ← Landing page
│   ├── changelog.mdx                ← Release changelog
│   ├── getting-started/
│   │   ├── overview.mdx
│   │   ├── quickstart.mdx
│   │   ├── architecture.mdx
│   │   ├── concepts.mdx
│   │   ├── configuration.mdx
│   │   └── request-lifecycle.mdx
│   ├── guides/
│   │   ├── providers.mdx            ← Provider setup guide
│   │   ├── providers-config.mdx     ← Provider configuration
│   │   ├── routing-policies.mdx     ← Routing strategy guide
│   │   ├── plugins.mdx              ← Plugin system guide
│   │   ├── auth.mdx                 ← Authentication guide
│   │   ├── admin-auth.mdx           ← Admin API auth
│   │   ├── rate-limiting.mdx        ← Rate limiting guide
│   │   ├── observability.mdx        ← Metrics & logging guide
│   │   └── workspace-sign-in-domains.mdx
│   ├── api-reference/
│   │   ├── overview.mdx
│   │   ├── endpoints.mdx            ← API endpoint reference
│   │   └── admin.mdx                ← Admin API reference
│   ├── sdks/                        ← SDK documentation
│   ├── operations/                  ← Operations guides
│   ├── security/                    ← Security documentation
│   └── faq/                         ← Frequently asked questions
├── src/
│   └── css/custom.css               ← Custom theme styles
├── static/                          ← Static assets (images, branding)
├── docusaurus.config.ts             ← Site config (title, URL, navbar, footer)
├── sidebars.ts                      ← Sidebar navigation structure
├── package.json
└── tsconfig.json
```

---

## Key Configuration

- **Site URL**: `https://docs.ferrolabs.ai`
- **Base path**: `/` (docs served at root)
- **Route base**: `/` (docs are the entire site, no blog)
- **Organization**: `ferro-labs`
- **Project**: `ai-gateway`

---

## Conventions

- **MDX only** — all content files use `.mdx` extension
- **Mermaid diagrams** — use fenced code blocks with `mermaid` language tag
- **Sidebar** — defined in `sidebars.ts`, auto-generated from directory structure
- **Front matter** — every doc needs `title` and optional `description`, `sidebar_position`
- **Code blocks** — use language tags (`go`, `bash`, `yaml`, `typescript`, `python`)
- **Admonitions** — use `:::note`, `:::tip`, `:::warning`, `:::danger` for callouts
- **Links** — internal links use absolute route paths without `.mdx` extension (e.g. `/getting-started/quickstart`), external links use full URLs
- **Images** — place in `static/` and reference with absolute paths (`/img/...`)

## CI / GitHub Actions

The CI workflow (`.github/workflows/ci.yml`) runs on every push and PR to `main` and `development`:

1. `pnpm install --frozen-lockfile`
2. `pnpm typecheck` — TypeScript check
3. `pnpm build` — full Docusaurus production build (validates all links)

A PR must pass CI before it can be merged.

---

## Branch strategy

| Branch | Purpose |
|---|---|
| `main` | Production — auto-deploys to docs.ferrolabs.ai |
| `development` | Staging — all PRs target this branch |

Contributors must open PRs against `development`, not `main`.

---

## External Links

| Name | URL |
|---|---|
| OSS Gateway repo | https://github.com/ferro-labs/ai-gateway |
| Website | https://www.ferrolabs.ai |
| Twitter/X | https://x.com/ferroLabsAI |
| Contributing guide | https://github.com/ferro-labs/ferrolabs-docs/blob/main/CONTRIBUTING.md |
| Code of Conduct | https://github.com/ferro-labs/ferrolabs-docs/blob/main/CODE_OF_CONDUCT.md |
