setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae */ var  aa = {id: 'aa', name:'mossino'},ab = {id: 'ab', name:'marikanno'},ac = {id: 'ac', name:'passeck'},ad = {id: 'ad', name:'kefinska'},ae = {id: 'ae', name:'lissamátsch'} ; nodes.push( aa,ab,ac,ad,ae ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '[Stücktext]'; var scene = document.getElementById('scene');scene.innerHTML = '[Stücktext]';
}, 0);
