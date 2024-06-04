var t=require("path"),e=require("fs"),r=require("geobuf"),i=require("@turf/boolean-point-in-polygon"),o=require("@turf/helpers"),n=require("pbf");function f(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}function d(t){if(t&&t.__esModule)return t;var e=Object.create(null);return t&&Object.keys(t).forEach(function(r){if("default"!==r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}}),e.default=t,e}var a=/*#__PURE__*/d(t),c=/*#__PURE__*/d(e),l=/*#__PURE__*/f(i),u=/*#__PURE__*/f(n),g=[{tzid:"Etc/GMT-12",left:172.5,right:180},{tzid:"Etc/GMT-11",left:157.5,right:172.5},{tzid:"Etc/GMT-10",left:142.5,right:157.5},{tzid:"Etc/GMT-9",left:127.5,right:142.5},{tzid:"Etc/GMT-8",left:112.5,right:127.5},{tzid:"Etc/GMT-7",left:97.5,right:112.5},{tzid:"Etc/GMT-6",left:82.5,right:97.5},{tzid:"Etc/GMT-5",left:67.5,right:82.5},{tzid:"Etc/GMT-4",left:52.5,right:67.5},{tzid:"Etc/GMT-3",left:37.5,right:52.5},{tzid:"Etc/GMT-2",left:22.5,right:37.5},{tzid:"Etc/GMT-1",left:7.5,right:22.5},{tzid:"Etc/GMT",left:-7.5,right:7.5},{tzid:"Etc/GMT+1",left:-22.5,right:-7.5},{tzid:"Etc/GMT+2",left:-37.5,right:-22.5},{tzid:"Etc/GMT+3",left:-52.5,right:-37.5},{tzid:"Etc/GMT+4",left:-67.5,right:-52.5},{tzid:"Etc/GMT+5",left:-82.5,right:-67.5},{tzid:"Etc/GMT+6",left:-97.5,right:-82.5},{tzid:"Etc/GMT+7",left:-112.5,right:-97.5},{tzid:"Etc/GMT+8",left:-127.5,right:-112.5},{tzid:"Etc/GMT+9",left:-142.5,right:-127.5},{tzid:"Etc/GMT+10",left:-157.5,right:-142.5},{tzid:"Etc/GMT+11",left:-172.5,right:-157.5},{tzid:"Etc/GMT+12",left:-180,right:-172.5}];function h(t){if(-180===t||180===t)return["Etc/GMT+12","Etc/GMT-12"];for(var e=[],r=0;r<g.length;r++){var i=g[r];if(i.left<=t&&i.right>=t)e.push(i.tzid);else if(i.right<t)break}return e}function p(t,e,i,o){void 0===o&&(o=-1);var n=o;if(n<0&&(n=c.openSync(t,"r"))<0)throw new Error("Failed to open geo.dat file");var f=Buffer.alloc(i),d=c.readSync(n,f,0,i,e);if(o<0&&c.closeSync(n),d<i)throw new Error("tried to read "+i+" bytes from geo.dat but only got "+d+" bytes");var a=new u.default(f);return r.decode(a)}var s,E=process.env.GEO_TZ_DATA_PATH||a.join(__dirname,"..","data"),m=require("../data/timezones-now.geojson.index.json"),z=a.join(E,"timezones-now.geojson.geo.dat");function T(t){s=function(t,e,r){var i;if(i=r&&r.store&&"function"==typeof r.store.get&&"function"==typeof r.store.set?r.store:new Map,r&&r.preload){var o=c.openSync(e,"r");if(o<0)throw new Error("Failed to open geo.dat file");!function(t,e,r,i){!function t(o,n){if(o.pos>=0&&o.len){var f=p(e,o.pos,o.len,r);i.set(n,f)}else"object"==typeof o&&Object.getOwnPropertyNames(o).forEach(function(e){t(o[e],n+e)})}(t.lookup,"")}(t,e,o,i),c.closeSync(o)}return i}(m,z,t)}T(),exports.find=function(t,e){return function(t,e,r,i,n){var f=n;if(isNaN(i)||i>90||i<-90)throw new Error("Invalid latitude: "+i);if(isNaN(n)||n>180||n<-180)throw new Error("Invalid longitude: "+n);if(90===i)return g.map(function(t){return t.tzid});i>=89.9999?i=89.9999:i<=-89.9999&&(i=-89.9999),n>=179.9999?n=179.9999:n<=-179.9999&&(n=-179.9999);for(var d=o.point([n,i]),a={top:89.9999,bottom:-89.9999,left:-179.9999,right:179.9999,midLat:0,midLon:0},c="",u=t.lookup;;){var s=void 0;if(i>=a.midLat&&n>=a.midLon?(s="a",a.bottom=a.midLat,a.left=a.midLon):i>=a.midLat&&n<a.midLon?(s="b",a.bottom=a.midLat,a.right=a.midLon):i<a.midLat&&n<a.midLon?(s="c",a.top=a.midLat,a.right=a.midLon):(s="d",a.top=a.midLat,a.left=a.midLon),c+=s,!(u=u[s]))return h(f);if(u.pos>=0&&u.len){var E=e.get(c);E||(E=p(r,u.pos,u.len),e.set(c,E));for(var m=[],z=0;z<E.features.length;z++)l.default(d,E.features[z])&&m.push(E.features[z].properties.tzid);return m.length>0?m:h(f)}if(u.length>0)return u.map(function(e){return t.timezones[e]});if("object"!=typeof u)throw new Error("Unexpected data type");a.midLat=(a.top+a.bottom)/2,a.midLon=(a.left+a.right)/2}}(m,s,z,t,e)},exports.preCache=function(){T({preload:!0})},exports.setCache=T;
//# sourceMappingURL=find-now.js.map
