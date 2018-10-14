"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9616],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),i=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=i(r),d=n,f=u["".concat(l,".").concat(d)]||u[d]||h[d]||p;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var i=2;i<p;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5759:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>s,toc:()=>i});var a=r(7462),n=r(3366),p=(r(7294),r(3905)),o=["components"],s={},l=void 0,i=[{value:"Example usage",id:"example-usage",level:2}],c={toc:i};function u(e){var t=e.components,r=(0,n.Z)(e,o);return(0,p.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Provides a framework for the parallel crawling of web pages using plain HTTP requests. The URLs to crawl are fed either from a static list of URLs or from a dynamic queue of URLs enabling recursive crawling of websites."),(0,p.kt)("p",null,"It is very fast and efficient on data bandwidth. However, if the target website requires JavaScript to display the content, you might need to use {",(0,p.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/puppeteer-crawler/class/PuppeteerCrawler"},"PuppeteerCrawler")," or ",(0,p.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/playwright-crawler/class/PlaywrightCrawler"},"PlaywrightCrawler")," instead, because it loads the pages using full-featured headless Chrome browser. ",(0,p.kt)("strong",{parentName:"p"},"This crawler downloads each URL using a plain HTTP request and doesn't do any HTML parsing.")),(0,p.kt)("p",null,"The source URLs are represented using ",(0,p.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/Request"},"Request")," objects that are fed from ",(0,p.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/RequestList"},"RequestList")," or ",(0,p.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/RequestQueue"},"RequestQueue")," instances provided by the ",(0,p.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/http-crawler/interface/HttpCrawlerOptions#requestList"},"HttpCrawlerOptions.requestList")," or ",(0,p.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/http-crawler/interface/HttpCrawlerOptions#requestQueue"},"HttpCrawlerOptions.requestQueue")," constructor options, respectively."),(0,p.kt)("p",null,"If both ",(0,p.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/http-crawler/interface/HttpCrawlerOptions#requestList"},"HttpCrawlerOptions.requestList")," and ",(0,p.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/http-crawler/interface/HttpCrawlerOptions#requestQueue"},"HttpCrawlerOptions.requestQueue")," are used, the instance first processes URLs from the ",(0,p.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/RequestList"},"RequestList")," and automatically enqueues all of them to ",(0,p.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/RequestQueue"},"RequestQueue")," before it starts their processing. This ensures that a single URL is not crawled multiple times."),(0,p.kt)("p",null,"The crawler finishes when there are no more ",(0,p.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/Request"},"Request")," objects to crawl."),(0,p.kt)("p",null,"We can use the ",(0,p.kt)("inlineCode",{parentName:"p"},"preNavigationHooks")," to adjust ",(0,p.kt)("inlineCode",{parentName:"p"},"gotOptions"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"preNavigationHooks: [\n    (crawlingContext, gotOptions) => {\n        // ...\n    },\n]\n")),(0,p.kt)("p",null,"By default, ",(0,p.kt)("inlineCode",{parentName:"p"},"HttpCrawler")," only processes web pages with the ",(0,p.kt)("inlineCode",{parentName:"p"},"text/html")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"application/xhtml+xml")," MIME content types (as reported by the ",(0,p.kt)("inlineCode",{parentName:"p"},"Content-Type")," HTTP header), and skips pages with other content types. If you want the crawler to process other content types, use the ",(0,p.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/http-crawler/interface/HttpCrawlerOptions#additionalMimeTypes"},"HttpCrawlerOptions.additionalMimeTypes")," constructor option. Beware that the parsing behavior differs for HTML, XML, JSON and other types of content. For more details, see ",(0,p.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/http-crawler/interface/HttpCrawlerOptions#requestHandler"},"HttpCrawlerOptions.requestHandler"),"."),(0,p.kt)("p",null,"New requests are only dispatched when there is enough free CPU and memory available, using the functionality provided by the ",(0,p.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/AutoscaledPool"},"AutoscaledPool")," class. All ",(0,p.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/AutoscaledPool"},"AutoscaledPool")," configuration options can be passed to the ",(0,p.kt)("inlineCode",{parentName:"p"},"autoscaledPoolOptions")," parameter of the ",(0,p.kt)("inlineCode",{parentName:"p"},"HttpCrawler")," constructor. For user convenience, the ",(0,p.kt)("inlineCode",{parentName:"p"},"minConcurrency")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"maxConcurrency")," ",(0,p.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/AutoscaledPool"},"AutoscaledPool")," options are available directly in the ",(0,p.kt)("inlineCode",{parentName:"p"},"HttpCrawler")," constructor."),(0,p.kt)("h2",{id:"example-usage"},"Example usage"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"import { HttpCrawler, Dataset } from '@crawlee/http';\n\nconst crawler = new HttpCrawler({\n    requestList,\n    async requestHandler({ request, response, body, contentType }) {\n        // Save the data to dataset.\n        await Dataset.pushData({\n            url: request.url,\n            html: body,\n        });\n    },\n});\n\nawait crawler.run([\n    'http://www.example.com/page-1',\n    'http://www.example.com/page-2',\n]);\n")))}u.isMDXComponent=!0}}]);