import{a as le,b as L,c as Ee,d as De}from"./chunk-AT5MDGLH.js";import{a as se,c as de,d as j,f as me}from"./chunk-V3PHLYDA.js";import{I as he,J as fe,M as ge,T as xe,U as ve,V as Ce,W as _e,X as we,Y as Me,a as ae,ba as R,ca as ye,la as be,ma as Ie,na as A,oa as Se,ra as Te,s as ce,sa as Oe,t as pe,u as F,x as ue}from"./chunk-QKQAM6Q3.js";import{Ab as k,Cb as ee,Db as te,Eb as ne,Fb as ie,Hb as c,Ib as z,Jb as P,Pa as d,Qa as m,X as b,a as q,aa as I,ac as oe,b as W,eb as f,ga as l,gb as r,h as $,hc as re,ic as N,kb as Y,lb as o,lc as x,mb as a,nb as p,o as G,oa as B,ob as S,pa as H,pb as T,qb as K,rb as C,sb as h,tb as w,ua as X,ub as _,v as J,va as M,vb as Z,xb as O,yb as E,zb as D}from"./chunk-CC27FSDD.js";var U=["light","dark"],y="dx-swatch-";function ke(t){return t&&U[U.indexOf(t)+1]||U[0]}var V=(()=>{class t{constructor(e){this.document=e,this.currentTheme=ke(),this.isDark=new G(this.currentTheme==="dark"),this.document.body.className.includes(y)||this.document.body.classList.add(y+this.currentTheme),this.updateSidenavTheme()}switchTheme(){let e=this.currentTheme,n=ke(this.currentTheme),i=e==="dark";this.document.body.classList.replace(y+e,y+n);let s=y+"additional",u=i?"-"+e:"",Q=`${s}${u}`;this.document.body.querySelector(`.${Q}`)?.classList.replace(Q,s+(i?"":"-dark")),this.currentTheme=n,this.isDark.next(this.currentTheme==="dark")}updateSidenavTheme(){let e=this.document.querySelector(".sidenav");e&&(this.currentTheme==="dark"?(e.classList.add("dark-theme"),e.classList.remove("light-theme")):(e.classList.add("light-theme"),e.classList.remove("dark-theme")))}static{this.\u0275fac=function(n){return new(n||t)(I(oe))}}static{this.\u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var Ne=(()=>{class t{constructor(e){this.themeService=e}onButtonClick(){this.themeService.switchTheme()}static{this.\u0275fac=function(n){return new(n||t)(m(V))}}static{this.\u0275cmp=l({type:t,selectors:[["app-theme-switcher"]],standalone:!0,features:[c],decls:1,vars:1,consts:[["stylingMode","text",1,"theme-button",3,"onClick","icon"]],template:function(n,i){n&1&&(o(0,"dx-button",0),C("onClick",function(){return i.onButtonClick()}),a()),n&2&&r("icon",i.themeService.currentTheme==="dark"?"sun":"moon")},dependencies:[x,fe,he]})}}return t})();var Qe=()=>({class:"user-button"}),qe=()=>({width:"150px"});function We(t,v){if(t&1&&p(0,"dx-drop-down-button",3),t&2){let e=h();r("icon","https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png")("showArrowIcon",!1)("items",e.menuItems)("elementAttr",z(5,Qe))("dropDownOptions",z(6,qe))}}function $e(t,v){if(t&1&&p(0,"dx-list",4),t&2){let e=h();r("items",e.menuItems)}}var Fe=(()=>{class t{constructor(){this.menuMode="context"}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=l({type:t,selectors:[["app-user-panel"]],inputs:{menuItems:"menuItems",menuMode:"menuMode"},standalone:!0,features:[c],decls:3,vars:2,consts:[[1,"user-panel"],["stylingMode","text","displayExpr","text","keyExpr","id",3,"icon","showArrowIcon","items","elementAttr","dropDownOptions",4,"ngIf"],["displayExpr","text","keyExpr","id","width","130",3,"items",4,"ngIf"],["stylingMode","text","displayExpr","text","keyExpr","id",3,"icon","showArrowIcon","items","elementAttr","dropDownOptions"],["displayExpr","text","keyExpr","id","width","130",3,"items"]],template:function(n,i){n&1&&(o(0,"div",0),f(1,We,1,7,"dx-drop-down-button",1)(2,$e,1,1,"dx-list",2),a()),n&2&&(d(),r("ngIf",i.menuMode!=="list"),d(),r("ngIf",i.menuMode==="list"))},dependencies:[Me,we,ge,_e,Ce,x,N]})}}return t})();var Je=t=>({icon:"menu",stylingMode:"text",onClick:t});function Xe(t,v){if(t&1&&p(0,"dxi-item",7),t&2){let e=h();r("options",P(1,Je,e.toggleMenu))}}function Ye(t,v){if(t&1&&p(0,"dxi-item",8),t&2){let e=h();r("text",e.title)}}function Ke(t,v){t&1&&(S(0),p(1,"app-theme-switcher"),T())}function Ze(t,v){if(t&1&&(o(0,"div"),p(1,"app-user-panel",9),a()),t&2){let e=h();d(),r("menuItems",e.userMenuItems)}}function et(t,v){if(t&1&&(o(0,"div"),p(1,"app-user-panel",10),a()),t&2){let e=h();d(),r("menuItems",e.userMenuItems)}}var Ae=(()=>{class t{constructor(e,n){this.authService=e,this.router=n,this.menuToggle=new M,this.menuToggleEnabled=!1,this.user={email:""},this.userMenuItems=[{text:"Profile",icon:"user",onClick:()=>{this.router.navigate(["/profile"])}},{text:"Logout",icon:"runner",onClick:()=>{this.authService.logOut()}}],this.toggleMenu=()=>{this.menuToggle.emit()}}ngOnInit(){this.authService.getUser().then(e=>this.user=e.data)}static{this.\u0275fac=function(n){return new(n||t)(m(Ee),m(j))}}static{this.\u0275cmp=l({type:t,selectors:[["app-header"]],inputs:{menuToggleEnabled:"menuToggleEnabled",title:"title"},outputs:{menuToggle:"menuToggle"},standalone:!0,features:[c],decls:9,vars:4,consts:[[1,"header-toolbar"],["location","before","widget","dxButton","cssClass","menu-button",3,"options",4,"ngIf"],["location","before","cssClass","header-title",3,"text",4,"ngIf"],["location","after"],[4,"dxTemplate"],["location","after","locateInMenu","auto","menuItemTemplate","menuItem"],[4,"dxTemplate","dxTemplateOf"],["location","before","widget","dxButton","cssClass","menu-button",3,"options"],["location","before","cssClass","header-title",3,"text"],[3,"menuItems"],["menuMode","list",3,"menuItems"]],template:function(n,i){n&1&&(o(0,"header")(1,"dx-toolbar",0),f(2,Xe,1,3,"dxi-item",1)(3,Ye,1,1,"dxi-item",2),o(4,"dxi-item",3),f(5,Ke,2,0,"ng-container",4),a(),o(6,"dxi-item",5),f(7,Ze,2,1,"div",6),a(),f(8,et,2,1,"div",6),a()()),n&2&&(d(2),r("ngIf",i.menuToggleEnabled),d(),r("ngIf",i.title),d(4),r("dxTemplateOf","item"),d(),r("dxTemplateOf","menuItem"))},dependencies:[x,N,Ie,be,ue,F,Ne,Fe],styles:["[_nghost-%COMP%]{flex:0 0 auto;z-index:1;box-shadow:0 1px 3px #0000001f,0 1px 2px #0000003d}  header{background-color:var(--base-bg)}  .dx-toolbar.header-toolbar .dx-toolbar-items-container .dx-toolbar-after{padding:0 40px}.screen-x-small[_nghost-%COMP%]     .dx-toolbar.header-toolbar .dx-toolbar-items-container .dx-toolbar-after, .screen-x-small   [_nghost-%COMP%]     .dx-toolbar.header-toolbar .dx-toolbar-items-container .dx-toolbar-after{padding:0 20px}  .dx-toolbar .dx-toolbar-item.menu-button{width:var(--side-panel-min-width);text-align:center;padding:0}  .header-title .dx-item-content{padding:0;margin:0}.dx-theme-generic[_nghost-%COMP%]   .dx-toolbar[_ngcontent-%COMP%], .dx-theme-generic   [_nghost-%COMP%]   .dx-toolbar[_ngcontent-%COMP%]{padding:10px 0}.dx-theme-generic[_nghost-%COMP%]   .user-button[_ngcontent-%COMP%] > .dx-button-content[_ngcontent-%COMP%], .dx-theme-generic   [_nghost-%COMP%]   .user-button[_ngcontent-%COMP%] > .dx-button-content[_ngcontent-%COMP%]{padding:3px}"]})}}return t})();var tt=Te.webApi,Le=(()=>{class t{constructor(e){this.httpClient=e}getMenus(){let e=`${tt.application}/menu`;return console.log(e),J(this.httpClient.get(e))}static{this.\u0275fac=function(n){return new(n||t)(I(ae))}}static{this.\u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var it=["*"],Ve=(()=>{class t{set selectedItem(e){this._selectedItem=e,this.menu.instance&&this.menu.instance.selectItem(e)}constructor(e,n,i,s){this.elementRef=e,this.service=n,this._alert=i,this.userStore=s,this.selectedItemChanged=new M,this.openMenu=new M,this.navigation=[],this.items=[],this._compactMode=!1;let u={text:"Home",path:"/home",icon:"home"};this.navigation.push(u),this.loadMenu()}loadMenu(){return $(this,null,function*(){try{console.log(this.userStore.getUser()),this._alert.loading("Cargando...");let e=yield this.userStore.getUser();console.log(e);let n=this.convertToNavigation(e?.menus||[]);this.navigation.push(...n),console.log(this.navigation),this.items=this.navigation.map(i=>W(q({},i),{expanded:!this._compactMode})),this.menu?.instance&&this.menu.instance.option("items",this.items),this.reordenMenu(),this._alert.close()}catch(e){this._alert.warning("Error al cargar configuracion inicial"),console.error("Error al cargar el men\xFA:",e)}})}reordenMenu(){this.elementRef.nativeElement.querySelectorAll(".dx-item.dx-treeview-item").forEach(n=>{let i=n.nextElementSibling;i&&i.classList.contains("dx-treeview-toggle-item-visibility")&&n.appendChild(i)})}convertToNavigation(e){return e.map(n=>({text:n.Name,path:n.Path?`/${n.Path}`:"",icon:n.Icon,items:n.SubMenu&&n.SubMenu.length>0?this.convertToNavigation(n.SubMenu):[]}))}get compactMode(){return this._compactMode}set compactMode(e){this._compactMode=e,this.menu.instance&&(e?this.menu.instance.collapseAll():this.menu.instance.expandItem(this._selectedItem))}onItemClick(e){this.selectedItemChanged.emit(e)}onItemExpanded(e){let i=e.itemElement.querySelector(".dx-treeview-toggle-item-visibility");i&&i.classList.add("dx-treeview-toggle-item-visibility-opened")}onItemCollapsed(e){let i=e.itemElement.querySelector(".dx-treeview-toggle-item-visibility");i&&i.classList.remove("dx-treeview-toggle-item-visibility-opened")}ngAfterViewInit(){this.reordenMenu(),ce(this.elementRef.nativeElement,"dxclick",e=>{this.openMenu.next(e)})}ngOnDestroy(){pe(this.elementRef.nativeElement,"dxclick")}static{this.\u0275fac=function(n){return new(n||t)(m(X),m(Le),m(Oe),m(le))}}static{this.\u0275cmp=l({type:t,selectors:[["app-side-navigation"]],viewQuery:function(n,i){if(n&1&&O(A,7),n&2){let s;E(s=D())&&(i.menu=s.first)}},inputs:{selectedItem:"selectedItem",compactMode:"compactMode"},outputs:{selectedItemChanged:"selectedItemChanged",openMenu:"openMenu"},standalone:!0,features:[c],ngContentSelectors:it,decls:3,vars:2,consts:[[1,"menu-container"],["keyExpr","path","selectionMode","single","expandEvent","click","width","100%",3,"onItemClick","onItemExpanded","onItemCollapsed","items","focusStateEnabled"]],template:function(n,i){n&1&&(w(),_(0),o(1,"div",0)(2,"dx-tree-view",1),C("onItemClick",function(u){return i.onItemClick(u)})("onItemExpanded",function(u){return i.onItemExpanded(u)})("onItemCollapsed",function(u){return i.onItemCollapsed(u)}),a()()),n&2&&(d(2),r("items",i.items)("focusStateEnabled",!1))},dependencies:[Se,A],styles:['.dx-swatch-additional[_nghost-%COMP%], .dx-swatch-additional-dark[_nghost-%COMP%]{display:flex;flex-direction:column;min-height:100%;height:100%;width:250px!important;background-color:var(--base-bg)}.dx-swatch-additional[_nghost-%COMP%]     .menu-container, .dx-swatch-additional-dark[_nghost-%COMP%]     .menu-container{min-height:100%;display:flex;flex:1}.dx-swatch-additional[_nghost-%COMP%]     .menu-container .dx-treeview, .dx-swatch-additional-dark[_nghost-%COMP%]     .menu-container .dx-treeview{white-space:nowrap}.dx-swatch-additional[_nghost-%COMP%]     .menu-container .dx-treeview .dx-treeview-item, .dx-swatch-additional-dark[_nghost-%COMP%]     .menu-container .dx-treeview .dx-treeview-item{padding-left:0;border-radius:0;flex-direction:row-reverse}.dx-swatch-additional[_nghost-%COMP%]     .menu-container .dx-treeview .dx-treeview-item .dx-icon, .dx-swatch-additional-dark[_nghost-%COMP%]     .menu-container .dx-treeview .dx-treeview-item .dx-icon{width:var(--side-panel-min-width)!important;margin:0!important}.dx-swatch-additional[_nghost-%COMP%]     .menu-container .dx-treeview .dx-treeview-node, .dx-swatch-additional-dark[_nghost-%COMP%]     .menu-container .dx-treeview .dx-treeview-node{padding:0!important}.dx-swatch-additional[_nghost-%COMP%]     .menu-container .dx-treeview .dx-treeview-toggle-item-visibility, .dx-swatch-additional-dark[_nghost-%COMP%]     .menu-container .dx-treeview .dx-treeview-toggle-item-visibility{right:10px;left:auto}.dx-swatch-additional[_nghost-%COMP%]     .menu-container .dx-treeview .dx-rtl .dx-treeview-toggle-item-visibility, .dx-swatch-additional-dark[_nghost-%COMP%]     .menu-container .dx-treeview .dx-rtl .dx-treeview-toggle-item-visibility{left:10px;right:auto}.dx-swatch-additional[_nghost-%COMP%]     .menu-container .dx-treeview .dx-treeview-node[aria-level="1"], .dx-swatch-additional-dark[_nghost-%COMP%]     .menu-container .dx-treeview .dx-treeview-node[aria-level="1"]{font-weight:700}.dx-swatch-additional[_nghost-%COMP%]     .menu-container .dx-treeview .dx-treeview-node[aria-level="2"] .dx-treeview-item-content, .dx-swatch-additional-dark[_nghost-%COMP%]     .menu-container .dx-treeview .dx-treeview-node[aria-level="2"] .dx-treeview-item-content{font-weight:400;padding:0 var(--side-panel-min-width)}']})}}return t})();var rt=["*",[["app-footer"]]],at=["*","app-footer"],st=t=>({"breadcrumb-moved":t});function dt(t,v){if(t&1){let e=K();o(0,"app-side-navigation",7),C("selectedItemChanged",function(i){B(e);let s=h();return H(s.navigationChanged(i))})("openMenu",function(){B(e);let i=h();return H(i.navigationClick())}),a()}if(t&2){let e=h();r("compactMode",!e.menuOpened)("selectedItem",e.selectedRoute)("ngClass",e.swatchClassName)}}var Be=(()=>{class t{constructor(e,n,i){this.themeService=e,this.screen=n,this.router=i,this.selectedRoute="",this.shaderEnabled=!1,this.temporaryMenuOpened=!1,this.menuMode="shrink",this.menuRevealMode="expand",this.minMenuSize=0,this.swatchClassName="dx-swatch-additional"}ngOnInit(){this.menuOpened=this.screen.sizes["screen-large"],this.router.events.subscribe(e=>{e instanceof se&&(this.selectedRoute=e.urlAfterRedirects.split("?")[0])}),this.screen.changed.subscribe(()=>this.updateDrawer()),this.updateDrawer()}updateDrawer(){let e=this.screen.sizes["screen-x-small"],n=this.screen.sizes["screen-large"];this.menuMode=n?"shrink":"overlap",this.menuRevealMode=e?"slide":"expand",this.minMenuSize=e?0:60,this.shaderEnabled=!n}get hideMenuAfterNavigation(){return this.menuMode==="overlap"||this.temporaryMenuOpened}get showMenuAfterClick(){return!this.menuOpened}navigationChanged(e){let n=e.itemData.path,i=e.event;n&&this.menuOpened?(e.node?.selected?i?.preventDefault():(this.router.navigate([n]),this.scrollView.instance.scrollTo(0)),this.hideMenuAfterNavigation&&(this.temporaryMenuOpened=!1,this.menuOpened=!1,i?.stopPropagation())):i?.preventDefault()}navigationClick(){this.showMenuAfterClick&&(this.temporaryMenuOpened=!0,this.menuOpened=!0)}static{this.\u0275fac=function(n){return new(n||t)(m(V),m(L),m(j))}}static{this.\u0275cmp=l({type:t,selectors:[["app-side-nav"]],viewQuery:function(n,i){if(n&1&&O(R,7),n&2){let s;E(s=D())&&(i.scrollView=s.first)}},inputs:{title:"title"},standalone:!0,features:[c],ngContentSelectors:at,decls:9,vars:11,consts:[[1,"layout-header",3,"menuToggle","menuToggleEnabled","title"],["position","before","openedStateMode","shrink",1,"layout-body",3,"openedChange","closeOnOutsideClick","revealMode","minSize","shading","opened"],[3,"compactMode","selectedItem","ngClass","selectedItemChanged","openMenu",4,"dxTemplate","dxTemplateOf"],[1,"with-footer"],[1,"content"],[1,"breadcrumb",3,"ngClass"],[1,"content-block"],[3,"selectedItemChanged","openMenu","compactMode","selectedItem","ngClass"]],template:function(n,i){n&1&&(w(rt),o(0,"app-header",0),C("menuToggle",function(){return i.menuOpened=!i.menuOpened}),a(),o(1,"dx-drawer",1),ie("openedChange",function(u){return ne(i.menuOpened,u)||(i.menuOpened=u),u}),f(2,dt,1,3,"app-side-navigation",2),o(3,"dx-scroll-view",3)(4,"div",4),p(5,"div",5),_(6),a(),o(7,"div",6),_(8,1),a()()()),n&2&&(r("menuToggleEnabled",!0)("title",i.title),d(),r("closeOnOutsideClick",i.shaderEnabled)("revealMode",i.menuRevealMode)("minSize",i.minMenuSize)("shading",i.shaderEnabled),te("opened",i.menuOpened),d(),r("dxTemplateOf","panel"),d(3),r("ngClass",P(9,st,i.menuOpened)))},dependencies:[x,re,Ae,ve,xe,F,ye,R,Ve],styles:['@charset "UTF-8";[_nghost-%COMP%]{flex-direction:column;display:flex;height:100%;width:100%}.layout-header[_ngcontent-%COMP%]{z-index:1505}.breadcrumb[_ngcontent-%COMP%]{width:107%;height:30px;margin-left:-35px;margin-top:-20px;transition:all .3s ease}.breadcrumb.breadcrumb-moved[_ngcontent-%COMP%]{margin-left:-35px;margin-right:-30px}']})}}return t})();var mt=["*"],He=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=l({type:t,selectors:[["app-footer"]],standalone:!0,features:[c],ngContentSelectors:mt,decls:2,vars:0,template:function(n,i){n&1&&(w(),o(0,"footer"),_(1),a())},styles:["[_nghost-%COMP%]{display:block;color:var(--base-text-color-alpha-7);border-top:1px solid var(--footer-border-color);padding-top:20px;padding-bottom:24px;margin:0 40px}.screen-x-small   [_nghost-%COMP%]{margin:0 20px}"]})}}return t})();var ze=(()=>{class t{get getClass(){return`${Object.keys(this.screen.sizes).filter(n=>this.screen.sizes[n]).join(" ")} app`}constructor(e,n){this.appInfo=e,this.screen=n}static{this.\u0275fac=function(n){return new(n||t)(m(De),m(L))}}static{this.\u0275cmp=l({type:t,selectors:[["app-main-layout"]],hostVars:2,hostBindings:function(n,i){n&2&&Y(i.getClass)},standalone:!0,features:[c],decls:6,vars:3,consts:[[3,"title"]],template:function(n,i){n&1&&(S(0),o(1,"app-side-nav",0),p(2,"router-outlet"),o(3,"app-footer"),k(4),p(5,"br"),a()(),T()),n&2&&(d(),Z("title",i.appInfo.title),d(3),ee(" Copyright \xA9 2011-",i.appInfo.currentYear," ",i.appInfo.title," Inc. "))},dependencies:[Be,He,me,de],styles:["[_nghost-%COMP%]{display:block}"]})}}return t})();var Ue=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=l({type:t,selectors:[["app-home"]],standalone:!0,features:[c],decls:2,vars:0,template:function(n,i){n&1&&(o(0,"p"),k(1,"home works!"),a())}})}}return t})();var fn=[{path:"",component:ze,children:[{path:"inicio",component:Ue},{path:"register",loadChildren:()=>import("./chunk-FBQE57UF.js").then(t=>t.RegisterRoutes)},{path:"setting",loadChildren:()=>import("./chunk-JNYS5D7J.js").then(t=>t.CoursesRoutes)}]},{path:"**",redirectTo:"inicio"}];export{fn as routes};
