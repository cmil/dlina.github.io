setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac */ var  aa = {id: 'aa', name:'constanze_die_sich_stellt_als_ob_sie_das_gesicht_vor_schmerz_von_ihm_wegwendete_aber_dabey_lacht'},ab = {id: 'ab', name:'clärchen_allein'},ac = {id: 'ac', name:'bast_ebenfalls_heimlich_mehr_gegen_nikolo'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ac },{source: ab , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '2.439024390243902439%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac ad ae */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = {id: 'ad', name:'erster_poet'},ae = {id: 'ae', name:'zweyter_poet'} ; nodes.push( ad,ae ); links.push( {source: ad , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: ae },{source: aa , target: ab },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '4.878048780487804878%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ad','ac','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '7.317073170731707317%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '9.756097560975609756%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ab af */ var  ab = nodes[0] ,af = {id: 'af', name:'nikolo'} ; nodes.push( af ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '12.195121951219512195%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ab ag */ var  ab = nodes[0] ,ag = {id: 'ag', name:'albert'} ; nodes.push( ag ); links.push( {source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '14.634146341463414634%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ab af */ var  ab = nodes[0] ,af = {id: 'af', name:'nikolo'} ; nodes.push( af ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '17.073170731707317073%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ab ac af ah */ var  ab = nodes[0] ,ac = {id: 'ac', name:'bast_ebenfalls_heimlich_mehr_gegen_nikolo'},af = nodes[1] ,ah = {id: 'ah', name:'trübe_zieht_ihn_fort_erst_allein'} ; nodes.push( ac,ah ); links.push( {source: ac , target: ah },{source: ac , target: af },{source: ab , target: ac },{source: ab , target: ah },{source: ab , target: af },{source: ab , target: ac },{source: af , target: ah },{source: ac , target: ah },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '19.512195121951219512%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ab','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* aa ac ah */ var  aa = {id: 'aa', name:'constanze_die_sich_stellt_als_ob_sie_das_gesicht_vor_schmerz_von_ihm_wegwendete_aber_dabey_lacht'},ac = nodes[0] ,ah = nodes[1]  ; nodes.push( aa ); links.push( {source: aa , target: ah },{source: aa , target: ac },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '21.951219512195121951%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ac ah */ var  ac = nodes[0] ,ah = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '24.39024390243902439%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aa ac af ah ai */ var  aa = {id: 'aa', name:'constanze_die_sich_stellt_als_ob_sie_das_gesicht_vor_schmerz_von_ihm_wegwendete_aber_dabey_lacht'},ac = nodes[0] ,af = {id: 'af', name:'nikolo'},ah = nodes[1] ,ai = {id: 'ai', name:'lukrezia_zu_bast'} ; nodes.push( aa,af,ai ); links.push( {source: af , target: ah },{source: af , target: ai },{source: ac , target: af },{source: ac , target: ah },{source: ac , target: ai },{source: ah , target: ai },{source: aa , target: af },{source: aa , target: ac },{source: aa , target: ah },{source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '26.829268292682926829%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'af','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aa ac ah */ var  aa = nodes[0] ,ac = nodes[1] ,ah = nodes[2]  ; /* nodes.push(); */ links.push( {source: ac , target: ah },{source: aa , target: ah },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '29.268292682926829268%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* aa ac af ag ah ai aj */ var  aa = nodes[0] ,ac = nodes[1] ,af = {id: 'af', name:'nikolo'},ag = {id: 'ag', name:'albert'},ah = nodes[2] ,ai = {id: 'ai', name:'lukrezia_zu_bast'},aj = {id: 'aj', name:'virginia_zu_nikolo'} ; nodes.push( af,ag,ai,aj ); links.push( {source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ah },{source: ai , target: aj },{source: aa , target: ag },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ah },{source: aa , target: ac },{source: aa , target: af },{source: ah , target: ai },{source: ah , target: aj },{source: ac , target: ag },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ah },{source: ac , target: af },{source: af , target: ag },{source: af , target: ai },{source: af , target: aj },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreyzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '31.707317073170731707%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ai','aj','ah','ac','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aa ag */ var  aa = nodes[0] ,ag = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '34.146341463414634146%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ab ag */ var  ab = {id: 'ab', name:'clärchen_allein'},ag = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Funfzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '36.585365853658536585%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ab ak */ var  ab = nodes[0] ,ak = {id: 'ak', name:'orpheus'} ; nodes.push( ak ); links.push( {source: ab , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechszehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '39.024390243902439024%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* aa ab ag */ var  aa = {id: 'aa', name:'constanze_die_sich_stellt_als_ob_sie_das_gesicht_vor_schmerz_von_ihm_wegwendete_aber_dabey_lacht'},ab = nodes[0] ,ag = {id: 'ag', name:'albert'} ; nodes.push( aa,ag ); links.push( {source: ab , target: ag },{source: aa , target: ab },{source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnte Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '41.463414634146341463%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* aa ab ac af ag */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'bast_ebenfalls_heimlich_mehr_gegen_nikolo'},af = {id: 'af', name:'nikolo'},ag = nodes[2]  ; nodes.push( ac,af ); links.push( {source: ac , target: ag },{source: ac , target: af },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ag },{source: aa , target: ac },{source: aa , target: af },{source: ab , target: ac },{source: ab , target: ag },{source: ab , target: ac },{source: ab , target: af },{source: ac , target: ag },{source: ac , target: af },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '43.902439024390243902%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ag','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* aa ab ac ah */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ah = {id: 'ah', name:'trübe_zieht_ihn_fort_erst_allein'} ; nodes.push( ah ); links.push( {source: ac , target: ah },{source: ac , target: ah },{source: aa , target: ah },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ah },{source: ab , target: ah },{source: ab , target: ac },{source: ab , target: ah },{source: aa , target: ah },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ah },{source: aa , target: ah },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '46.341463414634146341%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ah','ac','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ab ad ae ai aj ak */ var  ab = nodes[0] ,ad = {id: 'ad', name:'erster_poet'},ae = {id: 'ae', name:'zweyter_poet'},ai = {id: 'ai', name:'lukrezia_zu_bast'},aj = {id: 'aj', name:'virginia_zu_nikolo'},ak = {id: 'ak', name:'orpheus'} ; nodes.push( ad,ae,ai,aj,ak ); links.push( {source: ad , target: ae },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ak },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ak },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ak },{source: ai , target: aj },{source: ai , target: ak },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '48.78048780487804878%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ac ad ae ah ai aj ak al */ var  ac = {id: 'ac', name:'bast_ebenfalls_heimlich_mehr_gegen_nikolo'},ad = nodes[0] ,ae = nodes[1] ,ah = {id: 'ah', name:'trübe_zieht_ihn_fort_erst_allein'},ai = nodes[2] ,aj = nodes[3] ,ak = nodes[4] ,al = {id: 'al', name:'die_narren'} ; nodes.push( ac,ah,al ); links.push( {source: ac , target: ah },{source: ac , target: al },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ak },{source: ac , target: aj },{source: ac , target: ai },{source: ah , target: al },{source: ah , target: ak },{source: ah , target: aj },{source: ah , target: ai },{source: ad , target: ah },{source: ad , target: al },{source: ad , target: ae },{source: ad , target: ak },{source: ad , target: aj },{source: ad , target: ai },{source: ae , target: ah },{source: ae , target: al },{source: ae , target: ak },{source: ae , target: aj },{source: ae , target: ai },{source: ak , target: al },{source: aj , target: al },{source: aj , target: ak },{source: ai , target: al },{source: ai , target: ak },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Ein und zwanzigster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '51.21951219512195122%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* aa ab ac ad ae af ag ah ai aj ak al */ var  aa = {id: 'aa', name:'constanze_die_sich_stellt_als_ob_sie_das_gesicht_vor_schmerz_von_ihm_wegwendete_aber_dabey_lacht'},ab = {id: 'ab', name:'clärchen_allein'},ac = nodes[0] ,ad = nodes[1] ,ae = nodes[2] ,af = {id: 'af', name:'nikolo'},ag = {id: 'ag', name:'albert'},ah = nodes[3] ,ai = nodes[4] ,aj = nodes[5] ,ak = nodes[6] ,al = nodes[7]  ; nodes.push( aa,ab,af,ag ); links.push( {source: af , target: ag },{source: af , target: ah },{source: af , target: ak },{source: af , target: aj },{source: af , target: ai },{source: af , target: al },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ac },{source: ab , target: ah },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ak },{source: ab , target: aj },{source: ab , target: ai },{source: ab , target: al },{source: ag , target: ah },{source: ag , target: ak },{source: ag , target: aj },{source: ag , target: ai },{source: ag , target: al },{source: aa , target: af },{source: aa , target: ab },{source: aa , target: ag },{source: aa , target: ac },{source: aa , target: ah },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ak },{source: aa , target: aj },{source: aa , target: ai },{source: aa , target: al },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ak },{source: ac , target: aj },{source: ac , target: ai },{source: ac , target: al },{source: ah , target: ak },{source: ah , target: aj },{source: ah , target: ai },{source: ah , target: al },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ae },{source: ad , target: ak },{source: ad , target: aj },{source: ad , target: ai },{source: ad , target: al },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ak },{source: ae , target: aj },{source: ae , target: ai },{source: ae , target: al },{source: ak , target: al },{source: aj , target: ak },{source: aj , target: al },{source: ai , target: ak },{source: ai , target: aj },{source: ai , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '22. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwey und zwanzigster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '53.658536585365853659%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'af','ac','ah','ad','ae','ak','aj','ai','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* aa ab ag */ var  aa = nodes[0] ,ab = nodes[1] ,ag = nodes[2]  ; /* nodes.push(); */ links.push( {source: aa , target: ag },{source: aa , target: ab },{source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '56.097560975609756098%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* aa ab af ag */ var  aa = nodes[0] ,ab = nodes[1] ,af = {id: 'af', name:'nikolo'},ag = nodes[2]  ; nodes.push( af ); links.push( {source: ab , target: af },{source: ab , target: ag },{source: af , target: ag },{source: aa , target: ab },{source: aa , target: af },{source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '58.536585365853658537%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60.975609756097560976%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ab af */ var  ab = nodes[0] ,af = {id: 'af', name:'nikolo'} ; nodes.push( af ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '63.414634146341463415%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ab af ah */ var  ab = nodes[0] ,af = nodes[1] ,ah = {id: 'ah', name:'trübe_zieht_ihn_fort_erst_allein'} ; nodes.push( ah ); links.push( {source: ab , target: ah },{source: ab , target: af },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '65.853658536585365854%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ab ad ae ah ai aj ak */ var  ab = nodes[0] ,ad = {id: 'ad', name:'erster_poet'},ae = {id: 'ae', name:'zweyter_poet'},ah = nodes[1] ,ai = {id: 'ai', name:'lukrezia_zu_bast'},aj = {id: 'aj', name:'virginia_zu_nikolo'},ak = {id: 'ak', name:'orpheus'} ; nodes.push( ad,ae,ai,aj,ak ); links.push( {source: ab , target: ah },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: aj },{source: ab , target: ai },{source: ab , target: ak },{source: ah , target: aj },{source: ah , target: ai },{source: ah , target: ak },{source: ad , target: ah },{source: ad , target: ae },{source: ad , target: aj },{source: ad , target: ai },{source: ad , target: ak },{source: ae , target: ah },{source: ae , target: aj },{source: ae , target: ai },{source: ae , target: ak },{source: aj , target: ak },{source: ai , target: aj },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '68.292682926829268293%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ad ae ag ah ai aj ak */ var  ad = nodes[0] ,ae = nodes[1] ,ag = {id: 'ag', name:'albert'},ah = nodes[2] ,ai = nodes[3] ,aj = nodes[4] ,ak = nodes[5]  ; nodes.push( ag ); links.push( {source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ah },{source: ag , target: ak },{source: ad , target: ag },{source: ad , target: ae },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ah },{source: ad , target: ak },{source: ae , target: ag },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ah },{source: ae , target: ak },{source: ai , target: aj },{source: ai , target: ak },{source: aj , target: ak },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '70.731707317073170732%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ab ad ae ah ai aj ak */ var  ab = {id: 'ab', name:'clärchen_allein'},ad = nodes[0] ,ae = nodes[1] ,ah = nodes[2] ,ai = nodes[3] ,aj = nodes[4] ,ak = nodes[5]  ; nodes.push( ab ); links.push( {source: ab , target: ah },{source: ab , target: ak },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ad },{source: ab , target: ae },{source: ah , target: ak },{source: ah , target: ai },{source: ah , target: aj },{source: ai , target: ak },{source: ai , target: aj },{source: aj , target: ak },{source: ad , target: ah },{source: ad , target: ak },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ae },{source: ae , target: ah },{source: ae , target: ak },{source: ae , target: ai },{source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '73.170731707317073171%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ah','ai','aj','ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* aa ab ac ag ak */ var  aa = {id: 'aa', name:'constanze_die_sich_stellt_als_ob_sie_das_gesicht_vor_schmerz_von_ihm_wegwendete_aber_dabey_lacht'},ab = nodes[0] ,ac = {id: 'ac', name:'bast_ebenfalls_heimlich_mehr_gegen_nikolo'},ag = {id: 'ag', name:'albert'},ak = nodes[1]  ; nodes.push( aa,ac,ag ); links.push( {source: aa , target: ab },{source: aa , target: ak },{source: aa , target: ac },{source: aa , target: ag },{source: ab , target: ak },{source: ab , target: ac },{source: ab , target: ag },{source: ac , target: ak },{source: ac , target: ag },{source: ag , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75.60975609756097561%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ak','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* aa ab ac ah */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ah = {id: 'ah', name:'trübe_zieht_ihn_fort_erst_allein'} ; nodes.push( ah ); links.push( {source: ab , target: ah },{source: ab , target: ac },{source: ac , target: ah },{source: aa , target: ah },{source: aa , target: ab },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '78.048780487804878049%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ah','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80.487804878048780488%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ab ah */ var  ab = nodes[0] ,ah = {id: 'ah', name:'trübe_zieht_ihn_fort_erst_allein'} ; nodes.push( ah ); links.push( {source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '82.926829268292682927%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* aa ab ag ak */ var  aa = {id: 'aa', name:'constanze_die_sich_stellt_als_ob_sie_das_gesicht_vor_schmerz_von_ihm_wegwendete_aber_dabey_lacht'},ab = nodes[0] ,ag = {id: 'ag', name:'albert'},ak = {id: 'ak', name:'orpheus'} ; nodes.push( aa,ag,ak ); links.push( {source: aa , target: ak },{source: aa , target: ab },{source: aa , target: ag },{source: ab , target: ak },{source: ab , target: ag },{source: ag , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreyzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '85.365853658536585366%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'aa','ak','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ab af */ var  ab = nodes[0] ,af = {id: 'af', name:'nikolo'} ; nodes.push( af ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '87.804878048780487805%' ;
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* aa ab af ag ah ak */ var  aa = {id: 'aa', name:'constanze_die_sich_stellt_als_ob_sie_das_gesicht_vor_schmerz_von_ihm_wegwendete_aber_dabey_lacht'},ab = nodes[0] ,af = nodes[1] ,ag = {id: 'ag', name:'albert'},ah = {id: 'ah', name:'trübe_zieht_ihn_fort_erst_allein'},ak = {id: 'ak', name:'orpheus'} ; nodes.push( aa,ag,ah,ak ); links.push( {source: ah , target: ak },{source: ag , target: ah },{source: ag , target: ak },{source: aa , target: ah },{source: aa , target: ag },{source: aa , target: ak },{source: aa , target: ab },{source: aa , target: af },{source: ab , target: ah },{source: ab , target: ag },{source: ab , target: ak },{source: ab , target: af },{source: af , target: ah },{source: af , target: ag },{source: af , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Funfzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '90.243902439024390244%' ;
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'ag','ak','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* aa ab ah */ var  aa = nodes[0] ,ab = nodes[1] ,ah = nodes[2]  ; /* nodes.push(); */ links.push( {source: aa , target: ah },{source: aa , target: ab },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechszehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '92.682926829268292683%' ;
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* aa ab af ag ah ak */ var  aa = nodes[0] ,ab = nodes[1] ,af = {id: 'af', name:'nikolo'},ag = {id: 'ag', name:'albert'},ah = nodes[2] ,ak = {id: 'ak', name:'orpheus'} ; nodes.push( af,ag,ak ); links.push( {source: af , target: ak },{source: af , target: ah },{source: af , target: ag },{source: ab , target: af },{source: ab , target: ak },{source: ab , target: ah },{source: ab , target: ag },{source: aa , target: af },{source: aa , target: ab },{source: aa , target: ak },{source: aa , target: ah },{source: aa , target: ag },{source: ah , target: ak },{source: ag , target: ak },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '95.121951219512195122%' ;
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* aa ab ac ag ah ak */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'bast_ebenfalls_heimlich_mehr_gegen_nikolo'},ag = nodes[2] ,ah = nodes[3] ,ak = nodes[4]  ; nodes.push( ac ); links.push( {source: ah , target: ak },{source: ac , target: ah },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ak },{source: ag , target: ah },{source: ag , target: ah },{source: ag , target: ak },{source: ah , target: ak },{source: aa , target: ah },{source: aa , target: ac },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ak },{source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ah },{source: ab , target: ac },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ak },{source: ab , target: ac },{source: ac , target: ah },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '97.560975609756097561%' ;
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* ab ac ad ae af ag ah ai aj ak */ var  ab = nodes[0] ,ac = nodes[1] ,ad = {id: 'ad', name:'erster_poet'},ae = {id: 'ae', name:'zweyter_poet'},af = {id: 'af', name:'nikolo'},ag = nodes[2] ,ah = nodes[3] ,ai = {id: 'ai', name:'lukrezia_zu_bast'},aj = {id: 'aj', name:'virginia_zu_nikolo'},ak = nodes[4]  ; nodes.push( ad,ae,af,ai,aj ); links.push( {source: ac , target: ag },{source: ac , target: ah },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: ai },{source: ac , target: aj },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: ai },{source: ag , target: aj },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: ai },{source: ah , target: aj },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: af , target: ai },{source: af , target: aj },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: af },{source: ad , target: ae },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: ai },{source: ad , target: aj },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: af },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: ai },{source: ae , target: aj },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: aj },{source: aj , target: ak },{source: ab , target: ac },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: af },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ak },{source: ab , target: ai },{source: ab , target: aj },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: aj },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Letzter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 200000);
