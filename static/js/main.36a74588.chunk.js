(this.webpackJsonpanonyspace=this.webpackJsonpanonyspace||[]).push([[0],{15:function(e,a,t){e.exports=t(29)},20:function(e,a,t){},21:function(e,a,t){},29:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(11),s=t.n(c),o=(t(20),t(2)),i=(t(21),t(7)),l=t.n(i),u=t(12),m=t(13);var p=function(e){var a=Object(n.useRef)(),t=e.firestore.collection("messages"),c=t.orderBy("createdAt").limit(2500),s=Object(m.a)(c,{idField:"id"}),i=Object(o.a)(s,1)[0],p=Object(n.useState)(""),f=Object(o.a)(p,2),b=f[0],h=f[1],E=function(){var a=Object(u.a)(l.a.mark((function a(n){var r,c,s;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),r=e.auth.currentUser,c=r.uid,s=r.photoURL,a.next=4,t.add({text:b,createdAt:e.firebase.firestore.FieldValue.serverTimestamp(),uid:c,photoURL:s});case 4:h(""),document.getElementById("recent").scrollIntoView({behavior:"smooth"});case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("main",null,i&&i.map((function(a){return r.a.createElement(d,{auth:e.auth,key:a.id,message:a})})),r.a.createElement("span",{ref:a}),r.a.createElement("div",{id:"recent"})),r.a.createElement("form",{onSubmit:E},r.a.createElement("input",{value:b,onChange:function(e){return h(e.target.value)},placeholder:"Enter a message",autoFocus:!0}),r.a.createElement("button",{type:"submit",disabled:""===b},"Send")))};function d(e){var a,t=e.message,n=t.text,c=t.uid,s=t.photoURL,o=t.createdAt,i=c===e.auth.currentUser.uid?"sent":"received",l=s||"https://api.adorable.io/avatars/23/abott@adorable.png";return r.a.createElement("div",{className:"messageTime"},r.a.createElement("div",{className:"message ".concat(i),id:c},r.a.createElement("img",{src:l,alt:"avatar"}),r.a.createElement("p",null,n)),o?r.a.createElement("p",{className:"timeStamp"},(a=o.seconds,new Date(1e3*a).toLocaleTimeString().substring(0,5))):r.a.createElement("p",{className:"timeStamp"},"now"))}var f=t(1),b=t.n(f),h=t(14);t(23),t(27);b.a.initializeApp({apiKey:"AIzaSyBHlMbSz_nPU28iII28ymDb6U7nTz_yJEo",authDomain:"anonyspace-1b5ff.firebaseapp.com",databaseURL:"https://anonyspace-1b5ff-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"anonyspace-1b5ff",storageBucket:"anonyspace-1b5ff.appspot.com",messagingSenderId:"357161899322",appId:"1:357161899322:web:c75a6d10add2f5448c6c03"});var E=b.a.auth(),g=b.a.firestore();function v(){return r.a.createElement("div",{className:"center"},r.a.createElement("h1",null,"Minimal Chat Room"),r.a.createElement("button",{className:"sign-in",onClick:function(){var e=new b.a.auth.GoogleAuthProvider;E.signInWithPopup(e).catch((function(e){console.log("signInWithGoogle -> err",e)}))}},"Sign in with Google"),r.a.createElement("p",null,"log in to access anonyspace."))}function y(){return E.currentUser&&r.a.createElement("button",{className:"sign-out",onClick:function(){return E.signOut()}},"Sign Out")}var S=function(){var e=Object(h.a)(E),a=Object(o.a)(e,1)[0];return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",{className:"anonyspace"},"anonyspace"),r.a.createElement(y,null)),r.a.createElement("section",null,a?r.a.createElement(p,{firebase:b.a,auth:E,firestore:g}):r.a.createElement(v,null)))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.36a74588.chunk.js.map