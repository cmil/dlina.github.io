setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'peter'},ab = {id: 'ab', name:'cathrine'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '3.225806451612903226%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '6.451612903225806452%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab ac */ var  ab = nodes[0] ,ac = {id: 'ac', name:'muffel'} ; nodes.push( ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '9.677419354838709677%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab ac */ var  aa = {id: 'aa', name:'peter'},ab = nodes[0] ,ac = nodes[1]  ; nodes.push( aa ); links.push( {source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '12.903225806451612903%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '16.129032258064516129%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa ab ac */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'muffel'} ; nodes.push( ac ); links.push( {source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '19.354838709677419355%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ab ac */ var  ab = nodes[0] ,ac = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '22.580645161290322581%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ac ad */ var  ac = nodes[0] ,ad = {id: 'ad', name:'tempelstolz'} ; nodes.push( ad ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '25.806451612903225806%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ad','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ag ah */ var  ag = {id: 'ag', name:'wilhelmine'},ah = {id: 'ah', name:'wahrmund'} ; nodes.push( ag,ah ); links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '29.032258064516129032%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ae af ag */ var  ae = {id: 'ae', name:'frau_von_birkenhayn'},af = {id: 'af', name:'herr_von_roseneck'},ag = nodes[0]  ; nodes.push( ae,af ); links.push( {source: ae , target: af },{source: ae , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Andrer Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '32.258064516129032258%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* af ag ah */ var  af = nodes[0] ,ag = nodes[1] ,ah = {id: 'ah', name:'wahrmund'} ; nodes.push( ah ); links.push( {source: af , target: ag },{source: af , target: ah },{source: af , target: ag },{source: ag , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '35.483870967741935484%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ae af ag ah */ var  ae = {id: 'ae', name:'frau_von_birkenhayn'},af = nodes[0] ,ag = nodes[1] ,ah = nodes[2]  ; nodes.push( ae ); links.push( {source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: af , target: ag },{source: af , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '38.70967741935483871%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ae af */ var  ae = nodes[0] ,af = nodes[1]  ; /* nodes.push(); */ links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '41.935483870967741935%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ac ad ae af ag */ var  ac = {id: 'ac', name:'muffel'},ad = {id: 'ad', name:'tempelstolz'},ae = nodes[0] ,af = nodes[1] ,ag = {id: 'ag', name:'wilhelmine'} ; nodes.push( ac,ad,ag ); links.push( {source: ad , target: ag },{source: ad , target: af },{source: ad , target: ae },{source: ac , target: ag },{source: ac , target: ad },{source: ac , target: af },{source: ac , target: ae },{source: af , target: ag },{source: ae , target: ag },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '45.161290322580645161%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ad','ac','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ae ag */ var  ae = nodes[0] ,ag = nodes[1]  ; /* nodes.push(); */ links.push( {source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '48.387096774193548387%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ac ae ag */ var  ac = {id: 'ac', name:'muffel'},ae = nodes[0] ,ag = nodes[1]  ; nodes.push( ac ); links.push( {source: ac , target: ae },{source: ac , target: ag },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '51.612903225806451613%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ac ad ae ag */ var  ac = nodes[0] ,ad = {id: 'ad', name:'tempelstolz'},ae = nodes[1] ,ag = nodes[2]  ; nodes.push( ad ); links.push( {source: ad , target: ae },{source: ad , target: ag },{source: ae , target: ag },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '54.838709677419354839%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ae','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ad ag */ var  ad = nodes[0] ,ag = nodes[1]  ; /* nodes.push(); */ links.push( {source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '58.064516129032258065%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ad','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* aa ai */ var  aa = {id: 'aa', name:'peter'},ai = {id: 'ai', name:'brigitte'} ; nodes.push( aa,ai ); links.push( {source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '61.29032258064516129%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* aa af ai */ var  aa = nodes[0] ,af = {id: 'af', name:'herr_von_roseneck'},ai = nodes[1]  ; nodes.push( af ); links.push( {source: af , target: ai },{source: aa , target: af },{source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Andrer Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '64.516129032258064516%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'aa','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* af ah */ var  af = nodes[0] ,ah = {id: 'ah', name:'wahrmund'} ; nodes.push( ah ); links.push( {source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '67.741935483870967742%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* aa af ah */ var  aa = {id: 'aa', name:'peter'},af = nodes[0] ,ah = nodes[1]  ; nodes.push( aa ); links.push( {source: aa , target: ah },{source: aa , target: af },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '70.967741935483870968%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ac af ah */ var  ac = {id: 'ac', name:'muffel'},af = nodes[0] ,ah = nodes[1]  ; nodes.push( ac ); links.push( {source: ac , target: af },{source: ac , target: ah },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '74.193548387096774194%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'af','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ac ag */ var  ac = nodes[0] ,ag = {id: 'ag', name:'wilhelmine'} ; nodes.push( ag ); links.push( {source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '77.419354838709677419%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ag */ var  ag = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80.645161290322580645%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* af ag */ var  af = {id: 'af', name:'herr_von_roseneck'},ag = nodes[0]  ; nodes.push( af ); links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '83.870967741935483871%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ae af ag */ var  ae = {id: 'ae', name:'frau_von_birkenhayn'},af = nodes[0] ,ag = nodes[1]  ; nodes.push( ae ); links.push( {source: ae , target: ag },{source: ae , target: af },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '87.096774193548387097%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ac ad ag */ var  ac = {id: 'ac', name:'muffel'},ad = {id: 'ad', name:'tempelstolz'},ag = nodes[0]  ; nodes.push( ac,ad ); links.push( {source: ad , target: ag },{source: ac , target: ad },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '90.322580645161290323%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* aa ac ad ae ag */ var  aa = {id: 'aa', name:'peter'},ac = nodes[0] ,ad = nodes[1] ,ae = {id: 'ae', name:'frau_von_birkenhayn'},ag = nodes[2]  ; nodes.push( aa,ae ); links.push( {source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ag },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ag },{source: ad , target: ae },{source: ad , target: ag },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '93.548387096774193548%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* aa ab ac ad ae af ag */ var  aa = nodes[0] ,ab = {id: 'ab', name:'cathrine'},ac = nodes[1] ,ad = nodes[2] ,ae = nodes[3] ,af = {id: 'af', name:'herr_von_roseneck'},ag = nodes[4]  ; nodes.push( ab,af ); links.push( {source: ab , target: ac },{source: ab , target: ad },{source: ab , target: af },{source: ab , target: ae },{source: ab , target: ag },{source: ac , target: ad },{source: ac , target: af },{source: ac , target: ae },{source: ac , target: ag },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ae },{source: aa , target: ag },{source: ad , target: af },{source: ad , target: ae },{source: ad , target: ag },{source: af , target: ag },{source: ae , target: af },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '96.774193548387096774%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ab','ac','aa','af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ad ae ai */ var  ad = nodes[0] ,ae = nodes[1] ,ai = {id: 'ai', name:'brigitte'} ; nodes.push( ai ); links.push( {source: ad , target: ai },{source: ad , target: ae },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreyzehender Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 150000);
