"use strict";(globalThis.webpackChunkth_v3=globalThis.webpackChunkth_v3||[]).push([[4e3],{14e3:(e,t,i)=>{i.d(t,{q:()=>A});var s=i(63780),r=i(10064),n=i(84652),a=i(92026),o=i(18759),u=i(68860),l=i(41414),c=i(65156),h=i(376),p=i(77981),d=i(50689),f=i(92975),y=i(83406),m=i(33392),g=i(19995),S=i(60480),x=i(92536),_=i(77095),w=i(20311),R=i(31904),F=i(52410),I=i(819),Q=i(40993);const v="feature-store:unsupported-query";const C=new o.WJ(2e6);let b=0;class A{constructor(e){this.capabilities={query:S.g},this.geometryType=e.geometryType,this.hasM=e.hasM,this.hasZ=e.hasZ,this.objectIdField=e.objectIdField,this.spatialReference=e.spatialReference,this.definitionExpression=e.definitionExpression,this.featureStore=e.featureStore,this.aggregateAdapter=e.aggregateAdapter,this._changeHandle=this.featureStore.events.on("changed",(()=>this.clearCache())),this.timeInfo=e.timeInfo,e.cacheSpatialQueries&&(this._geometryQueryCache=new o.Xq(b+++"$$",C)),this.fieldsIndex=new F.Z(e.fields),e.scheduler&&e.priority&&(this._frameTask=e.scheduler.registerTask(e.priority))}destroy(){this._frameTask=(0,a.hw)(this._frameTask),this.clearCache(),(0,a.SC)(this._geometryQueryCache),this._changeHandle=(0,a.hw)(this._changeHandle),(0,a.SC)(this.fieldsIndex)}get featureAdapter(){return this.featureStore.featureAdapter}get fullExtent(){const e=this.featureStore.fullBounds;return(0,a.Wi)(e)?null:{xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:(0,R.S2)(this.spatialReference)}}get timeExtent(){return this.timeInfo?(this._timeExtent||(this._timeExtent=(0,w.R)(this.timeInfo,this.featureStore)),this._timeExtent):null}clearCache(){this._geometryQueryCache?.clear(),this._allItems=null,this._timeExtent=null}async executeQuery(e,t){try{return(await this._executeQuery(e,{},t)).createQueryResponse()}catch(i){if(i!==R.vF)throw i;return new x.y([],e,this).createQueryResponse()}}async executeQueryForCount(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;try{return(await this._executeQuery(e,{returnGeometry:!1,returnCentroid:!1,outSR:null},t)).createQueryResponseForCount()}catch(i){if(i!==R.vF)throw i;return 0}}async executeQueryForExtent(e,t){const i=e.outSR;try{const s=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},t),r=s.size;if(!r)return{count:0,extent:null};(0,l.t8)(T,l.Gv),this.featureStore.forEachBounds(s.items,(e=>(0,l.TC)(T,e)),E);const n={xmin:T[0],ymin:T[1],xmax:T[3],ymax:T[4],spatialReference:(0,R.S2)(this.spatialReference)};this.hasZ&&isFinite(T[2])&&isFinite(T[5])&&(n.zmin=T[2],n.zmax=T[5]);const a=(0,g.iV)(n,s.spatialReference,i);if(a.spatialReference=(0,R.S2)(i||this.spatialReference),a.xmax-a.xmin==0){const e=(0,u.c9)(a.spatialReference);a.xmin-=e,a.xmax+=e}if(a.ymax-a.ymin==0){const e=(0,u.c9)(a.spatialReference);a.ymin-=e,a.ymax+=e}if(this.hasZ&&null!=a.zmin&&null!=a.zmax&&a.zmax-a.zmin==0){const e=(0,u.c9)(a.spatialReference);a.zmin-=e,a.zmax+=e}return{count:r,extent:a}}catch(s){if(s===R.vF)return{count:0,extent:null};throw s}}async executeQueryForIds(e,t){return this.executeQueryForIdSet(e,t).then((e=>Array.from(e)))}async executeQueryForIdSet(e,t){try{const i=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},t),s=i.items,r=new Set;return await this._reschedule((()=>{for(const e of s)r.add(i.featureAdapter.getObjectId(e))}),t),r}catch(i){if(i===R.vF)return new Set;throw i}}async executeQueryForSnapping(e,t){const{point:i,distance:s,types:r}=e;if(r===x.r.NONE)return{candidates:[]};const n=await this._reschedule((()=>this._checkQuerySupport(e.query)),t),o=!(0,f.fS)(i.spatialReference,this.spatialReference);o&&await(0,g._W)(i.spatialReference,this.spatialReference);const u="number"==typeof s?s:s.x,l="number"==typeof s?s:s.y,c={xmin:i.x-u,xmax:i.x+u,ymin:i.y-l,ymax:i.y+l,spatialReference:i.spatialReference},h=o?(0,g.iV)(c,this.spatialReference):c;if(!h)return{candidates:[]};const y=(await(0,d.aX)((0,p.im)(i),null,{signal:t}))[0],m=(await(0,d.aX)((0,p.im)(h),null,{signal:t}))[0];if((0,a.Wi)(y)||(0,a.Wi)(m))return{candidates:[]};const S=new x.y(this._searchFeatures(this._getQueryBBoxes(m.toJSON())),n,this);await this._reschedule((()=>this._executeObjectIdsQuery(S)),t),await this._reschedule((()=>this._executeTimeQuery(S)),t),await this._reschedule((()=>this._executeAttributesQuery(S)),t);const _=y.toJSON(),w=o?(0,g.iV)(_,this.spatialReference):_,R=o?Math.max(h.xmax-h.xmin,h.ymax-h.ymin)/2:s;return S.createSnappingResponse({...e,point:w,distance:R},i.spatialReference)}async executeQueryForLatestObservations(e,t){if(!this.timeInfo||!this.timeInfo.trackIdField)throw new r.Z(v,"Missing timeInfo or timeInfo.trackIdField",{query:e,timeInfo:this.timeInfo});try{const i=await this._executeQuery(e,{},t);return await this._reschedule((()=>this._filterLatest(i)),t),i.createQueryResponse()}catch(i){if(i!==R.vF)throw i;return new x.y([],e,this).createQueryResponse()}}async executeQueryForSummaryStatistics(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0;const{field:s,normalizationField:r,valueExpression:n}=t;return(await this._getQueryEngineResultForStats(e,{field:s,normalizationField:r,valueExpression:n},i)).createSummaryStatisticsResponse(t)}async executeQueryForUniqueValues(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0;const{field:s,valueExpression:r}=t;return(await this._getQueryEngineResultForStats(e,{field:s,valueExpression:r},i)).createUniqueValuesResponse(t)}async executeQueryForClassBreaks(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0;const{field:s,normalizationField:r,valueExpression:n}=t;return(await this._getQueryEngineResultForStats(e,{field:s,normalizationField:r,valueExpression:n},i)).createClassBreaksResponse(t)}async executeQueryForHistogram(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0;const{field:s,normalizationField:r,valueExpression:n}=t;return(await this._getQueryEngineResultForStats(e,{field:s,normalizationField:r,valueExpression:n},i)).createHistogramResponse(t)}async _schedule(e,t){return(0,a.pC)(this._frameTask)?this._frameTask.schedule(e,t):e(Q.G5)}async _reschedule(e,t){return(0,a.pC)(this._frameTask)?this._frameTask.reschedule(e,t):e(Q.G5)}_getAll(e){return(0,a.Wi)(this._allItems)&&(this._allItems=this.featureStore.toArray()),new x.y(this._allItems,e,this)}async _executeQuery(e,t,i){e=(0,n.d9)(e),e=await this._schedule((()=>(0,R.Up)(e,this.definitionExpression,this.spatialReference)),i),e=await this._reschedule((()=>this._checkQuerySupport(e)),i),e={...e,...t};const s=await this._reschedule((()=>this._executeSceneFilterQuery(e,i)),i),r=await this._reschedule((()=>this._executeGeometryQuery(e,s,i)),i);return await this._reschedule((()=>this._executeAggregateIdsQuery(r)),i),await this._reschedule((()=>this._executeObjectIdsQuery(r)),i),await this._reschedule((()=>this._executeTimeQuery(r)),i),await this._reschedule((()=>this._executeAttributesQuery(r)),i),r}async _executeSceneFilterQuery(e,t){if((0,a.Wi)(e.sceneFilter))return null;const{outSR:i,returnGeometry:s,returnCentroid:r}=e,n=this.featureStore.featureSpatialReference,o=e.sceneFilter.geometry,u=(0,a.Wi)(n)||(0,f.fS)(n,o.spatialReference)?o:(0,g.iV)(o,n);if(!u)return null;const l=s||r,c=(0,f.JY)(i)&&!(0,f.fS)(this.spatialReference,i)&&l?async e=>this._project(e,i):e=>e,h=this.featureAdapter,p=this._searchFeatures(this._getQueryBBoxes(u));if("disjoint"===e.sceneFilter.spatialRelationship){if(!p.length)return null;const i=new Set;for(const e of p)i.add(h.getObjectId(e));const s=await this._reschedule((()=>this.featureStore.toArray()),t);return c(await this._reschedule((async()=>{const r=await(0,_.cW)("esriSpatialRelDisjoint",u,this.geometryType,this.hasZ,this.hasM),n=await this._runSpatialFilter(s,(e=>!i.has(h.getObjectId(e))||r(h.getGeometry(e))),t);return new x.y(n,e,this)}),t))}if(!p.length)return new x.y([],e,this);if(this._canExecuteSinglePass(u,e))return c(new x.y(p,e,this));const d=await(0,_.cW)("esriSpatialRelContains",u,this.geometryType,this.hasZ,this.hasM),y=await this._runSpatialFilter(p,(e=>d(h.getGeometry(e))),t);return c(new x.y(y,e,this))}async _executeGeometryQuery(e,t,i){if((0,a.pC)(t)&&0===t.items.length)return t;e=(0,a.pC)(t)?t.query:e;const{geometry:r,outSR:n,spatialRel:o,returnGeometry:u,returnCentroid:l}=e,c=this.featureStore.featureSpatialReference,h=!r||(0,a.Wi)(c)||(0,f.fS)(c,r.spatialReference)?r:(0,g.iV)(r,c),p=u||l,d=(0,f.JY)(n)&&!(0,f.fS)(this.spatialReference,n),y=this._geometryQueryCache&&(0,a.Wi)(t)?d&&p?JSON.stringify({originalFilterGeometry:r,spatialRelationship:o,outSpatialReference:n}):JSON.stringify({originalFilterGeometry:r,spatialRelationship:o}):null,m=y?this._geometryQueryCache.get(y):null;if((0,a.pC)(m))return new x.y(m,e,this);const S=async e=>(d&&p&&await this._project(e,n),y&&this._geometryQueryCache.put(y,e.items,e.items.length+1),e);if(!h)return S((0,a.pC)(t)?t:this._getAll(e));const w=this.featureAdapter;let R=this._searchFeatures(this._getQueryBBoxes(r));if("esriSpatialRelDisjoint"===o){if(!R.length)return S((0,a.pC)(t)?t:this._getAll(e));const s=new Set;for(const e of R)s.add(w.getObjectId(e));const r=(0,a.pC)(t)?t.items:await this._reschedule((()=>this.featureStore.toArray()),i),n=await this._reschedule((async()=>{const t=await(0,_.cW)(o,h,this.geometryType,this.hasZ,this.hasM),n=await this._runSpatialFilter(r,(e=>!s.has(w.getObjectId(e))||t(w.getGeometry(e))),i);return new x.y(n,e,this)}),i);return S(n)}if((0,a.pC)(t)){const e=new s.SO;R=R.filter((i=>(0,s.cq)(t.items,i,t.items.length,e)>=0))}if(!R.length){const t=new x.y([],e,this);return y&&this._geometryQueryCache.put(y,t.items,1),t}if(this._canExecuteSinglePass(h,e))return S(new x.y(R,e,this));const F=await(0,_.cW)(o,h,this.geometryType,this.hasZ,this.hasM),I=await this._runSpatialFilter(R,(e=>F(w.getGeometry(e))),i);return S(new x.y(I,e,this))}_executeAggregateIdsQuery(e){if(0===e.items.length||!e.query.aggregateIds||!e.query.aggregateIds.length||(0,a.Wi)(this.aggregateAdapter))return;const t=new Set;for(const s of e.query.aggregateIds)this.aggregateAdapter.getFeatureObjectIds(s).forEach((e=>t.add(e)));const i=this.featureAdapter.getObjectId;e.items=e.items.filter((e=>t.has(i(e))))}_executeObjectIdsQuery(e){if(0===e.items.length||!e.query.objectIds||!e.query.objectIds.length)return;const t=new Set(e.query.objectIds),i=this.featureAdapter.getObjectId;e.items=e.items.filter((e=>t.has(i(e))))}_executeTimeQuery(e){if(0===e.items.length)return;const t=(0,w.y)(this.timeInfo,e.query.timeExtent,this.featureAdapter);(0,a.Wi)(t)||(e.items=e.items.filter(t))}_executeAttributesQuery(e){if(0===e.items.length)return;const t=(0,m.Jc)(e.query.where,this.fieldsIndex);if(t){if(!t.isStandardized)throw new TypeError("Where clause is not standardized");e.items=e.items.filter((e=>t.testFeature(e,this.featureAdapter)))}}async _runSpatialFilter(e,t,i){if(!t)return e;if((0,a.Wi)(this._frameTask))return e.filter((e=>t(e)));let s=0;const r=new Array,n=async a=>{for(;s<e.length;){const o=e[s++];t(o)&&(r.push(o),a.madeProgress()),a.done&&await this._reschedule((e=>n(e)),i)}};return this._reschedule((e=>n(e)),i).then((()=>r))}_filterLatest(e){const{trackIdField:t,startTimeField:i,endTimeField:s}=this.timeInfo,r=s||i,n=new Map,a=this.featureAdapter.getAttribute;for(const o of e.items){const e=a(o,t),i=a(o,r),s=n.get(e);(!s||i>a(s,r))&&n.set(e,o)}e.items=Array.from(n.values())}_canExecuteSinglePass(e,t){const{spatialRel:i}=t;return(0,_.hN)(e)&&("esriSpatialRelEnvelopeIntersects"===i||"esriGeometryPoint"===this.geometryType&&("esriSpatialRelIntersects"===i||"esriSpatialRelContains"===i||"esriSpatialRelWithin"===i))}async _project(e,t){if(!t||(0,f.fS)(this.spatialReference,t))return e;const i=this.featureAdapter,s=await(0,g.oj)(e.items.map((e=>(0,R.Op)(this.geometryType,this.hasZ,this.hasM,i.getGeometry(e)))),this.spatialReference,t);return e.items=s.map(((t,s)=>i.cloneWithGeometry(e.items[s],(0,y.GH)(t,this.hasZ,this.hasM)))),e}_getQueryBBoxes(e){if((0,_.hN)(e)){if((0,p.YX)(e))return[(0,c.al)(e.xmin,e.ymin,e.xmax,e.ymax)];if((0,p.oU)(e))return e.rings.map((e=>(0,c.al)(Math.min(e[0][0],e[2][0]),Math.min(e[0][1],e[2][1]),Math.max(e[0][0],e[2][0]),Math.max(e[0][1],e[2][1]))))}return[(0,h.$P)((0,c.Ue)(),e)]}_searchFeatures(e){for(const i of e)this.featureStore.forEachInBounds(i,(e=>G.add(e)));const t=Array.from(G.values());return G.clear(),t}async _checkStatisticsSupport(e,t){if(e.distance<0||null!=e.geometryPrecision||e.multipatchOption||e.pixelSize||e.relationParam||e.text||e.outStatistics||e.groupByFieldsForStatistics||e.having||e.orderByFields)throw new r.Z(v,"Unsupported query options",{query:e});return this._checkAttributesQuerySupport(e),Promise.all([this._checkStatisticsParamsSupport(t),(0,_.P0)(e,this.geometryType,this.spatialReference),(0,g._W)(this.spatialReference,e.outSR)]).then((()=>e))}async _checkStatisticsParamsSupport(e){let t=[];if(e.valueExpression){const{arcadeUtils:i}=await(0,I.LC)();t=i.extractFieldNames(e.valueExpression)}if(e.field&&t.push(e.field),e.normalizationField&&t.push(e.normalizationField),!t.length)throw new r.Z(v,"params should have at least a field or valueExpression",{params:e});(0,m.Of)(this.fieldsIndex,t,"params contains missing fields")}async _checkQuerySupport(e){if(e.distance<0||null!=e.geometryPrecision||e.multipatchOption||e.pixelSize||e.relationParam||e.text)throw new r.Z(v,"Unsupported query options",{query:e});return this._checkAttributesQuerySupport(e),this._checkStatisticsQuerySupport(e),Promise.all([(0,_.P0)(e,this.geometryType,this.spatialReference),(0,g._W)(this.spatialReference,e.outSR)]).then((()=>e))}_checkAttributesQuerySupport(e){const{outFields:t,orderByFields:i,returnDistinctValues:s,outStatistics:n}=e,a=n?n.map((e=>e.outStatisticFieldName&&e.outStatisticFieldName.toLowerCase())).filter(Boolean):[];if(i&&i.length>0){const e=" asc",t=" desc",s=i.map((i=>{const s=i.toLowerCase();return s.includes(e)?s.split(e)[0]:s.includes(t)?s.split(t)[0]:i})).filter((e=>!a.includes(e)));(0,m.Of)(this.fieldsIndex,s,"orderByFields contains missing fields")}if(t&&t.length>0)(0,m.Of)(this.fieldsIndex,t,"outFields contains missing fields");else if(s)throw new r.Z(v,"outFields should be specified for returnDistinctValues",{query:e});(0,m.hO)(this.fieldsIndex,e.where)}_checkStatisticsQuerySupport(e){const{outStatistics:t,groupByFieldsForStatistics:i,having:s}=e,n=i&&i.length,a=t&&t.length;if(s){if(!n||!a)throw new r.Z(v,"outStatistics and groupByFieldsForStatistics should be specified with having",{query:e});(0,m.z4)(this.fieldsIndex,s,t)}if(a){if(!function(e){return e.every((e=>"exceedslimit"!==e.statisticType))}(t))return;const s=t.map((e=>e.onStatisticField)).filter(Boolean);(0,m.Of)(this.fieldsIndex,s,"onStatisticFields contains missing fields"),n&&(0,m.Of)(this.fieldsIndex,i,"groupByFieldsForStatistics contains missing fields");for(const i of t){const{onStatisticField:t,statisticType:s}=i;if("percentile_disc"!==s&&"percentile_cont"!==s||!("statisticParameters"in i)){if("count"!==s&&t&&(0,m.G3)(t,this.fieldsIndex))throw new r.Z(v,"outStatistics contains non-numeric fields",{definition:i,query:e})}else{const{statisticParameters:t}=i;if(!t)throw new r.Z(v,"statisticParamters should be set for percentile type",{definition:i,query:e})}}}}async _getQueryEngineResultForStats(e,t,i){e=(0,n.d9)(e);try{e=await this._schedule((()=>(0,R.Up)(e,this.definitionExpression,this.spatialReference)),i),e=await this._reschedule((()=>this._checkStatisticsSupport(e,t)),i);const s=await this._reschedule((()=>this._executeSceneFilterQuery(e,i)),i),r=await this._reschedule((()=>this._executeGeometryQuery(e,s,i)),i);return await this._reschedule((()=>this._executeAggregateIdsQuery(r)),i),await this._reschedule((()=>this._executeObjectIdsQuery(r)),i),await this._reschedule((()=>this._executeTimeQuery(r)),i),await this._reschedule((()=>this._executeAttributesQuery(r)),i),r}catch(s){if(s!==R.vF)throw s;return new x.y([],e,this)}}}const E=(0,l.Ue)(),T=(0,l.Ue)(),G=new Set},60480:(e,t,i)=>{i.d(t,{g:()=>s});const s={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},77095:(e,t,i)=>{i.d(t,{hN:()=>F,P0:()=>R,cW:()=>w});var s=i(10064),r=i(34066),n=i(66504);var a=i(77981),o=i(92975);function u(e,t){return e?t?4:3:t?3:2}function l(e,t,i,s,r,n){const a=u(r,n),{coords:o,lengths:l}=s;if(!l)return!1;for(let u=0,h=0;u<l.length;u++,h+=a)if(!c(e,t,i,o[h],o[h+1]))return!1;return!0}function c(e,t,i,s,r){if(!e)return!1;const n=u(t,i),{coords:a,lengths:o}=e;let l=!1,c=0;for(const u of o)l=h(l,a,n,c,u,s,r),c+=u*n;return l}function h(e,t,i,s,r,n,a){let o=e,u=s;for(let l=s,c=s+r*i;l<c;l+=i){u=l+i,u===c&&(u=s);const e=t[l],r=t[l+1],h=t[u],p=t[u+1];(r<a&&p>=a||p<a&&r>=a)&&e+(a-r)/(p-r)*(h-e)<n&&(o=!o)}return o}var p=i(83406),d=i(80457),f=i(19995),y=i(31904);const m="feature-store:unsupported-query",g={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},S={esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},x={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},_={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1};function w(e,t,s,o,u){if((0,a.oU)(t)&&"esriGeometryPoint"===s&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){const e=(0,p.Uy)(new d.Z,t,!1,!1);return Promise.resolve((t=>function(e,t,i,s){return c(e,t,i,s.coords[0],s.coords[1])}(e,!1,!1,t)))}if((0,a.oU)(t)&&"esriGeometryMultipoint"===s){const i=(0,p.Uy)(new d.Z,t,!1,!1);if("esriSpatialRelContains"===e)return Promise.resolve((e=>l(i,!1,!1,e,o,u)))}if((0,a.YX)(t)&&"esriGeometryPoint"===s&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Promise.resolve((e=>(0,r.aV)(t,(0,y.Op)(s,o,u,e))));if((0,a.YX)(t)&&"esriGeometryMultipoint"===s&&"esriSpatialRelContains"===e)return Promise.resolve((e=>(0,r.lQ)(t,(0,y.Op)(s,o,u,e))));if((0,a.YX)(t)&&"esriSpatialRelIntersects"===e){const e=function(e){return"mesh"===e?n.h_:(0,n.IY)(e)}(s);return Promise.resolve((i=>e(t,(0,y.Op)(s,o,u,i))))}return Promise.all([i.e(9058),i.e(3645)]).then(i.bind(i,50309)).then((i=>{const r=i[g[e]].bind(null,t.spatialReference,t);return e=>r((0,y.Op)(s,o,u,e))}))}async function R(e,t,i){const{spatialRel:r,geometry:n}=e;if(n){if(!function(e){return!0===S[e]}(r))throw new s.Z(m,"Unsupported query spatial relationship",{query:e});if((0,o.JY)(n.spatialReference)&&(0,o.JY)(i)){if(!function(e){return!0===x[(0,a.Ji)(e)]}(n))throw new s.Z(m,"Unsupported query geometry type",{query:e});if(!function(e){return!0===_[e]}(t))throw new s.Z(m,"Unsupported layer geometry type",{query:e});if(e.outSR)return(0,f._W)(e.geometry&&e.geometry.spatialReference,e.outSR)}}}function F(e){if((0,a.YX)(e))return!0;if((0,a.oU)(e)){for(const t of e.rings){if(5!==t.length)return!1;if(t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1}return!0}return!1}},20311:(e,t,i)=>{function s(e,t){if(!e)return null;const i=t.featureAdapter,{startTimeField:s,endTimeField:r}=e;let n=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;if(s&&r)t.forEach((e=>{const t=i.getAttribute(e,s),o=i.getAttribute(e,r);null==t||isNaN(t)||(n=Math.min(n,t)),null==o||isNaN(o)||(a=Math.max(a,o))}));else{const e=s||r;t.forEach((t=>{const s=i.getAttribute(t,e);null==s||isNaN(s)||(n=Math.min(n,s),a=Math.max(a,s))}))}return{start:n,end:a}}function r(e,t,i){if(!t||!e)return null;const{startTimeField:s,endTimeField:r}=e;if(!s&&!r)return null;const{start:n,end:a}=t;return null===n&&null===a?null:void 0===n&&void 0===a?()=>!1:s&&r?function(e,t,i,s,r){return null!=s&&null!=r?n=>{const a=e.getAttribute(n,t),o=e.getAttribute(n,i);return(null==a||a<=r)&&(null==o||o>=s)}:null!=s?t=>{const r=e.getAttribute(t,i);return null==r||r>=s}:null!=r?i=>{const s=e.getAttribute(i,t);return null==s||s<=r}:void 0}(i,s,r,n,a):function(e,t,i,s){return null!=i&&null!=s&&i===s?s=>e.getAttribute(s,t)===i:null!=i&&null!=s?r=>{const n=e.getAttribute(r,t);return n>=i&&n<=s}:null!=i?s=>e.getAttribute(s,t)>=i:null!=s?i=>e.getAttribute(i,t)<=s:void 0}(i,s||r,n,a)}i.d(t,{R:()=>s,y:()=>r})}}]);
//# sourceMappingURL=4000.1e032065.chunk.js.map