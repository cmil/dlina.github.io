setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af ag ah */ var  aa = {id: 'aa', name:'isaak'},ab = {id: 'ab', name:'rahel'},ac = {id: 'ac', name:'esther'},ad = {id: 'ad', name:'der_könig'},ae = {id: 'ae', name:'manrique'},af = {id: 'af', name:'königin'},ag = {id: 'ag', name:'garceran'},ah = {id: 'ah', name:'eine_weiberstimme'} ; nodes.push( aa,ab,ac,ad,ae,af,ag,ah ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ah },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: af , target: ag },{source: af , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Aufzug';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '20%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac ad ae af ag ai aj */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = nodes[3] ,ae = nodes[4] ,af = nodes[5] ,ag = nodes[6] ,ai = {id: 'ai', name:'knappe'},aj = {id: 'aj', name:'diener'} ; nodes.push( ai,aj ); links.push( {source: ag , target: ai },{source: ag , target: aj },{source: ai , target: aj },{source: ad , target: ag },{source: ad , target: ai },{source: ad , target: af },{source: ad , target: ae },{source: ad , target: aj },{source: aa , target: ag },{source: aa , target: ai },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ae },{source: aa , target: aj },{source: ab , target: ag },{source: ab , target: ai },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: af },{source: ab , target: ae },{source: ab , target: aj },{source: ac , target: ag },{source: ac , target: ai },{source: ac , target: ad },{source: ac , target: af },{source: ac , target: ae },{source: ac , target: aj },{source: af , target: ag },{source: af , target: ai },{source: af , target: aj },{source: ae , target: ag },{source: ae , target: ai },{source: ae , target: af },{source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Aufzug';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '40%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ai','af','ae','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ac ad ag ak al am */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = nodes[3] ,ag = nodes[4] ,ak = {id: 'ak', name:'bittsteller'},al = {id: 'al', name:'zweiter_bittsteller'},am = {id: 'am', name:'dritter_bittsteller'} ; nodes.push( ak,al,am ); links.push( {source: aa , target: ak },{source: aa , target: al },{source: aa , target: am },{source: aa , target: ag },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: ak , target: al },{source: ak , target: am },{source: al , target: am },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: am },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: am },{source: ad , target: ag },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: am },{source: ab , target: ag },{source: ab , target: ad },{source: ab , target: ac },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: am },{source: ac , target: ag },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Aufzug';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'aa','ak','al','am','ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ad ae af ag ai aj an */ var  ad = nodes[0] ,ae = {id: 'ae', name:'manrique'},af = {id: 'af', name:'königin'},ag = nodes[1] ,ai = {id: 'ai', name:'knappe'},aj = {id: 'aj', name:'diener'},an = {id: 'an', name:'kammerfrau'} ; nodes.push( ae,af,ai,aj,an ); links.push( {source: ae , target: af },{source: ae , target: aj },{source: ae , target: ag },{source: ae , target: an },{source: ae , target: ai },{source: af , target: aj },{source: af , target: ag },{source: af , target: an },{source: af , target: ai },{source: aj , target: an },{source: ag , target: aj },{source: ag , target: an },{source: ag , target: ai },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: aj },{source: ad , target: ag },{source: ad , target: an },{source: ad , target: ai },{source: ai , target: aj },{source: ai , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Aufzug';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'aj','an','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ac ad ae af ag ao */ var  aa = {id: 'aa', name:'isaak'},ac = {id: 'ac', name:'esther'},ad = nodes[0] ,ae = nodes[1] ,af = nodes[2] ,ag = nodes[3] ,ao = {id: 'ao', name:'von_aussen'} ; nodes.push( aa,ac,ao ); links.push( {source: aa , target: ao },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: ac , target: ao },{source: ac , target: ad },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ad , target: ao },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ao },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ae , target: ao },{source: ae , target: af },{source: ae , target: ag },{source: af , target: ao },{source: af , target: ag },{source: ag , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Aufzug';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 20000);