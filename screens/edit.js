'use strict';
/* 画面: とうろくの へや(連打で開く部屋の奥。ナビには置かない・リロードで閉じる)
   ・ホームのアプリ名5連打 → api.go('edit')。とじる/アプリ名タップ でホームへ
   ・入口(項目の一覧) → 項目ごとの編集(1画面1項目)。書いた瞬間に端末内へ保存(容量オーバーは通知して取り消し)
   ・項目: ばしょ/じぶんへの ことば/こきゅう・さわる もの/あぶない サイン/れんらくできる ひと/まどぐち/
           「いま ここに もどる」の てじゅん/「あぶないときの けいかく」の てじゅん/きいろ しんごうの とき */
(function(){
  var TEXT_KEYS = ['place','words','calm','signs'];
  var SECTIONS = ['place','words','calm','signs','contacts','windows','steps','plan','yellow'];
  var sec = null;   // null=入口。編集中の項目id

  function T(api, k){ return api.T('screen.edit.' + k); }

  /* 保存(失敗=容量オーバーなら通知して元に戻す) */
  function persist(api, d, undo){
    if(!window.ANSHIN_LIB.saveData(api, d)){
      api.toast(api.T('common.storageFull'));
      if(undo) undo();
      return false;
    }
    return true;
  }

  /* ---- 入口: 項目の一覧 ---- */
  function renderHub(c, api){
    c.appendChild(api.el('h1', 'scr-title', T(api, 'title')));
    c.appendChild(api.el('p', 'hint', T(api, 'hint')));
    var d = window.ANSHIN_LIB.loadData(api);
    SECTIONS.forEach(function(id){
      var b = api.el('button', 'big-btn edit-sec');
      b.setAttribute('data-sec', id);
      b.appendChild(api.el('span', 'lbl', T(api, 'sections.' + id)));
      var filled = sectionFilled(d, id);
      b.appendChild(api.el('span', 'edit-mark', filled ? '✓' : ''));
      api.Tap.bind(b, function(){ sec = id; api.go('edit'); });
      c.appendChild(b);
    });
    var close = api.el('button', 'btn wide edit-close', T(api, 'close'));
    api.Tap.bind(close, function(){ sec = null; api.go('home'); });
    c.appendChild(close);
  }
  function sectionFilled(d, id){
    if(TEXT_KEYS.indexOf(id) >= 0) return !!d[id];
    if(id === 'contacts' || id === 'windows') return d[id].some(function(r){ return (r.name && r.name.trim()) || (r.tel && r.tel.trim()); });
    if(id === 'steps' || id === 'plan') return d[id].some(function(s){ return s.trim(); });
    if(id === 'yellow') return !!(d.yellowRest || d.yellowStep);
    return false;
  }

  /* ---- 項目の編集(共通の頭とお尻) ---- */
  function head(c, api, id){
    var back = api.el('button', 'btn edit-back', (api.rtl ? '→ ' : '← ') + T(api, 'back'));   // ar(RTL)は矢印も右向き
    api.Tap.bind(back, function(){ sec = null; api.go('edit'); });
    c.appendChild(back);
    c.appendChild(api.el('h1', 'scr-title', T(api, 'sections.' + id)));
    c.appendChild(api.el('p', 'hint', T(api, 'hints.' + id)));
  }
  function foot(c, api){
    var done = api.el('button', 'btn primary wide edit-done', api.T('common.done'));
    api.Tap.bind(done, function(){ api.toast(T(api, 'saved')); sec = null; api.go('edit'); });
    c.appendChild(done);
  }
  function textarea(api, value, ph){
    var ta = document.createElement('textarea');
    ta.className = 'edit-ta';
    ta.value = value || '';
    ta.placeholder = ph || T(api, 'textPh');
    ta.rows = 4;
    return ta;
  }
  function input(api, value, ph, tel){
    var inp = document.createElement('input');
    inp.type = 'text';
    if(tel) inp.setAttribute('inputmode', 'tel');
    inp.value = value || '';
    inp.placeholder = ph || '';
    return inp;
  }

  /* 文章1つ(ばしょ・ことば・こきゅう・サイン) */
  function renderText(c, api, id){
    head(c, api, id);
    var d = window.ANSHIN_LIB.loadData(api);
    var f = api.el('div', 'field');
    var ta = textarea(api, d[id]);
    ta.addEventListener('input', function(){
      var prev = d[id]; d[id] = ta.value;
      persist(api, d, function(){ d[id] = prev; ta.value = prev; });
    });
    f.appendChild(ta);
    c.appendChild(f);
    foot(c, api);
  }

  /* きいろ しんごうの とき(やすみかた + ちいさな いっぽ) */
  function renderYellow(c, api){
    head(c, api, 'yellow');
    var d = window.ANSHIN_LIB.loadData(api);
    [['yellowRest', 'yellowRest'], ['yellowStep', 'yellowStep']].forEach(function(pair){
      var key = pair[0];
      var f = api.el('div', 'field');
      var lb = api.el('label', '', T(api, pair[1]));
      var ta = textarea(api, d[key]);
      ta.rows = (key === 'yellowStep') ? 2 : 4;
      ta.addEventListener('input', function(){
        var prev = d[key]; d[key] = ta.value;
        persist(api, d, function(){ d[key] = prev; ta.value = prev; });
      });
      f.appendChild(lb); f.appendChild(ta);
      c.appendChild(f);
    });
    foot(c, api);
  }

  /* なまえ+でんわ の行(れんらくできる ひと・まどぐち) */
  function renderRows(c, api, id){
    head(c, api, id);
    var d = window.ANSHIN_LIB.loadData(api);
    var list = api.el('ul', 'list edit-rows');
    function draw(){
      list.textContent = '';
      d[id].forEach(function(row, idx){
        var li = api.el('li', 'edit-row');
        var grow = api.el('div', 'grow');
        var nm = input(api, row.name, T(api, 'name'));
        nm.className = 'edit-row-name';
        nm.addEventListener('input', function(){ var p = row.name; row.name = nm.value; persist(api, d, function(){ row.name = p; nm.value = p; }); });
        var tl = input(api, row.tel, T(api, 'tel'), true);
        tl.className = 'edit-row-tel';
        tl.addEventListener('input', function(){ var p = row.tel; row.tel = tl.value; persist(api, d, function(){ row.tel = p; tl.value = p; }); });
        grow.appendChild(nm); grow.appendChild(tl);
        li.appendChild(grow);
        var del = api.el('button', 'btn danger edit-del', T(api, 'del'));
        api.Tap.bind(del, function(){
          var removed = d[id].splice(idx, 1)[0];
          if(persist(api, d, function(){ d[id].splice(idx, 0, removed); })) draw();
        });
        li.appendChild(del);
        list.appendChild(li);
      });
    }
    draw();
    c.appendChild(list);
    var add = api.el('button', 'btn wide edit-add', '＋ ' + T(api, 'addRow'));
    api.Tap.bind(add, function(){
      d[id].push({ name:'', tel:'' });
      if(persist(api, d, function(){ d[id].pop(); })) draw();
    });
    c.appendChild(add);
    foot(c, api);
  }

  /* 1行1手順の並び(いま ここに もどる・あぶないときの けいかく)。うえへ/したへ で並べ替え */
  function renderLines(c, api, id){
    head(c, api, id);
    var d = window.ANSHIN_LIB.loadData(api);
    var list = api.el('ul', 'list edit-lines');
    function swap(i, j){
      var a = d[id][i]; d[id][i] = d[id][j]; d[id][j] = a;
      if(persist(api, d, function(){ var b = d[id][i]; d[id][i] = d[id][j]; d[id][j] = b; })) draw();
    }
    function draw(){
      list.textContent = '';
      d[id].forEach(function(line, idx){
        var li = api.el('li', 'edit-line');
        li.appendChild(api.el('span', 'edit-num', String(idx + 1)));
        var inp = input(api, line, T(api, 'stepPh'));
        inp.className = 'grow edit-line-inp';
        inp.addEventListener('input', function(){ var p = d[id][idx]; d[id][idx] = inp.value; persist(api, d, function(){ d[id][idx] = p; inp.value = p; }); });
        li.appendChild(inp);
        var up = api.el('button', 'btn edit-up', '↑');
        up.setAttribute('aria-label', T(api, 'up'));
        if(idx === 0) up.disabled = true;
        api.Tap.bind(up, function(){ if(idx > 0) swap(idx, idx - 1); });
        var dn = api.el('button', 'btn edit-down', '↓');
        dn.setAttribute('aria-label', T(api, 'down'));
        if(idx === d[id].length - 1) dn.disabled = true;
        api.Tap.bind(dn, function(){ if(idx < d[id].length - 1) swap(idx, idx + 1); });
        var del = api.el('button', 'btn danger edit-del', '×');
        del.setAttribute('aria-label', T(api, 'del'));
        api.Tap.bind(del, function(){
          var removed = d[id].splice(idx, 1)[0];
          if(persist(api, d, function(){ d[id].splice(idx, 0, removed); })) draw();
        });
        li.appendChild(up); li.appendChild(dn); li.appendChild(del);
        list.appendChild(li);
      });
    }
    draw();
    c.appendChild(list);
    var add = api.el('button', 'btn wide edit-add', '＋ ' + T(api, 'addStep'));
    api.Tap.bind(add, function(){
      d[id].push('');
      if(persist(api, d, function(){ d[id].pop(); })) draw();
    });
    c.appendChild(add);
    foot(c, api);
  }

  window.SCREENS.register('edit', {
    render: function(c, api){
      window.ANSHIN_LIB.renderSos(api);
      if(!sec) return renderHub(c, api);
      if(TEXT_KEYS.indexOf(sec) >= 0) return renderText(c, api, sec);
      if(sec === 'yellow') return renderYellow(c, api);
      if(sec === 'contacts' || sec === 'windows') return renderRows(c, api, sec);
      if(sec === 'steps' || sec === 'plan') return renderLines(c, api, sec);
      sec = null; renderHub(c, api);
    },
    /* 部屋を開き直すときは入口から(home.js が呼ぶ) */
    reset: function(){ sec = null; }
  });
})();
