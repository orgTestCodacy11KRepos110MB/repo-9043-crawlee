"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6162],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>w});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),l=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,w=u["".concat(i,".").concat(d)]||u[d]||h[d]||o;return r?a.createElement(w,s(s({ref:t},c),{},{components:r})):a.createElement(w,s({ref:t},c))}));function w(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:n,s[1]=p;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8256:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>p,toc:()=>l});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),s=["components"],p={},i=void 0,l=[{value:"Example usage",id:"example-usage",level:2}],c={toc:l};function u(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provides a framework for the parallel crawling of web pages using plain HTTP requests and ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cheerio"},"cheerio")," HTML parser. The URLs to crawl are fed either from a static list of URLs or from a dynamic queue of URLs enabling recursive crawling of websites."),(0,o.kt)("p",null,"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")," uses raw HTTP requests to download web pages, it is very fast and efficient on data bandwidth. However, if the target website requires JavaScript to display the content, you might need to use ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/puppeteer-crawler/class/PuppeteerCrawler"},"PuppeteerCrawler")," or ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/playwright-crawler/class/PlaywrightCrawler"},"PlaywrightCrawler")," instead, because it loads the pages using full-featured headless Chrome browser."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")," downloads each URL using a plain HTTP request, parses the HTML content using ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cheerio"},"Cheerio")," and then invokes the user-provided ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/cheerio-crawler/interface/CheerioCrawlerOptions#requestHandler"},"CheerioCrawlerOptions.requestHandler")," to extract page data using a ",(0,o.kt)("a",{parentName:"p",href:"https://jquery.com/"},"jQuery"),"-like interface to the parsed HTML DOM."),(0,o.kt)("p",null,"The source URLs are represented using ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/Request"},"Request")," objects that are fed from ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/RequestList"},"RequestList")," or ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/RequestQueue"},"RequestQueue")," instances provided by the ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/cheerio-crawler/interface/CheerioCrawlerOptions#requestList"},"CheerioCrawlerOptions.requestList")," or ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/cheerio-crawler/interface/CheerioCrawlerOptions#requestQueue"},"CheerioCrawlerOptions.requestQueue")," constructor options, respectively."),(0,o.kt)("p",null,"If both ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/cheerio-crawler/interface/CheerioCrawlerOptions#requestList"},"CheerioCrawlerOptions.requestList")," and ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/cheerio-crawler/interface/CheerioCrawlerOptions#requestQueue"},"CheerioCrawlerOptions.requestQueue")," are used, the instance first processes URLs from the ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/RequestList"},"RequestList")," and automatically enqueues all of them to ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/RequestQueue"},"RequestQueue")," before it starts their processing. This ensures that a single URL is not crawled multiple times."),(0,o.kt)("p",null,"The crawler finishes when there are no more ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/Request"},"Request")," objects to crawl."),(0,o.kt)("p",null,"We can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"preNavigationHooks")," to adjust ",(0,o.kt)("inlineCode",{parentName:"p"},"gotOptions"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"preNavigationHooks: [\n    (crawlingContext, gotOptions) => {\n        // ...\n    },\n]\n")),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")," only processes web pages with the ",(0,o.kt)("inlineCode",{parentName:"p"},"text/html")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"application/xhtml+xml")," MIME content types (as reported by the ",(0,o.kt)("inlineCode",{parentName:"p"},"Content-Type")," HTTP header), and skips pages with other content types. If you want the crawler to process other content types, use the ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/cheerio-crawler/interface/CheerioCrawlerOptions#additionalMimeTypes"},"CheerioCrawlerOptions.additionalMimeTypes")," constructor option. Beware that the parsing behavior differs for HTML, XML, JSON and other types of content. For more details, see ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/cheerio-crawler/interface/CheerioCrawlerOptions#requestHandler"},"CheerioCrawlerOptions.requestHandler"),"."),(0,o.kt)("p",null,"New requests are only dispatched when there is enough free CPU and memory available, using the functionality provided by the ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/AutoscaledPool"},"AutoscaledPool")," class. All ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/AutoscaledPool"},"AutoscaledPool")," configuration options can be passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"autoscaledPoolOptions")," parameter of the ",(0,o.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")," constructor. For user convenience, the ",(0,o.kt)("inlineCode",{parentName:"p"},"minConcurrency")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"maxConcurrency")," ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/AutoscaledPool"},"AutoscaledPool")," options are available directly in the ",(0,o.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")," constructor."),(0,o.kt)("h2",{id:"example-usage"},"Example usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const crawler = new CheerioCrawler({\n    requestList,\n    async requestHandler({ request, response, body, contentType, $ }) {\n        const data = [];\n\n        // Do some data extraction from the page with Cheerio.\n        $('.some-collection').each((index, el) => {\n            data.push({ title: $(el).find('.some-title').text() });\n        });\n\n        // Save the data to dataset.\n        await Dataset.pushData({\n            url: request.url,\n            html: body,\n            data,\n        })\n    },\n});\n\nawait crawler.run([\n    'http://www.example.com/page-1',\n    'http://www.example.com/page-2',\n]);\n")))}u.isMDXComponent=!0}}]);