setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'joab'},ab = {id: 'ab', name:'herodes'},ac = {id: 'ac', name:'judas'},ad = {id: 'ad', name:'sameas'},ae = {id: 'ae', name:'serubabel'},af = {id: 'af', name:'titus'} ; nodes.push( aa,ab,ac,ad,ae,af ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ad , target: ae },{source: ad , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ac','ad','ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ab = nodes[1] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ab = nodes[0],ag = {id: 'ag', name:'der_diener'},ah = {id: 'ah', name:'marianne'} ; nodes.push( ag,ah ); links.push( {source: ag , target: ah },{source: ab , target: ag },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ab = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ab = nodes[0],ag = {id: 'ag', name:'der_diener'},ai = {id: 'ai', name:'joseph'} ; nodes.push( ag,ai ); links.push( {source: ag , target: ai },{source: ab , target: ag },{source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ag','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ab = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ad = {id: 'ad', name:'sameas'},aj = {id: 'aj', name:'alexandra'} ; nodes.push( ad,aj ); links.push( {source: ad , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  aj = nodes[1] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ah = {id: 'ah', name:'marianne'},aj = nodes[0] ; nodes.push( ah ); links.push( {source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ag = {id: 'ag', name:'der_diener'},ah = nodes[0],ai = {id: 'ai', name:'joseph'},aj = nodes[1] ; nodes.push( ag,ai ); links.push( {source: ag , target: aj },{source: ag , target: ah },{source: ag , target: ai },{source: ah , target: aj },{source: ah , target: ai },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  af = {id: 'af', name:'titus'},ag = nodes[0],ag = nodes[0],ah = nodes[1],ai = nodes[2],aj = nodes[3],ak = {id: 'ak', name:'philo'} ; nodes.push( af,ak ); links.push( {source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ah },{source: ag , target: ak },{source: ai , target: aj },{source: ai , target: ak },{source: aj , target: ak },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ah },{source: ag , target: ak },{source: af , target: ag },{source: af , target: ai },{source: af , target: aj },{source: af , target: ag },{source: af , target: ah },{source: af , target: ak },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ag','aj','af','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ah = nodes[3],ai = nodes[4],al = {id: 'al', name:'salome'} ; nodes.push( al ); links.push( {source: ai , target: al },{source: ah , target: al },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'al','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ai = nodes[1],aj = {id: 'aj', name:'alexandra'} ; nodes.push( aj ); links.push( {source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ab = {id: 'ab', name:'herodes'},ai = nodes[0],al = {id: 'al', name:'salome'},am = {id: 'am', name:'soemus'} ; nodes.push( ab,al,am ); links.push( {source: ab , target: am },{source: ab , target: ai },{source: ab , target: al },{source: ai , target: am },{source: ai , target: al },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'am','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ab = nodes[0],ah = {id: 'ah', name:'marianne'},aj = {id: 'aj', name:'alexandra'},al = nodes[2] ; nodes.push( ah,aj ); links.push( {source: ab , target: al },{source: ab , target: aj },{source: ab , target: ah },{source: aj , target: al },{source: ah , target: al },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'al','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ab = nodes[0],ah = nodes[1],am = {id: 'am', name:'soemus'} ; nodes.push( am ); links.push( {source: ab , target: am },{source: ab , target: ah },{source: ah , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ab = nodes[0],ah = nodes[1],al = {id: 'al', name:'salome'} ; nodes.push( al ); links.push( {source: ab , target: al },{source: ab , target: ah },{source: ah , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ab = nodes[0],ah = nodes[1],al = nodes[2],am = {id: 'am', name:'soemus'} ; nodes.push( am ); links.push( {source: al , target: am },{source: ah , target: am },{source: ah , target: al },{source: ab , target: am },{source: ab , target: al },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'am','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ab = nodes[0],ah = nodes[1],an = {id: 'an', name:'bote'},an = {id: 'an', name:'bote'} ; nodes.push( an ); links.push( {source: ab , target: an },{source: ab , target: an },{source: ab , target: ah },{source: ah , target: an },{source: ah , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'an','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ah = nodes[1],aj = {id: 'aj', name:'alexandra'} ; nodes.push( aj ); links.push( {source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ad = {id: 'ad', name:'sameas'},ah = nodes[0],aj = nodes[1] ; nodes.push( ad ); links.push( {source: ad , target: ah },{source: ad , target: aj },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ah = nodes[1],aj = nodes[2],am = {id: 'am', name:'soemus'} ; nodes.push( am ); links.push( {source: ah , target: am },{source: ah , target: aj },{source: aj , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'am','ah','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  ac = {id: 'ac', name:'judas'},ao = {id: 'ao', name:'moses'},ap = {id: 'ap', name:'artaxerxes'},aq = {id: 'aq', name:'jehu'},ar = {id: 'ar', name:'silo'} ; nodes.push( ac,ao,ap,aq,ar ); links.push( {source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: ap , target: aq },{source: ap , target: ar },{source: aq , target: ar },{source: ac , target: ao },{source: ac , target: ap },{source: ac , target: aq },{source: ac , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ao','ap','aq','ar','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ah = {id: 'ah', name:'marianne'},aj = {id: 'aj', name:'alexandra'} ; nodes.push( ah,aj ); links.push( {source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ah = nodes[0],al = {id: 'al', name:'salome'},am = {id: 'am', name:'soemus'} ; nodes.push( al,am ); links.push( {source: al , target: am },{source: ah , target: al },{source: ah , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  af = {id: 'af', name:'titus'},ah = nodes[0],aj = {id: 'aj', name:'alexandra'},al = nodes[1],as = {id: 'as', name:'stimmen_im_hintergrund'} ; nodes.push( af,aj,as ); links.push( {source: aj , target: al },{source: aj , target: as },{source: af , target: aj },{source: af , target: al },{source: af , target: ah },{source: af , target: as },{source: al , target: as },{source: ah , target: aj },{source: ah , target: al },{source: ah , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'aj','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ab = {id: 'ab', name:'herodes'},af = nodes[0],ah = nodes[1],al = nodes[3],am = {id: 'am', name:'soemus'} ; nodes.push( ab,am ); links.push( {source: ah , target: al },{source: ah , target: am },{source: al , target: am },{source: ab , target: ah },{source: ab , target: al },{source: ab , target: af },{source: ab , target: am },{source: af , target: ah },{source: af , target: al },{source: af , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ah','af','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ab = nodes[0],al = nodes[3] ; /* nodes.push(); */ links.push( {source: ab , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ab = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  ab = nodes[0],af = {id: 'af', name:'titus'} ; nodes.push( af ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  aa = {id: 'aa', name:'joab'},ab = nodes[0],af = nodes[1] ; nodes.push( aa ); links.push( {source: ab , target: af },{source: aa , target: ab },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  aa = nodes[0],ab = nodes[1],af = nodes[2],ah = {id: 'ah', name:'marianne'},ah = {id: 'ah', name:'marianne'},aj = {id: 'aj', name:'alexandra'},al = {id: 'al', name:'salome'},at = {id: 'at', name:'aaron'} ; nodes.push( ah,aj,al,at ); links.push( {source: aj , target: at },{source: aj , target: al },{source: ab , target: aj },{source: ab , target: at },{source: ab , target: ah },{source: ab , target: af },{source: ab , target: al },{source: ab , target: ah },{source: ah , target: aj },{source: ah , target: at },{source: ah , target: al },{source: af , target: aj },{source: af , target: at },{source: af , target: ah },{source: af , target: al },{source: af , target: ah },{source: al , target: at },{source: ah , target: aj },{source: ah , target: at },{source: ah , target: al },{source: aa , target: aj },{source: aa , target: ab },{source: aa , target: at },{source: aa , target: ah },{source: aa , target: af },{source: aa , target: al },{source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'aj','ab','at','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  aa = nodes[0],af = nodes[2],ah = nodes[3] ; /* nodes.push(); */ links.push( {source: af , target: ah },{source: aa , target: ah },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ah','af','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  al = {id: 'al', name:'salome'} ; nodes.push( al ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  aa = {id: 'aa', name:'joab'},ab = {id: 'ab', name:'herodes'},af = {id: 'af', name:'titus'},ag = {id: 'ag', name:'der_diener'},ag = {id: 'ag', name:'der_diener'},aj = {id: 'aj', name:'alexandra'},al = nodes[0],au = {id: 'au', name:'erster_könig'},av = {id: 'av', name:'zweiter_könig'},aw = {id: 'aw', name:'dritter_könig'} ; nodes.push( aa,ab,af,ag,aj,au,av,aw ); links.push( {source: ag , target: al },{source: ag , target: au },{source: ag , target: av },{source: ag , target: aw },{source: ag , target: aj },{source: al , target: au },{source: al , target: av },{source: al , target: aw },{source: ag , target: al },{source: ag , target: au },{source: ag , target: av },{source: ag , target: aw },{source: ag , target: aj },{source: au , target: av },{source: au , target: aw },{source: av , target: aw },{source: ab , target: ag },{source: ab , target: al },{source: ab , target: ag },{source: ab , target: au },{source: ab , target: av },{source: ab , target: aw },{source: ab , target: aj },{source: ab , target: af },{source: aj , target: al },{source: aj , target: au },{source: aj , target: av },{source: aj , target: aw },{source: aa , target: ag },{source: aa , target: al },{source: aa , target: ag },{source: aa , target: au },{source: aa , target: av },{source: aa , target: aw },{source: aa , target: ab },{source: aa , target: aj },{source: aa , target: af },{source: af , target: ag },{source: af , target: al },{source: af , target: ag },{source: af , target: au },{source: af , target: av },{source: af , target: aw },{source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 170000);
