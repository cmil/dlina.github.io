setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af ag ah ai aj ak al am an ao ap aq ar */ var  aa = {id: 'aa', name:'welt'},ab = {id: 'ab', name:'engel'},ac = {id: 'ac', name:'propheten'},ad = {id: 'ad', name:'meister'},ae = {id: 'ae', name:'vorwitz'},af = {id: 'af', name:'widersacher'},ag = {id: 'ag', name:'einer_der_propheten'},ah = {id: 'ah', name:'der_erste_engel'},ai = {id: 'ai', name:'stimmen'},aj = {id: 'aj', name:'zweiter_engel'},ak = {id: 'ak', name:'könig_seele'},al = {id: 'al', name:'schönheit_seele'},am = {id: 'am', name:'weisheit_seele'},an = {id: 'an', name:'bauer_seele'},ao = {id: 'ao', name:'reicher_seele'},ap = {id: 'ap', name:'bettler_seele'},aq = {id: 'aq', name:'tod'},ar = {id: 'ar', name:'alle'} ; nodes.push( aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ap },{source: aa , target: ak },{source: aa , target: al },{source: aa , target: am },{source: aa , target: an },{source: aa , target: ao },{source: aa , target: ap },{source: aa , target: ar },{source: aa , target: aq },{source: aa , target: ak },{source: aa , target: am },{source: aa , target: ao },{source: aa , target: an },{source: aa , target: al },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ap },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: am },{source: ab , target: an },{source: ab , target: ao },{source: ab , target: ap },{source: ab , target: ar },{source: ab , target: aq },{source: ab , target: ak },{source: ab , target: am },{source: ab , target: ao },{source: ab , target: an },{source: ab , target: al },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ap },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: am },{source: ac , target: an },{source: ac , target: ao },{source: ac , target: ap },{source: ac , target: ar },{source: ac , target: aq },{source: ac , target: ak },{source: ac , target: am },{source: ac , target: ao },{source: ac , target: an },{source: ac , target: al },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ap },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: am },{source: ad , target: an },{source: ad , target: ao },{source: ad , target: ap },{source: ad , target: ar },{source: ad , target: aq },{source: ad , target: ak },{source: ad , target: am },{source: ad , target: ao },{source: ad , target: an },{source: ad , target: al },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ap },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: am },{source: ae , target: an },{source: ae , target: ao },{source: ae , target: ap },{source: ae , target: ar },{source: ae , target: aq },{source: ae , target: ak },{source: ae , target: am },{source: ae , target: ao },{source: ae , target: an },{source: ae , target: al },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ap },{source: af , target: ak },{source: af , target: al },{source: af , target: am },{source: af , target: an },{source: af , target: ao },{source: af , target: ap },{source: af , target: ar },{source: af , target: aq },{source: af , target: ak },{source: af , target: am },{source: af , target: ao },{source: af , target: an },{source: af , target: al },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ap },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: am },{source: ag , target: an },{source: ag , target: ao },{source: ag , target: ap },{source: ag , target: ar },{source: ag , target: aq },{source: ag , target: ak },{source: ag , target: am },{source: ag , target: ao },{source: ag , target: an },{source: ag , target: al },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ap },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ah , target: an },{source: ah , target: ao },{source: ah , target: ap },{source: ah , target: ar },{source: ah , target: aq },{source: ah , target: ak },{source: ah , target: am },{source: ah , target: ao },{source: ah , target: an },{source: ah , target: al },{source: ai , target: aj },{source: ai , target: ap },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: ap },{source: ai , target: ar },{source: ai , target: aq },{source: ai , target: ak },{source: ai , target: am },{source: ai , target: ao },{source: ai , target: an },{source: ai , target: al },{source: aj , target: ap },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: ap },{source: aj , target: ar },{source: aj , target: aq },{source: aj , target: ak },{source: aj , target: am },{source: aj , target: ao },{source: aj , target: an },{source: aj , target: al },{source: ap , target: ar },{source: ap , target: aq },{source: ak , target: ap },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: ap },{source: ak , target: ar },{source: ak , target: aq },{source: ak , target: am },{source: ak , target: ao },{source: ak , target: an },{source: ak , target: al },{source: al , target: ap },{source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: al , target: ap },{source: al , target: ar },{source: al , target: aq },{source: al , target: am },{source: al , target: ao },{source: al , target: an },{source: am , target: ap },{source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: am , target: ar },{source: am , target: aq },{source: am , target: ao },{source: am , target: an },{source: an , target: ap },{source: an , target: ao },{source: an , target: ap },{source: an , target: ar },{source: an , target: aq },{source: an , target: ao },{source: ao , target: ap },{source: ao , target: ap },{source: ao , target: ar },{source: ao , target: aq },{source: ap , target: ar },{source: ap , target: aq },{source: aq , target: ar },{source: ak , target: ap },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: ap },{source: ak , target: ar },{source: ak , target: aq },{source: ak , target: am },{source: ak , target: ao },{source: ak , target: an },{source: ak , target: al },{source: am , target: ap },{source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: am , target: ar },{source: am , target: aq },{source: am , target: ao },{source: am , target: an },{source: ao , target: ap },{source: ao , target: ap },{source: ao , target: ar },{source: ao , target: aq },{source: an , target: ap },{source: an , target: ao },{source: an , target: ap },{source: an , target: ar },{source: an , target: aq },{source: an , target: ao },{source: al , target: ap },{source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: al , target: ap },{source: al , target: ar },{source: al , target: aq },{source: al , target: am },{source: al , target: ao },{source: al , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '[Stücktext]'; var scene = document.getElementById('scene');scene.innerHTML = '[Stücktext]';
}, 0);
