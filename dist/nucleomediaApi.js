function RecuperaCodigo(){for(var o=document.location.toString().toLowerCase(),n=o.split("/"),t=0;t<n.length;t++)n[t].indexOf("codeitem")>-1&&(codigo=n[t].substr(n[t].indexOf("codeitem")+8))}function NormalizaJson(o){for(var n in o)o[n]instanceof Object&&(o[n].__cdata||""==o[n].__cdata?o[n]=o[n].toString():NormalizaJson(o[n]))}function CarregaAleatoriamente(o){var n=randomIndex=Math.floor(Math.random()*o.length);return o[n]}function CarregaSequencialmente(o,n){var t=window.localStorage.getItem(n+codigo);t||(t=0),t>=o.length&&(t=0);var e=o[t];return t++,window.localStorage.setItem(n+codigo,t),e}function relativeLinkToAbsolute(o){var n="";if(console.log(o),window.location.toString().indexOf("http://")<=-1){n=window.location.toString();var t="/arquivos/",e=(t.length,n.indexOf(t));n=n.substring(0,e),console.log(n)}if(o&&""!=o.toString()){var r=n+o;return console.log(r),r}}function RandomNumber(){return Math.floor(99999*Math.random())}var nucleomediaApi=angular.module("nucleomediaApi",[]),codigo="";RecuperaCodigo(),nucleomediaApi.factory("nucleomediaRequest",["$http",function(o){return{get:function(n,t){o.get(n,{transformResponse:function(o){var n=new X2JS,t=n.xml_str2json(o);return t}}).success(function(o){t(o)})}}}]);