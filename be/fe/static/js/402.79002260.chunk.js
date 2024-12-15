"use strict";(self.webpackChunkfe=self.webpackChunkfe||[]).push([[402,573,602,625],{8402:(A,e,s)=>{s.r(e),s.d(e,{default:()=>D});var c=s(5043),t=s(6213),g=(s(3625),s(573)),i=s(579);const D=A=>{let{title:e,description:s}=A;const[D,r]=(0,c.useState)([]),[B,x]=(0,c.useState)([]),[I,E]=(0,c.useState)([]),[w,n]=(0,c.useState)("");return(0,c.useEffect)((()=>{t.A.get("/api/beam/en100561/").then((A=>{const e=A.data;r(e),x(e);const s=[...new Set(e.map((A=>A.Size)))].sort(((A,e)=>parseInt(A.split("x")[0])-parseInt(e.split("x")[0])));E(s)})).catch((A=>{console.error("Error fetching data:",A)}))}),[]),(0,c.useEffect)((()=>{x(w?D.filter((A=>A.Size===w)):D)}),[w,D]),(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("br",{}),(0,i.jsx)("div",{className:"filters",children:(0,i.jsxs)("label",{className:"dropdown-label",children:["Size:\u2002",(0,i.jsxs)("select",{value:w,onChange:A=>n(A.target.value),children:[(0,i.jsx)("option",{value:"",children:"Please select..."}),I.map((A=>(0,i.jsx)("option",{value:A,children:A},A)))]})]})}),w&&(0,i.jsxs)("div",{className:"beam-details",children:[(0,i.jsx)("hr",{}),(0,i.jsxs)("h6",{children:["Leg Angel ",w]}),B.map((A=>(0,i.jsx)("div",{className:"beam",children:(0,i.jsx)("table",{className:"specs-table",children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{children:[(0,i.jsx)("strong",{children:"Height (h):"})," ",A.a," mm"]}),(0,i.jsxs)("td",{children:[(0,i.jsx)("strong",{children:"Width (b):"})," ",A.b," mm"]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{children:[(0,i.jsx)("strong",{children:"Thickness (t):"})," ",A.t," mm"]}),(0,i.jsxs)("td",{children:[(0,i.jsx)("strong",{children:"Corner Radius (r):"})," ",A.r," mm"]})]}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{colSpan:2,children:[(0,i.jsx)("strong",{children:"Section Area:"})," ",A.Secarea," cm\xb2"]})}),(0,i.jsx)("tr",{children:(0,i.jsx)("td",{colSpan:2,style:{textAlign:"center"},children:(0,i.jsx)("img",{className:"img-show",src:g,alt:"Beam illustration"})})})]})})},A.id)))]})]})}},3625:(A,e,s)=>{s.r(e),s.d(e,{default:()=>c});const c={}},573:A=>{A.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=402.79002260.chunk.js.map