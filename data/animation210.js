setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af ag ah ai aj */ var  aa = {id: 'aa', name:'kartenaufschlägerin'},ab = {id: 'ab', name:'adelaide'},ac = {id: 'ac', name:'zdenkas_stimme'},ad = {id: 'ad', name:'matteo'},ae = {id: 'ae', name:'arabella'},af = {id: 'af', name:'elemer'},ag = {id: 'ag', name:'waldner'},ah = {id: 'ah', name:'zimmerkellner'},ai = {id: 'ai', name:'mandryka'},aj = {id: 'aj', name:'welko'} ; nodes.push( aa,ab,ac,ad,ae,af,ag,ah,ai,aj ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: aj },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: aj },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: aj },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: aj },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ah , target: ai },{source: ah , target: aj },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Aufzug';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ab ac ad ae af ag ai aj ak al am an ar */ var  ab = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,ae = nodes[3] ,af = nodes[4] ,ag = nodes[5] ,ai = nodes[6] ,aj = nodes[7] ,ak = {id: 'ak', name:'lamoral'},al = {id: 'al', name:'dominik'},am = {id: 'am', name:'milli'},an = {id: 'an', name:'piccolo'},ar = {id: 'ar', name:'fiaker'} ; nodes.push( ak,al,am,an,ar ); links.push( {source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ai , target: ar },{source: ai , target: aj },{source: ai , target: am },{source: ai , target: an },{source: ag , target: ai },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: am },{source: ag , target: ar },{source: ag , target: aj },{source: ag , target: am },{source: ag , target: an },{source: ab , target: ai },{source: ab , target: ag },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: am },{source: ab , target: ar },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: aj },{source: ab , target: am },{source: ab , target: an },{source: ae , target: ai },{source: ae , target: ag },{source: ae , target: af },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: am },{source: ae , target: ar },{source: ae , target: aj },{source: ae , target: am },{source: ae , target: an },{source: af , target: ai },{source: af , target: ag },{source: af , target: ak },{source: af , target: al },{source: af , target: am },{source: af , target: ar },{source: af , target: aj },{source: af , target: am },{source: af , target: an },{source: ak , target: al },{source: ak , target: am },{source: ak , target: ar },{source: ak , target: am },{source: ak , target: an },{source: al , target: am },{source: al , target: ar },{source: al , target: am },{source: al , target: an },{source: am , target: ar },{source: am , target: an },{source: ad , target: ai },{source: ad , target: ag },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: am },{source: ad , target: ar },{source: ad , target: aj },{source: ad , target: am },{source: ad , target: an },{source: ac , target: ai },{source: ac , target: ag },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: am },{source: ac , target: ar },{source: ac , target: ad },{source: ac , target: aj },{source: ac , target: am },{source: ac , target: an },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: ar },{source: aj , target: am },{source: aj , target: an },{source: am , target: ar },{source: am , target: an },{source: an , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Aufzug';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'af','ak','al','am','ar','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab ac ad ae ag ai aj ao ap aq */ var  ab = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,ae = nodes[3] ,ag = nodes[4] ,ai = nodes[5] ,aj = nodes[6] ,ao = {id: 'ao', name:'die_gäste'},ap = {id: 'ap', name:'einer_der_spieler'},aq = {id: 'aq', name:'die_spieler'} ; nodes.push( ao,ap,aq ); links.push( {source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ag },{source: ae , target: ao },{source: ae , target: ap },{source: ae , target: aq },{source: ae , target: aq },{source: ad , target: ae },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ag },{source: ad , target: ao },{source: ad , target: ap },{source: ad , target: aq },{source: ad , target: aq },{source: ab , target: ae },{source: ab , target: ad },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ag },{source: ab , target: ao },{source: ab , target: ap },{source: ab , target: ac },{source: ab , target: ac },{source: ab , target: aq },{source: ab , target: aq },{source: ai , target: aj },{source: ai , target: ao },{source: ai , target: ap },{source: ai , target: aq },{source: ai , target: aq },{source: aj , target: ao },{source: aj , target: ap },{source: aj , target: aq },{source: aj , target: aq },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ao },{source: ag , target: ap },{source: ag , target: aq },{source: ag , target: aq },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: aq },{source: ap , target: aq },{source: ap , target: aq },{source: ac , target: ae },{source: ac , target: ad },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ag },{source: ac , target: ao },{source: ac , target: ap },{source: ac , target: aq },{source: ac , target: aq },{source: ac , target: ae },{source: ac , target: ad },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ag },{source: ac , target: ao },{source: ac , target: ap },{source: ac , target: aq },{source: ac , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Aufzug';
}, 10000);
