setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'michelangelo'},ab = {id: 'ab', name:'torrigiano'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '25%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac ad ae af */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'cellini'},ad = {id: 'ad', name:'erster_student'},ae = {id: 'ae', name:'zweiter_student'},af = {id: 'af', name:'die_menge'} ; nodes.push( ac,ad,ae,af ); links.push( {source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ab },{source: aa , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ad , target: ae },{source: ad , target: af },{source: ae , target: af },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac','ad','ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ag ah ai */ var  aa = nodes[0] ,ab = nodes[1] ,ag = {id: 'ag', name:'ein_herold'},ah = {id: 'ah', name:'der_papst'},ai = {id: 'ai', name:'kardinal'} ; nodes.push( ag,ah,ai ); links.push( {source: ag , target: ah },{source: ag , target: ai },{source: ag , target: ai },{source: aa , target: ag },{source: aa , target: ab },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: ai },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: ai },{source: ah , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ag','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab ac ah aj */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'cellini'},ah = nodes[2] ,aj = {id: 'aj', name:'stimmen'} ; nodes.push( ac,aj ); links.push( {source: aa , target: aj },{source: aa , target: aj },{source: aa , target: ac },{source: aa , target: ah },{source: aa , target: ab },{source: ac , target: aj },{source: ac , target: aj },{source: ac , target: ah },{source: ah , target: aj },{source: ah , target: aj },{source: ab , target: aj },{source: ab , target: aj },{source: ab , target: ac },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 15000);
