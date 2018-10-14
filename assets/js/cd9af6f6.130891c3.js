"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9654],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(h,l(l({ref:t},p),{},{components:r})):n.createElement(h,l({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(6010);const o="tabItem_Ymn6";function l(e){var t=e.children,r=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(7462),a=r(7294),o=r(6010),l=r(2389),i=r(7392),s=r(7094),c=r(2466);const p="tabList__CuJ",u="tabItem_LNqP";function d(e){var t,r,l=e.lazy,d=e.block,m=e.defaultValue,h=e.values,g=e.groupId,f=e.className,w=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:w.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.l)(y,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(r=w.find((function(e){return e.props.default})))?void 0:r.props.value)?t:w[0].props.value;if(null!==b&&!y.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,s.U)(),T=k.tabGroupChoices,C=k.setTabGroupChoices,x=(0,a.useState)(b),N=x[0],P=x[1],O=[],S=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var j=T[g];null!=j&&j!==N&&y.some((function(e){return e.value===j}))&&P(j)}var I=function(e){var t=e.currentTarget,r=O.indexOf(t),n=y[r].value;n!==N&&(S(t),P(n),null!=g&&C(g,String(n)))},E=function(e){var t,r=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":var n,a=O.indexOf(e.currentTarget)+1;r=null!=(n=O[a])?n:O[0];break;case"ArrowLeft":var o,l=O.indexOf(e.currentTarget)-1;r=null!=(o=O[l])?o:O[O.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f)},y.map((function(e){var t=e.value,r=e.label,l=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return O.push(e)},onKeyDown:E,onClick:I},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":N===t})}),null!=r?r:t)}))),l?(0,a.cloneElement)(w.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},w.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function m(e){var t=(0,l.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},7011:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>d,toc:()=>h});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=r(5488),i=r(5162),s=r(1435);var c=["components"],p={id:"javascript-rendering",title:"JavaScript rendering",description:"Your first steps into the world of scraping with Crawlee"},u=void 0,d={unversionedId:"guides/javascript-rendering",id:"guides/javascript-rendering",title:"JavaScript rendering",description:"Your first steps into the world of scraping with Crawlee",source:"@site/../docs/guides/javascript-rendering.mdx",sourceDirName:"guides",slug:"/guides/javascript-rendering",permalink:"/docs/next/guides/javascript-rendering",draft:!1,tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1675161306,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{id:"javascript-rendering",title:"JavaScript rendering",description:"Your first steps into the world of scraping with Crawlee"},sidebar:"docs",previous:{title:"CheerioCrawler",permalink:"/docs/next/guides/cheerio-crawler-guide"},next:{title:"Proxy Management",permalink:"/docs/next/guides/proxy-management"}},m={},h=[{value:"Headless browsers",id:"headless-browsers",level:2},{value:"Waiting for elements to render",id:"waiting-for-elements-to-render",level:2},{value:"We&#39;re not kidding",id:"were-not-kidding",level:3}],g={toc:h};function f(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"JavaScript rendering is the process of executing JavaScript on a page to make changes in the page's structure or content. It's also called client-side rendering, the opposite of server-side rendering. Some modern websites render on the client, some on the server and many cutting edge websites render some things on the server and other things on the client."),(0,o.kt)("p",null,"The Crawlee website does not use JavaScript rendering to display its content, so we have to look for an example elsewhere. ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"Apify Store")," is a library of scrapers and automations called ",(0,o.kt)("strong",{parentName:"p"},"actors")," that anyone can grab and use for free. It uses JavaScript rendering to display the list of actors, so let's use it to demonstrate how it works."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/main.mjs"',title:'"src/main.mjs"'},"import { CheerioCrawler } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    async requestHandler({ $, request }) {\n        // Extract text content of an actor card\n        const actorText = $('.ActorStoreItem').text();\n        console.log(`ACTOR: ${actorText}`);\n    }\n})\n\nawait crawler.run(['https://apify.com/store']);\n")),(0,o.kt)("p",null,"Run the code, and you'll see that the crawler won't print the content of the actor card."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},"ACTOR:\n")),(0,o.kt)("p",null,"That's because Apify Store uses client-side JavaScript to render its content and ",(0,o.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")," can't execute it, so the text never appears in the page's HTML."),(0,o.kt)("p",null,"You can confirm this using Chrome DevTools. If you go to ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"https://apify.com/store"),", right-click anywhere in the page, select ",(0,o.kt)("strong",{parentName:"p"},"View Page Source")," and search for ",(0,o.kt)("strong",{parentName:"p"},"ActorStoreItem")," you won't find any results. Then, if you right-click again, select ",(0,o.kt)("strong",{parentName:"p"},"Inspect")," and search for the same ",(0,o.kt)("strong",{parentName:"p"},"ActorStoreItem"),", you will find many of them."),(0,o.kt)("p",null,"How's this possible? Because ",(0,o.kt)("strong",{parentName:"p"},"View Page Source")," shows the original HTML, before any JavaScript executions. That's what ",(0,o.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")," gets. Whereas with ",(0,o.kt)("strong",{parentName:"p"},"Inspect")," you see the current HTML - after JavaScript execution. When you understand this, it's not a huge surprise that ",(0,o.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")," can't find the data. For that we need a headless browser."),(0,o.kt)("h2",{id:"headless-browsers"},"Headless browsers"),(0,o.kt)("p",null,"To get the contents of ",(0,o.kt)("inlineCode",{parentName:"p"},".ActorStoreItem"),", you will have to use a headless browser. You can choose from two libraries to control your browser: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer",target:"_blank",rel:"noopener"},"Puppeteer")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright",target:"_blank",rel:"noopener"},"Playwright"),". The choice is simple. If you know one of them, choose the one you know. If you know both, or none, choose Playwright, because it's better in most cases."),(0,o.kt)("h2",{id:"waiting-for-elements-to-render"},"Waiting for elements to render"),(0,o.kt)("p",null,"No matter which library you pick, here's example code for both. Playwright is a little more pleasant to use, but both libraries will get the job done. The big difference between them is that Playwright will automatically wait for elements to appear, whereas in Puppeteer, you have to explicitly wait for them."),(0,o.kt)(l.Z,{groupId:"javascript-rendering",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"playwright",label:"PlaywrightCrawler",mdxType:"TabItem"},(0,o.kt)(s.Z,{language:"js",title:"src/main.mjs",mdxType:"CodeBlock"},"import { PlaywrightCrawler } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    async requestHandler({ page }) {\n        // page.locator points to an element in the DOM\n        // using a CSS selector, but it does not access it yet.\n        const actorCard = page.locator('.ActorStoreItem').first();\n        // Upon calling one of the locator methods Playwright\n        // waits for the element to render and then accesses it.\n        const actorText = await actorCard.textContent();\n        console.log(`ACTOR: ${actorText}`);\n    },\n});\n\nawait crawler.run(['https://apify.com/store']);\n")),(0,o.kt)(i.Z,{value:"puppeteer",label:"PuppeteerCrawler",mdxType:"TabItem"},(0,o.kt)(s.Z,{language:"js",title:"src/main.mjs",mdxType:"CodeBlock"},"import { PuppeteerCrawler } from 'crawlee';\n\nconst crawler = new PuppeteerCrawler({\n    async requestHandler({ page }) {\n        // Puppeteer does not have the automatic waiting functionality\n        // of Playwright, so we have to explicitly wait for the element.\n        await page.waitForSelector('.ActorStoreItem');\n        // Puppeteer does not have helper methods like locator.textContent,\n        // so we have to manually extract the value using in-page JavaScript.\n        const actorText = await page.$eval('.ActorStoreItem', (el) => {\n            return el.textContent;\n        });\n        console.log(`ACTOR: ${actorText}`);\n    },\n});\n\nawait crawler.run(['https://apify.com/store']);\n"))),(0,o.kt)("p",null,"When you run the code, you'll see the ",(0,o.kt)("em",{parentName:"p"},"badly formatted")," content of the first actor card printed to console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},"ACTOR: Web Scraperapify/web-scraperCrawls arbitrary websites using [...]\n")),(0,o.kt)("h3",{id:"were-not-kidding"},"We're not kidding"),(0,o.kt)("p",null,"If you don't believe us that the elements need to be waited for, run the following code which skips the waiting."),(0,o.kt)(l.Z,{groupId:"javascript-rendering",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"playwright",label:"PlaywrightCrawler",mdxType:"TabItem"},(0,o.kt)(s.Z,{language:"js",title:"src/main.mjs",mdxType:"CodeBlock"},"import { PlaywrightCrawler } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    async requestHandler({ page }) {\n        // Here we don't wait for the selector and immediately\n        // extract the text content from the page.\n        const actorText = await page.$eval('.ActorStoreItem', (el) => {\n            return el.textContent;\n        });\n        console.log(`ACTOR: ${actorText}`);\n    },\n});\n\nawait crawler.run(['https://apify.com/store']);\n")),(0,o.kt)(i.Z,{value:"puppeteer",label:"PuppeteerCrawler",mdxType:"TabItem"},(0,o.kt)(s.Z,{language:"js",title:"src/main.mjs",mdxType:"CodeBlock"},"import { PuppeteerCrawler } from 'crawlee';\n\nconst crawler = new PuppeteerCrawler({\n    async requestHandler({ page }) {\n        // Here we don't wait for the selector and immediately\n        // extract the text content from the page.\n        const actorText = await page.$eval('.ActorStoreItem', (el) => {\n            return el.textContent;\n        });\n        console.log(`ACTOR: ${actorText}`);\n    },\n});\n\nawait crawler.run(['https://apify.com/store']);\n"))),(0,o.kt)("p",null,"In both cases, the request will be retried a few times and eventually fail with an error like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},'ERROR [...] Error: failed to find element matching selector ".ActorStoreItem"\n')),(0,o.kt)("p",null,"That's because when you try to access the element in the browser, it's not been rendered in the DOM yet."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This guide only touches the concept of JavaScript rendering and use of headless browsers. To learn more, continue with the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.apify.com/academy/puppeteer-playwright",target:"_blank",rel:"noopener"},"Puppeteer & Playwright course")," in the Apify Academy. ",(0,o.kt)("strong",{parentName:"p"},"It's free and open-source")," \u2764\ufe0f.")))}f.isMDXComponent=!0}}]);