setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'voltaire'},ab = {id: 'ab', name:'amme'},ac = {id: 'ac', name:'gespenst'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '[Stücktext]'; var scene = document.getElementById('scene');scene.innerHTML = '[Stücktext]';
}, 0);
