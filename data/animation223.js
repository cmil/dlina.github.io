setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af ag */ var  aa = {id: 'aa', name:'frau_selicke'},ab = {id: 'ab', name:'walter'},ac = {id: 'ac', name:'albert'},ad = {id: 'ad', name:'kopelke'},ae = {id: 'ae', name:'linchen'},af = {id: 'af', name:'wendt'},ag = {id: 'ag', name:'toni'} ; nodes.push( aa,ab,ac,ad,ae,af,ag ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ae , target: af },{source: ae , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Aufzug';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.333333333333333333%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ad','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac ae ag ah */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ae = nodes[3] ,ag = nodes[4] ,ah = {id: 'ah', name:'selicke'} ; nodes.push( ah ); links.push( {source: ab , target: ac },{source: ab , target: ag },{source: ab , target: ae },{source: ab , target: ah },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ag },{source: aa , target: ae },{source: aa , target: ah },{source: ac , target: ag },{source: ac , target: ae },{source: ac , target: ah },{source: ag , target: ah },{source: ae , target: ag },{source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Aufzug';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.666666666666666667%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ac ad af ag ah */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = {id: 'ad', name:'kopelke'},af = {id: 'af', name:'wendt'},ag = nodes[3] ,ah = nodes[4]  ; nodes.push( ad,af ); links.push( {source: aa , target: ah },{source: aa , target: ag },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: af },{source: aa , target: ad },{source: ag , target: ah },{source: ac , target: ah },{source: ac , target: ag },{source: ac , target: af },{source: ac , target: ad },{source: ab , target: ah },{source: ab , target: ag },{source: ab , target: ac },{source: ab , target: af },{source: ab , target: ad },{source: af , target: ah },{source: af , target: ag },{source: ad , target: ah },{source: ad , target: ag },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Aufzug';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 10000);