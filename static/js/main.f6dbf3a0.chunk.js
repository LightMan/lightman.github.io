(this.webpackJsonpappconcept_one=this.webpackJsonpappconcept_one||[]).push([[0],[,function(e,n,t){e.exports={container:"LogoHeader_container__3m3d2",logoText:"LogoHeader_logoText__30S-0"}},function(e,n,t){e.exports={navItem:"NavItem_navItem__1BBrf",scaleUp:"NavItem_scaleUp__1M1H0",navItemSelected:"NavItem_navItemSelected__3qa3f"}},,,function(e,n,t){e.exports={app:"App_app___B2LQ"}},function(e,n,t){e.exports={navBar:"NavBar_navBar__463ye"}},function(e,n,t){e.exports={SectionContainer:"SectionContainer_SectionContainer__2SNdE"}},,function(e,n,t){e.exports=t(16)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(4),c=t.n(r);t(14),t(15),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l,i=t(8),u=t(5),m=t.n(u),s=t(1),h=t.n(s),v=function(){return o.a.createElement("header",{className:h.a.container},o.a.createElement("h1",{className:h.a.logoText},"AppConcept"))},p=t(6),w=t.n(p),f=t(2),_=t.n(f);!function(e){e[e.none=0]="none",e[e.what=1]="what",e[e.who=2]="who",e[e.where=3]="where",e[e.how=4]="how",e[e.why=5]="why",e[e.whom=6]="whom"}(l||(l={}));var E=function(e){var n=[_.a.navItem];return e.selected&&n.push(_.a.navItemSelected),o.a.createElement("h1",{className:n.join(" "),onClick:function(){e.onClick(e.type)}}," ",e.title)},d=function(e){var n=function(n){e.onNavItemChange(n)},t=Array();return e.navItems.forEach((function(a){var r=l[a],c=e.currentNavItem===a,i=o.a.createElement(E,{key:a,selected:c,type:a,title:r,onClick:n});t.push(i)})),o.a.createElement("div",{className:w.a.navBar},t)},I=t(7),N=t.n(I),k=function(e){return o.a.createElement("div",null,"What")},y=function(e){return o.a.createElement("div",null,"Where")},g=function(e){return o.a.createElement("div",null,"How")},C=function(e){return o.a.createElement("div",null,"Why")},S=function(e){return o.a.createElement("div",null,"Whom")},b=function(e){return o.a.createElement("div",null,"Who")},x=function(e){var n;switch(e.section){case l.what:n=o.a.createElement(k,null);break;case l.where:n=o.a.createElement(y,null);break;case l.how:n=o.a.createElement(g,null);break;case l.why:n=o.a.createElement(C,null);break;case l.who:n=o.a.createElement(b,null);break;case l.whom:n=o.a.createElement(S,null)}return o.a.createElement("section",{className:N.a.SectionContainer},n)},B=function(){var e=Object(a.useState)(l.none),n=Object(i.a)(e,2),t=n[0],r=n[1],c=[l.what,l.where,l.how,l.why,l.who,l.whom];return o.a.createElement("div",{className:m.a.app},o.a.createElement(v,null),o.a.createElement(d,{navItems:c,currentNavItem:t,onNavItemChange:function(e){r(e)}}),o.a.createElement(x,{section:t}))};c.a.render(o.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.f6dbf3a0.chunk.js.map