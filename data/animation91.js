setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae */ var  aa = {id: 'aa', name:'kunrad'},ab = {id: 'ab', name:'heinrich'},ac = {id: 'ac', name:'gisela'},ad = {id: 'ad', name:'ernst'},ae = {id: 'ae', name:'hermann'} ; nodes.push( aa,ab,ac,ad,ae ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '12.5%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ac ad af ag ah ai */ var  aa = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,af = {id: 'af', name:'mangold'},ag = {id: 'ag', name:'warmann'},ah = {id: 'ah', name:'die_fürsten'},ai = {id: 'ai', name:'die_bischöfe'} ; nodes.push( af,ag,ah,ai ); links.push( {source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: ag , target: ah },{source: ag , target: ai },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: ah },{source: aa , target: ai },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ad },{source: ac , target: ah },{source: ac , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '25%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'af','ag','aa','ac','ah','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ad aj ak al am */ var  ad = nodes[0] ,aj = {id: 'aj', name:'hugo'},ak = {id: 'ak', name:'odo'},al = {id: 'al', name:'kriegsknecht'},am = {id: 'am', name:'werner'} ; nodes.push( aj,ak,al,am ); links.push( {source: ad , target: aj },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: am },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: ak , target: al },{source: ak , target: am },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Aufzug';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '37.5%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ad','ak','al','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ac af aj an ao */ var  aa = {id: 'aa', name:'kunrad'},ac = {id: 'ac', name:'gisela'},af = {id: 'af', name:'mangold'},aj = nodes[0] ,an = {id: 'an', name:'pilger'},ao = {id: 'ao', name:'adalbert'} ; nodes.push( aa,ac,af,an,ao ); links.push( {source: ac , target: aj },{source: ac , target: af },{source: ac , target: an },{source: ac , target: ao },{source: aj , target: an },{source: aj , target: ao },{source: aa , target: ac },{source: aa , target: aj },{source: aa , target: af },{source: aa , target: an },{source: aa , target: ao },{source: af , target: aj },{source: af , target: an },{source: af , target: ao },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Aufzug';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ac','aj','aa','af','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ad am ao ap */ var  ad = {id: 'ad', name:'ernst'},am = {id: 'am', name:'werner'},ao = nodes[0] ,ap = {id: 'ap', name:'warin'} ; nodes.push( ad,am,ap ); links.push( {source: am , target: ao },{source: am , target: ap },{source: ao , target: ap },{source: ad , target: am },{source: ad , target: ao },{source: ad , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '62.5%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ao','ad','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* af ag am aq */ var  af = {id: 'af', name:'mangold'},ag = {id: 'ag', name:'warmann'},am = nodes[0] ,aq = {id: 'aq', name:'wache'} ; nodes.push( af,ag,aq ); links.push( {source: ag , target: aq },{source: ag , target: am },{source: af , target: ag },{source: af , target: aq },{source: af , target: am },{source: am , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ag','af','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ad am ao ap ar as at au */ var  ad = {id: 'ad', name:'ernst'},am = nodes[0] ,ao = {id: 'ao', name:'adalbert'},ap = {id: 'ap', name:'warin'},ar = {id: 'ar', name:'erster'},as = {id: 'as', name:'zweiter'},at = {id: 'at', name:'dritter'},au = {id: 'au', name:'die_andern'} ; nodes.push( ad,ao,ap,ar,as,at,au ); links.push( {source: ad , target: am },{source: ad , target: ap },{source: ad , target: au },{source: ad , target: ar },{source: ad , target: as },{source: ad , target: at },{source: ad , target: ao },{source: am , target: ap },{source: am , target: au },{source: am , target: ar },{source: am , target: as },{source: am , target: at },{source: am , target: ao },{source: ap , target: au },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: at },{source: ar , target: au },{source: ar , target: as },{source: ar , target: at },{source: as , target: au },{source: as , target: at },{source: at , target: au },{source: ao , target: ap },{source: ao , target: au },{source: ao , target: ar },{source: ao , target: as },{source: ao , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '87.5%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aa ab ac ad af ag aj am ao ap aq ar as at au av */ var  aa = {id: 'aa', name:'kunrad'},ab = {id: 'ab', name:'heinrich'},ac = {id: 'ac', name:'gisela'},ad = nodes[0] ,af = {id: 'af', name:'mangold'},ag = {id: 'ag', name:'warmann'},aj = {id: 'aj', name:'hugo'},am = nodes[1] ,ao = nodes[2] ,ap = nodes[3] ,aq = {id: 'aq', name:'wache'},ar = nodes[4] ,as = nodes[5] ,at = nodes[6] ,au = nodes[7] ,av = {id: 'av', name:'ritter'} ; nodes.push( aa,ab,ac,af,ag,aj,aq,av ); links.push( {source: af , target: ag },{source: af , target: aq },{source: af , target: am },{source: af , target: ao },{source: af , target: ap },{source: af , target: au },{source: af , target: ar },{source: af , target: as },{source: af , target: at },{source: af , target: ar },{source: af , target: ar },{source: af , target: as },{source: af , target: au },{source: af , target: av },{source: af , target: aj },{source: ag , target: aq },{source: ag , target: am },{source: ag , target: ao },{source: ag , target: ap },{source: ag , target: au },{source: ag , target: ar },{source: ag , target: as },{source: ag , target: at },{source: ag , target: ar },{source: ag , target: ar },{source: ag , target: as },{source: ag , target: au },{source: ag , target: av },{source: ag , target: aj },{source: aq , target: au },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: at },{source: aq , target: ar },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: au },{source: aq , target: av },{source: am , target: aq },{source: am , target: ao },{source: am , target: ap },{source: am , target: au },{source: am , target: ar },{source: am , target: as },{source: am , target: at },{source: am , target: ar },{source: am , target: ar },{source: am , target: as },{source: am , target: au },{source: am , target: av },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: aq },{source: ad , target: am },{source: ad , target: ao },{source: ad , target: ap },{source: ad , target: au },{source: ad , target: ar },{source: ad , target: as },{source: ad , target: at },{source: ad , target: ar },{source: ad , target: ar },{source: ad , target: as },{source: ad , target: au },{source: ad , target: av },{source: ad , target: aj },{source: ao , target: aq },{source: ao , target: ap },{source: ao , target: au },{source: ao , target: ar },{source: ao , target: as },{source: ao , target: at },{source: ao , target: ar },{source: ao , target: ar },{source: ao , target: as },{source: ao , target: au },{source: ao , target: av },{source: ap , target: aq },{source: ap , target: au },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: at },{source: ap , target: ar },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: au },{source: ap , target: av },{source: au , target: av },{source: ar , target: au },{source: ar , target: as },{source: ar , target: at },{source: ar , target: as },{source: ar , target: au },{source: ar , target: av },{source: as , target: au },{source: as , target: at },{source: as , target: au },{source: as , target: av },{source: at , target: au },{source: at , target: au },{source: at , target: av },{source: ar , target: au },{source: ar , target: as },{source: ar , target: at },{source: ar , target: as },{source: ar , target: au },{source: ar , target: av },{source: ar , target: au },{source: ar , target: as },{source: ar , target: at },{source: ar , target: as },{source: ar , target: au },{source: ar , target: av },{source: as , target: au },{source: as , target: at },{source: as , target: au },{source: as , target: av },{source: au , target: av },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: aq },{source: aa , target: am },{source: aa , target: ad },{source: aa , target: ao },{source: aa , target: ap },{source: aa , target: au },{source: aa , target: ar },{source: aa , target: as },{source: aa , target: at },{source: aa , target: ar },{source: aa , target: ar },{source: aa , target: as },{source: aa , target: au },{source: aa , target: av },{source: aa , target: ac },{source: aa , target: aj },{source: aa , target: ab },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: aq },{source: ac , target: am },{source: ac , target: ad },{source: ac , target: ao },{source: ac , target: ap },{source: ac , target: au },{source: ac , target: ar },{source: ac , target: as },{source: ac , target: at },{source: ac , target: ar },{source: ac , target: ar },{source: ac , target: as },{source: ac , target: au },{source: ac , target: av },{source: ac , target: aj },{source: aj , target: aq },{source: aj , target: am },{source: aj , target: ao },{source: aj , target: ap },{source: aj , target: au },{source: aj , target: ar },{source: aj , target: as },{source: aj , target: at },{source: aj , target: ar },{source: aj , target: ar },{source: aj , target: as },{source: aj , target: au },{source: aj , target: av },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: aq },{source: ab , target: am },{source: ab , target: ad },{source: ab , target: ao },{source: ab , target: ap },{source: ab , target: au },{source: ab , target: ar },{source: ab , target: as },{source: ab , target: at },{source: ab , target: ar },{source: ab , target: ar },{source: ab , target: as },{source: ab , target: au },{source: ab , target: av },{source: ab , target: ac },{source: ab , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Aufzug';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 35000);