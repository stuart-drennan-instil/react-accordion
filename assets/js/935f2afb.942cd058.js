"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docsSidebar":[{"type":"link","label":"Getting Started","href":"/react-accordion/docs/getting-started","docId":"docs/getting-started"},{"type":"link","label":"Allowing multiple","href":"/react-accordion/docs/allow-multiple","docId":"docs/allow-multiple"},{"type":"link","label":"Expanding items initially","href":"/react-accordion/docs/initial-expanded","docId":"docs/initial-expanded"},{"type":"link","label":"Customising header","href":"/react-accordion/docs/customising-header","docId":"docs/customising-header"},{"type":"link","label":"Controlling state","href":"/react-accordion/docs/controlling-state","docId":"docs/controlling-state"},{"type":"link","label":"Accessing item state","href":"/react-accordion/docs/accessing-state","docId":"docs/accessing-state"},{"type":"link","label":"Nested accordion","href":"/react-accordion/docs/nested","docId":"docs/nested"},{"type":"link","label":"State changing event","href":"/react-accordion/docs/on-state-change","docId":"docs/on-state-change"},{"type":"link","label":"Styling","href":"/react-accordion/docs/styling","docId":"docs/styling"},{"type":"category","label":"Headless UI","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"When to Use","href":"/react-accordion/docs/headless-ui/intro","docId":"docs/headless-ui/intro"},{"type":"link","label":"Creating Accordion","href":"/react-accordion/docs/headless-ui/accordion","docId":"docs/headless-ui/accordion"},{"type":"link","label":"Creating AccordionItem","href":"/react-accordion/docs/headless-ui/accordion-item","docId":"docs/headless-ui/accordion-item"},{"type":"link","label":"Styles","href":"/react-accordion/docs/headless-ui/styles","docId":"docs/headless-ui/styles"},{"type":"link","label":"Putting together","href":"/react-accordion/docs/headless-ui/example","docId":"docs/headless-ui/example"}],"href":"/react-accordion/category/headless-ui"}],"apiSidebar":[{"type":"category","label":"Components","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Accordion","href":"/react-accordion/api/components/Accordion","docId":"api/components/Accordion"},{"type":"link","label":"AccordionItem","href":"/react-accordion/api/components/AccordionItem","docId":"api/components/AccordionItem"},{"type":"link","label":"ControlledAccordion","href":"/react-accordion/api/components/ControlledAccordion","docId":"api/components/ControlledAccordion"},{"type":"link","label":"AccordionProvider","href":"/react-accordion/api/components/AccordionProvider","docId":"api/components/AccordionProvider"}]},{"type":"category","label":"Hooks","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"useAccordion","href":"/react-accordion/api/hooks/useAccordion","docId":"api/hooks/useAccordion"},{"type":"link","label":"useAccordionItemEffect","href":"/react-accordion/api/hooks/useAccordionItemEffect","docId":"api/hooks/useAccordionItemEffect"},{"type":"link","label":"useAccordionItem","href":"/react-accordion/api/hooks/useAccordionItem","docId":"api/hooks/useAccordionItem"},{"type":"link","label":"useHeightTransition","href":"/react-accordion/api/hooks/useHeightTransition","docId":"api/hooks/useHeightTransition"},{"type":"link","label":"useAccordionProvider","href":"/react-accordion/api/hooks/useAccordionProvider","docId":"api/hooks/useAccordionProvider"},{"type":"link","label":"useAccordionState","href":"/react-accordion/api/hooks/useAccordionState","docId":"api/hooks/useAccordionState"}]}]},"docs":{"api/components/Accordion":{"id":"api/components/Accordion","title":"Accordion","description":"| Prop | Type | Description |","sidebar":"apiSidebar"},"api/components/AccordionItem":{"id":"api/components/AccordionItem","title":"AccordionItem","description":"| Prop | Type | Description |","sidebar":"apiSidebar"},"api/components/AccordionProvider":{"id":"api/components/AccordionProvider","title":"AccordionProvider","description":"| Prop | Type | Description |","sidebar":"apiSidebar"},"api/components/ControlledAccordion":{"id":"api/components/ControlledAccordion","title":"ControlledAccordion","description":"| Prop | Type | Description |","sidebar":"apiSidebar"},"api/hooks/useAccordion":{"id":"api/hooks/useAccordion","title":"useAccordion","description":"Return object","sidebar":"apiSidebar"},"api/hooks/useAccordionItem":{"id":"api/hooks/useAccordionItem","title":"useAccordionItem","description":"Parameter object","sidebar":"apiSidebar"},"api/hooks/useAccordionItemEffect":{"id":"api/hooks/useAccordionItemEffect","title":"useAccordionItemEffect","description":"Parameter object","sidebar":"apiSidebar"},"api/hooks/useAccordionProvider":{"id":"api/hooks/useAccordionProvider","title":"useAccordionProvider","description":"Parameter object","sidebar":"apiSidebar"},"api/hooks/useAccordionState":{"id":"api/hooks/useAccordionState","title":"useAccordionState","description":"Return object","sidebar":"apiSidebar"},"api/hooks/useHeightTransition":{"id":"api/hooks/useHeightTransition","title":"useHeightTransition","description":"Parameter list","sidebar":"apiSidebar"},"docs/accessing-state":{"id":"docs/accessing-state","title":"Accessing item state","description":"Both the header and children props of AccordionItem component support the","sidebar":"docsSidebar"},"docs/allow-multiple":{"id":"docs/allow-multiple","title":"Allowing multiple","description":"To allow multiple accordion items to expand at once, set the allowMultiple prop of the","sidebar":"docsSidebar"},"docs/controlling-state":{"id":"docs/controlling-state","title":"Controlling state","description":"From above Accordion","sidebar":"docsSidebar"},"docs/customising-header":{"id":"docs/customising-header","title":"Customising header","description":"You may provide the header prop of AccordionItem with any JSX elements or React","sidebar":"docsSidebar"},"docs/getting-started":{"id":"docs/getting-started","title":"Getting Started","description":"Install","sidebar":"docsSidebar"},"docs/headless-ui/accordion":{"id":"docs/headless-ui/accordion","title":"Creating Accordion","description":"First, we create an Accordion component with useAccordion, useAccordionProvider, and","sidebar":"docsSidebar"},"docs/headless-ui/accordion-item":{"id":"docs/headless-ui/accordion-item","title":"Creating AccordionItem","description":"Second, create an AccordionItem component with the useAccordionItem and","sidebar":"docsSidebar"},"docs/headless-ui/example":{"id":"docs/headless-ui/example","title":"Putting together","description":"Now we can use our own Accordion and AccordionItem components as normal. They are","sidebar":"docsSidebar"},"docs/headless-ui/intro":{"id":"docs/headless-ui/intro","title":"Headless UI","description":"The Accordion and AccordionItem components are unstyled and render HTML markups that are compliant with the Accordion Pattern. They are built on top of some React Hooks which can be used directly in your code. There are a few reasons that you might want to do it:","sidebar":"docsSidebar"},"docs/headless-ui/styles":{"id":"docs/headless-ui/styles","title":"Styles","description":"Here are the styles for the two components we have created.","sidebar":"docsSidebar"},"docs/initial-expanded":{"id":"docs/initial-expanded","title":"Expanding items initially","description":"You could use the initialEntered prop of AccordionItem to expand items when accordion","sidebar":"docsSidebar"},"docs/nested":{"id":"docs/nested","title":"Nested accordion","description":"AccordionItem can have a nested accordion. When navigating through items with keyboard","sidebar":"docsSidebar"},"docs/on-state-change":{"id":"docs/on-state-change","title":"State changing event","description":"The onStateChange event of Accordion can be used to listen to item state updates. The","sidebar":"docsSidebar"},"docs/styling":{"id":"docs/styling","title":"Styling","description":"The unstyled Accordion and AccordionItem components render the following HTML markups","sidebar":"docsSidebar"}}}')}}]);