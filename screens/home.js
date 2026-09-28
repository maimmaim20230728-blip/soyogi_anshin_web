'use strict';
/* 画面: ホーム(常に見えるのは中立な2ボタンだけ)
   ・「いま ここに もどる」「あぶないときの けいかく」→ 本人が書いた文を1画面1動作で出す(lib.js の openPlayer)
   ・初回起動だけ免責を1画面で出す(「わかった」で閉じる)
   ・アプリ名(ヘッダー)を5回連打すると「とうろくの へや」(screens/edit.js)が開く。痕跡は出さない・アプリを離れると閉じる(edit.js)
     (app.js が hd-title のタップを home モジュールの onTitleTap に渡し、true が返ったらホームへ戻らない) */
(function(){
  var TAP_GOAL = 5;          // 連打の回数
  var TAP_RESET_MS = 1500;   // これ以上あいたら数え直し
  var tapN = 0, tapLast = 0;

  window.SCREENS.register('home', {
    render: function(c, api){
      var L = window.ANSHIN_LIB;
      /* 見出しは付けない(ヘッダーに名前がある)。常に見えるのは中立な2ボタンだけ */

      var bNow = api.el('button', 'big-btn huge home-now');
      bNow.appendChild(api.el('span', 'lbl', api.T('screen.home.btnNow')));
      api.Tap.bind(bNow, function(){ L.openPlayer(api, 'now'); });
      c.appendChild(bNow);

      var bPlan = api.el('button', 'big-btn huge home-plan');
      bPlan.appendChild(api.el('span', 'lbl', api.T('screen.home.btnPlan')));
      api.Tap.bind(bPlan, function(){ L.openPlayer(api, 'plan'); });
      c.appendChild(bPlan);

      L.renderSos(api);
      if(!L.hasAgreed(api) && !document.querySelector('.ov-agree')) L.openAgree(api);
    },
    /* ヘッダーのアプリ名タップ(app.js から呼ばれる)。5連打で登録の部屋を開く。多めに押しても通過した瞬間に開く */
    onTitleTap: function(api){
      var now = Date.now();
      tapN = (now - tapLast <= TAP_RESET_MS) ? tapN + 1 : 1;
      tapLast = now;
      if(tapN >= TAP_GOAL){
        tapN = 0;
        var ed = window.SCREENS.get('edit');
        if(ed && typeof ed.reset === 'function') ed.reset();   // いつも入口から
        api.go('edit');
        return true;
      }
      return false;
    }
  });
})();
