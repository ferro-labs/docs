# Ferro Labs AI Gateway — Documentation

[![CI](https://github.com/ferro-labs/docs/actions/workflows/ci.yml/badge.svg)](https://github.com/ferro-labs/docs/actions/workflows/ci.yml)

Official documentation site for **[Ferro Labs AI Gateway](https://github.com/ferro-labs/ai-gateway)** — the open-source, OpenAI-compatible LLM proxy.

Live at **[docs.ferrolabs.ai](https://docs.ferrolabs.ai)**

Built with [Docusaurus 3](https://docusaurus.io/), React 19, and TypeScript.

---

## Contributing

We welcome contributions! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on:
- Fixing typos and broken links
- Improving existing pages
- Adding new guides or examples

PRs go to the `development` branch.

---

## Local development

**Requirements**: Node.js 20+, pnpm 9+

```bash
# Install dependencies
pnpm install

# Start dev server at http://localhost:3000
pnpm start

# Production build (validates all links)
pnpm build

# TypeScript typecheck
pnpm typecheck
```

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
