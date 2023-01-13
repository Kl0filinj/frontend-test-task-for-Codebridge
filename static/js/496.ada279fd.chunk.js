"use strict";(self.webpackChunkfrontend_test_task_for_codebridge=self.webpackChunkfrontend_test_task_for_codebridge||[]).push([[496],{496:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var r=n(4087),i=n(9229),c=n(3547),l=n(3821),s=n(3887),a=n(7281),u=n(5946),o=n(123),d=n(6223),x=n(2899),h=n(3303),f=n(1483),j=n(7178),p=n(8613),g=n(4604),m=n(9497),y=n(9434),b=n(536),v=["January","February","March","April","May","June","July","August","September","October","November","December"];function w(e){var t=e.slice(0,4),n=v[Number(e.slice(5,7))-1],r=e.slice(8,10);return"".concat(n," ").concat(r,"th, ").concat(t)}var C=n(1087),k=n(184),A=function(e){var t=e.location,n=e.query,c=(0,y.v9)(b.yA);return(0,k.jsx)(r.xu,{my:"12",children:(0,k.jsxs)(d.M,{minChildWidth:"sm",spacing:"10",children:[0===c.length&&(0,k.jsxs)(u.X,{as:"h1",textAlign:"center",children:["Nothing was found, try to change a query field"," "]}),c.map((function(e){var c,l=e.id,s=e.title,a=e.imageUrl,o=e.summary,d=e.publishedAt;return(0,k.jsx)(x.Z,{maxW:"sm",transition:"box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);",_hover:{boxShadow:"dark-lg",rounded:"md"},children:(0,k.jsxs)(C.OL,{to:"article/".concat(l),state:{from:t},children:[(0,k.jsx)(h.e,{p:"0",children:(0,k.jsx)(f.E,{src:a,alt:"Article preview image",fallbackSrc:"https://via.placeholder.com/400x250",width:"400px",height:"217px",objectFit:"cover",objectPosition:"50% 20%",borderTopRadius:"lg"})}),(0,k.jsxs)(r.xu,{p:"6",children:[(0,k.jsxs)(r.xu,{display:"flex",justifyContent:"start",alignItems:"center",children:[(0,k.jsx)(g.Q,{}),(0,k.jsx)(i.x,{ml:"2.5",children:w(d)})]}),(0,k.jsx)(u.X,{size:"md",mt:"6",children:(0,k.jsx)(j.y$,{query:n,styles:{py:"1",px:"0.5",bg:"yellow.300"},children:s})}),(0,k.jsx)(i.x,{mt:"5",children:(0,k.jsx)(j.y$,{query:n,styles:{py:"1",px:"0.5",bg:"yellow.300"},children:(c=o,c.length<100?c:c.slice(0,100)+" ...")})}),(0,k.jsx)(p.e,{p:"0",children:(0,k.jsxs)(i.x,{mt:"5",_hover:{textDecoration:"underline"},children:["Read more ",(0,k.jsx)(m.m,{mx:"2px"})]})})]})]})},l)}))]})})},_=n(794),q=function(){var e=(0,y.v9)(b.Q$),t=(0,y.I0)(),n=(0,y.v9)(b.tj);return(0,k.jsx)(r.xu,{display:"flex",justifyContent:"center",mt:"6",alignItems:"center",children:n.map((function(i){return i===e&&1!==n.length?(0,k.jsx)(r.xu,{onClick:function(){t((0,_.D4)(i-1))},as:"button",borderRadius:"md",w:"40px",h:"40px",display:"flex",alignItems:"center",justifyContent:"center",bgColor:"blue.600",color:"whiteAlpha.900",children:i},i):(0,k.jsx)(r.xu,{onClick:function(){t((0,_.D4)(i))},w:"40px",h:"40px",as:"button",display:"flex",alignItems:"center",justifyContent:"center",children:i},i)}))})},F=n(7689),I=n(6286),R=n(9439),P=n(2791),Q=n(303),D=function(){var e=(0,P.useState)(""),t=(0,R.Z)(e,2),n=t[0],r=t[1],i=(0,y.I0)(),c=(0,y.v9)(b.Q$),l=(0,y.v9)(b.RQ),s=(0,y.v9)(b.hF);(0,P.useEffect)((function(){i((0,Q.l)({perPage:l,currentPage:c-1,limit:s,filter:n}))}),[i,c,l,s,n]);var a=(0,P.useCallback)((function(e){i((0,_.D4)(1)),r(e.target.value)}),[i]);return{filter:n,chageFilterHandler:a,limit:s}},S=function(){var e=(0,F.TH)(),t=(0,y.v9)(b.xU),n=(0,y.v9)(b.zh),d=D(),x=d.filter,h=d.chageFilterHandler,f=d.limit;return(0,k.jsxs)(r.xu,{py:"14",maxW:"container.xl",mx:"auto",children:[(0,k.jsxs)(r.xu,{mb:"10",children:[(0,k.jsx)(i.x,{children:"Filter by keywords"}),(0,k.jsxs)(c.B,{children:[(0,k.jsx)(l.Z,{pointerEvents:"none",children:(0,k.jsx)(o.G,{color:"gray.300"})}),(0,k.jsx)(s.I,{value:x,type:"tel",placeholder:"Enter your query...",onChange:h})]})]}),(0,k.jsxs)(r.xu,{children:[(0,k.jsxs)(i.x,{children:["Results: ",f]}),(0,k.jsx)(a.i,{})]}),t?(0,k.jsx)(r.xu,{display:"flex",justifyContent:"center",children:(0,k.jsx)(I.no,{visible:!0,height:"150",width:"150",ariaLabel:"blocks-loading",wrapperClass:"blocks-wrapper"})}):(0,k.jsx)(k.Fragment,{children:n?(0,k.jsx)(u.X,{as:"h1",textAlign:"center",children:"Something goes wrong, try reload the page !"}):(0,k.jsx)(A,{location:e,query:x})}),(0,k.jsx)(q,{})]})}},536:function(e,t,n){n.d(t,{Q$:function(){return a},RQ:function(){return u},hF:function(){return o},qt:function(){return s},tj:function(){return d},xU:function(){return c},yA:function(){return i},zh:function(){return l}});var r=n(6916),i=function(e){return e.data.data},c=function(e){return e.data.isLoading},l=function(e){return e.data.error},s=function(e){return e.data.singleArticle},a=function(e){return e.data.currentPage},u=function(e){return e.data.perPage},o=function(e){return e.data.totalCountOfRequest},d=(0,r.P1)([o,u],(function(e,t){return e<=t?[1]:Array.from({length:e/t},(function(e,t){return t+1}))}))}}]);
//# sourceMappingURL=496.ada279fd.chunk.js.map