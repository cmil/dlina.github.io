setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'nikator'},ab = {id: 'ab', name:'esla'},ac = {id: 'ac', name:'könig'},ad = {id: 'ad', name:'königin'},ae = {id: 'ae', name:'adonia'} ; nodes.push( aa,ab,ac,ad,ae ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Akt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ae = nodes[4] ; /* nodes.push(); */ links.push( {source: aa , target: ae },{source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ae },{source: ab , target: ac },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Akt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ad = {id: 'ad', name:'königin'},af = {id: 'af', name:'totila'},ag = {id: 'ag', name:'die_soldaten'} ; nodes.push( ad,af,ag ); links.push( {source: ad , target: af },{source: ad , target: ag },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: af },{source: aa , target: ag },{source: ac , target: ad },{source: ac , target: af },{source: ac , target: ag },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: af },{source: ab , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Akt';
}, 10000);
