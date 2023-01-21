"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[833],{5133:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=n(7462),a=(n(7378),n(3905));n(814);const o={sidebar_position:10},s="Animation",r={unversionedId:"docs/animation",id:"docs/animation",title:"Animation",description:"Accordion supports expanding and collapsing animation with full state transition cycle,",source:"@site/docs/docs/animation.mdx",sourceDirName:"docs",slug:"/docs/animation",permalink:"/react-accordion/docs/animation",draft:!1,editUrl:"https://github.com/szhsin/react-accordion/tree/master/website/docs/docs/animation.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"docsSidebar",previous:{title:"Styling",permalink:"/react-accordion/docs/styling"},next:{title:"Headless UI",permalink:"/react-accordion/category/headless-ui"}},c={},l=[],d={toc:l};function p(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"animation"},"Animation"),(0,a.kt)("p",null,"Accordion supports expanding and collapsing animation with full state transition cycle,\nthanks to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/szhsin/react-transition-state"},"react-transition-state"),"\nlibrary. Because how an accordion should be animated is part of styling, no default\nanimation is included in the package. Generally, you can follow the steps below to enable\nanimation:"),(0,a.kt)("p",null,"First, set ",(0,a.kt)("inlineCode",{parentName:"p"},"transition")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"transitionTimeout")," props on the Accordion component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<Accordion transition transitionTimeout={200}>\n  {/* Accordion items... */}\n</Accordion>\n")),(0,a.kt)("p",null,"Then, add the ",(0,a.kt)("inlineCode",{parentName:"p"},"height")," transition css to the item content DOM element of each accordion\nitem, which is the element with class selector ",(0,a.kt)("inlineCode",{parentName:"p"},"szh-accordion__item-content"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"transition: height 0.2s ease-in-out;\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The transition duration in CSS should be equal to the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"transitionTimeout")," prop in\nthe first step.")),(0,a.kt)("p",null,"The transition of height is to create the accordion effect when items are expanded and\ncollapsed. Of course, you are free to animate other CSS properties to suit the needs of\nyour app or design system. For example, you may animate ",(0,a.kt)("inlineCode",{parentName:"p"},"opacity")," to create fading in/out\neffects."),(0,a.kt)("p",null,"Depending on the styling solution in your project, the methods of applying CSS transition\nare slightly different. You can find some ",(0,a.kt)("a",{parentName:"p",href:"styling#examples"},"CodeSandbox examples")," in the\nstyling page which all have animation enabled."))}p.isMDXComponent=!0}}]);