setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'adelram'},ab = {id: 'ab', name:'schöffe'},ab = {id: 'ab', name:'schöffe'},ac = {id: 'ac', name:'die_ändern'},ad = {id: 'ad', name:'ludwig'},ae = {id: 'ae', name:'ein_bürger'},af = {id: 'af', name:'mehrere_ritter'},ag = {id: 'ag', name:'die_übrigen'},ag = {id: 'ag', name:'die_übrigen'},ah = {id: 'ah', name:'burggraf'},ah = {id: 'ah', name:'burggraf'} ; nodes.push( aa,ab,ac,ad,ae,af,ag,ah ); links.push( {source: aa , target: ab },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ah },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: ad },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ah },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: ad },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ah },{source: ac , target: ae },{source: ac , target: ad },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ah },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ah },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ah },{source: af , target: ag },{source: af , target: ag },{source: af , target: ah },{source: af , target: ah },{source: ag , target: ah },{source: ag , target: ah },{source: ag , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Aufzug';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab','ac','ae','ad','af','ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ai = {id: 'ai', name:'albertus'},aj = {id: 'aj', name:'erster'},aj = {id: 'aj', name:'erster'},ak = {id: 'ak', name:'zweiter'},ak = {id: 'ak', name:'zweiter'},al = {id: 'al', name:'friedrich'},am = {id: 'am', name:'isabella'},an = {id: 'an', name:'leopold'} ; nodes.push( ai,aj,ak,al,am,an ); links.push( {source: ai , target: aj },{source: ai , target: ak },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ai , target: an },{source: aj , target: ak },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: aj , target: ak },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: al , target: am },{source: al , target: an },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ai','aj','ak','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ad = {id: 'ad', name:'ludwig'},al = nodes[2],an = nodes[3],ao = {id: 'ao', name:'die_fürsten_auf_ludwigs_seite'},ap = {id: 'ap', name:'die_fürsten_auf_friedrichs_seite'},aq = {id: 'aq', name:'legat'},aq = {id: 'aq', name:'legat'},ar = {id: 'ar', name:'die_fürsten'} ; nodes.push( ad,ao,ap,aq,ar ); links.push( {source: ad , target: al },{source: ad , target: ao },{source: ad , target: an },{source: ad , target: ap },{source: ad , target: aq },{source: ad , target: ar },{source: ad , target: aq },{source: al , target: ao },{source: al , target: an },{source: al , target: ap },{source: al , target: aq },{source: al , target: ar },{source: al , target: aq },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: ao , target: aq },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: an , target: aq },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: aq },{source: aq , target: ar },{source: aq , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'al','ao','an','ap','aq','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ad = nodes[0],ah = {id: 'ah', name:'burggraf'},as = {id: 'as', name:'thomas'},at = {id: 'at', name:'steffen'},au = {id: 'au', name:'schweppermann'},av = {id: 'av', name:'albrecht'} ; nodes.push( ah,as,at,au,av ); links.push( {source: as , target: at },{source: as , target: au },{source: as , target: av },{source: at , target: au },{source: at , target: av },{source: ad , target: as },{source: ad , target: at },{source: ad , target: au },{source: ad , target: ah },{source: ad , target: av },{source: au , target: av },{source: ah , target: as },{source: ah , target: at },{source: ah , target: au },{source: ah , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'as','at','ad','au','ah','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  al = {id: 'al', name:'friedrich'},aw = {id: 'aw', name:'dietrich'},ax = {id: 'ax', name:'die_knappen'} ; nodes.push( al,aw,ax ); links.push( {source: al , target: aw },{source: al , target: ax },{source: aw , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'al','aw','ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  aa = {id: 'aa', name:'adelram'},au = {id: 'au', name:'schweppermann'},av = {id: 'av', name:'albrecht'},ay = {id: 'ay', name:'ein_ritter_3.3'},ay = {id: 'ay', name:'ein_ritter_3.3'} ; nodes.push( aa,au,av,ay ); links.push( {source: au , target: av },{source: au , target: ay },{source: au , target: ay },{source: av , target: ay },{source: av , target: ay },{source: aa , target: au },{source: aa , target: av },{source: aa , target: ay },{source: aa , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  aa = nodes[0],ad = {id: 'ad', name:'ludwig'},ah = {id: 'ah', name:'burggraf'},ah = {id: 'ah', name:'burggraf'},al = {id: 'al', name:'friedrich'},as = {id: 'as', name:'thomas'},au = nodes[2],av = nodes[3],bb = {id: 'bb', name:'ein_ritter_4.1'},bb = {id: 'bb', name:'ein_ritter_4.1'},bc = {id: 'bc', name:'ein_andrer_ritter_4.1'},bd = {id: 'bd', name:'die_österreicher'},be = {id: 'be', name:'die_bayer'},bf = {id: 'bf', name:'einige'},bg = {id: 'bg', name:'andre'} ; nodes.push( ad,ah,al,as,bb,bc,bd,be,bf,bg ); links.push( {source: al , target: av },{source: al , target: bb },{source: al , target: bb },{source: al , target: bc },{source: al , target: bd },{source: al , target: be },{source: al , target: au },{source: al , target: as },{source: al , target: bf },{source: al , target: bg },{source: av , target: bb },{source: av , target: bb },{source: av , target: bc },{source: av , target: bd },{source: av , target: be },{source: av , target: bf },{source: av , target: bg },{source: bb , target: bc },{source: bb , target: bd },{source: bb , target: be },{source: bb , target: bf },{source: bb , target: bg },{source: bb , target: bc },{source: bb , target: bd },{source: bb , target: be },{source: bb , target: bf },{source: bb , target: bg },{source: bc , target: bd },{source: bc , target: be },{source: bc , target: bf },{source: bc , target: bg },{source: aa , target: al },{source: aa , target: av },{source: aa , target: bb },{source: aa , target: bb },{source: aa , target: bc },{source: aa , target: bd },{source: aa , target: be },{source: aa , target: ah },{source: aa , target: au },{source: aa , target: as },{source: aa , target: ad },{source: aa , target: bf },{source: aa , target: bg },{source: aa , target: ah },{source: bd , target: be },{source: bd , target: bf },{source: bd , target: bg },{source: be , target: bf },{source: be , target: bg },{source: ah , target: al },{source: ah , target: av },{source: ah , target: bb },{source: ah , target: bb },{source: ah , target: bc },{source: ah , target: bd },{source: ah , target: be },{source: ah , target: au },{source: ah , target: as },{source: ah , target: bf },{source: ah , target: bg },{source: au , target: av },{source: au , target: bb },{source: au , target: bb },{source: au , target: bc },{source: au , target: bd },{source: au , target: be },{source: au , target: bf },{source: au , target: bg },{source: as , target: av },{source: as , target: bb },{source: as , target: bb },{source: as , target: bc },{source: as , target: bd },{source: as , target: be },{source: as , target: au },{source: as , target: bf },{source: as , target: bg },{source: ad , target: al },{source: ad , target: av },{source: ad , target: bb },{source: ad , target: bb },{source: ad , target: bc },{source: ad , target: bd },{source: ad , target: be },{source: ad , target: ah },{source: ad , target: au },{source: ad , target: as },{source: ad , target: bf },{source: ad , target: bg },{source: ad , target: ah },{source: bf , target: bg },{source: ah , target: al },{source: ah , target: av },{source: ah , target: bb },{source: ah , target: bb },{source: ah , target: bc },{source: ah , target: bd },{source: ah , target: be },{source: ah , target: au },{source: ah , target: as },{source: ah , target: bf },{source: ah , target: bg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene                                                                                                                     1';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'al','av','bb','bc','aa','bd','be','ah','au','as','ad','bf','bg' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ai = {id: 'ai', name:'albertus'},am = {id: 'am', name:'isabella'},an = {id: 'an', name:'leopold'},bh = {id: 'bh', name:'erste'},bh = {id: 'bh', name:'erste'},bi = {id: 'bi', name:'zweite'},bi = {id: 'bi', name:'zweite'},bj = {id: 'bj', name:'die_begleiterin'} ; nodes.push( ai,am,an,bh,bi,bj ); links.push( {source: bh , target: bi },{source: bh , target: bi },{source: bh , target: bj },{source: bi , target: bj },{source: bh , target: bi },{source: bh , target: bi },{source: bh , target: bj },{source: bi , target: bj },{source: an , target: bh },{source: an , target: bi },{source: an , target: bh },{source: an , target: bi },{source: an , target: bj },{source: am , target: bh },{source: am , target: bi },{source: am , target: bh },{source: am , target: bi },{source: am , target: an },{source: am , target: bj },{source: ai , target: bh },{source: ai , target: bi },{source: ai , target: bh },{source: ai , target: bi },{source: ai , target: an },{source: ai , target: am },{source: ai , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'bh','bi','an','am','bj','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ad = {id: 'ad', name:'ludwig'},ah = {id: 'ah', name:'burggraf'},av = {id: 'av', name:'albrecht'} ; nodes.push( ad,ah,av ); links.push( {source: ad , target: ah },{source: ad , target: av },{source: ah , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ad','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ai = {id: 'ai', name:'albertus'},al = {id: 'al', name:'friedrich'},av = nodes[0],bk = {id: 'bk', name:'burg_vogt'},bk = {id: 'bk', name:'burg_vogt'},bl = {id: 'bl', name:'ein_wächter'},bl = {id: 'bl', name:'ein_wächter'},bm = {id: 'bm', name:'zweiter_wächter'},bn = {id: 'bn', name:'dritter_wächter'},bo = {id: 'bo', name:'die_wächter'} ; nodes.push( ai,al,bk,bl,bm,bn,bo ); links.push( {source: bk , target: bl },{source: bk , target: bm },{source: bk , target: bn },{source: bk , target: bo },{source: bk , target: bl },{source: bl , target: bm },{source: bl , target: bn },{source: bl , target: bo },{source: bm , target: bn },{source: bm , target: bo },{source: bn , target: bo },{source: al , target: bk },{source: al , target: bl },{source: al , target: bm },{source: al , target: bn },{source: al , target: bo },{source: al , target: av },{source: al , target: bl },{source: al , target: bk },{source: ai , target: bk },{source: ai , target: bl },{source: ai , target: bm },{source: ai , target: bn },{source: ai , target: al },{source: ai , target: bo },{source: ai , target: av },{source: ai , target: bl },{source: ai , target: bk },{source: av , target: bk },{source: av , target: bl },{source: av , target: bm },{source: av , target: bn },{source: av , target: bo },{source: av , target: bl },{source: av , target: bk },{source: bl , target: bm },{source: bl , target: bn },{source: bl , target: bo },{source: bk , target: bl },{source: bk , target: bm },{source: bk , target: bn },{source: bk , target: bo },{source: bk , target: bl } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'bk','bl','bm','bn','ai','bo','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ad = {id: 'ad', name:'ludwig'},ah = {id: 'ah', name:'burggraf'},al = nodes[0] ; nodes.push( ad,ah ); links.push( {source: ah , target: al },{source: ad , target: ah },{source: ad , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ah','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  al = nodes[0],am = {id: 'am', name:'isabella'},an = {id: 'an', name:'leopold'},aq = {id: 'aq', name:'legat'} ; nodes.push( am,an,aq ); links.push( {source: am , target: an },{source: am , target: aq },{source: al , target: am },{source: al , target: an },{source: al , target: aq },{source: an , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'am','an','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ac = {id: 'ac', name:'die_ändern'},ac = {id: 'ac', name:'die_ändern'},ad = {id: 'ad', name:'ludwig'},al = nodes[1],av = {id: 'av', name:'albrecht'},bp = {id: 'bp', name:'erster_bürger'},bq = {id: 'bq', name:'zweiter_bürger'},br = {id: 'br', name:'stephan'},bs = {id: 'bs', name:'otto'} ; nodes.push( ac,ad,av,bp,bq,br,bs ); links.push( {source: ad , target: bp },{source: ad , target: bq },{source: ad , target: av },{source: ad , target: br },{source: ad , target: bs },{source: ad , target: al },{source: bp , target: bq },{source: bp , target: br },{source: bp , target: bs },{source: bq , target: br },{source: bq , target: bs },{source: ac , target: ad },{source: ac , target: bp },{source: ac , target: bq },{source: ac , target: av },{source: ac , target: br },{source: ac , target: bs },{source: ac , target: al },{source: ac , target: ad },{source: ac , target: bp },{source: ac , target: bq },{source: ac , target: av },{source: ac , target: br },{source: ac , target: bs },{source: ac , target: al },{source: av , target: bp },{source: av , target: bq },{source: av , target: br },{source: av , target: bs },{source: br , target: bs },{source: al , target: bp },{source: al , target: bq },{source: al , target: av },{source: al , target: br },{source: al , target: bs } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 60000);
