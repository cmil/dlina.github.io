setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad */ var  aa = {id: 'aa', name:'publicum'},ab = {id: 'ab', name:'chor'},ac = {id: 'ac', name:'nimmermann'},ad = {id: 'ad', name:'chorführer'} ; nodes.push( aa,ab,ac,ad ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Akt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '20%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab','ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ae af ag ah ai aj ak al am */ var  ae = {id: 'ae', name:'jokaste'},af = {id: 'af', name:'erste_hebamme'},ag = {id: 'ag', name:'zweite_hebamme'},ah = {id: 'ah', name:'diagoras'},ai = {id: 'ai', name:'zelinde'},aj = {id: 'aj', name:'lajus'},ak = {id: 'ak', name:'tiresias'},al = {id: 'al', name:'melchior'},am = {id: 'am', name:'polybus'} ; nodes.push( ae,af,ag,ah,ai,aj,ak,al,am ); links.push( {source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: am },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: af , target: al },{source: af , target: am },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: am },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: ak , target: al },{source: ak , target: am },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Akt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '40%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'af','ag','ah','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ae ai aj ak al an ao ap aq ar as */ var  ae = nodes[0] ,ai = nodes[1] ,aj = nodes[2] ,ak = nodes[3] ,al = nodes[4] ,an = {id: 'an', name:'oedipus'},ao = {id: 'ao', name:'die_pythia'},ap = {id: 'ap', name:'kindeskind'},aq = {id: 'aq', name:'kind'},ar = {id: 'ar', name:'die_sphinx'},as = {id: 'as', name:'distichon'} ; nodes.push( an,ao,ap,aq,ar,as ); links.push( {source: aj , target: an },{source: aj , target: ao },{source: aj , target: al },{source: aj , target: ap },{source: aj , target: aq },{source: aj , target: ak },{source: aj , target: ar },{source: aj , target: as },{source: ae , target: aj },{source: ae , target: ai },{source: ae , target: an },{source: ae , target: ao },{source: ae , target: al },{source: ae , target: ap },{source: ae , target: aq },{source: ae , target: ak },{source: ae , target: ar },{source: ae , target: as },{source: ai , target: aj },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: al },{source: ai , target: ap },{source: ai , target: aq },{source: ai , target: ak },{source: ai , target: ar },{source: ai , target: as },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: an , target: as },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: ao , target: as },{source: al , target: an },{source: al , target: ao },{source: al , target: ap },{source: al , target: aq },{source: al , target: ar },{source: al , target: as },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: aq , target: ar },{source: aq , target: as },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: al },{source: ak , target: ap },{source: ak , target: aq },{source: ak , target: ar },{source: ak , target: as },{source: ar , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Akt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'aj','ao','al','ap','aq','ar','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ae ah ai ak am an at au */ var  ae = nodes[0] ,ah = {id: 'ah', name:'diagoras'},ai = nodes[1] ,ak = nodes[2] ,am = {id: 'am', name:'polybus'},an = nodes[3] ,at = {id: 'at', name:'balthasar'},au = {id: 'au', name:'geist_des_lajus'} ; nodes.push( ah,am,at,au ); links.push( {source: ah , target: ai },{source: ah , target: am },{source: ah , target: an },{source: ah , target: ak },{source: ah , target: at },{source: ah , target: au },{source: ai , target: am },{source: ai , target: an },{source: ai , target: ak },{source: ai , target: at },{source: ai , target: au },{source: am , target: an },{source: am , target: at },{source: am , target: au },{source: an , target: at },{source: an , target: au },{source: ak , target: am },{source: ak , target: an },{source: ak , target: at },{source: ak , target: au },{source: at , target: au },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: am },{source: ae , target: an },{source: ae , target: ak },{source: ae , target: at },{source: ae , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Akt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ah','ai','am','an','ak','at','ae','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ab ac ad av */ var  aa = {id: 'aa', name:'publicum'},ab = {id: 'ab', name:'chor'},ac = {id: 'ac', name:'nimmermann'},ad = {id: 'ad', name:'chorführer'},av = {id: 'av', name:'verstand'} ; nodes.push( aa,ab,ac,ad,av ); links.push( {source: ab , target: av },{source: ab , target: ac },{source: ab , target: ad },{source: aa , target: ab },{source: aa , target: av },{source: aa , target: ac },{source: aa , target: ad },{source: ac , target: av },{source: ac , target: ad },{source: ad , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Akt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 20000);