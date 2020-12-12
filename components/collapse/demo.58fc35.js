(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1181:function(n,a,s){n.exports={basic:s(1246),light:s(1247)}},1246:function(n,a,s){n.exports={content:{"zh-CN":[["p","基本使用。"]],"en-US":[["p","Basic usage example."]]},meta:{order:0,title:{"zh-CN":"基本使用","en-US":"Basic usage"},filename:"components/collapse/demo/basic.md",id:"components-collapse-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Collapse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> Panel <span class="token punctuation">}</span> <span class="token operator">=</span> Collapse<span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">callback</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token template-string"><span class="token string">`\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n`</span></span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Collapse</span> <span class="token attr-name">defaultActiveKey</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'1\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>callback<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Panel</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>This</span> <span class="token attr-name">is</span> <span class="token attr-name">panel</span> <span class="token attr-name">header</span> <span class="token attr-name">1"</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Panel</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Panel</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>This</span> <span class="token attr-name">is</span> <span class="token attr-name">panel</span> <span class="token attr-name">header</span> <span class="token attr-name">2"</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Panel</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Panel</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>This</span> <span class="token attr-name">is</span> <span class="token attr-name">panel</span> <span class="token attr-name">header</span> <span class="token attr-name">3"</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Panel</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Collapse</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],highlightedCodes:{jsx:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Collapse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> Panel <span class="token punctuation">}</span> <span class="token operator">=</span> Collapse<span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Collapse</span></span> <span class="token attr-name">defaultActiveKey</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'1\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>callback<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Panel</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>This is panel header 1<span class="token punctuation">"</span></span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Panel</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Panel</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>This is panel header 2<span class="token punctuation">"</span></span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Panel</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Panel</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>This is panel header 3<span class="token punctuation">"</span></span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Panel</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Collapse</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},preview:function(){var n=s(0),a=(s(9),s(113)),t=a.Collapse.Panel;var p="\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n";return n.createElement(a.Collapse,{defaultActiveKey:["1"],onChange:function(n){console.log(n)}},n.createElement(t,{header:"This is panel header 1",key:"1"},n.createElement("p",null,p)),n.createElement(t,{header:"This is panel header 2",key:"2"},n.createElement("p",null,p)),n.createElement(t,{header:"This is panel header 3",key:"3",disabled:!0},n.createElement("p",null,p)))}}},1247:function(n,a,s){n.exports={content:{"zh-CN":[["p","浅色背景上，显示深色控件"],["p","仅暗黑主题下使用，默认主题下使用无效"],["ul",["li",["p","为组件添加类名",["code","dt-collapse-light-bg"]]],["li",["p","为存在浮层的组件相关属性设置类名",["code","dt-collapse-light-bg"]]]]],"en-US":[["h2","zh-CN"],["p","浅色背景上，显示深色控件"],["p","仅暗黑主题下使用，默认主题下使用无效"],["ul",["li",["p","为组件添加类名",["code","dt-collapse-light-bg"]]],["li",["p","为存在浮层的组件相关属性设置类名",["code","dt-collapse-light-bg"]]]]]},meta:{order:1,title:{"zh-CN":"浅色背景(仅暗黑主题下使用)"},filename:"components/collapse/demo/light.md",id:"components-collapse-demo-light"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Collapse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> Panel <span class="token punctuation">}</span> <span class="token operator">=</span> Collapse<span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">callback</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token template-string"><span class="token string">`\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n`</span></span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>demo-form-light<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Collapse</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dt-collapse-light-bg<span class="token punctuation">"</span></span> <span class="token attr-name">defaultActiveKey</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'1\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>callback<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Panel</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>This</span> <span class="token attr-name">is</span> <span class="token attr-name">panel</span> <span class="token attr-name">header</span> <span class="token attr-name">1"</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Panel</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Panel</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>This</span> <span class="token attr-name">is</span> <span class="token attr-name">panel</span> <span class="token attr-name">header</span> <span class="token attr-name">2"</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Panel</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Panel</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>This</span> <span class="token attr-name">is</span> <span class="token attr-name">panel</span> <span class="token attr-name">header</span> <span class="token attr-name">3"</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Panel</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Collapse</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],highlightedCodes:{jsx:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Collapse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> Panel <span class="token punctuation">}</span> <span class="token operator">=</span> Collapse<span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>demo-form-light<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Collapse</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dt-collapse-light-bg<span class="token punctuation">"</span></span> <span class="token attr-name">defaultActiveKey</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'1\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>callback<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Panel</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>This is panel header 1<span class="token punctuation">"</span></span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Panel</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Panel</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>This is panel header 2<span class="token punctuation">"</span></span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Panel</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Panel</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>This is panel header 3<span class="token punctuation">"</span></span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Panel</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Collapse</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},preview:function(){var n=s(0),a=(s(9),s(113)),t=a.Collapse.Panel;var p="\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n";return n.createElement("div",{className:"demo-form-light"},n.createElement(a.Collapse,{className:"dt-collapse-light-bg",defaultActiveKey:["1"],onChange:function(n){console.log(n)}},n.createElement(t,{header:"This is panel header 1",key:"1"},n.createElement("p",null,p)),n.createElement(t,{header:"This is panel header 2",key:"2"},n.createElement("p",null,p)),n.createElement(t,{header:"This is panel header 3",key:"3",disabled:!0},n.createElement("p",null,p))))}}}}]);