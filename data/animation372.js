setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af ag ah ai aj ak al am an ao ap aq ar at aw ax */ var  aa = {id: 'aa', name:'von_der_strasse_herauf'},ab = {id: 'ab', name:'bancbanus'},ac = {id: 'ac', name:'ein_diener'},ad = {id: 'ad', name:'gesang'},ae = {id: 'ae', name:'viele_stimmen'},af = {id: 'af', name:'zweiter_diener'},ag = {id: 'ag', name:'dienerin'},ah = {id: 'ah', name:'erny'},ai = {id: 'ai', name:'geschrei'},aj = {id: 'aj', name:'kammerfrau'},ak = {id: 'ak', name:'erster_begleiter'},al = {id: 'al', name:'otto'},am = {id: 'am', name:'zweiter_begleiter'},an = {id: 'an', name:'diener'},ao = {id: 'ao', name:'hauptmann'},ap = {id: 'ap', name:'gertrude'},aq = {id: 'aq', name:'könig'},ar = {id: 'ar', name:'kämmerer'},at = {id: 'at', name:'königin'},aw = {id: 'aw', name:'graf_peter'},ax = {id: 'ax', name:'simon'} ; nodes.push( aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,at,aw,ax ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: al },{source: aa , target: am },{source: aa , target: an },{source: aa , target: ao },{source: aa , target: ap },{source: aa , target: aq },{source: aa , target: ar },{source: aa , target: ax },{source: aa , target: aw },{source: aa , target: at },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: am },{source: ab , target: an },{source: ab , target: ao },{source: ab , target: ap },{source: ab , target: aq },{source: ab , target: ar },{source: ab , target: ax },{source: ab , target: aw },{source: ab , target: at },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: am },{source: ac , target: an },{source: ac , target: ao },{source: ac , target: ap },{source: ac , target: aq },{source: ac , target: ar },{source: ac , target: ax },{source: ac , target: aw },{source: ac , target: at },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: am },{source: ad , target: an },{source: ad , target: ao },{source: ad , target: ap },{source: ad , target: aq },{source: ad , target: ar },{source: ad , target: ax },{source: ad , target: aw },{source: ad , target: at },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: am },{source: ae , target: an },{source: ae , target: ao },{source: ae , target: ap },{source: ae , target: aq },{source: ae , target: ar },{source: ae , target: ax },{source: ae , target: aw },{source: ae , target: at },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: af , target: al },{source: af , target: am },{source: af , target: an },{source: af , target: ao },{source: af , target: ap },{source: af , target: aq },{source: af , target: ar },{source: af , target: ax },{source: af , target: aw },{source: af , target: at },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: am },{source: ag , target: an },{source: ag , target: ao },{source: ag , target: ap },{source: ag , target: aq },{source: ag , target: ar },{source: ag , target: ax },{source: ag , target: aw },{source: ag , target: at },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ah , target: an },{source: ah , target: ao },{source: ah , target: ap },{source: ah , target: aq },{source: ah , target: ar },{source: ah , target: ax },{source: ah , target: aw },{source: ah , target: at },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: ap },{source: ai , target: aq },{source: ai , target: ar },{source: ai , target: ax },{source: ai , target: aw },{source: ai , target: at },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: ap },{source: aj , target: aq },{source: aj , target: ar },{source: aj , target: ax },{source: aj , target: aw },{source: aj , target: at },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: ap },{source: ak , target: aq },{source: ak , target: ar },{source: ak , target: ax },{source: ak , target: aw },{source: ak , target: at },{source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: al , target: ap },{source: al , target: aq },{source: al , target: ar },{source: al , target: ax },{source: al , target: aw },{source: al , target: at },{source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: am , target: aq },{source: am , target: ar },{source: am , target: ax },{source: am , target: aw },{source: am , target: at },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: an , target: ax },{source: an , target: aw },{source: an , target: at },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: ao , target: ax },{source: ao , target: aw },{source: ao , target: at },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: ax },{source: ap , target: aw },{source: ap , target: at },{source: aq , target: ar },{source: aq , target: ax },{source: aq , target: aw },{source: aq , target: at },{source: ar , target: ax },{source: ar , target: aw },{source: ar , target: at },{source: aw , target: ax },{source: at , target: ax },{source: at , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Aufzug';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '20%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ad','ae','ag','ai','aj','ak','am','ao','ap','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ab ac af ah al an ar at au av aw ax */ var  ab = nodes[0] ,ac = nodes[1] ,af = nodes[2] ,ah = nodes[3] ,al = nodes[4] ,an = nodes[5] ,ar = nodes[6] ,at = nodes[7] ,au = {id: 'au', name:'bela'},av = {id: 'av', name:'edelmann'},aw = nodes[8] ,ax = nodes[9]  ; nodes.push( au,av ); links.push( {source: ab , target: al },{source: ab , target: at },{source: ab , target: au },{source: ab , target: av },{source: ab , target: ac },{source: ab , target: af },{source: ab , target: ac },{source: ab , target: aw },{source: ab , target: ax },{source: ab , target: ah },{source: ab , target: an },{source: ab , target: ar },{source: al , target: at },{source: al , target: au },{source: al , target: av },{source: al , target: aw },{source: al , target: ax },{source: al , target: an },{source: al , target: ar },{source: at , target: au },{source: at , target: av },{source: at , target: aw },{source: at , target: ax },{source: au , target: av },{source: au , target: aw },{source: au , target: ax },{source: av , target: aw },{source: av , target: ax },{source: ac , target: al },{source: ac , target: at },{source: ac , target: au },{source: ac , target: av },{source: ac , target: af },{source: ac , target: aw },{source: ac , target: ax },{source: ac , target: ah },{source: ac , target: an },{source: ac , target: ar },{source: af , target: al },{source: af , target: at },{source: af , target: au },{source: af , target: av },{source: af , target: aw },{source: af , target: ax },{source: af , target: ah },{source: af , target: an },{source: af , target: ar },{source: ac , target: al },{source: ac , target: at },{source: ac , target: au },{source: ac , target: av },{source: ac , target: af },{source: ac , target: aw },{source: ac , target: ax },{source: ac , target: ah },{source: ac , target: an },{source: ac , target: ar },{source: aw , target: ax },{source: ah , target: al },{source: ah , target: at },{source: ah , target: au },{source: ah , target: av },{source: ah , target: aw },{source: ah , target: ax },{source: ah , target: an },{source: ah , target: ar },{source: an , target: at },{source: an , target: au },{source: an , target: av },{source: an , target: aw },{source: an , target: ax },{source: an , target: ar },{source: ar , target: at },{source: ar , target: au },{source: ar , target: av },{source: ar , target: aw },{source: ar , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Aufzug';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '40%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'au','av','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab ac af ah al an at aw ax ay */ var  ab = nodes[0] ,ac = nodes[1] ,af = nodes[2] ,ah = nodes[3] ,al = nodes[4] ,an = nodes[5] ,at = nodes[6] ,aw = nodes[7] ,ax = nodes[8] ,ay = {id: 'ay', name:'arzt'} ; nodes.push( ay ); links.push( {source: at , target: ay },{source: at , target: aw },{source: at , target: aw },{source: at , target: ax },{source: aw , target: ay },{source: aw , target: ax },{source: ah , target: at },{source: ah , target: ay },{source: ah , target: aw },{source: ah , target: an },{source: ah , target: al },{source: ah , target: aw },{source: ah , target: ax },{source: an , target: at },{source: an , target: ay },{source: an , target: aw },{source: an , target: aw },{source: an , target: ax },{source: ac , target: at },{source: ac , target: ay },{source: ac , target: aw },{source: ac , target: ah },{source: ac , target: an },{source: ac , target: af },{source: ac , target: al },{source: ac , target: aw },{source: ac , target: ax },{source: af , target: at },{source: af , target: ay },{source: af , target: aw },{source: af , target: ah },{source: af , target: an },{source: af , target: al },{source: af , target: aw },{source: af , target: ax },{source: al , target: at },{source: al , target: ay },{source: al , target: aw },{source: al , target: an },{source: al , target: aw },{source: al , target: ax },{source: aw , target: ay },{source: aw , target: ax },{source: ax , target: ay },{source: ab , target: at },{source: ab , target: ay },{source: ab , target: aw },{source: ab , target: ah },{source: ab , target: an },{source: ab , target: ac },{source: ab , target: af },{source: ab , target: al },{source: ab , target: aw },{source: ab , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Aufzug';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ay','ah','an','ac','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ab aj al at aw ax az ba bb bc bd */ var  ab = nodes[0] ,aj = {id: 'aj', name:'kammerfrau'},al = nodes[1] ,at = nodes[2] ,aw = nodes[3] ,ax = nodes[4] ,az = {id: 'az', name:'schlosshauptmann'},ba = {id: 'ba', name:'ein_gewaffneter'},bb = {id: 'bb', name:'erster_edelmann'},bc = {id: 'bc', name:'zweiter_edelmann'},bd = {id: 'bd', name:'ungarischer_anführer'} ; nodes.push( aj,az,ba,bb,bc,bd ); links.push( {source: ax , target: az },{source: ax , target: ba },{source: ax , target: bb },{source: ax , target: bc },{source: ax , target: bd },{source: aw , target: ax },{source: aw , target: az },{source: aw , target: ba },{source: aw , target: bb },{source: aw , target: bc },{source: aw , target: bd },{source: ab , target: ax },{source: ab , target: aw },{source: ab , target: at },{source: ab , target: al },{source: ab , target: az },{source: ab , target: aj },{source: ab , target: ba },{source: ab , target: bb },{source: ab , target: bc },{source: ab , target: bd },{source: at , target: ax },{source: at , target: aw },{source: at , target: az },{source: at , target: ba },{source: at , target: bb },{source: at , target: bc },{source: at , target: bd },{source: al , target: ax },{source: al , target: aw },{source: al , target: at },{source: al , target: az },{source: al , target: ba },{source: al , target: bb },{source: al , target: bc },{source: al , target: bd },{source: az , target: ba },{source: az , target: bb },{source: az , target: bc },{source: az , target: bd },{source: aj , target: ax },{source: aj , target: aw },{source: aj , target: at },{source: aj , target: al },{source: aj , target: az },{source: aj , target: ba },{source: aj , target: bb },{source: aj , target: bc },{source: aj , target: bd },{source: ba , target: bb },{source: ba , target: bc },{source: ba , target: bd },{source: bb , target: bc },{source: bb , target: bd },{source: bc , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Aufzug';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'at','az','aj','ba','bb','bc','bd' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ab al ao aq aw ax be bf bg */ var  ab = nodes[0] ,al = nodes[1] ,ao = {id: 'ao', name:'hauptmann'},aq = {id: 'aq', name:'könig'},aw = nodes[2] ,ax = nodes[3] ,be = {id: 'be', name:'soldat'},bf = {id: 'bf', name:'befehlshaber'},bg = {id: 'bg', name:'anführer'} ; nodes.push( ao,aq,be,bf,bg ); links.push( {source: ab , target: al },{source: ab , target: be },{source: ab , target: ao },{source: ab , target: aw },{source: ab , target: ax },{source: ab , target: bf },{source: ab , target: aq },{source: ab , target: bg },{source: ab , target: bg },{source: al , target: be },{source: al , target: ao },{source: al , target: aw },{source: al , target: ax },{source: al , target: bf },{source: al , target: aq },{source: al , target: bg },{source: al , target: bg },{source: be , target: bf },{source: be , target: bg },{source: be , target: bg },{source: ao , target: be },{source: ao , target: aw },{source: ao , target: ax },{source: ao , target: bf },{source: ao , target: aq },{source: ao , target: bg },{source: ao , target: bg },{source: aw , target: be },{source: aw , target: ax },{source: aw , target: bf },{source: aw , target: bg },{source: aw , target: bg },{source: ax , target: be },{source: ax , target: bf },{source: ax , target: bg },{source: ax , target: bg },{source: bf , target: bg },{source: bf , target: bg },{source: aq , target: be },{source: aq , target: aw },{source: aq , target: ax },{source: aq , target: bf },{source: aq , target: bg },{source: aq , target: bg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Aufzug';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 20000);