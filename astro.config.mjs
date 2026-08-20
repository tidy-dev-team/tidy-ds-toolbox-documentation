// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightCatppuccin from '@catppuccin/starlight';

// https://astro.build/config
export default defineConfig({
	// The production domain, so canonical URLs and the sitemap are correct.
	site: 'https://tidy-ds-toolbox-documentation.vercel.app',
	integrations: [
		starlight({
			title: 'Tidy DS Toolbox',
			description: 'Documentation for the Tidy DS Toolbox Figma plugin.',
			// Latte in light, Mocha in dark, with the Mauve accent. The flavours
			// and the accent are the plugin's defaults, written out so a change is
			// one edit here.
			plugins: [
				starlightCatppuccin({
					light: { flavor: 'latte', accent: 'mauve' },
					dark: { flavor: 'mocha', accent: 'mauve' },
				}),
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/tidy-dev-team/tidy-ds-toolbox' }],
			// The panel groups modules by maturity, and the Stable and Beta groups
			// follow it. A module you run with a slash command goes in Run from
			// Claude instead, whatever its maturity is, because the command is how
			// a reader runs it.
			sidebar: [
				{
					label: 'Set up',
					items: [{ autogenerate: { directory: 'setup' } }],
				},
				{
					label: 'Claude commands',
					items: [{ autogenerate: { directory: 'commands' } }],
				},
				{
					label: 'Stable',
					items: [
						{ label: 'DS Explorer', slug: 'modules/ds-explorer' },
						{ label: 'Component Labels', slug: 'modules/component-labels' },
						{ label: 'Tidy Icon Care', slug: 'modules/tidy-icon-care' },
						{ label: 'Tidy Mapper', slug: 'modules/tidy-mapper' },
						{ label: 'Audit', slug: 'modules/audit' },
						{ label: 'Utilities', slug: 'modules/utilities' },
						{ label: 'Misprint', slug: 'modules/misprint' },
						{ label: 'DS Template', slug: 'modules/ds-template' },
					],
				},
				{
					label: 'Beta',
					items: [
						{ label: 'Sticker Sheet Builder', slug: 'modules/sticker-sheet-builder' },
						{ label: 'Release Notes', slug: 'modules/release-notes' },
						{ label: 'Off-Boarding', slug: 'modules/off-boarding' },
						{ label: 'Icon Finder', slug: 'modules/icon-finder' },
						{ label: 'Color Finder', slug: 'modules/color-finder' },
					],
				},
				{
					// Driven by a slash command. Tidy Doc is alpha in the panel and
					// keeps a fallback button there; Tidy QA and tidy-find have no
					// panel entry at all.
					label: 'Run from Claude',
					items: [
						{ label: 'Tidy Doc', slug: 'modules/tidy-doc' },
						{ label: 'Tidy QA', slug: 'modules/tidy-qa' },
						{ label: 'Find components', slug: 'modules/tidy-find' },
					],
				},
			],
		}),
	],
});
