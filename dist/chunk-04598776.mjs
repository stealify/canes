var canString,strUndHash=/_|-/,strColons=/\=\=/,strWords=/([A-Z]+)([A-Z][a-z])/g,strLowUp=/([a-z\d])([A-Z])/g,strDash=/([a-z\d])([A-Z])/g,strQuote=/"/g,strSingleQuote=/'/g,strHyphenMatch=/-+(.)?/g,strCamelMatch=/[a-z][A-Z]/g,convertBadValues=function(e){return""+(null==e||isNaN(e)&&""+e=="NaN"?"":e)},string={esc:function(e){return convertBadValues(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(strQuote,"&#34;").replace(strSingleQuote,"&#39;")},capitalize:function(e){return e.charAt(0).toUpperCase()+e.slice(1)},camelize:function(e){return convertBadValues(e).replace(strHyphenMatch,function(e,r){return r?r.toUpperCase():""})},hyphenate:function(e){return convertBadValues(e).replace(strCamelMatch,function(e){return e.charAt(0)+"-"+e.charAt(1).toLowerCase()})},underscore:function(e){return e.replace(strColons,"/").replace(strWords,"$1_$2").replace(strLowUp,"$1_$2").replace(strDash,"_").toLowerCase()},undHash:strUndHash};export{string as a,string as b};
//# sourceMappingURL=chunk-04598776.js.map
