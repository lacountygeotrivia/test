"use strict";(globalThis.webpackChunkth_v3=globalThis.webpackChunkth_v3||[]).push([[5743],{95743:(n,e,t)=>{t.r(e),t.d(e,{registerFunctions:()=>f});var r=t(47238),i=t(44715),a=t(28113),s=t(73954),u=t(32238),l=t(84178);function o(n){return n instanceof u.Z}function c(n,e,t,c){return c(n,e,(async function(n,e,c){if(c.length<2)throw new Error("Missing Parameters");if(null===(c=(0,i.H)(c))[0]&&null===c[1])return!1;if((0,i.y)(c[0])){if(c[1]instanceof u.Z)return new a.Z({parentfeatureset:c[0],relation:t,relationGeom:c[1]});if(null===c[1])return new s.Z({parentfeatureset:c[0]});throw new Error("Spatial Relation cannot accept this parameter type")}if(o(c[0])){if(o(c[1])){switch(t){case"esriSpatialRelEnvelopeIntersects":return(0,l.kK)((0,r.SV)(c[0]),(0,r.SV)(c[1]));case"esriSpatialRelIntersects":return(0,l.kK)(c[0],c[1]);case"esriSpatialRelContains":return(0,l.r3)(c[0],c[1]);case"esriSpatialRelOverlaps":return(0,l.Nm)(c[0],c[1]);case"esriSpatialRelWithin":return(0,l.uh)(c[0],c[1]);case"esriSpatialRelTouches":return(0,l.W4)(c[0],c[1]);case"esriSpatialRelCrosses":return(0,l.jU)(c[0],c[1])}throw new Error("Unrecognised Relationship")}if((0,i.y)(c[1]))return new a.Z({parentfeatureset:c[1],relation:t,relationGeom:c[0]});if(null===c[1])return!1;throw new Error("Spatial Relation cannot accept this parameter type")}if(null!==c[0])throw new Error("Spatial Relation cannot accept this parameter type");return(0,i.y)(c[1])?new s.Z({parentfeatureset:c[1]}):!(c[1]instanceof u.Z||null===c[1])&&void 0}))}function f(n){"async"===n.mode&&(n.functions.intersects=function(e,t){return c(e,t,"esriSpatialRelIntersects",n.standardFunctionAsync)},n.functions.envelopeintersects=function(e,t){return c(e,t,"esriSpatialRelEnvelopeIntersects",n.standardFunctionAsync)},n.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),n.functions.contains=function(e,t){return c(e,t,"esriSpatialRelContains",n.standardFunctionAsync)},n.functions.overlaps=function(e,t){return c(e,t,"esriSpatialRelOverlaps",n.standardFunctionAsync)},n.functions.within=function(e,t){return c(e,t,"esriSpatialRelWithin",n.standardFunctionAsync)},n.functions.touches=function(e,t){return c(e,t,"esriSpatialRelTouches",n.standardFunctionAsync)},n.functions.crosses=function(e,t){return c(e,t,"esriSpatialRelCrosses",n.standardFunctionAsync)},n.functions.relate=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(t=(0,i.H)(t),(0,i.p)(t,3,3),o(t[0])&&o(t[1]))return(0,l.LV)(t[0],t[1],(0,i.h)(t[2]));if(t[0]instanceof u.Z&&null===t[1])return!1;if(t[1]instanceof u.Z&&null===t[0])return!1;if((0,i.y)(t[0])&&null===t[1])return new s.Z({parentfeatureset:t[0]});if((0,i.y)(t[1])&&null===t[0])return new s.Z({parentfeatureset:t[1]});if((0,i.y)(t[0])&&t[1]instanceof u.Z)return t[0].relate(t[1],(0,i.h)(t[2]));if((0,i.y)(t[1])&&t[0]instanceof u.Z)return t[1].relate(t[0],(0,i.h)(t[2]));if(null===t[0]&&null===t[1])return!1;throw new Error("Illegal Argument")}))})}}}]);
//# sourceMappingURL=5743.56bc70e7.chunk.js.map