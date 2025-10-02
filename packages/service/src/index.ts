// Comment and uncomment below line to see the error
import * as Sentry from '@sentry/cloudflare';

export default {
	async fetch(request, env, ctx): Promise<Response> {
		env.MY_VARIABLE;

		return new Response('Hello World!');
	},
};

const x: Env = {
	MY_VARIABLE: 1,
};
