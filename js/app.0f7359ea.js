(function(t){function a(a){for(var n,i,r=a[0],c=a[1],l=a[2],u=0,h=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&h.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(a);while(h.length)h.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],n=!0,r=1;r<e.length;r++){var c=e[r];0!==s[c]&&(n=!1)}n&&(o.splice(a--,1),t=i(i.s=e[0]))}return t}var n={},s={app:0},o=[];function i(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=n,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)i.d(e,n,function(a){return t[a]}.bind(null,n));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/bachelor-web/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=a,r=r.slice();for(var l=0;l<r.length;l++)a(r[l]);var d=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},1136:function(t,a,e){},"1a39":function(t,a,e){"use strict";var n=e("cb6a"),s=e.n(n);s.a},"2b21":function(t,a,e){"use strict";var n=e("1136"),s=e.n(n);s.a},"2f9f":function(t,a,e){},"3a9c":function(t,a,e){"use strict";var n=e("ad0c"),s=e.n(n);s.a},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("NavBar"),e("router-view",{staticClass:"app"}),t._m(0)],1)},o=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"footer"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"footer-left"},[n("a",{attrs:{href:"https://njbrunner.com",target:"_blank"}},[t._v("BRÜ Development")])])]),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"footer-right"},[n("img",{attrs:{src:e("877d"),height:"20px"}}),t._v(" by "),n("a",{attrs:{href:"https://www.flaticon.com/free-icon/rose_803106?related_item_id=803106&term=rose&related_item_id=803106",title:"Those Icons",target:"_blank"}},[t._v("Those Icons")]),t._v(" from "),n("a",{attrs:{href:"https://www.flaticon.com/",target:"_blank",title:"Flaticon"}},[t._v("Flaticon")])])])])])}],i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("nav",{staticClass:"navbar navbar-expand fixed-top styled-navbar"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[n("img",{attrs:{src:e("877d"),height:"40"}}),n("span",{staticClass:"fancy-script title"},[t._v("Fantasy Suites")])]),n("div",{staticClass:"navbar-nav ml-auto"},[n("router-link",{staticClass:"nav-item nav-link",attrs:{href:"#",to:"/standings"}},[t._v("Standings")]),t.authorized?n("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/draft"}},[t._v("Draft")]):t._e(),n("router-link",{staticClass:"nav-item nav-link",attrs:{href:"#",to:"/admin"}},[t._v("Admin")]),t.authorized?n("a",{staticClass:"nave-item nav-link",attrs:{href:""},on:{click:t.logout}},[t._v("Logout")]):t._e()],1)],1)},r=[],c={name:"NavBar",computed:{authorized:function(){return this.$store.getters.isAuthorized}},methods:{logout:function(){this.$store.dispatch("logout"),this.$router.push("/")}}},l=c,d=(e("7089"),e("2877")),u=Object(d["a"])(l,i,r,!1,null,"a3d3b402",null),h=u.exports,f={name:"app",components:{NavBar:h}},m=f,v=(e("5c0b"),Object(d["a"])(m,s,o,!1,null,null,null)),p=v.exports,C=e("5f5b"),b=e("8c4f"),g=e("2f62"),_=(e("7db0"),e("bc3a")),k=e.n(_),T={all:[]},y={getAllContestants:function(t){return t.all}},w={fetchContestants:function(t){var a=t.commit;k()({method:"get",url:"https://bachelor-draft.herokuapp.com/contestant/"}).then((function(t){a("updateContestants",t.data.data)})).catch((function(t){console.log(t)}))},updateContestant:function(t,a){var e=t.commit;e("updateContestant",a)},disableContestant:function(t,a){var e=t.rootState,n=t.dispatch;k()({method:"put",url:"https://bachelor-draft.herokuapp.com/contestant/norose/"+a,headers:{Authorization:"Bearer "+e.authStore.bachelorToken}}).then((function(){n("fetchContestants")})).catch((function(t){console.log(t)}))},addRose:function(t,a){var e=t.rootState,n=t.dispatch;k()({method:"put",url:"https://bachelor-draft.herokuapp.com/contestant/rose/add/"+a,headers:{Authorization:"Bearer "+e.authStore.bachelorToken}}).then((function(){n("fetchContestants")})).catch((function(t){console.log(t)}))},addRoseToAllActive:function(t){var a=t.rootState,e=t.dispatch;k()({method:"put",url:"https://bachelor-draft.herokuapp.com/contestant/rose/add/all",headers:{Authorization:"Bearer "+a.authStore.bachelorToken}}).then((function(){e("fetchContestants")})).catch((function(t){console.log(t)}))},subtractRose:function(t,a){var e=t.rootState,n=t.dispatch;k()({method:"put",url:"https://bachelor-draft.herokuapp.com/contestant/rose/subtract/"+a,headers:{Authorization:"Bearer "+e.authStore.bachelorToken}}).then((function(){n("fetchContestants")})).catch((function(t){console.log(t)}))},subtractRoseFromAllActive:function(t){var a=t.rootState,e=t.dispatch;k()({method:"put",url:"https://bachelor-draft.herokuapp.com/contestant/rose/subtract/all",headers:{Authorization:"Bearer "+a.authStore.bachelorToken}}).then((function(){e("fetchContestants")})).catch((function(t){console.log(t)}))},resetDraft:function(t){var a=t.rootState,e=t.dispatch;k()({method:"put",url:"https://bachelor-draft.herokuapp.com/contestant/draft/reset/all",headers:{Authorization:"Bearer "+a.authStore.bachelorToken}}).then((function(){e("fetchContestants"),e("fetchTeams")})).catch((function(t){console.log(t)}))}},D={updateContestants:function(t,a){t.all=a},updateContestant:function(t,a){var e=t.all.find((function(t){return t._id===a._id}));Object.assign(e,a)}},A={state:T,getters:y,actions:w,mutations:D},M={all:[]},S={getAllTeams:function(t){return t.all}},$={fetchTeams:function(t){var a=t.commit;k()({method:"get",url:"https://bachelor-draft.herokuapp.com/player/"}).then((function(t){a("updateTeams",t.data.data)})).catch((function(t){console.log(t)}))},updateTeams:function(t,a){var e=t.commit;e("updateTeams",a)},addTeam:function(t,a){var e=t.dispatch;k.a.post("https://bachelor-draft.herokuapp.com/player/new",{name:a}).then((function(){e("fetchTeams")})).catch((function(t){console.log(t)}))},removeTeam:function(t,a){var e=t.dispatch;k.a.delete("https://bachelor-draft.herokuapp.com/player/remove/"+a).then((function(){e("fetchTeams")})).catch((function(t){console.log(t)}))},shuffleTeams:function(t){var a=t.dispatch;k.a.put("https://bachelor-draft.herokuapp.com/player/shuffle").then((function(){a("fetchTeams")})).catch((function(t){console.log(t)}))},draftContestant:function(t,a){var e=t.dispatch;k.a.put("https://bachelor-draft.herokuapp.com/player/draft/"+a.teamId,{contestant_id:a.contestantId}).then((function(){e("fetchContestants"),e("fetchTeams")})).catch((function(t){console.log(t)}))}},P={updateTeams:function(t,a){t.all=a},updateTeam:function(t,a){var e=t.all.find((function(t){return t._id===a._id}));Object.assign(e,a)}},x={state:M,getters:S,actions:$,mutations:P},O={bachelorToken:null},R={isAuthorized:function(t){return!!t.bachelorToken}},j={doLogin:function(t,a){var e=t.commit;k.a.post("https://bachelor-draft.herokuapp.com/auth/login",{password:a}).then((function(t){localStorage.setItem("bachelorToken",t.data.access_token),e("updateAccessToken",t.data.access_token),sa.push("/admin")})).catch((function(t){console.log(t),e("updateAccessToken",null)}))},fetchAccessToken:function(t){var a=t.commit;a("updateAccessToken",localStorage.getItem("bachelorToken"))},logout:function(t){var a=t.commit;localStorage.removeItem("bachelorToken"),a("logout")}},E={updateAccessToken:function(t,a){t.bachelorToken=a},logout:function(t){t.bachelorToken=null}},N={state:O,getters:R,actions:j,mutations:E};n["default"].use(g["a"]);var F=new g["a"].Store({modules:{contestantStore:A,authStore:N,teamStore:x}}),z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},t._l(t.contestants,(function(a,n){return e("contestant-card",{key:n,attrs:{contestant:a},on:{contestantClicked:function(e){return t.handleContestantClicked(a)}}})})),1),t.showContestantModal?e("contestant-modal",{attrs:{contestant:t.clickedContestant},on:{closeModal:t.handleCloseContestantModalClicked}}):t._e()],1)},L=[],B=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("a",{on:{click:t.handleClick}},[n("b-card",{staticClass:"mb-2 styled-card",class:{shadow:t.contestant.active},staticStyle:{width:"300px"},attrs:{"img-src":t.contestant.image,"img-top":"",tag:"article"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-6"},[n("b-card-title",[t._v(t._s(t.contestant.name))])],1),n("div",{staticClass:"col-6",staticStyle:{"text-align":"right"}},[n("img",{attrs:{src:e("877d"),height:"30"}}),n("span",{staticClass:"badge badge-danger"},[t._v("x "+t._s(t.contestant.roses))])])]),n("b-card-text",[t._v(" "+t._s(t.contestant.age)+" "),n("br"),t._v(" "+t._s(t.contestant.occupation)+" "),n("br"),t._v(" "+t._s(t.contestant.location)+" ")]),t.contestant.active?t._e():n("div",{staticClass:"notActive"})],1)],1)},I=[],V={name:"ContestantCard",props:{contestant:Object},methods:{handleClick:function(){this.$emit("contestantClicked",this.contestant)}}},J=V,H=(e("fb9c"),Object(d["a"])(J,B,I,!1,null,null,null)),q=H.exports,G=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("transition",{attrs:{name:"modal"}},[e("div",{staticClass:"modal-mask",on:{click:t.closeModal}},[e("div",{staticClass:"modal",staticStyle:{display:"block"},attrs:{role:"dialog"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-10"},[e("h3",{staticClass:"header"},[t._v(t._s(t.contestant.name))])]),e("div",{staticClass:"col-2"},[e("button",{staticClass:"close",attrs:{type:"button"},on:{click:t.closeModal}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])]),e("hr",{staticClass:"styled-hr"}),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("img",{staticClass:"styled-image",attrs:{src:t.contestant.image}})]),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"facts-container"},[e("h5",{staticClass:"header"},[t._v("Facts")]),e("ul",{staticClass:"list-group"},t._l(t.contestant.facts,(function(a,n){return e("li",{key:n,staticClass:"list-group-item"},[t._v(" "+t._s(a)+" ")])})),0)])])]),e("div",{staticClass:"styled-bio"},[e("h5",{staticClass:"header"},[t._v("Bio")]),e("p",{staticClass:"styled-paragraph"},[t._v(t._s(t.contestant.detail))])])])])])])])])},K=[],Q={name:"ContestantModal",props:{contestant:Object},methods:{closeModal:function(){this.$emit("closeModal")}}},U=Q,W=(e("6cb6"),Object(d["a"])(U,G,K,!1,null,null,null)),X=W.exports,Y={name:"Home",components:{ContestantCard:q,ContestantModal:X},data:function(){return{clickedContestant:{},showContestantModal:!1,players:[]}},created:function(){this.loadContestants()},methods:{loadContestants:function(){this.$store.dispatch("fetchContestants")},handleContestantClicked:function(t){this.clickedContestant=t,this.showContestantModal=!0},handleCloseContestantModalClicked:function(){this.showContestantModal=!1}},computed:{contestants:function(){return this.$store.getters.getAllContestants}}},Z=Y,tt=(e("8b71"),Object(d["a"])(Z,z,L,!1,null,null,null)),at=tt.exports,et=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-11"},[e("div",{staticClass:"row"},t._l(t.contestants,(function(a,n){return e("contestant-card-admin",{key:n,attrs:{contestant:a},on:{contestantClicked:function(e){return t.handleContestantClicked(a)}}})})),1)]),e("div",{staticClass:"col-md-1"},[e("div",{staticClass:"admin-control-panel"},[e("h6",{staticClass:"header"},[t._v("All:")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("button",{staticClass:"btn btn-primary",on:{click:t.addRoseToAllActive}},[t._v(" + ")])]),e("div",{staticClass:"col-md-6"},[e("button",{staticClass:"btn btn-primary",on:{click:t.subtractRoseFromAllActive}},[t._v(" - ")])])])])])]),t.showContestantModal?e("contestant-modal",{attrs:{contestant:t.clickedContestant},on:{closeModal:t.handleCloseContestantModalClicked}}):t._e()],1)},nt=[],st=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("a",{on:{click:t.handleClick}},[n("b-card",{staticClass:"mb-2 styled-card",class:{shadow:t.contestant.active},staticStyle:{width:"300px"},attrs:{"img-src":t.contestant.image,"img-top":"",tag:"article"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-5"},[n("h5",[t._v(t._s(t.contestant.name))])]),n("div",{staticClass:"col-7",staticStyle:{"text-align":"right"}},[n("button",{staticClass:"btn btn-primary",on:{click:t.subtractRose}},[t._v("-")]),n("img",{attrs:{src:e("877d"),height:"30"}}),n("span",{staticClass:"badge badge-danger"},[t._v("x "+t._s(t.contestant.roses))]),n("button",{staticClass:"btn btn-primary",staticStyle:{"margin-left":"8px"},on:{click:t.addRose}},[t._v(" + ")])])]),n("b-card-text",[t._v(" "+t._s(t.contestant.age)+" "),n("br"),t._v(" "+t._s(t.contestant.occupation)+" "),n("br"),t._v(" "+t._s(t.contestant.location)+" ")]),n("button",{staticClass:"btn btn-primary form-control",on:{click:t.noRose}},[t._v(" No Rose ")]),t.contestant.active?t._e():n("div",{staticClass:"notActive"})],1)],1)},ot=[],it={name:"ContestantCardAdmin",props:{contestant:Object},methods:{handleClick:function(){},noRose:function(){this.$store.dispatch("disableContestant",this.contestant._id)},addRose:function(){this.$store.dispatch("addRose",this.contestant._id)},subtractRose:function(){this.$store.dispatch("subtractRose",this.contestant._id)}}},rt=it,ct=(e("3a9c"),Object(d["a"])(rt,st,ot,!1,null,null,null)),lt=ct.exports,dt={name:"Admin",components:{ContestantCardAdmin:lt,ContestantModal:X},data:function(){return{clickedContestant:{},showContestantModal:!1}},methods:{noRose:function(t){this.$store.dispatch("disableContestant",t._id)},addRoseToAllActive:function(){this.$store.dispatch("addRoseToAllActive")},subtractRoseFromAllActive:function(){this.$store.dispatch("subtractRoseFromAllActive")},handleContestantClicked:function(t){this.clickedContestant=t,this.showContestantModal=!0},handleCloseContestantModalClicked:function(){this.showContestantModal=!1}},computed:{contestants:function(){return this.$store.getters.getAllContestants}},created:function(){this.$store.dispatch("fetchContestants")}},ut=dt,ht=(e("2b21"),Object(d["a"])(ut,et,nt,!1,null,null,null)),ft=ht.exports,mt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("form",[e("div",{staticClass:"login-container"},[e("h3",{staticClass:"heading"},[t._v("Admin Login")]),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("button",{staticClass:"btn btn-primary form-control",on:{click:t.login}},[t._v(" Login ")])])])])},vt=[],pt={name:"Login",data:function(){return{password:null}},methods:{login:function(t){t.preventDefault(),this.$store.dispatch("doLogin",this.password)}}},Ct=pt,bt=(e("bfbe"),Object(d["a"])(Ct,mt,vt,!1,null,"4f08d3cc",null)),gt=bt.exports,_t=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[t.players?e("div",[e("h3",{staticClass:"header title"},[t._v("Standings")]),e("table",{staticClass:"table table-striped"},[t._m(0),e("tbody",t._l(t.sortedTeams,(function(a,n){return e("tr",{key:n},[e("td",[t._v(t._s(a.name))]),e("td",[t._v(t._s(t.getTotalRoses(a)))]),e("td",[t._v(t._s(t.getTeamPoints(a)))]),e("td",[e("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.viewTeam(a)}}},[t._v(" View Team ")])])])})),0)])]):t._e(),t.showTeamModal?e("team-modal",{attrs:{team:t.clickedTeam},on:{closeModal:t.closeTeamModal}}):t._e()],1)},kt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",{staticClass:"heading"},[e("th",{attrs:{scope:"col"}},[t._v("Team")]),e("th",{attrs:{scope:"col"}},[t._v("Total Roses")]),e("th",{attrs:{scope:"col"}},[t._v("Remaining Contestants")]),e("th")])}],Tt=(e("a4d3"),e("e01a"),e("d28b"),e("fb6a"),e("4e82"),e("d3b7"),e("3ca3"),e("ddb0"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("transition",{attrs:{name:"modal"}},[e("div",{staticClass:"modal-mask",on:{click:t.closeModal}},[e("div",{staticClass:"modal",staticStyle:{display:"block"},attrs:{role:"dialog"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-10"},[e("h5",{staticClass:"header"},[t._v(t._s(t.team.name))])]),e("div",{staticClass:"col-2"},[e("button",{staticClass:"close",attrs:{type:"button"},on:{click:t.closeModal}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])]),e("hr",{staticClass:"styled-hr"}),e("div",{staticClass:"stats"},[e("h6",{staticClass:"header"},[t._v(" Total Roses: "),e("span",{staticClass:"badge badge-danger"},[t._v(t._s(this.getTotalRoses()))])]),e("h6",{staticClass:"header"},[t._v(" Remaining Contestants: "),e("span",{staticClass:"badge badge-danger"},[t._v(t._s(this.getTeamPoints()))])])]),e("div",{staticClass:"row"},t._l(t.team.team,(function(t,a){return e("contestant-card",{key:a,attrs:{contestant:t}})})),1)])])])])])])}),yt=[],wt={name:"TeamModal",components:{ContestantCard:q},props:{team:Object},methods:{closeModal:function(){this.$emit("closeModal")},getTeamPoints:function(){var t=0,a=!0,e=!1,n=void 0;try{for(var s,o=this.team.team[Symbol.iterator]();!(a=(s=o.next()).done);a=!0){var i=s.value;i.active&&(t+=1)}}catch(r){e=!0,n=r}finally{try{a||null==o.return||o.return()}finally{if(e)throw n}}return t},getTotalRoses:function(){var t=0,a=!0,e=!1,n=void 0;try{for(var s,o=this.team.team[Symbol.iterator]();!(a=(s=o.next()).done);a=!0){var i=s.value;t+=i.roses}}catch(r){e=!0,n=r}finally{try{a||null==o.return||o.return()}finally{if(e)throw n}}return t}}},Dt=wt,At=(e("de61"),Object(d["a"])(Dt,Tt,yt,!1,null,"6be4975c",null)),Mt=At.exports,St={name:"TeamStandings",components:{TeamModal:Mt},data:function(){return{players:[],clickedTeam:null,showTeamModal:!1}},computed:{sortedTeams:function(){var t=this.teams.slice();return t.sort(this.compare)},teams:function(){return this.$store.getters.getAllTeams}},methods:{loadTeams:function(){this.$store.dispatch("fetchTeams")},viewTeam:function(t){this.clickedTeam=t,this.showTeamModal=!0},closeTeamModal:function(){this.showTeamModal=!1},getTeamPoints:function(t){var a=0,e=!0,n=!1,s=void 0;try{for(var o,i=t.team[Symbol.iterator]();!(e=(o=i.next()).done);e=!0){var r=o.value;r.active&&(a+=1)}}catch(c){n=!0,s=c}finally{try{e||null==i.return||i.return()}finally{if(n)throw s}}return a},getTotalRoses:function(t){var a=0,e=!0,n=!1,s=void 0;try{for(var o,i=t.team[Symbol.iterator]();!(e=(o=i.next()).done);e=!0){var r=o.value;a+=r.roses}}catch(c){n=!0,s=c}finally{try{e||null==i.return||i.return()}finally{if(n)throw s}}return a},compare:function(t,a){var e=this.getTotalRoses(t),n=this.getTotalRoses(a);if(e!=n)return n-e;var s=this.getTeamPoints(t),o=this.getTeamPoints(a);return o-s}},created:function(){this.loadTeams()}},$t=St,Pt=(e("8716"),Object(d["a"])($t,_t,kt,!1,null,"0123c75a",null)),xt=Pt.exports,Ot=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-9"},[e("div",{staticClass:"row"},t._l(t.contestants,(function(a,n){return e("contestant-card-draft",{key:n,attrs:{contestant:a,isDrafting:t.isDrafting},on:{onContestantClicked:function(e){return t.handleContestantClicked(a)},onDraftContestant:t.handleDraftContestant}})})),1)]),e("div",{staticClass:"col-md-3"},[e("sidebar",{attrs:{players:t.teams,isDrafting:t.isDrafting,currentDraftPosition:t.currentDraftPosition},on:{onAddTeamClicked:t.handleAddTeamClicked,onRemoveTeam:t.handleRemoveTeam,onViewTeam:t.handleViewTeamClicked,onStartDraft:t.handleStartDraft,onEndDraft:t.handleEndDraft,onResetDraft:t.handleResetDraft}})],1)]),t.showAddTeamModal?e("add-team-modal",{on:{closeModal:t.handleCloseModal,saveNewTeam:t.handleSaveNewTeam}}):t._e(),t.showTeamModal?e("team-modal",{attrs:{team:t.clickedTeam},on:{closeModal:t.handleCloseModal}}):t._e()],1)},Rt=[],jt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"sidebar"},[e("div",{staticClass:"draft-control"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4"},[e("button",{staticClass:"btn btn-outline-primary draft-control-button",attrs:{disabled:t.isDrafting},on:{click:t.addTeamClicked}},[t._v(" Add Team ")])]),e("div",{staticClass:"col-md-4"},[e("button",{staticClass:"btn btn-outline-primary draft-control-button",attrs:{disabled:t.isDrafting},on:{click:t.shuffleTeams}},[t._v(" Shuffle Teams ")])]),e("div",{staticClass:"col-md-4"},[t.isDrafting?t._e():e("button",{staticClass:"btn btn-primary draft-control-button",on:{click:t.startDraft}},[t._v(" Start Draft ")]),t.isDrafting?e("button",{staticClass:"btn btn-primary draft-control-button",on:{click:t.endDraft}},[t._v(" End Draft ")]):t._e()])])]),t.isDrafting?t._e():e("button",{staticClass:"btn btn-outline-secondary form-control",staticStyle:{"margin-top":"16px","margin-bottom":"16px"},on:{click:t.resetDraft}},[t._v(" Reset Draft ")]),e("br"),e("h3",{staticClass:"heading"},[t._v("Teams")]),e("hr"),e("ul",{staticClass:"list-group"},t._l(t.players,(function(a,n){return e("li",{key:n,staticClass:"list-group-item",class:{active:t.isActive(n)}},[e("div",{staticClass:"flex-container"},[e("h4",{staticStyle:{"flex-grow":"8"}},[t._v(t._s(a.name))]),e("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.viewTeam(a)}}},[t._v(" View Team ")]),t.isDrafting?t._e():e("button",{staticClass:"btn btn-outline-primary",on:{click:function(e){return t.removePlayer(a)}}},[e("i",{staticClass:"material-icons"},[t._v("delete_outline")])])])])})),0)])},Et=[],Nt={name:"SideBar",components:{},props:["drafting","currentDraftPosition","players","isDrafting"],computed:{sortedPlayers:function(){var t=this.players.slice();return t.sort(this.compare)}},methods:{addTeamClicked:function(){this.$emit("onAddTeamClicked")},viewTeam:function(t){this.$emit("onViewTeam",t)},isActive:function(t){return!(!this.isDrafting||this.currentDraftPosition!=t)},removePlayer:function(t){this.$emit("onRemoveTeam",t._id)},shuffleTeams:function(){this.$store.dispatch("shuffleTeams")},startDraft:function(){this.$emit("onStartDraft")},endDraft:function(){this.$emit("onEndDraft")},resetDraft:function(){this.$emit("onResetDraft"),this.$store.dispatch("resetDraft")}}},Ft=Nt,zt=(e("6320"),Object(d["a"])(Ft,jt,Et,!1,null,null,null)),Lt=zt.exports,Bt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("transition",{attrs:{name:"modal"}},[e("div",{staticClass:"modal-mask"},[e("div",{staticClass:"modal",staticStyle:{display:"block"},attrs:{role:"dialog"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered modal-lg",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",[t._v("Add Team")]),e("button",{staticClass:"close",attrs:{type:"button"},on:{click:t.closeModal}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),e("div",{staticClass:"modal-body"},[e("form",[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"name"}},[t._v("Team Name:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.teamName,expression:"teamName"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.teamName},on:{input:function(a){a.target.composing||(t.teamName=a.target.value)}}})])])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-primary",on:{click:t.saveNewTeam}},[t._v("Add")])])])])])])])},It=[],Vt={name:"AddTeamModal",data:function(){return{teamName:void 0}},methods:{closeModal:function(){this.$emit("closeModal")},saveNewTeam:function(){this.$emit("saveNewTeam",this.teamName)}}},Jt=Vt,Ht=Object(d["a"])(Jt,Bt,It,!1,null,null,null),qt=Ht.exports,Gt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{on:{click:t.handleClick}},[e("b-card",{staticClass:"mb-2 styled-card",class:{shadow:t.contestant.active},staticStyle:{width:"300px"},attrs:{title:t.contestant.name,"img-src":t.contestant.image,"img-top":"",tag:"article"}},[e("b-card-text",[t._v(" "+t._s(t.contestant.age)+" "),e("br"),t._v(" "+t._s(t.contestant.occupation)+" "),e("br"),t._v(" "+t._s(t.contestant.location)+" ")]),t.isDrafting&&!t.contestant.drafted?e("button",{staticClass:"btn btn-primary form-control",on:{click:function(a){return t.draftContestant(t.contestant)}}},[t._v(" Draft ")]):t._e(),t.contestant.active?t._e():e("div",{staticClass:"notActive"})],1)],1)},Kt=[],Qt={name:"ContestantCardDraft",props:{contestant:Object,isDrafting:Boolean},methods:{handleClick:function(){},draftContestant:function(t){this.$emit("onDraftContestant",t)}}},Ut=Qt,Wt=(e("1a39"),Object(d["a"])(Ut,Gt,Kt,!1,null,null,null)),Xt=Wt.exports,Yt={name:"Draft",components:{Sidebar:Lt,AddTeamModal:qt,TeamModal:Mt,ContestantCardDraft:Xt},data:function(){return{showAddTeamModal:!1,showTeamModal:!1,clickedTeam:void 0,isDrafting:!1,currentDraftPosition:0,reverseOrder:!1,endOfLineFirstPick:!1,firstPick:!0,draftRound:1}},computed:{contestants:function(){return this.$store.getters.getAllContestants},teams:function(){return this.$store.getters.getAllTeams},currentDraftPlayer:function(){return this.teams[this.currentDraftPosition]}},methods:{fetchTeams:function(){this.$store.dispatch("fetchTeams")},fetchContestants:function(){this.$store.dispatch("fetchContestants")},handleAddTeamClicked:function(){this.showAddTeamModal=!0},handleViewTeamClicked:function(t){this.clickedTeam=t,this.showTeamModal=!0},handleCloseModal:function(){this.showAddTeamModal=!1,this.showTeamModal=!1},handleSaveNewTeam:function(t){this.$store.dispatch("addTeam",t),this.handleCloseModal()},handleRemoveTeam:function(t){this.$store.dispatch("removeTeam",t)},handleStartDraft:function(){this.isDrafting=!0},handleEndDraft:function(){this.isDrafting=!1},handleResetDraft:function(){this.currentDraftPosition=0,this.reverseOrder=!1,this.endOfLineFirstPick=!1,this.firstPick=!0,this.draftRound=1},handleDraftContestant:function(t){this.$store.dispatch("draftContestant",{teamId:this.currentDraftPlayer._id,contestantId:t._id}),this.movePositions()},movePositions:function(){this.currentDraftPosition==this.teams.length-1&&0==this.reverseOrder?(this.reverseOrder=!0,this.draftRound+=1):0==this.currentDraftPosition&&1==this.reverseOrder&&(this.reverseOrder=!1,this.draftRound+=1),0==this.reverseOrder?0==this.currentDraftPosition&&0==this.endOfLineFirstPick&&0==this.firstPick?this.endOfLineFirstPick=!0:(this.endOfLineFirstPick=!1,this.currentDraftPosition+=1):this.currentDraftPosition==this.teams.length-1&&0==this.endOfLineFirstPick?this.endOfLineFirstPick=!0:(this.endOfLineFirstPick=!1,this.currentDraftPosition-=1),this.firstPick=!1}},created:function(){this.fetchContestants(),this.fetchTeams()}},Zt=Yt,ta=Object(d["a"])(Zt,Ot,Rt,!1,null,null,null),aa=ta.exports;n["default"].use(b["a"]);var ea=[{path:"/",component:at},{path:"/standings",component:xt},{path:"/admin",component:ft},{path:"/login",component:gt},{path:"/draft",component:aa},{path:"*",redirect:at}],na=new b["a"]({mode:"history",base:"/bachelor-web/",routes:ea});na.beforeEach((function(t,a,e){F.dispatch("fetchAccessToken"),"/admin"===t.fullPath&&(F.getters.isAuthorized||e("/login")),"/draft"===t.fullPath&&(F.getters.isAuthorized||e("/login")),"/login"===t.fullPath&&F.getters.isAuthorized&&e("/admin"),e()}));var sa=na;n["default"].config.productionTip=!1,n["default"].use(C["a"]),new n["default"]({render:function(t){return t(p)},router:sa,store:F,created:function(){if(sessionStorage.redirect){var t=sessionStorage.redirect;delete sessionStorage.redirect,this.$router.push(t)}}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";var n=e("9c0c"),s=e.n(n);s.a},6320:function(t,a,e){"use strict";var n=e("f34b"),s=e.n(n);s.a},6518:function(t,a,e){},"6cb6":function(t,a,e){"use strict";var n=e("7539"),s=e.n(n);s.a},7089:function(t,a,e){"use strict";var n=e("ae40"),s=e.n(n);s.a},7539:function(t,a,e){},8716:function(t,a,e){"use strict";var n=e("6518"),s=e.n(n);s.a},"877d":function(t,a,e){t.exports=e.p+"img/rose.05de4e17.png"},"88d7":function(t,a,e){},"8b71":function(t,a,e){"use strict";var n=e("88d7"),s=e.n(n);s.a},"9c0c":function(t,a,e){},ad0c:function(t,a,e){},ae40:function(t,a,e){},afe1:function(t,a,e){},bfbe:function(t,a,e){"use strict";var n=e("afe1"),s=e.n(n);s.a},c48c:function(t,a,e){},cb6a:function(t,a,e){},de61:function(t,a,e){"use strict";var n=e("c48c"),s=e.n(n);s.a},f34b:function(t,a,e){},fb9c:function(t,a,e){"use strict";var n=e("2f9f"),s=e.n(n);s.a}});
//# sourceMappingURL=app.0f7359ea.js.map