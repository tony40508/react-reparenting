(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{151:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return s}));var a=t(1),r=t(9),p=(t(0),t(162)),c={title:"Reparentable"},l={id:"reparentable",title:"Reparentable",description:"Import the [createReparentableSpace](./tools#reparentable-) method from the package.",source:"@site/docs\\reparentable.mdx",permalink:"/react-reparenting/docs/reparentable",editUrl:"https://github.com/paol-imi/react-reparenting/edit/master/website/docs/reparentable.mdx",sidebar:"docs",previous:{title:"Usage",permalink:"/react-reparenting/docs/usage"},next:{title:"useParent",permalink:"/react-reparenting/docs/useparent"}},i=[{value:"Setup \u2699\ufe0f",id:"setup-\ufe0f",children:[]},{value:"Usage \ud83d\udcd6",id:"usage-",children:[]},{value:"Example \ud83d\udca1",id:"example-",children:[]}],b={rightToc:i};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(p.b)("p",null,"Import the ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"./tools#reparentable-"}),"createReparentableSpace")," method from the package."),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import {createReparentableSpace} from 'react-reparenting';\n")),Object(p.b)("h2",{id:"setup-\ufe0f"},"Setup \u2699\ufe0f"),Object(p.b)("p",null,"First you need to define a Space that will virtually contain the components. Only ",Object(p.b)("inlineCode",{parentName:"p"},"<Reparentable>"),"s belonging to the same space can send children to each other."),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const {Reparentable, sendReparentableChild} = createReparentableSpace();\n")),Object(p.b)("p",null,"The ",Object(p.b)("inlineCode",{parentName:"p"},"<Reparentable>")," must be the ",Object(p.b)("strong",{parentName:"p"},"direct parent")," of the children which can be transferred, and it must have an ",Object(p.b)("strong",{parentName:"p"},"unique id")," that differentiates it from other ",Object(p.b)("inlineCode",{parentName:"p"},"<Reparentable>"),"s in its Space."),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Reparentable id="id">{children}</Reparentable>\n')),Object(p.b)("h2",{id:"usage-"},"Usage \ud83d\udcd6"),Object(p.b)("p",null,"Let's define a very simple child component for the example."),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const Child = () => <div />;\n")),Object(p.b)("p",null,"We define in our app two simple parent components, and insert within them the ",Object(p.b)("inlineCode",{parentName:"p"},"<Reparentable>"),"s."),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'const App = () => {\n  // The Parents.\n  const [parents, setParents] = useState({\n    A: [\'c1\', \'c2\'],\n    B: [\'c3\'],\n  });\n\n  // The Child components.\n  const children = {\n    parentA: parents.A.map((key) => <Child key={key} />),\n    parentB: parents.B.map((key) => <Child key={key} />),\n  };\n\n  return (\n    <>\n      {/* Parent A */}\n      <div className="parent">\n        <Reparentable id="parentA">{children.parentA}</Reparentable>\n      </div>\n      {/* Parent B */}\n      <div className="parent">\n        <Reparentable id="parentB">{children.parentB}</Reparentable>\n      </div>\n    </>\n  );\n};\n')),Object(p.b)("p",null,"Now we can reparent anywhere in our app using the ",Object(p.b)("inlineCode",{parentName:"p"},"sendReparentableChild")," method."),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// Send the first Child ('c3') of 'parentB'\n// before the Child ('c2') of 'parentA'.\nsendReparentableChild('parentB', 'parentA', 0, 'c2');\n// Send the Child ('c1') of 'parentA'\n// in the first position of 'parentB'.\nsendReparentableChild('parentA', 'parentB', 'c1', 0);\n\n// Re-render the components with the changes.\n// The transferred children won't be re-mounted.\nsetParents({\n  A: ['c3', 'c2'],\n  B: ['c1'],\n});\n")),Object(p.b)("h2",{id:"example-"},"Example \ud83d\udca1"),Object(p.b)("p",null,"Check out the full example on ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"https://codesandbox.io/s/react-reparenting-rvfi4"}),"codesandbox"),"."))}s.isMDXComponent=!0}}]);