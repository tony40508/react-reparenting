(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(9),i=(n(0),n(162)),a={title:"Custom Renderer \ud83d\udd0c"},c={id:"renderer",title:"Custom Renderer \ud83d\udd0c",description:"The default configuration is designed to work with ReactDOM.",source:"@site/docs\\renderer.mdx",permalink:"/react-reparenting/docs/renderer",editUrl:"https://github.com/paol-imi/react-reparenting/edit/master/website/docs/renderer.mdx",sidebar:"docs",previous:{title:"useParent",permalink:"/react-reparenting/docs/useparent"},next:{title:"Tools API \u2699\ufe0f",permalink:"/react-reparenting/docs/tools"}},s=[],d={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The default configuration is designed to work with ReactDOM.\nIf you want to try implementing React-Reparenting with other ",Object(i.b)("inlineCode",{parentName:"p"},"renderers")," you can try to ",Object(i.b)("inlineCode",{parentName:"p"},"instruct")," the package to manage the types of nodes you are working with, in order to automate the process as happens with ReactDOM."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import {configure} from 'react-reparenting';\n\n// The default configuration that works with ReactDOM.\nconfigure({\n  appendChildToContainer(container, child) {\n    container.appendChild(child);\n  },\n  insertInContainerBefore(container, child, before) {\n    container.insertBefore(child, before);\n  },\n  removeChildFromContainer(container, child) {\n    container.removeChild(child);\n  },\n  isElement(elementType, stateNode) {\n    return stateNode instanceof Element;\n  },\n});\n")),Object(i.b)("p",null,"If you have successfully implemented reparenting with React Native or with your custom renderer, feel free to share your solution by opening an issue on ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Paol-imi/react-reparenting/labels/implementation%20%F0%9F%8E%89"}),"Github"),"."))}p.isMDXComponent=!0}}]);