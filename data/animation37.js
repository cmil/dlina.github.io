setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac */ var  aa = {id: 'aa', name:'bezirksamtmann'},ab = {id: 'ab', name:'frau_bezirksamtmann'},ac = {id: 'ac', name:'babette'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ad */ var  aa = nodes[0] ,ab = nodes[1] ,ad = {id: 'ad', name:'assessor'} ; nodes.push( ad ); links.push( {source: aa , target: ad },{source: aa , target: ab },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab ad ae */ var  aa = nodes[0] ,ab = nodes[1] ,ad = nodes[2] ,ae = {id: 'ae', name:'lampl'} ; nodes.push( ae ); links.push( {source: aa , target: ae },{source: aa , target: ab },{source: aa , target: ad },{source: ab , target: ae },{source: ab , target: ad },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ab ad ae af ag */ var  aa = nodes[0] ,ab = nodes[1] ,ad = nodes[2] ,ae = nodes[3] ,af = {id: 'af', name:'sedlmaier'},ag = {id: 'ag', name:'hahnrieder'} ; nodes.push( af,ag ); links.push( {source: aa , target: af },{source: aa , target: ag },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ab },{source: af , target: ag },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ae },{source: ae , target: af },{source: ae , target: ag },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ad },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa ad ae af ag ah ai aj */ var  aa = nodes[0] ,ad = nodes[1] ,ae = nodes[2] ,af = nodes[3] ,ag = nodes[4] ,ah = {id: 'ah', name:'haberlein'},ai = {id: 'ai', name:'grubhoper'},aj = {id: 'aj', name:'merkl'} ; nodes.push( ah,ai,aj ); links.push( {source: aa , target: ah },{source: aa , target: ae },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ag },{source: ah , target: ai },{source: ah , target: aj },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: af },{source: ae , target: ag },{source: ai , target: aj },{source: ad , target: ah },{source: ad , target: ae },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: af },{source: ad , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ag },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa ab ac ad ae af ag ah ai aj ak al am an */ var  aa = nodes[0] ,ab = {id: 'ab', name:'frau_bezirksamtmann'},ac = {id: 'ac', name:'babette'},ad = nodes[1] ,ae = nodes[2] ,af = nodes[3] ,ag = nodes[4] ,ah = nodes[5] ,ai = nodes[6] ,aj = nodes[7] ,ak = {id: 'ak', name:'peter_neusigl'},al = {id: 'al', name:'frau_neusigl'},am = {id: 'am', name:'anna'},an = {id: 'an', name:'regierungsdirektor_steinbeissel'} ; nodes.push( ab,ac,ak,al,am,an ); links.push( {source: aa , target: ae },{source: aa , target: ak },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ag },{source: aa , target: af },{source: aa , target: ah },{source: aa , target: al },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: am },{source: aa , target: ac },{source: aa , target: ak },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: an },{source: ae , target: ak },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ag },{source: ae , target: af },{source: ae , target: ah },{source: ae , target: al },{source: ae , target: am },{source: ae , target: ak },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: an },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ai , target: ak },{source: ai , target: aj },{source: ai , target: al },{source: ai , target: am },{source: ai , target: ak },{source: ai , target: an },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: ak },{source: aj , target: an },{source: ag , target: ak },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ah },{source: ag , target: al },{source: ag , target: am },{source: ag , target: ak },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: an },{source: af , target: ak },{source: af , target: ai },{source: af , target: aj },{source: af , target: ag },{source: af , target: ah },{source: af , target: al },{source: af , target: am },{source: af , target: ak },{source: af , target: ah },{source: af , target: ai },{source: af , target: an },{source: ah , target: ak },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: al },{source: ah , target: am },{source: ah , target: ak },{source: ah , target: ai },{source: ah , target: an },{source: al , target: am },{source: al , target: an },{source: ad , target: ae },{source: ad , target: ak },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ag },{source: ad , target: af },{source: ad , target: ah },{source: ad , target: al },{source: ad , target: am },{source: ad , target: ak },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: an },{source: ab , target: ae },{source: ab , target: ak },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ag },{source: ab , target: af },{source: ab , target: ah },{source: ab , target: al },{source: ab , target: ad },{source: ab , target: am },{source: ab , target: ac },{source: ab , target: ak },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: an },{source: am , target: an },{source: ac , target: ae },{source: ac , target: ak },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ag },{source: ac , target: af },{source: ac , target: ah },{source: ac , target: al },{source: ac , target: ad },{source: ac , target: am },{source: ac , target: ak },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: an },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ah , target: ak },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: al },{source: ah , target: am },{source: ah , target: ak },{source: ah , target: ai },{source: ah , target: an },{source: ai , target: ak },{source: ai , target: aj },{source: ai , target: al },{source: ai , target: am },{source: ai , target: ak },{source: ai , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 30000);
