setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af ag ah ai aj ak al am an ao ap */ var  aa = {id: 'aa', name:'die_dame'},ab = {id: 'ab', name:'der_staatsanwalt'},ac = {id: 'ac', name:'der_andere_herr'},ad = {id: 'ad', name:'der_graf'},ae = {id: 'ae', name:'der_millionärssohn'},af = {id: 'af', name:'der_dichter'},ag = {id: 'ag', name:'ein_bridgespieler'},ah = {id: 'ah', name:'der_partner'},ai = {id: 'ai', name:'die_erste_dame'},aj = {id: 'aj', name:'der_komponist'},ak = {id: 'ak', name:'die_andere_dame'},al = {id: 'al', name:'der_prinz'},am = {id: 'am', name:'die_sängerin'},an = {id: 'an', name:'der_kritiker'},ao = {id: 'ao', name:'ein_junges_mädchen'},ap = {id: 'ap', name:'sein_bridgepartner'} ; nodes.push( aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: ak },{source: aa , target: aj },{source: aa , target: ai },{source: aa , target: al },{source: aa , target: am },{source: aa , target: an },{source: aa , target: ao },{source: aa , target: an },{source: aa , target: ap },{source: ab , target: ac },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: ak },{source: ab , target: aj },{source: ab , target: ai },{source: ab , target: al },{source: ab , target: am },{source: ab , target: an },{source: ab , target: ao },{source: ab , target: an },{source: ab , target: ap },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: ak },{source: ac , target: aj },{source: ac , target: ai },{source: ac , target: al },{source: ac , target: am },{source: ac , target: an },{source: ac , target: ao },{source: ac , target: an },{source: ac , target: ap },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: ak },{source: ac , target: aj },{source: ac , target: ai },{source: ac , target: al },{source: ac , target: am },{source: ac , target: an },{source: ac , target: ao },{source: ac , target: an },{source: ac , target: ap },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: ak },{source: ad , target: aj },{source: ad , target: ai },{source: ad , target: al },{source: ad , target: am },{source: ad , target: an },{source: ad , target: ao },{source: ad , target: an },{source: ad , target: ap },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: ak },{source: aa , target: aj },{source: aa , target: ai },{source: aa , target: al },{source: aa , target: am },{source: aa , target: an },{source: aa , target: ao },{source: aa , target: an },{source: aa , target: ap },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: ak },{source: ae , target: aj },{source: ae , target: ai },{source: ae , target: al },{source: ae , target: am },{source: ae , target: an },{source: ae , target: ao },{source: ae , target: an },{source: ae , target: ap },{source: af , target: ag },{source: af , target: ah },{source: af , target: ah },{source: af , target: ai },{source: af , target: ak },{source: af , target: aj },{source: af , target: ai },{source: af , target: al },{source: af , target: am },{source: af , target: an },{source: af , target: ao },{source: af , target: an },{source: af , target: ap },{source: ag , target: ah },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: ak },{source: ag , target: aj },{source: ag , target: ai },{source: ag , target: al },{source: ag , target: am },{source: ag , target: an },{source: ag , target: ao },{source: ag , target: an },{source: ag , target: ap },{source: ah , target: ai },{source: ah , target: ak },{source: ah , target: aj },{source: ah , target: ai },{source: ah , target: al },{source: ah , target: am },{source: ah , target: an },{source: ah , target: ao },{source: ah , target: an },{source: ah , target: ap },{source: ah , target: ai },{source: ah , target: ak },{source: ah , target: aj },{source: ah , target: ai },{source: ah , target: al },{source: ah , target: am },{source: ah , target: an },{source: ah , target: ao },{source: ah , target: an },{source: ah , target: ap },{source: ai , target: ak },{source: ai , target: aj },{source: ai , target: al },{source: ai , target: am },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: an },{source: ai , target: ap },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: an },{source: ak , target: ap },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: an },{source: aj , target: ap },{source: ai , target: ak },{source: ai , target: aj },{source: ai , target: al },{source: ai , target: am },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: an },{source: ai , target: ap },{source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: al , target: an },{source: al , target: ap },{source: am , target: an },{source: am , target: ao },{source: am , target: an },{source: am , target: ap },{source: an , target: ao },{source: an , target: ap },{source: ao , target: ap },{source: an , target: ao },{source: an , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Akt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab','ac','ad','ae','af','ag','ah','ai','ak','aj','am','an','ao','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* al aq ar as at au av aw ax ay az ba bb bc bd be bf bg bh bi */ var  al = nodes[0] ,aq = {id: 'aq', name:'der_erste_votant'},ar = {id: 'ar', name:'der_zweite_votant'},as = {id: 'as', name:'der_obmann'},at = {id: 'at', name:'der_geschworene'},au = {id: 'au', name:'der_junge_rechtsanwalt'},av = {id: 'av', name:'der_andere'},aw = {id: 'aw', name:'ein_geschworener'},ax = {id: 'ax', name:'ein_psychiater'},ay = {id: 'ay', name:'der_ältere'},az = {id: 'az', name:'ein_justizbeamter'},ba = {id: 'ba', name:'der_angesprochene'},bb = {id: 'bb', name:'der_sadist'},bc = {id: 'bc', name:'irgendein_herr'},bd = {id: 'bd', name:'der_psychiater'},be = {id: 'be', name:'der_präsident'},bf = {id: 'bf', name:'der_delinquent'},bg = {id: 'bg', name:'die_gehilfen'},bh = {id: 'bh', name:'verworrene_stimmen'},bi = {id: 'bi', name:'der_geistliche'} ; nodes.push( aq,ar,as,at,au,av,aw,ax,ay,az,ba,bb,bc,bd,be,bf,bg,bh,bi ); links.push( {source: aq , target: ar },{source: aq , target: as },{source: aq , target: at },{source: aq , target: au },{source: aq , target: av },{source: aq , target: au },{source: aq , target: aw },{source: aq , target: ar },{source: aq , target: ax },{source: aq , target: ay },{source: aq , target: ay },{source: aq , target: az },{source: aq , target: ba },{source: aq , target: bb },{source: aq , target: bc },{source: aq , target: bd },{source: aq , target: be },{source: aq , target: bf },{source: aq , target: bg },{source: aq , target: bh },{source: aq , target: bi },{source: ar , target: as },{source: ar , target: at },{source: ar , target: au },{source: ar , target: av },{source: ar , target: au },{source: ar , target: aw },{source: ar , target: ax },{source: ar , target: ay },{source: ar , target: ay },{source: ar , target: az },{source: ar , target: ba },{source: ar , target: bb },{source: ar , target: bc },{source: ar , target: bd },{source: ar , target: be },{source: ar , target: bf },{source: ar , target: bg },{source: ar , target: bh },{source: ar , target: bi },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: at },{source: aq , target: au },{source: aq , target: av },{source: aq , target: au },{source: aq , target: aw },{source: aq , target: ar },{source: aq , target: ax },{source: aq , target: ay },{source: aq , target: ay },{source: aq , target: az },{source: aq , target: ba },{source: aq , target: bb },{source: aq , target: bc },{source: aq , target: bd },{source: aq , target: be },{source: aq , target: bf },{source: aq , target: bg },{source: aq , target: bh },{source: aq , target: bi },{source: as , target: at },{source: as , target: au },{source: as , target: av },{source: as , target: au },{source: as , target: aw },{source: as , target: ax },{source: as , target: ay },{source: as , target: ay },{source: as , target: az },{source: as , target: ba },{source: as , target: bb },{source: as , target: bc },{source: as , target: bd },{source: as , target: be },{source: as , target: bf },{source: as , target: bg },{source: as , target: bh },{source: as , target: bi },{source: at , target: au },{source: at , target: av },{source: at , target: au },{source: at , target: aw },{source: at , target: ax },{source: at , target: ay },{source: at , target: ay },{source: at , target: az },{source: at , target: ba },{source: at , target: bb },{source: at , target: bc },{source: at , target: bd },{source: at , target: be },{source: at , target: bf },{source: at , target: bg },{source: at , target: bh },{source: at , target: bi },{source: au , target: av },{source: au , target: aw },{source: au , target: ax },{source: au , target: ay },{source: au , target: ay },{source: au , target: az },{source: au , target: ba },{source: au , target: bb },{source: au , target: bc },{source: au , target: bd },{source: au , target: be },{source: au , target: bf },{source: au , target: bg },{source: au , target: bh },{source: au , target: bi },{source: av , target: aw },{source: av , target: ax },{source: av , target: ay },{source: av , target: ay },{source: av , target: az },{source: av , target: ba },{source: av , target: bb },{source: av , target: bc },{source: av , target: bd },{source: av , target: be },{source: av , target: bf },{source: av , target: bg },{source: av , target: bh },{source: av , target: bi },{source: au , target: av },{source: au , target: aw },{source: au , target: ax },{source: au , target: ay },{source: au , target: ay },{source: au , target: az },{source: au , target: ba },{source: au , target: bb },{source: au , target: bc },{source: au , target: bd },{source: au , target: be },{source: au , target: bf },{source: au , target: bg },{source: au , target: bh },{source: au , target: bi },{source: aw , target: ax },{source: aw , target: ay },{source: aw , target: ay },{source: aw , target: az },{source: aw , target: ba },{source: aw , target: bb },{source: aw , target: bc },{source: aw , target: bd },{source: aw , target: be },{source: aw , target: bf },{source: aw , target: bg },{source: aw , target: bh },{source: aw , target: bi },{source: ar , target: as },{source: ar , target: at },{source: ar , target: au },{source: ar , target: av },{source: ar , target: au },{source: ar , target: aw },{source: ar , target: ax },{source: ar , target: ay },{source: ar , target: ay },{source: ar , target: az },{source: ar , target: ba },{source: ar , target: bb },{source: ar , target: bc },{source: ar , target: bd },{source: ar , target: be },{source: ar , target: bf },{source: ar , target: bg },{source: ar , target: bh },{source: ar , target: bi },{source: ax , target: ay },{source: ax , target: ay },{source: ax , target: az },{source: ax , target: ba },{source: ax , target: bb },{source: ax , target: bc },{source: ax , target: bd },{source: ax , target: be },{source: ax , target: bf },{source: ax , target: bg },{source: ax , target: bh },{source: ax , target: bi },{source: ay , target: az },{source: ay , target: ba },{source: ay , target: bb },{source: ay , target: bc },{source: ay , target: bd },{source: ay , target: be },{source: ay , target: bf },{source: ay , target: bg },{source: ay , target: bh },{source: ay , target: bi },{source: ay , target: az },{source: ay , target: ba },{source: ay , target: bb },{source: ay , target: bc },{source: ay , target: bd },{source: ay , target: be },{source: ay , target: bf },{source: ay , target: bg },{source: ay , target: bh },{source: ay , target: bi },{source: az , target: ba },{source: az , target: bb },{source: az , target: bc },{source: az , target: bd },{source: az , target: be },{source: az , target: bf },{source: az , target: bg },{source: az , target: bh },{source: az , target: bi },{source: ba , target: bb },{source: ba , target: bc },{source: ba , target: bd },{source: ba , target: be },{source: ba , target: bf },{source: ba , target: bg },{source: ba , target: bh },{source: ba , target: bi },{source: bb , target: bc },{source: bb , target: bd },{source: bb , target: be },{source: bb , target: bf },{source: bb , target: bg },{source: bb , target: bh },{source: bb , target: bi },{source: al , target: aq },{source: al , target: ar },{source: al , target: aq },{source: al , target: as },{source: al , target: at },{source: al , target: au },{source: al , target: av },{source: al , target: au },{source: al , target: aw },{source: al , target: ar },{source: al , target: ax },{source: al , target: ay },{source: al , target: ay },{source: al , target: az },{source: al , target: ba },{source: al , target: bb },{source: al , target: aq },{source: al , target: bc },{source: al , target: bd },{source: al , target: be },{source: al , target: bf },{source: al , target: bg },{source: al , target: bh },{source: al , target: bi },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: at },{source: aq , target: au },{source: aq , target: av },{source: aq , target: au },{source: aq , target: aw },{source: aq , target: ar },{source: aq , target: ax },{source: aq , target: ay },{source: aq , target: ay },{source: aq , target: az },{source: aq , target: ba },{source: aq , target: bb },{source: aq , target: bc },{source: aq , target: bd },{source: aq , target: be },{source: aq , target: bf },{source: aq , target: bg },{source: aq , target: bh },{source: aq , target: bi },{source: bc , target: bd },{source: bc , target: be },{source: bc , target: bf },{source: bc , target: bg },{source: bc , target: bh },{source: bc , target: bi },{source: bd , target: be },{source: bd , target: bf },{source: bd , target: bg },{source: bd , target: bh },{source: bd , target: bi },{source: be , target: bf },{source: be , target: bg },{source: be , target: bh },{source: be , target: bi },{source: bf , target: bg },{source: bf , target: bh },{source: bf , target: bi },{source: bg , target: bh },{source: bg , target: bi },{source: bh , target: bi } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Akt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'aq','ar','as','at','au','av','aw','ax','ay','az','ba','bb','bc','bd','be','bf','bg','bh','bi' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* al am bj */ var  al = nodes[0] ,am = {id: 'am', name:'die_sängerin'},bj = {id: 'bj', name:'chorus_damnatorum'} ; nodes.push( am,bj ); links.push( {source: am , target: bj },{source: al , target: am },{source: al , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Akt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'am','bj' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ab al be bk bl bm bn bo */ var  ab = {id: 'ab', name:'der_staatsanwalt'},al = nodes[0] ,be = {id: 'be', name:'der_präsident'},bk = {id: 'bk', name:'der_verteidiger'},bl = {id: 'bl', name:'der_gefängnisdirektor'},bm = {id: 'bm', name:'der_behäbige_herr'},bn = {id: 'bn', name:'der_aufseher'},bo = {id: 'bo', name:'der_bruder'} ; nodes.push( ab,be,bk,bl,bm,bn,bo ); links.push( {source: al , target: bk },{source: al , target: bl },{source: al , target: bm },{source: al , target: bn },{source: al , target: bn },{source: al , target: bo },{source: al , target: be },{source: ab , target: al },{source: ab , target: bk },{source: ab , target: bl },{source: ab , target: bm },{source: ab , target: bn },{source: ab , target: bn },{source: ab , target: bo },{source: ab , target: be },{source: bk , target: bl },{source: bk , target: bm },{source: bk , target: bn },{source: bk , target: bn },{source: bk , target: bo },{source: bl , target: bm },{source: bl , target: bn },{source: bl , target: bn },{source: bl , target: bo },{source: bm , target: bn },{source: bm , target: bn },{source: bm , target: bo },{source: bn , target: bo },{source: bn , target: bo },{source: be , target: bk },{source: be , target: bl },{source: be , target: bm },{source: be , target: bn },{source: be , target: bn },{source: be , target: bo } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Akt';
}, 15000);
