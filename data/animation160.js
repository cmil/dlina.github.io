setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'gunther'},ab = {id: 'ab', name:'rüdeger'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ac = {id: 'ac', name:'magen'},ad = {id: 'ad', name:'ute'},ae = {id: 'ae', name:'gerenot'} ; nodes.push( ac,ad,ae ); links.push( {source: ac , target: ad },{source: ac , target: ae },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac','aa','ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  af = {id: 'af', name:'kriemhild'} ; nodes.push( af ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ad = {id: 'ad', name:'ute'},af = nodes[0] ; nodes.push( ad ); links.push( {source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ad = nodes[0],ae = {id: 'ae', name:'gerenot'},af = nodes[1],ag = {id: 'ag', name:'giselher'} ; nodes.push( ae,ag ); links.push( {source: ae , target: ag },{source: ae , target: af },{source: ad , target: ae },{source: ad , target: ag },{source: ad , target: af },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ae','ad','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  aa = {id: 'aa', name:'gunther'},af = nodes[0] ; nodes.push( aa ); links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  af = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ab = {id: 'ab', name:'rüdeger'},af = nodes[0] ; nodes.push( ab ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  aa = {id: 'aa', name:'gunther'},ab = nodes[0],ad = {id: 'ad', name:'ute'},af = nodes[1] ; nodes.push( aa,ad ); links.push( {source: ab , target: af },{source: ab , target: ad },{source: ad , target: af },{source: aa , target: af },{source: aa , target: ab },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'af','ab','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  aa = nodes[0],ac = {id: 'ac', name:'magen'},ac = {id: 'ac', name:'magen'},ah = {id: 'ah', name:'werbel'},ai = {id: 'ai', name:'rumolt'},aj = {id: 'aj', name:'volker'},ak = {id: 'ak', name:'dankwart'},al = {id: 'al', name:'kaplan'} ; nodes.push( ac,ah,ai,aj,ak,al ); links.push( {source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ac },{source: aa , target: ak },{source: aa , target: al },{source: aa , target: ac },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: aj , target: ak },{source: aj , target: al },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: al },{source: ak , target: al },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ah','aa','ai','aj','ac','ak','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ab = {id: 'ab', name:'rüdeger'},am = {id: 'am', name:'götelinde'},an = {id: 'an', name:'dietrich'},ao = {id: 'ao', name:'hildebrant'},ap = {id: 'ap', name:'iring'},aq = {id: 'aq', name:'thüring'},ar = {id: 'ar', name:'gudrun'} ; nodes.push( ab,am,an,ao,ap,aq,ar ); links.push( {source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: am , target: aq },{source: am , target: ar },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: ab , target: am },{source: ab , target: an },{source: ab , target: ao },{source: ab , target: ap },{source: ab , target: aq },{source: ab , target: ar },{source: ap , target: aq },{source: ap , target: ar },{source: aq , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'an','ao','ab','ap','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  am = nodes[0],ar = nodes[1] ; /* nodes.push(); */ links.push( {source: am , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ab = {id: 'ab', name:'rüdeger'},ac = {id: 'ac', name:'magen'},aj = {id: 'aj', name:'volker'},am = nodes[0] ; nodes.push( ab,ac,aj ); links.push( {source: ac , target: am },{source: ac , target: aj },{source: ab , target: ac },{source: ab , target: am },{source: ab , target: aj },{source: aj , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ac','ab','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ag = {id: 'ag', name:'giselher'},aj = nodes[0] ; nodes.push( ag ); links.push( {source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  aj = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ab = {id: 'ab', name:'rüdeger'},ac = {id: 'ac', name:'magen'} ; nodes.push( ab,ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ab = nodes[0],aj = {id: 'aj', name:'volker'} ; nodes.push( aj ); links.push( {source: ab , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  aa = {id: 'aa', name:'gunther'},ab = nodes[0],ac = {id: 'ac', name:'magen'},ae = {id: 'ae', name:'gerenot'},ag = {id: 'ag', name:'giselher'},aj = nodes[1],am = {id: 'am', name:'götelinde'},an = {id: 'an', name:'dietrich'},ar = {id: 'ar', name:'gudrun'} ; nodes.push( aa,ac,ae,ag,am,an,ar ); links.push( {source: ab , target: ag },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: am },{source: ab , target: ar },{source: ab , target: aj },{source: ab , target: an },{source: ag , target: am },{source: ag , target: ar },{source: ag , target: aj },{source: ag , target: an },{source: ae , target: ag },{source: ae , target: am },{source: ae , target: ar },{source: ae , target: aj },{source: ae , target: an },{source: ac , target: ag },{source: ac , target: ae },{source: ac , target: am },{source: ac , target: ar },{source: ac , target: aj },{source: ac , target: an },{source: aa , target: ab },{source: aa , target: ag },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: am },{source: aa , target: ar },{source: aa , target: aj },{source: aa , target: an },{source: am , target: ar },{source: am , target: an },{source: aj , target: am },{source: aj , target: ar },{source: aj , target: an },{source: an , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ab','ag','ae','aa','am','ar','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ac = nodes[0],an = nodes[1] ; /* nodes.push(); */ links.push( {source: ac , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  aa = {id: 'aa', name:'gunther'},ac = nodes[0],aj = {id: 'aj', name:'volker'} ; nodes.push( aa,aj ); links.push( {source: ac , target: aj },{source: aa , target: aj },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfte Szene';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'aj','ac','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  af = {id: 'af', name:'kriemhild'},ah = {id: 'ah', name:'werbel'} ; nodes.push( af,ah ); links.push( {source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  af = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  af = nodes[0],as = {id: 'as', name:'etzel'} ; nodes.push( as ); links.push( {source: af , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  af = nodes[0],ah = {id: 'ah', name:'werbel'},as = nodes[1] ; nodes.push( ah ); links.push( {source: ah , target: as },{source: af , target: ah },{source: af , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ah','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  af = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ab = {id: 'ab', name:'rüdeger'},ac = {id: 'ac', name:'magen'} ; nodes.push( ab,ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ac = nodes[0],af = {id: 'af', name:'kriemhild'},ag = {id: 'ag', name:'giselher'},an = {id: 'an', name:'dietrich'} ; nodes.push( af,ag,an ); links.push( {source: ac , target: af },{source: ac , target: an },{source: ac , target: ag },{source: af , target: an },{source: af , target: ag },{source: ag , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ac','af','an','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ai = {id: 'ai', name:'rumolt'},ak = {id: 'ak', name:'dankwart'} ; nodes.push( ai,ak ); links.push( {source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ah = {id: 'ah', name:'werbel'},ai = nodes[0],ak = nodes[1] ; nodes.push( ah ); links.push( {source: ah , target: ak },{source: ah , target: ai },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  ac = {id: 'ac', name:'magen'},ah = nodes[0],ai = nodes[1],aj = {id: 'aj', name:'volker'},ak = nodes[2] ; nodes.push( ac,aj ); links.push( {source: ac , target: ak },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ah },{source: ai , target: ak },{source: ai , target: aj },{source: aj , target: ak },{source: ah , target: ak },{source: ah , target: ai },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ak','ai','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  ac = nodes[0],aj = nodes[1] ; /* nodes.push(); */ links.push( {source: ac , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfte Szene';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  aa = {id: 'aa', name:'gunther'},ab = {id: 'ab', name:'rüdeger'},ac = nodes[0],ae = {id: 'ae', name:'gerenot'},ag = {id: 'ag', name:'giselher'} ; nodes.push( aa,ab,ae,ag ); links.push( {source: aa , target: ac },{source: aa , target: ag },{source: aa , target: ab },{source: aa , target: ae },{source: ac , target: ag },{source: ac , target: ae },{source: ab , target: ac },{source: ab , target: ag },{source: ab , target: ae },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'aa','ag','ab','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  ac = nodes[0],aj = {id: 'aj', name:'volker'} ; nodes.push( aj ); links.push( {source: ac , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Szene';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ac','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  af = {id: 'af', name:'kriemhild'},ah = {id: 'ah', name:'werbel'} ; nodes.push( af,ah ); links.push( {source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Szene';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ah','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  ac = {id: 'ac', name:'magen'},aj = {id: 'aj', name:'volker'} ; nodes.push( ac,aj ); links.push( {source: ac , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Funfzehnte Szene';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  ac = nodes[0],aj = nodes[1] ; /* nodes.push(); */ links.push( {source: ac , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ac','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  ah = {id: 'ah', name:'werbel'} ; nodes.push( ah ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  ac = {id: 'ac', name:'magen'},af = {id: 'af', name:'kriemhild'},ah = nodes[0],aj = {id: 'aj', name:'volker'} ; nodes.push( ac,af,aj ); links.push( {source: ac , target: aj },{source: ac , target: af },{source: ac , target: ah },{source: af , target: aj },{source: af , target: ah },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'aj','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  aa = {id: 'aa', name:'gunther'},ac = nodes[0],ae = {id: 'ae', name:'gerenot'},af = nodes[1],ag = {id: 'ag', name:'giselher'} ; nodes.push( aa,ae,ag ); links.push( {source: aa , target: af },{source: aa , target: ae },{source: aa , target: ag },{source: aa , target: ac },{source: af , target: ag },{source: ae , target: af },{source: ae , target: ag },{source: ac , target: af },{source: ac , target: ae },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'aa','af','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40'); var  ac = nodes[0],ag = nodes[1] ; /* nodes.push(); */ links.push( {source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41'); var  ac = nodes[0],aj = {id: 'aj', name:'volker'} ; nodes.push( aj ); links.push( {source: ac , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'ac','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42'); var  an = {id: 'an', name:'dietrich'},as = {id: 'as', name:'etzel'} ; nodes.push( an,as ); links.push( {source: an , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'an','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43'); var  af = {id: 'af', name:'kriemhild'},ah = {id: 'ah', name:'werbel'} ; nodes.push( af,ah ); links.push( {source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44'); var  ab = {id: 'ab', name:'rüdeger'},af = nodes[0] ; nodes.push( ab ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45'); var  ab = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46'); var  ab = nodes[0],ac = {id: 'ac', name:'magen'},ah = {id: 'ah', name:'werbel'},aj = {id: 'aj', name:'volker'} ; nodes.push( ac,ah,aj ); links.push( {source: ab , target: ac },{source: ab , target: aj },{source: ab , target: ah },{source: ac , target: aj },{source: ac , target: ah },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfte Szene';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'ab','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47'); var  ac = nodes[0],af = {id: 'af', name:'kriemhild'},ah = nodes[1],an = {id: 'an', name:'dietrich'},as = {id: 'as', name:'etzel'} ; nodes.push( af,an,as ); links.push( {source: ah , target: as },{source: ah , target: an },{source: ac , target: as },{source: ac , target: ah },{source: ac , target: af },{source: ac , target: an },{source: af , target: as },{source: af , target: ah },{source: af , target: an },{source: an , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene';
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'ah','ac','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48'); var  ab = {id: 'ab', name:'rüdeger'},af = nodes[0],as = nodes[1] ; nodes.push( ab ); links.push( {source: af , target: as },{source: ab , target: af },{source: ab , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Szene';
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49'); var  af = nodes[0],as = nodes[1] ; /* nodes.push(); */ links.push( {source: af , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Szene';
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'as' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50'); var  af = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Funfzehnte Szene';
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51'); var  ah = {id: 'ah', name:'werbel'} ; nodes.push( ah ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechszehnte Szene';
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52'); var  ab = {id: 'ab', name:'rüdeger'},an = {id: 'an', name:'dietrich'} ; nodes.push( ab,an ); links.push( {source: ab , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnte Szene';
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53'); var  ab = nodes[0],ac = {id: 'ac', name:'magen'},an = nodes[1] ; nodes.push( ac ); links.push( {source: ab , target: an },{source: ab , target: ac },{source: ac , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnte Szene';
}, 260000);

setTimeout(function() { console.log('remv53'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 263750);

setTimeout(function() { console.log('load54'); var  aa = {id: 'aa', name:'gunther'},ac = nodes[0],af = {id: 'af', name:'kriemhild'},aj = {id: 'aj', name:'volker'},an = nodes[1],as = {id: 'as', name:'etzel'} ; nodes.push( aa,af,aj,as ); links.push( {source: ac , target: as },{source: ac , target: af },{source: ac , target: an },{source: ac , target: aj },{source: af , target: as },{source: af , target: an },{source: af , target: aj },{source: aa , target: as },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: an },{source: aa , target: aj },{source: an , target: as },{source: aj , target: as },{source: aj , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnte Szene';
}, 265000);

setTimeout(function() { console.log('remv54'); var rm = [ 'as','af','aa','an','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 268750);

setTimeout(function() { console.log('load55'); var  ac = nodes[0],at = {id: 'at', name:'pilgrim'} ; nodes.push( at ); links.push( {source: ac , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigste Szene';
}, 270000);

setTimeout(function() { console.log('remv55'); var rm = [ 'at' ]; rmNodes(rm); rmLinks(rm); start(); }, 273750);

setTimeout(function() { console.log('load56'); var  ab = {id: 'ab', name:'rüdeger'},ac = nodes[0],af = {id: 'af', name:'kriemhild'},ag = {id: 'ag', name:'giselher'},aj = {id: 'aj', name:'volker'},an = {id: 'an', name:'dietrich'},as = {id: 'as', name:'etzel'} ; nodes.push( ab,af,ag,aj,an,as ); links.push( {source: ac , target: an },{source: ac , target: as },{source: ac , target: af },{source: ac , target: aj },{source: ac , target: ag },{source: an , target: as },{source: ab , target: ac },{source: ab , target: an },{source: ab , target: as },{source: ab , target: af },{source: ab , target: aj },{source: ab , target: ag },{source: af , target: an },{source: af , target: as },{source: af , target: aj },{source: af , target: ag },{source: aj , target: an },{source: aj , target: as },{source: ag , target: an },{source: ag , target: as },{source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigste Szene';
}, 275000);

setTimeout(function() { console.log('remv56'); var rm = [ 'an','ab','aj','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 278750);

setTimeout(function() { console.log('load57'); var  ac = nodes[0],af = nodes[1],as = nodes[2] ; /* nodes.push(); */ links.push( {source: af , target: as },{source: ac , target: as },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '22. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiundzwanzigste Szene';
}, 280000);

setTimeout(function() { console.log('remv57'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 283750);

setTimeout(function() { console.log('load58'); var  aa = {id: 'aa', name:'gunther'},ac = nodes[0],af = nodes[1],aj = {id: 'aj', name:'volker'},ak = {id: 'ak', name:'dankwart'},an = {id: 'an', name:'dietrich'},as = nodes[2] ; nodes.push( aa,aj,ak,an ); links.push( {source: ak , target: as },{source: ak , target: an },{source: aa , target: ak },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: aj },{source: aa , target: as },{source: aa , target: an },{source: ac , target: ak },{source: ac , target: af },{source: ac , target: aj },{source: ac , target: as },{source: ac , target: an },{source: af , target: ak },{source: af , target: aj },{source: af , target: as },{source: af , target: an },{source: aj , target: ak },{source: aj , target: as },{source: aj , target: an },{source: an , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '23. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreiundzwanzigste Szene';
}, 285000);

setTimeout(function() { console.log('remv58'); var rm = [ 'ak','aa','ac','af','aj','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 288750);

setTimeout(function() { console.log('load59'); var  an = nodes[0],ao = {id: 'ao', name:'hildebrant'} ; nodes.push( ao ); links.push( {source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 290000);

setTimeout(function() { console.log('remv59'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 293750);

setTimeout(function() { console.log('load60'); var  ac = {id: 'ac', name:'magen'},ag = {id: 'ag', name:'giselher'},an = nodes[0],ao = nodes[1] ; nodes.push( ac,ag ); links.push( {source: ac , target: ao },{source: ac , target: an },{source: ac , target: ag },{source: an , target: ao },{source: ag , target: ao },{source: ag , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 295000);

setTimeout(function() { console.log('remv60'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 298750);

setTimeout(function() { console.log('load61'); var  aa = {id: 'aa', name:'gunther'},ac = nodes[0],ae = {id: 'ae', name:'gerenot'},ag = nodes[1],ak = {id: 'ak', name:'dankwart'},an = nodes[2],ao = nodes[3] ; nodes.push( aa,ae,ak ); links.push( {source: aa , target: ak },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: ag },{source: aa , target: ao },{source: aa , target: an },{source: ak , target: ao },{source: ak , target: an },{source: ae , target: ak },{source: ae , target: ag },{source: ae , target: ao },{source: ae , target: an },{source: ac , target: ak },{source: ac , target: ae },{source: ac , target: ag },{source: ac , target: ao },{source: ac , target: an },{source: ag , target: ak },{source: ag , target: ao },{source: ag , target: an },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 300000);

setTimeout(function() { console.log('remv61'); var rm = [ 'aa','ak','ae','ag','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 303750);

setTimeout(function() { console.log('load62'); var  ac = nodes[0],af = {id: 'af', name:'kriemhild'},ao = nodes[1] ; nodes.push( af ); links.push( {source: af , target: ao },{source: ac , target: af },{source: ac , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 305000);

setTimeout(function() { console.log('remv62'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 308750);

setTimeout(function() { console.log('load63'); var  ac = nodes[0],an = {id: 'an', name:'dietrich'},ao = nodes[1] ; nodes.push( an ); links.push( {source: an , target: ao },{source: ac , target: ao },{source: ac , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 310000);

setTimeout(function() { console.log('remv63'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 313750);

setTimeout(function() { console.log('load64'); var  ac = nodes[0],af = {id: 'af', name:'kriemhild'},an = nodes[1],ao = nodes[2] ; nodes.push( af ); links.push( {source: af , target: ao },{source: af , target: an },{source: ac , target: af },{source: ac , target: ao },{source: ac , target: an },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 315000);

setTimeout(function() { console.log('remv64'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 318750);

setTimeout(function() { console.log('load65'); var  ac = nodes[0],af = nodes[1],an = nodes[2] ; /* nodes.push(); */ links.push( {source: ac , target: af },{source: ac , target: an },{source: af , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 320000);

setTimeout(function() { console.log('remv65'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 323750);

setTimeout(function() { console.log('load66'); var  ac = nodes[0],af = nodes[1],an = nodes[2],as = {id: 'as', name:'etzel'} ; nodes.push( as ); links.push( {source: ac , target: as },{source: ac , target: an },{source: ac , target: af },{source: an , target: as },{source: af , target: as },{source: af , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 325000);

setTimeout(function() { console.log('remv66'); var rm = [ 'ac','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 328750);

setTimeout(function() { console.log('load67'); var  ab = {id: 'ab', name:'rüdeger'},af = nodes[0],as = nodes[1] ; nodes.push( ab ); links.push( {source: ab , target: as },{source: ab , target: af },{source: af , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 330000);

setTimeout(function() { console.log('remv67'); var rm = [ 'ab','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 333750);

setTimeout(function() { console.log('load68'); var  af = nodes[0],ag = {id: 'ag', name:'giselher'} ; nodes.push( ag ); links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
}, 335000);

setTimeout(function() { console.log('remv68'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 338750);

setTimeout(function() { console.log('load69'); var  ab = {id: 'ab', name:'rüdeger'},af = nodes[0],an = {id: 'an', name:'dietrich'},ao = {id: 'ao', name:'hildebrant'},as = {id: 'as', name:'etzel'} ; nodes.push( ab,an,ao,as ); links.push( {source: ab , target: af },{source: ab , target: as },{source: ab , target: ao },{source: ab , target: an },{source: af , target: as },{source: af , target: ao },{source: af , target: an },{source: ao , target: as },{source: an , target: as },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfte Szene';
}, 340000);

setTimeout(function() { console.log('remv69'); var rm = [ 'af','as','ao','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 343750);

setTimeout(function() { console.log('load70'); var  ab = nodes[0],ac = {id: 'ac', name:'magen'},ag = {id: 'ag', name:'giselher'} ; nodes.push( ac,ag ); links.push( {source: ac , target: ag },{source: ab , target: ag },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene';
}, 345000);

setTimeout(function() { console.log('remv70'); var rm = [ 'ag','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 348750);

setTimeout(function() { console.log('load71'); var  ac = nodes[0],af = {id: 'af', name:'kriemhild'},an = {id: 'an', name:'dietrich'},ao = {id: 'ao', name:'hildebrant'},as = {id: 'as', name:'etzel'} ; nodes.push( af,an,ao,as ); links.push( {source: ao , target: as },{source: af , target: as },{source: af , target: ao },{source: af , target: an },{source: ac , target: as },{source: ac , target: ao },{source: ac , target: af },{source: ac , target: an },{source: an , target: as },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Szene';
}, 350000);

setTimeout(function() { console.log('remv71'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 353750);

setTimeout(function() { console.log('load72'); var  aa = {id: 'aa', name:'gunther'},ac = nodes[0],af = nodes[1],an = nodes[2],ao = nodes[3],as = nodes[4],au = {id: 'au', name:'heune'},au = {id: 'au', name:'heune'} ; nodes.push( aa,au ); links.push( {source: an , target: as },{source: an , target: au },{source: an , target: au },{source: an , target: ao },{source: ac , target: an },{source: ac , target: as },{source: ac , target: af },{source: ac , target: au },{source: ac , target: au },{source: ac , target: ao },{source: aa , target: an },{source: aa , target: ac },{source: aa , target: as },{source: aa , target: af },{source: aa , target: au },{source: aa , target: au },{source: aa , target: ao },{source: as , target: au },{source: as , target: au },{source: af , target: an },{source: af , target: as },{source: af , target: au },{source: af , target: au },{source: af , target: ao },{source: ao , target: as },{source: ao , target: au },{source: ao , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Szene';
}, 355000);
