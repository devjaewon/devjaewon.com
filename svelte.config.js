import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null, // static site generater 로 사용하고 있기 때문에 의미 없음.
			precompress: false,
			strict: true,
		}),
		alias: {
			'@': 'src',
		}
	}
};

export default config;
