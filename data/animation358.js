setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'mirza'},ab = {id: 'ab', name:'massuds_stimme'},ac = {id: 'ac', name:'zanga'},ad = {id: 'ad', name:'rustans_stimme'} ; nodes.push( aa,ab,ac,ad ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Aufzug';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ac = nodes[0],ad = nodes[1],ae = {id: 'ae', name:'der_mann'},ae = {id: 'ae', name:'der_mann'},ae = {id: 'ae', name:'der_mann'},ae = {id: 'ae', name:'der_mann'},af = {id: 'af', name:'gülnare'},aj = {id: 'aj', name:'stimme'},aj = {id: 'aj', name:'stimme'},aj = {id: 'aj', name:'stimme'},aj = {id: 'aj', name:'stimme'},al = {id: 'al', name:'kämmerer'} ; nodes.push( ae,af,aj,al ); links.push( {source: ad , target: aj },{source: ad , target: aj },{source: ad , target: aj },{source: ad , target: ae },{source: ad , target: aj },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ae },{source: ad , target: ae },{source: ad , target: al },{source: ac , target: ad },{source: ac , target: aj },{source: ac , target: aj },{source: ac , target: aj },{source: ac , target: ae },{source: ac , target: aj },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ae },{source: ac , target: ae },{source: ac , target: al },{source: aj , target: al },{source: aj , target: al },{source: aj , target: al },{source: ae , target: aj },{source: ae , target: aj },{source: ae , target: aj },{source: ae , target: aj },{source: ae , target: af },{source: ae , target: al },{source: aj , target: al },{source: ae , target: aj },{source: ae , target: aj },{source: ae , target: aj },{source: ae , target: aj },{source: ae , target: af },{source: ae , target: al },{source: af , target: aj },{source: af , target: aj },{source: af , target: aj },{source: af , target: aj },{source: af , target: al },{source: ae , target: aj },{source: ae , target: aj },{source: ae , target: aj },{source: ae , target: aj },{source: ae , target: af },{source: ae , target: al },{source: ae , target: aj },{source: ae , target: aj },{source: ae , target: aj },{source: ae , target: aj },{source: ae , target: af },{source: ae , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Aufzug';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ae','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ac = nodes[0],ad = nodes[1],af = nodes[3],ag = {id: 'ag', name:'kämmerling'},ah = {id: 'ah', name:'karkhan'},ai = {id: 'ai', name:'die_alte'},aj = nodes[4],aj = nodes[4],ak = {id: 'ak', name:'volk'},ak = {id: 'ak', name:'volk'} ; nodes.push( ag,ah,ai,aj,ak ); links.push( {source: ac , target: ak },{source: ac , target: aj },{source: ac , target: ad },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: af },{source: ac , target: ak },{source: aj , target: ak },{source: aj , target: ak },{source: ad , target: ak },{source: ad , target: aj },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: af },{source: ad , target: ak },{source: ag , target: ak },{source: ag , target: aj },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ah , target: ak },{source: ah , target: aj },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ai , target: ak },{source: ai , target: aj },{source: ai , target: aj },{source: ai , target: ak },{source: aj , target: ak },{source: aj , target: ak },{source: af , target: ak },{source: af , target: aj },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Aufzug';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ak','aj','ag','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = {id: 'aa', name:'mirza'},ab = {id: 'ab', name:'massuds_stimme'},ab = {id: 'ab', name:'massuds_stimme'},ac = nodes[1],ad = nodes[2],ad = nodes[2],af = nodes[3],ah = nodes[4],al = {id: 'al', name:'kämmerer'},am = {id: 'am', name:'hauptmann'},an = {id: 'an', name:'der_alte'},ao = {id: 'ao', name:'eine_dienerin'},ap = {id: 'ap', name:'anführer'} ; nodes.push( aa,ab,ad,al,am,an,ao,ap ); links.push( {source: ah , target: al },{source: ah , target: am },{source: ah , target: an },{source: ah , target: ao },{source: ah , target: ap },{source: ad , target: ah },{source: ad , target: al },{source: ad , target: am },{source: ad , target: af },{source: ad , target: an },{source: ad , target: ao },{source: ad , target: ap },{source: ac , target: ah },{source: ac , target: ad },{source: ac , target: al },{source: ac , target: am },{source: ac , target: af },{source: ac , target: an },{source: ac , target: ad },{source: ac , target: ao },{source: ac , target: ap },{source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: al , target: ap },{source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: af , target: ah },{source: af , target: al },{source: af , target: am },{source: af , target: an },{source: af , target: ao },{source: af , target: ap },{source: an , target: ao },{source: an , target: ap },{source: ad , target: ah },{source: ad , target: al },{source: ad , target: am },{source: ad , target: af },{source: ad , target: an },{source: ad , target: ao },{source: ad , target: ap },{source: ao , target: ap },{source: aa , target: ah },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: al },{source: aa , target: am },{source: aa , target: af },{source: aa , target: an },{source: aa , target: ad },{source: aa , target: ao },{source: aa , target: ab },{source: aa , target: ab },{source: aa , target: ap },{source: ab , target: ah },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: al },{source: ab , target: am },{source: ab , target: af },{source: ab , target: an },{source: ab , target: ad },{source: ab , target: ao },{source: ab , target: ap },{source: ab , target: ah },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: al },{source: ab , target: am },{source: ab , target: af },{source: ab , target: an },{source: ab , target: ad },{source: ab , target: ao },{source: ab , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Aufzug';
}, 15000);
