setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae */ var  aa = {id: 'aa', name:'die_erste_norn'},ab = {id: 'ab', name:'die_zweite_norn'},ac = {id: 'ac', name:'die_dritte_norn'},ad = {id: 'ad', name:'brünnhilde'},ae = {id: 'ae', name:'siegfrieds_stimme'} ; nodes.push( aa,ab,ac,ad,ae ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Vorspiel'; var scene = document.getElementById('scene');scene.innerHTML = 'Vorspiel';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '8.333333333333333333%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab','ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ae af ag ah */ var  ae = nodes[0] ,af = {id: 'af', name:'gunther'},ag = {id: 'ag', name:'hagens_stimme'},ah = {id: 'ah', name:'gutrune'} ; nodes.push( af,ag,ah ); links.push( {source: af , target: ag },{source: af , target: ah },{source: ag , target: ah },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '16.666666666666666667%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ae af ag ah */ var  ae = nodes[0] ,af = nodes[1] ,ag = nodes[2] ,ah = nodes[3]  ; /* nodes.push(); */ links.push( {source: ag , target: ah },{source: ae , target: ag },{source: ae , target: af },{source: ae , target: ah },{source: af , target: ag },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '25%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ag','af','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ad ae ai */ var  ad = {id: 'ad', name:'brünnhilde'},ae = nodes[0] ,ai = {id: 'ai', name:'waltrautes_stimme'} ; nodes.push( ad,ai ); links.push( {source: ad , target: ai },{source: ad , target: ai },{source: ad , target: ae },{source: ae , target: ai },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.333333333333333333%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ad','ai','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ag aj */ var  ag = {id: 'ag', name:'hagens_stimme'},aj = {id: 'aj', name:'alberich'} ; nodes.push( ag,aj ); links.push( {source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '41.666666666666666667%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ae ag ah */ var  ae = {id: 'ae', name:'siegfrieds_stimme'},ag = nodes[0] ,ah = {id: 'ah', name:'gutrune'} ; nodes.push( ae,ah ); links.push( {source: ae , target: ag },{source: ae , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ae','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ag ak al am an ao ap aq */ var  ag = nodes[0] ,ak = {id: 'ak', name:'ein_manne'},al = {id: 'al', name:'neun_weitere'},am = {id: 'am', name:'acht_mannen'},an = {id: 'an', name:'vier_weitere'},ao = {id: 'ao', name:'zwei_mannen'},ap = {id: 'ap', name:'weitere_zehn_mannen'},aq = {id: 'aq', name:'andere'} ; nodes.push( ak,al,am,an,ao,ap,aq ); links.push( {source: ag , target: aq },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: am },{source: ag , target: an },{source: ag , target: aq },{source: ag , target: ao },{source: ag , target: ap },{source: ag , target: aq },{source: ag , target: aq },{source: ak , target: aq },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: aq },{source: ak , target: ao },{source: ak , target: ap },{source: ak , target: aq },{source: ak , target: aq },{source: al , target: aq },{source: al , target: am },{source: al , target: an },{source: al , target: aq },{source: al , target: ao },{source: al , target: ap },{source: al , target: aq },{source: al , target: aq },{source: am , target: aq },{source: am , target: an },{source: am , target: aq },{source: am , target: ao },{source: am , target: ap },{source: am , target: aq },{source: am , target: aq },{source: an , target: aq },{source: an , target: aq },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: an , target: aq },{source: ao , target: aq },{source: ao , target: aq },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: aq },{source: ap , target: aq },{source: ap , target: aq },{source: ap , target: aq },{source: ap , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '58.333333333333333333%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ak','al','am','an','ao','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ad ae af ag ah aq ar */ var  ad = {id: 'ad', name:'brünnhilde'},ae = {id: 'ae', name:'siegfrieds_stimme'},af = {id: 'af', name:'gunther'},ag = nodes[0] ,ah = {id: 'ah', name:'gutrune'},aq = nodes[1] ,ar = {id: 'ar', name:'frauen'} ; nodes.push( ad,ae,af,ah,ar ); links.push( {source: aq , target: ar },{source: af , target: aq },{source: af , target: aq },{source: af , target: ag },{source: af , target: ah },{source: af , target: aq },{source: af , target: ar },{source: aq , target: ar },{source: ae , target: aq },{source: ae , target: af },{source: ae , target: aq },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: aq },{source: ae , target: ar },{source: ad , target: aq },{source: ad , target: af },{source: ad , target: aq },{source: ad , target: ae },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: aq },{source: ad , target: ar },{source: ag , target: aq },{source: ag , target: aq },{source: ag , target: ah },{source: ag , target: aq },{source: ag , target: ar },{source: ah , target: aq },{source: ah , target: aq },{source: ah , target: aq },{source: ah , target: ar },{source: aq , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.666666666666666667%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'aq','ae','ah','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ad af ag */ var  ad = nodes[0] ,af = nodes[1] ,ag = nodes[2]  ; /* nodes.push(); */ links.push( {source: ad , target: ag },{source: ad , target: af },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ad','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ae ag as at au */ var  ae = {id: 'ae', name:'siegfrieds_stimme'},ag = nodes[0] ,as = {id: 'as', name:'woglinde'},at = {id: 'at', name:'wellgunde'},au = {id: 'au', name:'flosshilde'} ; nodes.push( ae,as,at,au ); links.push( {source: at , target: au },{source: as , target: at },{source: as , target: au },{source: ae , target: at },{source: ae , target: au },{source: ae , target: as },{source: ae , target: ag },{source: ag , target: at },{source: ag , target: au },{source: ag , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vorspiel und Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '83.333333333333333333%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'at','au','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ae af ag ak ao aq av aw */ var  ae = nodes[0] ,af = {id: 'af', name:'gunther'},ag = nodes[1] ,ak = {id: 'ak', name:'ein_manne'},ao = {id: 'ao', name:'zwei_mannen'},aq = {id: 'aq', name:'andere'},av = {id: 'av', name:'vier_mannen'},aw = {id: 'aw', name:'zwei_andere'} ; nodes.push( af,ak,ao,aq,av,aw ); links.push( {source: aq , target: av },{source: aq , target: aw },{source: ae , target: aq },{source: ae , target: ag },{source: ae , target: af },{source: ae , target: ak },{source: ae , target: av },{source: ae , target: ao },{source: ae , target: aw },{source: ag , target: aq },{source: ag , target: ak },{source: ag , target: av },{source: ag , target: ao },{source: ag , target: aw },{source: af , target: aq },{source: af , target: ag },{source: af , target: ak },{source: af , target: av },{source: af , target: ao },{source: af , target: aw },{source: ak , target: aq },{source: ak , target: av },{source: ak , target: ao },{source: ak , target: aw },{source: av , target: aw },{source: ao , target: aq },{source: ao , target: av },{source: ao , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '91.666666666666666667%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'aq','ae','ak','av','ao','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ad af ag ah */ var  ad = {id: 'ad', name:'brünnhilde'},af = nodes[0] ,ag = nodes[1] ,ah = {id: 'ah', name:'gutrune'} ; nodes.push( ad,ah ); links.push( {source: ag , target: ah },{source: ag , target: ah },{source: af , target: ah },{source: af , target: ag },{source: af , target: ag },{source: ad , target: ah },{source: ad , target: ag },{source: ad , target: ag },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 55000);
