setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'box'},ab = {id: 'ab', name:'gordon'},ac = {id: 'ac', name:'waldemar'},ad = {id: 'ad', name:'bedienter'},ae = {id: 'ae', name:'hugo'},af = {id: 'af', name:'kammerfrau'},ag = {id: 'ag', name:'udaschkin'},ah = {id: 'ah', name:'gertrud'} ; nodes.push( aa,ab,ac,ad,ae,af,ag,ah ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ah },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: af , target: ag },{source: af , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Szene.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab','ad','ae','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ac = nodes[2],af = nodes[5],ag = nodes[6],ai = {id: 'ai', name:'georgine'},aj = {id: 'aj', name:'gregor'} ; nodes.push( ai,aj ); links.push( {source: ai , target: aj },{source: af , target: ai },{source: af , target: ag },{source: af , target: aj },{source: ag , target: ai },{source: ag , target: aj },{source: ac , target: ai },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ai','af','ag','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ac = nodes[0],ah = {id: 'ah', name:'gertrud'},ak = {id: 'ak', name:'frau_box'},al = {id: 'al', name:'rosa'},am = {id: 'am', name:'bose'},an = {id: 'an', name:'hans'},ao = {id: 'ao', name:'hiller'},ap = {id: 'ap', name:'stimme_des_wächters'},ap = {id: 'ap', name:'stimme_des_wächters'} ; nodes.push( ah,ak,al,am,an,ao,ap ); links.push( {source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: ap },{source: ak , target: ap },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ah , target: an },{source: ah , target: ao },{source: ah , target: ap },{source: ah , target: ap },{source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: al , target: ap },{source: al , target: ap },{source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: am , target: ap },{source: an , target: ao },{source: an , target: ap },{source: an , target: ap },{source: ao , target: ap },{source: ao , target: ap },{source: ac , target: ak },{source: ac , target: ah },{source: ac , target: al },{source: ac , target: am },{source: ac , target: an },{source: ac , target: ao },{source: ac , target: ap },{source: ac , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'al','am','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = {id: 'aa', name:'box'},ac = nodes[0],ah = nodes[1],ai = {id: 'ai', name:'georgine'},ak = nodes[2],an = nodes[5],ao = nodes[6],aq = {id: 'aq', name:'bezirksvorsteher'} ; nodes.push( aa,ai,aq ); links.push( {source: an , target: ao },{source: an , target: aq },{source: ah , target: an },{source: ah , target: ao },{source: ah , target: ai },{source: ah , target: aq },{source: ah , target: ak },{source: ac , target: an },{source: ac , target: ah },{source: ac , target: ao },{source: ac , target: ai },{source: ac , target: aq },{source: ac , target: ak },{source: ao , target: aq },{source: aa , target: an },{source: aa , target: ah },{source: aa , target: ac },{source: aa , target: ao },{source: aa , target: ai },{source: aa , target: aq },{source: aa , target: ak },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: aq },{source: ai , target: ak },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'an','ac','aa','aq','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ah = nodes[2],ai = nodes[3],ao = nodes[6] ; /* nodes.push(); */ links.push( {source: ah , target: ao },{source: ah , target: ai },{source: ai , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  aa = {id: 'aa', name:'box'},ac = {id: 'ac', name:'waldemar'},ae = {id: 'ae', name:'hugo'},ag = {id: 'ag', name:'udaschkin'},ah = nodes[0],ai = nodes[1],ao = nodes[2],ar = {id: 'ar', name:'randor'},as = {id: 'as', name:'henry'} ; nodes.push( aa,ac,ae,ag,ar,as ); links.push( {source: ae , target: ar },{source: ae , target: as },{source: ae , target: ag },{source: ae , target: ai },{source: ae , target: ao },{source: ae , target: ah },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: ar },{source: aa , target: as },{source: aa , target: ag },{source: aa , target: ai },{source: aa , target: ao },{source: aa , target: ah },{source: ac , target: ae },{source: ac , target: ar },{source: ac , target: as },{source: ac , target: ag },{source: ac , target: ai },{source: ac , target: ao },{source: ac , target: ah },{source: ar , target: as },{source: ag , target: ar },{source: ag , target: as },{source: ag , target: ai },{source: ag , target: ao },{source: ag , target: ah },{source: ai , target: ar },{source: ai , target: as },{source: ai , target: ao },{source: ao , target: ar },{source: ao , target: as },{source: ah , target: ar },{source: ah , target: as },{source: ah , target: ai },{source: ah , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ae','aa','ar','as','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ac = nodes[1],ah = nodes[4],ai = nodes[5],an = {id: 'an', name:'hans'},ao = nodes[6] ; nodes.push( an ); links.push( {source: ah , target: ai },{source: ah , target: an },{source: ah , target: ao },{source: ai , target: an },{source: ai , target: ao },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: an },{source: ac , target: ao },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Szene.';
}, 30000);
