setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'der_heerrufer'},ab = {id: 'ab', name:'die_brabanter'},ac = {id: 'ac', name:'könig'},ac = {id: 'ac', name:'könig'},ad = {id: 'ad', name:'die_sachsen'},ae = {id: 'ae', name:'friedrich'},ag = {id: 'ag', name:'alle_männer'} ; nodes.push( aa,ab,ac,ad,ae,ag ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: ae },{source: aa , target: ag },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: ag },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ag },{source: ad , target: ae },{source: ad , target: ag },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ag },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ae = nodes[3],af = {id: 'af', name:'elsa'},ag = nodes[4],ag = nodes[4],ah = {id: 'ah', name:'die_frauen'} ; nodes.push( af,ag,ah ); links.push( {source: ag , target: ah },{source: ac , target: ag },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ae },{source: ac , target: ah },{source: af , target: ag },{source: af , target: ag },{source: af , target: ah },{source: ag , target: ah },{source: ae , target: ag },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ab , target: ag },{source: ab , target: ac },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ae },{source: ab , target: ah },{source: aa , target: ag },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ae },{source: aa , target: ab },{source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0],ac = nodes[1],ae = nodes[2],af = nodes[3],ag = nodes[4],ah = nodes[5],ai = {id: 'ai', name:'lohengrin'},aj = {id: 'aj', name:'die_edlen'},ak = {id: 'ak', name:'ortrud'} ; nodes.push( ai,aj,ak ); links.push( {source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ai , target: aj },{source: ai , target: ak },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: af },{source: ac , target: aj },{source: ac , target: ae },{source: ac , target: ak },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: aj , target: ak },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: af },{source: ae , target: aj },{source: ae , target: ak },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: aj },{source: aa , target: ae },{source: aa , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ag','ah','ai','ac','af','aj','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ae = nodes[0],ak = nodes[1] ; /* nodes.push(); */ links.push( {source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ae = nodes[0],af = {id: 'af', name:'elsa'},ak = nodes[1] ; nodes.push( af ); links.push( {source: af , target: ak },{source: ae , target: af },{source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'af','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  aa = {id: 'aa', name:'der_heerrufer'},ae = nodes[0],ag = {id: 'ag', name:'alle_männer'},aj = {id: 'aj', name:'die_edlen'},al = {id: 'al', name:'der_dritte_edle'},am = {id: 'am', name:'der_zweite'},an = {id: 'an', name:'der_vierte'},ao = {id: 'ao', name:'der_erste'},ap = {id: 'ap', name:'die_edelknaben'} ; nodes.push( aa,ag,aj,al,am,an,ao,ap ); links.push( {source: aj , target: ao },{source: aj , target: am },{source: aj , target: al },{source: aj , target: an },{source: aj , target: ap },{source: ao , target: ap },{source: am , target: ao },{source: am , target: an },{source: am , target: ap },{source: al , target: ao },{source: al , target: am },{source: al , target: an },{source: al , target: ap },{source: an , target: ao },{source: an , target: ap },{source: ag , target: aj },{source: ag , target: ao },{source: ag , target: am },{source: ag , target: al },{source: ag , target: an },{source: ag , target: ap },{source: aa , target: aj },{source: aa , target: ao },{source: aa , target: am },{source: aa , target: al },{source: aa , target: an },{source: aa , target: ag },{source: aa , target: ae },{source: aa , target: ap },{source: ae , target: aj },{source: ae , target: ao },{source: ae , target: am },{source: ae , target: al },{source: ae , target: an },{source: ae , target: ag },{source: ae , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'aa','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  af = {id: 'af', name:'elsa'},ag = nodes[0],ah = {id: 'ah', name:'die_frauen'},aj = nodes[1],ak = {id: 'ak', name:'ortrud'},al = nodes[2],am = nodes[3],an = nodes[4],ao = nodes[5],ap = nodes[6] ; nodes.push( af,ah,ak,ap ); links.push( {source: aj , target: ao },{source: aj , target: am },{source: aj , target: al },{source: aj , target: an },{source: aj , target: ak },{source: aj , target: ap },{source: ao , target: ap },{source: am , target: ao },{source: am , target: an },{source: am , target: ap },{source: al , target: ao },{source: al , target: am },{source: al , target: an },{source: al , target: ap },{source: an , target: ao },{source: an , target: ap },{source: ag , target: aj },{source: ag , target: ao },{source: ag , target: am },{source: ag , target: al },{source: ag , target: an },{source: ag , target: ak },{source: ag , target: ap },{source: ag , target: ah },{source: ak , target: ao },{source: ak , target: am },{source: ak , target: al },{source: ak , target: an },{source: ak , target: ap },{source: af , target: aj },{source: af , target: ao },{source: af , target: am },{source: af , target: al },{source: af , target: an },{source: af , target: ag },{source: af , target: ak },{source: af , target: ap },{source: af , target: ah },{source: ah , target: aj },{source: ah , target: ao },{source: ah , target: am },{source: ah , target: al },{source: ah , target: an },{source: ah , target: ak },{source: ah , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'aj','ao','am','al','an','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ac = {id: 'ac', name:'könig'},ae = {id: 'ae', name:'friedrich'},af = nodes[0],ag = nodes[1],ah = nodes[2],ai = {id: 'ai', name:'lohengrin'},ak = nodes[3],aq = {id: 'aq', name:'des_königs_gefolge'} ; nodes.push( ac,ae,ai,aq ); links.push( {source: ag , target: ai },{source: ag , target: aq },{source: ag , target: ah },{source: ag , target: ak },{source: ac , target: ag },{source: ac , target: af },{source: ac , target: ai },{source: ac , target: aq },{source: ac , target: ae },{source: ac , target: ah },{source: ac , target: ak },{source: af , target: ag },{source: af , target: ai },{source: af , target: aq },{source: af , target: ah },{source: af , target: ak },{source: ai , target: aq },{source: ai , target: ak },{source: ae , target: ag },{source: ae , target: af },{source: ae , target: ai },{source: ae , target: aq },{source: ae , target: ah },{source: ae , target: ak },{source: ah , target: ai },{source: ah , target: aq },{source: ah , target: ak },{source: ak , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ac','af','ai','aq','ae','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ag = nodes[0],ah = nodes[1],ar = {id: 'ar', name:'acht_frauen'} ; nodes.push( ar ); links.push( {source: ag , target: ah },{source: ag , target: ar },{source: ah , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ag','ah','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  af = {id: 'af', name:'elsa'},ai = {id: 'ai', name:'lohengrin'} ; nodes.push( af,ai ); links.push( {source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ab = {id: 'ab', name:'die_brabanter'},ac = {id: 'ac', name:'könig'},ac = {id: 'ac', name:'könig'},af = nodes[1],ag = {id: 'ag', name:'alle_männer'},ag = {id: 'ag', name:'alle_männer'},ag = {id: 'ag', name:'alle_männer'},ah = {id: 'ah', name:'die_frauen'},ai = nodes[3],ak = {id: 'ak', name:'ortrud'},al = {id: 'al', name:'der_dritte_edle'},am = {id: 'am', name:'der_zweite'},an = {id: 'an', name:'der_vierte'},ao = {id: 'ao', name:'der_erste'} ; nodes.push( ab,ac,ag,ah,ak,al,am,an,ao ); links.push( {source: ag , target: ao },{source: ag , target: am },{source: ag , target: al },{source: ag , target: an },{source: ag , target: ai },{source: ag , target: ah },{source: ag , target: ak },{source: ac , target: ag },{source: ac , target: ag },{source: ac , target: ao },{source: ac , target: am },{source: ac , target: al },{source: ac , target: an },{source: ac , target: ag },{source: ac , target: ai },{source: ac , target: ah },{source: ac , target: af },{source: ac , target: ak },{source: ac , target: ag },{source: ac , target: ag },{source: ac , target: ao },{source: ac , target: am },{source: ac , target: al },{source: ac , target: an },{source: ac , target: ag },{source: ac , target: ai },{source: ac , target: ah },{source: ac , target: af },{source: ac , target: ak },{source: ag , target: ao },{source: ag , target: am },{source: ag , target: al },{source: ag , target: an },{source: ag , target: ai },{source: ag , target: ah },{source: ag , target: ak },{source: am , target: ao },{source: am , target: an },{source: al , target: ao },{source: al , target: am },{source: al , target: an },{source: an , target: ao },{source: ag , target: ao },{source: ag , target: am },{source: ag , target: al },{source: ag , target: an },{source: ag , target: ai },{source: ag , target: ah },{source: ag , target: ak },{source: ab , target: ag },{source: ab , target: ac },{source: ab , target: ac },{source: ab , target: ag },{source: ab , target: ao },{source: ab , target: am },{source: ab , target: al },{source: ab , target: an },{source: ab , target: ag },{source: ab , target: ai },{source: ab , target: ah },{source: ab , target: af },{source: ab , target: ak },{source: ai , target: ao },{source: ai , target: am },{source: ai , target: al },{source: ai , target: an },{source: ai , target: ak },{source: ah , target: ao },{source: ah , target: am },{source: ah , target: al },{source: ah , target: an },{source: ah , target: ai },{source: ah , target: ak },{source: af , target: ag },{source: af , target: ag },{source: af , target: ao },{source: af , target: am },{source: af , target: al },{source: af , target: an },{source: af , target: ag },{source: af , target: ai },{source: af , target: ah },{source: af , target: ak },{source: ak , target: ao },{source: ak , target: am },{source: ak , target: al },{source: ak , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 50000);
