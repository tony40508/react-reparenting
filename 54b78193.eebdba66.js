(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{147:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return s}));var r=t(1),a=t(9),c=(t(0),t(161)),o={title:"Parent"},p={id:"parent",title:"Parent",description:"Get the [Parent](./tools#parent--%EF%B8%8F) component from the package.",source:"@site/docs\\parent.mdx",permalink:"/react-reparenting/docs/parent",editUrl:"https://github.com/paol-imi/react-reparenting/edit/master/website/docs/parent.mdx",sidebar:"docs",previous:{title:"Reparentable",permalink:"/react-reparenting/docs/reparentable"},next:{title:"createParent",permalink:"/react-reparenting/docs/createparent"}},i=[{value:"Setup \u2699\ufe0f",id:"setup-\ufe0f",children:[]},{value:"Usage \ud83d\udcd6",id:"usage-",children:[]},{value:"Example \ud83d\udca1",id:"example-",children:[]}],l={rightToc:i};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Get the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"./tools#parent--%EF%B8%8F"}),"Parent")," component from the package."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import {Parent} from 'react-reparenting';\n")),Object(c.b)("h2",{id:"setup-\ufe0f"},"Setup \u2699\ufe0f"),Object(c.b)("p",null,"Once you have chosen who the parent components are, use a ",Object(c.b)("inlineCode",{parentName:"p"},"<Parent>")," component within them. That component ",Object(c.b)("strong",{parentName:"p"},"must")," be the direct parent of the children who can be transferred. You also have to access the internal parent instance to use the ",Object(c.b)("inlineCode",{parentName:"p"},"send")," method."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'const MyParent = ({children}) => {\n  const parentRef = useRef();\n\n  return (\n    <div className="parent">\n      {/* <Parent> must be the direct parent of the\n          children. You can render what you want before. */}\n      <Parent parentRef={parentRef}>{children}</Reparentable>\n    </div>\n  );\n};\n')),Object(c.b)("h2",{id:"usage-"},"Usage \ud83d\udcd6"),Object(c.b)("p",null,"Let's define a very simple child component for the example."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const Child = () => <div />;\n")),Object(c.b)("p",null,"We define in our app two simple parent components, and insert within them the children."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const App = () => {\n  // The Parents.\n  const [parents, setParents] = useState({\n    A: ['c1', 'c2'],\n    B: ['c3'],\n  });\n\n  // The Child components.\n  const children = {\n    parentA: parents.A.map((key) => <Child key={key} />),\n    parentB: parents.B.map((key) => <Child key={key} />),\n  };\n\n  // Parent instance refs.\n  const parentARef = useRef();\n  const parentBRef = useRef();\n\n  return (\n    <>\n      {/* Parent A */}\n      <div className=\"parent\">\n        <Parent parentRef={parentARef}>{children.parentA}</Parent>\n      </div>\n      {/* Parent B */}\n      <div className=\"parent\">\n        <Parent parentRef={parentBRef}>{children.parentB}</Parent>\n      </div>\n    </>\n  );\n};\n")),Object(c.b)("p",null,"Now we can reparent anywhere in our app using the send method."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const parentA = parentARef.current;\nconst parentB = parentBRef.current;\n\n// Send the first Child ('c3') of 'parentB'\n// before the Child ('c2') of 'parentA'.\nparentB.sendChild(parentA, 0, 'c2');\n// Send the Child ('c1') of 'parentA'\n// in the first position of 'parentB'.\nparentA.sendChild(parentB, 'c1', 0);\n\n// Re-render the components with the changes.\n// The transferred children won't be re-mounted.\nsetParents({\n  A: ['c3', 'c2'],\n  B: ['c1'],\n});\n")),Object(c.b)("h2",{id:"example-"},"Example \ud83d\udca1"),Object(c.b)("p",null,"Coming soon."))}s.isMDXComponent=!0},161:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p({},n,{},e)),t},u=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(t),b=r,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||c;return t?a.a.createElement(m,p({ref:n},l,{components:t})):a.a.createElement(m,p({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=b;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<c;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);