(this.webpackJsonpamplify=this.webpackJsonpamplify||[]).push([[0],{46:function(e,a,t){},64:function(e,a,t){e.exports=t(77)},69:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),i=t.n(l),c=t(28),m=t(22),o=(t(69),t(29)),s=t(20),u=t(49),g=t(50),p=t(14),d=t(55),f=t(115),E=t(117),h=t(118),v=t(114),b=t(36),y=(t(46),t(110)),N=t(113),C=t(112),j=t(107),k=t(52),w=t.n(k),O=t(119),A=Object(j.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1},avatar:{margin:e.spacing(1),backgroundColor:e.palette.primary.main}}}));function x(){var e=Object(n.useState)(!1),a=Object(b.a)(e,2),t=a[0],l=a[1],i=A();return r.a.createElement("div",{className:i.root},t?r.a.createElement(m.a,{to:"/"}):null,r.a.createElement(y.a,{position:"static",style:{background:"#DFE1DF"}},r.a.createElement(C.a,null,r.a.createElement(O.a,{className:i.avatar},r.a.createElement(w.a,null)),r.a.createElement(N.a,{color:"primary",justify:"center",variant:"h4",className:i.title},"CloudReady"),"/"!==window.location.pathname?r.a.createElement(h.a,{color:"primary",variant:"outlined",className:"menuButton",onClick:function(){return l(!0)}}," Logout "):null)))}var S=t(54),I=Object(S.a)({palette:{primary:{main:"#d11947",contrastText:"#ffffff"},secondary:{main:"#ffffff",contrastText:"#d11947"},calmblue:{backgroundColor:"#008ccf",color:"#ffffff"},poppingpurple:{backgroundColor:"#712d91",color:"#ffffff"},gradientgray:{background:"linear-gradient(to top, #878a8f, #c7c9c8 10%, #ffffff 35%)"}}}),P=Object(j.a)((function(e){return{avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main}}})),T=(t(76),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(g.a)(a).call(this,e))).pageRef=r.a.createRef(),t.onZipChange=t.onZipChange.bind(Object(p.a)(t)),t.onPhoneNumberChange=t.onPhoneNumberChange.bind(Object(p.a)(t)),t.clearInputs=t.clearInputs.bind(Object(p.a)(t)),t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"onZipChange",value:function(e){isNaN(e.target.value.replace("-",""))||e.target.value.length>10||"-"===e.target.value.slice(-1)?e.target.value=e.target.value.substring(0,e.target.value.length-1):6===e.target.value.length&&(e.target.value=e.target.value.substring(0,5)+"-"+e.target.value.charAt(5))}},{key:"_cleanPhoneNumber",value:function(e){return e.length&&(13!==e.length||"("!==e.charAt(0)||")"!==e.charAt(4)||"-"!==e.charAt(8)||isNaN(e.substring(1,4))||isNaN(e.substring(5,8))||isNaN(e.substring(9,13)))?null:e.replace("(","").replace(")","").replace("-","")}},{key:"onPhoneNumberChange",value:function(e){e.target.value.length>13||isNaN(e.target.value.replace("(","").replace(")","").replace("-",""))||"("===e.target.value.slice(-1)||")"===e.target.value.slice(-1)||"-"===e.target.value.slice(-1)?e.target.value=e.target.value.substring(0,e.target.value.length-1):4===e.target.value.length?e.target.value="("+e.target.value.substring(0,3)+")"+e.target.value.charAt(3):9===e.target.value.length&&(e.target.value=e.target.value.substring(0,8)+"-"+e.target.value.charAt(8)),"("===e.target.value.charAt(0)&&-1===e.target.value.indexOf(")")&&(e.target.value=e.target.value.substring(1,e.target.value.length))}},{key:"clearInputs",value:function(){for(var e=this.pageRef.parentNode.querySelectorAll(".input"),a=0;a<e.length;a++)e[a].querySelector("input").value=""}},{key:"render",value:function(){var e=this;return r.a.createElement(v.a,{theme:I},r.a.createElement(x,null),r.a.createElement("div",{className:"page",ref:function(a){return e.pageRef=a}},r.a.createElement(f.a,{container:!0},r.a.createElement(f.a,{container:!0,spacing:2},r.a.createElement(f.a,{item:!0},r.a.createElement(E.a,{id:"first-name",label:"First Name",className:"input",style:I.palette.gradientgray})),r.a.createElement(f.a,{item:!0},r.a.createElement(E.a,{id:"middle-name",label:"Middle Name",className:"input",style:I.palette.gradientgray})),r.a.createElement(f.a,{item:!0},r.a.createElement(E.a,{id:"last-name",label:"Last Name",className:"input",style:I.palette.gradientgray})),r.a.createElement(f.a,{item:!0,style:{flexGrow:2}}),r.a.createElement(f.a,{item:!0},r.a.createElement(E.a,{id:"constituent-id",label:"Constituent ID",className:"input",style:I.palette.gradientgray}))),r.a.createElement(f.a,{container:!0,style:{marginTop:"2rem"},spacing:2},r.a.createElement(f.a,{item:!0},r.a.createElement(E.a,{id:"street1",label:"Address",className:"input",style:I.palette.gradientgray})),r.a.createElement(f.a,{item:!0},r.a.createElement(E.a,{id:"street2",label:"Address 2",className:"input",style:I.palette.gradientgray})),r.a.createElement(f.a,{item:!0},r.a.createElement(E.a,{id:"city",label:"City",className:"input",style:I.palette.gradientgray})),r.a.createElement(f.a,{item:!0},r.a.createElement(E.a,{id:"state",label:"State",className:"input",style:I.palette.gradientgray})),r.a.createElement(f.a,{item:!0},r.a.createElement(E.a,{id:"zip",label:"Zip Code",className:"input",style:I.palette.gradientgray,onChange:this.onZipChange}))),r.a.createElement(f.a,{container:!0,style:{marginTop:"2rem"},spacing:2},r.a.createElement(f.a,{item:!0},r.a.createElement(E.a,{id:"email",label:"Email",className:"input",style:I.palette.gradientgray})),r.a.createElement(f.a,{item:!0},r.a.createElement(E.a,{id:"phone",label:"Phone Number",className:"input",style:I.palette.gradientgray,onChange:this.onPhoneNumberChange}))),r.a.createElement(f.a,{container:!0,style:{marginTop:"2rem"},spacing:2},r.a.createElement(f.a,{item:!0},r.a.createElement(h.a,{id:"searchButton",variant:"contained",style:I.palette.calmblue},"Search")),r.a.createElement(f.a,{item:!0},r.a.createElement(h.a,{id:"clearButton",variant:"contained",style:I.palette.calmblue,onClick:this.clearInputs},"Clear"))))))}}]),a}(n.Component)),B=t(116),R=t(53),W=t.n(R),Z=function(){var e=Object(n.useState)(!1),a=Object(b.a)(e,2),t=a[0],l=a[1];var i=P();return r.a.createElement(v.a,{theme:I},t?r.a.createElement(m.a,{to:"/search"}):null,r.a.createElement(x,null),r.a.createElement(B.a,{component:"main",maxWidth:"sm",style:{marginTop:"8rem"}},r.a.createElement("div",{className:"page"},r.a.createElement(f.a,{container:!0,justify:"center",style:{marginBottom:"2rem"}},r.a.createElement(f.a,{item:!0},r.a.createElement(O.a,{className:i.avatar},r.a.createElement(W.a,null)))),r.a.createElement(f.a,{container:!0,justify:"center"},r.a.createElement(f.a,{container:!0,justify:"center"},r.a.createElement(f.a,{item:!0},r.a.createElement(N.a,{component:"h1",variant:"h5"},"Sign In")))),r.a.createElement(f.a,{item:!0},r.a.createElement(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0})),r.a.createElement(f.a,{item:!0},r.a.createElement(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"})),r.a.createElement(f.a,{container:!0,style:{marginTop:"1rem"},justify:"center"},r.a.createElement(f.a,{item:!0},r.a.createElement(h.a,{variant:"contained",style:I.palette.calmblue,onClick:function(){l(!0)}},"Sign in"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(c.a,null,r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",component:Z}),r.a.createElement(m.b,{path:"/search",component:T}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[64,1,2]]]);
//# sourceMappingURL=main.72e00d9b.chunk.js.map