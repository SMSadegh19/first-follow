!function(e){function t(t){for(var r,c,l=t[0],s=t[1],i=t[2],m=0,d=[];m<l.length;m++)c=l[m],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&d.push(n[c][0]),n[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(u&&u(t);d.length;)d.shift()();return o.push.apply(o,i||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,l=1;l<a.length;l++){var s=a[l];0!==n[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var r={},n={0:0},o=[];function c(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=r,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(a,r,function(t){return e[t]}.bind(null,r));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var u=s;o.push([240,1]),a()}({240:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(87),c=a(130),l=a.n(c),s=(a(1),a(18)),i=a.n(s);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function m({className:e,...t}){return n.a.createElement("button",u({type:"button",className:i()(e,"button")},t))}m.defaultProps={className:null};var d=m,f=a(24),b=a(137),p=a(13);a(238);var _=function({state:e,onChange:t}){return n.a.createElement("div",{className:"editor-content-editor"},n.a.createElement(p.Editor,{editorState:e,onChange:t,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",stripPastedStyles:!0}))},E=a(35),h=a(36);function g({errorsCount:e,success:t}){return n.a.createElement("div",{className:"editor-status-bar"},e>0&&n.a.createElement("div",{className:"editor-status-bar__section editor-status-bar__section_left"},n.a.createElement(E.a,{icon:h.c,className:"editor-status-bar__icon editor-status-bar__icon_error"}),n.a.createElement("span",{className:"editor-status-bar__label"},"Errors:"," ",e)),t&&n.a.createElement("div",{className:"editor-status-bar__section editor-status-bar__section_right"},n.a.createElement("span",{className:"editor-status-bar__label"},"Success"),n.a.createElement(E.a,{icon:h.a,className:"editor-status-bar__icon editor-status-bar__icon_success"})))}g.defaultProps={errorsCount:0,success:!1};var v=g;var N=function({onUndoClick:e,onRedoClick:t,onClearClick:a}){return n.a.createElement("div",{className:"editor-toolbar"},n.a.createElement("div",{className:"editor-toolbar__section"},n.a.createElement(d,{className:"editor-toolbar__button",onClick:e},n.a.createElement(E.a,{icon:h.e})),n.a.createElement(d,{className:"editor-toolbar__button",onClick:t},n.a.createElement(E.a,{icon:h.d})),n.a.createElement(d,{className:"editor-toolbar__button",onClick:a},n.a.createElement(E.a,{icon:h.b}))))},C=a(43);function y({number:e,error:t}){return n.a.createElement("div",{className:i()("editor-rows-numbers__item",t&&"editor-rows-numbers__item_error")},e||n.a.createElement("br",null))}y.defaultProps={number:null,error:null};var O=y;function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var j=function({rows:e,errors:t}){const a=Object(C.a)(t,"number");let r=0;return n.a.createElement("div",{className:"editor-rows-numbers"},e.map(((e,t)=>(r=e?r+1:r,n.a.createElement(O,w({key:t},e&&{number:r,error:a[r]&&a[r].error}))))))},x=a(133),S=a(135),R=a(73);const k=(e,t,a)=>{let r=e.exec(t);for(;r;){const n=r.index;a(n,n+r[0].length,r),r=e.exec(t)}};var P=a(132),T=a(136);const M=null,F="\\s*[A-Za-z_]\\w*",V="⟶",$="ε",A="┤",B={[M]:$,"\0":A};function U(e){return B[e]||e}function z(e){const t=new RegExp("^[A-Za-z_]\\w*$"),a=e.trim().match(t);return a&&a[0]}function I(e){return Object(P.a)(e)?(e=e.trim())?Object(R.a)(e.split(/\s+/)):[M]:null}function K(e){const[t,a]=e.split(V);if(!z(t))return{error:"INCORRECT_START_OF_RULE"};return I(a)?{left:z(t),right:I(a)}:{error:"INCORRECT_REST_OF_RULE"}}function D(e){return(t,a)=>{k(e,t.getText(),a)}}function J(e){return(t,a)=>{if(!e.length)return;const r=[...e].sort(((e,t)=>t.length-e.length)),n=new RegExp(r.join("|"),"g");k(n,t.getText(),((e,t,{input:r})=>{const n=e-1,o=t,c=new RegExp(`${V}|\\s`),l=!e||c.test(r[n]),s=t>r.length-1||c.test(r[o]);l&&s&&a(e,t)}))}}const L=e=>({children:t})=>n.a.createElement("span",{className:e},t);var Z=()=>({strategy:D(new RegExp(V,"g")),component:L("editor-content-editor-arrow")}),G=()=>({strategy:D(new RegExp(`^${F}$`,"ig")),component:L("editor-content-editor-arrow-placeholder")}),H=()=>({strategy:D(new RegExp(`${V}\\s*$`,"ig")),component:L("editor-content-editor-empty-chain-placeholder")}),W=(e=[])=>({strategy:J(e),component:L("editor-content-editor-nonterminal")});function q({contentState:e,searchRegex:t,text:a,startPosition:r=0}){let n=e;return e.getBlockMap().forEach((e=>{const o=e.getKey(),c=e.getText();k(t,c,((e,t)=>{r>=0?e+=r:e=t+r;const c=new p.SelectionState({anchorKey:o,focusKey:o,anchorOffset:e,focusOffset:t});n=p.Modifier.replaceText(n,c,a)}))})),n}function Q(e){return q({searchRegex:new RegExp(`^${F}\\s`,"ig"),text:`${V}`,startPosition:-1,contentState:e})}function X(e){return q({searchRegex:new RegExp(V,"g"),text:" ",contentState:e})}function Y(e){return q({searchRegex:new RegExp($,"g"),text:" ",contentState:e})}function ee(e){const t=e.getBlockMap().map((e=>e.getText().split(V))).filter((e=>e.length>1)).map((([e])=>e.trim()));return Object(R.a)(Array.from(t.values()))}function te(e){return new p.CompositeDecorator([G(),H(),Z(),W(e)])}function ae({defaultContent:e,onSubmit:t,...a}){const[o,c]=Object(r.useState)(!1),l=Object(r.useRef)(),s=()=>{clearTimeout(l.current),c(!1)},{state:i,onChange:u,undo:m,redo:E,clear:h,getContent:g,getContentRows:C}=(({content:e="",onContentChange:t=f.a}={})=>{const[a,n]=Object(r.useState)((()=>{const t=p.ContentState.createFromText(e),a=te(ee(t));return p.EditorState.createWithContent(t,a)})),o=Object(r.useRef)(e),c=Object(r.useRef)([]),l=Object(S.a)(X,Y,Q),s=e=>{const a=l(e.getCurrentContent());let r=p.EditorState.set(e,{currentContent:a});const s=a.getPlainText();if(s!==o.current){const e=ee(a),n=c.current;Object(x.a)(e,n)||(r=p.EditorState.set(r,{decorator:te(e)}),c.current=e),t(s),o.current=s}n(r)};return{state:a,onChange:s,undo:()=>{s(p.EditorState.undo(a))},redo:()=>{s(p.EditorState.redo(a))},clear:()=>{s(p.EditorState.push(a,p.ContentState.createFromText("")))},getContent:()=>a.getCurrentContent().getPlainText(),getContentRows:()=>Array.from(a.getCurrentContent().getBlockMap().map((e=>e.getText())).values())}})({content:e,onContentChange:e=>{s(),a.onChange(e)}}),y=C(),O=function(e){return e.filter((e=>e.length)).map(((e,t)=>({number:t+1,...K(e)})))}(y),w=Object(b.a)(O,"error");return n.a.createElement("div",{className:"editor"},n.a.createElement(N,{onUndoClick:m,onRedoClick:E,onClearClick:h}),n.a.createElement("div",{className:"editor__content"},n.a.createElement("div",{className:"editor__rows-numbers"},n.a.createElement(j,{rows:y,errors:w})),n.a.createElement("div",{className:"editor__body"},n.a.createElement(_,{state:i,onChange:u}))),n.a.createElement("div",{className:"editor__footer"},n.a.createElement(v,{success:o,errorsCount:w.length}),n.a.createElement(d,{className:"editor__button",onClick:()=>{t(O,g()),s(),c(!0),l.current=setTimeout(s,2e3)},disabled:w.length||!O.length},"Run")))}ae.defaultProps={defaultContent:"",onChange:f.a};var re=ae,ne=a(77),oe=a(134);var ce=function({data:e,columns:t}){return n.a.createElement("table",{className:"table"},n.a.createElement("thead",{className:"table__head"},n.a.createElement("tr",{className:"table__row"},n.a.createElement("th",{className:"table__cell","aria-label":"top left empty cell"}),t.map(((e,t)=>n.a.createElement("th",{className:"table__cell",key:t},e))))),n.a.createElement("tbody",{className:"table__body"},Object(ne.a)(e,((e,a)=>{const r=Object(C.a)(e);return n.a.createElement("tr",{className:"table__row",key:a},n.a.createElement("td",{className:"table__cell"},a),t.map(((e,t)=>{const a=r[e],o=i()("table__cell",{table__cell_success:a,table__cell_error:!a});return n.a.createElement("td",{key:t,className:o},a?"+":"−")})))}))))};function le({data:e,columns:t,withEmptyChain:a,withEndMark:r}){return e=Object(oe.a)(e,(e=>Object(ne.a)(e,U))),a&&(t=[...t,$]),r&&(t=[...t,A]),n.a.createElement(ce,{data:e,columns:t})}le.defaultProps={withEmptyChain:!1,withEndMark:!1};var se=le;function ie({className:e}){return n.a.createElement("header",{className:i()(e,"layout-header")},n.a.createElement("h1",{className:"layout-header__title"},"First Follow"),n.a.createElement("p",{className:"layout-header__description"},"A small tool for calculating first, follow and predict sets for the grammar"),n.a.createElement("a",{className:"layout-header__link",href:"https://github.com/MikeDevice/first-follow",target:"_blank",rel:"noopener noreferrer"},"GitHub"))}ie.defaultProps={className:null};var ue=ie;var me=function({children:e}){return n.a.createElement("div",{className:"layout"},n.a.createElement(ue,{className:"layout__header"}),n.a.createElement("main",{className:"layout__main"},e))};function de({title:e,label:t,className:a,children:r}){return n.a.createElement("section",{className:i()(a,"section")},e&&n.a.createElement("div",{className:"section__header"},n.a.createElement("h2",{className:"section__title"},e),t&&n.a.createElement("p",{className:"section__label"},t)),n.a.createElement("div",{className:"section__content"},r))}de.defaultProps={title:null,label:null,className:null};var fe=de;const be=["Program⟶var Variables begin Operators end","Variables⟶Variable ; Variables","Variables⟶","Variable⟶identifier","Operators⟶Operator ; Operators","Operators⟶","Operator⟶read ( Variable )","Operator⟶write ( Variable )"].join("\n");let pe=function(){const[e,t]=Object(r.useState)(null),[a,o]=Object(r.useState)(!0),c=Object(r.useRef)(),{firstSets:s,followSets:i,predictSets:u}=e?l()(e):{},m=e?function(e){const t=[],a=Object(C.a)(e.map((({left:e})=>e)));return e.forEach((({right:e})=>{e.forEach((e=>{e===M||a[e]||t.push(e)}))})),Object(T.a)(t)}(e):[],d=a?null:"The grammar has been changed. The results are no longer relevant.";return n.a.createElement(me,null,n.a.createElement("div",{className:"main"},n.a.createElement(fe,{className:"main__section"},n.a.createElement(re,{defaultContent:be,onChange:e=>{if(!c.current)return;const t=e.trim()===c.current.trim();o(t)},onSubmit:(e,a)=>{c.current=a,t(e),o(!0)}})),s&&n.a.createElement(fe,{title:"First sets",label:d,className:"main__section"},n.a.createElement(se,{data:s,columns:m,withEmptyChain:!0})),i&&n.a.createElement(fe,{title:"Follow sets",label:d,className:"main__section"},n.a.createElement(se,{data:i,columns:m,withEndMark:!0})),u&&n.a.createElement(fe,{title:"Predict sets",label:d,className:"main__section"},n.a.createElement(se,{data:u,columns:m,withEndMark:!0}))))};Object(o.render)(n.a.createElement(pe,null),document.getElementById("root"))}});