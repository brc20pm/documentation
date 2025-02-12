const {
	Agile,
	generateId,
	createState,
	createCollection,
	createComputed,
} = require('@agile-ts/core');
const {
	AgileHOC,
	useAgile,
	useWatcher,
	useProxy,
	useSelector,
	useValue,
} = require('@agile-ts/react');
const {
	Event,
	useEvent
} = require('@agile-ts/event');
const {
	toast
} = require('react-toastify');

const githubOrgUrl = 'https://github.com/brc20pm';
const domain = 'https://docs.brc20pm.com';

const customFields = {
	meta: {
		title: 'Bitcoin',
	},
	copyright: `Made with  💜 by <a target="_blank" rel="noopener noreferrer" href="https://github.com/BRC20pm">BRC20pm</a> Inc`,
	domain,
	githubOrgUrl,
	githubUrl: `${githubOrgUrl}`,
	githubDocsUrl: `${githubOrgUrl}/documentation`,
	discordUrl: `https://discord.gg`,
	twitterUrl: 'https://twitter.com/brc20pm',
	version: '0.0.1',
	liveCodeScope: {
		Agile,
		createState,
		createCollection,
		createComputed,
		useAgile,
		useProxy,
		useEvent,
		useWatcher,
		useSelector,
		useValue,
		AgileHOC,
		generateId,
		Event,
		toast,
	},
};

const config = {
	title: 'BRC20pm',
	tagline: 'This is a BRC20 extension module that will bring programmability to Bitcoin. You can think of it as an execution layer in a modular blockchain.',
	url: customFields.domain,
	baseUrlIssueBanner: false,
	baseUrl: '/',
	onBrokenLinks: 'throw', 
	favicon: 'img/favicon.ico',
	organizationName: 'BRC20pm',
	projectName: 'BRC20pm',
	themes: ['@docusaurus/theme-live-codeblock'],
	scripts: [{
		src: 'https://snack.expo.io/embed.js',
		async: true
	}], // https://github.com/expo/snack/blob/main/docs/embedding-snacks.md
	plugins: [
		'docusaurus-plugin-sass',
		// @docusaurus/plugin-google-analytics (Not necessary because it automatically gets added)
	],
	customFields: {
		...customFields
	},
	themeConfig: {
		hideableSidebar: false,
		// https://docusaurus.io/docs/search#using-algolia-docsearch
		// algolia: {
		// 	appId: '64P3EOD5L9',
		// 	apiKey: '461e97fe74b935316bf63af4a6a93345',
		// 	indexName: 'agile-ts',
		// },
		colorMode: {
			defaultMode: 'dark',
			disableSwitch: false,
			respectPrefersColorScheme: false,
		},
		// image: '/img/meta.png', // Gets used in Head as Meta Image (og:image)
		prism: {
			theme: require('prism-react-renderer/themes/github'),
			darkTheme: require('prism-react-renderer/themes/dracula'),
			defaultLanguage: 'javascript',
		},
		navbar: {
			title: '',
			hideOnScroll: true,
			logo: {
				alt: 'BRC20pm Logo',
				src: 'img/logo.svg',
			},
			items: [
				// left
				{
					label: 'Documentation',
					position: 'left',
					to: 'docs/introducing',
				},
				{
					label: 'Community',
					position: 'left',
					items: [{
							label: 'GitHub',
							href: customFields.githubUrl,
						},
						{
							label: 'Discord',
							href: customFields.discordUrl,
						},
						{
							label: 'Twitter',
							href: customFields.twitterUrl,
						}
					],
				}
			],
		},
		footer: {
			copyright: customFields.copyright,
			style: 'dark',
			links: [{
					title: 'Docs',
					items: [{
						label: 'Get Started',
						to: 'docs/introducing',
					}],
				},
				{
					title: 'Community',
					items: [{
							label: 'GitHub',
							href: customFields.githubUrl,
						},
						{
							label: 'Discord',
							href: customFields.discordUrl,
						},
						{
							label: 'Twitter',
							href: customFields.twitterUrl,
						},
					],
				}
			],
		},
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					path: 'docs',
					admonitions: {
						icons: 'emoji',
					},
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: `${customFields.githubDocsUrl}/tree/develop`,
					showLastUpdateAuthor: false,
					showLastUpdateTime: true,
					remarkPlugins: [
						[require('@docusaurus/remark-plugin-npm2yarn'), {
							sync: true
						}],
					],
				},
				blog: {
					showReadingTime: true,
					editUrl: `${customFields.githubDocsUrl}/tree/develop`,
				},
				theme: {
					customCss: [require.resolve('./src/css/custom.scss')],
				},
				googleAnalytics: {
					trackingID: 'UA-189394644-1',
					anonymizeIP: true, // Should IPs be anonymized?
				},
			},
		],
	],
};

module.exports = {
	...config
};