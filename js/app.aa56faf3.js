(function(t){function e(e){for(var n,i,r=e[0],c=e[1],l=e[2],u=0,f=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/bachelor-web/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0cbe":function(t,e,a){"use strict";a("2863")},"0f79":function(t,e,a){"use strict";a("5a2f")},"1d3f":function(t,e,a){"use strict";a("c667")},2863:function(t,e,a){},"2b48":function(t,e,a){"use strict";a("5c7a")},"2fa6":function(t,e,a){},"347b":function(t,e,a){"use strict";a("aa24")},"3b02":function(t,e,a){"use strict";a("c7dd")},"3cdf":function(t,e,a){},"56a8":function(t,e,a){"use strict";a("fd19")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBar"),a("router-view",{staticClass:"app"}),t._m(0)],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"footer-left"},[n("a",{attrs:{href:"https://njbrunner.com",target:"_blank"}},[t._v("BRÜ Development")])])]),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"footer-right"},[n("img",{attrs:{src:a("877d"),height:"20px"}}),t._v(" by "),n("a",{attrs:{href:"https://www.flaticon.com/free-icon/rose_803106?related_item_id=803106&term=rose&related_item_id=803106",title:"Those Icons",target:"_blank"}},[t._v("Those Icons")]),t._v(" from "),n("a",{attrs:{href:"https://www.flaticon.com/",target:"_blank",title:"Flaticon"}},[t._v("Flaticon")])])])])])}],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-expand fixed-top styled-navbar"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[n("img",{attrs:{src:a("877d"),height:"40"}}),n("span",{staticClass:"fancy-script title"},[t._v("Fantasy Suites")])]),n("div",{staticClass:"navbar-nav ml-auto"},[n("router-link",{staticClass:"nav-item nav-link",attrs:{href:"#",to:"/standings"}},[t._v("Standings")]),t.authorized?n("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/draft"}},[t._v("Draft")]):t._e(),n("router-link",{staticClass:"nav-item nav-link",attrs:{href:"#",to:"/admin"}},[t._v("Admin")]),t.authorized?n("a",{staticClass:"nave-item nav-link",attrs:{href:""},on:{click:t.logout}},[t._v("Logout")]):t._e()],1)],1)},r=[],c={name:"NavBar",computed:{authorized:function(){return this.$store.getters.isAuthorized}},methods:{logout:function(){this.$store.dispatch("logout"),this.$router.push("/")}}},l=c,d=(a("a718"),a("2877")),u=Object(d["a"])(l,i,r,!1,null,"a3d3b402",null),f=u.exports,h={name:"app",components:{NavBar:f}},m=h,v=(a("1d3f"),Object(d["a"])(m,s,o,!1,null,null,null)),p=v.exports,C=a("5f5b"),b=a("8c4f"),g=a("2f62"),_=(a("7db0"),a("bc3a")),T=a.n(_),k={all:[]},w={getAllContestants:function(t){return t.all}},y={fetchContestants:function(t){var e=t.commit;T()({method:"get",url:"https://bachelor-draft.herokuapp.com/contestant/"}).then((function(t){e("updateContestants",t.data.data)})).catch((function(t){console.log(t)}))},updateContestant:function(t,e){var a=t.commit;a("updateContestant",e)},disableContestant:function(t,e){var a=t.rootState,n=t.dispatch;T()({method:"put",url:"https://bachelor-draft.herokuapp.com/contestant/norose/"+e,headers:{Authorization:"Bearer "+a.authStore.bachelorToken}}).then((function(){n("fetchContestants")})).catch((function(t){console.log(t)}))},addRose:function(t,e){var a=t.rootState,n=t.dispatch;T()({method:"put",url:"https://bachelor-draft.herokuapp.com/contestant/rose/add/"+e,headers:{Authorization:"Bearer "+a.authStore.bachelorToken}}).then((function(){n("fetchContestants")})).catch((function(t){console.log(t)}))},addRoseToAllActive:function(t){var e=t.rootState,a=t.dispatch;T()({method:"put",url:"https://bachelor-draft.herokuapp.com/contestant/rose/add/all",headers:{Authorization:"Bearer "+e.authStore.bachelorToken}}).then((function(){a("fetchContestants")})).catch((function(t){console.log(t)}))},subtractRose:function(t,e){var a=t.rootState,n=t.dispatch;T()({method:"put",url:"https://bachelor-draft.herokuapp.com/contestant/rose/subtract/"+e,headers:{Authorization:"Bearer "+a.authStore.bachelorToken}}).then((function(){n("fetchContestants")})).catch((function(t){console.log(t)}))},subtractRoseFromAllActive:function(t){var e=t.rootState,a=t.dispatch;T()({method:"put",url:"https://bachelor-draft.herokuapp.com/contestant/rose/subtract/all",headers:{Authorization:"Bearer "+e.authStore.bachelorToken}}).then((function(){a("fetchContestants")})).catch((function(t){console.log(t)}))},resetDraft:function(t){var e=t.rootState,a=t.dispatch;T()({method:"put",url:"https://bachelor-draft.herokuapp.com/contestant/draft/reset/all",headers:{Authorization:"Bearer "+e.authStore.bachelorToken}}).then((function(){a("fetchContestants"),a("fetchTeams")})).catch((function(t){console.log(t)}))}},D={updateContestants:function(t,e){t.all=e},updateContestant:function(t,e){var a=t.all.find((function(t){return t._id===e._id}));Object.assign(a,e)}},A={state:k,getters:w,actions:y,mutations:D},S=(a("b0c0"),{all:[]}),M={getAllTeams:function(t){return t.all}},$={fetchTeams:function(t){var e=t.commit;T()({method:"get",url:"https://bachelor-draft.herokuapp.com/team/"}).then((function(t){console.log(t.data.data),e("updateTeams",t.data.data)})).catch((function(t){console.log(t)}))},updateTeams:function(t,e){var a=t.commit;a("updateTeams",e)},addTeam:function(t,e){var a=t.dispatch;T.a.post("http://127.0.0.1:5000/team/new",{name:e.name,owner:e.owner}).then((function(){a("fetchTeams")})).catch((function(t){console.log(t)}))},removeTeam:function(t,e){var a=t.dispatch;T.a.delete("https://bachelor-draft.herokuapp.com/team/remove/"+e).then((function(){a("fetchTeams")})).catch((function(t){console.log(t)}))},shuffleTeams:function(t){var e=t.dispatch;T.a.put("https://bachelor-draft.herokuapp.com/team/shuffle").then((function(){e("fetchTeams")})).catch((function(t){console.log(t)}))},draftContestant:function(t,e){var a=t.dispatch;T.a.put("https://bachelor-draft.herokuapp.com/team/draft/"+e.teamId,{contestant_id:e.contestantId}).then((function(){a("fetchContestants"),a("fetchTeams")})).catch((function(t){console.log(t)}))}},O={updateTeams:function(t,e){t.all=e},updateTeam:function(t,e){var a=t.all.find((function(t){return t._id===e._id}));Object.assign(a,e)}},x={state:S,getters:M,actions:$,mutations:O},P={bachelorToken:null},R={isAuthorized:function(t){return!!t.bachelorToken}},j={doLogin:function(t,e){var a=t.commit;T.a.post("https://bachelor-draft.herokuapp.com/auth/login",{password:e}).then((function(t){localStorage.setItem("bachelorToken",t.data.access_token),a("updateAccessToken",t.data.access_token),se.push("/admin")})).catch((function(t){console.log(t),a("updateAccessToken",null)}))},fetchAccessToken:function(t){var e=t.commit;e("updateAccessToken",localStorage.getItem("bachelorToken"))},logout:function(t){var e=t.commit;localStorage.removeItem("bachelorToken"),e("logout")}},E={updateAccessToken:function(t,e){t.bachelorToken=e},logout:function(t){t.bachelorToken=null}},N={state:P,getters:R,actions:j,mutations:E};n["default"].use(g["a"]);var F=new g["a"].Store({modules:{contestantStore:A,authStore:N,teamStore:x}}),z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},t._l(t.contestants,(function(e,n){return a("contestant-card",{key:n,attrs:{contestant:e},on:{contestantClicked:function(a){return t.handleContestantClicked(e)}}})})),1),t.showContestantModal?a("contestant-modal",{attrs:{contestant:t.clickedContestant},on:{closeModal:t.handleCloseContestantModalClicked}}):t._e()],1)},L=[],B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{on:{click:t.handleClick}},[n("b-card",{staticClass:"mb-2 styled-card",class:{shadow:t.contestant.active},staticStyle:{width:"300px"},attrs:{"img-src":t.contestant.image,"img-top":"",tag:"article"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-6"},[n("b-card-title",[t._v(t._s(t.contestant.name))])],1),n("div",{staticClass:"col-6",staticStyle:{"text-align":"right"}},[n("img",{attrs:{src:a("877d"),height:"30"}}),n("span",{staticClass:"badge badge-danger"},[t._v("x "+t._s(t.contestant.roses))])])]),n("b-card-text",[t._v(" "+t._s(t.contestant.age)+" "),n("br"),t._v(" "+t._s(t.contestant.occupation)+" "),n("br"),t._v(" "+t._s(t.contestant.location)+" ")]),t.contestant.active?t._e():n("div",{staticClass:"notActive"})],1)],1)},I=[],V={name:"ContestantCard",props:{contestant:Object},methods:{handleClick:function(){this.$emit("contestantClicked",this.contestant)}}},J=V,H=(a("347b"),Object(d["a"])(J,B,I,!1,null,null,null)),U=H.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal-mask",on:{click:t.closeModal}},[a("div",{staticClass:"modal",staticStyle:{display:"block"},attrs:{role:"dialog"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-10"},[a("h3",{staticClass:"header"},[t._v(t._s(t.contestant.name))])]),a("div",{staticClass:"col-2"},[a("button",{staticClass:"close",attrs:{type:"button"},on:{click:t.closeModal}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])]),a("hr",{staticClass:"styled-hr"}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("img",{staticClass:"styled-image",attrs:{src:t.contestant.image}})]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"facts-container"},[a("h5",{staticClass:"header"},[t._v("Facts")]),a("ul",{staticClass:"list-group"},t._l(t.contestant.facts,(function(e,n){return a("li",{key:n,staticClass:"list-group-item"},[t._v(" "+t._s(e)+" ")])})),0)])])]),a("div",{staticClass:"styled-bio"},[a("h5",{staticClass:"header"},[t._v("Bio")]),a("p",{staticClass:"styled-paragraph"},[t._v(t._s(t.contestant.detail))])])])])])])])])},G=[],K={name:"ContestantModal",props:{contestant:Object},methods:{closeModal:function(){this.$emit("closeModal")}}},Q=K,W=(a("aeaf"),Object(d["a"])(Q,q,G,!1,null,null,null)),X=W.exports,Y={name:"Home",components:{ContestantCard:U,ContestantModal:X},data:function(){return{clickedContestant:{},showContestantModal:!1,players:[]}},created:function(){this.loadContestants()},methods:{loadContestants:function(){this.$store.dispatch("fetchContestants")},handleContestantClicked:function(t){this.clickedContestant=t,this.showContestantModal=!0},handleCloseContestantModalClicked:function(){this.showContestantModal=!1}},computed:{contestants:function(){return this.$store.getters.getAllContestants}}},Z=Y,tt=(a("0f79"),Object(d["a"])(Z,z,L,!1,null,null,null)),et=tt.exports,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-9"},[a("div",{staticClass:"row"},t._l(t.contestants,(function(e,n){return a("contestant-card-admin",{key:n,attrs:{contestant:e},on:{contestantClicked:function(a){return t.handleContestantClicked(e)},onDraftContestant:function(a){return t.draftContestant(e)}}})})),1)]),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"admin-control-container"},[a("div",{staticClass:"admin-control-panel"},[a("p",[t._v("Remaining Contestants: "+t._s(t.activeContestants))]),a("p",[t._v("Undrafted Contestants: "+t._s(t.undraftedContestants))]),a("h6",{staticClass:"header"},[t._v("All:")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("button",{staticClass:"btn btn-primary",on:{click:t.addRoseToAllActive}},[t._v(" + ")])]),a("div",{staticClass:"col-md-6"},[a("button",{staticClass:"btn btn-primary",on:{click:t.subtractRoseFromAllActive}},[t._v(" - ")])])])]),a("br"),a("h3",{staticClass:"heading"},[t._v("Teams")]),a("hr"),a("ul",{staticClass:"list-group"},t._l(this.teams,(function(e,n){return a("li",{key:n,staticClass:"list-group-item",class:{active:t.isSelected(e)},staticStyle:{cursor:"pointer"},on:{click:function(a){return t.selectTeam(e)}}},[a("div",{staticClass:"flex-container"},[a("h4",{staticStyle:{"flex-grow":"8"}},[t._v(t._s(e.name))])])])})),0)])])]),t.showContestantModal?a("contestant-modal",{attrs:{contestant:t.clickedContestant},on:{closeModal:t.handleCloseContestantModalClicked}}):t._e()],1)},nt=[],st=(a("4de4"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{on:{click:t.handleClick}},[n("b-card",{staticClass:"mb-2 styled-card",class:{shadow:t.contestant.active},staticStyle:{width:"300px"},attrs:{"img-src":t.contestant.image,"img-top":"",tag:"article"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-5"},[n("h5",[t._v(t._s(t.contestant.name))])]),n("div",{staticClass:"col-7",staticStyle:{"text-align":"right"}},[n("button",{staticClass:"btn btn-primary",on:{click:t.subtractRose}},[t._v("-")]),n("img",{attrs:{src:a("877d"),height:"30"}}),n("span",{staticClass:"badge badge-danger"},[t._v("x "+t._s(t.contestant.roses))]),n("button",{staticClass:"btn btn-primary",staticStyle:{"margin-left":"8px"},on:{click:t.addRose}},[t._v(" + ")])])]),n("b-card-text",[t._v(" "+t._s(t.contestant.age)+" "),n("br"),t._v(" "+t._s(t.contestant.occupation)+" "),n("br"),t._v(" "+t._s(t.contestant.location)+" ")]),n("button",{staticClass:"btn btn-primary form-control",on:{click:t.noRose}},[t._v(" No Rose ")]),t.contestant.drafted?t._e():n("button",{staticClass:"btn btn-primary form-control",staticStyle:{"margin-top":"8px"},on:{click:t.draftContestant}},[t._v(" Draft ")]),t.contestant.active?t._e():n("div",{staticClass:"notActive"})],1)],1)}),ot=[],it={name:"ContestantCardAdmin",props:{contestant:Object},methods:{handleClick:function(){},noRose:function(){this.$store.dispatch("disableContestant",this.contestant._id)},addRose:function(){this.$store.dispatch("addRose",this.contestant._id)},subtractRose:function(){this.$store.dispatch("subtractRose",this.contestant._id)},draftContestant:function(){this.$emit("onDraftContestant")}}},rt=it,ct=(a("e394"),Object(d["a"])(rt,st,ot,!1,null,null,null)),lt=ct.exports,dt={name:"Admin",components:{ContestantCardAdmin:lt,ContestantModal:X},data:function(){return{clickedContestant:{},showContestantModal:!1,selectedTeam:void 0}},methods:{noRose:function(t){this.$store.dispatch("disableContestant",t._id)},addRoseToAllActive:function(){this.$store.dispatch("addRoseToAllActive")},subtractRoseFromAllActive:function(){this.$store.dispatch("subtractRoseFromAllActive")},handleContestantClicked:function(t){this.clickedContestant=t,this.showContestantModal=!0},handleCloseContestantModalClicked:function(){this.showContestantModal=!1},isSelected:function(t){return!!this.selectedTeam&&t.name==this.selectedTeam.name},selectTeam:function(t){this.selectedTeam=t},draftContestant:function(t){this.$store.dispatch("draftContestant",{teamId:this.selectedTeam._id,contestantId:t._id})}},computed:{teams:function(){var t=this.$store.getters.getAllTeams;return t},contestants:function(){return this.$store.getters.getAllContestants},activeContestants:function(){return this.contestants.filter((function(t){return 1==t.active})).length},undraftedContestants:function(){return this.contestants.filter((function(t){return 1==t.active&&0==t.drafted})).length}},created:function(){this.$store.dispatch("fetchContestants"),this.$store.dispatch("fetchTeams")}},ut=dt,ft=(a("56a8"),Object(d["a"])(ut,at,nt,!1,null,null,null)),ht=ft.exports,mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",[a("div",{staticClass:"login-container"},[a("h3",{staticClass:"heading"},[t._v("Admin Login")]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary form-control",on:{click:t.login}},[t._v(" Login ")])])])])},vt=[],pt={name:"Login",data:function(){return{password:null}},methods:{login:function(t){t.preventDefault(),this.$store.dispatch("doLogin",this.password)}}},Ct=pt,bt=(a("2b48"),Object(d["a"])(Ct,mt,vt,!1,null,"4f08d3cc",null)),gt=bt.exports,_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t.teams?a("div",[a("h3",{staticClass:"header title"},[t._v("Standings")]),a("table",{staticClass:"table table-striped"},[t._m(0),a("tbody",t._l(t.sortedTeams,(function(e,n){return a("tr",{key:n},[a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(t.getTotalRoses(e)))]),a("td",[t._v(t._s(t.getTeamPoints(e)))]),a("td",[a("button",{staticClass:"btn btn-primary",on:{click:function(a){return t.viewTeam(e)}}},[t._v(" View Team ")])])])})),0)])]):t._e(),t.showTeamModal?a("team-modal",{attrs:{team:t.clickedTeam},on:{closeModal:t.closeTeamModal}}):t._e()],1)},Tt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"heading"},[a("th",{attrs:{scope:"col"}},[t._v("Team")]),a("th",{attrs:{scope:"col"}},[t._v("Total Roses")]),a("th",{attrs:{scope:"col"}},[t._v("Remaining Contestants")]),a("th")])}],kt=(a("a4d3"),a("e01a"),a("d28b"),a("fb6a"),a("4e82"),a("d3b7"),a("3ca3"),a("ddb0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal-mask",on:{click:t.closeModal}},[a("div",{staticClass:"modal",staticStyle:{display:"block"},attrs:{role:"dialog"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-10"},[a("h5",{staticClass:"header"},[t._v(t._s(t.team.name))])]),a("div",{staticClass:"col-2"},[a("button",{staticClass:"close",attrs:{type:"button"},on:{click:t.closeModal}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])]),a("hr",{staticClass:"styled-hr"}),a("div",{staticClass:"stats"},[a("h6",{staticClass:"header"},[t._v(" Total Roses: "),a("span",{staticClass:"badge badge-danger"},[t._v(t._s(this.getTotalRoses()))])]),a("h6",{staticClass:"header"},[t._v(" Remaining Contestants: "),a("span",{staticClass:"badge badge-danger"},[t._v(t._s(this.getTeamPoints()))])])]),a("div",{staticClass:"row"},t._l(t.team.team,(function(t,e){return a("contestant-card",{key:e,attrs:{contestant:t}})})),1)])])])])])])}),wt=[],yt={name:"TeamModal",components:{ContestantCard:U},props:{team:Object},methods:{closeModal:function(){this.$emit("closeModal")},getTeamPoints:function(){var t=0,e=!0,a=!1,n=void 0;try{for(var s,o=this.team.team[Symbol.iterator]();!(e=(s=o.next()).done);e=!0){var i=s.value;i.active&&(t+=1)}}catch(r){a=!0,n=r}finally{try{e||null==o.return||o.return()}finally{if(a)throw n}}return t},getTotalRoses:function(){var t=0,e=!0,a=!1,n=void 0;try{for(var s,o=this.team.team[Symbol.iterator]();!(e=(s=o.next()).done);e=!0){var i=s.value;t+=i.roses}}catch(r){a=!0,n=r}finally{try{e||null==o.return||o.return()}finally{if(a)throw n}}return t}}},Dt=yt,At=(a("3b02"),Object(d["a"])(Dt,kt,wt,!1,null,"6be4975c",null)),St=At.exports,Mt={name:"TeamStandings",components:{TeamModal:St},data:function(){return{clickedTeam:null,showTeamModal:!1}},computed:{sortedTeams:function(){var t=this.teams.slice();return t.sort(this.compare)},teams:function(){return this.$store.getters.getAllTeams}},methods:{loadTeams:function(){this.$store.dispatch("fetchTeams")},viewTeam:function(t){this.clickedTeam=t,this.showTeamModal=!0},closeTeamModal:function(){this.showTeamModal=!1},getTeamPoints:function(t){var e=0,a=!0,n=!1,s=void 0;try{for(var o,i=t.team[Symbol.iterator]();!(a=(o=i.next()).done);a=!0){var r=o.value;r.active&&(e+=1)}}catch(c){n=!0,s=c}finally{try{a||null==i.return||i.return()}finally{if(n)throw s}}return e},getTotalRoses:function(t){var e=0,a=!0,n=!1,s=void 0;try{for(var o,i=t.team[Symbol.iterator]();!(a=(o=i.next()).done);a=!0){var r=o.value;e+=r.roses}}catch(c){n=!0,s=c}finally{try{a||null==i.return||i.return()}finally{if(n)throw s}}return e},compare:function(t,e){var a=this.getTotalRoses(t),n=this.getTotalRoses(e);if(a!=n)return n-a;var s=this.getTeamPoints(t),o=this.getTeamPoints(e);return o-s}},created:function(){this.loadTeams()}},$t=Mt,Ot=(a("9e0f"),Object(d["a"])($t,_t,Tt,!1,null,"90caae22",null)),xt=Ot.exports,Pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-9"},[a("div",{staticClass:"row"},t._l(t.contestants,(function(e,n){return a("contestant-card-draft",{key:n,attrs:{contestant:e,isDrafting:t.isDrafting},on:{onContestantClicked:function(a){return t.handleContestantClicked(e)},onDraftContestant:t.handleDraftContestant}})})),1)]),a("div",{staticClass:"col-md-3"},[a("sidebar",{attrs:{teams:t.teams,isDrafting:t.isDrafting,currentDraftPosition:t.currentDraftPosition},on:{onAddTeamClicked:t.handleAddTeamClicked,onRemoveTeam:t.handleRemoveTeam,onViewTeam:t.handleViewTeamClicked,onStartDraft:t.handleStartDraft,onEndDraft:t.handleEndDraft,onResetDraft:t.handleResetDraft}})],1)]),t.showAddTeamModal?a("add-team-modal",{on:{closeModal:t.handleCloseModal,saveNewTeam:t.handleSaveNewTeam}}):t._e(),t.showTeamModal?a("team-modal",{attrs:{team:t.clickedTeam},on:{closeModal:t.handleCloseModal}}):t._e()],1)},Rt=[],jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar"},[a("div",{staticClass:"draft-control"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("button",{staticClass:"btn btn-outline-primary draft-control-button",attrs:{disabled:t.isDrafting},on:{click:t.addTeamClicked}},[t._v(" Add Team ")])]),a("div",{staticClass:"col-md-4"},[a("button",{staticClass:"btn btn-outline-primary draft-control-button",attrs:{disabled:t.isDrafting},on:{click:t.shuffleTeams}},[t._v(" Shuffle Teams ")])]),a("div",{staticClass:"col-md-4"},[t.isDrafting?t._e():a("button",{staticClass:"btn btn-primary draft-control-button",on:{click:t.startDraft}},[t._v(" Start Draft ")]),t.isDrafting?a("button",{staticClass:"btn btn-primary draft-control-button",on:{click:t.endDraft}},[t._v(" End Draft ")]):t._e()])])]),t.isDrafting?t._e():a("button",{staticClass:"btn btn-outline-secondary form-control",staticStyle:{"margin-top":"16px","margin-bottom":"16px"},on:{click:t.resetDraft}},[t._v(" Reset Draft ")]),a("br"),a("h3",{staticClass:"heading"},[t._v("Teams")]),a("hr"),a("ul",{staticClass:"list-group"},t._l(t.teams,(function(e,n){return a("li",{key:n,staticClass:"list-group-item",class:{active:t.isActive(n)}},[a("div",{staticClass:"flex-container"},[a("h4",{staticStyle:{"flex-grow":"8"}},[t._v(t._s(e.name))]),a("button",{staticClass:"btn btn-primary",on:{click:function(a){return t.viewTeam(e)}}},[t._v(" View Team ")]),t.isDrafting?t._e():a("button",{staticClass:"btn btn-outline-primary",on:{click:function(a){return t.removeTeam(e)}}},[a("i",{staticClass:"material-icons"},[t._v("delete_outline")])])])])})),0)])},Et=[],Nt={name:"SideBar",components:{},props:["drafting","currentDraftPosition","teams","isDrafting"],computed:{sortedTeams:function(){var t=this.teams.slice();return console.log(t),t.sort(this.compare)}},methods:{addTeamClicked:function(){this.$emit("onAddTeamClicked")},viewTeam:function(t){this.$emit("onViewTeam",t)},isActive:function(t){return!(!this.isDrafting||this.currentDraftPosition!=t)},removeTeam:function(t){this.$emit("onRemoveTeam",t._id)},shuffleTeams:function(){console.log(this.teams)},startDraft:function(){this.$emit("onStartDraft")},endDraft:function(){this.$emit("onEndDraft")},resetDraft:function(){this.$emit("onResetDraft"),this.$store.dispatch("resetDraft")}}},Ft=Nt,zt=(a("9091"),Object(d["a"])(Ft,jt,Et,!1,null,null,null)),Lt=zt.exports,Bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal",staticStyle:{display:"block"},attrs:{role:"dialog"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",[t._v("Add Team")]),a("button",{staticClass:"close",attrs:{type:"button"},on:{click:t.closeModal}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("div",{staticClass:"modal-body"},[a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[t._v("Team Name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.teamName,expression:"teamName"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.teamName},on:{input:function(e){e.target.composing||(t.teamName=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[t._v("Team Owner(s):")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.teamOwner,expression:"teamOwner"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.teamOwner},on:{input:function(e){e.target.composing||(t.teamOwner=e.target.value)}}})])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-primary",on:{click:t.saveNewTeam}},[t._v("Add")])])])])])])])},It=[],Vt={name:"AddTeamModal",data:function(){return{teamName:void 0,teamOwner:void 0}},methods:{closeModal:function(){this.$emit("closeModal")},saveNewTeam:function(){var t={name:this.teamName,owner:this.teamOwner};this.$emit("saveNewTeam",t)}}},Jt=Vt,Ht=Object(d["a"])(Jt,Bt,It,!1,null,null,null),Ut=Ht.exports,qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{on:{click:t.handleClick}},[a("b-card",{staticClass:"mb-2 styled-card",class:{shadow:t.contestant.active},staticStyle:{width:"300px"},attrs:{title:t.contestant.name,"img-src":t.contestant.image,"img-top":"",tag:"article"}},[a("b-card-text",[t._v(" "+t._s(t.contestant.age)+" "),a("br"),t._v(" "+t._s(t.contestant.occupation)+" "),a("br"),t._v(" "+t._s(t.contestant.location)+" ")]),t.isDrafting&&!t.contestant.drafted?a("button",{staticClass:"btn btn-primary form-control",on:{click:function(e){return t.draftContestant(t.contestant)}}},[t._v(" Draft ")]):t._e(),t.contestant.active?t._e():a("div",{staticClass:"notActive"})],1)],1)},Gt=[],Kt={name:"ContestantCardDraft",props:{contestant:Object,isDrafting:Boolean},methods:{handleClick:function(){},draftContestant:function(t){this.$emit("onDraftContestant",t)}}},Qt=Kt,Wt=(a("0cbe"),Object(d["a"])(Qt,qt,Gt,!1,null,null,null)),Xt=Wt.exports,Yt={name:"Draft",components:{Sidebar:Lt,AddTeamModal:Ut,TeamModal:St,ContestantCardDraft:Xt},data:function(){return{showAddTeamModal:!1,showTeamModal:!1,clickedTeam:void 0,isDrafting:!1,currentDraftPosition:0,reverseOrder:!1,endOfLineFirstPick:!1,firstPick:!0,draftRound:1}},computed:{contestants:function(){return this.$store.getters.getAllContestants},teams:function(){return this.$store.getters.getAllTeams},currentDraftTeam:function(){return this.teams[this.currentDraftPosition]}},methods:{fetchTeams:function(){this.$store.dispatch("fetchTeams")},fetchContestants:function(){this.$store.dispatch("fetchContestants")},handleAddTeamClicked:function(){this.showAddTeamModal=!0},handleViewTeamClicked:function(t){this.clickedTeam=t,this.showTeamModal=!0},handleCloseModal:function(){this.showAddTeamModal=!1,this.showTeamModal=!1},handleSaveNewTeam:function(t){this.$store.dispatch("addTeam",t),this.handleCloseModal()},handleRemoveTeam:function(t){this.$store.dispatch("removeTeam",t)},handleStartDraft:function(){this.isDrafting=!0},handleEndDraft:function(){this.isDrafting=!1},handleResetDraft:function(){this.currentDraftPosition=0,this.reverseOrder=!1,this.endOfLineFirstPick=!1,this.firstPick=!0,this.draftRound=1},handleDraftContestant:function(t){this.$store.dispatch("draftContestant",{teamId:this.currentDraftTeam._id,contestantId:t._id}),this.movePositions()},movePositions:function(){this.currentDraftPosition==this.teams.length-1&&0==this.reverseOrder?(this.reverseOrder=!0,this.draftRound+=1):0==this.currentDraftPosition&&1==this.reverseOrder&&(this.reverseOrder=!1,this.draftRound+=1),0==this.reverseOrder?0==this.currentDraftPosition&&0==this.endOfLineFirstPick&&0==this.firstPick?this.endOfLineFirstPick=!0:(this.endOfLineFirstPick=!1,this.currentDraftPosition+=1):this.currentDraftPosition==this.teams.length-1&&0==this.endOfLineFirstPick?this.endOfLineFirstPick=!0:(this.endOfLineFirstPick=!1,this.currentDraftPosition-=1),this.firstPick=!1}},created:function(){this.fetchContestants(),this.fetchTeams()}},Zt=Yt,te=Object(d["a"])(Zt,Pt,Rt,!1,null,null,null),ee=te.exports;n["default"].use(b["a"]);var ae=[{path:"/",component:et},{path:"/standings",component:xt},{path:"/admin",component:ht},{path:"/login",component:gt},{path:"/draft",component:ee},{path:"*",redirect:et}],ne=new b["a"]({mode:"history",base:"/bachelor-web/",routes:ae});ne.beforeEach((function(t,e,a){F.dispatch("fetchAccessToken"),"/admin"===t.fullPath&&(F.getters.isAuthorized||a("/login")),"/draft"===t.fullPath&&(F.getters.isAuthorized||a("/login")),"/login"===t.fullPath&&F.getters.isAuthorized&&a("/admin"),a()}));var se=ne;n["default"].config.productionTip=!1,n["default"].use(C["a"]),new n["default"]({render:function(t){return t(p)},router:se,store:F,created:function(){if(sessionStorage.redirect){var t=sessionStorage.redirect;delete sessionStorage.redirect,this.$router.push(t)}}}).$mount("#app")},"5a2f":function(t,e,a){},"5c7a":function(t,e,a){},"66c1":function(t,e,a){},"7ddb":function(t,e,a){},"877d":function(t,e,a){t.exports=a.p+"img/rose.05de4e17.png"},9091:function(t,e,a){"use strict";a("66c1")},"9e0f":function(t,e,a){"use strict";a("9eba")},"9eba":function(t,e,a){},a718:function(t,e,a){"use strict";a("2fa6")},aa24:function(t,e,a){},aeaf:function(t,e,a){"use strict";a("3cdf")},c667:function(t,e,a){},c7dd:function(t,e,a){},e394:function(t,e,a){"use strict";a("7ddb")},fd19:function(t,e,a){}});
//# sourceMappingURL=app.aa56faf3.js.map