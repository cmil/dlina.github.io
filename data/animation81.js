setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af ag ah ai */ var  aa = {id: 'aa', name:'frau_ermischer'},ab = {id: 'ab', name:'maari'},ac = {id: 'ac', name:'ermischer'},ad = {id: 'ad', name:'ulbrich'},ae = {id: 'ae', name:'seifert'},af = {id: 'af', name:'gendarm_weigel'},ag = {id: 'ag', name:'neubert'},ah = {id: 'ah', name:'frau_neubert'},ai = {id: 'ai', name:'neumerkel'} ; nodes.push( aa,ab,ac,ad,ae,af,ag,ah,ai ); links.push( {source: aa , target: ab },{source: aa , target: ah },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ai },{source: ab , target: ah },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ai },{source: ah , target: ai },{source: ac , target: ah },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ai },{source: ad , target: ah },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ai },{source: ae , target: ah },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ai },{source: af , target: ah },{source: af , target: ag },{source: af , target: ai },{source: ag , target: ah },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Akt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ac ad ae af ag ah ai aj ak al am an ao ap aq */ var  ac = nodes[0] ,ad = nodes[1] ,ae = nodes[2] ,af = nodes[3] ,ag = nodes[4] ,ah = nodes[5] ,ai = nodes[6] ,aj = {id: 'aj', name:'fränzel'},ak = {id: 'ak', name:'frau_schönherr'},al = {id: 'al', name:'heinerle'},am = {id: 'am', name:'gertrud'},an = {id: 'an', name:'liesel'},ao = {id: 'ao', name:'schönherr'},ap = {id: 'ap', name:'frau_ulbrich'},aq = {id: 'aq', name:'frau_seifert'} ; nodes.push( aj,ak,al,am,an,ao,ap,aq ); links.push( {source: am , target: an },{source: am , target: ap },{source: am , target: aq },{source: am , target: ao },{source: am , target: ao },{source: al , target: am },{source: al , target: an },{source: al , target: ap },{source: al , target: aq },{source: al , target: ao },{source: al , target: ao },{source: aj , target: am },{source: aj , target: al },{source: aj , target: an },{source: aj , target: ak },{source: aj , target: ap },{source: aj , target: aq },{source: aj , target: ao },{source: aj , target: ao },{source: an , target: ap },{source: an , target: aq },{source: an , target: ao },{source: an , target: ao },{source: ak , target: am },{source: ak , target: al },{source: ak , target: an },{source: ak , target: ap },{source: ak , target: aq },{source: ak , target: ao },{source: ak , target: ao },{source: ai , target: am },{source: ai , target: al },{source: ai , target: aj },{source: ai , target: an },{source: ai , target: ak },{source: ai , target: ap },{source: ai , target: aq },{source: ai , target: ao },{source: ai , target: ao },{source: ah , target: am },{source: ah , target: al },{source: ah , target: aj },{source: ah , target: an },{source: ah , target: ak },{source: ah , target: ai },{source: ah , target: ap },{source: ah , target: aq },{source: ah , target: ao },{source: ah , target: ao },{source: ap , target: aq },{source: ad , target: am },{source: ad , target: al },{source: ad , target: aj },{source: ad , target: an },{source: ad , target: ak },{source: ad , target: ai },{source: ad , target: ah },{source: ad , target: ap },{source: ad , target: aq },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ao },{source: ad , target: ao },{source: ad , target: af },{source: ae , target: am },{source: ae , target: al },{source: ae , target: aj },{source: ae , target: an },{source: ae , target: ak },{source: ae , target: ai },{source: ae , target: ah },{source: ae , target: ap },{source: ae , target: aq },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ao },{source: ae , target: ao },{source: ae , target: af },{source: af , target: am },{source: af , target: al },{source: af , target: aj },{source: af , target: an },{source: af , target: ak },{source: af , target: ai },{source: af , target: ah },{source: af , target: ap },{source: af , target: aq },{source: af , target: ag },{source: af , target: ao },{source: af , target: ao },{source: ac , target: am },{source: ac , target: al },{source: ac , target: aj },{source: ac , target: an },{source: ac , target: ak },{source: ac , target: ai },{source: ac , target: ah },{source: ac , target: ap },{source: ac , target: ad },{source: ac , target: aq },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ao },{source: ac , target: ao },{source: ac , target: af },{source: ag , target: am },{source: ag , target: al },{source: ag , target: aj },{source: ag , target: an },{source: ag , target: ak },{source: ag , target: ai },{source: ag , target: ah },{source: ag , target: ap },{source: ag , target: aq },{source: ag , target: ao },{source: ag , target: ao },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ap },{source: ao , target: aq },{source: af , target: am },{source: af , target: al },{source: af , target: aj },{source: af , target: an },{source: af , target: ak },{source: af , target: ai },{source: af , target: ah },{source: af , target: ap },{source: af , target: aq },{source: af , target: ag },{source: af , target: ao },{source: af , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Akt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'am','al','aj','an','ah','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ac ad ae af ag ai ak ap aq */ var  ac = nodes[0] ,ad = nodes[1] ,ae = nodes[2] ,af = nodes[3] ,ag = nodes[4] ,ai = nodes[5] ,ak = nodes[6] ,ap = nodes[7] ,aq = nodes[8]  ; /* nodes.push(); */ links.push( {source: ac , target: aq },{source: ac , target: ae },{source: ac , target: ak },{source: ac , target: ag },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: ap },{source: ac , target: ai },{source: ae , target: aq },{source: ae , target: ak },{source: ae , target: ag },{source: ae , target: af },{source: ae , target: ap },{source: ae , target: ai },{source: ak , target: aq },{source: ak , target: ap },{source: ag , target: aq },{source: ag , target: ak },{source: ag , target: ap },{source: ag , target: ai },{source: af , target: aq },{source: af , target: ak },{source: af , target: ag },{source: af , target: ap },{source: af , target: ai },{source: ad , target: aq },{source: ad , target: ae },{source: ad , target: ak },{source: ad , target: ag },{source: ad , target: af },{source: ad , target: ap },{source: ad , target: ai },{source: ap , target: aq },{source: ai , target: aq },{source: ai , target: ak },{source: ai , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Akt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ac ad ae af ag ai ak ao ap aq ar as at au av aw */ var  ac = nodes[0] ,ad = nodes[1] ,ae = nodes[2] ,af = nodes[3] ,ag = nodes[4] ,ai = nodes[5] ,ak = nodes[6] ,ao = {id: 'ao', name:'schönherr'},ap = nodes[7] ,aq = nodes[8] ,ar = {id: 'ar', name:'die_waldarbeiter'},as = {id: 'as', name:'zurufe'},at = {id: 'at', name:'ein_bauer'},au = {id: 'au', name:'die_schnitzler'},av = {id: 'av', name:'stimmen'},aw = {id: 'aw', name:'die_bauern'} ; nodes.push( ao,ar,as,at,au,av,aw ); links.push( {source: ao , target: ap },{source: ao , target: ar },{source: ao , target: as },{source: ao , target: at },{source: ao , target: au },{source: ao , target: as },{source: ao , target: av },{source: ao , target: aw },{source: ao , target: aq },{source: ao , target: av },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: at },{source: ap , target: au },{source: ap , target: as },{source: ap , target: av },{source: ap , target: aw },{source: ap , target: aq },{source: ap , target: av },{source: ar , target: as },{source: ar , target: at },{source: ar , target: au },{source: ar , target: as },{source: ar , target: av },{source: ar , target: aw },{source: ar , target: av },{source: ad , target: ao },{source: ad , target: ap },{source: ad , target: ar },{source: ad , target: ae },{source: ad , target: ag },{source: ad , target: as },{source: ad , target: at },{source: ad , target: au },{source: ad , target: as },{source: ad , target: af },{source: ad , target: av },{source: ad , target: ai },{source: ad , target: aw },{source: ad , target: aq },{source: ad , target: av },{source: ad , target: ak },{source: ac , target: ao },{source: ac , target: ap },{source: ac , target: ar },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ag },{source: ac , target: as },{source: ac , target: at },{source: ac , target: au },{source: ac , target: as },{source: ac , target: af },{source: ac , target: av },{source: ac , target: ai },{source: ac , target: aw },{source: ac , target: aq },{source: ac , target: av },{source: ac , target: ak },{source: ae , target: ao },{source: ae , target: ap },{source: ae , target: ar },{source: ae , target: ag },{source: ae , target: as },{source: ae , target: at },{source: ae , target: au },{source: ae , target: as },{source: ae , target: af },{source: ae , target: av },{source: ae , target: ai },{source: ae , target: aw },{source: ae , target: aq },{source: ae , target: av },{source: ae , target: ak },{source: ag , target: ao },{source: ag , target: ap },{source: ag , target: ar },{source: ag , target: as },{source: ag , target: at },{source: ag , target: au },{source: ag , target: as },{source: ag , target: av },{source: ag , target: ai },{source: ag , target: aw },{source: ag , target: aq },{source: ag , target: av },{source: ag , target: ak },{source: as , target: at },{source: as , target: au },{source: as , target: av },{source: as , target: aw },{source: as , target: av },{source: at , target: au },{source: at , target: av },{source: at , target: aw },{source: at , target: av },{source: au , target: av },{source: au , target: aw },{source: au , target: av },{source: as , target: at },{source: as , target: au },{source: as , target: av },{source: as , target: aw },{source: as , target: av },{source: af , target: ao },{source: af , target: ap },{source: af , target: ar },{source: af , target: ag },{source: af , target: as },{source: af , target: at },{source: af , target: au },{source: af , target: as },{source: af , target: av },{source: af , target: ai },{source: af , target: aw },{source: af , target: aq },{source: af , target: av },{source: af , target: ak },{source: av , target: aw },{source: ai , target: ao },{source: ai , target: ap },{source: ai , target: ar },{source: ai , target: as },{source: ai , target: at },{source: ai , target: au },{source: ai , target: as },{source: ai , target: av },{source: ai , target: aw },{source: ai , target: aq },{source: ai , target: av },{source: ai , target: ak },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: at },{source: aq , target: au },{source: aq , target: as },{source: aq , target: av },{source: aq , target: aw },{source: aq , target: av },{source: av , target: aw },{source: ak , target: ao },{source: ak , target: ap },{source: ak , target: ar },{source: ak , target: as },{source: ak , target: at },{source: ak , target: au },{source: ak , target: as },{source: ak , target: av },{source: ak , target: aw },{source: ak , target: aq },{source: ak , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Akt';
}, 15000);
