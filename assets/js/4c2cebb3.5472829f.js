"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3329],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return r?a.createElement(g,o(o({ref:t},c),{},{components:r})):a.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4959:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7294),n=r(9960),i=r(4477),o=r(2263),s=r(643).version.split("."),p=[s[0],s[1]].join(".");const l=function(e){var t=e.to,r=e.children,s=(0,i.E)();return(0,o.default)().siteConfig.presets[0][1].docs.disableVersioning||s.version===p?a.createElement(n.default,{to:"/api/"+t},r):a.createElement(n.default,{to:"/api/"+("current"===s.version?"next":s.version)+"/"+t},r)}},6707:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>y,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=r(1435),s=r(4959);var p=["components"],l={id:"skip-navigation",title:"Skipping navigations for certain requests"},c=void 0,u={unversionedId:"examples/skip-navigation",id:"version-3.1/examples/skip-navigation",title:"Skipping navigations for certain requests",description:"While crawling a website, you may encounter certain resources you'd like to save, but don't need the full power of a crawler to do so (like images delivered through a CDN).",source:"@site/versioned_docs/version-3.1/examples/skip-navigation.mdx",sourceDirName:"examples",slug:"/examples/skip-navigation",permalink:"/docs/examples/skip-navigation",draft:!1,tags:[],version:"3.1",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1675161306,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{id:"skip-navigation",title:"Skipping navigations for certain requests"},sidebar:"docs",previous:{title:"Puppeteer recursive crawl",permalink:"/docs/examples/puppeteer-recursive-crawl"},next:{title:"Upgrading",permalink:"/docs/upgrading"}},d={},m=[],g={toc:m};function y(e){var t=e.components,r=(0,n.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"While crawling a website, you may encounter certain resources you'd like to save, but don't need the full power of a crawler to do so (like images delivered through a CDN)."),(0,i.kt)("p",null,"By combining the ",(0,i.kt)(s.Z,{to:"core/class/Request#skipNavigation",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"Request#skipNavigation"))," option with ",(0,i.kt)(s.Z,{to:"basic-crawler/interface/BasicCrawlingContext#sendRequest",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"sendRequest")),", we can fetch the image from the CDN, and save it to our key-value store without needing to use the full crawler."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For this example, we are using the ",(0,i.kt)(s.Z,{to:"playwright-crawler/class/PlaywrightCrawler",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler"))," to showcase this, but this is available on all the crawlers we provide.")),(0,i.kt)(o.Z,{className:"language-js",mdxType:"CodeBlock"},"import { PlaywrightCrawler, KeyValueStore } from 'crawlee';\n\n// Create a key value store for all images we find\nconst imageStore = await KeyValueStore.open('images');\n\nconst crawler = new PlaywrightCrawler({\n    async requestHandler({ request, page, sendRequest }) {\n        // The request should have the navigation skipped\n        if (request.skipNavigation) {\n            // Request the image and get its buffer back\n            const imageResponse = await sendRequest({ responseType: 'buffer' });\n\n            // Save the image in the key-value store\n            await imageStore.setValue(`${request.userData.key}.png`, imageResponse.body);\n\n            // Prevent executing the rest of the code as we do not need it\n            return;\n        }\n\n        // Get all the image sources in the current page\n        const images = await page.$$eval('img', (imgs) => imgs.map((img) => img.src));\n\n        // Add all the urls as requests for the crawler, giving each image a key\n        await crawler.addRequests(images.map((url, i) => ({ url, skipNavigation: true, userData: { key: i } })));\n    },\n});\n\nawait crawler.addRequests(['https://crawlee.dev']);\n\n// Run the crawler\nawait crawler.run();\n"))}y.isMDXComponent=!0},643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.1.4","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"^3.1.4","@crawlee/browser":"^3.1.4","@crawlee/cheerio":"^3.1.4","@crawlee/cli":"^3.1.2","@crawlee/core":"^3.1.3","@crawlee/http":"^3.1.4","@crawlee/jsdom":"^3.1.4","@crawlee/playwright":"^3.1.4","@crawlee/puppeteer":"^3.1.4","@crawlee/utils":"^3.1.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"<= 2.x","puppeteer":"<= 19.x"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);