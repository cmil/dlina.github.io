setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'sylva'},ab = {id: 'ab', name:'malström'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '1.470588235294117647%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ac */ var  aa = nodes[0] ,ac = {id: 'ac', name:'monaldeschi'} ; nodes.push( ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '2.941176470588235294%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ac */ var  aa = nodes[0] ,ab = {id: 'ab', name:'malström'},ac = nodes[1]  ; nodes.push( ab ); links.push( {source: ab , target: ac },{source: aa , target: ab },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '4.411764705882352941%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab ac ad ae */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = {id: 'ad', name:'brahe'},ae = {id: 'ae', name:'schnur'} ; nodes.push( ad,ae ); links.push( {source: ad , target: ae },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ac },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ae },{source: aa , target: ac },{source: ac , target: ad },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '5.882352941176470588%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ab ad ae */ var  aa = nodes[0] ,ab = nodes[1] ,ad = nodes[2] ,ae = nodes[3]  ; /* nodes.push(); */ links.push( {source: ad , target: ae },{source: ad , target: ae },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ae },{source: ab , target: ae },{source: ab , target: ad },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '7.352941176470588235%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ae','ad','aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* af */ var  af = {id: 'af', name:'santinelli'} ; nodes.push( af ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '8.823529411764705882%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ac af */ var  ac = {id: 'ac', name:'monaldeschi'},af = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '10.294117647058823529%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* af */ var  af = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '11.764705882352941176%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ad ag */ var  ad = {id: 'ad', name:'brahe'},ag = {id: 'ag', name:'christine'} ; nodes.push( ad,ag ); links.push( {source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '13.235294117647058824%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ag */ var  ag = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '14.705882352941176471%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ac ag */ var  ac = {id: 'ac', name:'monaldeschi'},ag = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '16.176470588235294118%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ag */ var  ag = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '17.647058823529411765%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* aa ad ah */ var  aa = {id: 'aa', name:'sylva'},ad = {id: 'ad', name:'brahe'},ah = {id: 'ah', name:'diener'} ; nodes.push( aa,ad,ah ); links.push( {source: aa , target: ad },{source: aa , target: ah },{source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '19.117647058823529412%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aa ac ad ah */ var  aa = nodes[0] ,ac = {id: 'ac', name:'monaldeschi'},ad = nodes[1] ,ah = nodes[2]  ; nodes.push( ac ); links.push( {source: ac , target: ad },{source: ac , target: ah },{source: ad , target: ah },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '20.588235294117647059%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ad','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* aa ac */ var  aa = nodes[0] ,ac = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '22.058823529411764706%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* aa ab ac ad */ var  aa = nodes[0] ,ab = {id: 'ab', name:'malström'},ac = nodes[1] ,ad = {id: 'ad', name:'brahe'} ; nodes.push( ab,ad ); links.push( {source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '23.529411764705882353%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* aa ab ad */ var  aa = nodes[0] ,ab = nodes[1] ,ad = nodes[2]  ; /* nodes.push(); */ links.push( {source: aa , target: ad },{source: aa , target: ab },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '25%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ad','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* aa */ var  aa = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '26.470588235294117647%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ag */ var  ag = {id: 'ag', name:'christine'} ; nodes.push( ag ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '27.941176470588235294%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ad ag ah */ var  ad = {id: 'ad', name:'brahe'},ag = nodes[0] ,ah = {id: 'ah', name:'diener'} ; nodes.push( ad,ah ); links.push( {source: ag , target: ah },{source: ad , target: ah },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '29.411764705882352941%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ad af ag */ var  ad = nodes[0] ,af = {id: 'af', name:'santinelli'},ag = nodes[1]  ; nodes.push( af ); links.push( {source: af , target: ag },{source: ad , target: ag },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '30.882352941176470588%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ag','af','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ab ae */ var  ab = {id: 'ab', name:'malström'},ae = {id: 'ae', name:'schnur'} ; nodes.push( ab,ae ); links.push( {source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '32.352941176470588235%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ab ac ae */ var  ab = nodes[0] ,ac = {id: 'ac', name:'monaldeschi'},ae = nodes[1]  ; nodes.push( ac ); links.push( {source: ac , target: ae },{source: ab , target: ae },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.823529411764705882%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ab ac ae af */ var  ab = nodes[0] ,ac = nodes[1] ,ae = nodes[2] ,af = {id: 'af', name:'santinelli'} ; nodes.push( af ); links.push( {source: ab , target: af },{source: ab , target: ac },{source: ab , target: ae },{source: ac , target: af },{source: ac , target: ae },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '35.294117647058823529%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'af','ab','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ac */ var  ac = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '36.764705882352941176%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ac ag */ var  ac = nodes[0] ,ag = {id: 'ag', name:'christine'} ; nodes.push( ag ); links.push( {source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '38.235294117647058824%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ag','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ad */ var  ad = {id: 'ad', name:'brahe'} ; nodes.push( ad ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '39.705882352941176471%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ad ag */ var  ad = nodes[0] ,ag = {id: 'ag', name:'christine'} ; nodes.push( ag ); links.push( {source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '41.176470588235294118%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ab ad */ var  ab = {id: 'ab', name:'malström'},ad = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '42.647058823529411765%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ab ad ae */ var  ab = nodes[0] ,ad = nodes[1] ,ae = {id: 'ae', name:'schnur'} ; nodes.push( ae ); links.push( {source: ad , target: ae },{source: ab , target: ae },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '44.117647058823529412%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ab ac ae */ var  ab = nodes[0] ,ac = {id: 'ac', name:'monaldeschi'},ae = nodes[1]  ; nodes.push( ac ); links.push( {source: ac , target: ae },{source: ab , target: ac },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '45.588235294117647059%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ae','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ac */ var  ac = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '47.058823529411764706%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ac af */ var  ac = nodes[0] ,af = {id: 'af', name:'santinelli'} ; nodes.push( af ); links.push( {source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '48.529411764705882353%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ac','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ab ad ag ai aj */ var  ab = {id: 'ab', name:'malström'},ad = {id: 'ad', name:'brahe'},ag = {id: 'ag', name:'christine'},ai = {id: 'ai', name:'rosenhane'},aj = {id: 'aj', name:'einzelne_stimmen'} ; nodes.push( ab,ad,ag,ai,aj ); links.push( {source: ag , target: ai },{source: ag , target: aj },{source: ad , target: ag },{source: ad , target: ai },{source: ad , target: aj },{source: ab , target: ag },{source: ab , target: ad },{source: ab , target: ai },{source: ab , target: aj },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ad','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ac ag ai aj */ var  ac = {id: 'ac', name:'monaldeschi'},ag = nodes[0] ,ai = nodes[1] ,aj = nodes[2]  ; nodes.push( ac ); links.push( {source: ac , target: aj },{source: ac , target: ai },{source: ac , target: ag },{source: ai , target: aj },{source: ag , target: aj },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '51.470588235294117647%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ac af ag aj */ var  ac = nodes[0] ,af = {id: 'af', name:'santinelli'},ag = nodes[1] ,aj = nodes[2]  ; nodes.push( af ); links.push( {source: af , target: ag },{source: af , target: aj },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: aj },{source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '52.941176470588235294%' ;
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'af','ac','ag','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* aa */ var  aa = {id: 'aa', name:'sylva'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '54.411764705882352941%' ;
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* aa ac ad */ var  aa = nodes[0] ,ac = {id: 'ac', name:'monaldeschi'},ad = {id: 'ad', name:'brahe'} ; nodes.push( ac,ad ); links.push( {source: ac , target: ad },{source: aa , target: ad },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '55.882352941176470588%' ;
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* ac ad */ var  ac = nodes[0] ,ad = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '57.352941176470588235%' ;
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* ac */ var  ac = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '58.823529411764705882%' ;
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* aa ac */ var  aa = {id: 'aa', name:'sylva'},ac = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60.294117647058823529%' ;
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* ac ag */ var  ac = nodes[0] ,ag = {id: 'ag', name:'christine'} ; nodes.push( ag ); links.push( {source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '61.764705882352941176%' ;
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* ag */ var  ag = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '63.235294117647058824%' ;
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* af ag */ var  af = {id: 'af', name:'santinelli'},ag = nodes[0]  ; nodes.push( af ); links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '64.705882352941176471%' ;
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* ad ag */ var  ad = {id: 'ad', name:'brahe'},ag = nodes[0]  ; nodes.push( ad ); links.push( {source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.176470588235294118%' ;
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46');nodes.sort(compare); /* aa ad ag */ var  aa = {id: 'aa', name:'sylva'},ad = nodes[0] ,ag = nodes[1]  ; nodes.push( aa ); links.push( {source: aa , target: ag },{source: aa , target: ad },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '67.647058823529411765%' ;
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47');nodes.sort(compare); /* aa ad ae ag */ var  aa = nodes[0] ,ad = nodes[1] ,ae = {id: 'ae', name:'schnur'},ag = nodes[2]  ; nodes.push( ae ); links.push( {source: ae , target: ag },{source: ad , target: ag },{source: ad , target: ae },{source: aa , target: ag },{source: aa , target: ae },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '69.117647058823529412%' ;
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'ag','ae','ad','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48');nodes.sort(compare); /* ab ac */ var  ab = {id: 'ab', name:'malström'},ac = {id: 'ac', name:'monaldeschi'} ; nodes.push( ab,ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '70.588235294117647059%' ;
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49');nodes.sort(compare); /* aa ac */ var  aa = {id: 'aa', name:'sylva'},ac = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '72.058823529411764706%' ;
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'ac','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50');nodes.sort(compare); /* ag */ var  ag = {id: 'ag', name:'christine'} ; nodes.push( ag ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '73.529411764705882353%' ;
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51');nodes.sort(compare); /* af ag */ var  af = {id: 'af', name:'santinelli'},ag = nodes[0]  ; nodes.push( af ); links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75%' ;
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52');nodes.sort(compare); /* ag */ var  ag = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '76.470588235294117647%' ;
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53');nodes.sort(compare); /* aa ag */ var  aa = {id: 'aa', name:'sylva'},ag = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '77.941176470588235294%' ;
}, 260000);

setTimeout(function() { console.log('remv53'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 263750);

setTimeout(function() { console.log('load54');nodes.sort(compare); /* ag */ var  ag = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '79.411764705882352941%' ;
}, 265000);

setTimeout(function() { console.log('remv54'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 268750);

setTimeout(function() { console.log('load55');nodes.sort(compare); /* ae ag */ var  ae = {id: 'ae', name:'schnur'},ag = nodes[0]  ; nodes.push( ae ); links.push( {source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80.882352941176470588%' ;
}, 270000);

setTimeout(function() { console.log('remv55'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 273750);

setTimeout(function() { console.log('load56');nodes.sort(compare); /* ab ad ae ag */ var  ab = {id: 'ab', name:'malström'},ad = {id: 'ad', name:'brahe'},ae = nodes[0] ,ag = nodes[1]  ; nodes.push( ab,ad ); links.push( {source: ae , target: ag },{source: ad , target: ag },{source: ad , target: ae },{source: ad , target: ae },{source: ae , target: ag },{source: ab , target: ag },{source: ab , target: ae },{source: ab , target: ad },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '82.352941176470588235%' ;
}, 275000);

setTimeout(function() { console.log('remv56'); var rm = [ 'ae','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 278750);

setTimeout(function() { console.log('load57');nodes.sort(compare); /* ab ac ag */ var  ab = nodes[0] ,ac = {id: 'ac', name:'monaldeschi'},ag = nodes[1]  ; nodes.push( ac ); links.push( {source: ab , target: ac },{source: ab , target: ag },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '83.823529411764705882%' ;
}, 280000);

setTimeout(function() { console.log('remv57'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 283750);

setTimeout(function() { console.log('load58');nodes.sort(compare); /* ag */ var  ag = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '85.294117647058823529%' ;
}, 285000);

setTimeout(function() { console.log('remv58'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 288750);

setTimeout(function() { console.log('load59');nodes.sort(compare); /* ag ak */ var  ag = nodes[0] ,ak = {id: 'ak', name:'der_prior'} ; nodes.push( ak ); links.push( {source: ag , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '86.764705882352941176%' ;
}, 290000);

setTimeout(function() { console.log('remv59'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 293750);

setTimeout(function() { console.log('load60');nodes.sort(compare); /* af ag ak */ var  af = {id: 'af', name:'santinelli'},ag = nodes[0] ,ak = nodes[1]  ; nodes.push( af ); links.push( {source: ag , target: ak },{source: af , target: ag },{source: af , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '88.235294117647058824%' ;
}, 295000);

setTimeout(function() { console.log('remv60'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 298750);

setTimeout(function() { console.log('load61');nodes.sort(compare); /* ac af ak */ var  ac = {id: 'ac', name:'monaldeschi'},af = nodes[0] ,ak = nodes[1]  ; nodes.push( ac ); links.push( {source: ac , target: af },{source: ac , target: ak },{source: af , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '89.705882352941176471%' ;
}, 300000);

setTimeout(function() { console.log('remv61'); var rm = [ 'ac','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 303750);

setTimeout(function() { console.log('load62');nodes.sort(compare); /* af ag */ var  af = nodes[0] ,ag = {id: 'ag', name:'christine'} ; nodes.push( ag ); links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '91.176470588235294118%' ;
}, 305000);

setTimeout(function() { console.log('remv62'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 308750);

setTimeout(function() { console.log('load63');nodes.sort(compare); /* ac ag */ var  ac = {id: 'ac', name:'monaldeschi'},ag = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '92.647058823529411765%' ;
}, 310000);

setTimeout(function() { console.log('remv63'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 313750);

setTimeout(function() { console.log('load64');nodes.sort(compare); /* aa ac */ var  aa = {id: 'aa', name:'sylva'},ac = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '94.117647058823529412%' ;
}, 315000);

setTimeout(function() { console.log('remv64'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 318750);

setTimeout(function() { console.log('load65');nodes.sort(compare); /* ac af ak */ var  ac = nodes[0] ,af = {id: 'af', name:'santinelli'},ak = {id: 'ak', name:'der_prior'} ; nodes.push( af,ak ); links.push( {source: af , target: ak },{source: af , target: ak },{source: ac , target: af },{source: ac , target: ak },{source: ac , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechszehnte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '95.588235294117647059%' ;
}, 320000);

setTimeout(function() { console.log('remv65'); var rm = [ 'af','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 323750);

setTimeout(function() { console.log('load66');nodes.sort(compare); /* aa ab ak */ var  aa = {id: 'aa', name:'sylva'},ab = {id: 'ab', name:'malström'},ak = nodes[0]  ; nodes.push( aa,ab ); links.push( {source: ab , target: ak },{source: aa , target: ab },{source: aa , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '97.058823529411764706%' ;
}, 325000);

setTimeout(function() { console.log('remv66'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 328750);

setTimeout(function() { console.log('load67');nodes.sort(compare); /* ab ad ak */ var  ab = nodes[0] ,ad = {id: 'ad', name:'brahe'},ak = nodes[1]  ; nodes.push( ad ); links.push( {source: ad , target: ak },{source: ab , target: ad },{source: ab , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '98.529411764705882353%' ;
}, 330000);

setTimeout(function() { console.log('remv67'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 333750);

setTimeout(function() { console.log('load68');nodes.sort(compare); /* ab ad ag ak */ var  ab = nodes[0] ,ad = nodes[1] ,ag = {id: 'ag', name:'christine'},ak = nodes[2]  ; nodes.push( ag ); links.push( {source: ag , target: ak },{source: ad , target: ag },{source: ad , target: ak },{source: ab , target: ag },{source: ab , target: ad },{source: ab , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 335000);
