"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[94895],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},23730:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={sidebar_label:"BrowserFetcher"},p="BrowserFetcher class",i={unversionedId:"api/puppeteer.browserfetcher",id:"version-19.6.3/api/puppeteer.browserfetcher",title:"BrowserFetcher class",description:"BrowserFetcher can download and manage different versions of Chromium and Firefox.",source:"@site/versioned_docs/version-19.6.3/api/puppeteer.browserfetcher.md",sourceDirName:"api",slug:"/api/puppeteer.browserfetcher",permalink:"/api/puppeteer.browserfetcher",draft:!1,tags:[],version:"19.6.3",frontMatter:{sidebar_label:"BrowserFetcher"},sidebar:"api",previous:{title:"Puppeteer.unregisterCustomQueryHandler",permalink:"/api/puppeteer.puppeteer.unregistercustomqueryhandler"},next:{title:"BrowserFetcher.(constructor)",permalink:"/api/puppeteer.browserfetcher._constructor_"}},s={},c=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}],u={toc:c};function d(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"browserfetcher-class"}),"BrowserFetcher class"),(0,n.kt)("p",null,"BrowserFetcher can download and manage different versions of Chromium and Firefox."),(0,n.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"export declare class BrowserFetcher\n")),(0,n.kt)("h2",a({},{id:"remarks"}),"Remarks"),(0,n.kt)("p",null,"BrowserFetcher is not designed to work concurrently with other instances of BrowserFetcher that share the same downloads directory."),(0,n.kt)("h2",a({},{id:"example"}),"Example"),(0,n.kt)("p",null,"An example of using BrowserFetcher to download a specific version of Chromium and running Puppeteer against it:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"const browserFetcher = new BrowserFetcher({path: 'path/to/download/folder'});\nconst revisionInfo = await browserFetcher.download('533271');\nconst browser = await puppeteer.launch({\n  executablePath: revisionInfo.executablePath,\n});\n")),(0,n.kt)("h2",a({},{id:"constructors"}),"Constructors"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Constructor"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Modifiers"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.browserfetcher._constructor_"}),"(constructor)(options)")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Constructs a browser fetcher for the given options.")))),(0,n.kt)("h2",a({},{id:"methods"}),"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Method"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Modifiers"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.browserfetcher.candownload"}),"canDownload(revision)")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Initiates a HEAD request to check if the revision is available.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.browserfetcher.download"}),"download(revision, progressCallback)")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Initiates a GET request to download the revision from the host.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.browserfetcher.host"}),"host()")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.browserfetcher.localrevisions"}),"localRevisions()")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.browserfetcher.platform"}),"platform()")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.browserfetcher.product"}),"product()")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.browserfetcher.remove"}),"remove(revision)")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.browserfetcher.revisioninfo"}),"revisionInfo(revision)")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}))))))}d.isMDXComponent=!0}}]);