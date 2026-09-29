'use strict';
/* ひとつずつ・そよぎ 画面共通の部品(画面ではない。home.js / edit.js が使う)
   ・データの読み書き(1つのキー data.v1)・電話番号の正規化(もしもカード流用=数字と+だけ残す。全角は半角に・先頭の#*は残す・内線は切る)
   ・固定バー(119/110/登録した窓口を tel: で発信。どの画面にも出る)
   ・1画面1動作の表示(.ov 全画面・大きな文字・つぎ/まえ/とじる・進むたび振動・題名の行の端に × とじる)
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

  /* ---- 電話番号: 数字と + だけ残す(もしもカードと同じ)。空なら null ----
     ・全角の数字と記号(０-９＋＃＊)は半角にしてから数える(全角で書いた番号が黙って消えないように)
     ・先頭の # と * は残す(#7119・#9110 などの短縮番号。消すと別の番号になる)
     ・「内線」「ext」「x」と、途中の # * から後ろは切る(内線の数字を本番号に足さない)
     ・数字が3つ未満なら null */
  function normTel(s){
    var t = String(s == null ? '' : s).replace(/[０-９＋＃＊]/g, function(c){ return String.fromCharCode(c.charCodeAt(0) - 0xFEE0); });
    t = t.split(/内線|ext|[xXｘＸ]/i)[0];
    var m = /^[^\d+#*]*([#*])/.exec(t);
    var lead = m ? m[1] : '';
    if(m) t = t.slice(m[0].length);
    var body = t.split(/[#*]/)[0].replace(/[^\d+]/g, '');
    if(body.replace(/\D/g, '').length < 3) return null;
    return lead + body;
  }
  /* tel: の URI では # を %23 にする(そのままだと # 以降が捨てられる) */
  function telHref(tel){ return 'tel:' + String(tel).replace(/#/g, '%23'); }

  /* ---- 発信ボタン(a[href=tel:]。ネイティブの遷移に任せる=JSの click は使わない) ---- */
  function callLink(api, label, tel, cls){
    var a = document.createElement('a');
    a.className = cls || 'sos-btn';
    a.href = telHref(tel);
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
      if(t) out.push({ label:(has(w.name) ? w.name : t), tel:t });
    });
    return out;
  }
  /* 119・110 が並びの幅に入りきらないときだけ、並び全体の字と余白を少し小さくする(.tight)。それでも入らなければ折り返す(.wrap)。
     ar(RTL)は右から並ぶので左の端で見る。2026-09-29: 幅360px・文字 とても大きい で、en など8言語の表示の頁(.pl-top)と
     de の固定バー(#sos-bar)で 110 が横スクロールの外に出ていた(登録した窓口は今までどおり横にスクロール) */
  function fitCalls(box){
    if(!box || !box.querySelectorAll || !box.getBoundingClientRect) return;
    var btns = box.querySelectorAll('.sos-btn');   // 1つめ=119・2つめ=110
    if(btns.length < 2) return;
    box.classList.remove('tight', 'wrap');
    function over(){
      var b = box.getBoundingClientRect(), r = btns[1].getBoundingClientRect();
      if(!b.width) return false;
      return r.right > b.right + 0.5 || r.left < b.left - 0.5;
    }
    if(!over()) return;
    box.classList.add('tight');
    if(over()) box.classList.add('wrap');
  }
  if(typeof window !== 'undefined' && window.addEventListener){
    window.addEventListener('resize', function(){
      var ls = document.querySelectorAll('#sos-bar, .ov-player .pl-top');
      for(var i = 0; i < ls.length; i++) fitCalls(ls[i]);
    });
  }
  /* 固定バーを描き直す(各画面の render から呼ぶ=言語切替・登録の変化に追随) */
  function renderSos(api){
    var bar = document.getElementById('sos-bar');
    if(!bar) return;
    bar.textContent = '';
    var d = loadData(api);
    callList(api, d).forEach(function(c){ bar.appendChild(callLink(api, c.label, c.tel, 'sos-btn')); });
    fitCalls(bar);
    /* 固定バーの高さを CSS 変数へ(トーストを固定バーより上に出すため。style.css の .toast) */
    try{
      var h = Math.ceil(bar.getBoundingClientRect().height);
      if(h > 0) document.documentElement.style.setProperty('--sos-h', h + 'px');
    }catch(_){}
  }

  /* ---- 今日の日付(言語に合わせる。失敗したら素の形) ----
     ja/zh は空白が無いので、語の途中(「28|日」「月|曜日」)で折れないよう、
     数字と 年/月/日 の間・月と数字の間を WORD JOINER(U+2060)でつなぎ、「年」の後に ZERO WIDTH SPACE(U+200B)、曜日の前に空白を入れる
     (表示の文は word-break:keep-all なので、折れるのは「2026年|9月28日|月曜日」の区切りだけ) */
  function todayText(api){
    var d = new Date();
    try{
      var tag = { ja:'ja-JP', en:'en-US', de:'de-DE', fr:'fr-FR', es:'es-ES', it:'it-IT', pt:'pt-PT', nl:'nl-NL', sv:'sv-SE', ko:'ko-KR', zh:'zh-CN', ar:'ar' }[api.lang] || 'ja-JP';
      var s = d.toLocaleDateString(tag, { year:'numeric', month:'long', day:'numeric', weekday:'long' });
      if(api.lang === 'ja' || api.lang === 'zh'){
        var m = /^(.*?日)\s*(.+)$/.exec(s);
        if(m) s = m[1].replace(/(\d)(?=[年月日])/g, '$1\u2060').replace(/月(?=\d)/g, '月\u2060').replace(/年/, '年\u200B') + ' ' + m[2];
      }
      return s;
    }catch(_){
      return d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate();
    }
  }
  /* 空白や改行だけの文は「書いていない」とみなす */
  function has(s){ return !!(s && String(s).trim()); }

  /* ---- 表示するページの組み立て(空の項目は飛ばす) ----
     page = { label, text, calls:[{label,tel}] } */
  function pagesNow(api, d){
    var T = function(k){ return api.T('screen.home.player.' + k); };
    var p = [];
    p.push({ label:T('today'), text:todayText(api) });
    if(has(d.place)) p.push({ label:T('place'), text:d.place });
    d.steps.forEach(function(s){ if(has(s)) p.push({ text:s }); });
    if(has(d.calm)) p.push({ label:T('calm'), text:d.calm });
    if(has(d.words)) p.push({ label:T('words'), text:d.words });
    p.push({ text:T('end'), calls:callList(api, d) });
    return p;
  }
  function pagesPlan(api, d){
    var T = function(k){ return api.T('screen.home.player.' + k); };
    var p = [];
    if(has(d.yellowRest)) p.push({ label:T('yellow') + ' / ' + T('yellowRest'), text:d.yellowRest });
    if(has(d.yellowStep)) p.push({ label:T('yellow') + ' / ' + T('yellowStep'), text:d.yellowStep });
    if(has(d.signs)) p.push({ label:T('signs'), text:d.signs });
    d.plan.forEach(function(s){ if(has(s)) p.push({ text:s }); });
    /* れんらくできる ひと: なまえ か でんわ が書いてある行だけ(空の行だけなら頁を作らない)
       電話がある人は発信ボタン(名前入り)だけ。電話が無い人だけ名前を文字で出す(同じ名前を2回並べない=頁が短くなる) */
    var cs = [], names = [];
    var people = d.contacts.filter(function(c){ return has(c.name) || normTel(c.tel); });
    people.forEach(function(c){
      var t = normTel(c.tel);
      if(t) cs.push({ label:(has(c.name) ? c.name : t), tel:t });
      else names.push(c.name);
    });
    if(people.length) p.push({ label:T('contacts'), text:names.join('\n'), calls:cs });
    p.push({ label:T('windows'), text:'', calls:callList(api, d) });
    if(has(d.words)) p.push({ label:T('words'), text:d.words });
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

    /* 題名の行: 題名 + 端に「× とじる」(ヘッダーと同じ退出処理。表示はヘッダーを覆うため・anshin-13)。
       119/110 の並びには入れない(並びが狭くなって 119/110 が隠れないように)。ar(RTL)は左端 */
    var head = api.el('div', 'pl-head');
    var title = api.el('div', 'pl-title', T(kind === 'plan' ? 'screen.home.player.planTitle' : 'screen.home.player.nowTitle'));
    head.appendChild(title);
    var bExit = api.el('button', 'btn pl-exit', T('app.exit'));
    bExit.type = 'button';
    api.Tap.bind(bExit, function(){ if(api.exit) api.exit(); }, { silent:true });
    head.appendChild(bExit);
    ov.appendChild(head);
    /* pl-body = スクロールする入れ物。中身は pl-inner に入れて上下の margin:auto で真ん中に置く
       (中身が画面より高いときは上から並んでスクロールできる。justify-content:center だと頭が上に切れて戻れない) */
    var body = api.el('div', 'pl-body');
    var inner = api.el('div', 'pl-inner');
    body.appendChild(inner);
    ov.appendChild(body);

    var nav = api.el('div', 'pl-nav');
    var bPrev = api.el('button', 'btn pl-prev', T('common.prev'));
    var bNext = api.el('button', 'btn primary pl-next', T('common.next'));
    var bClose = api.el('button', 'btn pl-close', T('common.close'));
    /* Android の戻るボタン(Play版)=この「とじる」と同じ(表示を閉じてホームへ。頁を1つ戻すのでも、「× とじる」の退出でもない・2026-09-29) */
    bClose.setAttribute('data-back', '1');
    nav.appendChild(bPrev); nav.appendChild(bNext); nav.appendChild(bClose);
    ov.appendChild(nav);

    function draw(){
      inner.textContent = '';
      var pg = pages[i];
      if(!pg){ inner.appendChild(api.el('p', 'step-text', T('screen.home.player.empty'))); return; }
      if(pg.label) inner.appendChild(api.el('div', 'pl-label', pg.label));
      if(pg.text) inner.appendChild(api.el('div', 'step-text', pg.text));
      if(pg.calls && pg.calls.length){
        var row = api.el('div', 'pl-calls');
        pg.calls.forEach(function(c){ row.appendChild(callLink(api, c.label, c.tel, 'call-btn')); });
        inner.appendChild(row);
      }
      var cnt = api.el('div', 'pl-count', T('screen.home.player.pageOf').replace('{n}', String(i + 1)).replace('{m}', String(pages.length)));
      cnt.setAttribute('dir', 'ltr');   // ar(RTL)でも「1 / 3」の並びを反転させない(数字は反転しない取り決め)
      inner.appendChild(cnt);
      bPrev.classList.toggle('hidden', i <= 0);
      bNext.classList.toggle('hidden', i >= pages.length - 1);
      try{ ov.scrollTop = 0; body.scrollTop = 0; }catch(_){}
    }
    function close(){ if(ov.parentNode) ov.parentNode.removeChild(ov); }
    api.Tap.bind(bNext, function(){ if(i < pages.length - 1){ i++; api.vibrate(40); draw(); } });
    api.Tap.bind(bPrev, function(){ if(i > 0){ i--; api.vibrate(40); draw(); } });
    api.Tap.bind(bClose, close);
    draw();
    document.body.appendChild(ov);
    fitCalls(top);   // 画面に出してから測る
    return ov;
  }

  /* ---- 初回の免責(1画面。「わかった」で閉じて以後は出さない) ---- */
  function hasAgreed(api){ return api.load(AGREE_KEY, false) === true; }
  function openAgree(api){
    var T = function(k){ return api.T('screen.home.agree.' + k); };
    var ov = api.el('div', 'ov ov-agree');
    /* Android の戻るボタン(Play版)では閉じない(読まずに先へ進めてしまうので)。アプリを後ろに下げるだけ(2026-09-29) */
    ov.setAttribute('data-noback', '1');
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
    blank: blank, loadData: loadData, saveData: saveData, normTel: normTel, telHref: telHref, has: has, todayText: todayText,
    renderSos: renderSos, openPlayer: openPlayer, hasAgreed: hasAgreed, openAgree: openAgree,
    pagesNow: pagesNow, pagesPlan: pagesPlan
  };
})();
