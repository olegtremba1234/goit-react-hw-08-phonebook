"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[872],{4289:function(o,e,r){r.d(e,{g:function(){return a},v:function(){return t}});var t=function(o){return o.auth.isLoggedIn},a=function(o){var e;return null===(e=o.auth.user)||void 0===e?void 0:e.email}},1872:function(o,e,r){r.r(e),r.d(e,{default:function(){return V}});var t=r(3366),a=r(7462),n=r(2791),i=r(8182),l=r(4419),s=r(7630),c=r(1046),v=r(4036),u=r(5527),p=r(5878),d=r(1217);function h(o){return(0,d.Z)("MuiAppBar",o)}(0,p.Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var f=r(3329),g=["className","color","enableColorOnDark","position"],x=function(o,e){return"".concat(null==o?void 0:o.replace(")",""),", ").concat(e,")")},m=(0,s.ZP)(u.Z,{name:"MuiAppBar",slot:"Root",overridesResolver:function(o,e){var r=o.ownerState;return[e.root,e["position".concat((0,v.Z)(r.position))],e["color".concat((0,v.Z)(r.color))]]}})((function(o){var e=o.theme,r=o.ownerState,t="light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900];return(0,a.Z)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===r.position&&{position:"fixed",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===r.position&&{position:"absolute",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0},"sticky"===r.position&&{position:"sticky",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0},"static"===r.position&&{position:"static"},"relative"===r.position&&{position:"relative"},!e.vars&&(0,a.Z)({},"default"===r.color&&{backgroundColor:t,color:e.palette.getContrastText(t)},r.color&&"default"!==r.color&&"inherit"!==r.color&&"transparent"!==r.color&&{backgroundColor:e.palette[r.color].main,color:e.palette[r.color].contrastText},"inherit"===r.color&&{color:"inherit"},"dark"===e.palette.mode&&!r.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===r.color&&(0,a.Z)({backgroundColor:"transparent",color:"inherit"},"dark"===e.palette.mode&&{backgroundImage:"none"})),e.vars&&(0,a.Z)({},"default"===r.color&&{"--AppBar-background":r.enableColorOnDark?e.vars.palette.AppBar.defaultBg:x(e.vars.palette.AppBar.darkBg,e.vars.palette.AppBar.defaultBg),"--AppBar-color":r.enableColorOnDark?e.vars.palette.text.primary:x(e.vars.palette.AppBar.darkColor,e.vars.palette.text.primary)},r.color&&!r.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":r.enableColorOnDark?e.vars.palette[r.color].main:x(e.vars.palette.AppBar.darkBg,e.vars.palette[r.color].main),"--AppBar-color":r.enableColorOnDark?e.vars.palette[r.color].contrastText:x(e.vars.palette.AppBar.darkColor,e.vars.palette[r.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:"inherit"===r.color?"inherit":"var(--AppBar-color)"},"transparent"===r.color&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))})),Z=n.forwardRef((function(o,e){var r=(0,c.Z)({props:o,name:"MuiAppBar"}),n=r.className,s=r.color,u=void 0===s?"primary":s,p=r.enableColorOnDark,d=void 0!==p&&p,x=r.position,Z=void 0===x?"fixed":x,b=(0,t.Z)(r,g),k=(0,a.Z)({},r,{color:u,position:Z,enableColorOnDark:d}),j=function(o){var e=o.color,r=o.position,t=o.classes,a={root:["root","color".concat((0,v.Z)(e)),"position".concat((0,v.Z)(r))]};return(0,l.Z)(a,h,t)}(k);return(0,f.jsx)(m,(0,a.Z)({square:!0,component:"header",ownerState:k,elevation:4,className:(0,i.Z)(j.root,n,"fixed"===Z&&"mui-fixed"),ref:e},b))})),b=r(4554),k=r(4942);function j(o){return(0,d.Z)("MuiToolbar",o)}(0,p.Z)("MuiToolbar",["root","gutters","regular","dense"]);var w=["className","component","disableGutters","variant"],z=(0,s.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(o,e){var r=o.ownerState;return[e.root,!r.disableGutters&&e.gutters,e[r.variant]]}})((function(o){var e=o.theme,r=o.ownerState;return(0,a.Z)({position:"relative",display:"flex",alignItems:"center"},!r.disableGutters&&(0,k.Z)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),"dense"===r.variant&&{minHeight:48})}),(function(o){var e=o.theme;return"regular"===o.ownerState.variant&&e.mixins.toolbar})),B=n.forwardRef((function(o,e){var r=(0,c.Z)({props:o,name:"MuiToolbar"}),n=r.className,s=r.component,v=void 0===s?"div":s,u=r.disableGutters,p=void 0!==u&&u,d=r.variant,h=void 0===d?"regular":d,g=(0,t.Z)(r,w),x=(0,a.Z)({},r,{component:v,disableGutters:p,variant:h}),m=function(o){var e=o.classes,r={root:["root",!o.disableGutters&&"gutters",o.variant]};return(0,l.Z)(r,j,e)}(x);return(0,f.jsx)(z,(0,a.Z)({as:v,className:(0,i.Z)(m.root,n),ref:e,ownerState:x},g))})),C=r(890),M=r(3400),A=r(4586),R=r(6151),S=r(8343),I=r(521),y=r(1087),D=r(7689),H=r(5048),L=r(4289),O=r(6488),q=r(5579),N=function(){var o=(0,H.v9)(L.g),e=(0,H.I0)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(C.Z,{sx:{mr:2},children:o||null}),(0,f.jsx)(R.Z,{onClick:function(){return e((0,q.kS)())},color:"inherit",endIcon:(0,f.jsx)(O.Z,{}),children:"Logout"})]})},P={textDecoration:"none",color:"white",marginRight:"40px",borderRadius:"5px",padding:"5px 10px",border:"1px solid white"},T={textDecoration:"none",color:"black",backgroundColor:"white",padding:"5px 10px",marginRight:"40px",borderRadius:"5px"},G=function(){var o=(0,H.v9)(L.v);return(0,f.jsxs)(b.Z,{sx:{flexGrow:1},children:[(0,f.jsx)(Z,{position:"static",children:(0,f.jsxs)(B,{children:[(0,f.jsx)(M.Z,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:1},children:(0,f.jsx)(A.Z,{})}),(0,f.jsx)(C.Z,{variant:"h5",component:"div",sx:{flexGrow:1},children:"Phonebook"}),o?(0,f.jsx)(N,{}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(R.Z,{color:"inherit",startIcon:(0,f.jsx)(S.Z,{}),children:(0,f.jsx)(y.OL,{style:function(o){return o.isActive?T:P},to:"/register",children:"Register"})}),(0,f.jsx)(R.Z,{color:"inherit",startIcon:(0,f.jsx)(I.Z,{}),children:(0,f.jsx)(y.OL,{style:function(o){return o.isActive?T:P},to:"/login",children:"Log in"})})]})]})}),(0,f.jsx)(D.j3,{})]})},V=function(){return(0,f.jsx)(G,{})}},8343:function(o,e,r){var t=r(4836);e.Z=void 0;var a=t(r(5649)),n=r(3329),i=(0,a.default)((0,n.jsx)("path",{d:"M10 4h4v4h-4zM4 16h4v4H4zm0-6h4v4H4zm0-6h4v4H4zm12 0h4v4h-4zm-5 13.86V20h2.1l5.98-5.97-2.12-2.12zm3-5.83V10h-4v4h2.03zm6.85-.47-1.41-1.41c-.2-.2-.51-.2-.71 0l-1.06 1.06 2.12 2.12 1.06-1.06c.2-.2.2-.51 0-.71z"}),"AppRegistrationOutlined");e.Z=i},4586:function(o,e,r){var t=r(4836);e.Z=void 0;var a=t(r(5649)),n=r(3329),i=(0,a.default)((0,n.jsx)("path",{d:"M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z"}),"Contacts");e.Z=i},521:function(o,e,r){var t=r(4836);e.Z=void 0;var a=t(r(5649)),n=r(3329),i=(0,a.default)((0,n.jsx)("path",{d:"M11 7 9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"}),"Login");e.Z=i},6488:function(o,e,r){var t=r(4836);e.Z=void 0;var a=t(r(5649)),n=r(3329),i=(0,a.default)((0,n.jsx)("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"}),"Logout");e.Z=i},5527:function(o,e,r){r.d(e,{Z:function(){return m}});var t=r(3366),a=r(7462),n=r(2791),i=r(8182),l=r(4419),s=r(2065),c=r(7630),v=function(o){return((o<1?5.11916*Math.pow(o,2):4.5*Math.log(o+1)+2)/100).toFixed(2)},u=r(1046),p=r(5878),d=r(1217);function h(o){return(0,d.Z)("MuiPaper",o)}(0,p.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var f=r(3329),g=["className","component","elevation","square","variant"],x=(0,c.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(o,e){var r=o.ownerState;return[e.root,e[r.variant],!r.square&&e.rounded,"elevation"===r.variant&&e["elevation".concat(r.elevation)]]}})((function(o){var e,r=o.theme,t=o.ownerState;return(0,a.Z)({backgroundColor:(r.vars||r).palette.background.paper,color:(r.vars||r).palette.text.primary,transition:r.transitions.create("box-shadow")},!t.square&&{borderRadius:r.shape.borderRadius},"outlined"===t.variant&&{border:"1px solid ".concat((r.vars||r).palette.divider)},"elevation"===t.variant&&(0,a.Z)({boxShadow:(r.vars||r).shadows[t.elevation]},!r.vars&&"dark"===r.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,s.Fq)("#fff",v(t.elevation)),", ").concat((0,s.Fq)("#fff",v(t.elevation)),")")},r.vars&&{backgroundImage:null==(e=r.vars.overlays)?void 0:e[t.elevation]}))})),m=n.forwardRef((function(o,e){var r=(0,u.Z)({props:o,name:"MuiPaper"}),n=r.className,s=r.component,c=void 0===s?"div":s,v=r.elevation,p=void 0===v?1:v,d=r.square,m=void 0!==d&&d,Z=r.variant,b=void 0===Z?"elevation":Z,k=(0,t.Z)(r,g),j=(0,a.Z)({},r,{component:c,elevation:p,square:m,variant:b}),w=function(o){var e=o.square,r=o.elevation,t=o.variant,a=o.classes,n={root:["root",t,!e&&"rounded","elevation"===t&&"elevation".concat(r)]};return(0,l.Z)(n,h,a)}(j);return(0,f.jsx)(x,(0,a.Z)({as:c,ownerState:j,className:(0,i.Z)(w.root,n),ref:e},k))}))}}]);
//# sourceMappingURL=872.74dad7e9.chunk.js.map