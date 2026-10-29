(function(g){
function mdy(s){var p=s.split('-');return p[1]+'/'+p[2]+'/'+p[0];}
function buildUrl(o){
  var q=(o.q||'').trim(), tbs=[];
  if(o.period==='custom'){
    var c=['cdr:1'];
    if(o.from){c.push('cd_min:'+mdy(o.from));q+=' after:'+o.from;}
    if(o.to){c.push('cd_max:'+mdy(o.to));q+=' before:'+o.to;}
    tbs.push(c.join(','));
  } else if(o.period && o.period!=='any'){tbs.push('qdr:'+o.period);}
  if(o.sort) tbs.push('sbd:1');
  var u='https://www.google.com/search?q='+encodeURIComponent(q.trim());
  if(o.tab) u+='&tbm='+o.tab;
  if(tbs.length) u+='&tbs='+encodeURIComponent(tbs.join(','));
  return u;
}
g.buildUrl=buildUrl; if(typeof module!=='undefined')module.exports=buildUrl;
})(typeof window!=='undefined'?window:globalThis);
