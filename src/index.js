export default {
  async fetch(request, env, ctx) {
    return new Response("Eagles SEO Engine is active at the Edge!", {
      headers: { "content-type": "text/plain" },
    });
  },
};
