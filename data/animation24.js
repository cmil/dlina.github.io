setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad */ var  aa = {id: 'aa', name:'ambrosia'},ab = {id: 'ab', name:'achaz'},ac = {id: 'ac', name:'irma'},ad = {id: 'ad', name:'vincenz'} ; nodes.push( aa,ab,ac,ad ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Die erste der drei Szenen';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.333333333333333333%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ab ac ad */ var  ab = nodes[0] ,ac = nodes[1] ,ad = nodes[2]  ; /* nodes.push(); */ links.push( {source: ac , target: ad },{source: ab , target: ac },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Die zweite der drei Szenen';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.666666666666666667%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ac ad */ var  aa = {id: 'aa', name:'ambrosia'},ab = nodes[0] ,ac = nodes[1] ,ad = nodes[2]  ; nodes.push( aa ); links.push( {source: ac , target: ad },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ab },{source: ab , target: ac },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Die dritte der drei Szenen';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 10000);
