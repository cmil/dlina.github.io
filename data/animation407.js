setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'kaiser'},ab = {id: 'ab', name:'kaiserin'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'I.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '5.882352941176470588%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ac */ var  aa = nodes[0] ,ac = {id: 'ac', name:'kaspers'} ; nodes.push( ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'II.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '11.764705882352941176%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'aa','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab ad */ var  ab = {id: 'ab', name:'kaiserin'},ad = {id: 'ad', name:'der_ritter'} ; nodes.push( ab,ad ); links.push( {source: ab , target: ad },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'III.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '17.647058823529411765%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ac ad */ var  aa = {id: 'aa', name:'kaiser'},ac = {id: 'ac', name:'kaspers'},ad = nodes[0]  ; nodes.push( aa,ac ); links.push( {source: aa , target: ad },{source: aa , target: ac },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'IV.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '23.529411764705882353%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ac ad */ var  ac = nodes[0] ,ad = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'V.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '29.411764705882352941%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ab ad */ var  ab = {id: 'ab', name:'kaiserin'},ad = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'VI.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '35.294117647058823529%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa ad */ var  aa = {id: 'aa', name:'kaiser'},ad = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'VII.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '41.176470588235294118%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aa ab ad */ var  aa = nodes[0] ,ab = {id: 'ab', name:'kaiserin'},ad = nodes[1]  ; nodes.push( ab ); links.push( {source: ab , target: ad },{source: aa , target: ad },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'VIII.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '47.058823529411764706%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* aa ad */ var  aa = nodes[0] ,ad = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'IX.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '52.941176470588235294%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* aa ab ad */ var  aa = nodes[0] ,ab = {id: 'ab', name:'kaiserin'},ad = nodes[1]  ; nodes.push( ab ); links.push( {source: ab , target: ad },{source: aa , target: ad },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'X.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '58.823529411764705882%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aa ab ad */ var  aa = nodes[0] ,ab = nodes[1] ,ad = nodes[2]  ; /* nodes.push(); */ links.push( {source: ab , target: ad },{source: aa , target: ad },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'XI.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '64.705882352941176471%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aa ab ac ad ae */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'kaspers'},ad = nodes[2] ,ae = {id: 'ae', name:'matrosen'} ; nodes.push( ac,ae ); links.push( {source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ab },{source: aa , target: ac },{source: ad , target: ae },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ac },{source: ac , target: ad },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'XII.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '70.588235294117647059%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'aa','ad','ae','ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* af ag ah ai aj ak */ var  af = {id: 'af', name:'chor_der_schlossgeister'},ag = {id: 'ag', name:'menschen'},ah = {id: 'ah', name:'der_teufel'},ai = {id: 'ai', name:'thiere'},aj = {id: 'aj', name:'krokodill'},ak = {id: 'ak', name:'esel'} ; nodes.push( af,ag,ah,ai,aj,ak ); links.push( {source: af , target: ah },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ag , target: ah },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ai , target: aj },{source: ai , target: ak },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'I.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '76.470588235294117647%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'af','ag','ai','aj','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aa ac ah al */ var  aa = {id: 'aa', name:'kaiser'},ac = {id: 'ac', name:'kaspers'},ah = nodes[0] ,al = {id: 'al', name:'affe'} ; nodes.push( aa,ac,al ); links.push( {source: aa , target: al },{source: aa , target: ac },{source: aa , target: ah },{source: ac , target: al },{source: ac , target: ah },{source: ah , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'II.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '82.352941176470588235%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'al','aa','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ag ah */ var  ag = {id: 'ag', name:'menschen'},ah = nodes[0]  ; nodes.push( ag ); links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'III.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '88.235294117647058824%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ak am an ao ap aq ar as at */ var  ak = {id: 'ak', name:'esel'},am = {id: 'am', name:'ochs'},an = {id: 'an', name:'biene'},ao = {id: 'ao', name:'huhn'},ap = {id: 'ap', name:'weissfisch'},aq = {id: 'aq', name:'hirsch'},ar = {id: 'ar', name:'hund'},as = {id: 'as', name:'storch'},at = {id: 'at', name:'pferd'} ; nodes.push( ak,am,an,ao,ap,aq,ar,as,at ); links.push( {source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: am , target: aq },{source: am , target: ar },{source: am , target: as },{source: am , target: at },{source: ak , target: am },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: ap },{source: ak , target: aq },{source: ak , target: ar },{source: ak , target: as },{source: ak , target: at },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: an , target: as },{source: an , target: at },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: ao , target: as },{source: ao , target: at },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: at },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: at },{source: ar , target: as },{source: ar , target: at },{source: as , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'IV.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '94.117647058823529412%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'am','an','ao','ap','aq','ar','as','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ab ad ae ai ak au av */ var  ab = {id: 'ab', name:'kaiserin'},ad = {id: 'ad', name:'der_ritter'},ae = {id: 'ae', name:'matrosen'},ai = {id: 'ai', name:'thiere'},ak = nodes[0] ,au = {id: 'au', name:'die_engel'},av = {id: 'av', name:'matrose'} ; nodes.push( ab,ad,ae,ai,au,av ); links.push( {source: au , target: av },{source: ad , target: au },{source: ad , target: av },{source: ad , target: ae },{source: ad , target: ak },{source: ad , target: ai },{source: ab , target: au },{source: ab , target: av },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ak },{source: ab , target: ai },{source: ae , target: au },{source: ae , target: av },{source: ae , target: ak },{source: ae , target: ai },{source: ak , target: au },{source: ak , target: av },{source: ai , target: au },{source: ai , target: av },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'V.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 80000);
