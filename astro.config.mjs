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
					label: 'Tutorials',
					items: [
						{ label: 'Build your first app', slug: 'tutorials/build-your-first-app' },
						{ label: 'Remix an app', slug: 'tutorials/remix-an-app' },
						{ label: 'Edit an app', slug: 'tutorials/edit-app' },
						{ label: 'Configure app settings', slug: 'tutorials/configure-app-settings' },
						{ label: 'Share your app', slug: 'tutorials/share-your-app' },
						{ label: 'Share with teammates', slug: 'tutorials/share-with-teammates' },
					],
				},
				{
					label: 'Guides',
					items: [
						
						{ label: 'Cloud Deployment', slug: 'guides/deploy' },
						{ label: 'Local Deployment', slug: 'guides/deploy_local' },
						{ label: 'LTI Connection (Open edX®)', slug: 'guides/lti_connection' },
						{ label: 'LTI Connection (Canvas)', slug: 'guides/lti_canvas' },
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
