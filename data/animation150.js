setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af ag ah ai */ var  aa = {id: 'aa', name:'diener'},ab = {id: 'ab', name:'graf'},ac = {id: 'ac', name:'komtesse'},ad = {id: 'ad', name:'gärtner'},ae = {id: 'ae', name:'fürst'},af = {id: 'af', name:'philipp'},ag = {id: 'ag', name:'lolo'},ah = {id: 'ah', name:'wasner'},ai = {id: 'ai', name:'professor'} ; nodes.push( aa,ab,ac,ad,ae,af,ag,ah,ai ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: ai },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: ai },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: ai },{source: ad , target: ae },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: ai },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: ai },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: ai },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: ai },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: ai },{source: ah , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '[Stücktext]'; var scene = document.getElementById('scene');scene.innerHTML = '[Stücktext]';
}, 0);
