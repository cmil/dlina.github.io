setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'weibliche_miss_ellen'},ab = {id: 'ab', name:'stelle'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '3.333333333333333333%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'savage'} ; nodes.push( ac ); links.push( {source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '6.666666666666666667%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ac */ var  ac = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '10%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ad ae af ag ah */ var  ad = {id: 'ad', name:'viscount'},ae = {id: 'ae', name:'lord_winchester'},af = {id: 'af', name:'lady'},ag = {id: 'ag', name:'lord_berwick'},ah = {id: 'ah', name:'bedienter'} ; nodes.push( ad,ae,af,ag,ah ); links.push( {source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: af , target: ag },{source: af , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '13.333333333333333333%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ad','ae','ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ac af */ var  ac = {id: 'ac', name:'savage'},af = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '16.666666666666666667%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'af','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ab */ var  ab = {id: 'ab', name:'stelle'} ; nodes.push( ab ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '20%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ab ai */ var  ab = nodes[0] ,ai = {id: 'ai', name:'lord_tyrconnel'} ; nodes.push( ai ); links.push( {source: ab , target: ai },{source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '23.333333333333333333%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ai','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ac */ var  ac = {id: 'ac', name:'savage'} ; nodes.push( ac ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '26.666666666666666667%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ac ah */ var  ac = nodes[0] ,ah = {id: 'ah', name:'bedienter'} ; nodes.push( ah ); links.push( {source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '30%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ac af */ var  ac = nodes[0] ,af = {id: 'af', name:'lady'} ; nodes.push( af ); links.push( {source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.333333333333333333%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aa ad ae af ag aj */ var  aa = {id: 'aa', name:'weibliche_miss_ellen'},ad = {id: 'ad', name:'viscount'},ae = {id: 'ae', name:'lord_winchester'},af = nodes[0] ,ag = {id: 'ag', name:'lord_berwick'},aj = {id: 'aj', name:'männliche'} ; nodes.push( aa,ad,ae,ag,aj ); links.push( {source: ad , target: ag },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: aj },{source: ad , target: aj },{source: ag , target: aj },{source: ag , target: aj },{source: ae , target: ag },{source: ae , target: af },{source: ae , target: aj },{source: ae , target: aj },{source: af , target: ag },{source: af , target: aj },{source: af , target: aj },{source: aa , target: ad },{source: aa , target: ag },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: aj },{source: aa , target: aj },{source: aa , target: ad },{source: aa , target: ag },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: aj },{source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Szene'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '36.666666666666666667%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'af','aj','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ac ad ae ag */ var  ac = {id: 'ac', name:'savage'},ad = nodes[0] ,ae = nodes[1] ,ag = nodes[2]  ; nodes.push( ac ); links.push( {source: ae , target: ag },{source: ad , target: ag },{source: ad , target: ae },{source: ac , target: ag },{source: ac , target: ae },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Szene'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '40%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ag','ae','ad','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* aa ak */ var  aa = {id: 'aa', name:'weibliche_miss_ellen'},ak = {id: 'ak', name:'haushofmeister'} ; nodes.push( aa,ak ); links.push( {source: aa , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '43.333333333333333333%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aa af */ var  aa = nodes[0] ,af = {id: 'af', name:'lady'} ; nodes.push( af ); links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '46.666666666666666667%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'af','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ac */ var  ac = {id: 'ac', name:'savage'} ; nodes.push( ac ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ab ac */ var  ab = {id: 'ab', name:'stelle'},ac = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '53.333333333333333333%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ab ac ai al */ var  ab = nodes[0] ,ac = nodes[1] ,ai = {id: 'ai', name:'lord_tyrconnel'},al = {id: 'al', name:'oberrichter'} ; nodes.push( ai,al ); links.push( {source: ac , target: al },{source: ac , target: ai },{source: ab , target: ac },{source: ab , target: al },{source: ab , target: ai },{source: ai , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '56.666666666666666667%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ac','ab','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ae ag ai */ var  ae = {id: 'ae', name:'lord_winchester'},ag = {id: 'ag', name:'lord_berwick'},ai = nodes[0]  ; nodes.push( ae,ag ); links.push( {source: ag , target: ai },{source: ae , target: ai },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ag','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ai am an */ var  ai = nodes[0] ,am = {id: 'am', name:'erster_bedienter'},an = {id: 'an', name:'zweiter_bedienter'} ; nodes.push( am,an ); links.push( {source: ai , target: am },{source: ai , target: an },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '63.333333333333333333%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'am','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ac ai */ var  ac = {id: 'ac', name:'savage'},ai = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.666666666666666667%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ac ah */ var  ac = nodes[0] ,ah = {id: 'ah', name:'bedienter'} ; nodes.push( ah ); links.push( {source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '70%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* aa ac ai */ var  aa = {id: 'aa', name:'weibliche_miss_ellen'},ac = nodes[0] ,ai = {id: 'ai', name:'lord_tyrconnel'} ; nodes.push( aa,ai ); links.push( {source: ac , target: ai },{source: aa , target: ai },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '73.333333333333333333%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ac','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ae af ag ai */ var  ae = {id: 'ae', name:'lord_winchester'},af = {id: 'af', name:'lady'},ag = {id: 'ag', name:'lord_berwick'},ai = nodes[0]  ; nodes.push( ae,af,ag ); links.push( {source: af , target: ai },{source: af , target: ag },{source: ag , target: ai },{source: ae , target: ai },{source: ae , target: af },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '76.666666666666666667%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ai','af','ag','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ab ac ao ap aq ar as at au av aw */ var  ab = {id: 'ab', name:'stelle'},ac = {id: 'ac', name:'savage'},ao = {id: 'ao', name:'erste_maske'},ap = {id: 'ap', name:'zweite_maske'},aq = {id: 'aq', name:'dritte_maske'},ar = {id: 'ar', name:'vierte_maske'},as = {id: 'as', name:'fünfte_maske'},at = {id: 'at', name:'sechste_maske'},au = {id: 'au', name:'achte_maske'},av = {id: 'av', name:'neunte_maske'},aw = {id: 'aw', name:'zehnte_maske'} ; nodes.push( ab,ac,ao,ap,aq,ar,as,at,au,av,aw ); links.push( {source: ab , target: ao },{source: ab , target: ap },{source: ab , target: aq },{source: ab , target: ar },{source: ab , target: as },{source: ab , target: at },{source: ab , target: au },{source: ab , target: av },{source: ab , target: aw },{source: ab , target: ac },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: ao , target: as },{source: ao , target: at },{source: ao , target: au },{source: ao , target: av },{source: ao , target: aw },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: at },{source: ap , target: au },{source: ap , target: av },{source: ap , target: aw },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: at },{source: aq , target: au },{source: aq , target: av },{source: aq , target: aw },{source: ar , target: as },{source: ar , target: at },{source: ar , target: au },{source: ar , target: av },{source: ar , target: aw },{source: as , target: at },{source: as , target: au },{source: as , target: av },{source: as , target: aw },{source: at , target: au },{source: at , target: av },{source: at , target: aw },{source: au , target: av },{source: au , target: aw },{source: av , target: aw },{source: ac , target: ao },{source: ac , target: ap },{source: ac , target: aq },{source: ac , target: ar },{source: ac , target: as },{source: ac , target: at },{source: ac , target: au },{source: ac , target: av },{source: ac , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ao','ap','aq','ar','as','at','au','av','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* aa ab ac ae af ag ai */ var  aa = {id: 'aa', name:'weibliche_miss_ellen'},ab = nodes[0] ,ac = nodes[1] ,ae = {id: 'ae', name:'lord_winchester'},af = {id: 'af', name:'lady'},ag = {id: 'ag', name:'lord_berwick'},ai = {id: 'ai', name:'lord_tyrconnel'} ; nodes.push( aa,ae,af,ag,ai ); links.push( {source: ag , target: ai },{source: af , target: ag },{source: af , target: ai },{source: ae , target: ag },{source: ae , target: af },{source: ae , target: ai },{source: ac , target: ag },{source: ac , target: af },{source: ac , target: ai },{source: ac , target: ae },{source: aa , target: ag },{source: aa , target: af },{source: aa , target: ai },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ag },{source: ab , target: af },{source: ab , target: ai },{source: ab , target: ae },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '83.333333333333333333%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ag','af','ai','ae','ac','aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ax ay */ var  ax = {id: 'ax', name:'toms'},ay = {id: 'ay', name:'kitty'} ; nodes.push( ax,ay ); links.push( {source: ax , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '86.666666666666666667%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ax ay az */ var  ax = nodes[0] ,ay = nodes[1] ,az = {id: 'az', name:'bursche'} ; nodes.push( az ); links.push( {source: ax , target: az },{source: ax , target: ay },{source: ay , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '90%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'az' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ac ax ay */ var  ac = {id: 'ac', name:'savage'},ax = nodes[0] ,ay = nodes[1]  ; nodes.push( ac ); links.push( {source: ac , target: ax },{source: ac , target: ay },{source: ax , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '93.333333333333333333%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ac af ah ax ay */ var  ac = nodes[0] ,af = {id: 'af', name:'lady'},ah = {id: 'ah', name:'bedienter'},ax = nodes[1] ,ay = nodes[2]  ; nodes.push( af,ah ); links.push( {source: ah , target: ay },{source: ah , target: ax },{source: ax , target: ay },{source: af , target: ah },{source: af , target: ay },{source: af , target: ax },{source: ac , target: ah },{source: ac , target: ay },{source: ac , target: ax },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '96.666666666666666667%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ah','ay','ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* aa ab ac af */ var  aa = {id: 'aa', name:'weibliche_miss_ellen'},ab = {id: 'ab', name:'stelle'},ac = nodes[0] ,af = nodes[1]  ; nodes.push( aa,ab ); links.push( {source: ab , target: af },{source: ab , target: ac },{source: aa , target: ab },{source: aa , target: af },{source: aa , target: ac },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Letzter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 145000);
