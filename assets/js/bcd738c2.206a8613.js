/*! For license information please see bcd738c2.206a8613.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[608],{1426:(e,t,n)=>{var r=n(7378),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,r)&&!u.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:d,props:o,_owner:s.current}}t.jsx=c,t.jsxs=c},4246:(e,t,n)=>{e.exports=n(1426)},497:(e,t,n)=>{n.d(t,{Z:()=>s});var r,i,o=n(7378);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}const s=e=>{let{title:t,titleId:n,...s}=e;return o.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-chevron-down",width:24,height:24,viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round","aria-labelledby":n},s),t?o.createElement("title",{id:n},t):null,r||(r=o.createElement("path",{d:"M0 0h24v24H0z",stroke:"none"})),i||(i=o.createElement("path",{d:"m6 9 6 6 6-6"})))}},8888:(e,t,n)=>{function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,{g:()=>r,v:()=>i})},3963:(e,t,n)=>{n.d(t,{a:()=>a});var r=n(8888),i=n(3284),o=n(4246),a=function(e){return(0,o.jsx)(i.SY.Provider,(0,r.g)({},e))}},5129:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(3284),i=function(e){do{e=e.parentElement}while(e&&!e.hasAttribute(r.gE));return e},o=function(e,t,n){return e?t>0?t-1:n-1:(t+1)%n},a=function(e,t){var n=document.activeElement;if(n&&n.hasAttribute(r.OM)&&i(n)===t.currentTarget)for(var a=t.currentTarget.querySelectorAll("["+r.OM+"]"),s=a.length,u=0;u<s;u++)if(a[u]===n){for(var c=o(e,u,s);i(a[u])!==i(a[c]);)c=o(e,c,s);u!==c&&(t.preventDefault(),a[c].focus());break}},s=function(){var e;return{accordionProps:((e={})[r.gE]="",e.onKeyDown=function(e){return"ArrowUp"===e.key?a(!0,e):"ArrowDown"===e.key&&a(!1,e)},e)}}},6301:(e,t,n)=>{n.d(t,{E:()=>a,e:()=>o});var r=n(7378),i=n(3284);function o(e,t,n){var r=e.stateMap,i=e.mountOnEnter,o=e.initialEntered,a=null!=n?n:o;return r.get(t)||{status:a?"entered":i?"unmounted":"exited",isMounted:!i,isEnter:a,isResolved:!0}}var a=function(){return(0,r.useContext)(i.SY)}},9217:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(3284),i=n(7378),o=0,a=i.useId||function(){var e=(0,i.useState)(),t=e[0],n=e[1];return(0,i.useEffect)((function(){return n(++o)}),[]),t&&r.o6+"-"+t},s=function(e){var t,n=e.state,i=e.toggle,o=a(),s=o&&o+"-";return{buttonProps:((t={id:o})[r.OM]="",t["aria-controls"]=s,t["aria-expanded"]=n.isEnter,t.onClick=i,t),panelProps:{id:s,"aria-labelledby":o,role:"region"}}}},3316:(e,t,n)=>{n.d(t,{l:()=>o});var r=n(7378),i=n(6301),o=function(e){var t=void 0===e?{}:e,n=t.itemKey,o=t.initialEntered,a=(0,r.useRef)(null),s=(0,i.E)(),u=null!=n?n:a.current,c=(0,i.e)(s,u,o),d=s.setItem,l=s.deleteItem,m=s.toggle;return(0,r.useEffect)((function(){var e=null!=n?n:a.current;return d(e,{initialEntered:o}),function(){l(e)}}),[d,l,n,o]),{itemRef:a,state:c,toggle:(0,r.useCallback)((function(e){return m(u,e)}),[m,u])}}},6150:(e,t,n)=>{n.d(t,{n:()=>p});var r=n(8888),i=n(7378),o=["preEnter","entering","entered","preExit","exiting","exited","unmounted"],a=function(e){return e?6:5},s=new Map,u=new Map,c=function(e){var t=e.key,n=e.status,r=e.setStateMap,i=e.latestStateMap,a=e.timeoutId,s=e.onChange;clearTimeout(a);var u,c={_status:u=n,status:o[u],isEnter:u<3,isMounted:6!==u,isResolved:2===u||u>4},d=new Map(i.current);d.set(t,c),r(d),i.current=d,s&&s({key:t,current:c})},d=function(e){var t=void 0===e?{}:e,n=t.allowMultiple,r=t.enter,o=void 0===r||r,d=t.exit,l=void 0===d||d,m=t.preEnter,p=t.preExit,f=t.timeout,v=t.initialEntered,h=t.mountOnEnter,g=t.unmountOnExit,E=t.onStateChange,b=(0,i.useState)(s),y=b[0],w=b[1],x=(0,i.useRef)(y),k=(0,i.useRef)(u),I=function(e){return"object"==typeof e?[e.enter,e.exit]:[e,e]}(f),_=I[0],A=I[1],M=(0,i.useCallback)((function(e,t){var n=(t||{}).initialEntered,r=(void 0===n?v:n)?2:a(h);c({key:e,status:r,setStateMap:w,latestStateMap:x}),k.current.set(e,{})}),[v,h]),O=(0,i.useCallback)((function(e){var t=new Map(x.current);return!!t.delete(e)&&(w(t),x.current=t,k.current.delete(e),!0)}),[]),S=(0,i.useCallback)((function(e){var t=x.current.get(e);if(t){var n=k.current.get(e).timeoutId,r=function(e,t){switch(e){case 1:case 0:return 2;case 4:case 3:return a(t)}}(t._status,g);r&&c({key:e,status:r,setStateMap:w,latestStateMap:x,timeoutId:n,onChange:E})}}),[E,g]),C=(0,i.useCallback)((function(e,t){var r=x.current.get(e);if(r){var i=k.current.get(e),s=function t(n){switch(c({key:e,status:n,setStateMap:w,latestStateMap:x,timeoutId:i.timeoutId,onChange:E}),n){case 1:_>=0&&(i.timeoutId=setTimeout((function(){return S(e)}),_));break;case 4:A>=0&&(i.timeoutId=setTimeout((function(){return S(e)}),A));break;case 0:case 3:i.timeoutId=setTimeout((function(){return t(n+1)}),0)}},u=r._status<=2;"boolean"!=typeof t&&(t=!u),t?u||(s(o?m?0:1:2),!n&&x.current.forEach((function(t,n){return n!==e&&C(n,!1)}))):u&&s(l?p?3:4:a(g))}}),[E,S,n,o,l,m,p,_,A,g]);return{stateMap:y,toggle:C,endTransition:S,setItem:M,deleteItem:O}},l=["transition","transitionTimeout"],m=function(e,t){return!0===e||!(!e||!e[t])},p=function(e){var t=void 0===e?{}:e,n=t.transition,i=t.transitionTimeout,o=(0,r.v)(t,l),a=d((0,r.g)({timeout:i,enter:m(n,"enter"),exit:m(n,"exit"),preEnter:m(n,"preEnter"),preExit:m(n,"preExit")},o));return(0,r.g)({mountOnEnter:!!o.mountOnEnter,initialEntered:!!o.initialEntered},a)}},3969:(e,t,n)=>{n.d(t,{w:()=>o});var r=n(7378),i="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect,o=function(e){var t=e.status,n=e.isResolved,o=(0,r.useState)(),a=o[0],s=o[1],u=(0,r.useRef)(null);return i((function(){("preEnter"===t||"preExit"===t)&&s(u.current.getBoundingClientRect().height)}),[t]),[{height:"preEnter"===t||"exiting"===t?0:"entering"===t||"preExit"===t?a:void 0,overflow:n?void 0:"hidden"},u]}},3284:(e,t,n)=>{n.d(t,{Kj:()=>i,OM:()=>s,SY:()=>u,gE:()=>a,o6:()=>o});var r=n(7378),i="szh-accordion",o="szh-adn",a="data-"+o,s="data-"+o+"-btn",u=(0,r.createContext)({})},6117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>b,default:()=>I,frontMatter:()=>E,metadata:()=>y,toc:()=>x});var r=n(7462),i=n(7378),o=n(3905),a=n(814);var s=n(6150),u=n(5129),c=n(3963),d=n(8966);const l=e=>{let{children:t}=e;const n=(0,s.n)({transition:!0,transitionTimeout:200}),{accordionProps:o}=(0,u.A)();return i.createElement(c.a,{value:n},i.createElement("div",(0,r.Z)({className:d.Z.accordion},o),t))};var m=n(3316),p=n(9217),f=n(3969),v=n(497);const h=e=>{let{header:t,children:n,itemKey:o,initialEntered:a}=e;const{itemRef:s,state:u,toggle:c}=(0,m.l)({itemKey:o,initialEntered:a}),{buttonProps:l,panelProps:h}=(0,p.Z)({state:u,toggle:c}),[g,E]=(0,f.w)(u),{status:b,isMounted:y,isEnter:w}=u;return i.createElement("div",{className:d.Z.item,ref:s},i.createElement("h3",{style:{margin:0}},i.createElement("button",(0,r.Z)({className:w?d.Z.buttonExpanded:d.Z.button,type:"button"},l),t,i.createElement(v.Z,{className:d.Z.chevron}))),y&&i.createElement("div",{className:d.Z.content,style:{display:"exited"===b?"none":void 0,...g}},i.createElement("div",(0,r.Z)({className:d.Z.panel,ref:E},h),n)))};function g(){return i.createElement(l,null,i.createElement(h,{header:"What is Lorem Ipsum?",initialEntered:!0},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),i.createElement(h,{header:"Where does it come from?"},"Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae, accumsan auctor mi."),i.createElement(h,{header:"Why do we use it?"},"Suspendisse massa risus, pretium id interdum in, dictum sit amet ante. Fusce vulputate purus sed tempus feugiat."))}const E={sidebar_position:5},b="Putting together",y={unversionedId:"docs/headless-ui/example",id:"docs/headless-ui/example",title:"Putting together",description:"Now we can use our own Accordion and AccordionItem components as normal. They are",source:"@site/docs/docs/headless-ui/example.mdx",sourceDirName:"docs/headless-ui",slug:"/docs/headless-ui/example",permalink:"/react-accordion/docs/headless-ui/example",draft:!1,editUrl:"https://github.com/szhsin/react-accordion/tree/master/website/docs/docs/headless-ui/example.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Styles",permalink:"/react-accordion/docs/headless-ui/styles"}},w={},x=[],k={toc:x};function I(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"putting-together"},"Putting together"),(0,o.kt)("p",null,"Now we can use our own ",(0,o.kt)("inlineCode",{parentName:"p"},"Accordion")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"AccordionItem")," components as normal. They are\nWAI-ARIA compliant and support keyboard navigation!"),(0,o.kt)(g,{mdxType:"Example"}),(0,o.kt)(a.Z,{language:"jsx",mdxType:"CodeBlock"},"import React from 'react';\nimport Accordion from './Accordion';\nimport AccordionItem from './AccordionItem';\n\nexport default function Example() {\n  return (\n    <Accordion>\n      <AccordionItem header=\"What is Lorem Ipsum?\" initialEntered>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n        eiusmod tempor incididunt ut labore et dolore magna aliqua.\n      </AccordionItem>\n\n      <AccordionItem header=\"Where does it come from?\">\n        Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla\n        vel erat quis sodales. Nam ex enim, eleifend venenatis lectus\n        vitae, accumsan auctor mi.\n      </AccordionItem>\n\n      <AccordionItem header=\"Why do we use it?\">\n        Suspendisse massa risus, pretium id interdum in, dictum sit amet\n        ante. Fusce vulputate purus sed tempus feugiat.\n      </AccordionItem>\n    </Accordion>\n  );\n}\n"))}I.isMDXComponent=!0},8966:(e,t,n)=>{n.d(t,{Z:()=>r});const r={accordion:"accordion_nIGp",item:"item_YcP7",button:"button_lQEz",buttonExpanded:"buttonExpanded_Fmda button_lQEz",chevron:"chevron_Ys3M",content:"content_v0f5",panel:"panel_FAXb"}}}]);