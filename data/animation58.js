setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'wallenstein'},ab = {id: 'ab', name:'seni'},ac = {id: 'ac', name:'terzky'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ac = nodes[2] ; /* nodes.push(); */ links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0],ac = nodes[1],ad = {id: 'ad', name:'illo'} ; nodes.push( ad ); links.push( {source: ac , target: ad },{source: aa , target: ad },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ad','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  aa = nodes[0],ae = {id: 'ae', name:'wrangel'} ; nodes.push( ae ); links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  aa = nodes[0],ac = {id: 'ac', name:'terzky'},ad = {id: 'ad', name:'illo'} ; nodes.push( ac,ad ); links.push( {source: ac , target: ad },{source: aa , target: ad },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  aa = nodes[0],ac = nodes[1],ad = nodes[2],af = {id: 'af', name:'kammerdiener_1.7'},aq = {id: 'aq', name:'gräfin'} ; nodes.push( af,aq ); links.push( {source: aa , target: aq },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: af },{source: ac , target: aq },{source: ac , target: ad },{source: ac , target: af },{source: ad , target: aq },{source: ad , target: af },{source: af , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'aq','ac','ad','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  aa = nodes[0],ah = {id: 'ah', name:'octavio'} ; nodes.push( ah ); links.push( {source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  aa = nodes[0],ai = {id: 'ai', name:'max'} ; nodes.push( ai ); links.push( {source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  aa = nodes[0],ac = {id: 'ac', name:'terzky'},ad = {id: 'ad', name:'illo'} ; nodes.push( ac,ad ); links.push( {source: ac , target: ad },{source: aa , target: ac },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ac','aa','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ah = {id: 'ah', name:'octavio'},aj = {id: 'aj', name:'adjutant'} ; nodes.push( ah,aj ); links.push( {source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ah = nodes[0],ak = {id: 'ak', name:'isolani'} ; nodes.push( ak ); links.push( {source: ah , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ah = nodes[0],al = {id: 'al', name:'buttler'},am = {id: 'am', name:'bedienter'} ; nodes.push( al,am ); links.push( {source: al , target: am },{source: ah , target: al },{source: ah , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'al','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ah = nodes[0],ai = {id: 'ai', name:'max'} ; nodes.push( ai ); links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ah','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  an = {id: 'an', name:'thekla'},aq = {id: 'aq', name:'gräfin'} ; nodes.push( an,aq ); links.push( {source: an , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  an = nodes[0],aq = nodes[1] ; /* nodes.push(); */ links.push( {source: an , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  an = nodes[0],ao = {id: 'ao', name:'herzogin'},aq = nodes[1] ; nodes.push( ao ); links.push( {source: ao , target: aq },{source: an , target: ao },{source: an , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  aa = {id: 'aa', name:'wallenstein'},ad = {id: 'ad', name:'illo'},an = nodes[0],ao = nodes[1],aq = nodes[2] ; nodes.push( aa,ad ); links.push( {source: aa , target: ad },{source: aa , target: aq },{source: aa , target: ao },{source: aa , target: an },{source: ad , target: aq },{source: ad , target: ao },{source: ad , target: an },{source: ao , target: aq },{source: an , target: aq },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ad','ao','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  aa = nodes[0],ac = {id: 'ac', name:'terzky'},aq = nodes[4] ; nodes.push( ac ); links.push( {source: ac , target: aq },{source: aa , target: aq },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  aa = nodes[0],ac = nodes[1],ad = {id: 'ad', name:'illo'},ao = {id: 'ao', name:'herzogin'},ap = {id: 'ap', name:'page'},aq = nodes[2] ; nodes.push( ad,ao,ap ); links.push( {source: ad , target: aq },{source: ad , target: ap },{source: ad , target: ao },{source: ac , target: ad },{source: ac , target: aq },{source: ac , target: ap },{source: ac , target: ao },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: aq },{source: aa , target: ap },{source: aa , target: ao },{source: ap , target: aq },{source: ao , target: aq },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ad','aq','ap','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  aa = nodes[0],ac = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  aa = nodes[0],ac = nodes[1],ad = {id: 'ad', name:'illo'} ; nodes.push( ad ); links.push( {source: ac , target: ad },{source: aa , target: ad },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  aa = nodes[0],ac = nodes[1],ad = nodes[2],aq = {id: 'aq', name:'gräfin'} ; nodes.push( aq ); links.push( {source: ad , target: aq },{source: ac , target: aq },{source: ac , target: ad },{source: aa , target: aq },{source: aa , target: ad },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  aa = nodes[0],ac = nodes[1],ad = nodes[2],al = {id: 'al', name:'buttler'} ; nodes.push( al ); links.push( {source: ac , target: al },{source: ac , target: ad },{source: aa , target: ac },{source: aa , target: al },{source: aa , target: ad },{source: ad , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ac','aa','al','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  aq = {id: 'aq', name:'gräfin'} ; nodes.push( aq ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  an = {id: 'an', name:'thekla'},ao = {id: 'ao', name:'herzogin'},aq = nodes[0] ; nodes.push( an,ao ); links.push( {source: an , target: ao },{source: an , target: aq },{source: ao , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'an','ao','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  aa = {id: 'aa', name:'wallenstein'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  aa = nodes[0],ac = {id: 'ac', name:'terzky'} ; nodes.push( ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  aa = nodes[0],ar = {id: 'ar', name:'gefreiter'},as = {id: 'as', name:'zweiter_kürassier'},at = {id: 'at', name:'dritter_kürassier'} ; nodes.push( ar,as,at ); links.push( {source: aa , target: ar },{source: aa , target: as },{source: aa , target: at },{source: ar , target: as },{source: ar , target: at },{source: as , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Funfzehnter Auftritt';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'as','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  aa = nodes[0],al = {id: 'al', name:'buttler'},ar = nodes[1] ; nodes.push( al ); links.push( {source: al , target: ar },{source: aa , target: al },{source: aa , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechszehnter Auftritt';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'al','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  aa = nodes[0],ac = {id: 'ac', name:'terzky'},ad = {id: 'ad', name:'illo'},an = {id: 'an', name:'thekla'},ao = {id: 'ao', name:'herzogin'},aq = {id: 'aq', name:'gräfin'} ; nodes.push( ac,ad,an,ao,aq ); links.push( {source: ao , target: aq },{source: aa , target: ao },{source: aa , target: aq },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: an },{source: ac , target: ao },{source: ac , target: aq },{source: ac , target: ad },{source: ac , target: an },{source: ad , target: ao },{source: ad , target: aq },{source: ad , target: an },{source: an , target: ao },{source: an , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenzehnter Auftritt';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ao','aq','ac','ad','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  aa = nodes[0],ai = {id: 'ai', name:'max'} ; nodes.push( ai ); links.push( {source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  aa = nodes[0],ad = {id: 'ad', name:'illo'},ai = nodes[1],ao = {id: 'ao', name:'herzogin'},aq = {id: 'aq', name:'gräfin'},au = {id: 'au', name:'neumann'} ; nodes.push( ad,ao,aq,au ); links.push( {source: aa , target: au },{source: aa , target: aq },{source: aa , target: ad },{source: aa , target: ai },{source: aa , target: ao },{source: aq , target: au },{source: ad , target: au },{source: ad , target: aq },{source: ad , target: ai },{source: ad , target: ao },{source: ai , target: au },{source: ai , target: aq },{source: ai , target: ao },{source: ao , target: au },{source: ao , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'au' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  aa = nodes[0],ac = {id: 'ac', name:'terzky'},ad = nodes[1],ai = nodes[2],ao = nodes[3],aq = nodes[4] ; nodes.push( ac ); links.push( {source: ac , target: ad },{source: ac , target: aq },{source: ac , target: ai },{source: ac , target: ao },{source: ad , target: aq },{source: ad , target: ai },{source: ad , target: ao },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: aq },{source: aa , target: ai },{source: aa , target: ao },{source: ai , target: aq },{source: ai , target: ao },{source: ao , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ac','ad','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  ai = nodes[3],an = {id: 'an', name:'thekla'},ao = nodes[4],aq = nodes[5] ; nodes.push( an ); links.push( {source: ao , target: aq },{source: ai , target: aq },{source: ai , target: ao },{source: ai , target: an },{source: an , target: aq },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigster Auftritt';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ai','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  ac = {id: 'ac', name:'terzky'},ao = nodes[2],aq = nodes[3] ; nodes.push( ac ); links.push( {source: ac , target: aq },{source: ac , target: ao },{source: ao , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '22. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiundzwanzigster Auftritt';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  aa = {id: 'aa', name:'wallenstein'},ac = nodes[0],ad = {id: 'ad', name:'illo'},ai = {id: 'ai', name:'max'},al = {id: 'al', name:'buttler'},ao = nodes[1] ; nodes.push( aa,ad,ai,al ); links.push( {source: aa , target: ac },{source: aa , target: al },{source: aa , target: ai },{source: aa , target: ao },{source: aa , target: ad },{source: ac , target: al },{source: ac , target: ai },{source: ac , target: ao },{source: ac , target: ad },{source: al , target: ao },{source: ai , target: al },{source: ai , target: ao },{source: ad , target: al },{source: ad , target: ai },{source: ad , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '23. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreiundzwanzigster Auftritt';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'aa','ac','ai','ao','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  al = nodes[4] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  al = nodes[0],av = {id: 'av', name:'gordon'} ; nodes.push( av ); links.push( {source: al , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40'); var  aa = {id: 'aa', name:'wallenstein'},al = nodes[0],av = nodes[1],aw = {id: 'aw', name:'bürgermeister'} ; nodes.push( aa,aw ); links.push( {source: aa , target: aw },{source: aa , target: av },{source: aa , target: al },{source: av , target: aw },{source: al , target: aw },{source: al , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'aw','av','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41'); var  aa = nodes[0],ac = {id: 'ac', name:'terzky'} ; nodes.push( ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42'); var  aa = nodes[0],ac = nodes[1],ad = {id: 'ad', name:'illo'},ax = {id: 'ax', name:'neubrunn'} ; nodes.push( ad,ax ); links.push( {source: ad , target: ax },{source: ac , target: ad },{source: ac , target: ax },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'ad','ac','aa','ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43'); var  al = {id: 'al', name:'buttler'},av = {id: 'av', name:'gordon'} ; nodes.push( al,av ); links.push( {source: al , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44'); var  ac = {id: 'ac', name:'terzky'},ad = {id: 'ad', name:'illo'},al = nodes[0],av = nodes[1] ; nodes.push( ac,ad ); links.push( {source: ac , target: ad },{source: ac , target: al },{source: ac , target: av },{source: ad , target: al },{source: ad , target: av },{source: al , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45'); var  al = nodes[2],av = nodes[3] ; /* nodes.push(); */ links.push( {source: al , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'av','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46'); var  aa = {id: 'aa', name:'wallenstein'},an = {id: 'an', name:'thekla'},ao = {id: 'ao', name:'herzogin'},aq = {id: 'aq', name:'gräfin'},ax = {id: 'ax', name:'neubrunn'} ; nodes.push( aa,an,ao,aq,ax ); links.push( {source: aa , target: aq },{source: aa , target: ao },{source: aa , target: an },{source: aa , target: ax },{source: aq , target: ax },{source: ao , target: aq },{source: ao , target: ax },{source: an , target: aq },{source: an , target: ao },{source: an , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'aa','aq','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47'); var  an = nodes[1],ax = nodes[4],ay = {id: 'ay', name:'hauptmann'} ; nodes.push( ay ); links.push( {source: an , target: ay },{source: an , target: ax },{source: ax , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48'); var  an = nodes[0],ax = nodes[1] ; /* nodes.push(); */ links.push( {source: an , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49'); var  an = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50'); var  an = nodes[0],ax = {id: 'ax', name:'neubrunn'},az = {id: 'az', name:'stallmeister'} ; nodes.push( ax,az ); links.push( {source: ax , target: az },{source: an , target: ax },{source: an , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [ 'ax','az' ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51'); var  an = nodes[0],ao = {id: 'ao', name:'herzogin'} ; nodes.push( ao ); links.push( {source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [ 'ao','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52'); var  al = {id: 'al', name:'buttler'},ba = {id: 'ba', name:'geraldin'} ; nodes.push( al,ba ); links.push( {source: al , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [ 'ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53'); var  al = nodes[0],bb = {id: 'bb', name:'macdonald'},bc = {id: 'bc', name:'deveroux'} ; nodes.push( bb,bc ); links.push( {source: bb , target: bc },{source: al , target: bb },{source: al , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 260000);

setTimeout(function() { console.log('remv53'); var rm = [ 'bb','bc','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 263750);

setTimeout(function() { console.log('load54'); var  aa = {id: 'aa', name:'wallenstein'},aq = {id: 'aq', name:'gräfin'} ; nodes.push( aa,aq ); links.push( {source: aa , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 265000);

setTimeout(function() { console.log('remv54'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 268750);

setTimeout(function() { console.log('load55'); var  aa = nodes[0],ag = {id: 'ag', name:'kammerdiener_5.7'},av = {id: 'av', name:'gordon'} ; nodes.push( ag,av ); links.push( {source: aa , target: av },{source: aa , target: ag },{source: ag , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 270000);

setTimeout(function() { console.log('remv55'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 273750);

setTimeout(function() { console.log('load56'); var  aa = nodes[0],ab = {id: 'ab', name:'seni'},av = nodes[2] ; nodes.push( ab ); links.push( {source: aa , target: ab },{source: aa , target: av },{source: ab , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 275000);

setTimeout(function() { console.log('remv56'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 278750);

setTimeout(function() { console.log('load57'); var  al = {id: 'al', name:'buttler'},av = nodes[2] ; nodes.push( al ); links.push( {source: al , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 280000);

setTimeout(function() { console.log('remv57'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 283750);

setTimeout(function() { console.log('load58'); var  ag = {id: 'ag', name:'kammerdiener_5.7'},al = nodes[0],av = nodes[1],bb = {id: 'bb', name:'macdonald'},bc = {id: 'bc', name:'deveroux'} ; nodes.push( ag,bb,bc ); links.push( {source: av , target: bb },{source: av , target: bc },{source: al , target: av },{source: al , target: bb },{source: al , target: bc },{source: bb , target: bc },{source: ag , target: av },{source: ag , target: al },{source: ag , target: bb },{source: ag , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 285000);

setTimeout(function() { console.log('remv58'); var rm = [ 'bb','bc','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 288750);

setTimeout(function() { console.log('load59'); var  al = nodes[1],aq = {id: 'aq', name:'gräfin'},av = nodes[2] ; nodes.push( aq ); links.push( {source: aq , target: av },{source: al , target: av },{source: al , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 290000);

setTimeout(function() { console.log('remv59'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 293750);

setTimeout(function() { console.log('load60'); var  ab = {id: 'ab', name:'seni'},ap = {id: 'ap', name:'page'},aq = nodes[1],av = nodes[2],aw = {id: 'aw', name:'bürgermeister'},bd = {id: 'bd', name:'kammerfrau'},be = {id: 'be', name:'erster_bedienter'},bf = {id: 'bf', name:'zweiter_bedienter'} ; nodes.push( ab,ap,aw,bd,be,bf ); links.push( {source: ab , target: aq },{source: ab , target: ap },{source: ab , target: bd },{source: ab , target: aw },{source: ab , target: av },{source: ab , target: be },{source: ab , target: bf },{source: aq , target: bd },{source: aq , target: aw },{source: aq , target: av },{source: aq , target: be },{source: aq , target: bf },{source: ap , target: aq },{source: ap , target: bd },{source: ap , target: aw },{source: ap , target: av },{source: ap , target: be },{source: ap , target: bf },{source: bd , target: be },{source: bd , target: bf },{source: aw , target: bd },{source: aw , target: be },{source: aw , target: bf },{source: av , target: bd },{source: av , target: aw },{source: av , target: be },{source: av , target: bf },{source: be , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 295000);

setTimeout(function() { console.log('remv60'); var rm = [ 'ab','aq','ap','bd','aw','be','bf' ]; rmNodes(rm); rmLinks(rm); start(); }, 298750);

setTimeout(function() { console.log('load61'); var  ah = {id: 'ah', name:'octavio'},al = {id: 'al', name:'buttler'},av = nodes[3],bb = {id: 'bb', name:'macdonald'},bc = {id: 'bc', name:'deveroux'} ; nodes.push( ah,al,bb,bc ); links.push( {source: ah , target: av },{source: ah , target: bc },{source: ah , target: bb },{source: ah , target: al },{source: av , target: bc },{source: av , target: bb },{source: bb , target: bc },{source: al , target: av },{source: al , target: bc },{source: al , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 300000);

setTimeout(function() { console.log('remv61'); var rm = [ 'bc','bb','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 303750);

setTimeout(function() { console.log('load62'); var  ah = nodes[0],aq = {id: 'aq', name:'gräfin'},av = nodes[2] ; nodes.push( aq ); links.push( {source: ah , target: aq },{source: ah , target: av },{source: aq , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 305000);
