(function(e){function t(t){for(var r,i,s=t[0],l=t[1],c=t[2],d=0,u=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&u.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);m&&m(t);while(u.length)u.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,i=1;i<a.length;i++){var s=a[i];0!==n[s]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var r={},i={app:0},n={app:0},o=[];function s(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"cc2214e9"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={about:1};i[e]?t.push(i[e]):0!==i[e]&&a[e]&&t.push(i[e]=new Promise((function(t,a){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"ed036f12"}[e]+".css",n=l.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===r||d===n))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){c=u[s],d=c.getAttribute("data-href");if(d===r||d===n)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||n,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete i[e],m.parentNode.removeChild(m),a(o)},m.href=n;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[e]=0})));var r=n[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,a){r=n[e]=[t,a]}));t.push(r[2]=o);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=s(e);var u=new Error;c=function(t){d.onerror=d.onload=null,clearTimeout(m);var a=n[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",u.name="ChunkLoadError",u.type=r,u.request=i,a[1](u)}n[e]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(a,r,function(t){return e[t]}.bind(null,r));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var m=d;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{app:"",color:"primary"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[a("v-list-item",{attrs:{router:"",to:"/"}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-home")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Halaman 1")])],1)],1),a("v-list-item",{attrs:{router:"",to:"/about"}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-pencil")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Halaman 2")])],1)],1)],1)],1),a("v-app-bar",{attrs:{app:""}},[a("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),a("v-toolbar-title",[e._v("Application")])],1),a("v-content",[a("router-view")],1)],1)},n=[],o={data:function(){return{drawer:null}}},s=o,l=a("2877"),c=a("6544"),d=a.n(c),u=a("7496"),m=a("40dc"),f=a("5bc1"),v=a("a75b"),p=a("132d"),h=a("8860"),b=a("da13"),g=a("1800"),I=a("5d23"),x=a("f774"),y=a("2a7f"),k=Object(l["a"])(s,i,n,!1,null,null,null),w=k.exports;d()(k,{VApp:u["a"],VAppBar:m["a"],VAppBarNavIcon:f["a"],VContent:v["a"],VIcon:p["a"],VList:h["a"],VListItem:b["a"],VListItemAction:g["a"],VListItemContent:I["a"],VListItemTitle:I["b"],VNavigationDrawer:x["a"],VToolbarTitle:y["a"]});var _=a("f309");r["a"].use(_["a"]);var C=new _["a"]({}),V=a("0ff2"),T=(a("d3b7"),a("8c4f")),A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},j=[],O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.desserts,search:e.search,"sort-by":"calories"},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[e._v("Crud Atma Pedia")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-btn",e._g({staticClass:"mb-2",attrs:{color:"primary",dark:""}},r),[e._v("Buat Makanan")]),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"mdi-search-web",label:"Cari Makanan...","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Dessert name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Calories"},model:{value:e.editedItem.calories,callback:function(t){e.$set(e.editedItem,"calories",t)},expression:"editedItem.calories"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Fat (g)"},model:{value:e.editedItem.fat,callback:function(t){e.$set(e.editedItem,"fat",t)},expression:"editedItem.fat"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Carbs (g)"},model:{value:e.editedItem.carbs,callback:function(t){e.$set(e.editedItem,"carbs",t)},expression:"editedItem.carbs"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Protein (g)"},model:{value:e.editedItem.protein,callback:function(t){e.$set(e.editedItem,"protein",t)},expression:"editedItem.protein"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(t){var r=t.item;return[a("v-icon",{staticClass:"mr-1",on:{click:function(t){return e.editItem(r)}}},[e._v(" mdi-silverware ")]),a("v-icon",{staticClass:"mr-1",on:{click:function(t){return e.deleteItem(r)}}},[e._v(" mdi-delete ")])]}},{key:"item.select",fn:function(t){var r=t.item;return[a("v-checkbox",{attrs:{value:r[".key"]},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})]}}])}),e.selected.length>0?a("div",{staticClass:"text-right pt-2"},[a("v-btn",{attrs:{large:"",color:"error"},on:{click:e.deleteMultiple}},[e._v("Delete Data")])],1):e._e()],1)},P=[],E=(a("b0c0"),a("dc59")),S={data:function(){return{cek:-1,dialog:!1,selected:[],search:"",headers:[{text:"Dessert (100g serving)",align:"left",sortable:!1,value:"name"},{text:"Calories",value:"calories"},{text:"Fat (g)",value:"fat"},{text:"Carbs (g)",value:"carbs"},{text:"Protein (g)",value:"protein"},{text:"Actions",value:"action",sortable:!1}],desserts:[],editedIndex:-1,editedItem:{name:"",calories:0,fat:0,carbs:0,protein:0},defaultItem:{name:"",calories:0,fat:0,carbs:0,protein:0}}},firebase:{desserts:E["a"]},computed:{formTitle:function(){return-1===this.cek?"New Item":"Edit Item"}},watch:{dialog:function(e){e||this.close()}},methods:{clear:function(){this.editedItem={},this.editedItem.name="",this.editedItem.calories=0,this.editedItem.fat=0,this.editedItem.carbs=0,this.editedItem.protein=0,this.cek=-1},editItem:function(e){this.editedIndex=e[".key"],this.cek=0,this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){confirm("Are you sure you want to delete this item?")&&E["a"].child(e[".key"]).remove()},deleteMultiple:function(){for(var e=0;e<this.selected.length;e++)E["a"].child(this.selected[e]).remove();confirm("Are you sure you want to delete this item?"),this.selected=[]},close:function(){var e=this;this.dialog=!1,setTimeout((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}),300)},save:function(){this.cek>-1?(E["a"].child(this.editedIndex).set({name:this.editedItem.name,calories:this.editedItem.calories,fat:this.editedItem.fat,carbs:this.editedItem.carbs,protein:this.editedItem.protein}),this.clear()):(E["a"].push({name:this.editedItem.name,calories:this.editedItem.calories,fat:this.editedItem.fat,carbs:this.editedItem.carbs,protein:this.editedItem.protein}),this.clear()),this.close()}}},L=S,D=a("8336"),$=a("b0af"),M=a("99d9"),N=a("ac7c"),B=a("62ad"),H=a("a523"),F=a("8fea"),W=a("169a"),q=a("ce7e"),J=a("0fd9"),R=a("2fa4"),U=a("8654"),z=a("71d9"),K=Object(l["a"])(L,O,P,!1,null,null,null),Y=K.exports;d()(K,{VBtn:D["a"],VCard:$["a"],VCardActions:M["a"],VCardText:M["b"],VCardTitle:M["c"],VCheckbox:N["a"],VCol:B["a"],VContainer:H["a"],VDataTable:F["a"],VDialog:W["a"],VDivider:q["a"],VIcon:p["a"],VRow:J["a"],VSpacer:R["a"],VTextField:U["a"],VToolbar:z["a"],VToolbarTitle:y["a"]});var G={name:"home",components:{HelloWorld:Y}},Q=G,X=Object(l["a"])(Q,A,j,!1,null,null,null),Z=X.exports;r["a"].use(T["a"]);var ee=[{path:"/",name:"home",component:Z},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],te=new T["a"]({mode:"history",base:"/",routes:ee}),ae=te;r["a"].use(V["a"]),r["a"].config.productionTip=!1,new r["a"]({vuetify:C,router:ae,render:function(e){return e(w)}}).$mount("#app")},dc59:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return s}));var r=a("8aa50"),i=a.n(r),n=(a("66ce"),i.a.initializeApp({databaseURL:"https://vueandfirebase-4c62a.firebaseio.com"}).database()),o=n.ref("desserts"),s=n.ref("minuman")}});
//# sourceMappingURL=app.8a5af58a.js.map