# Which static site generator fits the documentation site

Research for issue #194.
Part of map #193.
Date of the research: 18 August 2026.

This document reports facts with sources.
It does not make a recommendation.

All facts come from primary sources.
The primary sources are each project's own documentation, each project's own repository and changelog, the npm registry, and GitHub Docs.

## Summary of the versions

| Item | Astro Starlight | VitePress | Docusaurus |
| --- | --- | --- | --- |
| Stable version | `@astrojs/starlight` 0.41.7 (2026-08-05) | 1.6.4 (2025-08-05) | 3.10.2 (2026-07-10) |
| Pre-release line | none | 2.0.0-alpha.19 (2026-08-02) | none active |
| Reached 1.0 | no | yes | yes |
| Node floor | Node 22.12 or later, from `astro@7` | Node 22 or later in the 2.0 docs, Node 18 or later at tag v1.6.4 | Node 20.0 or later |

Sources: [npm @astrojs/starlight](https://www.npmjs.com/package/@astrojs/starlight), [npm vitepress](https://registry.npmjs.org/vitepress), [Docusaurus installation](https://docusaurus.io/docs/installation), [VitePress getting started](https://vitepress.dev/guide/getting-started), [VitePress getting started at v1.6.4](https://github.com/vuejs/vitepress/blob/v1.6.4/docs/en/guide/getting-started.md).

Note on the VitePress documentation site.
The site at vitepress.dev is built from the `main` branch, so it shows the 2.0 alpha behaviour.
The `latest` tag on npm is still 1.6.4.

## Critical fact: GitHub Pages, organisations, and the free plan

This fact changes the plan if it is false, so it is first.

**A public repository owned by an organisation on the GitHub Free plan can publish a public Pages site.**
GitHub Docs states the rule from the repository side.

> "If the account that owns the repository uses GitHub Free or GitHub Free for organizations, the repository must be public."

Source: [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

The plan availability sentence names organisations on the free plan.

> "GitHub Pages is available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server."

Source: [What is GitHub Pages?](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages).
Caution about this sentence.
GitHub Docs search returns it against that page, but a direct fetch of the page body did not show it.
The wording is possibly moved.
The repository-side rule above is verified in the page body, and it says the same thing.

The GitHub plan feature list confirms the same rule.
GitHub Free for personal accounts includes "GitHub Pages in public repositories".
GitHub Pro and GitHub Team list GitHub Pages among the tools for private repositories.
Source: [GitHub's plans](https://docs.github.com/get-started/learning-about-github/githubs-products).

**A private organisation repository on the GitHub Free plan cannot publish a Pages site at all.**
The gate is the repository, not the site.
Pages from a private repository needs GitHub Pro, GitHub Team, GitHub Enterprise Cloud, or GitHub Enterprise Server.
Source: [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) and [GitHub's plans](https://docs.github.com/get-started/learning-about-github/githubs-products).

Site visibility is a separate matter from repository visibility.
A site published from a private repository on Pro or Team is public.
To make the site itself private, the organisation must use GitHub Enterprise Cloud.

> "To publish a GitHub Pages site privately, your organization must use GitHub Enterprise Cloud."

Source: [Changing the visibility of your GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site).

An organisation owner can also block Pages centrally.
The owner can allow or disallow members from publishing Pages sites, and on Enterprise Cloud can allow public sites, private sites, both, or neither.
Source: [Managing the publication of GitHub Pages sites for your organization](https://docs.github.com/en/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization).

Consequence for map #193.
The map plans a public repository, so the free plan is sufficient.
This fact does not block the plan.
The permission risk that the map records is a different risk.
It is about the right to create the repository in the organisation, not about the Pages plan.
This research cannot check the organisation's plan, because the local `gh` token does not have the `admin:org` scope.

## GitHub Pages mechanics that apply to all three generators

There are two publishing sources.
"Deploy from a branch" publishes the root or the `/docs` folder of a chosen branch.
"GitHub Actions" runs a workflow that uploads an artifact.
GitHub Docs recommends GitHub Actions when you use a build process other than Jekyll.
Source: [Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

The official actions are `actions/configure-pages`, `actions/upload-pages-artifact`, and `actions/deploy-pages`.
The deployment job needs the permissions `pages: write`, `id-token: write`, and `contents: read`.
An environment named `github-pages` must exist.
Source: [Using custom workflows with GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

The usage limits are these.

> "Published GitHub Pages sites may be no larger than 1 GB."

> "GitHub Pages sites have a *soft* bandwidth limit of 100 GB per month."

> "GitHub Pages sites have a *soft* limit of 10 builds per hour."

Source: [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits).
The same page prohibits commercial use such as an online business, e-commerce, or a software service.

Jekyll does not build files or folders that start with `_`, `.`, or `#`, or that end with `~`.
Source: [About GitHub Pages and Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll).
This is the practical trap, because bundlers write output into folders such as `_astro`.
An empty `.nojekyll` file in the root of the publishing source stops the Jekyll build.
Source: [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).
The trap does not apply to the artifact path, because `upload-pages-artifact` does not run Jekyll.

The URL of an organisation project site is `https://<org>.github.io/<repository>`.
An organisation site at `https://<org>.github.io` needs a repository named exactly `<org>.github.io`.
Source: [What is GitHub Pages?](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages).

## 1. Deployment to GitHub Pages from a public repository

### Astro Starlight

Starlight does not document the deployment itself.
Its Getting Started page links to the Astro deployment guides.
Source: [Starlight getting started](https://starlight.astro.build/getting-started/).

Astro documents a full GitHub Pages workflow.
It uses `actions/checkout@v7`, `withastro/action@v6`, and `actions/deploy-pages@v5`, with the permissions listed above.
The publishing source must be set to GitHub Actions.
The configuration keys are `site` for the deployed URL and `base` for the project path, such as `"/my-repo"`.
Source: [Deploy your Astro site to GitHub Pages](https://docs.astro.build/en/guides/deploy/github/).

What the Astro guide says can break.
All internal page links that you write by hand must carry the `base` value as a prefix.
The `withastro/action` needs a committed lockfile, so that it can detect the package manager.
For a custom domain you must not set `base`, and you must add `public/CNAME`.

A test build was made with `site` and `base` set.
Starlight's own output was already prefixed correctly.
The stylesheet was `href="/my-repo/_astro/common.*.css"`, a sidebar link was `/my-repo/guides/newpage/`, and an image was `src="/my-repo/_astro/pic.*.webp"`.
So the `base` problem is limited to links that an author writes by hand in Markdown.

The `trailingSlash` option defaults to `'ignore'`.
Source: [Astro configuration reference](https://docs.astro.build/en/reference/configuration-reference/).
The static build writes directory-style output, such as `dist/guides/newpage/index.html`.
The Astro deployment guide gives no GitHub Pages warning about trailing slashes.

### VitePress

VitePress documents a complete copy-and-paste workflow for GitHub Pages.
Source: [Deploy your VitePress site](https://vitepress.dev/guide/deploy).
It has a `build` job and a `deploy` job.
It uses `actions/checkout@v5` with `fetch-depth: 0`, `actions/setup-node@v6` with `node-version: 24`, `actions/cache@v4` for `docs/.vitepress/cache`, `actions/configure-pages@v4`, `actions/upload-pages-artifact@v3` with `path: docs/.vitepress/dist`, and `actions/deploy-pages@v4`.
It sets `concurrency` with `group: pages` and `cancel-in-progress: false`.
The publishing source must be set to GitHub Actions.

The one hazard that the page marks with a warning is `base`.
The page says to make sure that the `base` option is correct.
For a site at `user.github.io/repo/` you must set `base` to `/repo/`.
The default is `/`, and the value must start and end with a slash.
Source: [VitePress site config: base](https://vitepress.dev/reference/site-config#base).
Static asset paths are adjusted for `base` automatically.
Source: [VitePress asset handling](https://vitepress.dev/guide/asset-handling).

VitePress never mentions `.nojekyll`.
A search of the repository for `nojekyll` gives no result.
Whether a branch-based deployment would need the file is not established from VitePress's own sources.

One extra fact that affects the build.
Dead links fail the build by default.
`ignoreDeadLinks` defaults to `false`, and a value of `true` stops the failure.
Source: [VitePress site config: ignoreDeadLinks](https://vitepress.dev/reference/site-config#ignoredeadlinks).

### Docusaurus

Docusaurus has the most first-class GitHub Pages support of the three.
Source: [Docusaurus deployment](https://docusaurus.io/docs/deployment).

It has a dedicated command, `docusaurus deploy`, which clones, builds, and commits.
The scaffold exposes it as `npm run deploy`, and you run it as `GIT_USER=<username> yarn deploy`.
The required configuration keys are `url`, `baseUrl`, `organizationName`, and `projectName`.
`trailingSlash` must be set to `true` or `false` on purpose, because GitHub Pages adds a trailing slash to Docusaurus URLs by default.
The default value of `trailingSlash` is `undefined`, which keeps URLs untouched.
Source: [Docusaurus config API](https://docusaurus.io/docs/api/docusaurus-config).

The relevant environment variables are `GIT_USER`, `GIT_PASS`, `USE_SSH`, `DEPLOYMENT_BRANCH` (default `gh-pages`), `CURRENT_BRANCH`, `GIT_USER_NAME`, and `GIT_USER_EMAIL`.

Docusaurus also documents GitHub Actions workflows.
There is a `deploy.yml` that runs on a push to `main` and uses `actions/deploy-pages@v4`.
There is a `test-deploy.yml` that only builds on a pull request.
The SSH variant uses a deploy key in a secret named `GH_PAGES_DEPLOY`.

What Docusaurus documents as breakage.
Jekyll discards files that begin with `_`, so the docs recommend an empty `.nojekyll` file in `static/`.
A wrong `trailingSlash` value causes unnecessary redirects and 404 errors.
Since August 2021, GitHub needs a personal access token instead of a password for command-line sign-in.

`onBrokenLinks` throws by default, and the classic scaffold sets `onBrokenLinks: 'throw'`.
`onBrokenMarkdownLinks` warns by default.

## 2. Image handling

### Astro Starlight

Screenshots live in `src/`, for example `src/assets/`.
Files in `public/` are served untouched and get no optimisation.
Source: [Astro images](https://docs.astro.build/en/guides/images/).

Markdown references the file with a plain relative path, such as `![A rocketship in space](../../assets/images/rocket.svg)`.
Starlight states that images use Astro's built-in optimized asset support.
Source: [Starlight authoring content](https://starlight.astro.build/guides/authoring-content/).
A `~/assets/...` alias appears in the frontmatter examples for hero images.
Source: [Starlight frontmatter](https://starlight.astro.build/reference/frontmatter/).

The `<Image />` and `<Picture />` components are not available in `.md` files.
In `.md` you have the Markdown `![]()` syntax and raw `<img>` only.
Source: [Astro images](https://docs.astro.build/en/guides/images/).

A test build measured what a plain `.md` image produces.
The output was `<img alt="A test image" loading="lazy" decoding="async" width="256" height="256" src="/my-repo/_astro/pic.*.webp" srcset="">`.
So Starlight gives format conversion to WebP, intrinsic width and height, lazy loading, and async decoding for free.
The `srcset` attribute was empty.

A responsive `srcset` is opt-in through two configuration keys.
`image.layout` defaults to `undefined` and `image.responsiveStyles` defaults to `false`.
Source: [Astro configuration reference](https://docs.astro.build/en/reference/configuration-reference/).
With `image: { layout: 'constrained', responsiveStyles: true }`, the same Markdown produced `sizes="(min-width: 256px) 256px, 100vw"` and a real `srcset`.
This is one configuration change, and no page needs an edit.

### VitePress

Both locations work.
A relative path such as `![An image](./image.png)` resolves against the file system.
Common image, media, and font types are detected and included as assets automatically.
A file smaller than 4 kB is inlined as base64.
Files in `public/` are copied to the root of the output and are referenced from the root, such as `/icon.png`.
Source: [VitePress asset handling](https://vitepress.dev/guide/asset-handling).

VitePress does no resizing.
It generates no responsive `srcset`.
A search of the documentation and the source for `srcset` gives no result.
The Markdown image plugin at `src/node/markdown/plugins/image.ts` only normalises the source and resolves local paths.

Lazy loading is opt-in, not automatic.
Set `markdown.image.lazyLoad` to `true` to add `loading="lazy"`.
Source: [VitePress Markdown extensions](https://vitepress.dev/guide/markdown).
In version 1.6.4 the key has a different name, `markdown.image.lazyLoading`, and the documentation says that lazy loading is disabled by default.
Source: [VitePress markdown docs at v1.6.4](https://github.com/vuejs/vitepress/blob/v1.6.4/docs/en/guide/markdown.md).
The rename appears in the 2.0 alpha breaking changes.

The 2.0 alpha adds automatic `width` and `height` on local images, to prevent layout shift.
Source: [VitePress CHANGELOG](https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md).

PDF files and other documents are not treated as assets automatically.

### Docusaurus

An image can sit next to the Markdown file.
Source: [Docusaurus assets](https://docusaurus.io/docs/markdown-features/assets).

There are three ways to reference it.
Markdown syntax, `![alt](./assets/img.png)`.
JSX with `require`, `<img src={require('./assets/image.png').default} />`.
An ES import, `import myImageUrl from './assets/image.png'`.

The important rule for a Markdown-only author is this.
With Markdown image or link syntax, Docusaurus resolves the path as a file path and converts it to a `require()` call automatically.
So the author does not need `require()` for a relative path.
`require()` is needed inside JSX only.

An absolute path resolves against the static directories, which default to `['public', 'static']`.
A `pathname://` prefix skips all processing.

Docusaurus does no automatic resizing, no responsive `srcset`, and no lazy loading.
The assets page documents none of these.

There is a plugin for this, `@docusaurus/plugin-ideal-image`.
It produces a responsive, lazy-loading image with a low quality placeholder.
Source: [plugin-ideal-image](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-ideal-image).
It is not part of the classic preset, so you must install it.
Its limits matter for this site.
It supports PNG and JPG only, it does not upscale, and it is inactive in development by default.
Its use needs JSX, with `import Image from '@theme/IdealImage'`.
So it is not reachable from plain Markdown image syntax.

## 3. Built-in search

### Astro Starlight

Starlight ships Pagefind, a local static index, and it is on by default.
The `pagefind` option takes `boolean | PagefindOptions` and defaults to `true`.
Source: [Starlight configuration](https://starlight.astro.build/reference/configuration/) and [Starlight site search](https://starlight.astro.build/guides/site-search/).
A test build printed "Building search index with Pagefind" and wrote a `dist/pagefind/` folder with the index and the user interface assets.

For a hosted service there is an official plugin, `@astrojs/starlight-docsearch`, for Algolia DocSearch.
It needs `appId`, `apiKey`, and `indexName`.
The Starlight documentation only says "If you have access to Algolia's DocSearch program".
The eligibility rules and the cost are not established from Starlight's own documentation.

### VitePress

VitePress supports a local, in-browser index with MiniSearch.
Set `themeConfig.search.provider` to `'local'`.
Source: [VitePress default theme search](https://vitepress.dev/reference/default-theme-search).
`minisearch` is a direct runtime dependency in both 1.6.4 and the 2.0 alpha.
The default options are `{ fuzzy: 0.2, prefix: true, boost: { title: 4, text: 2, titles: 1 } }`.

The hosted option is Algolia DocSearch, with `provider: 'algolia'` and the keys `appId`, `apiKey`, and `indexName`.
The VitePress documentation does not state the eligibility or the cost, and links out instead.
The documentation also lists community alternatives, which are Pagefind, Orama, and Typesense plugins.

### Docusaurus

The search page says that Docusaurus provides first-class support for Algolia DocSearch.
Source: [Docusaurus search](https://docusaurus.io/docs/search).
The page does not say that a working search engine is enabled by default in the classic preset.
`theme-search-algolia` is in the classic preset, but it needs `themeConfig.algolia` credentials to work.
Whether a working search exists with no configuration is not established from the documentation.

The `themeConfig.algolia` keys are `appId`, `apiKey`, `indexName`, `contextualSearch` (on by default), `searchPagePath` (default `'search'`), `insights`, `askAi`, and `searchParameters`.
Typesense DocSearch is documented as an alternative.

Docusaurus lists many local search plugins, and all of them are community-maintained.
Examples are `docusaurus-plugin-lunr`, `@easyops-cn/docusaurus-search-local`, `@orama/plugin-docusaurus-v3`, and `@getcanary/docusaurus-theme-search-pagefind`.
Source: [Docusaurus community resources](https://docusaurus.io/community/resources).
None of them is first-party.

### The cost of Algolia DocSearch

The VitePress and Starlight documentation do not state the cost.
The Docusaurus documentation says that DocSearch is free for any developer documentation or technical blog, with an eligibility checklist and an application.
Source: [Docusaurus search](https://docusaurus.io/docs/search).
Algolia's own documentation confirms this.
DocSearch is free for eligible documentation sites, is open to developer documentation and technical blogs, and rejects an application if the site is not production ready or the content is not technical.
Domain ownership must be verified within 7 days of approval.
Source: [What is DocSearch](https://docsearch.algolia.com/docs/what-is-docsearch/) and [Who can apply](https://docsearch.algolia.com/docs/who-can-apply).

## 4. An "edit this page" link

All three have it built in.
None of the three needs hand-wiring.

Starlight uses `editLink: { baseUrl: string }`, for example `baseUrl: 'https://github.com/withastro/starlight/edit/main/'`.
A page can override it with the `editUrl` frontmatter field.
Source: [Starlight configuration](https://starlight.astro.build/reference/configuration/).
A test build produced `href="https://github.com/x/y/edit/main/src/content/docs/index.md"`, so the source path is appended automatically.

VitePress uses `themeConfig.editLink` with a `pattern` and a `text`.
The `pattern` accepts a template string that contains `:path`, or a function of the page data.
`text` defaults to "Edit this page".
A page can opt out with the `editLink: false` frontmatter field.
Source: [VitePress edit link](https://vitepress.dev/reference/default-theme-edit-link).

Docusaurus uses `editUrl` on the docs plugin and on the blog plugin.
A string is joined with the relative path of the document, and a function receives the version, the document path, the permalink, and the locale.
Related options are `editLocalizedFiles` and `editCurrentVersion`, both `false` by default.
Source: [plugin-content-docs](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs).
The classic scaffold already sets `editUrl` for the documentation and the blog.
Source: [classic template config](https://raw.githubusercontent.com/facebook/docusaurus/main/packages/create-docusaurus/templates/classic/docusaurus.config.js).

## 5. Authoring friction for a Markdown-only developer

This section answers three questions.
What frontmatter is mandatory per page.
How navigation is declared.
Whether a new page appears in the sidebar without a second edit.

### Astro Starlight

Only `title` is mandatory.
The documentation says that you must provide a title for every page.
Source: [Starlight frontmatter](https://starlight.astro.build/reference/frontmatter/) and [Starlight authoring content](https://starlight.astro.build/guides/authoring-content/).
All other fields are optional, which includes `description`, `slug`, `editUrl`, `template`, `hero`, `sidebar`, `prev`, `next`, `tableOfContents`, and `pagefind`.

Pages live under `src/content/docs/`.
A `src/content.config.ts` file with `docsLoader()` and `docsSchema()` is needed once per project.
Source: [examples/basics content config](https://raw.githubusercontent.com/withastro/starlight/main/examples/basics/src/content.config.ts).

With no `sidebar` configuration, Starlight generates the sidebar from the file system structure and uses each file's `title`.
Source: [Starlight sidebar](https://starlight.astro.build/guides/sidebar/).
A test confirmed this.
Adding `src/content/docs/guides/newpage.md` produced a sidebar link at `/my-repo/guides/newpage/` with no configuration change.

There is one caveat, and the default scaffold causes it.
The shipped `examples/basics/astro.config.mjs` declares an explicit sidebar.
It has one hard-coded entry for `guides/example` and an `autogenerate` entry for the `reference` directory.
Source: [examples/basics config](https://raw.githubusercontent.com/withastro/starlight/main/examples/basics/astro.config.mjs).
Once a `sidebar` is declared, it replaces the automatic generation.
So in the scaffolded project, a new page under `guides/` needs a configuration edit, but a new page under `reference/` does not.
Delete the declared sidebar to get the automatic behaviour back.

Automatic entries sort alphabetically by the file id, unless the `sidebar.order` frontmatter field overrides it.

### VitePress

No frontmatter is mandatory.
The frontmatter reference presents every key as an override.
The keys include `title`, `titleTemplate`, `description`, `head`, `layout` (default `doc`), `aside`, `outline`, `lastUpdated`, `editLink`, `footer`, and `pageClass`.
Source: [VitePress frontmatter config](https://vitepress.dev/reference/frontmatter-config).
A plain `.md` file with no frontmatter is a valid page.

The sidebar is declared by hand in `themeConfig.sidebar`.
It is one array, or an object keyed by path prefix for a per-section sidebar.
Each item needs a `text` and a `link`, and each link must start with `/`.
Source: [VitePress sidebar](https://vitepress.dev/reference/default-theme-sidebar).

**A new page does not appear in the VitePress sidebar without a second edit.**
VitePress has no built-in sidebar that is generated from the file system.
The only automatic feature on that page is a group-level `base` option, which prepends a path prefix to the nested items.
That option removes a repeated prefix, and it does not discover files.
Third-party plugins exist, but they are outside the project's own scope.

Note the opposite risk.
A page that no sidebar links to is silent, because nothing checks for it.
But a link to a page that does not exist fails the build, because dead-link checking is on by default.

### Docusaurus

No frontmatter is mandatory.
Every documentation frontmatter field has a default.
`id` defaults to the file path without the extension.
`title` defaults to the Markdown H1, or to the `id`.
`sidebar_label` defaults to the `title`.
`slug` defaults to the file path.
Source: [plugin-content-docs](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs).
A page with a Markdown body only works.

The sidebar is declared in `sidebars.js`, through the `sidebarPath` option.
A value of `false` disables sidebars, and a value of `undefined` produces a fully generated sidebar.

**The classic scaffold generates the sidebar by default.**
The shipped file declares `tutorialSidebar: [{type: 'autogenerated', dirName: '.'}]`, with a manual example commented out beside it.
Source: [classic template sidebars.js](https://raw.githubusercontent.com/facebook/docusaurus/main/packages/create-docusaurus/templates/classic/sidebars.js).
So a new page appears in the sidebar with no second edit.
Each folder creates a category, and each file creates a document link.
Source: [Docusaurus autogenerated sidebar](https://docusaurus.io/docs/sidebar/autogenerated).
The default order is alphabetical by file name and folder name.
You override the order with the `sidebar_position` frontmatter field, a `_category_.json` or `_category_.yml` `position` value, or a number prefix on the file name, which is removed from the display.

## 6. Dark and light theme out of the box

All three ship both themes with a toggle.
The difference is how a Markdown author swaps a screenshot per theme.

### Astro Starlight

The built HTML contains a `<starlight-theme-select>` element with a "Select theme" label, and `<html data-theme="dark">`.
Colours are CSS custom properties such as `--color-accent-*` and `--color-gray-*`, and custom CSS can override them.
Source: [Starlight CSS and styling](https://starlight.astro.build/guides/css-and-tailwind/).

Per-theme images are documented for the site logo, with `logo.light` and `logo.dark`, and for the hero image, with `hero.image.dark` and `hero.image.light`.
Source: [Starlight customization](https://starlight.astro.build/guides/customization/) and [Starlight frontmatter](https://starlight.astro.build/reference/frontmatter/).

For any other image in the Markdown body there is no documented API.
There is an undocumented mechanism that ships in the built CSS.
`packages/starlight/style/util.css` contains `[data-theme='light'] .light\:sl-hidden` and `[data-theme='dark'] .dark\:sl-hidden`.
A test confirmed that a raw `<img class="dark:sl-hidden">` in a `.md` file passes through to the output.
So a two-image swap works.
It costs raw HTML, which gets no Astro optimisation in `.md`, and it depends on an undocumented class.

### VitePress

Both themes ship with a toggle.
The `appearance` option accepts `boolean | 'dark' | 'force-dark' | 'force-auto' | UseDarkOptions` and defaults to `true`.
At `true`, the theme follows the user's preferred colour scheme and the user can toggle it.
Dark mode adds the `.dark` class to the `<html>` element.
An inline script restores the choice from the localStorage key `vitepress-theme-appearance` before the page renders, to prevent a flicker.
Source: [VitePress site config: appearance](https://vitepress.dev/reference/site-config#appearance).

Per-theme images are a configuration feature only, not a Markdown feature.
The `ThemeableImage` type accepts a `{ light, dark }` object, and `themeConfig.logo`, the hero image, and the home-page feature icons accept it.
Source: [VitePress default theme config: logo](https://vitepress.dev/reference/default-theme-config#logo) and [VitePress home page](https://vitepress.dev/reference/default-theme-home-page).
There is no documented Markdown syntax for a light and dark image pair.
A Markdown author must use raw HTML with CSS keyed on `.dark`, or a Vue component, because Vue in Markdown is supported.
Source: [Using Vue in Markdown](https://vitepress.dev/guide/using-vue).

### Docusaurus

The classic theme provides light and dark mode by default, with a switch in the navbar.
`colorMode.defaultMode` defaults to `'light'`, `disableSwitch` defaults to `false`, and `respectPrefersColorScheme` defaults to `false`.
Source: [Docusaurus theme configuration](https://docusaurus.io/docs/api/themes/configuration).
The classic scaffold sets `respectPrefersColorScheme: true`.

There are two documented routes for a per-theme image.
Source: [Docusaurus themed images](https://docusaurus.io/docs/markdown-features/assets#themed-images).
The `<ThemedImage sources={{light, dark}}/>` component needs JSX imports, so it is not available in CommonMark `md` mode.
The CSS route works from pure Markdown.
Add a rule keyed on `[data-theme]` and `img[src$='#gh-dark-mode-only']`, then write two normal Markdown images with the `#gh-light-mode-only` and `#gh-dark-mode-only` fragments.
This is the only one of the three with a documented pure-Markdown route.

## 7. Maintenance burden

### Release cadence

Starlight made 32 releases in the 12 months to 18 August 2026.
Six of them were minor releases, from 0.36.0 to 0.41.0.
That is a minor release about every 6 to 8 weeks, and a patch every 1 to 3 weeks.
Source: `npm view @astrojs/starlight time`.

VitePress 1.x has had no feature release since 1.6.0 on 20 January 2025.
There has been one patch since, 1.6.4 on 5 August 2025, and it has no GitHub release entry.
All development is on the 2.0 alpha line.
There have been 19 alphas over 19 months, with gaps of 2 to 4 months.
The first was alpha.1 on 22 January 2025 and the newest is alpha.19 on 2 August 2026.
Source: npm registry `time` field and [GitHub releases](https://github.com/vuejs/vitepress/releases).

Docusaurus makes about 3 to 5 minor releases per year.
Version 3.0.0 shipped on 31 October 2023 and 3.10.2 on 10 July 2026.
There has been no major release for about 2.7 years.
Source: [GitHub releases API](https://api.github.com/repos/facebook/docusaurus/releases).

### Breaking-change history

Starlight has no 1.0 release, so breaking changes arrive in minor releases.
The changelog marks them.
Source: [Starlight CHANGELOG](https://raw.githubusercontent.com/withastro/starlight/main/packages/starlight/CHANGELOG.md).
Version 0.41.0 dropped Astro v6 and needs Astro v7, and dropped Chromium below 111 and Safari below 16.4.
Version 0.40.0 raised the minimum to Astro v6.4.5.
Version 0.39.0 had two breaking sidebar changes.
`autogenerate` must now be inside an `items` array, and a generated subgroup no longer inherits the parent's `collapsed` state.
The 0.37.x line dropped Astro v5 and removed content-collections back-compatibility.
Every Astro major release so far has forced a Starlight minor bump.

VitePress breaking changes are real and continuing.
The alpha.19 release alone carries about 18 breaking-change entries.
Source: [VitePress CHANGELOG](https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md).
Examples that a documentation author or a configuration owner would meet.
`markdown.image.lazyLoading` became `lazyLoad`.
`markdown.codeCopyButtonTitle` became `markdown.codeCopyButton.tooltipText`, and the default text changed from "Copy Code" to "Copy code".
`themeConfig.lastUpdatedText` and `themeConfig.outlineTitle` were removed, in favour of `lastUpdated.text` and `outline.label`.
`markdown.cjkFriendly` was removed.
`markdown.anchor` and `markdown.attrs` were retyped onto new plugins, which renamed `leftDelimiter`, `rightDelimiter`, and `allowedAttributes` to `left`, `right`, and `allowed`.
A relative URL inside an included Markdown file now resolves against the included file.
The CSS reset changed to normalize-level defaults, which affects a site that layers custom CSS on the default theme.
Version 2.0 also moves the whole platform, from `vite ^5.4.14` to `vite ^8.2.1`, from `shiki ^2.1.0` to `shiki ^4.4.3`, and from `@docsearch/js 3.8.2` to `@docsearch/js ^4.7.0`.

Docusaurus v1 to v2 was a rewrite, from a server-rendered generator to a React single-page application.
The migration touches packages, the command-line interface, `siteConfig.js` to `docusaurus.config.js`, Markdown and frontmatter, sidebars, pages, components, CSS, versioned documentation, and internationalisation.
There is an automated migration command, but some parts cannot be automated easily.
Source: [Migration to v2](https://docusaurus.io/docs/migration/v2).
For v2 to v3, the main breaking change is the upgrade from MDX v1 to MDX v3.
Source: [Migration to v3](https://docusaurus.io/docs/migration/v3).
The same release raised the floors to Node 18, React 18, and TypeScript 5.1, changed the `prism-react-renderer` theme import API and cut the default language set, made remark and rehype plugins ESM-only, renamed `@tsconfig/docusaurus` to `@docusaurus/tsconfig`, capped the blog RSS feed at 20 entries, refactored the documentation theme components, and changed admonition colours.
There is a tool, `npx docusaurus-mdx-checker`, that finds files that no longer compile.

### Size of the dependency tree

Each number below was measured, and the method is stated.

Starlight.
A fresh `npm install @astrojs/starlight@0.41.7 astro@7 sharp` in an empty project gave 369 packages, 320 top-level `node_modules` entries, and 227 MB on disk, measured with `du -sh node_modules`.
Starlight's own package is 1.6 MB and declares 29 direct dependencies, which include Pagefind, Expressive Code, MDX, sitemap, i18next, and the unified, remark, and rehype stack.

VitePress.
Method: `npm init -y` in an empty directory, then `npm install vitepress@<version>`, counting the `packages` keys in the lockfile and running `du -sh node_modules`.
For 1.6.4, npm reported 126 packages added, the lockfile listed 174 packages, and `node_modules` was 98 MB.
For 2.0.0-alpha.19, npm reported 105 packages added, the lockfile listed 129 packages, and `node_modules` was 90 MB.
The extra lockfile entries are optional per-platform esbuild and rollup binaries.
There are 19 direct runtime dependencies in both lines.

Docusaurus.
Method: a `package.json` with `@docusaurus/core@3.10.2`, `@docusaurus/preset-classic@3.10.2`, `@mdx-js/react`, `clsx`, `prism-react-renderer`, `react`, and `react-dom` 19, resolved with `npm install --package-lock-only --ignore-scripts`.
The lockfile had 1275 entries and 1066 distinct package names.
`@docusaurus/core` alone declares 42 direct dependencies, which include `webpack`, `webpack-dev-server`, `webpack-bundle-analyzer`, `react`, three react-router packages, `react-helmet-async`, `react-loadable`, `core-js`, `execa`, and `chokidar`.
So a full React and webpack build toolchain of about 1000 packages is the floor.

## 8. Does any of the three fight one-sentence-per-line Markdown source

The short answer for the line layout is no, for all three.
CommonMark treats a lone newline as a soft line break, which renders as a space.
Source: [CommonMark 0.31.2, soft line breaks](https://spec.commonmark.org/0.31.2/#soft-line-breaks).
So one sentence per source line renders as one flowing paragraph in all three.

Starlight was tested.
A `.md` file with two sentences on consecutive source lines produced `<p>This is sentence one.\nThis is sentence two on its own source line.</p>`, with no `<br>`.
The scaffold at `examples/basics/` has no Prettier configuration, no remark configuration, and no Prettier dependency, so nothing in a new project reflows prose.
Source: [examples/basics contents](https://api.github.com/repos/withastro/starlight/contents/examples/basics).
The Starlight repository's own `.prettierrc` sets `printWidth: 80` for Markdown, but that is the maintainers' configuration and it is not copied into a scaffolded project.
Source: [Starlight .prettierrc](https://raw.githubusercontent.com/withastro/starlight/main/.prettierrc).

VitePress does not fight it either.
It creates markdown-it as `new MarkdownItAsync({ html: true, linkify: true, highlight, ...options })` in `src/node/markdown/markdown.ts`, and it never sets `breaks`.
The markdown-it default therefore applies, and single newlines join into one paragraph.
A `breaks` option exists and its default is `false`, verified in markdown-it 15.0.0's own shipped code, where `breaks: false` appears in the default, zero, and commonmark presets.
`markdown: { breaks: true }` is accepted and is the opt-in to `<br>` behaviour.
VitePress's own Markdown documentation does not mention `breaks`.
One practical caveat for a one-sentence-per-line source appears in the alpha.19 changelog.
With Markdown includes, marker comments shift the reported line numbers for dead links that follow an include.
So a dead-link error can point at the wrong line.

Docusaurus needs a longer answer, because of MDX.
`.md` is MDX by default in v3.
The documentation says that Docusaurus compiles both `.md` and `.mdx` files to React components with the MDX compiler, and that v3 uses the MDX format for all files, including `.md`, for historical reasons.
Source: [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features).
The configuration default is `markdown.format: 'mdx'`.
Source: [Docusaurus config API](https://docusaurus.io/docs/api/docusaurus-config).

What this breaks in plain Markdown prose.
An unescaped `{` or `<` must be escaped as `\{` or `\<`, because MDX reads them as the start of a JavaScript expression or of JSX.
So `{username: string}` and `Array<T>` fail.
Raw HTML must become JSX.
An indented code block no longer compiles, and only a fenced block works.
An autolink such as `<email@example.com>` no longer works.
A `*` or `**` emphasis fails next to a space or punctuation, which mostly affects Chinese, Japanese, and Korean text.
A custom component mapping must be capitalised.
Sources: [Docusaurus React in Markdown](https://docusaurus.io/docs/markdown-features/react) and [Migration to v3](https://docusaurus.io/docs/migration/v3).

There is an escape hatch, and it has a price.
Set the `mdx.format: md` frontmatter field per file, or `siteConfig.markdown.format: 'md'`, or the recommended `siteConfig.markdown.format: 'detect'`, where `.md` uses CommonMark and `.mdx` uses MDX.
The escape hatch is marked experimental.
Its limits are tracked at [issue 9092](https://github.com/facebook/docusaurus/issues/9092).
In `md` mode, `<head>` metadata does not work, `<details>` and `<summary>` render as plain text, live code blocks do not render, `Tabs` needs MDX imports, and you cannot declare structured data.

So the net answer for Docusaurus.
One sentence per line is safe as a layout convention.
But the default MDX parse of `.md` does fight ordinary Markdown prose that contains `<` or `{`.
The fix costs `<head>` metadata, `<details>`, `Tabs`, live code blocks, and `ThemedImage`.
Note that the `ThemedImage` loss interacts with the theme requirement in section 6, because the pure-Markdown CSS route stays available.

## Facts that bear on the assumptions in map #193

1. The free plan is not a problem for a public repository owned by an organisation.
   The Pages plan gate is on private repositories only.
   So the map's plan of a separate public repository avoids the gate completely.
2. The map's stated risk is about the permission to create a public repository in the organisation.
   That risk is unchanged by this research, and it is a different thing from the plan limit.
   This research could not read the organisation's plan, because the local token lacks the `admin:org` scope.
3. VitePress has no built-in sidebar that is generated from the file system.
   Every new page needs a second edit, in the configuration file.
   Starlight and Docusaurus both add a new page to the sidebar with no second edit, in their default state.
   For Starlight, the shipped example configuration partly disables this, and you must delete the declared sidebar to get it back.
4. VitePress 1.x is effectively frozen.
   There has been no feature release for about 19 months, and all work is in a 2.0 alpha that carries many breaking changes.
   This matters because the map says that a second developer will maintain the site after the primary author leaves.
5. Only Docusaurus documents a pure-Markdown route for a per-theme image.
   The map requires screenshots in both themes on the getting-started path.
   Starlight has an undocumented class that works.
   VitePress has no route except raw HTML with custom CSS, or a Vue component.
6. None of the three does responsive image work for free from plain Markdown.
   Starlight is closest, because it gives WebP conversion, intrinsic dimensions, and lazy loading with no configuration, and a real `srcset` after one configuration change.
   VitePress does nothing automatically and needs one option for lazy loading.
   Docusaurus does nothing automatically, and its plugin needs JSX and supports PNG and JPG only.
7. Search needs no hosted service for any of the three.
   Starlight has Pagefind on by default.
   VitePress has MiniSearch behind one option.
   Docusaurus needs a community plugin for a local index, because its first-party path is hosted Algolia DocSearch.
   Algolia DocSearch is free for eligible technical documentation, and it needs an application.
