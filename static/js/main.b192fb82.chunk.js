(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(61),i=a.n(r),u=(a(77),a(62)),c=a(24),o=a(63),l=a(64),m=a(70),h=a(65),d=a(71),g=(a(78),a(4)),f=a.n(g),p=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={messageInput:"",userName:"",userEmail:"",userPass:"",userSignInEmail:"",userSignInPass:"",messages:[],users:[],currentUser:{},chatBoxes:{}},a.handleChange=function(e){a.setState(Object(c.a)({},e.target.name,e.target.value))},a.handleSignUp=function(e){e.preventDefault(),f.a.auth().createUserWithEmailAndPassword(a.state.userEmail,a.state.userPass).then(function(e){var t=e.user.uid,n={userUid:t,userName:a.state.userName,userEmail:e.user.email,isActive:!1};f.a.database().ref("users/".concat(t)).set(n).then(function(){a.setState({userName:"",userEmail:"",userPass:""}),console.log("Success: Data Set Successful!")}).catch(function(){console.log("Error: Data Set Unsuccessful!")})}).catch(function(e){console.log(e)})},a.handleSignIn=function(e){e.preventDefault(),f.a.auth().signInWithEmailAndPassword(a.state.userSignInEmail,a.state.userSignInPass).then(function(e){a.setState({userSignInEmail:"",userSignInPass:""})}).catch(function(e){console.log(e)})},a.handleSubmit=function(e,t){t.preventDefault();var n={senderId:a.state.currentUser.userUid,receiverId:e.userUid,message:a.state.messageInput,senderName:a.state.currentUser.userName};f.a.database().ref("messages").push(n).then(function(e){a.setState({messageInput:""})}).catch(function(e){console.log(e)})},a.handleOpenChat=function(e){a.state.chatBoxes.hasOwnProperty(e.userUid)||a.setState(function(t){return{chatBoxes:Object(u.a)({},t.chatBoxes,Object(c.a)({},e.userUid,e))}})},a.handleChatBoxClose=function(e){var t=a.state.chatBoxes;delete t[e.userUid],a.setState({chatBoxes:t})},a.insertChatBox=function(e){var t=a.state.messages.filter(function(t){return t.senderId===e.userUid&&t.receiverId===a.state.currentUser.userUid||t.senderId===a.state.currentUser.userUid&&t.receiverId===e.userUid});return s.a.createElement("div",{id:"content",key:e.userUid},s.a.createElement("h3",null,"Chat started with: ",e.userName),s.a.createElement("hr",null),s.a.createElement("form",{onSubmit:function(t){return a.handleSubmit(e,t)}},s.a.createElement("label",{htmlFor:"messageInput"},"Message: "),s.a.createElement("input",{type:"text",id:"messageInput",name:"messageInput",value:a.state.messageInput,onChange:a.handleChange}),s.a.createElement("button",{type:"submit"},"Send")),s.a.createElement("h4",null,"Messages:"),s.a.createElement("div",null,s.a.createElement("ul",null,t.map(function(e,t){return s.a.createElement("li",{key:t},"".concat(e.message," <== ").concat(e.senderName===a.state.currentUser.userName?"You":e.senderName))}))),s.a.createElement("button",{onClick:function(){return a.handleChatBoxClose(e)}},"Close Chat Box"))},a.handleLogOut=function(){f.a.auth().signOut().then(function(){f.a.database().ref("users/".concat(a.state.currentUser.userUid,"/isActive")).set(!1)})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.database().ref("/").on("value",function(t){var a=null===t.val()?{}:t.val(),n=a.users?Object.values(a.users):[],s=a.messages?Object.values(a.messages):[];e.setState({users:n,messages:s}),f.a.auth().onAuthStateChanged(function(t){t?f.a.database().ref("users/".concat(t.uid,"/isActive")).set(!0).then(function(){var a=e.state.users.filter(function(e){return e.userUid===t.uid});e.setState({currentUser:a[0]})}):e.setState({currentUser:{}})})})}},{key:"render",value:function(){var e=this,t=[];0!==Object.entries(this.state.currentUser).length&&(t=this.state.users.filter(function(t){return t.userUid!==e.state.currentUser.userUid}));var a=Object.values(this.state.chatBoxes);return s.a.createElement("div",{className:"App"},0!==Object.entries(this.state.currentUser).length?s.a.createElement("div",null,s.a.createElement("h3",null,"Current User: ",this.state.currentUser.userName),s.a.createElement("button",{onClick:this.handleLogOut},"Log Out")):"Please Sign In",s.a.createElement("hr",null),s.a.createElement("ul",null,t.map(function(t){return s.a.createElement("li",{key:t.userUid,onClick:function(){return e.handleOpenChat(t)}},"".concat(t.userName," (").concat(t.isActive?"Online":"Offline",")"))})),s.a.createElement("hr",null),s.a.createElement("form",{id:"sign-up-form",onSubmit:this.handleSignUp},s.a.createElement("label",{htmlFor:"userName"},"Name: "),s.a.createElement("input",{type:"text",id:"userName",name:"userName",value:this.state.userName,onChange:this.handleChange}),s.a.createElement("br",null),s.a.createElement("label",{htmlFor:"userEmail"},"Email: "),s.a.createElement("input",{type:"text",id:"userEmail",name:"userEmail",value:this.state.userEmail,onChange:this.handleChange}),s.a.createElement("br",null),s.a.createElement("label",{htmlFor:"userPass"},"Password: "),s.a.createElement("input",{type:"password",id:"userPass",name:"userPass",value:this.state.userPass,onChange:this.handleChange}),s.a.createElement("button",{type:"submit",className:"submit-btn"},"Sign Up")),s.a.createElement("hr",null),s.a.createElement("form",{id:"sign-in-form",onSubmit:this.handleSignIn},s.a.createElement("label",{htmlFor:"userSignInEmail"},"Email: "),s.a.createElement("input",{type:"text",id:"userSignInEmail",name:"userSignInEmail",value:this.state.userSignInEmail,onChange:this.handleChange}),s.a.createElement("br",null),s.a.createElement("label",{htmlFor:"userSignInPass"},"Password: "),s.a.createElement("input",{type:"password",id:"userSignInPass",name:"userSignInPass",value:this.state.userSignInPass,onChange:this.handleChange}),s.a.createElement("button",{type:"submit",className:"submit-btn"},"Sign In")),s.a.createElement("hr",null),Object.values(a).map(function(t,a){return e.insertChatBox(t,a)}))}}]),t}(n.Component),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var E=a(66),S=a(69),U=a(17),w=a(68),I=Object(U.d)(Object(U.c)({}),{},Object(U.a)(w.a));E.initializeApp({apiKey:"AIzaSyAv71-5itSOzD_bYlMA7am1tK5PW2hmIVs",authDomain:"amlakhani-chatapp.firebaseapp.com",databaseURL:"https://amlakhani-chatapp.firebaseio.com",projectId:"amlakhani-chatapp",storageBucket:"amlakhani-chatapp.appspot.com",messagingSenderId:"451241892358"}),i.a.render(s.a.createElement(S.a,{store:I},s.a.createElement(p,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/chat-app-react-redux-firebase",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/chat-app-react-redux-firebase","/service-worker.js");v?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):b(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):b(t,e)})}}()},72:function(e,t,a){e.exports=a(134)},77:function(e,t,a){},78:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.b192fb82.chunk.js.map