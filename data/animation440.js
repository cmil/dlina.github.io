setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af ag ah */ var  aa = {id: 'aa', name:'magier'},ab = {id: 'ab', name:'ligares'},ac = {id: 'ac', name:'zeno'},ad = {id: 'ad', name:'bote'},ae = {id: 'ae', name:'cassandra'},af = {id: 'af', name:'timandras'},ag = {id: 'ag', name:'ladikä'},ah = {id: 'ah', name:'mandane'} ; nodes.push( aa,ab,ac,ad,ae,af,ag,ah ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ah },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: af , target: ag },{source: af , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.333333333333333333%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac af ag ah ai */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,af = nodes[3] ,ag = nodes[4] ,ah = nodes[5] ,ai = {id: 'ai', name:'knabe'} ; nodes.push( ai ); links.push( {source: ab , target: ac },{source: ab , target: af },{source: ab , target: ah },{source: ab , target: ag },{source: ab , target: ai },{source: ac , target: af },{source: ac , target: ah },{source: ac , target: ag },{source: ac , target: ai },{source: af , target: ah },{source: af , target: ag },{source: af , target: ai },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ah },{source: aa , target: ag },{source: aa , target: ai },{source: ah , target: ai },{source: ag , target: ah },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.666666666666666667%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'af','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab ac ae ag ah ai */ var  ab = nodes[0] ,ac = nodes[1] ,ae = {id: 'ae', name:'cassandra'},ag = nodes[2] ,ah = nodes[3] ,ai = nodes[4]  ; nodes.push( ae ); links.push( {source: ab , target: ai },{source: ab , target: ac },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ae },{source: ac , target: ai },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ae },{source: ag , target: ai },{source: ag , target: ah },{source: ah , target: ai },{source: ae , target: ai },{source: ae , target: ag },{source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 10000);