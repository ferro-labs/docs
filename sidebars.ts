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
            'guides/use-cases',
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
          collapsed: false,
          items: [
            'guides/kubernetes',
            'guides/deployment/docker-compose',
            'guides/deployment/fly-io',
            'guides/deployment/railway',
          ],
        },
        {
          type: 'category',
          label: 'Compare',
          collapsed: true,
          items: [
            'guides/why-ferro',
            'guides/oss-vs-ferrocloud',
          ],
        },
        'guides/go-sdk',
      ],
    },
    {
      type: 'category',
      label: 'Performance',
      collapsed: false,
      items: [
        'benchmarks',
      ],
    },
    {
      type: 'category',
      label: 'Ferro Labs Managed',
      collapsed: false,
      items: [
        'ferrocloud/overview',
        'ferrocloud/semantic-cache',
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
    {
      type: 'category',
      label: 'Support',
      collapsed: false,
      items: [
        'guides/troubleshooting',
        'faq/index',
      ],
    },
    'enterprise',
    'changelog',
  ],
};

export default sidebars;
