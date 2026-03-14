import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/overview',
        'getting-started/quickstart',
        'getting-started/architecture',
        'getting-started/request-lifecycle',
        'getting-started/concepts',
        'getting-started/configuration',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Providers',
          collapsed: false,
          items: [
            'guides/providers',
            'guides/providers-config',
          ],
        },
        {
          type: 'category',
          label: 'Routing',
          collapsed: false,
          items: [
            'guides/routing-policies',
          ],
        },
        {
          type: 'category',
          label: 'Features',
          collapsed: false,
          items: [
            'guides/plugins',
            'guides/mcp',
            'guides/prompt-templates',
            'guides/rate-limiting',
          ],
        },
        {
          type: 'category',
          label: 'Auth & Access',
          collapsed: false,
          items: [
            'guides/auth',
            'guides/admin-auth',
            'guides/workspace-sign-in-domains',
          ],
        },
        {
          type: 'category',
          label: 'Observability',
          collapsed: false,
          items: [
            'guides/observability',
          ],
        },
        {
          type: 'category',
          label: 'Migration',
          collapsed: true,
          items: [
            'guides/migration-litellm',
            'guides/migration-portkey',
          ],
        },
        {
          type: 'category',
          label: 'Deployment',
          collapsed: true,
          items: [
            'guides/kubernetes',
          ],
        },
        {
          type: 'category',
          label: 'Compare',
          collapsed: true,
          items: [
            'guides/oss-vs-ferrocloud',
          ],
        },
      ],
    },
    {
      type: 'link',
      label: 'API Reference ↗',
      href: '/api',
    },
    {
      type: 'category',
      label: 'SDKs',
      collapsed: true,
      items: ['sdks/overview'],
    },
    {
      type: 'category',
      label: 'Operations',
      collapsed: false,
      items: [
        'operations/monitoring',
        'operations/request-logging',
        'operations/server-settings',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      collapsed: false,
      items: ['security/data-handling'],
    },
    'changelog',
  ],
};

export default sidebars;
