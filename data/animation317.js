setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad */ var  aa = {id: 'aa', name:'woglinde'},ab = {id: 'ab', name:'wellgundes_stimme'},ac = {id: 'ac', name:'flosshildes_stimme_von_oben'},ad = {id: 'ad', name:'alberich'} ; nodes.push( aa,ab,ac,ad ); links.push( {source: aa , target: ab },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Vorspiel und 1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vorspiel und Erste Szene';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab','ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ae af ag ah ai aj ak al */ var  ae = {id: 'ae', name:'fricka'},af = {id: 'af', name:'wotan'},ag = {id: 'ag', name:'freia'},ah = {id: 'ah', name:'fasolt'},ai = {id: 'ai', name:'fafner'},aj = {id: 'aj', name:'froh'},ak = {id: 'ak', name:'donner'},al = {id: 'al', name:'loge'} ; nodes.push( ae,af,ag,ah,ai,aj,ak,al ); links.push( {source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: al },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: af , target: al },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: al },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: aj , target: ak },{source: aj , target: al },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ae','ag','ah','ai','aj','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ad af al am */ var  ad = {id: 'ad', name:'alberich'},af = nodes[0] ,al = nodes[1] ,am = {id: 'am', name:'mime'} ; nodes.push( ad,am ); links.push( {source: ad , target: am },{source: ad , target: al },{source: ad , target: af },{source: al , target: am },{source: af , target: am },{source: af , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab ac ad ae af ag ah ai aj ak al an */ var  aa = {id: 'aa', name:'woglinde'},ab = {id: 'ab', name:'wellgundes_stimme'},ac = {id: 'ac', name:'flosshildes_stimme_von_oben'},ad = nodes[0] ,ae = {id: 'ae', name:'fricka'},af = nodes[1] ,ag = {id: 'ag', name:'freia'},ah = {id: 'ah', name:'fasolt'},ai = {id: 'ai', name:'fafner'},aj = {id: 'aj', name:'froh'},ak = {id: 'ak', name:'donner'},al = nodes[2] ,an = {id: 'an', name:'erda'} ; nodes.push( aa,ab,ac,ae,ag,ah,ai,aj,ak,an ); links.push( {source: al , target: an },{source: ad , target: al },{source: ad , target: af },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: ae },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: ag },{source: ad , target: an },{source: af , target: al },{source: af , target: aj },{source: af , target: ak },{source: af , target: ah },{source: af , target: ai },{source: af , target: ag },{source: af , target: an },{source: aj , target: al },{source: aj , target: ak },{source: aj , target: an },{source: ak , target: al },{source: ak , target: an },{source: ae , target: al },{source: ae , target: af },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: ag },{source: ae , target: an },{source: ah , target: al },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: ai },{source: ah , target: an },{source: ai , target: al },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: an },{source: ag , target: al },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: an },{source: aa , target: al },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: ae },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: ag },{source: aa , target: an },{source: aa , target: ab },{source: aa , target: ac },{source: ab , target: al },{source: ab , target: ad },{source: ab , target: af },{source: ab , target: aj },{source: ab , target: ak },{source: ab , target: ae },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: ag },{source: ab , target: an },{source: ab , target: ac },{source: ac , target: al },{source: ac , target: ad },{source: ac , target: af },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: ae },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: ag },{source: ac , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 15000);
