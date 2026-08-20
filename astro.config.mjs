// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// Update this when the Vercel project exists, so canonical URLs and the
	// sitemap point at the real domain.
	site: 'https://tidy-ds-toolbox-documentation.vercel.app',
	integrations: [
		starlight({
			title: 'Tidy DS Toolbox',
			description: 'Documentation for the Tidy DS Toolbox Figma plugin.',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/tidy-dev-team/tidy-ds-toolbox' }],
			// The navigation follows the panel, and the panel groups modules by
			// maturity. Add the Stable and Beta groups when those pages exist.
			sidebar: [
				{
					label: 'Set up',
					items: [{ autogenerate: { directory: 'setup' } }],
				},
				{
					label: 'Stable',
					items: [
						{ label: 'DS Explorer', slug: 'modules/ds-explorer' },
						{ label: 'Component Labels', slug: 'modules/component-labels' },
					],
				},
				{
					label: 'Alpha',
					items: [{ label: 'Tidy Doc', slug: 'modules/tidy-doc' }],
				},
				{
					// Tidy QA has no entry in moduleRegistry.ts, so the panel gives it
					// no maturity group. It runs from Claude only.
					label: 'Run from Claude',
					items: [{ label: 'Tidy QA', slug: 'modules/tidy-qa' }],
				},
			],
		}),
	],
});
