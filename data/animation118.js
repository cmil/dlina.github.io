setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'fleder'},ab = {id: 'ab', name:'bote'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '10%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ac ad ae */ var  ac = {id: 'ac', name:'flitt'},ad = {id: 'ad', name:'schlender'},ae = {id: 'ae', name:'knoll'} ; nodes.push( ac,ad,ae ); links.push( {source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '20%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ad af */ var  ad = nodes[0] ,af = {id: 'af', name:'graf_leonard'} ; nodes.push( af ); links.push( {source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '30%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ac ad af ag ah ai aj ak */ var  aa = {id: 'aa', name:'fleder'},ac = {id: 'ac', name:'flitt'},ad = nodes[0] ,af = nodes[1] ,ag = {id: 'ag', name:'flora'},ah = {id: 'ah', name:'victor'},ai = {id: 'ai', name:'friedmann'},aj = {id: 'aj', name:'gräfin_adele'},ak = {id: 'ak', name:'marie'} ; nodes.push( aa,ac,ag,ah,ai,aj,ak ); links.push( {source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: aj },{source: ag , target: ak },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: aj },{source: ah , target: ak },{source: ai , target: aj },{source: ai , target: aj },{source: ai , target: ak },{source: aj , target: ak },{source: aj , target: ak },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: aj },{source: aa , target: ac },{source: aa , target: ak },{source: aa , target: af },{source: aa , target: ad },{source: aa , target: af },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: aj },{source: af , target: ak },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: af },{source: ad , target: af },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: aj },{source: af , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '40%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ag','ai','aa','ak','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ac ae af ah aj */ var  ac = nodes[0] ,ae = {id: 'ae', name:'knoll'},af = nodes[1] ,ah = nodes[2] ,aj = nodes[3]  ; nodes.push( ae ); links.push( {source: af , target: aj },{source: af , target: ah },{source: ac , target: aj },{source: ac , target: af },{source: ac , target: ah },{source: ac , target: ae },{source: ah , target: aj },{source: ae , target: aj },{source: ae , target: af },{source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'af','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa ac ad ag ah ai aj */ var  aa = {id: 'aa', name:'fleder'},ac = nodes[0] ,ad = {id: 'ad', name:'schlender'},ag = {id: 'ag', name:'flora'},ah = nodes[1] ,ai = {id: 'ai', name:'friedmann'},aj = nodes[2]  ; nodes.push( aa,ad,ag,ai ); links.push( {source: ac , target: ad },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ag },{source: ac , target: ah },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ag },{source: ad , target: ah },{source: ai , target: aj },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ah },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ag },{source: aa , target: ah },{source: ah , target: ai },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ac','ad','ai','aj','aa','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ag ak */ var  ag = nodes[0] ,ak = {id: 'ak', name:'marie'} ; nodes.push( ak ); links.push( {source: ag , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '70%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aa ad af ag ah aj */ var  aa = {id: 'aa', name:'fleder'},ad = {id: 'ad', name:'schlender'},af = {id: 'af', name:'graf_leonard'},ag = nodes[0] ,ah = {id: 'ah', name:'victor'},aj = {id: 'aj', name:'gräfin_adele'} ; nodes.push( aa,ad,af,ah,aj ); links.push( {source: ag , target: aj },{source: ag , target: ah },{source: ad , target: aj },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: af },{source: ah , target: aj },{source: aa , target: aj },{source: aa , target: ag },{source: aa , target: ad },{source: aa , target: ah },{source: aa , target: af },{source: af , target: aj },{source: af , target: ag },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'aj','ag','ah','aa','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ac ad ae */ var  ac = {id: 'ac', name:'flitt'},ad = nodes[0] ,ae = {id: 'ae', name:'knoll'} ; nodes.push( ac,ae ); links.push( {source: ac , target: ae },{source: ac , target: ad },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '90%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ac','ae','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* aa af ag ah ai aj */ var  aa = {id: 'aa', name:'fleder'},af = {id: 'af', name:'graf_leonard'},ag = {id: 'ag', name:'flora'},ah = {id: 'ah', name:'victor'},ai = {id: 'ai', name:'friedmann'},aj = {id: 'aj', name:'gräfin_adele'} ; nodes.push( aa,af,ag,ah,ai,aj ); links.push( {source: ag , target: ah },{source: ag , target: aj },{source: ag , target: ai },{source: ah , target: aj },{source: ah , target: ai },{source: af , target: ag },{source: af , target: ah },{source: af , target: aj },{source: af , target: ai },{source: ai , target: aj },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: af },{source: aa , target: aj },{source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 45000);
