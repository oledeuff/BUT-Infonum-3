(function(){
  'use strict';

  const RAW = Array.isArray(window.AIDES_DATA) ? window.AIDES_DATA.slice() : [];
  const el = (id) => document.getElementById(id);

  const nf = new Intl.NumberFormat('fr-FR', { style:'currency', currency:'EUR', maximumFractionDigits:2 });

  function normalizeStr(s){
    return (s ?? '').toString().toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu,'');
  }
  function num(x){
    return (typeof x === 'number' && isFinite(x)) ? x : 0;
  }
  function formatMoney(v){
    if(v == null || !isFinite(v)) return '—';
    return nf.format(v);
  }

  function initSelectOptions(selectEl, options, withAll=true, allLabel='(Tous)'){
    selectEl.innerHTML = '';
    if(withAll){
      const opt = document.createElement('option');
      opt.value = '__ALL__';
      opt.textContent = allLabel;
      selectEl.appendChild(opt);
    }
    options.forEach(v=>{
      const opt = document.createElement('option');
      opt.value = v;
      opt.textContent = v;
      selectEl.appendChild(opt);
    });
  }

  function buildGroups(data){
    const set = new Set();
    data.forEach(d=>{
      const g = (d.groupe || '').trim();
      if(g) set.add(g);
    });
    return Array.from(set).sort((a,b)=>a.localeCompare(b,'fr'));
  }

  function buildCard(d){
    const card = document.createElement('article');
    card.className = 'card';

    const h = document.createElement('h3');
    h.textContent = d.titre || '(Sans titre)';
    card.appendChild(h);

    const meta = document.createElement('div');
    meta.className = 'meta';

    const badgeRank = document.createElement('span');
    badgeRank.className = 'badge';
    badgeRank.textContent = (d.rang != null && isFinite(d.rang)) ? `Rang ${d.rang}` : 'Rang —';
    meta.appendChild(badgeRank);

    if(d.identifiant != null){
      const badgeId = document.createElement('span');
      badgeId.className = 'badge';
      badgeId.textContent = `ID ${d.identifiant}`;
      meta.appendChild(badgeId);
    }

    if((d.groupe || '').trim()){
      const badgeG = document.createElement('span');
      badgeG.className = 'badge';
      badgeG.textContent = d.groupe;
      meta.appendChild(badgeG);
    }

    card.appendChild(meta);

    const total = document.createElement('div');
    total.className = 'total';
    const left = document.createElement('div');
    left.className = 'label';
    left.textContent = 'Total des aides';
    const right = document.createElement('div');
    right.className = 'value';
    right.textContent = formatMoney(d.total_aides);
    total.appendChild(left);
    total.appendChild(right);
    card.appendChild(total);

    const funds = document.createElement('div');
    funds.className = 'funds';
    const ft = document.createElement('p');
    ft.className = 'title';
    ft.textContent = 'Ventilation par fonds';
    funds.appendChild(ft);

    const kv = document.createElement('div');
    kv.className = 'kv';

    const rows = [
      ["Aides au pluralisme", d.aides_pluralisme],
      ["Aide à la distribution", d.aide_distribution],
      ["Aide à l'exemplaire posté", d.aide_ex_poste],
      ["Aide à l'exemplaire porté", d.aide_ex_porte],
      ["FSDP", d.fsdp],
      ["FSEIP", d.fseip]
    ];

    rows.forEach(([k,v])=>{
      const kEl = document.createElement('div');
      kEl.textContent = k;
      const vEl = document.createElement('div');
      vEl.textContent = formatMoney(v);
      kv.appendChild(kEl);
      kv.appendChild(vEl);
    });

    funds.appendChild(kv);
    card.appendChild(funds);

    const det = document.createElement('details');
    const sum = document.createElement('summary');
    sum.textContent = 'Détails';
    det.appendChild(sum);

    const kv2 = document.createElement('div');
    kv2.className = 'kv';

    const rows2 = [
      ["Diffusion annuelle*", d.diffusion_annuelle],
      ["Aide par exemplaire*", d.aide_par_exemplaire]
    ];
    rows2.forEach(([k,v])=>{
      const kEl = document.createElement('div');
      kEl.textContent = k;
      const vEl = document.createElement('div');
      if(k.includes('Diffusion')){
        vEl.textContent = (v==null || !isFinite(v)) ? '—' : (new Intl.NumberFormat('fr-FR', { maximumFractionDigits:0 }).format(v));
      }else{
        vEl.textContent = (v==null || !isFinite(v)) ? '—' : (new Intl.NumberFormat('fr-FR', { maximumFractionDigits:6 }).format(v));
      }
      kv2.appendChild(kEl);
      kv2.appendChild(vEl);
    });

    det.appendChild(kv2);
    card.appendChild(det);

    return card;
  }

  function getState(){
    return {
      q: (el('q').value || '').trim(),
      grp: el('grp').value,
      sort: el('sort').value,
      min: el('min').value,
      max: el('max').value
    };
  }

  function filterData(data, state){
    const qn = normalizeStr(state.q);
    const min = state.min === '' ? null : Number(state.min);
    const max = state.max === '' ? null : Number(state.max);

    return data.filter(d=>{
      if(state.grp && state.grp !== '__ALL__'){
        if((d.groupe || '') !== state.grp) return false;
      }
      if(qn){
        const hay = normalizeStr(`${d.titre} ${d.groupe || ''} ${d.identifiant ?? ''}`);
        if(!hay.includes(qn)) return false;
      }
      const t = num(d.total_aides);
      if(min != null && isFinite(min) && t < min) return false;
      if(max != null && isFinite(max) && t > max) return false;
      return true;
    });
  }

  function sortData(data, sortKey){
    const cmpStr = (a,b)=>a.localeCompare(b,'fr');
    const copy = data.slice();
    switch(sortKey){
      case 'total_asc':
        copy.sort((a,b)=>num(a.total_aides)-num(b.total_aides));
        break;
      case 'title_asc':
        copy.sort((a,b)=>cmpStr(a.titre||'', b.titre||''));
        break;
      case 'title_desc':
        copy.sort((a,b)=>cmpStr(b.titre||'', a.titre||''));
        break;
      case 'rank_asc':
        copy.sort((a,b)=>num(a.rang)-num(b.rang));
        break;
      case 'rank_desc':
        copy.sort((a,b)=>num(b.rang)-num(a.rang));
        break;
      case 'total_desc':
      default:
        copy.sort((a,b)=>num(b.total_aides)-num(a.total_aides));
    }
    return copy;
  }

  function setStatus(txt){
    el('status').textContent = txt;
  }

  function resetAll(){
    el('q').value = '';
    el('grp').value = '__ALL__';
    el('sort').value = 'total_desc';
    el('min').value = '';
    el('max').value = '';
    render();
  }

  function render(){
    const state = getState();
    const filtered = filterData(RAW, state);
    const sorted = sortData(filtered, state.sort);

    const grid = el('grid');
    grid.innerHTML = '';
    sorted.forEach(d=>grid.appendChild(buildCard(d)));

    const totalAll = RAW.length;
    const sumAll = RAW.reduce((acc,d)=>acc + num(d.total_aides), 0);
    const sumFiltered = sorted.reduce((acc,d)=>acc + num(d.total_aides), 0);

    setStatus(`${sorted.length} / ${totalAll} titres — Total affiché: ${nf.format(sumFiltered)} — Total global: ${nf.format(sumAll)}`);
  }

  function initTheme(){
    const KEY = 'aidesTheme_v1';
    const root = document.documentElement;
    const btn = el('themeToggle');

    function apply(theme){
      root.setAttribute('data-theme', theme);
      btn.textContent = (theme === 'light') ? 'Version sombre' : 'Version claire';
      try{ localStorage.setItem(KEY, theme); }catch(e){}
    }

    let stored = null;
    try{ stored = localStorage.getItem(KEY); }catch(e){}
    if(stored === 'light' || stored === 'dark') apply(stored);

    btn.addEventListener('click', ()=>{
      const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      apply(current === 'light' ? 'dark' : 'light');
    });
  }

  function init(){
    initSelectOptions(el('grp'), buildGroups(RAW), true, '(Tous)');
    ['q','grp','sort','min','max'].forEach(id=>{
      el(id).addEventListener('input', render);
      el(id).addEventListener('change', render);
    });
    el('reset').addEventListener('click', resetAll);

    initTheme();
    resetAll();
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
