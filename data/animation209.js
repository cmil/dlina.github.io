setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'von_juan'},ab = {id: 'ab', name:'leporello'},ac = {id: 'ac', name:'stimme_des_gouverneurs'},ad = {id: 'ad', name:'don_octavio'},ae = {id: 'ae', name:'lisette'} ; nodes.push( aa,ab,ac,ad,ae ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ac = nodes[2],ad = nodes[3],af = {id: 'af', name:'faust'},ag = {id: 'ag', name:'der_ritter'} ; nodes.push( af,ag ); links.push( {source: af , target: ag },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ad },{source: ad , target: af },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = {id: 'aa', name:'von_juan'},ab = {id: 'ab', name:'leporello'},ad = nodes[1],af = nodes[2],ag = nodes[3],ah = {id: 'ah', name:'donna'} ; nodes.push( aa,ab,ah ); links.push( {source: ab , target: ah },{source: ab , target: ad },{source: ab , target: ag },{source: ab , target: af },{source: aa , target: ab },{source: aa , target: ah },{source: aa , target: ad },{source: aa , target: ag },{source: aa , target: af },{source: ad , target: ah },{source: ad , target: ag },{source: ad , target: af },{source: ag , target: ah },{source: af , target: ah },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'stimme_des_gouverneurs'},ac = {id: 'ac', name:'stimme_des_gouverneurs'},ad = nodes[2],af = nodes[3],ag = nodes[4],ah = nodes[5],ah = nodes[5],ai = {id: 'ai', name:'signor_rubio'},aj = {id: 'aj', name:'stimme_des_signor_negro'},aj = {id: 'aj', name:'stimme_des_signor_negro'},ak = {id: 'ak', name:'erster_herr'},al = {id: 'al', name:'zweiter_herr'},am = {id: 'am', name:'ein_diener'},am = {id: 'am', name:'ein_diener'},an = {id: 'an', name:'gasparo'},ao = {id: 'ao', name:'mehrere_anwesende'},ao = {id: 'ao', name:'mehrere_anwesende'},ao = {id: 'ao', name:'mehrere_anwesende'} ; nodes.push( ac,ai,aj,ak,al,am,an,ao ); links.push( {source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ai , target: am },{source: ai , target: aj },{source: ai , target: ao },{source: ai , target: ao },{source: ai , target: an },{source: ai , target: ao },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: am },{source: aj , target: ao },{source: aj , target: ao },{source: aj , target: an },{source: aj , target: ao },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ah },{source: aa , target: ad },{source: aa , target: ag },{source: aa , target: af },{source: aa , target: ak },{source: aa , target: al },{source: aa , target: am },{source: aa , target: am },{source: aa , target: ah },{source: aa , target: ac },{source: aa , target: aj },{source: aa , target: ao },{source: aa , target: ao },{source: aa , target: an },{source: aa , target: ao },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ac },{source: ab , target: ah },{source: ab , target: ad },{source: ab , target: ag },{source: ab , target: af },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: am },{source: ab , target: am },{source: ab , target: ah },{source: ab , target: ac },{source: ab , target: aj },{source: ab , target: ao },{source: ab , target: ao },{source: ab , target: an },{source: ab , target: ao },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ah },{source: ac , target: ad },{source: ac , target: ag },{source: ac , target: af },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: am },{source: ac , target: am },{source: ac , target: ah },{source: ac , target: aj },{source: ac , target: ao },{source: ac , target: ao },{source: ac , target: an },{source: ac , target: ao },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ah , target: am },{source: ah , target: aj },{source: ah , target: ao },{source: ah , target: ao },{source: ah , target: an },{source: ah , target: ao },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ah },{source: ad , target: ag },{source: ad , target: af },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: am },{source: ad , target: am },{source: ad , target: ah },{source: ad , target: aj },{source: ad , target: ao },{source: ad , target: ao },{source: ad , target: an },{source: ad , target: ao },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ah },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: am },{source: ag , target: am },{source: ag , target: ah },{source: ag , target: aj },{source: ag , target: ao },{source: ag , target: ao },{source: ag , target: an },{source: ag , target: ao },{source: af , target: ai },{source: af , target: aj },{source: af , target: ah },{source: af , target: ag },{source: af , target: ak },{source: af , target: al },{source: af , target: am },{source: af , target: am },{source: af , target: ah },{source: af , target: aj },{source: af , target: ao },{source: af , target: ao },{source: af , target: an },{source: af , target: ao },{source: ak , target: al },{source: ak , target: am },{source: ak , target: am },{source: ak , target: ao },{source: ak , target: ao },{source: ak , target: an },{source: ak , target: ao },{source: al , target: am },{source: al , target: am },{source: al , target: ao },{source: al , target: ao },{source: al , target: an },{source: al , target: ao },{source: am , target: ao },{source: am , target: ao },{source: am , target: an },{source: am , target: ao },{source: am , target: ao },{source: am , target: ao },{source: am , target: an },{source: am , target: ao },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ah , target: am },{source: ah , target: aj },{source: ah , target: ao },{source: ah , target: ao },{source: ah , target: an },{source: ah , target: ao },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ah },{source: ac , target: ad },{source: ac , target: ag },{source: ac , target: af },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: am },{source: ac , target: am },{source: ac , target: ah },{source: ac , target: aj },{source: ac , target: ao },{source: ac , target: ao },{source: ac , target: an },{source: ac , target: ao },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: am },{source: aj , target: ao },{source: aj , target: ao },{source: aj , target: an },{source: aj , target: ao },{source: an , target: ao },{source: an , target: ao },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ai','aj','ah','ad','ag','af','ak','al','am','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],an = nodes[16],ap = {id: 'ap', name:'der_priester'} ; nodes.push( ap ); links.push( {source: ac , target: an },{source: ac , target: ap },{source: an , target: ap },{source: aa , target: ac },{source: aa , target: an },{source: aa , target: ab },{source: aa , target: ap },{source: ab , target: ac },{source: ab , target: an },{source: ab , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ac','an','aa','ab','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  af = {id: 'af', name:'faust'},ag = {id: 'ag', name:'der_ritter'},ah = {id: 'ah', name:'donna'} ; nodes.push( af,ag,ah ); links.push( {source: af , target: ag },{source: af , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  aa = {id: 'aa', name:'von_juan'},ab = {id: 'ab', name:'leporello'},af = nodes[0] ; nodes.push( aa,ab ); links.push( {source: ab , target: af },{source: aa , target: ab },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'stimme_des_gouverneurs'} ; nodes.push( ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'aa','ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  af = {id: 'af', name:'faust'},aq = {id: 'aq', name:'erster_gnom'},ar = {id: 'ar', name:'zweiter_gnom'},as = {id: 'as', name:'viele_gnomen'},as = {id: 'as', name:'viele_gnomen'} ; nodes.push( af,aq,ar,as ); links.push( {source: af , target: aq },{source: af , target: ar },{source: af , target: as },{source: af , target: as },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: as },{source: ar , target: as },{source: ar , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'aq','ar','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  af = nodes[0],ag = {id: 'ag', name:'der_ritter'},ah = {id: 'ah', name:'donna'} ; nodes.push( ag,ah ); links.push( {source: af , target: ah },{source: af , target: ag },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  aa = {id: 'aa', name:'von_juan'},aa = {id: 'aa', name:'von_juan'},ab = {id: 'ab', name:'leporello'},ac = {id: 'ac', name:'stimme_des_gouverneurs'},af = nodes[0],ag = nodes[1],ai = {id: 'ai', name:'signor_rubio'},aj = {id: 'aj', name:'stimme_des_signor_negro'} ; nodes.push( aa,ab,ac,ai,aj ); links.push( {source: ag , target: aj },{source: ag , target: ai },{source: aa , target: ag },{source: aa , target: ab },{source: aa , target: aj },{source: aa , target: ai },{source: aa , target: af },{source: aa , target: ac },{source: ab , target: ag },{source: ab , target: aj },{source: ab , target: ai },{source: ab , target: af },{source: ab , target: ac },{source: ai , target: aj },{source: aa , target: ag },{source: aa , target: ab },{source: aa , target: aj },{source: aa , target: ai },{source: aa , target: af },{source: aa , target: ac },{source: af , target: ag },{source: af , target: aj },{source: af , target: ai },{source: ac , target: ag },{source: ac , target: aj },{source: ac , target: ai },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 50000);
