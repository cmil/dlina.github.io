setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'schriftgelehrter'},ab = {id: 'ab', name:'jesus'},ac = {id: 'ac', name:'einer_der_schächer'},ad = {id: 'ad', name:'der_andere_schächer'} ; nodes.push( aa,ab,ac,ad ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Die ernste Erscheinung'; var scene = document.getElementById('scene');scene.innerHTML = 'Die ernste Erscheinung.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab','ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ae = {id: 'ae', name:'ahasverus'},af = {id: 'af', name:'gelinde'},af = {id: 'af', name:'gelinde'},ag = {id: 'ag', name:'cardenio'},ah = {id: 'ah', name:'kapitän'},ai = {id: 'ai', name:'lichterzieher'},aj = {id: 'aj', name:'keiner_bube'},aj = {id: 'aj', name:'keiner_bube'},ak = {id: 'ak', name:'reicher_pilger'},al = {id: 'al', name:'matrose'},am = {id: 'am', name:'schiffsleute'},an = {id: 'an', name:'matrosen'},ao = {id: 'ao', name:'bromly'},ap = {id: 'ap', name:'lysander'},aq = {id: 'aq', name:'sydney'} ; nodes.push( ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq ); links.push( {source: ae , target: af },{source: ae , target: ag },{source: ae , target: af },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: aj },{source: ae , target: al },{source: ae , target: am },{source: ae , target: an },{source: ae , target: ao },{source: ae , target: ap },{source: ae , target: aq },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: af , target: aj },{source: af , target: al },{source: af , target: am },{source: af , target: an },{source: af , target: ao },{source: af , target: ap },{source: af , target: aq },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: aj },{source: ag , target: al },{source: ag , target: am },{source: ag , target: an },{source: ag , target: ao },{source: ag , target: ap },{source: ag , target: aq },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: af , target: aj },{source: af , target: al },{source: af , target: am },{source: af , target: an },{source: af , target: ao },{source: af , target: ap },{source: af , target: aq },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: aj },{source: ah , target: al },{source: ah , target: am },{source: ah , target: an },{source: ah , target: ao },{source: ah , target: ap },{source: ah , target: aq },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: aj },{source: ai , target: al },{source: ai , target: am },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: ap },{source: ai , target: aq },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: ap },{source: aj , target: aq },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: ap },{source: ak , target: aq },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: ap },{source: aj , target: aq },{source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: al , target: ap },{source: al , target: aq },{source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: am , target: aq },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: ao , target: ap },{source: ao , target: aq },{source: ap , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Die Pilger auf dem Meere'; var scene = document.getElementById('scene');scene.innerHTML = 'Die Pilger auf dem Meere.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ae','af','ag','ah','ai','aj','ak','al','am','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ao = nodes[2],ap = nodes[3],aq = nodes[4],ar = {id: 'ar', name:'olympie'},as = {id: 'as', name:'deutsche_soldaten'},at = {id: 'at', name:'die_englischen_matrosen'} ; nodes.push( ar,as,at ); links.push( {source: aq , target: ar },{source: aq , target: as },{source: aq , target: at },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: at },{source: ar , target: as },{source: ar , target: at },{source: as , target: at },{source: ao , target: aq },{source: ao , target: ap },{source: ao , target: ar },{source: ao , target: as },{source: ao , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Die Taufe auf dem Meere'; var scene = document.getElementById('scene');scene.innerHTML = 'Die Taufe auf dem Meere.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'aq','ap','ar','as','at','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  af = {id: 'af', name:'gelinde'},af = {id: 'af', name:'gelinde'},ag = {id: 'ag', name:'cardenio'},au = {id: 'au', name:'die_gestalt'},av = {id: 'av', name:'der_storch'},aw = {id: 'aw', name:'die_pilger'} ; nodes.push( af,ag,au,av,aw ); links.push( {source: ag , target: au },{source: ag , target: av },{source: ag , target: aw },{source: af , target: ag },{source: af , target: au },{source: af , target: av },{source: af , target: aw },{source: af , target: ag },{source: af , target: au },{source: af , target: av },{source: af , target: aw },{source: au , target: av },{source: au , target: aw },{source: av , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Das todte Sündenkind'; var scene = document.getElementById('scene');scene.innerHTML = 'Das todte Sündenkind.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ag','af','au','av','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ai = {id: 'ai', name:'lichterzieher'},ak = {id: 'ak', name:'reicher_pilger'},aq = {id: 'aq', name:'sydney'},ax = {id: 'ax', name:'kümmeltürke'},ay = {id: 'ay', name:'waisenhäuser'},az = {id: 'az', name:'der_alte'},ba = {id: 'ba', name:'dienemann'},bb = {id: 'bb', name:'jungfrau'} ; nodes.push( ai,ak,aq,ax,ay,az,ba,bb ); links.push( {source: ax , target: ay },{source: ax , target: az },{source: ax , target: ba },{source: ax , target: bb },{source: ay , target: az },{source: ay , target: ba },{source: ay , target: bb },{source: az , target: ba },{source: az , target: bb },{source: ba , target: bb },{source: aq , target: ax },{source: aq , target: ay },{source: aq , target: az },{source: aq , target: ba },{source: aq , target: bb },{source: ak , target: ax },{source: ak , target: ay },{source: ak , target: az },{source: ak , target: ba },{source: ak , target: bb },{source: ak , target: aq },{source: ai , target: ax },{source: ai , target: ay },{source: ai , target: az },{source: ai , target: ba },{source: ai , target: bb },{source: ai , target: aq },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Die Reisenden und die Jungfrau mit dem Storche'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Die Reisenden und die Jungfrau mit dem Storche.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ax','ay','az','ba','bb','ak','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ao = {id: 'ao', name:'bromly'},ap = {id: 'ap', name:'lysander'},aq = nodes[0],aq = nodes[0],ar = {id: 'ar', name:'olympie'},bc = {id: 'bc', name:'die_engländer'},bc = {id: 'bc', name:'die_engländer'},bd = {id: 'bd', name:'einer'},be = {id: 'be', name:'ein_jäger'},bf = {id: 'bf', name:'ein_reiter'},bg = {id: 'bg', name:'viele_engländer'},bh = {id: 'bh', name:'andrer'},bi = {id: 'bi', name:'schildwache'},bj = {id: 'bj', name:'soldaten'},bk = {id: 'bk', name:'arzt'},bl = {id: 'bl', name:'viren'} ; nodes.push( ao,ap,aq,ar,bc,bd,be,bf,bg,bh,bi,bj,bk,bl ); links.push( {source: bc , target: bd },{source: bc , target: bh },{source: bc , target: bg },{source: bc , target: be },{source: bc , target: bf },{source: bc , target: bi },{source: bc , target: bj },{source: bc , target: bk },{source: bc , target: bl },{source: bd , target: bh },{source: bd , target: bg },{source: bd , target: be },{source: bd , target: bf },{source: bd , target: bi },{source: bd , target: bj },{source: bd , target: bk },{source: bd , target: bl },{source: bh , target: bi },{source: bh , target: bj },{source: bh , target: bk },{source: bh , target: bl },{source: bg , target: bh },{source: bg , target: bi },{source: bg , target: bj },{source: bg , target: bk },{source: bg , target: bl },{source: ar , target: bc },{source: ar , target: bd },{source: ar , target: bh },{source: ar , target: bg },{source: ar , target: bc },{source: ar , target: be },{source: ar , target: bf },{source: ar , target: bi },{source: ar , target: bj },{source: ar , target: bk },{source: ar , target: bl },{source: bc , target: bd },{source: bc , target: bh },{source: bc , target: bg },{source: bc , target: be },{source: bc , target: bf },{source: bc , target: bi },{source: bc , target: bj },{source: bc , target: bk },{source: bc , target: bl },{source: be , target: bh },{source: be , target: bg },{source: be , target: bf },{source: be , target: bi },{source: be , target: bj },{source: be , target: bk },{source: be , target: bl },{source: bf , target: bh },{source: bf , target: bg },{source: bf , target: bi },{source: bf , target: bj },{source: bf , target: bk },{source: bf , target: bl },{source: bi , target: bj },{source: bi , target: bk },{source: bi , target: bl },{source: ap , target: bc },{source: ap , target: bd },{source: ap , target: bh },{source: ap , target: bg },{source: ap , target: ar },{source: ap , target: bc },{source: ap , target: be },{source: ap , target: bf },{source: ap , target: bi },{source: ap , target: bj },{source: ap , target: aq },{source: ap , target: aq },{source: ap , target: bk },{source: ap , target: bl },{source: bj , target: bk },{source: bj , target: bl },{source: aq , target: bc },{source: aq , target: bd },{source: aq , target: bh },{source: aq , target: bg },{source: aq , target: ar },{source: aq , target: bc },{source: aq , target: be },{source: aq , target: bf },{source: aq , target: bi },{source: aq , target: bj },{source: aq , target: bk },{source: aq , target: bl },{source: aq , target: bc },{source: aq , target: bd },{source: aq , target: bh },{source: aq , target: bg },{source: aq , target: ar },{source: aq , target: bc },{source: aq , target: be },{source: aq , target: bf },{source: aq , target: bi },{source: aq , target: bj },{source: aq , target: bk },{source: aq , target: bl },{source: bk , target: bl },{source: ao , target: bc },{source: ao , target: bd },{source: ao , target: bh },{source: ao , target: bg },{source: ao , target: ar },{source: ao , target: bc },{source: ao , target: be },{source: ao , target: bf },{source: ao , target: bi },{source: ao , target: ap },{source: ao , target: bj },{source: ao , target: aq },{source: ao , target: aq },{source: ao , target: bk },{source: ao , target: bl } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Die Belagerung'; var scene = document.getElementById('scene');scene.innerHTML = 'Die Belagerung.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'bc','bd','bh','bg','ar','be','bf','bi','ap','bj','aq','bk','ao','bl' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ae = {id: 'ae', name:'ahasverus'},af = {id: 'af', name:'gelinde'},ag = {id: 'ag', name:'cardenio'},ak = {id: 'ak', name:'reicher_pilger'},ax = {id: 'ax', name:'kümmeltürke'},ay = {id: 'ay', name:'waisenhäuser'},bm = {id: 'bm', name:'der_bube'},bn = {id: 'bn', name:'lord'},bo = {id: 'bo', name:'reiche_pilger'} ; nodes.push( ae,af,ag,ak,ax,ay,bm,bn,bo ); links.push( {source: bm , target: bn },{source: bm , target: bo },{source: ae , target: bm },{source: ae , target: bn },{source: ae , target: ax },{source: ae , target: ak },{source: ae , target: ay },{source: ae , target: bo },{source: ae , target: ag },{source: ae , target: af },{source: bn , target: bo },{source: ax , target: bm },{source: ax , target: bn },{source: ax , target: ay },{source: ax , target: bo },{source: ak , target: bm },{source: ak , target: bn },{source: ak , target: ax },{source: ak , target: ay },{source: ak , target: bo },{source: ay , target: bm },{source: ay , target: bn },{source: ay , target: bo },{source: ag , target: bm },{source: ag , target: bn },{source: ag , target: ax },{source: ag , target: ak },{source: ag , target: ay },{source: ag , target: bo },{source: af , target: bm },{source: af , target: bn },{source: af , target: ax },{source: af , target: ak },{source: af , target: ay },{source: af , target: bo },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Die Versuchungen in der Wüste'; var scene = document.getElementById('scene');scene.innerHTML = 'Die Versuchungen in der Wüste.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ax','ak','bo' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ae = nodes[0],af = nodes[1],ag = nodes[2],ai = {id: 'ai', name:'lichterzieher'},ap = {id: 'ap', name:'lysander'},ar = {id: 'ar', name:'olympie'},ay = nodes[3],bm = nodes[4],bm = nodes[4],bn = nodes[5],bp = {id: 'bp', name:'mahomedaner'},bq = {id: 'bq', name:'christen'},br = {id: 'br', name:'mohr'},bs = {id: 'bs', name:'der_einsiedler'},bt = {id: 'bt', name:'mönch'},bu = {id: 'bu', name:'schäfermädchen'},bv = {id: 'bv', name:'schäferknabe'} ; nodes.push( ai,ap,ar,bm,bp,bq,br,bs,bt,bu,bv ); links.push( {source: bp , target: bq },{source: bp , target: br },{source: bp , target: bs },{source: bp , target: bt },{source: bp , target: bu },{source: bp , target: bv },{source: bq , target: br },{source: bq , target: bs },{source: bq , target: bt },{source: bq , target: bu },{source: bq , target: bv },{source: br , target: bs },{source: br , target: bt },{source: br , target: bu },{source: br , target: bv },{source: bs , target: bt },{source: bs , target: bu },{source: bs , target: bv },{source: af , target: bp },{source: af , target: bq },{source: af , target: br },{source: af , target: bs },{source: af , target: ag },{source: af , target: bm },{source: af , target: bt },{source: af , target: bm },{source: af , target: ar },{source: af , target: ap },{source: af , target: ay },{source: af , target: bn },{source: af , target: ai },{source: af , target: bu },{source: af , target: bv },{source: ag , target: bp },{source: ag , target: bq },{source: ag , target: br },{source: ag , target: bs },{source: ag , target: bm },{source: ag , target: bt },{source: ag , target: bm },{source: ag , target: ar },{source: ag , target: ap },{source: ag , target: ay },{source: ag , target: bn },{source: ag , target: ai },{source: ag , target: bu },{source: ag , target: bv },{source: bm , target: bp },{source: bm , target: bq },{source: bm , target: br },{source: bm , target: bs },{source: bm , target: bt },{source: bm , target: bn },{source: bm , target: bu },{source: bm , target: bv },{source: ae , target: bp },{source: ae , target: bq },{source: ae , target: br },{source: ae , target: bs },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: bm },{source: ae , target: bt },{source: ae , target: bm },{source: ae , target: ar },{source: ae , target: ap },{source: ae , target: ay },{source: ae , target: bn },{source: ae , target: ai },{source: ae , target: bu },{source: ae , target: bv },{source: bt , target: bu },{source: bt , target: bv },{source: bm , target: bp },{source: bm , target: bq },{source: bm , target: br },{source: bm , target: bs },{source: bm , target: bt },{source: bm , target: bn },{source: bm , target: bu },{source: bm , target: bv },{source: ar , target: bp },{source: ar , target: bq },{source: ar , target: br },{source: ar , target: bs },{source: ar , target: bm },{source: ar , target: bt },{source: ar , target: bm },{source: ar , target: ay },{source: ar , target: bn },{source: ar , target: bu },{source: ar , target: bv },{source: ap , target: bp },{source: ap , target: bq },{source: ap , target: br },{source: ap , target: bs },{source: ap , target: bm },{source: ap , target: bt },{source: ap , target: bm },{source: ap , target: ar },{source: ap , target: ay },{source: ap , target: bn },{source: ap , target: bu },{source: ap , target: bv },{source: ay , target: bp },{source: ay , target: bq },{source: ay , target: br },{source: ay , target: bs },{source: ay , target: bm },{source: ay , target: bt },{source: ay , target: bm },{source: ay , target: bn },{source: ay , target: bu },{source: ay , target: bv },{source: bn , target: bp },{source: bn , target: bq },{source: bn , target: br },{source: bn , target: bs },{source: bn , target: bt },{source: bn , target: bu },{source: bn , target: bv },{source: ai , target: bp },{source: ai , target: bq },{source: ai , target: br },{source: ai , target: bs },{source: ai , target: bm },{source: ai , target: bt },{source: ai , target: bm },{source: ai , target: ar },{source: ai , target: ap },{source: ai , target: ay },{source: ai , target: bn },{source: ai , target: bu },{source: ai , target: bv },{source: bu , target: bv } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Die Aussicht nach Jerusalem'; var scene = document.getElementById('scene');scene.innerHTML = 'Die Aussicht nach Jerusalem.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'bp','bq','br','bs','af','ag','bm','ae','bt','ap','ay','bn','ai','bu','bv' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  aq = {id: 'aq', name:'sydney'},ar = nodes[0],bl = {id: 'bl', name:'viren'},bw = {id: 'bw', name:'bassa'},bx = {id: 'bx', name:'favorite'},by = {id: 'by', name:'fatme'},bz = {id: 'bz', name:'achmet'},ca = {id: 'ca', name:'roxane'} ; nodes.push( aq,bl,bw,bx,by,bz,ca ); links.push( {source: bw , target: bx },{source: bw , target: by },{source: bw , target: bz },{source: bw , target: ca },{source: bx , target: by },{source: bx , target: bz },{source: bx , target: ca },{source: by , target: bz },{source: by , target: ca },{source: bz , target: ca },{source: ar , target: bw },{source: ar , target: bx },{source: ar , target: by },{source: ar , target: bz },{source: ar , target: ca },{source: ar , target: bl },{source: aq , target: bw },{source: aq , target: bx },{source: aq , target: by },{source: aq , target: bz },{source: aq , target: ca },{source: aq , target: ar },{source: aq , target: bl },{source: bl , target: bw },{source: bl , target: bx },{source: bl , target: by },{source: bl , target: bz },{source: bl , target: ca } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Der Harem des Pascha von Jerusalem'; var scene = document.getElementById('scene');scene.innerHTML = 'Der Harem des Pascha von Jerusalem.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'bw','bx','by','bz','ca','bl' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  aq = nodes[0],ar = nodes[1],cb = {id: 'cb', name:'äbtissin'},cb = {id: 'cb', name:'äbtissin'},cc = {id: 'cc', name:'nonne'},cd = {id: 'cd', name:'andre_nonne'},ce = {id: 'ce', name:'dritte_nonne'},ce = {id: 'ce', name:'dritte_nonne'},cf = {id: 'cf', name:'pförtnerin'} ; nodes.push( cb,cc,cd,ce,cf ); links.push( {source: cb , target: cc },{source: cb , target: cd },{source: cb , target: ce },{source: cb , target: ce },{source: cb , target: cf },{source: ar , target: cb },{source: ar , target: cb },{source: ar , target: cc },{source: ar , target: cd },{source: ar , target: ce },{source: ar , target: ce },{source: ar , target: cf },{source: cb , target: cc },{source: cb , target: cd },{source: cb , target: ce },{source: cb , target: ce },{source: cb , target: cf },{source: cc , target: cd },{source: cc , target: ce },{source: cc , target: ce },{source: cc , target: cf },{source: cd , target: ce },{source: cd , target: ce },{source: cd , target: cf },{source: ce , target: cf },{source: ce , target: cf },{source: aq , target: cb },{source: aq , target: ar },{source: aq , target: cb },{source: aq , target: cc },{source: aq , target: cd },{source: aq , target: ce },{source: aq , target: ce },{source: aq , target: cf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Das Nonnenkloster in Jerusalem'; var scene = document.getElementById('scene');scene.innerHTML = 'Das Nonnenkloster in Jerusalem.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'cb','ar','cc','cd','ce','cf','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ae = {id: 'ae', name:'ahasverus'},af = {id: 'af', name:'gelinde'},ag = {id: 'ag', name:'cardenio'},cg = {id: 'cg', name:'erster_alter'},ch = {id: 'ch', name:'zweiter_alter'},ci = {id: 'ci', name:'dritter_alter'},cj = {id: 'cj', name:'rabbi'},ck = {id: 'ck', name:'jude'},cl = {id: 'cl', name:'juden'} ; nodes.push( ae,af,ag,cg,ch,ci,cj,ck,cl ); links.push( {source: cg , target: ch },{source: cg , target: ci },{source: cg , target: cj },{source: cg , target: ck },{source: cg , target: cl },{source: ch , target: ci },{source: ch , target: cj },{source: ch , target: ck },{source: ch , target: cl },{source: ci , target: cj },{source: ci , target: ck },{source: ci , target: cl },{source: cj , target: ck },{source: cj , target: cl },{source: ck , target: cl },{source: ae , target: cg },{source: ae , target: ch },{source: ae , target: ci },{source: ae , target: cj },{source: ae , target: ck },{source: ae , target: cl },{source: ae , target: ag },{source: ae , target: af },{source: ag , target: cg },{source: ag , target: ch },{source: ag , target: ci },{source: ag , target: cj },{source: ag , target: ck },{source: ag , target: cl },{source: af , target: cg },{source: af , target: ch },{source: af , target: ci },{source: af , target: cj },{source: af , target: ck },{source: af , target: cl },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Die drei Alten in Jerusalem'; var scene = document.getElementById('scene');scene.innerHTML = 'Die drei Alten in Jerusalem.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'cg','ch','ci','cj','ck','ae','cl' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  af = nodes[0],ag = nodes[1],ao = {id: 'ao', name:'bromly'},aq = {id: 'aq', name:'sydney'},bl = {id: 'bl', name:'viren'},cm = {id: 'cm', name:'der_reisende'},cm = {id: 'cm', name:'der_reisende'},cn = {id: 'cn', name:'schmid'},cn = {id: 'cn', name:'schmid'},co = {id: 'co', name:'stigma'} ; nodes.push( ao,aq,bl,cm,cn,co ); links.push( {source: aq , target: bl },{source: aq , target: cm },{source: aq , target: cm },{source: aq , target: cn },{source: aq , target: cn },{source: aq , target: co },{source: ao , target: aq },{source: ao , target: bl },{source: ao , target: cm },{source: ao , target: cm },{source: ao , target: cn },{source: ao , target: cn },{source: ao , target: co },{source: bl , target: cm },{source: bl , target: cm },{source: bl , target: cn },{source: bl , target: cn },{source: bl , target: co },{source: cm , target: cn },{source: cm , target: cn },{source: cm , target: co },{source: cm , target: cn },{source: cm , target: cn },{source: cm , target: co },{source: ag , target: aq },{source: ag , target: ao },{source: ag , target: bl },{source: ag , target: cm },{source: ag , target: cm },{source: ag , target: cn },{source: ag , target: cn },{source: ag , target: co },{source: af , target: aq },{source: af , target: ao },{source: af , target: bl },{source: af , target: cm },{source: af , target: cm },{source: af , target: ag },{source: af , target: cn },{source: af , target: cn },{source: af , target: co },{source: cn , target: co },{source: cn , target: co } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Die Nacht in der Herberge zu Jerusalem'; var scene = document.getElementById('scene');scene.innerHTML = 'Die Nacht in der Herberge zu Jerusalem.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'cn','co' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  af = nodes[0],ag = nodes[1],ao = nodes[2],aq = nodes[3],ar = {id: 'ar', name:'olympie'},bc = {id: 'bc', name:'die_engländer'},bl = nodes[4],bm = {id: 'bm', name:'der_bube'},cb = {id: 'cb', name:'äbtissin'},cm = nodes[5],cm = nodes[5],cp = {id: 'cp', name:'guardian'},cq = {id: 'cq', name:'hirtinnen'},cr = {id: 'cr', name:'hirten'},cs = {id: 'cs', name:'gegenchor'},cs = {id: 'cs', name:'gegenchor'},cs = {id: 'cs', name:'gegenchor'},cs = {id: 'cs', name:'gegenchor'},ct = {id: 'ct', name:'griechen'},cu = {id: 'cu', name:'armenianer'},cv = {id: 'cv', name:'stimme_aus_dem_heilgen_grabe'},cw = {id: 'cw', name:'der_dichter'} ; nodes.push( ar,bc,bm,cb,cp,cq,cr,cs,ct,cu,cv,cw ); links.push( {source: ao , target: bl },{source: ao , target: cm },{source: ao , target: cm },{source: ao , target: aq },{source: ao , target: cp },{source: ao , target: cb },{source: ao , target: ar },{source: ao , target: cq },{source: ao , target: cr },{source: ao , target: bm },{source: ao , target: cs },{source: ao , target: ct },{source: ao , target: cu },{source: ao , target: bc },{source: ao , target: cs },{source: ao , target: cs },{source: ao , target: cs },{source: ao , target: cv },{source: ao , target: cw },{source: bl , target: cm },{source: bl , target: cm },{source: bl , target: cp },{source: bl , target: cb },{source: bl , target: cq },{source: bl , target: cr },{source: bl , target: bm },{source: bl , target: cs },{source: bl , target: ct },{source: bl , target: cu },{source: bl , target: cs },{source: bl , target: cs },{source: bl , target: cs },{source: bl , target: cv },{source: bl , target: cw },{source: cm , target: cp },{source: cm , target: cq },{source: cm , target: cr },{source: cm , target: cs },{source: cm , target: ct },{source: cm , target: cu },{source: cm , target: cs },{source: cm , target: cs },{source: cm , target: cs },{source: cm , target: cv },{source: cm , target: cw },{source: cm , target: cp },{source: cm , target: cq },{source: cm , target: cr },{source: cm , target: cs },{source: cm , target: ct },{source: cm , target: cu },{source: cm , target: cs },{source: cm , target: cs },{source: cm , target: cs },{source: cm , target: cv },{source: cm , target: cw },{source: aq , target: bl },{source: aq , target: cm },{source: aq , target: cm },{source: aq , target: cp },{source: aq , target: cb },{source: aq , target: ar },{source: aq , target: cq },{source: aq , target: cr },{source: aq , target: bm },{source: aq , target: cs },{source: aq , target: ct },{source: aq , target: cu },{source: aq , target: bc },{source: aq , target: cs },{source: aq , target: cs },{source: aq , target: cs },{source: aq , target: cv },{source: aq , target: cw },{source: cp , target: cq },{source: cp , target: cr },{source: cp , target: cs },{source: cp , target: ct },{source: cp , target: cu },{source: cp , target: cs },{source: cp , target: cs },{source: cp , target: cs },{source: cp , target: cv },{source: cp , target: cw },{source: cb , target: cm },{source: cb , target: cm },{source: cb , target: cp },{source: cb , target: cq },{source: cb , target: cr },{source: cb , target: cs },{source: cb , target: ct },{source: cb , target: cu },{source: cb , target: cs },{source: cb , target: cs },{source: cb , target: cs },{source: cb , target: cv },{source: cb , target: cw },{source: ar , target: bl },{source: ar , target: cm },{source: ar , target: cm },{source: ar , target: cp },{source: ar , target: cb },{source: ar , target: cq },{source: ar , target: cr },{source: ar , target: bm },{source: ar , target: cs },{source: ar , target: ct },{source: ar , target: cu },{source: ar , target: bc },{source: ar , target: cs },{source: ar , target: cs },{source: ar , target: cs },{source: ar , target: cv },{source: ar , target: cw },{source: cq , target: cr },{source: cq , target: cs },{source: cq , target: ct },{source: cq , target: cu },{source: cq , target: cs },{source: cq , target: cs },{source: cq , target: cs },{source: cq , target: cv },{source: cq , target: cw },{source: cr , target: cs },{source: cr , target: ct },{source: cr , target: cu },{source: cr , target: cs },{source: cr , target: cs },{source: cr , target: cs },{source: cr , target: cv },{source: cr , target: cw },{source: bm , target: cm },{source: bm , target: cm },{source: bm , target: cp },{source: bm , target: cb },{source: bm , target: cq },{source: bm , target: cr },{source: bm , target: cs },{source: bm , target: ct },{source: bm , target: cu },{source: bm , target: cs },{source: bm , target: cs },{source: bm , target: cs },{source: bm , target: cv },{source: bm , target: cw },{source: ag , target: ao },{source: ag , target: bl },{source: ag , target: cm },{source: ag , target: cm },{source: ag , target: aq },{source: ag , target: cp },{source: ag , target: cb },{source: ag , target: ar },{source: ag , target: cq },{source: ag , target: cr },{source: ag , target: bm },{source: ag , target: cs },{source: ag , target: ct },{source: ag , target: cu },{source: ag , target: bc },{source: ag , target: cs },{source: ag , target: cs },{source: ag , target: cs },{source: ag , target: cv },{source: ag , target: cw },{source: af , target: ao },{source: af , target: bl },{source: af , target: cm },{source: af , target: cm },{source: af , target: aq },{source: af , target: cp },{source: af , target: cb },{source: af , target: ar },{source: af , target: cq },{source: af , target: cr },{source: af , target: bm },{source: af , target: ag },{source: af , target: cs },{source: af , target: ct },{source: af , target: cu },{source: af , target: bc },{source: af , target: cs },{source: af , target: cs },{source: af , target: cs },{source: af , target: cv },{source: af , target: cw },{source: cs , target: ct },{source: cs , target: cu },{source: cs , target: cv },{source: cs , target: cw },{source: ct , target: cu },{source: ct , target: cv },{source: ct , target: cw },{source: cu , target: cv },{source: cu , target: cw },{source: bc , target: bl },{source: bc , target: cm },{source: bc , target: cm },{source: bc , target: cp },{source: bc , target: cb },{source: bc , target: cq },{source: bc , target: cr },{source: bc , target: bm },{source: bc , target: cs },{source: bc , target: ct },{source: bc , target: cu },{source: bc , target: cs },{source: bc , target: cs },{source: bc , target: cs },{source: bc , target: cv },{source: bc , target: cw },{source: cs , target: ct },{source: cs , target: cu },{source: cs , target: cv },{source: cs , target: cw },{source: cs , target: ct },{source: cs , target: cu },{source: cs , target: cv },{source: cs , target: cw },{source: cs , target: ct },{source: cs , target: cu },{source: cs , target: cv },{source: cs , target: cw },{source: cv , target: cw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Der Ritterschlag am heiligen Grabe'; var scene = document.getElementById('scene');scene.innerHTML = 'Der Ritterschlag am heiligen Grabe.';
}, 60000);
