setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'franz'},ab = {id: 'ab', name:'stimme'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '6.666666666666666667%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ac ad ae af ag ah ai aj an ao ap as aw ax ay */ var  ac = {id: 'ac', name:'moor'},ad = {id: 'ad', name:'spiegelberg'},ae = {id: 'ae', name:'roller'},af = {id: 'af', name:'grimm'},ag = {id: 'ag', name:'schwarz'},ah = {id: 'ah', name:'schufterle'},ai = {id: 'ai', name:'razmann'},aj = {id: 'aj', name:'schweizer'},an = {id: 'an', name:'einer_von_der_bande'},ao = {id: 'ao', name:'ein_zweiter'},ap = {id: 'ap', name:'ein_dritter'},as = {id: 'as', name:'neue_räuber'},aw = {id: 'aw', name:'ein_räuber'},ax = {id: 'ax', name:'ein_alter_räuber'},ay = {id: 'ay', name:'ein_dritter_räuber'} ; nodes.push( ac,ad,ae,af,ag,ah,ai,aj,an,ao,ap,as,aw,ax,ay ); links.push( {source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: as },{source: ac , target: an },{source: ac , target: ao },{source: ac , target: ap },{source: ac , target: aw },{source: ac , target: ax },{source: ac , target: ay },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: as },{source: ad , target: an },{source: ad , target: ao },{source: ad , target: ap },{source: ad , target: aw },{source: ad , target: ax },{source: ad , target: ay },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: as },{source: ac , target: an },{source: ac , target: ao },{source: ac , target: ap },{source: ac , target: aw },{source: ac , target: ax },{source: ac , target: ay },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: as },{source: ae , target: an },{source: ae , target: ao },{source: ae , target: ap },{source: ae , target: aw },{source: ae , target: ax },{source: ae , target: ay },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: as },{source: af , target: an },{source: af , target: ao },{source: af , target: ap },{source: af , target: aw },{source: af , target: ax },{source: af , target: ay },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: as },{source: ag , target: an },{source: ag , target: ao },{source: ag , target: ap },{source: ag , target: aw },{source: ag , target: ax },{source: ag , target: ay },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: as },{source: ah , target: an },{source: ah , target: ao },{source: ah , target: ap },{source: ah , target: aw },{source: ah , target: ax },{source: ah , target: ay },{source: ai , target: aj },{source: ai , target: as },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: ap },{source: ai , target: aw },{source: ai , target: ax },{source: ai , target: ay },{source: aj , target: as },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: ap },{source: aj , target: aw },{source: aj , target: ax },{source: aj , target: ay },{source: as , target: aw },{source: as , target: ax },{source: as , target: ay },{source: an , target: as },{source: an , target: ao },{source: an , target: ap },{source: an , target: aw },{source: an , target: ax },{source: an , target: ay },{source: ao , target: as },{source: ao , target: ap },{source: ao , target: aw },{source: ao , target: ax },{source: ao , target: ay },{source: ap , target: as },{source: ap , target: aw },{source: ap , target: ax },{source: ap , target: ay },{source: aw , target: ax },{source: aw , target: ay },{source: ax , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '13.333333333333333333%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac','ad','ae','af','ag','ah','ai','aj','as','an','ao','ap','aw','ax','ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ak */ var  aa = {id: 'aa', name:'franz'},ak = {id: 'ak', name:'amalia'} ; nodes.push( aa,ak ); links.push( {source: aa , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '20%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa al */ var  aa = nodes[0] ,al = {id: 'al', name:'hermann'} ; nodes.push( al ); links.push( {source: aa , target: al },{source: aa , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '26.666666666666666667%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ab ak al am */ var  aa = nodes[0] ,ab = {id: 'ab', name:'stimme'},ak = {id: 'ak', name:'amalia'},al = nodes[1] ,am = {id: 'am', name:'daniel'} ; nodes.push( ab,ak,am ); links.push( {source: ak , target: am },{source: ak , target: al },{source: ab , target: ak },{source: ab , target: am },{source: ab , target: al },{source: aa , target: ak },{source: aa , target: ab },{source: aa , target: am },{source: aa , target: al },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.333333333333333333%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ak','ab','am','aa','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ac ad ae ag ah ai aj an ao ap aq as aw ax ay */ var  ac = {id: 'ac', name:'moor'},ad = {id: 'ad', name:'spiegelberg'},ae = {id: 'ae', name:'roller'},ag = {id: 'ag', name:'schwarz'},ah = {id: 'ah', name:'schufterle'},ai = {id: 'ai', name:'razmann'},aj = {id: 'aj', name:'schweizer'},an = {id: 'an', name:'einer_von_der_bande'},ao = {id: 'ao', name:'ein_zweiter'},ap = {id: 'ap', name:'ein_dritter'},aq = {id: 'aq', name:'pater'},as = {id: 'as', name:'neue_räuber'},aw = {id: 'aw', name:'ein_räuber'},ax = {id: 'ax', name:'ein_alter_räuber'},ay = {id: 'ay', name:'ein_dritter_räuber'} ; nodes.push( ac,ad,ae,ag,ah,ai,aj,an,ao,ap,aq,as,aw,ax,ay ); links.push( {source: ai , target: aj },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: ap },{source: ai , target: as },{source: ai , target: aw },{source: ai , target: ax },{source: ai , target: ay },{source: ai , target: as },{source: ai , target: aq },{source: ad , target: ai },{source: ad , target: ag },{source: ad , target: aj },{source: ad , target: ae },{source: ad , target: an },{source: ad , target: ao },{source: ad , target: ap },{source: ad , target: ah },{source: ad , target: as },{source: ad , target: aw },{source: ad , target: ax },{source: ad , target: ay },{source: ad , target: as },{source: ad , target: aq },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: an },{source: ag , target: ao },{source: ag , target: ap },{source: ag , target: ah },{source: ag , target: as },{source: ag , target: aw },{source: ag , target: ax },{source: ag , target: ay },{source: ag , target: as },{source: ag , target: aq },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: ap },{source: aj , target: as },{source: aj , target: aw },{source: aj , target: ax },{source: aj , target: ay },{source: aj , target: as },{source: aj , target: aq },{source: ac , target: ai },{source: ac , target: ad },{source: ac , target: ag },{source: ac , target: aj },{source: ac , target: ae },{source: ac , target: an },{source: ac , target: ao },{source: ac , target: ap },{source: ac , target: ah },{source: ac , target: as },{source: ac , target: aw },{source: ac , target: ax },{source: ac , target: ay },{source: ac , target: as },{source: ac , target: aq },{source: ae , target: ai },{source: ae , target: ag },{source: ae , target: aj },{source: ae , target: an },{source: ae , target: ao },{source: ae , target: ap },{source: ae , target: ah },{source: ae , target: as },{source: ae , target: aw },{source: ae , target: ax },{source: ae , target: ay },{source: ae , target: as },{source: ae , target: aq },{source: an , target: ao },{source: an , target: ap },{source: an , target: as },{source: an , target: aw },{source: an , target: ax },{source: an , target: ay },{source: an , target: as },{source: an , target: aq },{source: ao , target: ap },{source: ao , target: as },{source: ao , target: aw },{source: ao , target: ax },{source: ao , target: ay },{source: ao , target: as },{source: ao , target: aq },{source: ap , target: as },{source: ap , target: aw },{source: ap , target: ax },{source: ap , target: ay },{source: ap , target: as },{source: ap , target: aq },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: an },{source: ah , target: ao },{source: ah , target: ap },{source: ah , target: as },{source: ah , target: aw },{source: ah , target: ax },{source: ah , target: ay },{source: ah , target: as },{source: ah , target: aq },{source: ac , target: ai },{source: ac , target: ad },{source: ac , target: ag },{source: ac , target: aj },{source: ac , target: ae },{source: ac , target: an },{source: ac , target: ao },{source: ac , target: ap },{source: ac , target: ah },{source: ac , target: as },{source: ac , target: aw },{source: ac , target: ax },{source: ac , target: ay },{source: ac , target: as },{source: ac , target: aq },{source: as , target: aw },{source: as , target: ax },{source: as , target: ay },{source: aw , target: ax },{source: aw , target: ay },{source: ax , target: ay },{source: as , target: aw },{source: as , target: ax },{source: as , target: ay },{source: aq , target: as },{source: aq , target: aw },{source: aq , target: ax },{source: aq , target: ay },{source: aq , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '40%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ai','ad','ag','aj','ac','ae','an','ao','ap','ah','as','aw','ax','ay','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa ak al */ var  aa = {id: 'aa', name:'franz'},ak = {id: 'ak', name:'amalia'},al = {id: 'al', name:'hermann'} ; nodes.push( aa,ak,al ); links.push( {source: ak , target: al },{source: aa , target: ak },{source: aa , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '46.666666666666666667%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ak','aa','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ac ad af ag aj an ao ap ar as aw ax ay */ var  ac = {id: 'ac', name:'moor'},ad = {id: 'ad', name:'spiegelberg'},af = {id: 'af', name:'grimm'},ag = {id: 'ag', name:'schwarz'},aj = {id: 'aj', name:'schweizer'},an = {id: 'an', name:'einer_von_der_bande'},ao = {id: 'ao', name:'ein_zweiter'},ap = {id: 'ap', name:'ein_dritter'},ar = {id: 'ar', name:'kosinsky'},as = {id: 'as', name:'neue_räuber'},aw = {id: 'aw', name:'ein_räuber'},ax = {id: 'ax', name:'ein_alter_räuber'},ay = {id: 'ay', name:'ein_dritter_räuber'} ; nodes.push( ac,ad,af,ag,aj,an,ao,ap,ar,as,aw,ax,ay ); links.push( {source: ac , target: ag },{source: ac , target: af },{source: ac , target: aj },{source: ac , target: ar },{source: ac , target: ad },{source: ac , target: as },{source: ac , target: an },{source: ac , target: ao },{source: ac , target: ap },{source: ac , target: aw },{source: ac , target: ax },{source: ac , target: ay },{source: ag , target: aj },{source: ag , target: ar },{source: ag , target: as },{source: ag , target: an },{source: ag , target: ao },{source: ag , target: ap },{source: ag , target: aw },{source: ag , target: ax },{source: ag , target: ay },{source: af , target: ag },{source: af , target: aj },{source: af , target: ar },{source: af , target: as },{source: af , target: an },{source: af , target: ao },{source: af , target: ap },{source: af , target: aw },{source: af , target: ax },{source: af , target: ay },{source: aj , target: ar },{source: aj , target: as },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: ap },{source: aj , target: aw },{source: aj , target: ax },{source: aj , target: ay },{source: ar , target: as },{source: ar , target: aw },{source: ar , target: ax },{source: ar , target: ay },{source: ad , target: ag },{source: ad , target: af },{source: ad , target: aj },{source: ad , target: ar },{source: ad , target: as },{source: ad , target: an },{source: ad , target: ao },{source: ad , target: ap },{source: ad , target: aw },{source: ad , target: ax },{source: ad , target: ay },{source: as , target: aw },{source: as , target: ax },{source: as , target: ay },{source: an , target: ar },{source: an , target: as },{source: an , target: ao },{source: an , target: ap },{source: an , target: aw },{source: an , target: ax },{source: an , target: ay },{source: ao , target: ar },{source: ao , target: as },{source: ao , target: ap },{source: ao , target: aw },{source: ao , target: ax },{source: ao , target: ay },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: aw },{source: ap , target: ax },{source: ap , target: ay },{source: aw , target: ax },{source: aw , target: ay },{source: ax , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '53.333333333333333333%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ag','af','aj','ad','as','an','ao','ap','aw','ax','ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ac ar */ var  ac = nodes[0] ,ar = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* aa ac ak am */ var  aa = {id: 'aa', name:'franz'},ac = nodes[0] ,ak = {id: 'ak', name:'amalia'},am = {id: 'am', name:'daniel'} ; nodes.push( aa,ak,am ); links.push( {source: ak , target: am },{source: ac , target: ak },{source: ac , target: am },{source: aa , target: ak },{source: aa , target: ac },{source: aa , target: am },{source: aa , target: ak },{source: aa , target: ac },{source: aa , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.666666666666666667%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ak','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ac am ar */ var  ac = nodes[0] ,am = nodes[1] ,ar = {id: 'ar', name:'kosinsky'} ; nodes.push( ar ); links.push( {source: ac , target: am },{source: ac , target: ar },{source: am , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '73.333333333333333333%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'am','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ac ak */ var  ac = nodes[0] ,ak = {id: 'ak', name:'amalia'} ; nodes.push( ak ); links.push( {source: ac , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ab ac ad af ag ai aj al an ao ap as aw ax ay */ var  ab = {id: 'ab', name:'stimme'},ac = nodes[0] ,ad = {id: 'ad', name:'spiegelberg'},af = {id: 'af', name:'grimm'},ag = {id: 'ag', name:'schwarz'},ai = {id: 'ai', name:'razmann'},aj = {id: 'aj', name:'schweizer'},al = {id: 'al', name:'hermann'},an = {id: 'an', name:'einer_von_der_bande'},ao = {id: 'ao', name:'ein_zweiter'},ap = {id: 'ap', name:'ein_dritter'},as = {id: 'as', name:'neue_räuber'},aw = {id: 'aw', name:'ein_räuber'},ax = {id: 'ax', name:'ein_alter_räuber'},ay = {id: 'ay', name:'ein_dritter_räuber'} ; nodes.push( ab,ad,af,ag,ai,aj,al,an,ao,ap,as,aw,ax,ay ); links.push( {source: as , target: aw },{source: as , target: ax },{source: as , target: ay },{source: an , target: as },{source: an , target: ao },{source: an , target: ap },{source: an , target: aw },{source: an , target: ax },{source: an , target: ay },{source: an , target: as },{source: ao , target: as },{source: ao , target: ap },{source: ao , target: aw },{source: ao , target: ax },{source: ao , target: ay },{source: ao , target: as },{source: ap , target: as },{source: ap , target: aw },{source: ap , target: ax },{source: ap , target: ay },{source: ap , target: as },{source: aw , target: ax },{source: aw , target: ay },{source: ax , target: ay },{source: aj , target: as },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: ap },{source: aj , target: aw },{source: aj , target: ax },{source: aj , target: ay },{source: aj , target: as },{source: aj , target: al },{source: ai , target: as },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: ap },{source: ai , target: aw },{source: ai , target: ax },{source: ai , target: ay },{source: ai , target: aj },{source: ai , target: as },{source: ai , target: al },{source: ad , target: as },{source: ad , target: an },{source: ad , target: ao },{source: ad , target: ap },{source: ad , target: aw },{source: ad , target: ax },{source: ad , target: ay },{source: ad , target: aj },{source: ad , target: ai },{source: ad , target: ag },{source: ad , target: af },{source: ad , target: as },{source: ad , target: al },{source: ag , target: as },{source: ag , target: an },{source: ag , target: ao },{source: ag , target: ap },{source: ag , target: aw },{source: ag , target: ax },{source: ag , target: ay },{source: ag , target: aj },{source: ag , target: ai },{source: ag , target: as },{source: ag , target: al },{source: af , target: as },{source: af , target: an },{source: af , target: ao },{source: af , target: ap },{source: af , target: aw },{source: af , target: ax },{source: af , target: ay },{source: af , target: aj },{source: af , target: ai },{source: af , target: ag },{source: af , target: as },{source: af , target: al },{source: as , target: aw },{source: as , target: ax },{source: as , target: ay },{source: ac , target: as },{source: ac , target: an },{source: ac , target: ao },{source: ac , target: ap },{source: ac , target: aw },{source: ac , target: ax },{source: ac , target: ay },{source: ac , target: aj },{source: ac , target: ai },{source: ac , target: ad },{source: ac , target: ag },{source: ac , target: af },{source: ac , target: as },{source: ac , target: al },{source: al , target: as },{source: al , target: an },{source: al , target: ao },{source: al , target: ap },{source: al , target: aw },{source: al , target: ax },{source: al , target: ay },{source: al , target: as },{source: ab , target: as },{source: ab , target: an },{source: ab , target: ao },{source: ab , target: ap },{source: ab , target: aw },{source: ab , target: ax },{source: ab , target: ay },{source: ab , target: aj },{source: ab , target: ai },{source: ab , target: ad },{source: ab , target: ag },{source: ab , target: af },{source: ab , target: as },{source: ab , target: ac },{source: ab , target: al },{source: ab , target: as },{source: ab , target: an },{source: ab , target: ao },{source: ab , target: ap },{source: ab , target: aw },{source: ab , target: ax },{source: ab , target: ay },{source: ab , target: aj },{source: ab , target: ai },{source: ab , target: ad },{source: ab , target: ag },{source: ab , target: af },{source: ab , target: as },{source: ab , target: ac },{source: ab , target: al },{source: ab , target: as },{source: ab , target: an },{source: ab , target: ao },{source: ab , target: ap },{source: ab , target: aw },{source: ab , target: ax },{source: ab , target: ay },{source: ab , target: aj },{source: ab , target: ai },{source: ab , target: ad },{source: ab , target: ag },{source: ab , target: af },{source: ab , target: as },{source: ab , target: ac },{source: ab , target: al },{source: ab , target: as },{source: ab , target: an },{source: ab , target: ao },{source: ab , target: ap },{source: ab , target: aw },{source: ab , target: ax },{source: ab , target: ay },{source: ab , target: aj },{source: ab , target: ai },{source: ab , target: ad },{source: ab , target: ag },{source: ab , target: af },{source: ab , target: as },{source: ab , target: ac },{source: ab , target: al },{source: ab , target: as },{source: ab , target: an },{source: ab , target: ao },{source: ab , target: ap },{source: ab , target: aw },{source: ab , target: ax },{source: ab , target: ay },{source: ab , target: aj },{source: ab , target: ai },{source: ab , target: ad },{source: ab , target: ag },{source: ab , target: af },{source: ab , target: as },{source: ab , target: ac },{source: ab , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '86.666666666666666667%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'as','an','ao','ap','aw','ax','ay','ai','ad','ac','al','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aa af ag aj am at au av */ var  aa = {id: 'aa', name:'franz'},af = nodes[0] ,ag = nodes[1] ,aj = nodes[2] ,am = {id: 'am', name:'daniel'},at = {id: 'at', name:'bedienter'},au = {id: 'au', name:'moser'},av = {id: 'av', name:'volk'} ; nodes.push( aa,am,at,au,av ); links.push( {source: am , target: at },{source: am , target: au },{source: am , target: av },{source: aa , target: am },{source: aa , target: at },{source: aa , target: au },{source: aa , target: aj },{source: aa , target: av },{source: aa , target: af },{source: aa , target: ag },{source: at , target: au },{source: at , target: av },{source: au , target: av },{source: aj , target: am },{source: aj , target: at },{source: aj , target: au },{source: aj , target: av },{source: af , target: am },{source: af , target: at },{source: af , target: au },{source: af , target: aj },{source: af , target: av },{source: af , target: ag },{source: ag , target: am },{source: ag , target: at },{source: ag , target: au },{source: ag , target: aj },{source: ag , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '93.333333333333333333%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'am','aa','at','au','aj','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ab ac af ag ak an ao ap as aw ax ay */ var  ab = {id: 'ab', name:'stimme'},ac = {id: 'ac', name:'moor'},af = nodes[0] ,ag = nodes[1] ,ak = {id: 'ak', name:'amalia'},an = {id: 'an', name:'einer_von_der_bande'},ao = {id: 'ao', name:'ein_zweiter'},ap = {id: 'ap', name:'ein_dritter'},as = {id: 'as', name:'neue_räuber'},aw = {id: 'aw', name:'ein_räuber'},ax = {id: 'ax', name:'ein_alter_räuber'},ay = {id: 'ay', name:'ein_dritter_räuber'} ; nodes.push( ab,ac,ak,an,ao,ap,as,aw,ax,ay ); links.push( {source: ac , target: af },{source: ac , target: ag },{source: ac , target: as },{source: ac , target: an },{source: ac , target: ao },{source: ac , target: ap },{source: ac , target: aw },{source: ac , target: ax },{source: ac , target: ay },{source: ac , target: ak },{source: ac , target: as },{source: ab , target: ac },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: as },{source: ab , target: an },{source: ab , target: ao },{source: ab , target: ap },{source: ab , target: aw },{source: ab , target: ax },{source: ab , target: ay },{source: ab , target: ak },{source: ab , target: ac },{source: ab , target: as },{source: af , target: ag },{source: af , target: as },{source: af , target: an },{source: af , target: ao },{source: af , target: ap },{source: af , target: aw },{source: af , target: ax },{source: af , target: ay },{source: af , target: ak },{source: af , target: as },{source: ag , target: as },{source: ag , target: an },{source: ag , target: ao },{source: ag , target: ap },{source: ag , target: aw },{source: ag , target: ax },{source: ag , target: ay },{source: ag , target: ak },{source: ag , target: as },{source: as , target: aw },{source: as , target: ax },{source: as , target: ay },{source: an , target: as },{source: an , target: ao },{source: an , target: ap },{source: an , target: aw },{source: an , target: ax },{source: an , target: ay },{source: an , target: as },{source: ao , target: as },{source: ao , target: ap },{source: ao , target: aw },{source: ao , target: ax },{source: ao , target: ay },{source: ao , target: as },{source: ap , target: as },{source: ap , target: aw },{source: ap , target: ax },{source: ap , target: ay },{source: ap , target: as },{source: aw , target: ax },{source: aw , target: ay },{source: ax , target: ay },{source: ak , target: as },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: ap },{source: ak , target: aw },{source: ak , target: ax },{source: ak , target: ay },{source: ak , target: as },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: as },{source: ac , target: an },{source: ac , target: ao },{source: ac , target: ap },{source: ac , target: aw },{source: ac , target: ax },{source: ac , target: ay },{source: ac , target: ak },{source: ac , target: as },{source: as , target: aw },{source: as , target: ax },{source: as , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 70000);