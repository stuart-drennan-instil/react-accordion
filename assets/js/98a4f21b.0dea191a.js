/*! For license information please see 98a4f21b.0dea191a.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[882],{1426:(e,t,n)=>{var r=n(7378),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,o={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,r)&&!l.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:u,ref:c,props:o,_owner:s.current}}t.jsx=u,t.jsxs=u},4246:(e,t,n)=>{e.exports=n(1426)},497:(e,t,n)=>{n.d(t,{Z:()=>s});var r,a,o=n(7378);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}const s=e=>{let{title:t,titleId:n,...s}=e;return o.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-chevron-down",width:24,height:24,viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round","aria-labelledby":n},s),t?o.createElement("title",{id:n},t):null,r||(r=o.createElement("path",{d:"M0 0h24v24H0z",stroke:"none"})),a||(a=o.createElement("path",{d:"m6 9 6 6 6-6"})))}},8888:(e,t,n)=>{function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{g:()=>r,v:()=>a})},3963:(e,t,n)=>{n.d(t,{a:()=>i});var r=n(8888),a=n(3284),o=n(4246),i=function(e){return(0,o.jsx)(a.SY.Provider,(0,r.g)({},e))}},5129:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(3284),a=function(e){do{e=e.parentElement}while(e&&!e.hasAttribute(r.gE));return e},o=function(e,t,n){return e?t>0?t-1:n-1:(t+1)%n},i=function(e,t){var n=document.activeElement;if(n&&n.hasAttribute(r.OM)&&a(n)===t.currentTarget)for(var i=t.currentTarget.querySelectorAll("["+r.OM+"]"),s=i.length,l=0;l<s;l++)if(i[l]===n){for(var u=o(e,l,s);a(i[l])!==a(i[u]);)u=o(e,u,s);l!==u&&(t.preventDefault(),i[u].focus());break}},s=function(){var e;return{accordionProps:((e={})[r.gE]="",e.onKeyDown=function(e){return"ArrowUp"===e.key?i(!0,e):"ArrowDown"===e.key&&i(!1,e)},e)}}},6301:(e,t,n)=>{n.d(t,{E:()=>i,e:()=>o});var r=n(7378),a=n(3284);function o(e,t,n){var r=e.stateMap,a=e.mountOnEnter,o=e.initialEntered,i=null!=n?n:o;return r.get(t)||{status:i?"entered":a?"unmounted":"exited",isMounted:!a,isEnter:i,isResolved:!0}}var i=function(){return(0,r.useContext)(a.SY)}},9217:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(3284),a=n(7378),o=0,i=a.useId||function(){var e=(0,a.useState)(),t=e[0],n=e[1];return(0,a.useEffect)((function(){return n(++o)}),[]),t&&r.o6+"-"+t},s=function(e){var t,n=e.state,a=e.toggle,o=i(),s=o&&o+"-";return{buttonProps:((t={id:o})[r.OM]="",t["aria-controls"]=s,t["aria-expanded"]=n.isEnter,t.onClick=a,t),panelProps:{id:s,"aria-labelledby":o,role:"region"}}}},3316:(e,t,n)=>{n.d(t,{l:()=>o});var r=n(7378),a=n(6301),o=function(e){var t=void 0===e?{}:e,n=t.itemKey,o=t.initialEntered,i=(0,r.useRef)(null),s=(0,a.E)(),l=null!=n?n:i.current,u=(0,a.e)(s,l,o),c=s.setItem,d=s.deleteItem,m=s.toggle;return(0,r.useEffect)((function(){var e=null!=n?n:i.current;return c(e,{initialEntered:o}),function(){d(e)}}),[c,d,n,o]),{itemRef:i,state:u,toggle:(0,r.useCallback)((function(e){return m(l,e)}),[m,l])}}},6150:(e,t,n)=>{n.d(t,{n:()=>p});var r=n(8888),a=n(7378),o=["preEnter","entering","entered","preExit","exiting","exited","unmounted"],i=function(e){return e?6:5},s=new Map,l=new Map,u=function(e){var t=e.key,n=e.status,r=e.setStateMap,a=e.latestStateMap,i=e.timeoutId,s=e.onChange;clearTimeout(i);var l,u={_status:l=n,status:o[l],isEnter:l<3,isMounted:6!==l,isResolved:2===l||l>4},c=new Map(a.current);c.set(t,u),r(c),a.current=c,s&&s({key:t,current:u})},c=function(e){var t=void 0===e?{}:e,n=t.allowMultiple,r=t.enter,o=void 0===r||r,c=t.exit,d=void 0===c||c,m=t.preEnter,p=t.preExit,f=t.timeout,v=t.initialEntered,h=t.mountOnEnter,g=t.unmountOnExit,b=t.onStateChange,y=(0,a.useState)(s),E=y[0],k=y[1],w=(0,a.useRef)(E),x=(0,a.useRef)(l),N=function(e){return"object"==typeof e?[e.enter,e.exit]:[e,e]}(f),I=N[0],A=N[1],T=(0,a.useCallback)((function(e,t){var n=(t||{}).initialEntered,r=(void 0===n?v:n)?2:i(h);u({key:e,status:r,setStateMap:k,latestStateMap:w}),x.current.set(e,{})}),[v,h]),O=(0,a.useCallback)((function(e){var t=new Map(w.current);return!!t.delete(e)&&(k(t),w.current=t,x.current.delete(e),!0)}),[]),_=(0,a.useCallback)((function(e){var t=w.current.get(e);if(t){var n=x.current.get(e).timeoutId,r=function(e,t){switch(e){case 1:case 0:return 2;case 4:case 3:return i(t)}}(t._status,g);r&&u({key:e,status:r,setStateMap:k,latestStateMap:w,timeoutId:n,onChange:b})}}),[b,g]),S=(0,a.useCallback)((function(e,t){var r=w.current.get(e);if(r){var a=x.current.get(e),s=function t(n){switch(u({key:e,status:n,setStateMap:k,latestStateMap:w,timeoutId:a.timeoutId,onChange:b}),n){case 1:I>=0&&(a.timeoutId=setTimeout((function(){return _(e)}),I));break;case 4:A>=0&&(a.timeoutId=setTimeout((function(){return _(e)}),A));break;case 0:case 3:a.timeoutId=setTimeout((function(){return t(n+1)}),0)}},l=r._status<=2;"boolean"!=typeof t&&(t=!l),t?l||(s(o?m?0:1:2),!n&&w.current.forEach((function(t,n){return n!==e&&S(n,!1)}))):l&&s(d?p?3:4:i(g))}}),[b,_,n,o,d,m,p,I,A,g]);return{stateMap:E,toggle:S,endTransition:_,setItem:T,deleteItem:O}},d=["transition","transitionTimeout"],m=function(e,t){return!0===e||!(!e||!e[t])},p=function(e){var t=void 0===e?{}:e,n=t.transition,a=t.transitionTimeout,o=(0,r.v)(t,d),i=c((0,r.g)({timeout:a,enter:m(n,"enter"),exit:m(n,"exit"),preEnter:m(n,"preEnter"),preExit:m(n,"preExit")},o));return(0,r.g)({mountOnEnter:!!o.mountOnEnter,initialEntered:!!o.initialEntered},i)}},3969:(e,t,n)=>{n.d(t,{w:()=>o});var r=n(7378),a="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect,o=function(e){var t=e.status,n=e.isResolved,o=(0,r.useState)(),i=o[0],s=o[1],l=(0,r.useRef)(null);return a((function(){("preEnter"===t||"preExit"===t)&&s(l.current.getBoundingClientRect().height)}),[t]),[{height:"preEnter"===t||"exiting"===t?0:"entering"===t||"preExit"===t?i:void 0,overflow:n?void 0:"hidden"},l]}},3284:(e,t,n)=>{n.d(t,{Kj:()=>a,OM:()=>s,SY:()=>l,gE:()=>i,o6:()=>o});var r=n(7378),a="szh-accordion",o="szh-adn",i="data-"+o,s="data-"+o+"-btn",l=(0,r.createContext)({})},3253:(e,t,n)=>{n.d(t,{UQ:()=>j,Qd:()=>P,Hv:()=>M,nT:()=>i.n,w8:()=>C});var r=n(7462),a=n(7378),o=n(8888),i=n(6150),s=n(3284),l=function(e,t,n){return function(r,a){var o=t?e+"__"+t:e,i=o;n&&Object.keys(n).forEach((function(e){var t=n[e];t&&(i+=" "+o+"--"+(!0===t?e:e+"-"+t))}));var s="function"==typeof r?r(a):r;return"string"==typeof s&&(s=s.trim())&&(i+=" "+s),i}},u=function(e,t){if(!t)return e;var n=(0,o.g)({},e);return Object.keys(t).forEach((function(r){var a=e[r],o=t[r];n[r]="function"==typeof o&&a?function(){a.apply(void 0,arguments),o.apply(void 0,arguments)}:o})),n},c=n(3963),d=n(5129),m=n(4246),p=["providerValue","className"],f=(0,a.forwardRef)((function(e,t){var n=e.providerValue,r=e.className,a=(0,o.v)(e,p),i=(0,d.A)().accordionProps;return(0,m.jsx)(c.a,{value:n,children:(0,m.jsx)("div",(0,o.g)({},u(i,a),{ref:t,className:l(s.Kj)(r)}))})}));f.displayName="ControlledAccordion";var v=["allowMultiple","initialEntered","mountOnEnter","unmountOnExit","transition","transitionTimeout","onStateChange"],h=(0,a.forwardRef)((function(e,t){var n=e.allowMultiple,r=e.initialEntered,a=e.mountOnEnter,s=e.unmountOnExit,l=e.transition,u=e.transitionTimeout,c=e.onStateChange,d=(0,o.v)(e,v),p=(0,i.n)({allowMultiple:n,initialEntered:r,mountOnEnter:a,unmountOnExit:s,transition:l,transitionTimeout:u,onStateChange:c});return(0,m.jsx)(f,(0,o.g)({},d,{ref:t,providerValue:p}))}));h.displayName="Accordion";var g=n(9217),b=n(3969);function y(e,t){"function"==typeof e?e(t):e.current=t}function E(e,t){return(0,a.useMemo)((function(){return e?t?function(n){y(e,n),y(t,n)}:e:t}),[e,t])}var k=n(3316),w=["itemKey","initialEntered"],x=function(e){var t=(0,a.forwardRef)((function(t,n){var r=t.itemKey,a=t.initialEntered,i=(0,o.v)(t,w);return(0,m.jsx)(e,(0,o.g)({forwardedRef:n},i,(0,k.l)({itemKey:r,initialEntered:a})))}));return t.displayName="WithAccordionItem",t},N=["forwardedRef","itemRef","state","toggle","className","header","headingTag","headingProps","buttonProps","contentProps","panelProps","children"],I=function(e,t){return"function"==typeof e?e(t):e},A=(0,a.memo)((function(e){var t=e.forwardedRef,n=e.itemRef,r=e.state,i=e.toggle,c=e.className,d=e.header,p=e.headingTag,f=e.headingProps,v=e.buttonProps,h=e.contentProps,y=e.panelProps,k=e.children,w=(0,o.v)(e,N),x={state:r,toggle:i},A=(0,g.Z)(x),T=A.buttonProps,O=A.panelProps,_=(0,b.w)(r),S=_[0],C=_[1],j=E(y&&y.ref,C),M=r.status,P=r.isMounted,R=r.isEnter;return(0,m.jsxs)("div",(0,o.g)({},w,{ref:E(t,n),className:l(s.Kj,"item",{status:M,expanded:R})(c,r),children:[(0,a.createElement)(p||"h3",(0,o.g)({},f,{style:(0,o.g)({margin:0},f&&f.style),className:l(s.Kj,"item-heading")(f&&f.className,r)}),(0,m.jsx)("button",(0,o.g)({},u(T,v),{type:"button",className:l(s.Kj,"item-btn")(v&&v.className,r),children:I(d,x)}))),P&&(0,m.jsx)("div",(0,o.g)({},h,{style:(0,o.g)({display:"exited"===M?"none":void 0},S,h&&h.style),className:l(s.Kj,"item-content")(h&&h.className,r),children:(0,m.jsx)("div",(0,o.g)({},u(O,y),{ref:j,className:l(s.Kj,"item-panel")(y&&y.className,r),children:I(k,x)}))}))]}))}));A.displayName="AccordionItem";var T=x(A),O=n(497),_=n(8966),S=n(6301),C=function(){var e=(0,S.E)();return{getItemState:function(t,n){var r=(void 0===n?{}:n).initialEntered;return(0,S.e)(e,t,r)},toggle:e.toggle}};const j=e=>a.createElement(h,(0,r.Z)({},e,{className:_.Z.accordion,transition:!0,transitionTimeout:200})),M=e=>a.createElement(f,(0,r.Z)({},e,{className:_.Z.accordion})),P=e=>a.createElement(T,(0,r.Z)({},e,{header:t=>a.createElement(a.Fragment,null,"function"==typeof e.header?e.header(t):e.header,a.createElement(O.Z,{className:_.Z.chevron})),className:_.Z.item,buttonProps:{className:e=>{let{isEnter:t}=e;return t?_.Z.buttonExpanded:_.Z.button}},contentProps:{className:_.Z.content},panelProps:{className:_.Z.panel}}))},9910:(e,t,n)=>{n.d(t,{w:()=>r});const r=e=>e.replace("import React from 'react';\n","").replace("from '../accordion'","from '@szhsin/react-accordion'")},6702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>w,default:()=>T,frontMatter:()=>k,metadata:()=>x,toc:()=>I});var r=n(7462),a=n(7378),o=n(3905),i=n(6010),s=n(2389),l=n(7392),u=n(7094),c=n(2466);const d="tabList__CuJ",m="tabItem_LNqP";function p(e){var t,n;const{lazy:o,block:s,defaultValue:p,values:f,groupId:v,className:h}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:g.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,l.l)(b,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const E=null===p?p:null!=(t=null!=p?p:null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)?t:g[0].props.value;if(null!==E&&!b.some((e=>e.value===E)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+E+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:w}=(0,u.U)(),[x,N]=(0,a.useState)(E),I=[],{blockElementScrollPositionUntilNextRender:A}=(0,c.o5)();if(null!=v){const e=k[v];null!=e&&e!==x&&b.some((t=>t.value===e))&&N(e)}const T=e=>{const t=e.currentTarget,n=I.indexOf(t),r=b[n].value;r!==x&&(A(t),N(r),null!=v&&w(v,String(r)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=I.indexOf(e.currentTarget)+1;n=null!=(r=I[t])?r:I[0];break}case"ArrowLeft":{var a;const t=I.indexOf(e.currentTarget)-1;n=null!=(a=I[t])?a:I[I.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},h)},b.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>I.push(e),onKeyDown:O,onFocus:T,onClick:T},o,{className:(0,i.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(g.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function f(e){const t=(0,s.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}const v="tabItem_Ymn6";function h(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(v,r),hidden:n},t)}var g=n(814);var b=n(9910),y=n(3253);function E(){return a.createElement(y.UQ,null,a.createElement(y.Qd,{header:"What is Lorem Ipsum?"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),a.createElement(y.Qd,{header:"Where does it come from?"},"Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae, accumsan auctor mi."),a.createElement(y.Qd,{header:"Why do we use it?"},"Suspendisse massa risus, pretium id interdum in, dictum sit amet ante. Fusce vulputate purus sed tempus feugiat."))}const k={sidebar_position:1},w="Getting Started",x={unversionedId:"docs/getting-started",id:"docs/getting-started",title:"Getting Started",description:"Install",source:"@site/docs/docs/getting-started.mdx",sourceDirName:"docs",slug:"/docs/getting-started",permalink:"/react-accordion/docs/getting-started",draft:!1,editUrl:"https://github.com/szhsin/react-accordion/tree/master/website/docs/docs/getting-started.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",next:{title:"Allowing multiple",permalink:"/react-accordion/docs/allow-multiple"}},N={},I=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Accessibility",id:"accessibility",level:2}],A={toc:I};function T(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},A,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)(f,{mdxType:"Tabs"},(0,o.kt)(h,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @szhsin/react-accordion\n"))),(0,o.kt)(h,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @szhsin/react-accordion\n")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"An accordion is created by wrapping any number of ",(0,o.kt)("inlineCode",{parentName:"p"},"AccordionItem")," components inside an\n",(0,o.kt)("inlineCode",{parentName:"p"},"Accordion")," component."),(0,o.kt)("p",null,"By default, only one accordion item can be expanded at one time."),(0,o.kt)(E,{mdxType:"Basic"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When focus is on an accordion header, you may use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ArrowDown")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ArrowUp")," keys to\nmove focus to the next or previous accordion header.")),(0,o.kt)(g.Z,{language:"jsx",mdxType:"CodeBlock"},(0,b.w)('import React from \'react\';\nimport { Accordion, AccordionItem } from \'../accordion\';\n\nexport default function Example() {\n  return (\n    <Accordion>\n      <AccordionItem header="What is Lorem Ipsum?">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n        eiusmod tempor incididunt ut labore et dolore magna aliqua.\n      </AccordionItem>\n\n      <AccordionItem header="Where does it come from?">\n        Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla\n        vel erat quis sodales. Nam ex enim, eleifend venenatis lectus\n        vitae, accumsan auctor mi.\n      </AccordionItem>\n\n      <AccordionItem header="Why do we use it?">\n        Suspendisse massa risus, pretium id interdum in, dictum sit amet\n        ante. Fusce vulputate purus sed tempus feugiat.\n      </AccordionItem>\n    </Accordion>\n  );\n}\n')),(0,o.kt)("p",null,"Or, if your data is already in an array:"),(0,o.kt)(g.Z,{language:"jsx",mdxType:"CodeBlock"},(0,b.w)("import React from 'react';\nimport { Accordion, AccordionItem } from '../accordion';\n\nconst items = [\n  {\n    header: 'What is Lorem Ipsum?',\n    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing...'\n  },\n  {\n    header: 'Where does it come from?',\n    content: 'Quisque eget luctus mi, vehicula mollis lorem...'\n  },\n  {\n    header: 'Why do we use it?',\n    content: 'Suspendisse massa risus, pretium id interdum in...'\n  }\n];\n\nexport default function Example() {\n  return (\n    <Accordion>\n      {items.map(({ header, content }, i) => (\n        <AccordionItem header={header} key={i}>\n          {content}\n        </AccordionItem>\n      ))}\n    </Accordion>\n  );\n}\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Although the ",(0,o.kt)("inlineCode",{parentName:"p"},"header")," prop of ",(0,o.kt)("inlineCode",{parentName:"p"},"AccordionItem")," looks like some simple text content, you may\nprovide it with any JSX elements or React components, allowing the item header to be\n",(0,o.kt)("a",{parentName:"p",href:"./customising-header"},"freely customised"),".")),(0,o.kt)("h2",{id:"accessibility"},"Accessibility"),(0,o.kt)("p",null,"This library implements WAI-ARIA roles, states, properties, and keyboard interaction,\nwhich is compliant with the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/ARIA/apg/patterns/accordion/"},"Accordion Pattern"),"."))}T.isMDXComponent=!0},8966:(e,t,n)=>{n.d(t,{Z:()=>r});const r={accordion:"accordion_nIGp",item:"item_YcP7",button:"button_lQEz",buttonExpanded:"buttonExpanded_Fmda button_lQEz",chevron:"chevron_Ys3M",content:"content_v0f5",panel:"panel_FAXb"}}}]);