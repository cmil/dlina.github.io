setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'alfred'},ab = {id: 'ab', name:'adele'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '2.439024390243902439%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ab ac */ var  ab = nodes[0] ,ac = {id: 'ac', name:'rosalinde'} ; nodes.push( ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '4.878048780487804878%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ac */ var  ac = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '7.317073170731707317%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ac */ var  aa = {id: 'aa', name:'alfred'},ac = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '9.756097560975609756%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ac */ var  ac = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '12.195121951219512195%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ac ad ae */ var  ac = nodes[0] ,ad = {id: 'ad', name:'eisenstein'},ae = {id: 'ae', name:'blind'} ; nodes.push( ad,ae ); links.push( {source: ad , target: ae },{source: ac , target: ad },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '14.634146341463414634%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ab ac ad */ var  ab = {id: 'ab', name:'adele'},ac = nodes[0] ,ad = nodes[1]  ; nodes.push( ab ); links.push( {source: ac , target: ad },{source: ab , target: ad },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '17.073170731707317073%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ac ad af */ var  ac = nodes[0] ,ad = nodes[1] ,af = {id: 'af', name:'falke'} ; nodes.push( af ); links.push( {source: ac , target: af },{source: ac , target: ad },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '19.512195121951219512%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ad af */ var  ad = nodes[0] ,af = nodes[1]  ; /* nodes.push(); */ links.push( {source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '21.951219512195121951%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ac ad af */ var  ac = {id: 'ac', name:'rosalinde'},ad = nodes[0] ,af = nodes[1]  ; nodes.push( ac ); links.push( {source: ac , target: af },{source: ac , target: ad },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '24.39024390243902439%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ac ad */ var  ac = nodes[0] ,ad = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '26.829268292682926829%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ab ac */ var  ab = {id: 'ab', name:'adele'},ac = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '29.268292682926829268%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ab ac ad */ var  ab = nodes[0] ,ac = nodes[1] ,ad = {id: 'ad', name:'eisenstein'} ; nodes.push( ad ); links.push( {source: ab , target: ad },{source: ab , target: ac },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '31.707317073170731707%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ad','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aa ac */ var  aa = {id: 'aa', name:'alfred'},ac = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '34.146341463414634146%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* aa ac ag */ var  aa = nodes[0] ,ac = nodes[1] ,ag = {id: 'ag', name:'frank'} ; nodes.push( ag ); links.push( {source: ac , target: ag },{source: aa , target: ag },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '36.585365853658536585%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ag','ac','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ah ai aj ak al am an ao ap aq ar as at ax ay */ var  ah = {id: 'ah', name:'chor_der_gäste'},ai = {id: 'ai', name:'melanie'},aj = {id: 'aj', name:'faustine'},ak = {id: 'ak', name:'felicitas'},al = {id: 'al', name:'minni'},am = {id: 'am', name:'hermine'},an = {id: 'an', name:'natalie'},ao = {id: 'ao', name:'chor'},ap = {id: 'ap', name:'ali_bey'},aq = {id: 'aq', name:'sidi'},ar = {id: 'ar', name:'ramusin'},as = {id: 'as', name:'murray'},at = {id: 'at', name:'carikoni'},ax = {id: 'ax', name:'damen'},ay = {id: 'ay', name:'mehrere_herren'} ; nodes.push( ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,ax,ay ); links.push( {source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ah , target: an },{source: ah , target: ax },{source: ah , target: ay },{source: ah , target: ao },{source: ah , target: ap },{source: ah , target: aq },{source: ah , target: ar },{source: ah , target: as },{source: ah , target: at },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ai , target: an },{source: ai , target: ax },{source: ai , target: ay },{source: ai , target: ao },{source: ai , target: ap },{source: ai , target: aq },{source: ai , target: ar },{source: ai , target: as },{source: ai , target: at },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: aj , target: ax },{source: aj , target: ay },{source: aj , target: ao },{source: aj , target: ap },{source: aj , target: aq },{source: aj , target: ar },{source: aj , target: as },{source: aj , target: at },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: ax },{source: ak , target: ay },{source: ak , target: ao },{source: ak , target: ap },{source: ak , target: aq },{source: ak , target: ar },{source: ak , target: as },{source: ak , target: at },{source: al , target: am },{source: al , target: an },{source: al , target: ax },{source: al , target: ay },{source: al , target: ao },{source: al , target: ap },{source: al , target: aq },{source: al , target: ar },{source: al , target: as },{source: al , target: at },{source: am , target: an },{source: am , target: ax },{source: am , target: ay },{source: am , target: ao },{source: am , target: ap },{source: am , target: aq },{source: am , target: ar },{source: am , target: as },{source: am , target: at },{source: an , target: ax },{source: an , target: ay },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: an , target: as },{source: an , target: at },{source: ax , target: ay },{source: ao , target: ax },{source: ao , target: ay },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: ao , target: as },{source: ao , target: at },{source: ap , target: ax },{source: ap , target: ay },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: at },{source: aq , target: ax },{source: aq , target: ay },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: at },{source: ar , target: ax },{source: ar , target: ay },{source: ar , target: as },{source: ar , target: at },{source: as , target: ax },{source: as , target: ay },{source: as , target: at },{source: at , target: ax },{source: at , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '39.024390243902439024%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ah','ai','aj','ak','al','am','an','ax','ay','ao','ap','aq','ar','as','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ab au */ var  ab = {id: 'ab', name:'adele'},au = {id: 'au', name:'ida'} ; nodes.push( ab,au ); links.push( {source: ab , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '41.463414634146341463%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ab af au av */ var  ab = nodes[0] ,af = {id: 'af', name:'falke'},au = nodes[1] ,av = {id: 'av', name:'orlofsky'} ; nodes.push( af,av ); links.push( {source: af , target: av },{source: af , target: au },{source: au , target: av },{source: ab , target: av },{source: ab , target: af },{source: ab , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '43.902439024390243902%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'au','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ad af av aw */ var  ad = {id: 'ad', name:'eisenstein'},af = nodes[0] ,av = nodes[1] ,aw = {id: 'aw', name:'ivan'} ; nodes.push( ad,aw ); links.push( {source: av , target: aw },{source: af , target: av },{source: af , target: aw },{source: ad , target: av },{source: ad , target: af },{source: ad , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '46.341463414634146341%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ad af av */ var  ad = nodes[0] ,af = nodes[1] ,av = nodes[2]  ; /* nodes.push(); */ links.push( {source: ad , target: av },{source: ad , target: af },{source: af , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '48.78048780487804878%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ab ad af au av */ var  ab = {id: 'ab', name:'adele'},ad = nodes[0] ,af = nodes[1] ,au = {id: 'au', name:'ida'},av = nodes[2]  ; nodes.push( ab,au ); links.push( {source: ab , target: au },{source: ab , target: ad },{source: ab , target: av },{source: ab , target: af },{source: au , target: av },{source: ad , target: au },{source: ad , target: av },{source: ad , target: af },{source: af , target: au },{source: af , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '51.21951219512195122%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'au' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ab ad af ao av ax */ var  ab = nodes[0] ,ad = nodes[1] ,af = nodes[2] ,ao = {id: 'ao', name:'chor'},av = nodes[3] ,ax = {id: 'ax', name:'damen'} ; nodes.push( ao,ax ); links.push( {source: av , target: ax },{source: af , target: av },{source: af , target: ax },{source: af , target: ao },{source: ab , target: av },{source: ab , target: af },{source: ab , target: ax },{source: ab , target: ad },{source: ab , target: ao },{source: ad , target: av },{source: ad , target: af },{source: ad , target: ax },{source: ad , target: ao },{source: ao , target: av },{source: ao , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '53.658536585365853659%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ab ad af ag ai aj as at au av aw ax */ var  ab = nodes[0] ,ad = nodes[1] ,af = nodes[2] ,ag = {id: 'ag', name:'frank'},ai = {id: 'ai', name:'melanie'},aj = {id: 'aj', name:'faustine'},as = {id: 'as', name:'murray'},at = {id: 'at', name:'carikoni'},au = {id: 'au', name:'ida'},av = nodes[3] ,aw = {id: 'aw', name:'ivan'},ax = nodes[4]  ; nodes.push( ag,ai,aj,as,at,au,aw ); links.push( {source: aw , target: ax },{source: aw , target: ax },{source: av , target: aw },{source: av , target: ax },{source: av , target: ax },{source: af , target: aw },{source: af , target: av },{source: af , target: ag },{source: af , target: au },{source: af , target: ax },{source: af , target: as },{source: af , target: at },{source: af , target: ai },{source: af , target: aj },{source: af , target: ax },{source: ag , target: aw },{source: ag , target: av },{source: ag , target: au },{source: ag , target: ax },{source: ag , target: as },{source: ag , target: at },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ax },{source: ad , target: aw },{source: ad , target: av },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: au },{source: ad , target: ax },{source: ad , target: as },{source: ad , target: at },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ax },{source: au , target: aw },{source: au , target: av },{source: au , target: ax },{source: au , target: ax },{source: as , target: aw },{source: as , target: av },{source: as , target: au },{source: as , target: ax },{source: as , target: at },{source: as , target: ax },{source: at , target: aw },{source: at , target: av },{source: at , target: au },{source: at , target: ax },{source: at , target: ax },{source: ai , target: aw },{source: ai , target: av },{source: ai , target: au },{source: ai , target: ax },{source: ai , target: as },{source: ai , target: at },{source: ai , target: aj },{source: ai , target: ax },{source: aj , target: aw },{source: aj , target: av },{source: aj , target: au },{source: aj , target: ax },{source: aj , target: as },{source: aj , target: at },{source: aj , target: ax },{source: ab , target: aw },{source: ab , target: av },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ad },{source: ab , target: au },{source: ab , target: ax },{source: ab , target: as },{source: ab , target: at },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '56.097560975609756098%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'aw','av','ag','ad','au','ax','as','at','ai','aj','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ac af */ var  ac = {id: 'ac', name:'rosalinde'},af = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '58.536585365853658537%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ac ad af ag */ var  ac = nodes[0] ,ad = {id: 'ad', name:'eisenstein'},af = nodes[1] ,ag = {id: 'ag', name:'frank'} ; nodes.push( ad,ag ); links.push( {source: ad , target: ag },{source: ad , target: af },{source: ac , target: ad },{source: ac , target: ag },{source: ac , target: af },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60.975609756097560976%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ag','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ac ad */ var  ac = nodes[0] ,ad = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '63.414634146341463415%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ab ac ad af ag ai aj ao ap ar as au av ax ay */ var  ab = {id: 'ab', name:'adele'},ac = nodes[0] ,ad = nodes[1] ,af = {id: 'af', name:'falke'},ag = {id: 'ag', name:'frank'},ai = {id: 'ai', name:'melanie'},aj = {id: 'aj', name:'faustine'},ao = {id: 'ao', name:'chor'},ap = {id: 'ap', name:'ali_bey'},ar = {id: 'ar', name:'ramusin'},as = {id: 'as', name:'murray'},au = {id: 'au', name:'ida'},av = {id: 'av', name:'orlofsky'},ax = {id: 'ax', name:'damen'},ay = {id: 'ay', name:'mehrere_herren'} ; nodes.push( ab,af,ag,ai,aj,ao,ap,ar,as,au,av,ax,ay ); links.push( {source: ai , target: aj },{source: ai , target: au },{source: ai , target: ax },{source: ai , target: av },{source: ai , target: ar },{source: ai , target: ap },{source: ai , target: as },{source: ai , target: ao },{source: ai , target: ay },{source: aj , target: au },{source: aj , target: ax },{source: aj , target: av },{source: aj , target: ar },{source: aj , target: ap },{source: aj , target: as },{source: aj , target: ao },{source: aj , target: ay },{source: au , target: ax },{source: au , target: av },{source: au , target: ay },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: au },{source: ab , target: ax },{source: ab , target: av },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: af },{source: ab , target: ar },{source: ab , target: ap },{source: ab , target: as },{source: ab , target: ag },{source: ab , target: ao },{source: ab , target: ay },{source: ax , target: ay },{source: av , target: ax },{source: av , target: ay },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: au },{source: ad , target: ax },{source: ad , target: av },{source: ad , target: af },{source: ad , target: ar },{source: ad , target: ap },{source: ad , target: as },{source: ad , target: ag },{source: ad , target: ao },{source: ad , target: ay },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: au },{source: ac , target: ax },{source: ac , target: av },{source: ac , target: ad },{source: ac , target: af },{source: ac , target: ar },{source: ac , target: ap },{source: ac , target: as },{source: ac , target: ag },{source: ac , target: ao },{source: ac , target: ay },{source: af , target: ai },{source: af , target: aj },{source: af , target: au },{source: af , target: ax },{source: af , target: av },{source: af , target: ar },{source: af , target: ap },{source: af , target: as },{source: af , target: ag },{source: af , target: ao },{source: af , target: ay },{source: ar , target: au },{source: ar , target: ax },{source: ar , target: av },{source: ar , target: as },{source: ar , target: ay },{source: ap , target: au },{source: ap , target: ax },{source: ap , target: av },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: ay },{source: as , target: au },{source: as , target: ax },{source: as , target: av },{source: as , target: ay },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: au },{source: ag , target: ax },{source: ag , target: av },{source: ag , target: ar },{source: ag , target: ap },{source: ag , target: as },{source: ag , target: ao },{source: ag , target: ay },{source: ao , target: au },{source: ao , target: ax },{source: ao , target: av },{source: ao , target: ar },{source: ao , target: ap },{source: ao , target: as },{source: ao , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '65.853658536585365854%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ai','aj','au','ab','ax','av','ad','ac','af','ar','ap','as','ag','ao','ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* aa az */ var  aa = {id: 'aa', name:'alfred'},az = {id: 'az', name:'frosch'} ; nodes.push( aa,az ); links.push( {source: aa , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '68.292682926829268293%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'az','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ag */ var  ag = {id: 'ag', name:'frank'} ; nodes.push( ag ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '70.731707317073170732%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ag az */ var  ag = nodes[0] ,az = {id: 'az', name:'frosch'} ; nodes.push( az ); links.push( {source: ag , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '73.170731707317073171%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ab ag au az */ var  ab = {id: 'ab', name:'adele'},ag = nodes[0] ,au = {id: 'au', name:'ida'},az = nodes[1]  ; nodes.push( ab,au ); links.push( {source: ag , target: az },{source: ag , target: au },{source: ab , target: az },{source: ab , target: ag },{source: ab , target: au },{source: au , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75.60975609756097561%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'az','ab','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ad ag */ var  ad = {id: 'ad', name:'eisenstein'},ag = nodes[0]  ; nodes.push( ad ); links.push( {source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '78.048780487804878049%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ad ag az */ var  ad = nodes[0] ,ag = nodes[1] ,az = {id: 'az', name:'frosch'} ; nodes.push( az ); links.push( {source: ag , target: az },{source: ad , target: az },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80.487804878048780488%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'az' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ad ag */ var  ad = nodes[0] ,ag = nodes[1]  ; /* nodes.push(); */ links.push( {source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '82.926829268292682927%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ag az */ var  ag = nodes[0] ,az = {id: 'az', name:'frosch'} ; nodes.push( az ); links.push( {source: ag , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '85.365853658536585366%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ad ae az */ var  ad = {id: 'ad', name:'eisenstein'},ae = {id: 'ae', name:'blind'},az = nodes[0]  ; nodes.push( ad,ae ); links.push( {source: ad , target: az },{source: ad , target: ae },{source: ae , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '87.804878048780487805%' ;
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* aa ac az */ var  aa = {id: 'aa', name:'alfred'},ac = {id: 'ac', name:'rosalinde'},az = nodes[0]  ; nodes.push( aa,ac ); links.push( {source: aa , target: az },{source: aa , target: ac },{source: ac , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '90.243902439024390244%' ;
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'az' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* aa ac ad */ var  aa = nodes[0] ,ac = nodes[1] ,ad = {id: 'ad', name:'eisenstein'} ; nodes.push( ad ); links.push( {source: ac , target: ad },{source: aa , target: ad },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '92.682926829268292683%' ;
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* aa ac ad af ag */ var  aa = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,af = {id: 'af', name:'falke'},ag = {id: 'ag', name:'frank'} ; nodes.push( af,ag ); links.push( {source: af , target: ag },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: ag },{source: aa , target: af },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ag },{source: ad , target: af },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '95.121951219512195122%' ;
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* ab ac ad af ag au az */ var  ab = {id: 'ab', name:'adele'},ac = nodes[0] ,ad = nodes[1] ,af = nodes[2] ,ag = nodes[3] ,au = {id: 'au', name:'ida'},az = {id: 'az', name:'frosch'} ; nodes.push( ab,au,az ); links.push( {source: ag , target: az },{source: ag , target: au },{source: ac , target: az },{source: ac , target: ag },{source: ac , target: au },{source: ac , target: ad },{source: ac , target: af },{source: ab , target: az },{source: ab , target: ag },{source: ab , target: ac },{source: ab , target: au },{source: ab , target: ad },{source: ab , target: af },{source: au , target: az },{source: ad , target: az },{source: ad , target: ag },{source: ad , target: au },{source: ad , target: af },{source: af , target: az },{source: af , target: ag },{source: af , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '97.560975609756097561%' ;
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'az','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* aa ab ac ad af ag av */ var  aa = {id: 'aa', name:'alfred'},ab = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,af = nodes[3] ,ag = nodes[4] ,av = {id: 'av', name:'orlofsky'} ; nodes.push( aa,av ); links.push( {source: ad , target: af },{source: ad , target: av },{source: ad , target: ag },{source: af , target: av },{source: af , target: ag },{source: ab , target: ad },{source: ab , target: af },{source: ab , target: av },{source: ab , target: ac },{source: ab , target: ag },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: av },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ag },{source: ac , target: ad },{source: ac , target: af },{source: ac , target: av },{source: ac , target: ag },{source: ag , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 200000);
