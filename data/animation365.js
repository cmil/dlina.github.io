setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'oberst'},ab = {id: 'ab', name:'ida'},ac = {id: 'ac', name:'oldendorf'},ad = {id: 'ad', name:'senden'},ae = {id: 'ae', name:'karl'},af = {id: 'af', name:'blumenberg'},ag = {id: 'ag', name:'schmock'},ah = {id: 'ah', name:'adelheid'},ai = {id: 'ai', name:'korb'} ; nodes.push( aa,ab,ac,ad,ae,af,ag,ah,ai ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ai },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ai },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: ag , target: ah },{source: ag , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab','ad','ae','af','ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ac = nodes[2],ai = nodes[8],aj = {id: 'aj', name:'bolz'},ak = {id: 'ak', name:'müller'},al = {id: 'al', name:'bellmaus'},am = {id: 'am', name:'kämpe'},an = {id: 'an', name:'henning'},ao = {id: 'ao', name:'pavoni'} ; nodes.push( aj,ak,al,am,an,ao ); links.push( {source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: aj , target: ao },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: ao },{source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: am , target: an },{source: am , target: ao },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: am },{source: ac , target: ai },{source: ac , target: an },{source: ac , target: ao },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ai , target: an },{source: ai , target: ao },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'aj','ak','al','am','an','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = {id: 'aa', name:'oberst'},ab = {id: 'ab', name:'ida'},ac = nodes[0],ad = {id: 'ad', name:'senden'},ae = {id: 'ae', name:'karl'},af = {id: 'af', name:'blumenberg'},ah = {id: 'ah', name:'adelheid'},ai = nodes[1] ; nodes.push( aa,ab,ad,ae,af,ah ); links.push( {source: aa , target: ah },{source: aa , target: ab },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ac },{source: aa , target: ai },{source: ah , target: ai },{source: ab , target: ah },{source: ab , target: ae },{source: ab , target: ad },{source: ab , target: af },{source: ab , target: ac },{source: ab , target: ai },{source: ae , target: ah },{source: ae , target: af },{source: ae , target: ai },{source: ad , target: ah },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ai },{source: af , target: ah },{source: af , target: ai },{source: ac , target: ah },{source: ac , target: ae },{source: ac , target: ad },{source: ac , target: af },{source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ab','ae','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = nodes[0],ad = nodes[3],af = nodes[5],ag = {id: 'ag', name:'schmock'},ah = nodes[6],ai = nodes[7],aj = {id: 'aj', name:'bolz'},al = {id: 'al', name:'bellmaus'},am = {id: 'am', name:'kämpe'},an = {id: 'an', name:'henning'},ap = {id: 'ap', name:'gast'},aq = {id: 'aq', name:'piepenbrink'},ar = {id: 'ar', name:'frau_piepenbrink'},as = {id: 'as', name:'kleinmichel'},at = {id: 'at', name:'fritz'},at = {id: 'at', name:'fritz'},aw = {id: 'aw', name:'berta'} ; nodes.push( ag,aj,al,am,an,ap,aq,ar,as,at,aw ); links.push( {source: ad , target: af },{source: ad , target: ap },{source: ad , target: an },{source: ad , target: ag },{source: ad , target: aj },{source: ad , target: am },{source: ad , target: al },{source: ad , target: ai },{source: ad , target: ah },{source: ad , target: aq },{source: ad , target: ar },{source: ad , target: as },{source: ad , target: at },{source: ad , target: at },{source: ad , target: aw },{source: af , target: ap },{source: af , target: an },{source: af , target: ag },{source: af , target: aj },{source: af , target: am },{source: af , target: al },{source: af , target: ai },{source: af , target: ah },{source: af , target: aq },{source: af , target: ar },{source: af , target: as },{source: af , target: at },{source: af , target: at },{source: af , target: aw },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: at },{source: ap , target: at },{source: ap , target: aw },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: an , target: as },{source: an , target: at },{source: an , target: at },{source: an , target: aw },{source: ag , target: ap },{source: ag , target: an },{source: ag , target: aj },{source: ag , target: am },{source: ag , target: al },{source: ag , target: ai },{source: ag , target: ah },{source: ag , target: aq },{source: ag , target: ar },{source: ag , target: as },{source: ag , target: at },{source: ag , target: at },{source: ag , target: aw },{source: aj , target: ap },{source: aj , target: an },{source: aj , target: am },{source: aj , target: al },{source: aj , target: aq },{source: aj , target: ar },{source: aj , target: as },{source: aj , target: at },{source: aj , target: at },{source: aj , target: aw },{source: am , target: ap },{source: am , target: an },{source: am , target: aq },{source: am , target: ar },{source: am , target: as },{source: am , target: at },{source: am , target: at },{source: am , target: aw },{source: al , target: ap },{source: al , target: an },{source: al , target: am },{source: al , target: aq },{source: al , target: ar },{source: al , target: as },{source: al , target: at },{source: al , target: at },{source: al , target: aw },{source: ai , target: ap },{source: ai , target: an },{source: ai , target: aj },{source: ai , target: am },{source: ai , target: al },{source: ai , target: aq },{source: ai , target: ar },{source: ai , target: as },{source: ai , target: at },{source: ai , target: at },{source: ai , target: aw },{source: ah , target: ap },{source: ah , target: an },{source: ah , target: aj },{source: ah , target: am },{source: ah , target: al },{source: ah , target: ai },{source: ah , target: aq },{source: ah , target: ar },{source: ah , target: as },{source: ah , target: at },{source: ah , target: at },{source: ah , target: aw },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: at },{source: aq , target: at },{source: aq , target: aw },{source: ar , target: as },{source: ar , target: at },{source: ar , target: at },{source: ar , target: aw },{source: as , target: at },{source: as , target: at },{source: as , target: aw },{source: at , target: aw },{source: at , target: aw },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ap },{source: aa , target: an },{source: aa , target: ag },{source: aa , target: aj },{source: aa , target: am },{source: aa , target: al },{source: aa , target: ai },{source: aa , target: ah },{source: aa , target: aq },{source: aa , target: ar },{source: aa , target: as },{source: aa , target: at },{source: aa , target: at },{source: aa , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ap','an','ag','am','ar','as','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  aa = nodes[0],ab = {id: 'ab', name:'ida'},ac = {id: 'ac', name:'oldendorf'},ad = nodes[1],ae = {id: 'ae', name:'karl'},af = nodes[2],ah = nodes[4],ai = nodes[5],aj = nodes[6],al = nodes[7],aq = nodes[11],at = nodes[14] ; nodes.push( ab,ac,ae ); links.push( {source: ad , target: ah },{source: ad , target: af },{source: ad , target: ae },{source: ad , target: aj },{source: ad , target: ai },{source: ad , target: al },{source: ad , target: aq },{source: ad , target: at },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ah },{source: aa , target: af },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: aj },{source: aa , target: ai },{source: aa , target: al },{source: aa , target: aq },{source: aa , target: at },{source: ab , target: ad },{source: ab , target: ah },{source: ab , target: af },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: aj },{source: ab , target: ai },{source: ab , target: al },{source: ab , target: aq },{source: ab , target: at },{source: ah , target: aj },{source: ah , target: ai },{source: ah , target: al },{source: ah , target: aq },{source: ah , target: at },{source: af , target: ah },{source: af , target: aj },{source: af , target: ai },{source: af , target: al },{source: af , target: aq },{source: af , target: at },{source: ae , target: ah },{source: ae , target: af },{source: ae , target: aj },{source: ae , target: ai },{source: ae , target: al },{source: ae , target: aq },{source: ae , target: at },{source: ac , target: ad },{source: ac , target: ah },{source: ac , target: af },{source: ac , target: ae },{source: ac , target: aj },{source: ac , target: ai },{source: ac , target: al },{source: ac , target: aq },{source: ac , target: at },{source: aj , target: al },{source: aj , target: aq },{source: aj , target: at },{source: ai , target: aj },{source: ai , target: al },{source: ai , target: aq },{source: ai , target: at },{source: al , target: aq },{source: al , target: at },{source: aq , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = ''; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Akt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ad','ab','af','ac','aj','al','aq','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  aa = nodes[0],ae = nodes[4],ag = {id: 'ag', name:'schmock'},ah = nodes[6],ai = nodes[7] ; nodes.push( ag ); links.push( {source: aa , target: ae },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: ag },{source: ah , target: ai },{source: ag , target: ah },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ae','ai','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  aa = nodes[0],ab = {id: 'ab', name:'ida'},ac = {id: 'ac', name:'oldendorf'},ad = {id: 'ad', name:'senden'},ah = nodes[3],aj = {id: 'aj', name:'bolz'},ak = {id: 'ak', name:'müller'},al = {id: 'al', name:'bellmaus'},am = {id: 'am', name:'kämpe'},au = {id: 'au', name:'schwarz'},av = {id: 'av', name:'conrad'} ; nodes.push( ab,ac,ad,aj,ak,al,am,au,av ); links.push( {source: aj , target: ak },{source: aj , target: am },{source: aj , target: al },{source: aj , target: au },{source: aj , target: av },{source: ak , target: am },{source: ak , target: al },{source: ak , target: au },{source: ak , target: av },{source: am , target: au },{source: am , target: av },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: am },{source: ac , target: al },{source: ac , target: au },{source: ac , target: ad },{source: ac , target: ah },{source: ac , target: av },{source: al , target: am },{source: al , target: au },{source: al , target: av },{source: au , target: av },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: am },{source: ad , target: al },{source: ad , target: au },{source: ad , target: ah },{source: ad , target: av },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: am },{source: aa , target: ac },{source: aa , target: al },{source: aa , target: au },{source: aa , target: ad },{source: aa , target: ah },{source: aa , target: ab },{source: aa , target: av },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: am },{source: ah , target: al },{source: ah , target: au },{source: ah , target: av },{source: ab , target: aj },{source: ab , target: ak },{source: ab , target: am },{source: ab , target: ac },{source: ab , target: al },{source: ab , target: au },{source: ab , target: ad },{source: ab , target: ah },{source: ab , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 30000);
