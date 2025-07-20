// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.onmicro.ai',
	integrations: [
		starlight({
			title: '',
			logo: {
				src: './public/OnMicroDocs.png',
				alt: 'OnMicro.AI Logo',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/onmicroai/micro_ai' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Cloud Deployment', slug: 'guides/deploy' },
						{ label: 'Local Deployment', slug: 'guides/deploy_local' },
						{ label: 'LTI Connection (Open edX®)', slug: 'guides/lti_connection' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
