setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'chor'},ab = {id: 'ab', name:'hidulfus'},ac = {id: 'ac', name:'golo'},ad = {id: 'ad', name:'siegfried'},ae = {id: 'ae', name:'genoveva'},af = {id: 'af', name:'drago'},ag = {id: 'ag', name:'margaretha'} ; nodes.push( aa,ab,ac,ad,ae,af,ag ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ae , target: af },{source: ae , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Akt.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ac = nodes[2],ae = nodes[4],af = nodes[5],ag = nodes[6],ah = {id: 'ah', name:'knechte'},ai = {id: 'ai', name:'mägde'},aj = {id: 'aj', name:'balthasar'} ; nodes.push( ah,ai,aj ); links.push( {source: ae , target: ah },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ai },{source: ae , target: aj },{source: ah , target: ai },{source: ah , target: aj },{source: ac , target: ae },{source: ac , target: ah },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ai },{source: ac , target: aj },{source: af , target: ah },{source: af , target: ag },{source: af , target: ai },{source: af , target: aj },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ai , target: aj },{source: aa , target: ae },{source: aa , target: ah },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ai },{source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Akt.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ae','ah','af','ai','aj','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ac = nodes[1],ad = {id: 'ad', name:'siegfried'},ag = nodes[4],ak = {id: 'ak', name:'stimmen_hinter_der_scene'},al = {id: 'al', name:'geist'} ; nodes.push( ad,ak,al ); links.push( {source: ad , target: ag },{source: ad , target: ak },{source: ad , target: al },{source: ag , target: ak },{source: ag , target: al },{source: ac , target: ad },{source: ac , target: ag },{source: ac , target: ak },{source: ac , target: al },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Akt.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ak','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = {id: 'aa', name:'chor'},ac = nodes[0],ad = nodes[1],ae = {id: 'ae', name:'genoveva'},ag = nodes[2],aj = {id: 'aj', name:'balthasar'},am = {id: 'am', name:'caspar'},an = {id: 'an', name:'jäger'},ao = {id: 'ao', name:'chor_der_frauen'},ap = {id: 'ap', name:'chor_der_männer'},aq = {id: 'aq', name:'mädchen'},ar = {id: 'ar', name:'jünglinge'} ; nodes.push( aa,ae,aj,am,an,ao,ap,aq,ar ); links.push( {source: ae , target: am },{source: ae , target: aj },{source: ae , target: an },{source: ae , target: ag },{source: ae , target: ao },{source: ae , target: ap },{source: ae , target: aq },{source: ae , target: ar },{source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: am , target: aq },{source: am , target: ar },{source: aj , target: am },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: ap },{source: aj , target: aq },{source: aj , target: ar },{source: ac , target: ae },{source: ac , target: am },{source: ac , target: aj },{source: ac , target: an },{source: ac , target: ag },{source: ac , target: ad },{source: ac , target: ao },{source: ac , target: ap },{source: ac , target: aq },{source: ac , target: ar },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: ag , target: am },{source: ag , target: aj },{source: ag , target: an },{source: ag , target: ao },{source: ag , target: ap },{source: ag , target: aq },{source: ag , target: ar },{source: ad , target: ae },{source: ad , target: am },{source: ad , target: aj },{source: ad , target: an },{source: ad , target: ag },{source: ad , target: ao },{source: ad , target: ap },{source: ad , target: aq },{source: ad , target: ar },{source: aa , target: ae },{source: aa , target: am },{source: aa , target: aj },{source: aa , target: ac },{source: aa , target: an },{source: aa , target: ag },{source: aa , target: ad },{source: aa , target: ao },{source: aa , target: ap },{source: aa , target: aq },{source: aa , target: ar },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: ap , target: aq },{source: ap , target: ar },{source: aq , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Akt.';
}, 15000);
