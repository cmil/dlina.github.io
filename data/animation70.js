setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae */ var  aa = {id: 'aa', name:'tong'},ab = {id: 'ab', name:'haitang'},ac = {id: 'ac', name:'fawu_tschang'},ad = {id: 'ad', name:'pao'},ae = {id: 'ae', name:'ma'} ; nodes.push( aa,ab,ac,ad,ae ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Akt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ab ae af ag ah ai */ var  ab = nodes[0] ,ae = nodes[1] ,af = {id: 'af', name:'tschad'},ag = {id: 'ag', name:'fawu_ma'},ah = {id: 'ah', name:'tschang_ling'},ai = {id: 'ai', name:'polizist'} ; nodes.push( af,ag,ah,ai ); links.push( {source: ag , target: ah },{source: ag , target: ai },{source: ag , target: ai },{source: af , target: ag },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: ai },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: ai },{source: ae , target: ag },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: af },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: ai },{source: af , target: ag },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: ai },{source: ab , target: ag },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: ai },{source: ah , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Akt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ae','ah','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab af ag aj ak al am an */ var  ab = nodes[0] ,af = nodes[1] ,ag = nodes[2] ,aj = {id: 'aj', name:'tschu'},ak = {id: 'ak', name:'hebamme'},al = {id: 'al', name:'zwei_kulis'},am = {id: 'am', name:'diener'},an = {id: 'an', name:'kurier'} ; nodes.push( aj,ak,al,am,an ); links.push( {source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: af , target: aj },{source: af , target: ag },{source: af , target: ak },{source: af , target: al },{source: af , target: am },{source: af , target: an },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: am },{source: ag , target: an },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: al , target: am },{source: al , target: an },{source: ab , target: aj },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: am },{source: ab , target: an },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Akt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'aj','af','ag','ak','al','am','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ab ao ap aq ar as */ var  ab = nodes[0] ,ao = {id: 'ao', name:'erster_soldat'},ap = {id: 'ap', name:'zweiter_soldat'},aq = {id: 'aq', name:'dritter_soldat'},ar = {id: 'ar', name:'vierter_soldat'},as = {id: 'as', name:'wirt'} ; nodes.push( ao,ap,aq,ar,as ); links.push( {source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: ao , target: as },{source: ab , target: ao },{source: ab , target: ap },{source: ab , target: aq },{source: ab , target: ar },{source: ab , target: as },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: aq , target: ar },{source: aq , target: as },{source: ar , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Akt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ao','ap','aq','ar','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ab af ag aj at au av */ var  ab = nodes[0] ,af = {id: 'af', name:'tschad'},ag = {id: 'ag', name:'fawu_ma'},aj = {id: 'aj', name:'tschu'},at = {id: 'at', name:'kaiser'},au = {id: 'au', name:'dichter'},av = {id: 'av', name:'zeremonienmeister'} ; nodes.push( af,ag,aj,at,au,av ); links.push( {source: at , target: au },{source: at , target: av },{source: au , target: av },{source: af , target: at },{source: af , target: au },{source: af , target: av },{source: af , target: ag },{source: af , target: aj },{source: ag , target: at },{source: ag , target: au },{source: ag , target: av },{source: ag , target: aj },{source: aj , target: at },{source: aj , target: au },{source: aj , target: av },{source: ab , target: at },{source: ab , target: au },{source: ab , target: av },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Akt';
}, 20000);
