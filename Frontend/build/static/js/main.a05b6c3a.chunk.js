(this["webpackJsonpbtp-sem-4-project"]=this["webpackJsonpbtp-sem-4-project"]||[]).push([[0],{234:function(e,t,n){},235:function(e,t,n){},239:function(e,t){},241:function(e,t){},254:function(e,t){},256:function(e,t){},284:function(e,t){},286:function(e,t){},287:function(e,t){},292:function(e,t){},294:function(e,t){},313:function(e,t){},325:function(e,t){},328:function(e,t){},368:function(e,t,n){},369:function(e,t,n){},372:function(e,t,n){},373:function(e,t,n){},374:function(e,t,n){},388:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(0),s=n.n(i),r=n(12),c=n.n(r),o=(n(234),n(14)),l=(n(235),n(36)),j=n(16),d=(n(65),n(440)),h=n(432),u=n(431),b=n(428),m=n(392),O=n(439),f=n(430),g=n(202),p=n.n(g),x=n(390),y=n(438),v=n(429),S=n(9);n(185);function w(){return Object(a.jsxs)(x.a,{variant:"body2",color:"textSecondary",align:"center",children:["\xa9 ",Object(a.jsx)(b.a,{color:"inherit",href:"https://material-ui.com/",children:"Files"})," ",(new Date).getFullYear(),"."]})}S.a.configure();var N=Object(v.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(/images/st.jfif)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(3),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(6)},submit:{margin:e.spacing(3,0,2)}}}));function k(){var e=Object(i.useContext)(ue),t=(e.state,e.dispatch),n=Object(i.useState)(!1),s=Object(o.a)(n,2),r=s[0],c=s[1],l=Object(i.useState)(""),g=Object(o.a)(l,2),v=g[0],k=g[1],C=Object(i.useState)(""),E=Object(o.a)(C,2),A=E[0],P=E[1],I=Object(j.f)(),H=N();return Object(a.jsxs)(a.Fragment,{children:[r,!r&&Object(a.jsxs)(f.a,{container:!0,component:"main",className:H.root,children:[Object(a.jsx)(u.a,{}),Object(a.jsx)(f.a,{item:!0,xs:!1,sm:4,md:7,className:H.image}),Object(a.jsx)(f.a,{item:!0,xs:12,sm:8,md:5,component:m.a,elevation:6,square:!0,children:Object(a.jsxs)("div",{className:H.paper,children:[Object(a.jsx)(d.a,{className:H.avatar,children:Object(a.jsx)(p.a,{})}),Object(a.jsx)(x.a,{component:"h1",variant:"h5",children:"Student Sign in"}),Object(a.jsxs)("form",{className:H.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),c(!0),""===v||""===A?(S.a.error("Please fill all fields !",{position:S.a.POSITION.TOP_CENTER}),c(!1)):fetch("http://localhost:3001/api/student/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:v,password:A})}).then((function(e){return e.json()})).then((function(e){c(!1),console.log(e),"Success"===e.message?(localStorage.setItem("userinfo",JSON.stringify(e)),t({type:"USER",payload:!0}),S.a.success("Sweet !",{position:S.a.POSITION.TOP_CENTER,autoClose:1500}),I.push("/search")):(S.a.error("".concat(e.message),{position:S.a.POSITION.TOP_CENTER}),I.push("/"))}))},children:[Object(a.jsx)(f.a,{item:!0,xs:12,style:{marginBottom:"20px"},children:Object(a.jsx)(y.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",onChange:function(e){return k(e.target.value)}})}),Object(a.jsx)(f.a,{item:!0,xs:12,children:Object(a.jsx)(y.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",onChange:function(e){return P(e.target.value)}})}),Object(a.jsx)(h.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:H.submit,children:"Sign In"}),Object(a.jsx)(O.a,{mt:3}),Object(a.jsx)(f.a,{container:!0,children:Object(a.jsx)(f.a,{item:!0,children:Object(a.jsx)(b.a,{href:"/signup",variant:"body2",children:"Don't have an account? Sign Up"})})}),Object(a.jsx)(O.a,{mt:5,children:Object(a.jsx)(w,{})})]})]})})]})]})}var C=n(203),E=n.n(C);function A(){return Object(a.jsxs)(x.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(a.jsx)(b.a,{color:"inherit",href:"https://material-ui.com/",children:"Library"})," ",(new Date).getFullYear(),"."]})}S.a.configure();var P=Object(v.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(/images/img.jpg)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(1,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(5)},submit:{margin:e.spacing(1,0,2)},container:{display:"flex",flexWrap:"wrap"},input:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200}}}));function I(){var e=P(),t=Object(j.f)();s.a.useEffect((function(){try{var e=localStorage.getItem("userinfo");console.log(e),e&&localStorage.removeItem("userinfo")}catch(n){console.log(n),S.a.error(n),S.a.error("Please sign in first",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),t.push("/signup")}}),[]);var n=Object(i.useState)(""),r=Object(o.a)(n,2),c=r[0],l=r[1],g=Object(i.useState)(""),p=Object(o.a)(g,2),v=p[0],w=p[1],N=Object(i.useState)(""),k=Object(o.a)(N,2),C=k[0],I=k[1],H=Object(i.useState)(""),F=Object(o.a)(H,2),X=F[0],M=F[1],T=Object(i.useState)(""),R=Object(o.a)(T,2),z=R[0],K=R[1],L=Object(i.useState)(""),W=Object(o.a)(L,2),q=W[0],B=W[1];function Y(e){return new Promise((function(t){return setTimeout(t,e)}))}return Object(a.jsx)("div",{children:Object(a.jsx)("div",{children:Object(a.jsxs)(f.a,{container:!0,component:"main",className:e.root,children:[Object(a.jsx)(u.a,{}),Object(a.jsx)(f.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),Object(a.jsx)(f.a,{item:!0,xs:12,sm:8,md:5,component:m.a,elevation:6,square:!0,children:Object(a.jsxs)("div",{className:e.paper,children:[Object(a.jsx)(d.a,{className:e.avatar,children:Object(a.jsx)(E.a,{})}),Object(a.jsx)(x.a,{component:"h1",variant:"h5",children:"Student Sign Up"}),Object(a.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),""===q||""===C||""===X?S.a.error("Please fill all fields !",{position:S.a.POSITION.TOP_CENTER}):10!==q.length?S.a.error("Please enter correct contact number !",{position:S.a.POSITION.TOP_CENTER}):X.length<=6?S.a.error("Password Must Be Greater than 6 length",{position:S.a.POSITION.TOP_CENTER}):X.length>6&&X===z&&fetch("http://localhost:3001/api/student/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:c,lastName:v,email:C,password:X,contactNo:q})}).then((function(e){return e.json()})).then((function(e){"Success"===e.message?(localStorage.setItem("userinfo",JSON.stringify(e)),S.a.success("Sweet !",{position:S.a.POSITION.TOP_CENTER,autoClose:1500}),Y(2e3).then((function(){t.push("/search")}))):(S.a.error("".concat(e.message),{position:S.a.POSITION.TOP_CENTER,autoClose:2e3}),Y(2300).then((function(){window.location.reload(!1),t.push("/signup")})))}))},children:[Object(a.jsxs)(f.a,{container:!0,spacing:2,children:[Object(a.jsx)(f.a,{item:!0,xs:12,sm:6,children:Object(a.jsx)(y.a,{name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,onChange:function(e){return l(e.target.value)}})}),Object(a.jsx)(f.a,{item:!0,xs:12,sm:6,children:Object(a.jsx)(y.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",onChange:function(e){return w(e.target.value)}})}),Object(a.jsx)(f.a,{item:!0,xs:12,children:Object(a.jsx)(y.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",onChange:function(e){return I(e.target.value)}})}),Object(a.jsx)(f.a,{item:!0,xs:12,children:Object(a.jsx)(y.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",onChange:function(e){return M(e.target.value)}})}),Object(a.jsx)(f.a,{item:!0,xs:12,children:Object(a.jsx)(y.a,{variant:"outlined",required:!0,fullWidth:!0,name:"confirmPassword",label:"Confirm Password",id:"confirmPassword",type:"password",onChange:function(e){return K(e.target.value)}})}),Object(a.jsx)(f.a,{item:!0,xs:12,children:Object(a.jsx)(y.a,{variant:"outlined",required:!0,fullWidth:!0,name:"contactnumber",label:"Contact Number",id:"contactnumber",type:"string",onChange:function(e){return B(e.target.value)}})})]}),Object(a.jsx)(h.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"SIGN UP"}),Object(a.jsx)(O.a,{mt:3}),Object(a.jsxs)(f.a,{container:!0,children:[Object(a.jsx)(f.a,{item:!0,xs:!0}),Object(a.jsx)(f.a,{item:!0,children:Object(a.jsx)(b.a,{href:"/",variant:"body2",children:"Already have an account? Sign In"})})]}),Object(a.jsx)(O.a,{mt:5,children:Object(a.jsx)(A,{})})]})]})})]})})})}var H=n(204),F=n(205),X=n(209),M=n(208),T=function(e){Object(X.a)(n,e);var t=Object(M.a)(n);function n(){return Object(H.a)(this,n),t.apply(this,arguments)}return Object(F.a)(n,[{key:"render",value:function(){return window.onload=function(){window.location.hash||(window.location=window.location+"#loaded",window.location.reload())},Object(a.jsxs)("div",{style:{textAlign:"center"},children:[Object(a.jsx)("h1",{children:"(\u0e51\u2022\u0301\u317f\u2022\u0300\u0e51)"}),Object(a.jsx)("h1",{children:"Sorry!"}),Object(a.jsx)("h1",{children:"404 Not Found"}),Object(a.jsxs)("h2",{children:["Either you aren't cool enough to visit this page or it doesn't exist","  ",Object(a.jsx)("em",{children:". . . "})]})]})}}]),n}(s.a.Component),R=n(23),z=n(433),K=n(434),L=n(437),W=n(436),q=n(435),B=n.p+"static/media/download.b7a96933.jfif",Y=(n(5),n(38)),G=n.n(Y),J=n(123),U=n.n(J),Z=n(206),V=(n(368),n(369),function(){var e=Object(i.useState)({name:"",email:"",phone:"",message:""}),t=Object(o.a)(e,2),n=t[0],s=t[1],r=function(e){var t=e.target,n=t.value,a=t.name;s((function(e){return"name"===a?{name:n,email:e.email,message:e.message,phone:e.phone}:"message"===a?{name:e.name,email:e.email,message:n,phone:e.phone}:"phone"===a?{name:e.name,email:e.email,message:e.message,phone:n}:"email"===a?{name:e.name,email:n,message:e.message,phone:e.phone}:void 0}))};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("link",{href:"Style.css",rel:"stylesheet"}),Object(a.jsx)("div",{className:"bodys",children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(n.email),""===n.email||""===n.message||""===n.phone||""===n.name?(alert("Please fill all the feilds"),window.location.reload()):G.a.post("http://localhost:3001/api/feedback",{email:n.email,message:n.message,name:n.name}).then((function(e){})),alert("Thank You for your response"),window.location.reload()},children:[Object(a.jsx)("h1",{className:"feed",children:"FEEDBACK"}),Object(a.jsx)("p",{className:"feed",children:"Please take a moment to get in touch, we will get back to you shortly."}),Object(a.jsxs)("div",{className:"columnss",children:[Object(a.jsx)("div",{className:"the-name",children:"Your Name"}),Object(a.jsx)("input",{type:"text",name:"name",id:"the-name",onChange:r,value:n.name}),Object(a.jsx)("div",{className:"the-email",children:"Email Address "}),Object(a.jsx)("input",{type:"email",name:"email",id:"the-email",onChange:r}),Object(a.jsx)("div",{className:"the-phone",children:"Phone Number"}),Object(a.jsx)("input",{type:"tel",name:"phone",id:"the-phone",onChange:r,value:n.phone})]}),Object(a.jsxs)("div",{className:"columnss",children:[Object(a.jsx)("label",{className:"the-message",children:"MESSAGE"}),Object(a.jsx)("textarea",{name:"message",id:"the-message",defaultValue:"",onChange:r,value:n.message}),Object(a.jsx)("input",{type:"submit",defaultValue:"Send Message"})]})]})})]})});n(65);n(119).config();Object(v.a)((function(e){return{root:{flexGrow:1},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(R.a)(Object(R.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},title:{flexGrow:1}}}));function Q(){window.location.reload(!0)}function D(){document.referrer!==document.location.href&&setTimeout((function(){document.location.reload()}),3e3);var e=Object(i.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1];return s.a.useEffect(Object(Z.a)(U.a.mark((function e(){var t;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t=localStorage.getItem("userinfo"),console.log(t),t?(console.log("This is "+t),r(t._id)):console.log("User is not logged in")}catch(n){console.log(n),console.log("user in catch block")}case 1:case"end":return e.stop()}}),e)}))),[]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"nav",children:Object(a.jsxs)("ul",{children:[""===n?Object(a.jsx)("li",{children:Object(a.jsx)(h.a,{href:"/",className:"nav-link",onClick:Q,children:Object(a.jsx)("h2",{style:{color:"black",fontFamily:"'Mukta', sans-serif",fontWeight:"bold",fontStyle:"italic"},children:"Home"})})}):"",""===n?Object(a.jsx)("li",{children:Object(a.jsx)(h.a,{href:"/signup",className:"nav-link",onClick:Q,children:Object(a.jsx)("h2",{style:{color:"black",fontFamily:"'Mukta', sans-serif",fontWeight:"bold",fontStyle:"italic"},children:"Register"})})}):"",""!==n?Object(a.jsx)("li",{children:Object(a.jsx)(h.a,{href:"/search",className:"nav-link",onClick:Q,children:Object(a.jsx)("h2",{style:{color:"black",fontFamily:"'Mukta', sans-serif",fontWeight:"bold",fontStyle:"italic"},children:"Files"})})}):"",Object(a.jsx)("li",{children:Object(a.jsx)(h.a,{href:"/feedback",className:"nav-link",onClick:Q,children:Object(a.jsx)("h2",{style:{color:"black",fontFamily:"'Mukta', sans-serif",fontWeight:"bold",fontStyle:"italic"},children:"Give Your Feedback"})})}),""!==n?Object(a.jsx)("li",{children:Object(a.jsx)(h.a,{href:"/upload",className:"nav-link",onClick:Q,children:Object(a.jsx)("h2",{style:{color:"black",fontFamily:"'Mukta', sans-serif",fontWeight:"bold",fontStyle:"italic"},children:"Upload Your Notes"})})}):"",""!==n?Object(a.jsx)("li",{children:Object(a.jsx)(h.a,{href:"/logout",className:"nav-link",onClick:Q,children:Object(a.jsx)("h2",{style:{color:"black",fontFamily:"'Mukta', sans-serif",fontWeight:"bold",fontStyle:"italic"},children:"Log Out"})})}):""]})})})}var _=Object(v.a)((function(e){return{root:{flexGrow:1.6,padding:e.spacing(4),maxWidth:380},media:{height:140}}}));function $(e){var t=_(),n=s.a.useState("kl"),i=Object(o.a)(n,2);i[0],i[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(b.a,{href:"http://localhost:3001/files/"+e.filename,children:Object(a.jsxs)(z.a,{className:t.root,children:[Object(a.jsxs)(K.a,{children:[Object(a.jsx)(q.a,{className:t.media,image:B,title:e.filename}),Object(a.jsxs)(W.a,{children:[Object(a.jsxs)(x.a,{gutterBottom:!0,variant:"h5",component:"h2",children:[Object(a.jsxs)("h4",{children:["Document Name-",e.filename]}),Object(a.jsx)("p",{})]}),Object(a.jsx)(x.a,{variant:"body2",color:"textSecondary",component:"p"})]})]}),Object(a.jsx)(L.a,{})]})})})}function ee(e){var t=s.a.useState([]),n=Object(o.a)(t,2),i=n[0],r=n[1],c=s.a.useState(""),l=Object(o.a)(c,2),j=l[0],d=l[1];return s.a.useEffect((function(){G.a.post("http://localhost:3001/allfiles").then((function(e){console.log(e),r(e.data.files)}))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("form",{children:Object(a.jsx)("input",{type:"text",class:"textbox",placeholder:"Search",onChange:function(e){d(e.target.value)}})}),i.filter((function(e){return""===j||e.filename.toLowerCase().includes(j.toLowerCase())?e:void 0})).map((function(e,t){return Object(a.jsx)("div",{style:{marginRight:"20px",width:"25rem",marginTop:"30px",justifyContent:"center"},children:Object(a.jsx)($,Object(R.a)({},e))})}))]})}n(372);var te=n(34),ne=n(30),ae=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("footer",{class:"footer",children:Object(a.jsx)("div",{class:"container1",children:Object(a.jsxs)("div",{class:"row1",children:[Object(a.jsxs)("div",{class:"footer-col",children:[Object(a.jsx)("h4",{children:"Get to Know Me"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"/aboutus",children:"About Me"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"/feedback",children:"Feedback"})})]})]}),Object(a.jsxs)("div",{class:"footer-col",children:[Object(a.jsx)("h4",{children:"Connect with Me"}),Object(a.jsx)("a",{href:"/aboutus",className:"linkdin social",children:Object(a.jsx)(te.a,{icon:ne.c,size:"2x",style:{color:"#bbbbbb"}})}),Object(a.jsx)("a",{href:"/aboutus",className:"facebook social",children:Object(a.jsx)(te.a,{icon:ne.a,size:"2x",style:{color:"#bbbbbb"}})}),Object(a.jsx)("a",{href:"/aboutus",className:"twitter social",children:Object(a.jsx)(te.a,{icon:ne.d,size:"2x",style:{color:"#bbbbbb"}})}),Object(a.jsx)("a",{href:"/aboutus",className:"instagram social",children:Object(a.jsx)(te.a,{icon:ne.b,size:"2x",style:{marginRight:"10px",color:"#bbbbbb"}})})]}),Object(a.jsxs)("div",{class:"footer-col",children:[Object(a.jsx)("h4",{children:"Important links"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"/",children:" Home Screen"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"/feedback",children:"Feedback"})})]})]}),Object(a.jsxs)("div",{class:"footer-col",children:[Object(a.jsx)("h4",{children:"Login"}),Object(a.jsx)("ul",{children:Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"/",children:"User Login"})})})]})]})})})})},ie=(n(373),n.p+"static/media/AMIT.b70371ea.jpeg"),se=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{style:{fontFamily:"Trebuchet MS",marginTop:"10px"},children:Object(a.jsx)("center",{children:Object(a.jsx)("b",{children:Object(a.jsx)("u",{children:"Contact ME"})})})}),Object(a.jsxs)("div",{class:"row",children:[Object(a.jsx)("div",{class:"column",children:Object(a.jsxs)("div",{class:"card",children:[Object(a.jsx)("img",{className:"aboutusimage",src:ie,alt:"Amit",style:{width:"80%"}}),Object(a.jsx)("h3",{children:"AMIT KUMAR UPDHYAY"}),Object(a.jsx)("p",{class:"title",children:"Computer Science and Engineering"}),Object(a.jsxs)("p",{children:[" ",Object(a.jsx)("h2",{style:{fontFamily:"Arial"},children:"IIIT PUNE"})]}),Object(a.jsx)("a",{href:"https://www.linkedin.com/in/amit-kumar-upadhyay-054b07193/",className:"linkdin social",children:Object(a.jsx)(te.a,{icon:ne.c,size:"2x"})}),Object(a.jsx)("a",{href:"https://www.facebook.com/profile.php?id=100009546061383",className:"facebook social",children:Object(a.jsx)(te.a,{icon:ne.a,size:"2x"})}),Object(a.jsx)("a",{href:"https://twitter.com/AmitKum01184222",className:"twitter social",children:Object(a.jsx)(te.a,{icon:ne.d,size:"2x"})}),Object(a.jsx)("a",{href:"https://www.instagram.com/u_amit65/",className:"instagram social",children:Object(a.jsx)(te.a,{icon:ne.b,size:"2x"})}),Object(a.jsx)("p",{children:Object(a.jsx)("a",{href:"mailto:amitupadhyay468@gmail.com",target:"blank",class:"contact",children:"Contact"})})]})}),Object(a.jsx)("div",{class:"column1",children:Object(a.jsx)("div",{class:"card1",children:Object(a.jsxs)("div",{class:"w",children:[Object(a.jsx)("h2",{style:{fontFamily:"Trebuchet MS",textAlign:"center"},className:"whyus",children:Object(a.jsx)("b",{children:Object(a.jsx)("u",{children:"WHY ME? \ud83e\udd14"})})}),Object(a.jsx)("p",{children:Object(a.jsx)("div",{class:"w01",children:"1.All the documents that you need are here."})}),Object(a.jsx)("p",{children:Object(a.jsx)("div",{class:"w01",children:"2.Uploaded by your friends for you."})}),Object(a.jsx)("p",{children:Object(a.jsx)("div",{class:"w01",children:"3.Help your friend by uploading documents."})})]})})})]})]})},re=(n(374),n(207));S.a.configure();n(65);var ce=Object(v.a)((function(e){return{root:{flexGrow:1.6,padding:e.spacing(2),maxWidth:700,marginBottom:0,marginTop:1e-5,textAlign:"center",boxShadow:"5px 10px #888888",transition:"0.3s",borderRadius:"22px",perspective:"1000px",cursor:"pointer",fontfamily:"Arial, Helvetica, sans-serif"},media:{height:240,width:305,textAlign:"center",justifyContent:"center",fontfamily:"Arial, Helvetica, sans-serif"}}}));function oe(e){var t=ce(),n=s.a.useState("kl"),i=Object(o.a)(n,2);i[0],i[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(b.a,{href:"http://localhost:3001/files/"+e.filename,children:Object(a.jsx)(z.a,{className:t.root,children:Object(a.jsxs)("div",{className:"column",children:[Object(a.jsxs)(K.a,{children:[Object(a.jsx)(q.a,{className:t.media,image:"data:image/png;base64,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",title:e.filename,fontfamily:"Arial, Helvetica, sans-serif"}),Object(a.jsxs)(W.a,{children:[Object(a.jsxs)(x.a,{gutterBottom:!0,variant:"h5",component:"h2",children:[e.filename,Object(a.jsx)("p",{})]}),Object(a.jsx)(x.a,{variant:"body2",fontfamily:"Arial, Helvetica, sans-serif",color:"textSecondary",component:"p"})]})]}),Object(a.jsx)(L.a,{})]})})})})}function le(){document.referrer!==document.location.href&&setTimeout((function(){document.location.reload()}),3e3);ce();var e=Object(j.f)(),t=s.a.useState([]),n=Object(o.a)(t,2),i=n[0],r=n[1],c=s.a.useState(""),l=Object(o.a)(c,2),d=l[0],h=l[1],u=s.a.useState(""),b=Object(o.a)(u,2);b[0],b[1];return s.a.useEffect((function(){try{var t=localStorage.getItem("userinfo");console.log(t),t?G.a.post("http://localhost:3001/allfiles").then((function(t){console.log(t),r(t.data.files),e.push("/search")})):(S.a.error("Please sign in first",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),e.push("/"))}catch(n){console.log(n),S.a.error(n),S.a.error("Please sign in first",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),e.push("/")}}),[]),Object(a.jsxs)("div",{style:{background:"#12c2e9"},children:[Object(a.jsx)("div",{className:"Appy",children:Object(a.jsx)("input",{type:"text",class:"textbox",placeholder:"Search",onChange:function(e){h(e.target.value)}})}),Object(a.jsx)("div",{className:"home",children:Object(a.jsx)(re.Container,{className:"root-container",children:Object(a.jsx)(f.a,{className:"sample-grid",container:!0,spacing:1,children:i.filter((function(e){return""===d||e.filename.toLowerCase().includes(d.toLowerCase())?e:void 0})).map((function(e,t){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(f.a,{className:"feedback-requesters-grid",container:!0,item:!0,xs:4,children:Object(a.jsx)("div",{style:{marginRight:"10px",width:"21rem",marginTop:"20px",justifyContent:"center",textAlign:"center"},children:Object(a.jsx)(oe,Object(R.a)({},e))})})})}))})})})]})}n(65);n(119).config();Object(v.a)((function(e){return{root:{flexGrow:1},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(R.a)(Object(R.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},title:{flexGrow:1}}}));function je(){var e=Object(j.f)();return s.a.useEffect((function(){try{var t=localStorage.getItem("userinfo");console.log(t),t?window.location.href="http://localhost:3001":(S.a.error("Please sign in first",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),e.push("/"))}catch(n){console.log(n),S.a.error(n),S.a.error("Please sign in first",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),e.push("/")}}),[]),Object(a.jsx)(a.Fragment,{})}n(65);n(119).config();Object(v.a)((function(e){return{root:{flexGrow:1},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(R.a)(Object(R.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},title:{flexGrow:1}}}));function de(){var e=Object(j.f)();return s.a.useEffect((function(){try{var t=localStorage.getItem("userinfo");console.log(t),t?(localStorage.removeItem("userinfo"),S.a.success("Successfuly Logout",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),e.push("/")):(S.a.error("Please sign in first",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),e.push("/"))}catch(n){console.log(n),S.a.error(n),S.a.error("Please sign in first",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),e.push("/")}}),[]),Object(a.jsx)(a.Fragment,{})}var he=function(e,t){return"USER"===t.type?t.payload:e},ue=Object(i.createContext)();var be=function(){var e=Object(i.useReducer)(he,null),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(a.jsx)(l.a,{children:Object(a.jsx)(ue.Provider,{value:{state:n,dispatch:s},children:Object(a.jsxs)("div",{className:"grid-container",children:[Object(a.jsx)("header",{children:Object(a.jsx)(D,{})}),Object(a.jsx)("main",{children:Object(a.jsxs)(j.c,{children:[Object(a.jsx)(j.a,{path:"/search",component:le,exact:!0}),Object(a.jsx)(j.a,{path:"/",component:k,exact:!0}),Object(a.jsx)(j.a,{path:"/upload",component:je,exact:!0}),Object(a.jsx)(j.a,{path:"/signup",component:I,exact:!0}),Object(a.jsx)(j.a,{path:"/search",component:ee}),Object(a.jsx)(j.a,{path:"/aboutus",component:se}),Object(a.jsx)(j.a,{path:"/feedback",component:V}),Object(a.jsx)(j.a,{path:"/logout",component:de}),Object(a.jsx)(j.a,{component:T})]})}),Object(a.jsx)("footer",{children:Object(a.jsx)(ae,{})})]})})})},me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,443)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),s(e),r(e)}))};c.a.render(Object(a.jsx)(be,{}),document.getElementById("root")),me()}},[[388,1,2]]]);
//# sourceMappingURL=main.a05b6c3a.chunk.js.map