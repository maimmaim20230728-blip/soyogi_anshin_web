'use strict';
/* ひとつずつ・そよぎ 画面共通の部品(画面ではない。home.js / edit.js が使う)
   ・データの読み書き(1つのキー data.v1)・電話番号の正規化(もしもカード流用=数字と+だけ残す)
   ・固定バー(119/110/登録した窓口を tel: で発信。どの画面にも出る)
   ・1画面1動作の表示(.ov 全画面・大きな文字・つぎ/まえ/とじる・進むたび振動)
   ・初回だけ出す免責(「わかった」で閉じる)
   ・window.ANSHIN_LIB として公開。click禁止(api.Tap.bind)。 */
(function(){
  var DATA_KEY = 'data.v1';
  var AGREE_KEY = 'agreed.v1';

  /* ---- データ(端末内のみ) ---- */
  function blank(){
    return { place:'', words:'', calm:'', signs:'', contacts:[], windows:[], steps:[], plan:[], yellowRest:'', yellowStep:'' };
  }
  function cleanRows(list){
    if(!Array.isArray(list)) return [];
    return list.filter(function(r){ return r && typeof r === 'object'; }).map(function(r){
      return { name:String(r.name || ''), tel:String(r.tel || '') };
    });
  }
  function cleanLines(list){
    if(!Array.isArray(list)) return [];
    return list.map(function(s){ return String(s == null ? '' : s); });
  }
  function loadData(api){
    var d = api.load(DATA_KEY, null) || {};
    var b = blank();
    b.place = String(d.place || ''); b.words = String(d.words || ''); b.calm = String(d.calm || ''); b.signs = String(d.signs || '');
    b.contacts = cleanRows(d.contacts); b.windows = cleanRows(d.windows);
    b.steps = cleanLines(d.steps); b.plan = cleanLines(d.plan);
    b.yellowRest = String(d.yellowRest || ''); b.yellowStep = String(d.yellowStep || '');
    return b;
  }
  /* 保存。false なら容量オーバー=呼び出し側で通知して取り消す */
  function saveData(api, d){ return api.save(DATA_KEY, d); }

  /* ---- 電話番号: 数字と + だけ残す(もしもカードと同じ)。空なら null ---- */
  function normTel(s){
    var t = String(s == null ? '' : s).replace(/[^\d+]/g, '');
    return t.length >= 3 ? t : null;
  }

  /* ---- 発信ボタン(a[href=tel:]。ネイティブの遷移に任せる=JSの click は使わない) ---- */
  function callLink(api, label, tel, cls){
    var a = document.createElement('a');
    a.className = cls || 'sos-btn';
    a.href = 'tel:' + tel;
    a.textContent = label;
    a.setAttribute('aria-label', label);
    return a;
  }
  /* 119・110・登録した窓口の並び(固定バーと表示画面で共用) */
  function callList(api, d){
    var T = api.T;
    var out = [
      { label:T('screen.home.sos.call119'), tel:'119' },
      { label:T('screen.home.sos.call110'), tel:'110' }
    ];
    (d.windows || []).forEach(function(w){
      var t = normTel(w.tel);
      if(t) out.push({ label:(w.name || t), tel:t });
    });
    return out;
  }
  /* 固定バーを描き直す(各画面の render から呼ぶ=言語切替・登録の変化に追随) */
  function renderSos(api){
    var bar = document.getElementById('sos-bar');
    if(!bar) return;
    bar.textContent = '';
    var d = loadData(api);
    callList(api, d).forEach(function(c){ bar.appendChild(callLink(api, c.label, c.tel, 'sos-btn')); });
  }

  /* ---- 今日の日付(言語に合わせる。失敗したら素の形) ---- */
  function todayText(api){
    var d = new Date();
    try{
      var tag = { ja:'ja-JP', en:'en-US', de:'de-DE', fr:'fr-FR', es:'es-ES', it:'it-IT', pt:'pt-PT', nl:'nl-NL', sv:'sv-SE', ko:'ko-KR', zh:'zh-CN', ar:'ar' }[api.lang] || 'ja-JP';
      return d.toLocaleDateString(tag, { year:'numeric', month:'long', day:'numeric', weekday:'long' });
    }catch(_){
      return d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate();
    }
  }

  /* ---- 表示するページの組み立て(空の項目は飛ばす) ----
     page = { label, text, calls:[{label,tel}] } */
  function pagesNow(api, d){
    var T = function(k){ return api.T('screen.home.player.' + k); };
    var p = [];
    p.push({ label:T('today'), text:todayText(api) });
    if(d.place) p.push({ label:T('place'), text:d.place });
    d.steps.forEach(function(s){ if(s.trim()) p.push({ text:s }); });
    if(d.calm) p.push({ label:T('calm'), text:d.calm });
    if(d.words) p.push({ label:T('words'), text:d.words });
    p.push({ text:T('end'), calls:callList(api, d) });
    return p;
  }
  function pagesPlan(api, d){
    var T = function(k){ return api.T('screen.home.player.' + k); };
    var p = [];
    if(d.yellowRest || d.yellowStep){
      if(d.yellowRest) p.push({ label:T('yellow') + ' / ' + T('yellowRest'), text:d.yellowRest });
      if(d.yellowStep) p.push({ label:T('yellow') + ' / ' + T('yellowStep'), text:d.yellowStep });
    }
    if(d.signs) p.push({ label:T('signs'), text:d.signs });
    d.plan.forEach(function(s){ if(s.trim()) p.push({ text:s }); });
    /* れんらくできる ひと: なまえ か でんわ が書いてある行だけ(空の行だけなら頁を作らない) */
    var cs = [];
    var people = d.contacts.filter(function(c){ return (c.name && c.name.trim()) || normTel(c.tel); });
    people.forEach(function(c){ var t = normTel(c.tel); if(t) cs.push({ label:(c.name || t), tel:t }); });
    if(people.length) p.push({ label:T('contacts'), text:people.map(function(c){ return c.name || c.tel; }).join('\n'), calls:cs });
    p.push({ label:T('windows'), text:'', calls:callList(api, d) });
    if(d.words) p.push({ label:T('words'), text:d.words });
    return p;
  }

  /* ---- 1画面1動作の表示(全画面 .ov) ---- */
  function openPlayer(api, kind){
    var d = loadData(api);
    var pages = (kind === 'plan') ? pagesPlan(api, d) : pagesNow(api, d);
    var T = api.T;
    var i = 0;
    var ov = api.el('div', 'ov ov-player');
    ov.setAttribute('data-kind', kind);

    var top = api.el('div', 'pl-top');
    callList(api, d).forEach(function(c){ top.appendChild(callLink(api, c.label, c.tel, 'sos-btn')); });
    ov.appendChild(top);

    var title = api.el('div', 'pl-title', T(kind === 'plan' ? 'screen.home.player.planTitle' : 'screen.home.player.nowTitle'));
    ov.appendChild(title);
    var body = api.el('div', 'pl-body');
    ov.appendChild(body);

    var nav = api.el('div', 'pl-nav');
    var bPrev = api.el('button', 'btn pl-prev', T('common.prev'));
    var bNext = api.el('button', 'btn primary pl-next', T('common.next'));
    var bClose = api.el('button', 'btn pl-close', T('common.close'));
    nav.appendChild(bPrev); nav.appendChild(bNext); nav.appendChild(bClose);
    ov.appendChild(nav);

    function draw(){
      body.textContent = '';
      var pg = pages[i];
      if(!pg){ body.appendChild(api.el('p', 'step-text', T('screen.home.player.empty'))); return; }
      if(pg.label) body.appendChild(api.el('div', 'pl-label', pg.label));
      if(pg.text) body.appendChild(api.el('div', 'step-text', pg.text));
      if(pg.calls && pg.calls.length){
        var row = api.el('div', 'pl-calls');
        pg.calls.forEach(function(c){ row.appendChild(callLink(api, c.label, c.tel, 'call-btn')); });
        body.appendChild(row);
      }
      var cnt = api.el('div', 'pl-count', T('screen.home.player.pageOf').replace('{n}', String(i + 1)).replace('{m}', String(pages.length)));
      cnt.setAttribute('dir', 'ltr');   // ar(RTL)でも「1 / 3」の並びを反転させない(数字は反転しない取り決め)
      body.appendChild(cnt);
      bPrev.classList.toggle('hidden', i <= 0);
      bNext.classList.toggle('hidden', i >= pages.length - 1);
      try{ ov.scrollTop = 0; }catch(_){}
    }
    function close(){ if(ov.parentNode) ov.parentNode.removeChild(ov); }
    api.Tap.bind(bNext, function(){ if(i < pages.length - 1){ i++; api.vibrate(40); draw(); } });
    api.Tap.bind(bPrev, function(){ if(i > 0){ i--; api.vibrate(40); draw(); } });
    api.Tap.bind(bClose, close);
    draw();
    document.body.appendChild(ov);
    return ov;
  }

  /* ---- 初回の免責(1画面。「わかった」で閉じて以後は出さない) ---- */
  function hasAgreed(api){ return api.load(AGREE_KEY, false) === true; }
  function openAgree(api){
    var T = function(k){ return api.T('screen.home.agree.' + k); };
    var ov = api.el('div', 'ov ov-agree');
    ov.appendChild(api.el('h2', 'show-head', T('title')));
    ['body1','body2','body3','body4'].forEach(function(k){ ov.appendChild(api.el('p', 'agree-p', T(k))); });
    var ok = api.el('button', 'ov-close', T('ok'));
    api.Tap.bind(ok, function(){
      api.save(AGREE_KEY, true);
      if(ov.parentNode) ov.parentNode.removeChild(ov);
    });
    ov.appendChild(ok);
    document.body.appendChild(ov);
    return ov;
  }

  window.ANSHIN_LIB = {
    DATA_KEY: DATA_KEY, AGREE_KEY: AGREE_KEY,
    blank: blank, loadData: loadData, saveData: saveData, normTel: normTel,
    renderSos: renderSos, openPlayer: openPlayer, hasAgreed: hasAgreed, openAgree: openAgree,
    pagesNow: pagesNow, pagesPlan: pagesPlan
  };
})();
