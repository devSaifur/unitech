import { d as decodeKey } from './chunks/astro/server_OJt9805N.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Cd0eFYvW.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/saifur/Documents/works/agency-template-master/","cacheDir":"file:///home/saifur/Documents/works/agency-template-master/node_modules/.astro/","outDir":"file:///home/saifur/Documents/works/agency-template-master/dist/","srcDir":"file:///home/saifur/Documents/works/agency-template-master/src/","publicDir":"file:///home/saifur/Documents/works/agency-template-master/public/","buildClientDir":"file:///home/saifur/Documents/works/agency-template-master/dist/client/","buildServerDir":"file:///home/saifur/Documents/works/agency-template-master/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.10.0_@types+node@24.0.3_jiti@2.4.2_lightningcss@1.30.1_rollup@4.44.0_typescript@5.8.3_yaml@2.8.0/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"/*!\n * Toastify js 1.12.0\n * https://github.com/apvarun/toastify-js\n * @license MIT licensed\n *\n * Copyright (C) 2018 Varun A P\n */.toastify{padding:12px 20px;color:#fff;display:inline-block;box-shadow:0 3px 6px -1px #0000001f,0 10px 36px -4px #4d60e84d;background:-webkit-linear-gradient(315deg,#73a5ff,#5477f5);background:linear-gradient(135deg,#73a5ff,#5477f5);position:fixed;opacity:0;transition:all .4s cubic-bezier(.215,.61,.355,1);border-radius:2px;cursor:pointer;text-decoration:none;max-width:calc(50% - 20px);z-index:2147483647}.toastify.on{opacity:1}.toast-close{background:transparent;border:0;color:#fff;cursor:pointer;font-family:inherit;font-size:1em;opacity:.4;padding:0 5px}.toastify-right{right:15px}.toastify-left{left:15px}.toastify-top{top:-150px}.toastify-bottom{bottom:-150px}.toastify-rounded{border-radius:25px}.toastify-avatar{width:1.5em;height:1.5em;margin:-7px 5px;border-radius:2px}.toastify-center{margin-left:auto;margin-right:auto;left:0;right:0;max-width:fit-content;max-width:-moz-fit-content}@media only screen and (max-width: 360px){.toastify-right,.toastify-left{margin-left:auto;margin-right:auto;left:0;right:0;max-width:fit-content}}\n"},{"type":"external","src":"/_astro/index.Bc44Ci_b.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://agency-template.vbartalis.dev","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/saifur/Documents/works/agency-template-master/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.10.0_@types+node@24.0.3_jiti@2.4.2_lightningcss@1.30.1_rollup@4.44.0_typescript@5.8.3_yaml@2.8.0/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","/home/saifur/Documents/works/agency-template-master/node_modules/.pnpm/@astrojs+vercel@8.2.0_astro@5.10.0_@types+node@24.0.3_jiti@2.4.2_lightningcss@1.30.1_ro_86b5406e121afc4045bae756bd8233dc/node_modules/@astrojs/vercel/dist/image/build-service.js":"chunks/build-service_B-OaySeV.mjs","\u0000@astrojs-manifest":"manifest_CzGg3CBO.mjs","/home/saifur/Documents/works/agency-template-master/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.BK-ANWli.js","/home/saifur/Documents/works/agency-template-master/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts":"_astro/Layout.astro_astro_type_script_index_1_lang.CkCtj6-I.js","/home/saifur/Documents/works/agency-template-master/src/components/sections/CTA.astro?astro&type=script&index=0&lang.ts":"_astro/CTA.astro_astro_type_script_index_0_lang.DMEdjceZ.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/saifur/Documents/works/agency-template-master/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","const e=document.querySelector(\"[data-toggle-nav]\"),t=document.querySelector(\"[data-navbar]\"),a=document.querySelector(\"[data-nav-overlay]\");e&&(e.addEventListener(\"click\",s=>{s.preventDefault(),e.getAttribute(\"data-open-nav\")===\"false\"?(e.setAttribute(\"data-open-nav\",\"true\"),a.setAttribute(\"data-is-visible\",\"true\"),document.body.classList.add(\"!overflow-y-hidden\"),t.style.height=`${t.scrollHeight}px`):(e.setAttribute(\"data-open-nav\",\"false\"),a.setAttribute(\"data-is-visible\",\"false\"),document.body.classList.remove(\"!overflow-y-hidden\"),t.style.height=\"0px\")}),t.addEventListener(\"click\",()=>{e.setAttribute(\"data-open-nav\",\"false\"),a.setAttribute(\"data-is-visible\",\"false\"),document.body.classList.remove(\"!overflow-y-hidden\"),t.style.height=\"0px\"}),a.addEventListener(\"click\",()=>{e.setAttribute(\"data-open-nav\",\"false\"),a.setAttribute(\"data-is-visible\",\"false\"),document.body.classList.remove(\"!overflow-y-hidden\"),t.style.height=\"0px\"}));"],["/home/saifur/Documents/works/agency-template-master/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts","t();const a=document.querySelector(\"[data-switch-theme]\");a.addEventListener(\"click\",e=>{e.preventDefault(),o()});function o(){const e=localStorage.getItem(\"theme\");e===\"light\"&&c(),e===\"dark\"&&m(),e||(console.log(\"previously it was not set\"),t(!0))}function t(e=!1){localStorage.getItem(\"theme\")===\"dark\"||!(\"theme\"in localStorage)&&window.matchMedia(\"(prefers-color-scheme: dark)\").matches?(document.documentElement.classList.add(\"dark\"),e&&localStorage.setItem(\"theme\",\"dark\")):(document.documentElement.classList.remove(\"dark\"),e&&localStorage.setItem(\"theme\",\"light\"))}function c(){localStorage.setItem(\"theme\",\"dark\"),document.documentElement.classList.add(\"dark\")}function m(){localStorage.setItem(\"theme\",\"light\"),document.documentElement.classList.remove(\"dark\")}"]],"assets":["/_astro/hero.E0HuXa_0.avif","/_astro/logo-dark.DnhMeH5-.avif","/_astro/logo.dNnf3fu0.avif","/_astro/plumb.UhePEofT.avif","/_astro/roofing.CasO8Pla.webp","/_astro/arborists.ddHT88xM.avif","/_astro/fix-support.CHa8o359.webp","/_astro/hvac.BRc3w4JR.webp","/_astro/interior.seoBgrE7.avif","/_astro/electrical.BP8isakO.avif","/_astro/lawn.f3toGYLN.avif","/_astro/appliances.CVQZ3pYN.avif","/_astro/drywall.CDwXUreO.webp","/_astro/siding.EewxO6z7.webp","/_astro/index.Bc44Ci_b.css","/favicon.svg","/logo.svg","/_astro/CTA.astro_astro_type_script_index_0_lang.DMEdjceZ.js","/style/custom.css"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"+e+FLYgAOEMDhiL1xURZzJv7GprEBU+f9sQ2YCMa4XE="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
