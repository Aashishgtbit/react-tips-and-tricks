(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{126:function(e,n,t){var a=t(127);"string"==typeof a&&(a=[[e.i,a,""]]);var r={insert:"head",singleton:!1};t(34)(a,r);a.locals&&(e.exports=a.locals)},127:function(e,n,t){(e.exports=t(33)(!1)).push([e.i,".wrapper-code-demo{height:100%;width:100%;border:2px solid #3366ff;overflow:scroll}.demo-heading{padding:5px 10px;background-color:#3366ff;color:white;font-weight:bold}\n",""])},128:function(e,n,t){"use strict";n.a={hooksExampleCode:'import React, { useState, useCallback, useMemo } from "react";\nimport "./style.scss";\n\nconst addFruitsFunctionCount = new Set();\nconst addVegetableFunctionCount = new Set();\n\nconst applePrice = 4; // each unit costs 4$ of money .\nconst beansPrice = 2; // each unit costs 2$ of money .\n\nexport default function HooksExample() {\n    const [appleCounter, setAppleCounter] = useState(0);\n    const [beansCounter, setBeansCounter] = useState(0);\n\n    const totalProfit = useMemo(() => {\n        return appleCounter * applePrice + beansCounter * beansPrice;\n    }, [beansCounter]);\n\n    const addVegetable = useCallback(() => {\n        setBeansCounter(beansCounter + 1);\n    }, [beansCounter]);\n\n    // calculate profit made by the shopkeeper\n\n    const addFruits = () => {\n        setAppleCounter(appleCounter + 1);\n    };\n\n    // In each render new instance of addFruits will be created .\n    addFruitsFunctionCount.add(addFruits);\n\n    addVegetableFunctionCount.add(addVegetable);\n    return (\n        <div className="wrapper-hooks-example">\n            <h3> Hooks Example</h3>\n            <div className="wrapper-fruits">\n                <button onClick={addVegetable} type="button">\n                    Add vegetables\n                </button>\n            </div>\n            <div className="wrapper-vegetables">\n                <button onClick={addFruits} type="button">\n                    Add fruits\n                </button>\n            </div>\n            <div>\n                New functions created :\n                <ul>\n                    <li>fruits :{addFruitsFunctionCount.size - 1}</li>\n                    <li>vegetable : {addVegetableFunctionCount.size - 1}</li>\n                </ul>\n            </div>\n\n            <div> Total Profit = {totalProfit}</div>\n\n        </div>\n    );\n}',dynamicImport:'import React, { useState, useCallback } from "react";\nimport "./style.scss";\n// Dynamic import example .\n\nexport default function DynamicImport() {\n    const a = 10;\n    const b = 20;\n    const [sum, setSum] = useState(0);\n\n    const addData = useCallback(() => {\n        // Dynamic import syntax .\n        import("lodash").then(_ => {\n            setSum(_.add(a, b));\n        });\n    }, []);\n\n    return (\n        <div className="wrapper-dynamic-import">\n            <h2> Dynamic Import Example</h2>\n            <button onClick={addData} type="button">\n                Add\n            </button>\n            <div>\n                sum is\n                {sum}\n            </div>\n        </div>\n    );\n}',lazyLoadExampleCode:'import React, { Suspense } from "react";\n// import { Alert } from "reactstrap";\nimport Loader from "../../../components/Loader";\nimport "./style.scss";\n\n\nexport default function LazyLoadingExample() {\n    const Alert = React.lazy(() => import("reactstrap/lib/Alert"));\n    return (\n        <div className="wrapper-lazy-load">\n            <h2> Lazy loading Example</h2>\n            <Suspense fallback={<Loader />}>\n                <Alert color="success">This is Example of Lazy Loading</Alert>\n            </Suspense>\n\n        </div>\n    );\n}\n'}},131:function(e,n,t){"use strict";t(31),t(32);var a=t(0),r=t.n(a),o=t(139),i=(t(126),t(119),t(120),t(121),t(118),t(122),t(123),t(124),t(125),t(137),t(138)),s=t(41);function l(e,n,t,a,r,o,i){try{var s=e[o](i),l=s.value}catch(e){return void t(e)}s.done?n(l):Promise.resolve(l).then(a,r)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(a,r){var o=e.apply(n,t);function i(e){l(o,a,r,i,s,"next",e)}function s(e){l(o,a,r,i,s,"throw",e)}i(void 0)}))}}function c(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],a=!0,r=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done)&&(t.push(i.value),!n||t.length!==n);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==s.return||s.return()}finally{if(r)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function d(e){var n=e.moduleProvider,t=e.language,o=e.style,l=e.children,d=c(Object(a.useState)(null),2),p=d[0],m=d[1];function f(){return(f=u(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n();case 3:(a=e.sent).default.registerLanguage&&a.default.registerLanguage("jsx",i.a),m(a.default({children:l,style:o,language:t})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("err :",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(a.useMemo)((function(){p||function(){f.apply(this,arguments)}()}),[]),p||r.a.createElement(s.a,null)}n.a=function(e){var n=e.codeString;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"demo-heading"}," Demo : "),r.a.createElement("div",{className:"wrapper-code-demo"},r.a.createElement(d,{moduleProvider:function(){return t.e(4).then(t.bind(null,239))},style:o.a,language:"jsx"},n)))}},164:function(e,n,t){var a=t(165);"string"==typeof a&&(a=[[e.i,a,""]]);var r={insert:"head",singleton:!1};t(34)(a,r);a.locals&&(e.exports=a.locals)},165:function(e,n,t){(e.exports=t(33)(!1)).push([e.i,".wrapper-lazy-load{width:100%;height:100vh;padding:20px;display:flex;flex-direction:column}\n",""])},236:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return l}));t(31),t(32);var a=t(0),r=t.n(a),o=t(41),i=(t(164),t(131)),s=t(128);function l(){var e=r.a.lazy((function(){return t.e(5).then(t.t.bind(null,184,7))}));return r.a.createElement("div",{className:"wrapper-lazy-load"},r.a.createElement("h2",null," Lazy loading Example"),r.a.createElement(a.Suspense,{fallback:r.a.createElement(o.a,null)},r.a.createElement(e,{color:"success"},"This is Example of Lazy Loading")),r.a.createElement(i.a,{codeString:s.a.lazyLoadExampleCode}))}}}]);