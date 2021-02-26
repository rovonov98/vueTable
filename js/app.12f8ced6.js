(function(e){function t(t){for(var i,o,a=t[0],u=t[1],c=t[2],d=0,f=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(i=!1)}i&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},r={app:0},s=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vueTable/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("Table")],1)],1)},s=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[e._v(" First Name ")]),n("th",{staticClass:"text-left"},[e._v(" Last Name ")])])]),n("tbody",[e._l(e.persons,(function(t,i){return n("tr",{key:i},[e.editing===t.uuid?n("td",[n("v-text-field",{model:{value:t.firstName,callback:function(n){e.$set(t,"firstName",n)},expression:"item.firstName"}})],1):e._e(),e.editing===t.uuid?n("td",[n("v-text-field",{model:{value:t.lastName,callback:function(n){e.$set(t,"lastName",n)},expression:"item.lastName"}})],1):e._e(),e.editing===t.uuid?n("td",[n("v-btn",{attrs:{elevation:"2","x-small":""},on:{click:function(n){return e.$store.dispatch("putPerson",{uuid:t.uuid,person:e.persons[i]})}}},[e._v(" save ")])],1):e._e(),e.editing!==t.uuid?n("td",[e._v(" "+e._s(t.firstName)+" ")]):e._e(),e.editing!==t.uuid?n("td",[e._v(" "+e._s(t.lastName)+" ")]):e._e(),e.editing!==t.uuid?n("td",[n("v-btn",{attrs:{elevation:"2","x-small":""},on:{click:function(n){return e.editHandler(t.uuid)}}},[e._v(" edit ")])],1):e._e(),n("td",[n("v-btn",{attrs:{elevation:"2","x-small":""},on:{click:function(n){return e.$store.dispatch("deletePerson",t.uuid)}}},[e._v(" delete ")])],1)])})),n("tr",[e.isAdding?n("v-text-field",{model:{value:e.newPerson.firstName,callback:function(t){e.$set(e.newPerson,"firstName",t)},expression:"newPerson.firstName"}}):e._e(),e.isAdding?n("v-text-field",{model:{value:e.newPerson.lastName,callback:function(t){e.$set(e.newPerson,"lastName",t)},expression:"newPerson.lastName"}}):e._e(),e.isAdding?e._e():n("v-btn",{attrs:{elevation:"2","x-small":""},on:{click:e.addHandler}},[e._v(" add person ")]),e.isAdding?n("v-btn",{attrs:{elevation:"2","x-small":""},on:{click:e.submitHandler}},[e._v(" submit ")]):e._e()],1)],2)]},proxy:!0}])})},a=[],u=n("1da1"),c=(n("96cf"),{name:"Table",data:function(){return{api:"http://localhost:3000/person",isAdding:!1,newPerson:{firstName:"",lastdName:""}}},computed:{persons:function(){return this.$store.getters.getPersons},editing:function(){return this.$store.getters.getEditing}},methods:{submitHandler:function(){this.$store.dispatch("postPerson",this.newPerson),this.addingToggle()},addHandler:function(){this.newPerson.firstName="",this.newPerson.lastName="",this.addingToggle()},editHandler:function(e){""===this.editing&&this.$store.commit("changeEditing",e)},addingToggle:function(){this.isAdding=!this.isAdding}},created:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$store.dispatch("getPersons");case 1:case"end":return t.stop()}}),t)})))()}}),l=c,d=n("2877"),f=n("6544"),p=n.n(f),m=n("8336"),h=n("1f4f"),g=n("8654"),v=Object(d["a"])(l,o,a,!1,null,null,null),b=v.exports;p()(v,{VBtn:m["a"],VSimpleTable:h["a"],VTextField:g["a"]});var N={name:"App",components:{Table:b}},P=N,_=(n("5c0b"),n("7496")),x=n("f6c4"),y=Object(d["a"])(P,r,s,!1,null,null,null),w=y.exports;p()(y,{VApp:_["a"],VMain:x["a"]});n("4de4"),n("d3b7"),n("99af");var O=n("2f62");i["a"].use(O["a"]);var j=new O["a"].Store({state:{api:"http://localhost:3000/person",persons:[{uuid:"1",firstName:"firstName",lastName:"lastName"}],editing:""},mutations:{getPersons:function(e,t){e.persons=t},deletePerson:function(e,t){e.persons=e.persons.filter((function(e){return e.uuid!==t}))},postPerson:function(e,t){e.persons.push(t)},changeEditing:function(e,t){e.editing=t}},actions:{getPersons:function(e){fetch(this.state.api).then((function(e){return e.json()})).then((function(t){return e.commit("getPersons",t)})).catch((function(e){return console.log(e)}))},deletePerson:function(e,t){fetch("".concat(this.state.api,"/").concat(t),{method:"DELETE"}).then((function(e){return e.text()})).then((function(){return e.commit("deletePerson",t)})).catch((function(e){return console.log(e)}))},postPerson:function(e,t){fetch(this.state.api,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({firstName:t.firstName,lastName:t.lastName})}).then((function(e){return e.json()})).then((function(n){e.commit("postPerson",{firstName:t.firstName,lastName:t.lastName,uuid:n})})).catch((function(e){return console.log(e)}))},putPerson:function(e,t){fetch("".concat(this.state.api,"/").concat(t.uuid),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify({firstName:t.person.firstName,lastName:t.person.lastName})}).then((function(e){return e.text()})).then((function(){e.commit("changeEditing","")}))}},getters:{getPersons:function(e){return e.persons},getEditing:function(e){return e.editing}}}),k=n("f309");i["a"].use(k["a"]);var T=new k["a"]({});i["a"].config.productionTip=!1,new i["a"]({vuetify:T,store:j,render:function(e){return e(w)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.12f8ced6.js.map