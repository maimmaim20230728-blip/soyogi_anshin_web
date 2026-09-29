/* ひとつずつ・そよぎ 多言語テーブル(そよぎアプリ・キット v1・12言語)
   ・window.ANSHIN_I18N = { ja, en, de, fr, es, it, pt, nl, sv, ko, zh, ar }
   ・キー構造は全言語で完全一致(_check.js が ja を正として構造・配列要素数を機械照合)
   ・🔴 BUILDER: 文言は ja と en の両方に同じキーで足す。画面固有は screen.<画面id>.* に置く。
     de〜ar の10言語は、翻訳Workflowで差し替えるまで en を自動で流用する(末尾の仮置き)
   ・{n} などのプレースホルダは app.js/screens が実値に差し替える(訳文でも記号のまま残す)
   ・set.lang は言語切替ラベルなので全言語 'ことば / Language' 固定
   ・ar は RTL。app.js が document.dir='rtl' にする
   ・ひらがな: 本人が読む操作文言はひらがな主体。相手に見せる文(みせる画面等)は漢字で曖昧さを消す */
(function(){
'use strict';

/* ============ ja(正) ============ */
var ja = {
  app: { name:'ひとつずつ・そよぎ', short:'ひとつずつ', tagline:'元気なときに決めた手順で、いまに戻る。', exit:'× とじる' },
  nav: { home:'ホーム', set:'せってい', edit:'とうろく' },
  common: {
    ok:'OK', cancel:'やめる', save:'ほぞんする', del:'けす', back:'もどる', close:'とじる',
    yes:'はい', no:'いいえ', add:'ついか', edit:'なおす', next:'つぎ', prev:'まえ', done:'できた',
    saved:'ほぞんしました ✓', saveFail:'ほぞんできませんでした', storageFull:'いっぱいで ほぞんできません',
    deleted:'けしました', delConfirm:'ほんとうに けしますか?', empty:'まだ なにも ありません',
    optional:'ぜんぶ 書かなくても だいじょうぶです。', today:'きょう',
    backConfirm:'書いたことは まだ ほぞんしていません。すてて もどりますか?',   // Android の戻るボタン(Play版)の確かめ
    photo: {
      camera:'カメラで とる', roll:'しゃしんから えらぶ',
      cropTitle:'しゃしんを 切りとる', cropHint:'ゆびで うごかすか、やじるしで あわせて、スライダーで 大きさを かえます。',
      zoom:'大きさ', panUp:'うえへ', panDown:'したへ', panLeft:'ひだりへ', panRight:'みぎへ',
      make:'これで きめる', fail:'しゃしんを よみこめませんでした'
    }
  },
  set: {
    hNormal:'ふだんの せってい',
    hBackup:'きしゅへんこう(バックアップ)',
    fs:'もじの大きさ', fsSizes:['ふつう','大きい','とても大きい'],
    lang:'ことば / Language',
    theme:'いろ', themes:['みどり','みずいろ','しろ','くろ'],
    bgm:'BGM', bgms:['なし','みどりの音','あおの音'],
    sound:'タップ音', on:'ON', off:'OFF',
    bkHint:'あたらしい スマホに うつるときは、「かきだす」で ファイルを ほぞんして、あたらしい スマホで「よみこむ」を おしてください。',
    bkExport:'かきだす', bkImport:'よみこむ',
    exported:'かきだしました ✓', imported:'よみこみました ✓', importFail:'よみこめませんでした',
    importConfirm:'いまの ないようは、ファイルの ないように おきかわります。よみこみますか?',
    note:'書いたことは すべて この端末の中だけに ほぞんされます。どこにも 送られません。',
    privacy:'プライバシーポリシー',
    credit:'アプリ開発：介護と支援の相談どころ そよぎ'
  },
  screen: {
    home: {
      title:'ひとつずつ',
      btnNow:'いま ここに もどる',
      btnPlan:'あぶないときの けいかく',
      /* 固定バー(どの画面にも出る救急と窓口) */
      sos: { call119:'119 きゅうきゅう', call110:'110 けいさつ', call:'でんわする' },
      /* 初回だけ出す免責 */
      agree: {
        title:'はじめに',
        body1:'このアプリは、元気なときに じぶんで きめた手順を、つらいときに 1画面ずつ 出す道具です。',
        body2:'医療の代わりでは ありません。',
        body3:'あぶないときは、119(きゅうきゅう)・110(けいさつ)や 相談窓口に れんらくしてください。',
        body4:'てじゅんの とうろくは、いちばん上の アプリの名前を 5回 つづけて おすと ひらきます。',
        ok:'わかった'
      },
      /* 1画面1動作の表示 */
      player: {
        nowTitle:'いま ここに もどる',
        planTitle:'あぶないときの けいかく',
        today:'きょうは', place:'いまいる ばしょは',
        words:'じぶんへの ことば', calm:'きく こきゅう・さわる もの', signs:'あぶない サイン',
        yellow:'きいろ しんごうの とき', yellowRest:'やすみかた', yellowStep:'ちいさな いっぽ',
        contacts:'れんらくできる ひと', windows:'まどぐち',
        end:'ここまで です。', empty:'まだ てじゅんが ありません。',
        pageOf:'{n} / {m}'
      }
    },
    edit: {
      title:'とうろく の へや',
      hint:'ここは アプリの名前を 5回 おしたときだけ ひらきます。アプリを はなれると とじます(書いたものは のこります)。',
      close:'とじる', back:'もどる',
      sections: {
        place:'いまいる ばしょ', words:'じぶんへの ことば', calm:'きく こきゅう・さわる もの', signs:'あぶない サイン',
        contacts:'れんらくできる ひと', windows:'まどぐち',
        steps:'「いま ここに もどる」の てじゅん', plan:'「あぶないときの けいかく」の てじゅん',
        yellow:'きいろ しんごうの とき'
      },
      hints: {
        place:'いま くらしている ばしょ。つらいときに「ここは どこ」を おもいだす ための ことばです。',
        words:'元気なときの じぶんから、つらいときの じぶんへ。',
        calm:'じぶんに きく こきゅうの しかたや、さわると おちつく ものを、じぶんの ことばで。',
        signs:'「こうなったら あぶない」と じぶんで きめた サイン。',
        contacts:'なまえと でんわばんごう。ぜんぶ 書かなくても だいじょうぶです。',
        windows:'119(きゅうきゅう)と 110(けいさつ)は いつも でます。ほかの まどぐちは じぶんで たしてください。',
        steps:'ひとつの てじゅんを 1行で。うえから じゅんばんに でます。',
        plan:'ひとつの てじゅんを 1行で。「きいろ しんごうの とき」の あとに でます。',
        yellow:'まだ あぶなくは ないけれど、つかれている とき。やすみかたと、ちいさな いっぽを ひとつだけ。'
      },
      name:'なまえ', tel:'でんわばんごう', addRow:'ついか', del:'けす', delAgain:'もういちど おすと けします',
      stepPh:'てじゅんを 1行で', addStep:'てじゅんを ついか', up:'うえへ', down:'したへ',
      yellowRest:'やすみかた(じぶんの ことばで)', yellowStep:'ちいさな いっぽ(ひとつだけ)',
      textPh:'ここに かきます', saved:'ほぞんしました ✓'
    }
  },
  /* はじめての つかいかた(app.js openGuide・初回に1回だけ・2026-09-30)。初回の免責「はじめに」の4点(道具の説明・医療の代わりではない・
     119/110や窓口・アプリ名5回)をここに含める=読み終えたら免責も済んだ扱い(screens/lib.js)。とうろくの へやが隠れた入口なので
     せっていから もう一度は ひらけない(GUIDE_AGAIN=false・10代の情報室と同じ)。heads と bodies は同じ数。
     本文の「× とじる」は × と語の間を NBSP(U+00A0)でつないでいる(行の端で「×」だけが残らないように。12言語とも) */
  guide: {
    title:'つかいかた', step:'{n} / {m}', start:'はじめる', again:'もういちど 見る',
    heads:[
      'ひとつずつ・そよぎ へ ようこそ',
      'とうろく の へやの ひらきかた',
      'とうろく の へや',
      'てじゅんを 書く',
      'つらいときは ホームの ボタン',
      'でんわの ボタン',
      '書いたことは この端末の中だけ',
      '見やすく する'
    ],
    bodies:[
      'このアプリは、元気なときに じぶんで きめた手順を、つらいときに 1画面ずつ 出す道具です。\n医療の代わりでは ありません。\nあぶないときは、119(きゅうきゅう)・110(けいさつ)や 相談窓口に れんらくしてください。',
      'てじゅんは、元気なときに 書いておきます。\nいちばん上の アプリの名前を 5回 つづけて おすと、「とうろく の へや」が ひらきます。\nへやに はいる ボタンは ありません。この案内は さいごまで 読むと もう 出ないので、ひらきかたを おぼえておいてください。',
      'へやには、「いまいる ばしょ」「じぶんへの ことば」など、9つの 項目が あります。\n項目を おして 書くと、書いた そばから ほぞんされます。ぜんぶ 書かなくても だいじょうぶです。\n「できた」で 項目の 一覧に もどります。「とじる」を おすか、アプリを はなれると、へやは とじます。',
      '「いま ここに もどる」と「あぶないときの けいかく」の てじゅんは、1行に ひとつずつ 書きます。\n「＋ てじゅんを ついか」で 行を ふやし、↑ ↓ で じゅんばんを かえます。\n「まどぐち」には、相談窓口の なまえと でんわばんごうを 書きます。',
      'ホームには、「いま ここに もどる」と「あぶないときの けいかく」の 2つの ボタンが あります。\nおすと、へやで 書いた ことばが 1画面に ひとつずつ 出ます。\n「つぎ」「まえ」で すすみ、「とじる」で ホームに もどります。',
      'あぶないときは、すぐに でんわ できます。\n画面の 下の「119 きゅうきゅう」「110 けいさつ」を おすと、電話の アプリが その番号で ひらきます。\n「まどぐち」に 書いた 窓口も ここに ならびます。てじゅんを 出している ときは、いちばん上に あります。',
      '書いたことは すべて この端末の中だけに ほぞんされます。どこにも 送られません。\nスマホを かえるときは、「せってい」の「かきだす」で ファイルを ほぞんして、あたらしい スマホで「よみこむ」を おしてください。\nすぐに 画面を かえたい ときは、いちばん上の「× とじる」を おすと、Google の ページが ひらきます。',
      '「せってい」で、「もじの大きさ」(ふつう・大きい・とても大きい)と「いろ」(みどり・みずいろ・しろ・くろ)を かえられます。\n「BGM」と「タップ音」も ここで かえられます。\nことばは、いちばん上の「Language」で えらべます。'
    ]
  }
};

/* ============ en ============ */
var en = {
  app: { name:'One by One - SOYOGI', short:'One by One', tagline:'Come back to now, with the steps you decided when you were well.', exit:'× Close' },
  nav: { home:'Home', set:'Settings', edit:'Register' },
  common: {
    ok:'OK', cancel:'Cancel', save:'Save', del:'Delete', back:'Back', close:'Close',
    yes:'Yes', no:'No', add:'Add', edit:'Edit', next:'Next', prev:'Previous', done:'Done',
    saved:'Saved ✓', saveFail:'Could not save', storageFull:'Storage is full, could not save',
    deleted:'Deleted', delConfirm:'Really delete this?', empty:'Nothing here yet',
    optional:'You do not have to fill in everything.', today:'Today',
    backConfirm:'What you wrote is not saved yet. Discard it and go back?',
    photo: {
      camera:'Take a photo', roll:'Choose from photos',
      cropTitle:'Crop the photo', cropHint:'Drag with a finger or use the arrows, then change the size with the slider.',
      zoom:'Size', panUp:'Up', panDown:'Down', panLeft:'Left', panRight:'Right',
      make:'Use this', fail:'Could not load the photo'
    }
  },
  set: {
    hNormal:'Everyday settings',
    hBackup:'Changing phones (backup)',
    fs:'Text size', fsSizes:['Normal','Large','Very large'],
    lang:'ことば / Language',
    theme:'Color', themes:['Green','Light blue','White','Black'],
    bgm:'Music', bgms:['None','Green tone','Blue tone'],
    sound:'Tap sound', on:'ON', off:'OFF',
    bkHint:'When you move to a new phone, tap "Export" to save a file, then tap "Import" on the new phone.',
    bkExport:'Export', bkImport:'Import',
    exported:'Exported ✓', imported:'Imported ✓', importFail:'Could not import',
    importConfirm:"Your current entries will be replaced with the file's contents. Import it?",
    note:'Everything you write is stored only on this device. Nothing is sent anywhere.',
    privacy:'Privacy policy',
    credit:'Developed by SOYOGI, a care and support consultation service'
  },
  screen: {
    home: {
      title:'One by One',
      btnNow:'Come back to here and now',
      btnPlan:'My plan for hard moments',
      sos: { call119:'119 Ambulance', call110:'110 Police', call:'Call' },
      agree: {
        title:'Before you start',
        body1:'This app shows, one screen at a time, the steps you decided for yourself when you were well.',
        body2:'It is not a substitute for medical care.',
        body3:'If you are in danger, call 119 (ambulance) or 110 (police) in Japan, or a helpline.',
        body4:'To register your steps, tap the app name at the top 5 times in a row.',
        ok:'I understand'
      },
      player: {
        nowTitle:'Come back to here and now',
        planTitle:'My plan for hard moments',
        today:'Today is', place:'The place I am in:',
        words:'Words to myself', calm:'Breathing and things to touch', signs:'My warning signs',
        yellow:'When the light is yellow', yellowRest:'How I rest', yellowStep:'One small step',
        contacts:'People I can contact', windows:'Helplines',
        end:'That is all.', empty:'No steps have been written yet.',
        pageOf:'{n} / {m}'
      }
    },
    edit: {
      title:'Registration room',
      hint:'This room opens only when you tap the app name 5 times. It closes when you leave the app (what you wrote stays).',
      close:'Close', back:'Back',
      sections: {
        place:'The place I am in', words:'Words to myself', calm:'Breathing and things to touch', signs:'My warning signs',
        contacts:'People I can contact', windows:'Helplines',
        steps:'Steps for "Come back to here and now"', plan:'Steps for "My plan for hard moments"',
        yellow:'When the light is yellow'
      },
      hints: {
        place:'Where you live now. Words to remember "where I am" in a hard moment.',
        words:'From the well you, to the you in a hard moment.',
        calm:'The breathing that works for you and the things that calm you when you touch them, in your own words.',
        signs:'The signs you decided mean "this is getting dangerous".',
        contacts:'Name and phone number. You do not have to fill in everything.',
        windows:'119 (ambulance) and 110 (police), the emergency numbers in Japan, are always shown. Add other helplines yourself.',
        steps:'One step per line. They are shown from the top, one at a time.',
        plan:'One step per line. They are shown after "When the light is yellow".',
        yellow:'Not dangerous yet, but tired. How you rest, and just one small step.'
      },
      name:'Name', tel:'Phone number', addRow:'Add', del:'Delete', delAgain:'Tap again to delete',
      stepPh:'One step in one line', addStep:'Add a step', up:'Up', down:'Down',
      yellowRest:'How I rest (in my own words)', yellowStep:'One small step (just one)',
      textPh:'Write here', saved:'Saved ✓'
    }
  },
  guide: {
    title:'How to use', step:'{n} / {m}', start:'Start', again:'Show again',
    heads:[
      'Welcome to One by One - SOYOGI',
      'How to open the Registration room',
      'The Registration room',
      'Writing your steps',
      'In a hard moment, use the Home buttons',
      'Call buttons',
      'What you write stays on this device',
      'Making it easier to see'
    ],
    bodies:[
      'In hard moments, this app shows the steps you decided for yourself when you were well, one screen at a time.\nIt is not a substitute for medical care.\nIf you are in danger, call 119 (ambulance) or 110 (police) in Japan, or a helpline.',
      'Write your steps while you are well.\nTap the app name at the top 5 times in a row to open the "Registration room".\nThere is no button for the room. This guide does not appear again once you have read it to the end, so please remember how to open the room.',
      'The room has 9 items, such as "The place I am in" and "Words to myself".\nTap an item and write. It is saved as you type. You do not have to fill in everything.\n"Done" takes you back to the list of items. The room closes when you tap "Close" or leave the app.',
      'Write the steps for "Come back to here and now" and "My plan for hard moments" one per line.\nUse "＋ Add a step" to add a line, and ↑ ↓ to change the order.\nUnder "Helplines", write the names and phone numbers of helplines.',
      'Home has two buttons: "Come back to here and now" and "My plan for hard moments".\nTap one, and what you wrote in the room appears one screen at a time.\nMove with "Next" and "Previous", and tap "Close" to go back to Home.',
      'In danger, you can call right away.\nTap "119 Ambulance" or "110 Police" at the bottom of the screen, and your phone app opens with that number.\nThe helplines you wrote under "Helplines" appear there too. While your steps are shown, these buttons are at the top.',
      'Everything you write is stored only on this device. Nothing is sent anywhere.\nWhen you change phones, tap "Export" in "Settings" to save a file, then tap "Import" on the new phone.\nTo change the screen quickly, tap "× Close" at the top, and a Google page opens.',
      'In "Settings" you can change the "Text size" (Normal, Large, Very large) and the "Color" (Green, Light blue, White, Black).\nYou can also change "Music" and "Tap sound" there.\nChoose your language with "Language" at the top.'
    ]
  }
};

var TBL = { ja: ja, en: en };
/* 翻訳の差し込み用: en の複製に訳を重ねる(足りないキーは en のまま) */
function mergeDeep(t, s){ for(var k in s){ if(s[k] && typeof s[k] === 'object' && !Array.isArray(s[k])){ if(!t[k] || typeof t[k] !== 'object') t[k] = {}; mergeDeep(t[k], s[k]); } else t[k] = s[k]; } return t; }
/* ---- de: 翻訳 ---- */
TBL.de = mergeDeep(JSON.parse(JSON.stringify(en)), {
  "app": {
    "name": "Eins nach dem anderen - SOYOGI",
    "short": "Eins nach dem anderen",
    "tagline": "Zurück ins Jetzt, mit den Schritten, die Sie festgelegt haben, als es Ihnen gut ging.",
    "exit": "× Schließen"
  },
  "nav": {
    "home": "Start",
    "set": "Einstellungen",
    "edit": "Eintragen"
  },
  "common": {
    "ok": "OK",
    "cancel": "Abbrechen",
    "save": "Speichern",
    "del": "Löschen",
    "back": "Zurück",
    "close": "Schließen",
    "yes": "Ja",
    "no": "Nein",
    "add": "Hinzufügen",
    "edit": "Bearbeiten",
    "next": "Weiter",
    "prev": "Zurück",
    "done": "Fertig",
    "saved": "Gespeichert ✓",
    "saveFail": "Konnte nicht gespeichert werden",
    "storageFull": "Speicher voll, Speichern nicht möglich",
    "deleted": "Gelöscht",
    "delConfirm": "Wirklich löschen?",
    "empty": "Noch nichts vorhanden",
    "optional": "Sie müssen nicht alles ausfüllen.",
    "today": "Heute",
    "backConfirm": "Was Sie geschrieben haben, ist noch nicht gespeichert. Verwerfen und zurückgehen?",
    "photo": {
      "camera": "Foto aufnehmen",
      "roll": "Aus Fotos wählen",
      "cropTitle": "Foto zuschneiden",
      "cropHint": "Mit dem Finger verschieben oder die Pfeile nutzen, dann die Größe mit dem Schieberegler ändern.",
      "zoom": "Größe",
      "panUp": "Nach oben",
      "panDown": "Nach unten",
      "panLeft": "Nach links",
      "panRight": "Nach rechts",
      "make": "So übernehmen",
      "fail": "Das Foto konnte nicht geladen werden"
    }
  },
  "set": {
    "hNormal": "Allgemeine Einstellungen",
    "hBackup": "Gerätewechsel (Sicherung)",
    "fs": "Schriftgröße",
    "fsSizes": [
      "Normal",
      "Groß",
      "Sehr groß"
    ],
    "lang": "ことば / Language",
    "theme": "Farbe",
    "themes": [
      "Grün",
      "Hellblau",
      "Weiß",
      "Schwarz"
    ],
    "bgm": "Musik",
    "bgms": [
      "Keine",
      "Grüner Klang",
      "Blauer Klang"
    ],
    "sound": "Tippton",
    "on": "EIN",
    "off": "AUS",
    "bkHint": "Wenn Sie auf ein neues Smartphone wechseln: Tippen Sie auf „Exportieren“, um eine Datei zu speichern, und dann auf dem neuen Smartphone auf „Importieren“.",
    "bkExport": "Exportieren",
    "bkImport": "Importieren",
    "exported": "Exportiert ✓",
    "imported": "Importiert ✓",
    "importFail": "Konnte nicht importiert werden",
    "importConfirm": "Ihre aktuellen Einträge werden durch den Inhalt der Datei ersetzt. Jetzt importieren?",
    "note": "Alles, was Sie schreiben, bleibt nur auf diesem Gerät gespeichert. Nichts wird irgendwohin gesendet.",
    "privacy": "Datenschutzerklärung",
    "credit": "App-Entwicklung: SOYOGI, Beratungsstelle für Pflege und Unterstützung"
  },
  "screen": {
    "home": {
      "title": "Eins nach dem anderen",
      "btnNow": "Zurück ins Hier und Jetzt",
      "btnPlan": "Mein Plan für gefährliche Momente",
      "sos": {
        "call119": "119 Rettungsdienst",
        "call110": "110 Polizei",
        "call": "Anrufen"
      },
      "agree": {
        "title": "Zu Beginn",
        "body1": "Diese App zeigt in schweren Momenten, einen Bildschirm nach dem anderen, die Schritte, die Sie selbst festgelegt haben, als es Ihnen gut ging.",
        "body2": "Sie ist kein Ersatz für medizinische Hilfe.",
        "body3": "Wenn Sie in Gefahr sind, rufen Sie 119 (Rettungsdienst, Japan) oder 110 (Polizei, Japan) an oder wenden Sie sich an eine Beratungsstelle.",
        "body4": "Um Ihre Schritte einzutragen, tippen Sie 5-mal hintereinander auf den App-Namen ganz oben.",
        "ok": "Verstanden"
      },
      "player": {
        "nowTitle": "Zurück ins Hier und Jetzt",
        "planTitle": "Mein Plan für gefährliche Momente",
        "today": "Heute ist",
        "place": "Wo ich gerade bin:",
        "words": "Worte an mich selbst",
        "calm": "Atmung und Dinge zum Anfassen",
        "signs": "Meine Warnzeichen",
        "yellow": "Wenn die Ampel auf Gelb steht",
        "yellowRest": "Wie ich mich ausruhe",
        "yellowStep": "Ein kleiner Schritt",
        "contacts": "Menschen, die ich erreichen kann",
        "windows": "Anlaufstellen",
        "end": "Bis hierher.",
        "empty": "Es wurden noch keine Schritte eingetragen.",
        "pageOf": "{n} / {m}"
      }
    },
    "edit": {
      "title": "Raum zum Eintragen",
      "hint": "Dieser Raum öffnet sich nur, wenn Sie 5-mal auf den App-Namen tippen. Wenn Sie die App verlassen, schließt er sich (was Sie geschrieben haben, bleibt erhalten).",
      "close": "Schließen",
      "back": "Zurück",
      "sections": {
        "place": "Wo ich gerade bin",
        "words": "Worte an mich selbst",
        "calm": "Atmung und Dinge zum Anfassen",
        "signs": "Meine Warnzeichen",
        "contacts": "Menschen, die ich erreichen kann",
        "windows": "Anlaufstellen",
        "steps": "Schritte für „Zurück ins Hier und Jetzt“",
        "plan": "Schritte für „Mein Plan für gefährliche Momente“",
        "yellow": "Wenn die Ampel auf Gelb steht"
      },
      "hints": {
        "place": "Wo Sie jetzt leben. Worte, die in einem schweren Moment daran erinnern, „wo ich bin“.",
        "words": "Vom Ich in guten Zeiten an das Ich in schweren Momenten.",
        "calm": "Die Atmung, die Ihnen hilft, und die Dinge, die Sie beruhigen, wenn Sie sie anfassen, in Ihren eigenen Worten.",
        "signs": "Die Zeichen, bei denen Sie selbst festgelegt haben: „Jetzt wird es gefährlich“.",
        "contacts": "Name und Telefonnummer. Sie müssen nicht alles ausfüllen.",
        "windows": "Die japanischen Notrufnummern 119 (Rettungsdienst) und 110 (Polizei) werden immer angezeigt. Weitere Anlaufstellen fügen Sie selbst hinzu.",
        "steps": "Ein Schritt pro Zeile. Sie werden von oben nach unten einzeln angezeigt.",
        "plan": "Ein Schritt pro Zeile. Sie werden nach „Wenn die Ampel auf Gelb steht“ angezeigt.",
        "yellow": "Noch nicht gefährlich, aber müde. Wie Sie sich ausruhen, und nur ein kleiner Schritt."
      },
      "name": "Name",
      "tel": "Telefonnummer",
      "addRow": "Hinzufügen",
      "del": "Löschen",
      "delAgain": "Zum Löschen noch einmal tippen",
      "stepPh": "Ein Schritt in einer Zeile",
      "addStep": "Schritt hinzufügen",
      "up": "Nach oben",
      "down": "Nach unten",
      "yellowRest": "Wie ich mich ausruhe (in meinen eigenen Worten)",
      "yellowStep": "Ein kleiner Schritt (nur einer)",
      "textPh": "Hier schreiben",
      "saved": "Gespeichert ✓"
    }
  },
  "guide": {
    "title": "Anleitung",
    "step": "{n} / {m}",
    "start": "Starten",
    "again": "Noch einmal ansehen",
    "heads": [
      "Willkommen bei Eins nach dem anderen - SOYOGI",
      "So öffnen Sie den Raum zum Eintragen",
      "Der Raum zum Eintragen",
      "Schritte aufschreiben",
      "In schweren Momenten: die Tasten auf der Startseite",
      "Anruf-Tasten",
      "Was Sie schreiben, bleibt auf diesem Gerät",
      "Besser lesbar machen"
    ],
    "bodies": [
      "Diese App zeigt in schweren Momenten, einen Bildschirm nach dem anderen, die Schritte, die Sie selbst festgelegt haben, als es Ihnen gut ging.\nSie ist kein Ersatz für medizinische Hilfe.\nWenn Sie in Gefahr sind, rufen Sie 119 (Rettungsdienst, Japan) oder 110 (Polizei, Japan) an oder wenden Sie sich an eine Beratungsstelle.",
      "Schreiben Sie Ihre Schritte auf, solange es Ihnen gut geht.\nTippen Sie 5-mal hintereinander auf den App-Namen ganz oben, dann öffnet sich der „Raum zum Eintragen“.\nFür den Raum gibt es keine Taste. Diese Anleitung erscheint nicht mehr, wenn Sie sie bis zum Ende gelesen haben. Merken Sie sich bitte, wie sich der Raum öffnet.",
      "Der Raum hat 9 Punkte, zum Beispiel „Wo ich gerade bin“ und „Worte an mich selbst“.\nTippen Sie auf einen Punkt und schreiben Sie. Alles wird schon beim Schreiben gespeichert. Sie müssen nicht alles ausfüllen.\nMit „Fertig“ kommen Sie zur Liste zurück. Der Raum schließt sich, wenn Sie auf „Schließen“ tippen oder die App verlassen.",
      "Schreiben Sie die Schritte für „Zurück ins Hier und Jetzt“ und „Mein Plan für gefährliche Momente“ auf, einen Schritt pro Zeile.\nMit „＋ Schritt hinzufügen“ kommt eine Zeile dazu, mit ↑ ↓ ändern Sie die Reihenfolge.\nUnter „Anlaufstellen“ tragen Sie Namen und Telefonnummern von Beratungsstellen ein.",
      "Auf der Startseite gibt es zwei Tasten: „Zurück ins Hier und Jetzt“ und „Mein Plan für gefährliche Momente“.\nWenn Sie darauf tippen, erscheint das, was Sie im Raum geschrieben haben, einen Bildschirm nach dem anderen.\nMit „Weiter“ und „Zurück“ blättern Sie, mit „Schließen“ kehren Sie zur Startseite zurück.",
      "In Gefahr können Sie sofort anrufen.\nWenn Sie unten auf „119 Rettungsdienst“ oder „110 Polizei“ tippen, öffnet sich Ihre Telefon-App mit dieser Nummer.\nDie Stellen, die Sie unter „Anlaufstellen“ eingetragen haben, stehen dort auch. Während Ihre Schritte angezeigt werden, sind diese Tasten ganz oben.",
      "Alles, was Sie schreiben, bleibt nur auf diesem Gerät gespeichert. Nichts wird irgendwohin gesendet.\nWenn Sie das Smartphone wechseln, tippen Sie in den „Einstellungen“ auf „Exportieren“, um eine Datei zu speichern, und dann auf dem neuen Smartphone auf „Importieren“.\nWenn Sie den Bildschirm schnell wechseln möchten, tippen Sie oben auf „× Schließen“. Dann öffnet sich eine Seite von Google.",
      "In den „Einstellungen“ können Sie die „Schriftgröße“ (Normal, Groß, Sehr groß) und die „Farbe“ (Grün, Hellblau, Weiß, Schwarz) ändern.\n„Musik“ und „Tippton“ lassen sich dort ebenfalls ändern.\nDie Sprache wählen Sie oben bei „Language“."
    ]
  }
});
/* ---- /de ---- */
/* ---- fr: 翻訳 ---- */
TBL.fr = mergeDeep(JSON.parse(JSON.stringify(en)), {
  "app": {
    "name": "Un par un - SOYOGI",
    "short": "Un par un",
    "tagline": "Revenir à l'instant présent, avec les étapes que vous avez décidées quand vous alliez bien.",
    "exit": "× Fermer"
  },
  "nav": {
    "home": "Accueil",
    "set": "Réglages",
    "edit": "Écrire"
  },
  "common": {
    "ok": "OK",
    "cancel": "Annuler",
    "save": "Enregistrer",
    "del": "Supprimer",
    "back": "Retour",
    "close": "Fermer",
    "yes": "Oui",
    "no": "Non",
    "add": "Ajouter",
    "edit": "Modifier",
    "next": "Suivant",
    "prev": "Précédent",
    "done": "Terminé",
    "saved": "Enregistré ✓",
    "saveFail": "Impossible d'enregistrer",
    "storageFull": "Espace plein, impossible d'enregistrer",
    "deleted": "Supprimé",
    "delConfirm": "Voulez-vous vraiment supprimer ?",
    "empty": "Rien pour l'instant",
    "optional": "Il n'est pas nécessaire de tout remplir.",
    "today": "Aujourd'hui",
    "backConfirm": "Ce que vous avez écrit n'est pas encore enregistré. Voulez-vous l'abandonner et revenir en arrière ?",
    "photo": {
      "camera": "Prendre une photo",
      "roll": "Choisir dans les photos",
      "cropTitle": "Recadrer la photo",
      "cropHint": "Déplacez avec le doigt ou avec les flèches, puis réglez la taille avec le curseur.",
      "zoom": "Taille",
      "panUp": "Haut",
      "panDown": "Bas",
      "panLeft": "Gauche",
      "panRight": "Droite",
      "make": "Valider",
      "fail": "Impossible de charger la photo"
    }
  },
  "set": {
    "hNormal": "Réglages du quotidien",
    "hBackup": "Changement de téléphone (sauvegarde)",
    "fs": "Taille du texte",
    "fsSizes": [
      "Normale",
      "Grande",
      "Très grande"
    ],
    "lang": "ことば / Language",
    "theme": "Couleur",
    "themes": [
      "Vert",
      "Bleu clair",
      "Blanc",
      "Noir"
    ],
    "bgm": "Musique",
    "bgms": [
      "Aucune",
      "Ambiance verte",
      "Ambiance bleue"
    ],
    "sound": "Son des touches",
    "on": "ON",
    "off": "OFF",
    "bkHint": "Pour passer à un nouveau téléphone, appuyez sur \"Exporter\" pour enregistrer un fichier, puis appuyez sur \"Importer\" sur le nouveau téléphone.",
    "bkExport": "Exporter",
    "bkImport": "Importer",
    "exported": "Exporté ✓",
    "imported": "Importé ✓",
    "importFail": "Impossible d'importer",
    "importConfirm": "Vos contenus actuels seront remplacés par le contenu du fichier. Voulez-vous importer ?",
    "note": "Tout ce que vous écrivez reste uniquement sur cet appareil. Rien n'est envoyé nulle part.",
    "privacy": "Politique de confidentialité",
    "credit": "Application développée par SOYOGI, lieu de conseil pour les soins et le soutien"
  },
  "screen": {
    "home": {
      "title": "Un par un",
      "btnNow": "Revenir ici et maintenant",
      "btnPlan": "Mon plan pour les moments difficiles",
      "sos": {
        "call119": "119 Ambulance",
        "call110": "110 Police",
        "call": "Appeler"
      },
      "agree": {
        "title": "Avant de commencer",
        "body1": "Cette application est un outil qui montre, dans les moments difficiles, un écran à la fois, les étapes que vous avez décidées vous-même quand vous alliez bien.",
        "body2": "Elle ne remplace pas les soins médicaux.",
        "body3": "En cas de danger, contactez le 119 (ambulance) ou le 110 (police) au Japon, ou un numéro d'aide.",
        "body4": "Pour écrire vos étapes, appuyez 5 fois de suite sur le nom de l'application, tout en haut.",
        "ok": "J'ai compris"
      },
      "player": {
        "nowTitle": "Revenir ici et maintenant",
        "planTitle": "Mon plan pour les moments difficiles",
        "today": "Aujourd'hui",
        "place": "Là où je suis",
        "words": "Mes mots pour moi-même",
        "calm": "Respiration qui m'aide et choses à toucher",
        "signs": "Mes signaux d'alerte",
        "yellow": "Quand le feu est orange",
        "yellowRest": "Comment je me repose",
        "yellowStep": "Un petit pas",
        "contacts": "Personnes que je peux contacter",
        "windows": "Numéros d'aide",
        "end": "C'est tout.",
        "empty": "Aucune étape n'a encore été écrite.",
        "pageOf": "{n} / {m}"
      }
    },
    "edit": {
      "title": "Espace d'écriture",
      "hint": "Cet espace s'ouvre seulement quand vous appuyez 5 fois sur le nom de l'application. Il se ferme quand vous quittez l'application (ce que vous avez écrit reste).",
      "close": "Fermer",
      "back": "Retour",
      "sections": {
        "place": "Là où je suis",
        "words": "Mes mots pour moi-même",
        "calm": "Respiration qui m'aide et choses à toucher",
        "signs": "Mes signaux d'alerte",
        "contacts": "Personnes que je peux contacter",
        "windows": "Numéros d'aide",
        "steps": "Étapes de \"Revenir ici et maintenant\"",
        "plan": "Étapes de \"Mon plan pour les moments difficiles\"",
        "yellow": "Quand le feu est orange"
      },
      "hints": {
        "place": "L'endroit où vous vivez en ce moment. Des mots pour vous rappeler \"où je suis\" dans un moment difficile.",
        "words": "De vous, quand vous allez bien, à vous, dans un moment difficile.",
        "calm": "La respiration qui vous aide et les choses qui vous apaisent quand vous les touchez, avec vos propres mots.",
        "signs": "Les signes que vous avez décidés vous-même comme \"là, ça devient dangereux\".",
        "contacts": "Nom et numéro de téléphone. Il n'est pas nécessaire de tout remplir.",
        "windows": "Le 119 (ambulance) et le 110 (police) du Japon sont toujours affichés. Ajoutez vous-même les autres numéros d'aide.",
        "steps": "Une étape par ligne. Elles s'affichent dans l'ordre, en partant du haut.",
        "plan": "Une étape par ligne. Elles s'affichent après \"Quand le feu est orange\".",
        "yellow": "Ce n'est pas encore dangereux, mais la fatigue est là. Comment vous vous reposez, et un seul petit pas."
      },
      "name": "Nom",
      "tel": "Numéro de téléphone",
      "addRow": "Ajouter",
      "del": "Supprimer",
      "delAgain": "Appuyez encore pour supprimer",
      "stepPh": "Une étape en une ligne",
      "addStep": "Ajouter une étape",
      "up": "Monter",
      "down": "Descendre",
      "yellowRest": "Comment je me repose (avec mes propres mots)",
      "yellowStep": "Un petit pas (un seul)",
      "textPh": "Écrivez ici",
      "saved": "Enregistré ✓"
    }
  },
  "guide": {
    "title": "Mode d'emploi",
    "step": "{n} / {m}",
    "start": "Commencer",
    "again": "Revoir",
    "heads": [
      "Bienvenue dans Un par un - SOYOGI",
      "Ouvrir l'espace d'écriture",
      "L'espace d'écriture",
      "Écrire vos étapes",
      "Dans un moment difficile, les boutons de l'accueil",
      "Les boutons d'appel",
      "Ce que vous écrivez reste sur cet appareil",
      "Rendre l'affichage plus lisible"
    ],
    "bodies": [
      "Cette application est un outil qui montre, dans les moments difficiles, un écran à la fois, les étapes que vous avez décidées vous-même quand vous alliez bien.\nElle ne remplace pas les soins médicaux.\nEn cas de danger, contactez le 119 (ambulance) ou le 110 (police) au Japon, ou un numéro d'aide.",
      "Écrivez vos étapes quand vous allez bien.\nAppuyez 5 fois de suite sur le nom de l'application, tout en haut, et l'\"Espace d'écriture\" s'ouvre.\nAucun bouton ne mène à cet espace. Ce guide ne s'affiche plus une fois lu jusqu'au bout, alors retenez bien comment l'ouvrir.",
      "Cet espace contient 9 rubriques, par exemple \"Là où je suis\" et \"Mes mots pour moi-même\".\nAppuyez sur une rubrique et écrivez. Tout est enregistré au fur et à mesure. Il n'est pas nécessaire de tout remplir.\n\"Terminé\" vous ramène à la liste. L'espace se ferme quand vous appuyez sur \"Fermer\" ou quand vous quittez l'application.",
      "Écrivez les étapes de \"Revenir ici et maintenant\" et de \"Mon plan pour les moments difficiles\", une par ligne.\nAvec \"＋ Ajouter une étape\", vous ajoutez une ligne, et avec ↑ ↓ vous changez l'ordre.\nDans \"Numéros d'aide\", écrivez le nom et le numéro de téléphone des services d'aide.",
      "L'accueil a deux boutons, \"Revenir ici et maintenant\" et \"Mon plan pour les moments difficiles\".\nQuand vous appuyez dessus, ce que vous avez écrit dans l'espace s'affiche un écran à la fois.\nAvancez avec \"Suivant\" et \"Précédent\", puis revenez à l'accueil avec \"Fermer\".",
      "En cas de danger, vous pouvez appeler tout de suite.\nAppuyez sur \"119 Ambulance\" ou \"110 Police\" en bas de l'écran, et l'application Téléphone s'ouvre avec ce numéro.\nLes numéros écrits dans \"Numéros d'aide\" s'y affichent aussi. Quand vos étapes sont affichées, ces boutons sont en haut.",
      "Tout ce que vous écrivez reste uniquement sur cet appareil. Rien n'est envoyé nulle part.\nPour passer à un nouveau téléphone, appuyez sur \"Exporter\" dans \"Réglages\" pour enregistrer un fichier, puis sur \"Importer\" sur le nouveau téléphone.\nPour changer vite d'écran, appuyez sur \"× Fermer\" en haut. Une page de Google s'ouvre.",
      "Dans \"Réglages\", vous pouvez changer la \"Taille du texte\" (Normale, Grande, Très grande) et la \"Couleur\" (Vert, Bleu clair, Blanc, Noir).\nVous pouvez aussi y changer la \"Musique\" et le \"Son des touches\".\nChoisissez la langue avec \"Language\", tout en haut."
    ]
  }
});
/* ---- /fr ---- */
/* ---- es: 翻訳 ---- */
TBL.es = mergeDeep(JSON.parse(JSON.stringify(en)), {
  "app": {
    "name": "Uno a uno - SOYOGI",
    "short": "Uno a uno",
    "tagline": "Volver al ahora, con los pasos decididos en un momento de calma.",
    "exit": "× Cerrar"
  },
  "nav": {
    "home": "Inicio",
    "set": "Ajustes",
    "edit": "Registro"
  },
  "common": {
    "ok": "OK",
    "cancel": "Cancelar",
    "save": "Guardar",
    "del": "Borrar",
    "back": "Volver",
    "close": "Cerrar",
    "yes": "Sí",
    "no": "No",
    "add": "Añadir",
    "edit": "Editar",
    "next": "Siguiente",
    "prev": "Anterior",
    "done": "Listo",
    "saved": "Guardado ✓",
    "saveFail": "No se pudo guardar",
    "storageFull": "No hay espacio, no se pudo guardar",
    "deleted": "Borrado",
    "delConfirm": "¿Borrar de verdad?",
    "empty": "Todavía no hay nada",
    "optional": "No hace falta escribir todo.",
    "today": "Hoy",
    "backConfirm": "Lo escrito todavía no está guardado. ¿Descartarlo y volver?",
    "photo": {
      "camera": "Tomar una foto",
      "roll": "Elegir de las fotos",
      "cropTitle": "Recortar la foto",
      "cropHint": "Mover con el dedo o con las flechas, y cambiar el tamaño con el control deslizante.",
      "zoom": "Tamaño",
      "panUp": "Arriba",
      "panDown": "Abajo",
      "panLeft": "Izquierda",
      "panRight": "Derecha",
      "make": "Usar esta",
      "fail": "No se pudo cargar la foto"
    }
  },
  "set": {
    "hNormal": "Ajustes habituales",
    "hBackup": "Cambio de teléfono (copia de seguridad)",
    "fs": "Tamaño de la letra",
    "fsSizes": [
      "Normal",
      "Grande",
      "Muy grande"
    ],
    "lang": "ことば / Language",
    "theme": "Color",
    "themes": [
      "Verde",
      "Azul claro",
      "Blanco",
      "Negro"
    ],
    "bgm": "Música",
    "bgms": [
      "Ninguna",
      "Tono verde",
      "Tono azul"
    ],
    "sound": "Sonido al tocar",
    "on": "ON",
    "off": "OFF",
    "bkHint": "Al cambiar a un teléfono nuevo, tocar «Exportar» para guardar un archivo y, en el teléfono nuevo, tocar «Importar».",
    "bkExport": "Exportar",
    "bkImport": "Importar",
    "exported": "Exportado ✓",
    "imported": "Importado ✓",
    "importFail": "No se pudo importar",
    "importConfirm": "Lo escrito ahora se reemplazará por el contenido del archivo. ¿Importar?",
    "note": "Todo lo escrito se guarda solo en este dispositivo. No se envía a ninguna parte.",
    "privacy": "Política de privacidad",
    "credit": "Desarrollo de la aplicación: SOYOGI, espacio de consulta sobre cuidados y apoyo"
  },
  "screen": {
    "home": {
      "title": "Uno a uno",
      "btnNow": "Volver al aquí y ahora",
      "btnPlan": "Plan para los momentos de peligro",
      "sos": {
        "call119": "119 Ambulancia",
        "call110": "110 Policía",
        "call": "Llamar"
      },
      "agree": {
        "title": "Antes de empezar",
        "body1": "Esta aplicación es una herramienta que muestra, en los momentos difíciles, una pantalla a la vez, los pasos que la propia persona decidió cuando se sentía bien.",
        "body2": "No sustituye a la atención médica.",
        "body3": "En caso de peligro, llamar al 119 (ambulancia, Japón), al 110 (policía, Japón) o a una línea de ayuda.",
        "body4": "Para registrar los pasos, tocar 5 veces seguidas el nombre de la aplicación, arriba del todo.",
        "ok": "Entendido"
      },
      "player": {
        "nowTitle": "Volver al aquí y ahora",
        "planTitle": "Plan para los momentos de peligro",
        "today": "Hoy es",
        "place": "El lugar donde estoy ahora:",
        "words": "Palabras para mí",
        "calm": "Respiración que ayuda y cosas para tocar",
        "signs": "Señales de peligro",
        "yellow": "Cuando el semáforo está en amarillo",
        "yellowRest": "Cómo descansar",
        "yellowStep": "Un pequeño paso",
        "contacts": "Personas a las que puedo contactar",
        "windows": "Líneas de ayuda",
        "end": "Esto es todo.",
        "empty": "Todavía no hay pasos.",
        "pageOf": "{n} / {m}"
      }
    },
    "edit": {
      "title": "Sala de registro",
      "hint": "Esta sala se abre solo al tocar 5 veces el nombre de la aplicación. Al salir de la aplicación se cierra (lo escrito se conserva).",
      "close": "Cerrar",
      "back": "Volver",
      "sections": {
        "place": "El lugar donde estoy ahora",
        "words": "Palabras para mí",
        "calm": "Respiración que ayuda y cosas para tocar",
        "signs": "Señales de peligro",
        "contacts": "Personas a las que puedo contactar",
        "windows": "Líneas de ayuda",
        "steps": "Pasos de «Volver al aquí y ahora»",
        "plan": "Pasos de «Plan para los momentos de peligro»",
        "yellow": "Cuando el semáforo está en amarillo"
      },
      "hints": {
        "place": "El lugar donde se vive ahora. Palabras para recordar «dónde estoy» en un momento difícil.",
        "words": "Del yo de los momentos de calma, al yo de los momentos difíciles.",
        "calm": "La forma de respirar que ayuda y las cosas que calman al tocarlas, con palabras propias.",
        "signs": "Las señales que uno mismo decidió que significan «si pasa esto, es peligroso».",
        "contacts": "Nombre y número de teléfono. No hace falta escribir todo.",
        "windows": "El 119 (ambulancia) y el 110 (policía), números de emergencia de Japón, aparecen siempre. Las demás líneas de ayuda se añaden a mano.",
        "steps": "Un paso por línea. Se muestran en orden, desde arriba.",
        "plan": "Un paso por línea. Se muestran después de «Cuando el semáforo está en amarillo».",
        "yellow": "Cuando todavía no hay peligro, pero sí cansancio. Una forma de descansar y un solo pequeño paso."
      },
      "name": "Nombre",
      "tel": "Número de teléfono",
      "addRow": "Añadir",
      "del": "Borrar",
      "delAgain": "Tocar otra vez para borrar",
      "stepPh": "Un paso en una línea",
      "addStep": "Añadir un paso",
      "up": "Arriba",
      "down": "Abajo",
      "yellowRest": "Cómo descansar (con palabras propias)",
      "yellowStep": "Un pequeño paso (solo uno)",
      "textPh": "Escribir aquí",
      "saved": "Guardado ✓"
    }
  },
  "guide": {
    "title": "Cómo se usa",
    "step": "{n} / {m}",
    "start": "Empezar",
    "again": "Ver de nuevo",
    "heads": [
      "Qué es Uno a uno - SOYOGI",
      "Cómo abrir la sala de registro",
      "La sala de registro",
      "Escribir los pasos",
      "En un momento difícil, los botones de Inicio",
      "Botones para llamar",
      "Lo escrito se queda en este dispositivo",
      "Para ver mejor"
    ],
    "bodies": [
      "Esta aplicación es una herramienta que muestra, en los momentos difíciles, una pantalla a la vez, los pasos que la propia persona decidió cuando se sentía bien.\nNo sustituye a la atención médica.\nEn caso de peligro, llamar al 119 (ambulancia, Japón), al 110 (policía, Japón) o a una línea de ayuda.",
      "Los pasos se escriben en un momento en que uno se siente bien.\nAl tocar 5 veces seguidas el nombre de la aplicación, arriba del todo, se abre la «Sala de registro».\nNo hay ningún botón para entrar en la sala. Esta guía no vuelve a aparecer una vez leída hasta el final, así que conviene recordar cómo se abre.",
      "La sala tiene 9 apartados, por ejemplo «El lugar donde estoy ahora» y «Palabras para mí».\nAl tocar un apartado y escribir, lo escrito se guarda al momento. No hace falta rellenarlo todo.\n«Listo» vuelve a la lista de apartados. La sala se cierra al tocar «Cerrar» o al salir de la aplicación.",
      "Los pasos de «Volver al aquí y ahora» y del «Plan para los momentos de peligro» se escriben uno por línea.\nCon «＋ Añadir un paso» se añade una línea, y con ↑ ↓ se cambia el orden.\nEn «Líneas de ayuda» se escriben el nombre y el teléfono de los servicios de ayuda.",
      "En Inicio hay dos botones, «Volver al aquí y ahora» y «Plan para los momentos de peligro».\nAl tocarlos, lo escrito en la sala aparece una pantalla a la vez.\nSe avanza con «Siguiente» y «Anterior», y con «Cerrar» se vuelve a Inicio.",
      "En caso de peligro, se puede llamar enseguida.\nAl tocar «119 Ambulancia» o «110 Policía», abajo en la pantalla, se abre la aplicación de teléfono con ese número.\nLas líneas escritas en «Líneas de ayuda» también aparecen ahí. Mientras se muestran los pasos, estos botones están arriba.",
      "Todo lo escrito se guarda solo en este dispositivo. No se envía a ninguna parte.\nAl cambiar a un teléfono nuevo, tocar «Exportar» en «Ajustes» para guardar un archivo y, en el teléfono nuevo, tocar «Importar».\nPara cambiar la pantalla enseguida, tocar «× Cerrar» arriba. Se abre una página de Google.",
      "En «Ajustes» se pueden cambiar el «Tamaño de la letra» (Normal, Grande, Muy grande) y el «Color» (Verde, Azul claro, Blanco, Negro).\nAhí también se pueden cambiar la «Música» y el «Sonido al tocar».\nEl idioma se elige arriba, en «Language»."
    ]
  }
});
/* ---- /es ---- */
/* ---- it: 翻訳 ---- */
TBL.it = mergeDeep(JSON.parse(JSON.stringify(en)), {
  "app": {
    "name": "Uno alla volta - SOYOGI",
    "short": "Uno alla volta",
    "tagline": "Tornare al qui e ora, con i passi decisi quando stava bene.",
    "exit": "× Chiudi"
  },
  "nav": {
    "home": "Home",
    "set": "Impostazioni",
    "edit": "Registra"
  },
  "common": {
    "ok": "OK",
    "cancel": "Annulla",
    "save": "Salva",
    "del": "Elimina",
    "back": "Indietro",
    "close": "Chiudi",
    "yes": "Sì",
    "no": "No",
    "add": "Aggiungi",
    "edit": "Modifica",
    "next": "Avanti",
    "prev": "Precedente",
    "done": "Fatto",
    "saved": "Salvato ✓",
    "saveFail": "Non è stato possibile salvare",
    "storageFull": "La memoria è piena: non è stato possibile salvare",
    "deleted": "Eliminato",
    "delConfirm": "Eliminare davvero?",
    "empty": "Non c'è ancora niente",
    "optional": "Non è necessario compilare tutto.",
    "today": "Oggi",
    "backConfirm": "Quanto scritto non è ancora salvato. Scartarlo e tornare indietro?",
    "photo": {
      "camera": "Scatta una foto",
      "roll": "Scegli dalle foto",
      "cropTitle": "Ritaglia la foto",
      "cropHint": "Sposti la foto con il dito o con le frecce, poi regoli la dimensione con il cursore.",
      "zoom": "Dimensione",
      "panUp": "Su",
      "panDown": "Giù",
      "panLeft": "Sinistra",
      "panRight": "Destra",
      "make": "Usa questa",
      "fail": "Non è stato possibile caricare la foto"
    }
  },
  "set": {
    "hNormal": "Impostazioni di ogni giorno",
    "hBackup": "Cambio di telefono (backup)",
    "fs": "Dimensione del testo",
    "fsSizes": [
      "Normale",
      "Grande",
      "Molto grande"
    ],
    "lang": "ことば / Language",
    "theme": "Colore",
    "themes": [
      "Verde",
      "Azzurro",
      "Bianco",
      "Nero"
    ],
    "bgm": "Musica",
    "bgms": [
      "Nessuna",
      "Suono verde",
      "Suono blu"
    ],
    "sound": "Suono al tocco",
    "on": "ON",
    "off": "OFF",
    "bkHint": "Quando passa a un nuovo telefono, tocchi \"Esporta\" per salvare un file, poi tocchi \"Importa\" sul nuovo telefono.",
    "bkExport": "Esporta",
    "bkImport": "Importa",
    "exported": "Esportato ✓",
    "imported": "Importato ✓",
    "importFail": "Non è stato possibile importare",
    "importConfirm": "I contenuti attuali verranno sostituiti da quelli del file. Importare?",
    "note": "Tutto ciò che scrive resta solo in questo dispositivo. Non viene inviato da nessuna parte.",
    "privacy": "Informativa sulla privacy",
    "credit": "App sviluppata da SOYOGI, sportello di consulenza per l'assistenza e il sostegno"
  },
  "screen": {
    "home": {
      "title": "Uno alla volta",
      "btnNow": "Tornare al qui e ora",
      "btnPlan": "Piano per i momenti difficili",
      "sos": {
        "call119": "119 Ambulanza",
        "call110": "110 Polizia",
        "call": "Chiama"
      },
      "agree": {
        "title": "Prima di iniziare",
        "body1": "Questa app è uno strumento che mostra, nei momenti difficili e una schermata alla volta, i passi che ha deciso da sé quando stava bene.",
        "body2": "Non sostituisce le cure mediche.",
        "body3": "In caso di pericolo, contatti il 119 (ambulanza) o il 110 (polizia), numeri del Giappone, oppure uno sportello di aiuto.",
        "body4": "Per registrare i passi, tocchi 5 volte di seguito il nome dell'app in alto.",
        "ok": "Ho capito"
      },
      "player": {
        "nowTitle": "Tornare al qui e ora",
        "planTitle": "Piano per i momenti difficili",
        "today": "Oggi è",
        "place": "Il luogo in cui si trova ora:",
        "words": "Parole per sé",
        "calm": "Respiro che aiuta e cose da toccare",
        "signs": "Segnali di pericolo",
        "yellow": "Quando il semaforo è giallo",
        "yellowRest": "Come riposare",
        "yellowStep": "Un piccolo passo",
        "contacts": "Persone da contattare",
        "windows": "Sportelli di aiuto",
        "end": "È tutto qui.",
        "empty": "Non ci sono ancora passi.",
        "pageOf": "{n} / {m}"
      }
    },
    "edit": {
      "title": "Stanza di registrazione",
      "hint": "Questa stanza si apre solo toccando 5 volte il nome dell'app. Se esce dall'app, si chiude (ciò che ha scritto resta).",
      "close": "Chiudi",
      "back": "Indietro",
      "sections": {
        "place": "Il luogo in cui si trova ora",
        "words": "Parole per sé",
        "calm": "Respiro che aiuta e cose da toccare",
        "signs": "Segnali di pericolo",
        "contacts": "Persone da contattare",
        "windows": "Sportelli di aiuto",
        "steps": "Passi di \"Tornare al qui e ora\"",
        "plan": "Passi del \"Piano per i momenti difficili\"",
        "yellow": "Quando il semaforo è giallo"
      },
      "hints": {
        "place": "Il luogo in cui vive adesso. Parole per ricordare \"dove sono\" in un momento difficile.",
        "words": "Da Lei, quando sta bene, a Lei, nei momenti difficili.",
        "calm": "Il modo di respirare che funziona per Lei e le cose che La calmano quando le tocca, con parole Sue.",
        "signs": "I segnali che ha deciso Lei: \"se succede questo, è pericoloso\".",
        "contacts": "Nome e numero di telefono. Non è necessario compilare tutto.",
        "windows": "Il 119 (ambulanza) e il 110 (polizia), numeri del Giappone, compaiono sempre. Aggiunga da sé gli altri sportelli.",
        "steps": "Un passo per riga. Compaiono in ordine, dall'alto.",
        "plan": "Un passo per riga. Compaiono dopo \"Quando il semaforo è giallo\".",
        "yellow": "Non è ancora pericolo, ma c'è stanchezza. Come riposare e un solo piccolo passo."
      },
      "name": "Nome",
      "tel": "Numero di telefono",
      "addRow": "Aggiungi",
      "del": "Elimina",
      "delAgain": "Tocchi di nuovo per eliminare",
      "stepPh": "Un passo per riga",
      "addStep": "Aggiungi un passo",
      "up": "Su",
      "down": "Giù",
      "yellowRest": "Come riposare (con parole Sue)",
      "yellowStep": "Un piccolo passo (uno solo)",
      "textPh": "Scriva qui",
      "saved": "Salvato ✓"
    }
  },
  "guide": {
    "title": "Come si usa",
    "step": "{n} / {m}",
    "start": "Inizia",
    "again": "Rivedi",
    "heads": [
      "Che cos'è Uno alla volta - SOYOGI",
      "Come aprire la stanza di registrazione",
      "La stanza di registrazione",
      "Scrivere i passi",
      "Nei momenti difficili, i pulsanti della Home",
      "I pulsanti per chiamare",
      "Ciò che scrive resta in questo dispositivo",
      "Per vedere meglio"
    ],
    "bodies": [
      "Questa app è uno strumento che mostra, nei momenti difficili e una schermata alla volta, i passi che ha deciso da sé quando stava bene.\nNon sostituisce le cure mediche.\nIn caso di pericolo, contatti il 119 (ambulanza) o il 110 (polizia), numeri del Giappone, oppure uno sportello di aiuto.",
      "I passi si scrivono quando si sta bene.\nToccando 5 volte di seguito il nome dell'app in alto, si apre la \"Stanza di registrazione\".\nNon c'è nessun pulsante per entrare nella stanza. Questa guida non compare più dopo averla letta fino in fondo, quindi ricordi come si apre.",
      "La stanza ha 9 voci, per esempio \"Il luogo in cui si trova ora\" e \"Parole per sé\".\nTocchi una voce e scriva. Ciò che scrive si salva subito. Non serve compilare tutto.\n\"Fatto\" riporta all'elenco delle voci. La stanza si chiude toccando \"Chiudi\" o uscendo dall'app.",
      "Scriva i passi di \"Tornare al qui e ora\" e del \"Piano per i momenti difficili\" uno per riga.\nCon \"＋ Aggiungi un passo\" aggiunge una riga, con ↑ ↓ cambia l'ordine.\nIn \"Sportelli di aiuto\" scriva il nome e il numero di telefono degli sportelli.",
      "Nella Home ci sono due pulsanti, \"Tornare al qui e ora\" e \"Piano per i momenti difficili\".\nToccandoli, ciò che ha scritto nella stanza compare una schermata alla volta.\nSi va avanti con \"Avanti\" e \"Precedente\", e con \"Chiudi\" si torna alla Home.",
      "In caso di pericolo, può chiamare subito.\nToccando \"119 Ambulanza\" o \"110 Polizia\" in basso, si apre l'app del telefono con quel numero.\nAnche gli sportelli scritti in \"Sportelli di aiuto\" compaiono lì. Mentre i passi sono mostrati, questi pulsanti sono in alto.",
      "Tutto ciò che scrive resta solo in questo dispositivo. Non viene inviato da nessuna parte.\nQuando passa a un nuovo telefono, tocchi \"Esporta\" in \"Impostazioni\" per salvare un file, poi tocchi \"Importa\" sul nuovo telefono.\nPer cambiare subito schermata, tocchi \"× Chiudi\" in alto. Si apre una pagina di Google.",
      "In \"Impostazioni\" può cambiare la \"Dimensione del testo\" (Normale, Grande, Molto grande) e il \"Colore\" (Verde, Azzurro, Bianco, Nero).\nLì può cambiare anche \"Musica\" e \"Suono al tocco\".\nLa lingua si sceglie in alto, in \"Language\"."
    ]
  }
});
/* ---- /it ---- */
/* ---- pt: 翻訳 ---- */
TBL.pt = mergeDeep(JSON.parse(JSON.stringify(en)), {
  "app": {
    "name": "Um de cada vez - SOYOGI",
    "short": "Um de cada vez",
    "tagline": "Voltar ao agora, com os passos decididos quando estava bem.",
    "exit": "× Fechar"
  },
  "nav": {
    "home": "Início",
    "set": "Ajustes",
    "edit": "Escrever"
  },
  "common": {
    "ok": "OK",
    "cancel": "Cancelar",
    "save": "Guardar",
    "del": "Apagar",
    "back": "Voltar",
    "close": "Fechar",
    "yes": "Sim",
    "no": "Não",
    "add": "Adicionar",
    "edit": "Editar",
    "next": "Avançar",
    "prev": "Anterior",
    "done": "Feito",
    "saved": "Guardado ✓",
    "saveFail": "Não foi possível guardar",
    "storageFull": "Sem espaço, não foi possível guardar",
    "deleted": "Apagado",
    "delConfirm": "Apagar mesmo?",
    "empty": "Ainda não há nada",
    "optional": "Não é preciso escrever tudo.",
    "today": "Hoje",
    "backConfirm": "O que foi escrito ainda não foi guardado. Descartar e voltar?",
    "photo": {
      "camera": "Tirar uma foto",
      "roll": "Escolher das fotos",
      "cropTitle": "Recortar a foto",
      "cropHint": "Mover com o dedo ou com as setas e mudar o tamanho com a barra deslizante.",
      "zoom": "Tamanho",
      "panUp": "Para cima",
      "panDown": "Para baixo",
      "panLeft": "À esquerda",
      "panRight": "À direita",
      "make": "Usar esta",
      "fail": "Não foi possível abrir a foto"
    }
  },
  "set": {
    "hNormal": "Ajustes do dia a dia",
    "hBackup": "Mudar de telefone (cópia de segurança)",
    "fs": "Tamanho do texto",
    "fsSizes": [
      "Normal",
      "Grande",
      "Muito grande"
    ],
    "lang": "ことば / Language",
    "theme": "Cor",
    "themes": [
      "Verde",
      "Azul-claro",
      "Branco",
      "Preto"
    ],
    "bgm": "Música",
    "bgms": [
      "Nenhuma",
      "Som verde",
      "Som azul"
    ],
    "sound": "Som ao tocar",
    "on": "ON",
    "off": "OFF",
    "bkHint": "Ao mudar para um telefone novo, tocar em \"Exportar\" para guardar uma cópia e, no telefone novo, tocar em \"Importar\".",
    "bkExport": "Exportar",
    "bkImport": "Importar",
    "exported": "Exportado ✓",
    "imported": "Importado ✓",
    "importFail": "Não foi possível importar",
    "importConfirm": "O conteúdo atual será substituído pelo conteúdo da cópia. Importar?",
    "note": "Tudo o que for escrito fica guardado apenas neste aparelho. Nada é enviado para fora.",
    "privacy": "Política de privacidade",
    "credit": "Desenvolvido por SOYOGI, espaço de aconselhamento sobre cuidados e apoio"
  },
  "screen": {
    "home": {
      "title": "Um de cada vez",
      "btnNow": "Voltar ao aqui e agora",
      "btnPlan": "Plano para os momentos difíceis",
      "sos": {
        "call119": "119 Ambulância",
        "call110": "110 Polícia",
        "call": "Ligar"
      },
      "agree": {
        "title": "Antes de começar",
        "body1": "Nos momentos difíceis, esta ferramenta mostra, um de cada vez, os passos decididos pela própria pessoa quando estava bem.",
        "body2": "Não substitui os cuidados médicos.",
        "body3": "Em caso de perigo, ligar para o 119 (ambulância), para o 110 (polícia) ou para uma linha de apoio. O 119 e o 110 são números do Japão.",
        "body4": "Para escrever os passos, tocar 5 vezes seguidas no nome que aparece no topo.",
        "ok": "Entendido"
      },
      "player": {
        "nowTitle": "Voltar ao aqui e agora",
        "planTitle": "Plano para os momentos difíceis",
        "today": "Hoje é",
        "place": "O lugar onde estou",
        "words": "Palavras para mim",
        "calm": "Respiração que ajuda e coisas para tocar",
        "signs": "Sinais de alerta",
        "yellow": "Quando a luz está amarela",
        "yellowRest": "Como descansar",
        "yellowStep": "Um pequeno passo",
        "contacts": "Pessoas a quem posso ligar",
        "windows": "Linhas de apoio",
        "end": "Termina aqui.",
        "empty": "Ainda não há passos escritos.",
        "pageOf": "{n} / {m}"
      }
    },
    "edit": {
      "title": "Sala de escrita",
      "hint": "Esta sala abre apenas ao tocar 5 vezes no nome que aparece no topo. Ao sair da aplicação, fecha (o que foi escrito fica guardado).",
      "close": "Fechar",
      "back": "Voltar",
      "sections": {
        "place": "O lugar onde estou",
        "words": "Palavras para mim",
        "calm": "Respiração que ajuda e coisas para tocar",
        "signs": "Sinais de alerta",
        "contacts": "Pessoas a quem posso ligar",
        "windows": "Linhas de apoio",
        "steps": "Passos de \"Voltar ao aqui e agora\"",
        "plan": "Passos de \"Plano para os momentos difíceis\"",
        "yellow": "Quando a luz está amarela"
      },
      "hints": {
        "place": "O lugar onde vive agora. Palavras para lembrar \"onde estou\" nos momentos difíceis.",
        "words": "Do eu que está bem, para o eu nos momentos difíceis.",
        "calm": "A forma de respirar que ajuda e as coisas que acalmam ao tocar, com as próprias palavras.",
        "signs": "Os sinais escolhidos pela própria pessoa:\"quando fico assim, é perigoso\".",
        "contacts": "Nome e número de telefone. Não é preciso escrever tudo.",
        "windows": "O 119 (ambulância) e o 110 (polícia), números de emergência do Japão, aparecem sempre. Outras linhas de apoio podem ser adicionadas.",
        "steps": "Um passo por linha. Aparecem um de cada vez, de cima para baixo.",
        "plan": "Um passo por linha. Aparecem depois de \"Quando a luz está amarela\".",
        "yellow": "Quando ainda não é perigoso, mas há cansaço. A forma de descansar e um pequeno passo, só um."
      },
      "name": "Nome",
      "tel": "Número de telefone",
      "addRow": "Adicionar",
      "del": "Apagar",
      "delAgain": "Tocar outra vez para apagar",
      "stepPh": "Um passo por linha",
      "addStep": "Adicionar um passo",
      "up": "Para cima",
      "down": "Para baixo",
      "yellowRest": "Como descansar (com as próprias palavras)",
      "yellowStep": "Um pequeno passo (só um)",
      "textPh": "Escrever aqui",
      "saved": "Guardado ✓"
    }
  },
  "guide": {
    "title": "Como usar",
    "step": "{n} / {m}",
    "start": "Começar",
    "again": "Ver de novo",
    "heads": [
      "O que é Um de cada vez - SOYOGI",
      "Como abrir a sala de escrita",
      "A sala de escrita",
      "Escrever os passos",
      "Nos momentos difíceis, os botões do Início",
      "Botões para ligar",
      "O que se escreve fica neste aparelho",
      "Para ver melhor"
    ],
    "bodies": [
      "Nos momentos difíceis, esta ferramenta mostra, um de cada vez, os passos decididos pela própria pessoa quando estava bem.\nNão substitui os cuidados médicos.\nEm caso de perigo, ligar para o 119 (ambulância), para o 110 (polícia) ou para uma linha de apoio. O 119 e o 110 são números do Japão.",
      "Os passos escrevem-se num momento em que se está bem.\nAo tocar 5 vezes seguidas no nome que aparece no topo, abre-se a \"Sala de escrita\".\nNão há nenhum botão para entrar na sala. Este guia não volta a aparecer depois de lido até ao fim, por isso convém lembrar como se abre.",
      "A sala tem 9 partes, por exemplo \"O lugar onde estou\" e \"Palavras para mim\".\nAo tocar numa parte e escrever, o que foi escrito fica logo guardado. Não é preciso preencher tudo.\n\"Feito\" volta à lista. A sala fecha ao tocar em \"Fechar\" ou ao sair da aplicação.",
      "Os passos de \"Voltar ao aqui e agora\" e do \"Plano para os momentos difíceis\" escrevem-se um por linha.\nCom \"＋ Adicionar um passo\" junta-se uma linha, e com ↑ ↓ muda-se a ordem.\nEm \"Linhas de apoio\" escrevem-se o nome e o número de telefone das linhas de apoio.",
      "No Início há dois botões, \"Voltar ao aqui e agora\" e \"Plano para os momentos difíceis\".\nAo tocar num deles, o que foi escrito na sala aparece um de cada vez.\nAvança-se com \"Avançar\" e \"Anterior\", e volta-se ao Início com \"Fechar\".",
      "Em caso de perigo, é possível ligar logo.\nAo tocar em \"119 Ambulância\" ou \"110 Polícia\", em baixo, abre-se a aplicação do telefone com esse número.\nAs linhas escritas em \"Linhas de apoio\" também aparecem aí. Enquanto os passos são mostrados, estes botões ficam no topo.",
      "Tudo o que for escrito fica guardado apenas neste aparelho. Nada é enviado para fora.\nAo mudar para um telefone novo, tocar em \"Exportar\" em \"Ajustes\" para guardar uma cópia e, no telefone novo, tocar em \"Importar\".\nPara mudar depressa de página, tocar em \"× Fechar\" no topo. Abre-se uma página do Google.",
      "Em \"Ajustes\" é possível mudar o \"Tamanho do texto\" (Normal, Grande, Muito grande) e a \"Cor\" (Verde, Azul-claro, Branco, Preto).\nTambém se pode mudar aí a \"Música\" e o \"Som ao tocar\".\nO idioma escolhe-se no topo, em \"Language\"."
    ]
  }
});
/* ---- /pt ---- */
/* ---- nl: 翻訳 ---- */
TBL.nl = mergeDeep(JSON.parse(JSON.stringify(en)), {
  "app": {
    "name": "Eén voor één - SOYOGI",
    "short": "Eén voor één",
    "tagline": "Terug naar nu, met de stappen die u koos toen het goed ging.",
    "exit": "× Sluiten"
  },
  "nav": {
    "home": "Home",
    "set": "Instellingen",
    "edit": "Invoeren"
  },
  "common": {
    "ok": "OK",
    "cancel": "Annuleren",
    "save": "Opslaan",
    "del": "Wissen",
    "back": "Terug",
    "close": "Sluiten",
    "yes": "Ja",
    "no": "Nee",
    "add": "Toevoegen",
    "edit": "Bewerken",
    "next": "Volgende",
    "prev": "Vorige",
    "done": "Klaar",
    "saved": "Opgeslagen ✓",
    "saveFail": "Opslaan is niet gelukt",
    "storageFull": "De opslag is vol, opslaan is niet gelukt",
    "deleted": "Gewist",
    "delConfirm": "Wilt u dit echt wissen?",
    "empty": "Nog niets hier",
    "optional": "U hoeft niet alles in te vullen.",
    "today": "Vandaag",
    "backConfirm": "Wat u hebt geschreven, is nog niet opgeslagen. Wilt u het weggooien en teruggaan?",
    "photo": {
      "camera": "Foto maken",
      "roll": "Kiezen uit foto's",
      "cropTitle": "Foto bijsnijden",
      "cropHint": "Schuif met uw vinger of gebruik de pijltjes, en verander de grootte met de schuifknop.",
      "zoom": "Grootte",
      "panUp": "Omhoog",
      "panDown": "Omlaag",
      "panLeft": "Links",
      "panRight": "Rechts",
      "make": "Deze gebruiken",
      "fail": "De foto kon niet worden geladen"
    }
  },
  "set": {
    "hNormal": "Gewone instellingen",
    "hBackup": "Nieuwe telefoon (back-up)",
    "fs": "Lettergrootte",
    "fsSizes": [
      "Normaal",
      "Groot",
      "Heel groot"
    ],
    "lang": "ことば / Language",
    "theme": "Kleur",
    "themes": [
      "Groen",
      "Lichtblauw",
      "Wit",
      "Zwart"
    ],
    "bgm": "Muziek",
    "bgms": [
      "Geen",
      "Groene klank",
      "Blauwe klank"
    ],
    "sound": "Tikgeluid",
    "on": "AAN",
    "off": "UIT",
    "bkHint": "Als u overstapt naar een nieuwe telefoon, tikt u op \"Exporteren\" om een bestand op te slaan. Tik daarna op de nieuwe telefoon op \"Importeren\".",
    "bkExport": "Exporteren",
    "bkImport": "Importeren",
    "exported": "Geëxporteerd ✓",
    "imported": "Geïmporteerd ✓",
    "importFail": "Importeren is niet gelukt",
    "importConfirm": "Wat u nu hebt, wordt vervangen door de inhoud van het bestand. Wilt u importeren?",
    "note": "Alles wat u schrijft, wordt alleen op dit apparaat bewaard. Er wordt niets verstuurd.",
    "privacy": "Privacybeleid",
    "credit": "App-ontwikkeling: SOYOGI, adviespunt voor zorg en ondersteuning"
  },
  "screen": {
    "home": {
      "title": "Eén voor één",
      "btnNow": "Terug naar het hier en nu",
      "btnPlan": "Plan voor gevaarlijke momenten",
      "sos": {
        "call119": "119 Ambulance",
        "call110": "110 Politie",
        "call": "Bellen"
      },
      "agree": {
        "title": "Om te beginnen",
        "body1": "Deze app laat in moeilijke momenten, scherm voor scherm, de stappen zien die u zelf hebt bepaald toen het goed met u ging.",
        "body2": "Het is geen vervanging van medische zorg.",
        "body3": "Als het gevaarlijk wordt, neem dan contact op met 119 (ambulance, Japan), 110 (politie, Japan) of een hulplijn.",
        "body4": "U opent het invoeren van stappen door 5 keer achter elkaar op de naam van de app bovenaan te tikken.",
        "ok": "Begrepen"
      },
      "player": {
        "nowTitle": "Terug naar het hier en nu",
        "planTitle": "Plan voor gevaarlijke momenten",
        "today": "Vandaag is het",
        "place": "Waar ik nu ben:",
        "words": "Woorden voor mezelf",
        "calm": "Ademhaling en dingen om aan te raken",
        "signs": "Mijn waarschuwingssignalen",
        "yellow": "Bij geel licht",
        "yellowRest": "Hoe ik uitrust",
        "yellowStep": "Eén kleine stap",
        "contacts": "Mensen die ik kan bereiken",
        "windows": "Hulplijnen",
        "end": "Dit was alles.",
        "empty": "Er zijn nog geen stappen ingevoerd.",
        "pageOf": "{n} / {m}"
      }
    },
    "edit": {
      "title": "Invoerruimte",
      "hint": "Deze ruimte opent alleen als u 5 keer op de naam van de app tikt. Als u de app verlaat, sluit hij (wat u schreef, blijft bewaard).",
      "close": "Sluiten",
      "back": "Terug",
      "sections": {
        "place": "Waar ik nu ben",
        "words": "Woorden voor mezelf",
        "calm": "Ademhaling en dingen om aan te raken",
        "signs": "Mijn waarschuwingssignalen",
        "contacts": "Mensen die ik kan bereiken",
        "windows": "Hulplijnen",
        "steps": "Stappen voor \"Terug naar het hier en nu\"",
        "plan": "Stappen voor \"Plan voor gevaarlijke momenten\"",
        "yellow": "Bij geel licht"
      },
      "hints": {
        "place": "De plek waar u nu woont. Woorden om in een moeilijk moment te onthouden \"waar ben ik\".",
        "words": "Van uzelf op een goed moment, aan uzelf op een moeilijk moment.",
        "calm": "De ademhaling die bij u past en de dingen die u rust geven als u ze aanraakt, in uw eigen woorden.",
        "signs": "De signalen waarvan u zelf hebt bepaald: \"als dit gebeurt, wordt het gevaarlijk\".",
        "contacts": "Naam en telefoonnummer. U hoeft niet alles in te vullen.",
        "windows": "119 (ambulance) en 110 (politie), de alarmnummers in Japan, staan er altijd bij. Andere hulplijnen kunt u zelf toevoegen.",
        "steps": "Eén stap per regel. Ze verschijnen op volgorde, van boven naar beneden.",
        "plan": "Eén stap per regel. Ze verschijnen na \"Bij geel licht\".",
        "yellow": "Nog niet gevaarlijk, maar wel moe. Hoe u uitrust, en maar één kleine stap."
      },
      "name": "Naam",
      "tel": "Telefoonnummer",
      "addRow": "Toevoegen",
      "del": "Wissen",
      "delAgain": "Tik nog een keer om te wissen",
      "stepPh": "Eén stap per regel",
      "addStep": "Stap toevoegen",
      "up": "Omhoog",
      "down": "Omlaag",
      "yellowRest": "Hoe ik uitrust (in mijn eigen woorden)",
      "yellowStep": "Eén kleine stap (maar één)",
      "textPh": "Schrijf hier",
      "saved": "Opgeslagen ✓"
    }
  },
  "guide": {
    "title": "Uitleg",
    "step": "{n} / {m}",
    "start": "Beginnen",
    "again": "Opnieuw bekijken",
    "heads": [
      "Welkom bij Eén voor één - SOYOGI",
      "De invoerruimte openen",
      "De invoerruimte",
      "Stappen schrijven",
      "In een moeilijk moment, de knoppen op Home",
      "Belknoppen",
      "Wat u schrijft, blijft op dit apparaat",
      "Beter leesbaar maken"
    ],
    "bodies": [
      "Deze app laat in moeilijke momenten, scherm voor scherm, de stappen zien die u zelf hebt bepaald toen het goed met u ging.\nHet is geen vervanging van medische zorg.\nAls het gevaarlijk wordt, neem dan contact op met 119 (ambulance, Japan), 110 (politie, Japan) of een hulplijn.",
      "U schrijft uw stappen op wanneer het goed met u gaat.\nTik 5 keer achter elkaar op de naam van de app bovenaan, dan gaat de \"Invoerruimte\" open.\nEr is geen knop naar deze ruimte. Deze uitleg verschijnt niet meer als u hem tot het einde hebt gelezen. Onthoud dus hoe u de ruimte opent.",
      "De ruimte heeft 9 onderdelen, zoals \"Waar ik nu ben\" en \"Woorden voor mezelf\".\nTik op een onderdeel en schrijf. Alles wordt meteen bewaard. U hoeft niet alles in te vullen.\nMet \"Klaar\" gaat u terug naar de lijst. De ruimte sluit als u op \"Sluiten\" tikt of de app verlaat.",
      "Schrijf de stappen voor \"Terug naar het hier en nu\" en \"Plan voor gevaarlijke momenten\" één per regel.\nMet \"＋ Stap toevoegen\" voegt u een regel toe, met ↑ ↓ verandert u de volgorde.\nBij \"Hulplijnen\" schrijft u de naam en het telefoonnummer van hulplijnen.",
      "Op Home staan twee knoppen, \"Terug naar het hier en nu\" en \"Plan voor gevaarlijke momenten\".\nAls u erop tikt, verschijnt wat u in de ruimte hebt geschreven, scherm voor scherm.\nGa verder met \"Volgende\" en \"Vorige\", en ga met \"Sluiten\" terug naar Home.",
      "Bij gevaar kunt u meteen bellen.\nTik onderaan op \"119 Ambulance\" of \"110 Politie\", dan opent uw telefoon-app met dat nummer.\nDe hulplijnen die u bij \"Hulplijnen\" hebt geschreven, staan daar ook. Terwijl uw stappen te zien zijn, staan deze knoppen bovenaan.",
      "Alles wat u schrijft, wordt alleen op dit apparaat bewaard. Er wordt niets verstuurd.\nAls u overstapt naar een nieuwe telefoon, tikt u in \"Instellingen\" op \"Exporteren\" om een bestand op te slaan, en op de nieuwe telefoon op \"Importeren\".\nWilt u snel een ander scherm? Tik bovenaan op \"× Sluiten\", dan opent een pagina van Google.",
      "In \"Instellingen\" kunt u de \"Lettergrootte\" (Normaal, Groot, Heel groot) en de \"Kleur\" (Groen, Lichtblauw, Wit, Zwart) veranderen.\nOok \"Muziek\" en \"Tikgeluid\" kunt u daar veranderen.\nDe taal kiest u bovenaan bij \"Language\"."
    ]
  }
});
/* ---- /nl ---- */
/* ---- sv: 翻訳 ---- */
TBL.sv = mergeDeep(JSON.parse(JSON.stringify(en)), {
  "app": {
    "name": "En i taget - SOYOGI",
    "short": "En i taget",
    "tagline": "Kom tillbaka till nuet, med stegen du bestämde när du mådde bra.",
    "exit": "× Stäng"
  },
  "nav": {
    "home": "Hem",
    "set": "Inställningar",
    "edit": "Registrera"
  },
  "common": {
    "ok": "OK",
    "cancel": "Avbryt",
    "save": "Spara",
    "del": "Ta bort",
    "back": "Tillbaka",
    "close": "Stäng",
    "yes": "Ja",
    "no": "Nej",
    "add": "Lägg till",
    "edit": "Ändra",
    "next": "Nästa",
    "prev": "Föregående",
    "done": "Klart",
    "saved": "Sparat ✓",
    "saveFail": "Kunde inte spara",
    "storageFull": "Lagringen är full, kunde inte spara",
    "deleted": "Borttaget",
    "delConfirm": "Vill du verkligen ta bort det här?",
    "empty": "Inget här ännu",
    "optional": "Du behöver inte fylla i allt.",
    "today": "I dag",
    "backConfirm": "Det du har skrivit är inte sparat än. Vill du slänga det och gå tillbaka?",
    "photo": {
      "camera": "Ta en bild",
      "roll": "Välj bland bilder",
      "cropTitle": "Beskär bilden",
      "cropHint": "Dra med fingret eller använd pilarna, och ändra storleken med reglaget.",
      "zoom": "Storlek",
      "panUp": "Upp",
      "panDown": "Ner",
      "panLeft": "Vänster",
      "panRight": "Höger",
      "make": "Använd den här",
      "fail": "Kunde inte läsa in bilden"
    }
  },
  "set": {
    "hNormal": "Vanliga inställningar",
    "hBackup": "Byta telefon (säkerhetskopia)",
    "fs": "Textstorlek",
    "fsSizes": [
      "Normal",
      "Stor",
      "Mycket stor"
    ],
    "lang": "ことば / Language",
    "theme": "Färg",
    "themes": [
      "Grön",
      "Ljusblå",
      "Vit",
      "Svart"
    ],
    "bgm": "Musik",
    "bgms": [
      "Ingen",
      "Grön ton",
      "Blå ton"
    ],
    "sound": "Knappljud",
    "on": "På",
    "off": "Av",
    "bkHint": "När du byter till en ny telefon: tryck på \"Exportera\" för att spara en fil, och tryck sedan på \"Importera\" på den nya telefonen.",
    "bkExport": "Exportera",
    "bkImport": "Importera",
    "exported": "Exporterat ✓",
    "imported": "Importerat ✓",
    "importFail": "Kunde inte importera",
    "importConfirm": "Det du har nu ersätts med innehållet i filen. Vill du importera?",
    "note": "Allt du skriver sparas bara på den här enheten. Inget skickas någonstans.",
    "privacy": "Integritetspolicy",
    "credit": "Apputveckling: SOYOGI, rådgivning för omsorg och stöd"
  },
  "screen": {
    "home": {
      "title": "En i taget",
      "btnNow": "Tillbaka till här och nu",
      "btnPlan": "Plan för farliga stunder",
      "sos": {
        "call119": "119 Ambulans",
        "call110": "110 Polis",
        "call": "Ring"
      },
      "agree": {
        "title": "Innan du börjar",
        "body1": "Den här appen visar, en skärm i taget, de steg du själv bestämde när du mådde bra.",
        "body2": "Den ersätter inte sjukvård.",
        "body3": "Om det är farligt, ring 119 (ambulans), 110 (polis) eller en hjälplinje. Numren 119 och 110 gäller i Japan.",
        "body4": "För att registrera dina steg trycker du på appens namn högst upp 5 gånger i rad.",
        "ok": "Jag förstår"
      },
      "player": {
        "nowTitle": "Tillbaka till här och nu",
        "planTitle": "Plan för farliga stunder",
        "today": "I dag är det",
        "place": "Platsen där jag är nu:",
        "words": "Ord till mig själv",
        "calm": "Andning som hjälper, saker att röra vid",
        "signs": "Mina varningstecken",
        "yellow": "När ljuset är gult",
        "yellowRest": "Så här vilar jag",
        "yellowStep": "Ett litet steg",
        "contacts": "Personer jag kan kontakta",
        "windows": "Hjälplinjer",
        "end": "Det var allt.",
        "empty": "Inga steg är skrivna än.",
        "pageOf": "{n} / {m}"
      }
    },
    "edit": {
      "title": "Registreringsrummet",
      "hint": "Det här rummet öppnas bara när du trycker på appens namn 5 gånger. När du lämnar appen stängs det (det du skrivit finns kvar).",
      "close": "Stäng",
      "back": "Tillbaka",
      "sections": {
        "place": "Platsen där jag är nu",
        "words": "Ord till mig själv",
        "calm": "Andning som hjälper, saker att röra vid",
        "signs": "Mina varningstecken",
        "contacts": "Personer jag kan kontakta",
        "windows": "Hjälplinjer",
        "steps": "Steg för \"Tillbaka till här och nu\"",
        "plan": "Steg för \"Plan för farliga stunder\"",
        "yellow": "När ljuset är gult"
      },
      "hints": {
        "place": "Platsen där du bor nu. Ord som hjälper dig att minnas \"var jag är\" i en svår stund.",
        "words": "Från dig när du mår bra, till dig i en svår stund.",
        "calm": "Andningen som fungerar för dig, och sakerna som lugnar dig när du rör vid dem. Med dina egna ord.",
        "signs": "De tecken som du själv har bestämt betyder \"nu börjar det bli farligt\".",
        "contacts": "Namn och telefonnummer. Du behöver inte fylla i allt.",
        "windows": "119 (ambulans) och 110 (polis), larmnumren i Japan, visas alltid. Lägg till andra hjälplinjer själv.",
        "steps": "Ett steg per rad. De visas uppifrån, ett i taget.",
        "plan": "Ett steg per rad. De visas efter \"När ljuset är gult\".",
        "yellow": "Inte farligt än, men trött. Hur du vilar, och bara ett litet steg."
      },
      "name": "Namn",
      "tel": "Telefonnummer",
      "addRow": "Lägg till",
      "del": "Ta bort",
      "delAgain": "Tryck igen för att ta bort",
      "stepPh": "Ett steg på en rad",
      "addStep": "Lägg till ett steg",
      "up": "Upp",
      "down": "Ner",
      "yellowRest": "Så här vilar jag (med egna ord)",
      "yellowStep": "Ett litet steg (bara ett)",
      "textPh": "Skriv här",
      "saved": "Sparat ✓"
    }
  },
  "guide": {
    "title": "Så använder du appen",
    "step": "{n} / {m}",
    "start": "Börja",
    "again": "Visa igen",
    "heads": [
      "Välkommen till En i taget - SOYOGI",
      "Så öppnar du registreringsrummet",
      "Registreringsrummet",
      "Skriva dina steg",
      "I svåra stunder, knapparna på Hem",
      "Ringknappar",
      "Det du skriver stannar på den här enheten",
      "Gör det lättare att se"
    ],
    "bodies": [
      "Den här appen visar i svåra stunder, en skärm i taget, de steg du själv bestämde när du mådde bra.\nDen ersätter inte sjukvård.\nOm det är farligt, ring 119 (ambulans), 110 (polis) eller en hjälplinje. Numren 119 och 110 gäller i Japan.",
      "Du skriver dina steg när du mår bra.\nTryck på appens namn högst upp 5 gånger i rad, så öppnas \"Registreringsrummet\".\nDet finns ingen knapp till rummet. Den här guiden visas inte igen när du har läst den till slutet, så kom ihåg hur du öppnar rummet.",
      "Rummet har 9 delar, till exempel \"Platsen där jag är nu\" och \"Ord till mig själv\".\nTryck på en del och skriv. Det sparas medan du skriver. Du behöver inte fylla i allt.\n\"Klart\" tar dig tillbaka till listan. Rummet stängs när du trycker på \"Stäng\" eller lämnar appen.",
      "Skriv stegen för \"Tillbaka till här och nu\" och \"Plan för farliga stunder\", ett per rad.\nMed \"＋ Lägg till ett steg\" lägger du till en rad, och med ↑ ↓ ändrar du ordningen.\nUnder \"Hjälplinjer\" skriver du namn och telefonnummer till hjälplinjer.",
      "På Hem finns två knappar, \"Tillbaka till här och nu\" och \"Plan för farliga stunder\".\nNär du trycker på en av dem visas det du skrev i rummet, en skärm i taget.\nGå vidare med \"Nästa\" och \"Föregående\", och tillbaka till Hem med \"Stäng\".",
      "Om det är farligt kan du ringa direkt.\nTryck på \"119 Ambulans\" eller \"110 Polis\" längst ner, så öppnas telefonappen med det numret.\nHjälplinjerna du skrev under \"Hjälplinjer\" visas där också. Medan dina steg visas finns knapparna högst upp.",
      "Allt du skriver sparas bara på den här enheten. Inget skickas någonstans.\nNär du byter till en ny telefon trycker du på \"Exportera\" i \"Inställningar\" för att spara en fil, och sedan på \"Importera\" på den nya telefonen.\nOm du snabbt vill byta skärm trycker du på \"× Stäng\" högst upp. Då öppnas en sida från Google.",
      "I \"Inställningar\" kan du ändra \"Textstorlek\" (Normal, Stor, Mycket stor) och \"Färg\" (Grön, Ljusblå, Vit, Svart).\nDär kan du också ändra \"Musik\" och \"Knappljud\".\nSpråket väljer du högst upp under \"Language\"."
    ]
  }
});
/* ---- /sv ---- */
/* ---- ko: 翻訳 ---- */
TBL.ko = mergeDeep(JSON.parse(JSON.stringify(en)), {
  "app": {
    "name": "하나씩 - SOYOGI",
    "short": "하나씩",
    "tagline": "마음이 괜찮을 때 정해 둔 순서로, 지금으로 돌아와요.",
    "exit": "× 닫기"
  },
  "nav": {
    "home": "홈",
    "set": "설정",
    "edit": "등록"
  },
  "common": {
    "ok": "확인",
    "cancel": "취소",
    "save": "저장",
    "del": "지우기",
    "back": "뒤로",
    "close": "닫기",
    "yes": "네",
    "no": "아니요",
    "add": "추가",
    "edit": "고치기",
    "next": "다음",
    "prev": "이전",
    "done": "완료",
    "saved": "저장했어요 ✓",
    "saveFail": "저장하지 못했어요",
    "storageFull": "저장 공간이 가득 차서 저장할 수 없어요",
    "deleted": "지웠어요",
    "delConfirm": "정말 지울까요?",
    "empty": "아직 아무것도 없어요",
    "optional": "전부 쓰지 않아도 괜찮아요.",
    "today": "오늘",
    "backConfirm": "쓴 내용이 아직 저장되지 않았어요. 버리고 돌아갈까요?",
    "photo": {
      "camera": "카메라로 찍기",
      "roll": "사진에서 고르기",
      "cropTitle": "사진 자르기",
      "cropHint": "손가락으로 움직이거나 화살표로 맞춘 다음, 슬라이더로 크기를 바꿔요.",
      "zoom": "크기",
      "panUp": "위로",
      "panDown": "아래로",
      "panLeft": "왼쪽으로",
      "panRight": "오른쪽으로",
      "make": "이걸로 정하기",
      "fail": "사진을 불러오지 못했어요"
    }
  },
  "set": {
    "hNormal": "평소 설정",
    "hBackup": "기기 변경(백업)",
    "fs": "글자 크기",
    "fsSizes": [
      "보통",
      "크게",
      "아주 크게"
    ],
    "lang": "ことば / Language",
    "theme": "색깔",
    "themes": [
      "초록",
      "하늘색",
      "흰색",
      "검정"
    ],
    "bgm": "BGM",
    "bgms": [
      "없음",
      "초록 소리",
      "파랑 소리"
    ],
    "sound": "터치 소리",
    "on": "ON",
    "off": "OFF",
    "bkHint": "새 스마트폰으로 옮길 때는 '내보내기'로 파일을 저장하고, 새 스마트폰에서 '가져오기'를 눌러 주세요.",
    "bkExport": "내보내기",
    "bkImport": "가져오기",
    "exported": "내보냈어요 ✓",
    "imported": "가져왔어요 ✓",
    "importFail": "가져오지 못했어요",
    "importConfirm": "지금 내용은 파일의 내용으로 바뀌어요. 가져올까요?",
    "note": "쓴 내용은 모두 이 기기 안에만 저장돼요. 어디에도 보내지 않아요.",
    "privacy": "개인정보 처리방침",
    "credit": "앱 개발: 돌봄과 지원 상담소 SOYOGI"
  },
  "screen": {
    "home": {
      "title": "하나씩",
      "btnNow": "지금 여기로 돌아오기",
      "btnPlan": "위험할 때의 계획",
      "sos": {
        "call119": "119 구급",
        "call110": "110 경찰",
        "call": "전화하기"
      },
      "agree": {
        "title": "시작하기 전에",
        "body1": "이 앱은 마음이 괜찮을 때 스스로 정한 순서를, 힘들 때 한 화면씩 보여 주는 도구예요.",
        "body2": "의료를 대신하지는 않아요.",
        "body3": "위험할 때는 119(구급)·110(경찰) 같은 일본의 긴급 번호나 상담 창구에 연락해 주세요.",
        "body4": "순서를 등록하는 곳은 맨 위의 앱 이름을 5번 연속으로 누르면 열려요.",
        "ok": "알겠어요"
      },
      "player": {
        "nowTitle": "지금 여기로 돌아오기",
        "planTitle": "위험할 때의 계획",
        "today": "오늘은",
        "place": "지금 있는 곳은",
        "words": "나에게 하는 말",
        "calm": "나에게 맞는 호흡·만지는 것",
        "signs": "위험 신호",
        "yellow": "노란 신호일 때",
        "yellowRest": "쉬는 방법",
        "yellowStep": "작은 한 걸음",
        "contacts": "연락할 수 있는 사람",
        "windows": "상담 창구",
        "end": "여기까지예요.",
        "empty": "아직 정해 둔 순서가 없어요.",
        "pageOf": "{n} / {m}"
      }
    },
    "edit": {
      "title": "등록하는 방",
      "hint": "이곳은 앱 이름을 5번 눌렀을 때만 열려요. 앱을 벗어나면 닫혀요(쓴 내용은 남아요).",
      "close": "닫기",
      "back": "뒤로",
      "sections": {
        "place": "지금 있는 곳",
        "words": "나에게 하는 말",
        "calm": "나에게 맞는 호흡·만지는 것",
        "signs": "위험 신호",
        "contacts": "연락할 수 있는 사람",
        "windows": "상담 창구",
        "steps": "'지금 여기로 돌아오기'의 순서",
        "plan": "'위험할 때의 계획'의 순서",
        "yellow": "노란 신호일 때"
      },
      "hints": {
        "place": "지금 살고 있는 곳. 힘들 때 '여기가 어디지'를 떠올리기 위한 말이에요.",
        "words": "괜찮을 때의 내가, 힘들 때의 나에게.",
        "calm": "나에게 맞는 호흡 방법이나, 만지면 차분해지는 것을, 나의 말로.",
        "signs": "'이렇게 되면 위험하다'고 스스로 정한 신호.",
        "contacts": "이름과 전화번호. 전부 쓰지 않아도 괜찮아요.",
        "windows": "일본의 긴급 번호인 119(구급)·110(경찰)은 항상 나와요. 다른 창구는 직접 더해 주세요.",
        "steps": "한 단계를 한 줄로. 위에서부터 차례로 나와요.",
        "plan": "한 단계를 한 줄로. '노란 신호일 때' 다음에 나와요.",
        "yellow": "아직 위험하지는 않지만 지쳐 있을 때. 쉬는 방법과, 작은 한 걸음을 하나만."
      },
      "name": "이름",
      "tel": "전화번호",
      "addRow": "추가",
      "del": "지우기",
      "delAgain": "한 번 더 누르면 지워져요",
      "stepPh": "한 단계를 한 줄로",
      "addStep": "단계 추가",
      "up": "위로",
      "down": "아래로",
      "yellowRest": "쉬는 방법(나의 말로)",
      "yellowStep": "작은 한 걸음(하나만)",
      "textPh": "여기에 써요",
      "saved": "저장했어요 ✓"
    }
  },
  "guide": {
    "title": "사용법",
    "step": "{n} / {m}",
    "start": "시작하기",
    "again": "다시 보기",
    "heads": [
      "하나씩 - SOYOGI에 오신 것을 환영해요",
      "등록하는 방을 여는 법",
      "등록하는 방",
      "순서 쓰기",
      "힘들 때는 홈의 버튼",
      "전화 버튼",
      "쓴 내용은 이 기기 안에만",
      "보기 편하게"
    ],
    "bodies": [
      "이 앱은 마음이 괜찮을 때 스스로 정한 순서를, 힘들 때 한 화면씩 보여 주는 도구예요.\n의료를 대신하지는 않아요.\n위험할 때는 119(구급)·110(경찰) 같은 일본의 긴급 번호나 상담 창구에 연락해 주세요.",
      "순서는 마음이 괜찮을 때 써 두어요.\n맨 위의 앱 이름을 5번 연속으로 누르면 '등록하는 방'이 열려요.\n방으로 들어가는 버튼은 없어요. 이 안내는 끝까지 읽으면 다시 나오지 않으니, 여는 법을 기억해 주세요.",
      "방에는 '지금 있는 곳', '나에게 하는 말' 등 9개 항목이 있어요.\n항목을 누르고 쓰면 쓰는 동안 바로 저장돼요. 다 쓰지 않아도 괜찮아요.\n'완료'를 누르면 항목 목록으로 돌아가요. '닫기'를 누르거나 앱을 벗어나면 방이 닫혀요.",
      "'지금 여기로 돌아오기'와 '위험할 때의 계획'의 순서는 한 줄에 하나씩 써요.\n'＋ 단계 추가'로 줄을 늘리고, ↑ ↓로 차례를 바꿔요.\n'상담 창구'에는 창구의 이름과 전화번호를 써요.",
      "홈에는 '지금 여기로 돌아오기'와 '위험할 때의 계획' 두 버튼이 있어요.\n누르면 방에서 쓴 내용이 한 화면에 하나씩 나와요.\n'다음'과 '이전'으로 넘기고, '닫기'로 홈에 돌아가요.",
      "위험할 때는 바로 전화할 수 있어요.\n화면 아래의 '119 구급'이나 '110 경찰'을 누르면 그 번호로 전화 앱이 열려요.\n'상담 창구'에 쓴 창구도 여기에 나와요. 순서를 보여 주는 동안에는 맨 위에 있어요.",
      "쓴 내용은 모두 이 기기 안에만 저장돼요. 어디에도 보내지 않아요.\n새 스마트폰으로 옮길 때는 '설정'의 '내보내기'로 파일을 저장하고, 새 스마트폰에서 '가져오기'를 눌러 주세요.\n화면을 빨리 바꾸고 싶을 때는 맨 위의 '× 닫기'를 누르면 Google 페이지가 열려요.",
      "'설정'에서 '글자 크기'(보통·크게·아주 크게)와 '색깔'(초록·하늘색·흰색·검정)을 바꿀 수 있어요.\n'BGM'과 '터치 소리'도 여기서 바꿀 수 있어요.\n언어는 맨 위의 'Language'에서 고를 수 있어요."
    ]
  }
});
/* ---- /ko ---- */
/* ---- zh: 翻訳 ---- */
TBL.zh = mergeDeep(JSON.parse(JSON.stringify(en)), {
  "app": {
    "name": "一个一个来 - SOYOGI",
    "short": "一个一个来",
    "tagline": "用状态好的时候定下的步骤，回到此刻。",
    "exit": "× 关闭"
  },
  "nav": {
    "home": "首页",
    "set": "设置",
    "edit": "登记"
  },
  "common": {
    "ok": "OK",
    "cancel": "取消",
    "save": "保存",
    "del": "删除",
    "back": "返回",
    "close": "关闭",
    "yes": "是",
    "no": "否",
    "add": "添加",
    "edit": "修改",
    "next": "下一个",
    "prev": "上一个",
    "done": "完成",
    "saved": "已保存 ✓",
    "saveFail": "无法保存",
    "storageFull": "空间已满，无法保存",
    "deleted": "已删除",
    "delConfirm": "真的要删除吗?",
    "empty": "还没有任何内容",
    "optional": "不用全部填写也没关系。",
    "today": "今天",
    "backConfirm": "写的内容还没有保存。要放弃并返回吗?",
    "photo": {
      "camera": "用相机拍",
      "roll": "从相册选",
      "cropTitle": "裁剪照片",
      "cropHint": "用手指拖动或用箭头对准位置，再用滑块调整大小。",
      "zoom": "大小",
      "panUp": "向上",
      "panDown": "向下",
      "panLeft": "向左",
      "panRight": "向右",
      "make": "就用这个",
      "fail": "无法读取照片"
    }
  },
  "set": {
    "hNormal": "日常设置",
    "hBackup": "更换手机(备份)",
    "fs": "文字大小",
    "fsSizes": [
      "普通",
      "大",
      "特大"
    ],
    "lang": "ことば / Language",
    "theme": "颜色",
    "themes": [
      "绿色",
      "浅蓝",
      "白色",
      "黑色"
    ],
    "bgm": "背景音乐",
    "bgms": [
      "无",
      "绿之音",
      "蓝之音"
    ],
    "sound": "点按音",
    "on": "开",
    "off": "关",
    "bkHint": "换新手机时，先点“导出”保存文件，再在新手机上点“导入”。",
    "bkExport": "导出",
    "bkImport": "导入",
    "exported": "已导出 ✓",
    "imported": "已导入 ✓",
    "importFail": "无法导入",
    "importConfirm": "现在的内容会被文件里的内容替换。要导入吗?",
    "note": "写下的内容全部只保存在这台设备里，不会发送到任何地方。",
    "privacy": "隐私政策",
    "credit": "应用开发：照护与支援咨询处 SOYOGI"
  },
  "screen": {
    "home": {
      "title": "一个一个来",
      "btnNow": "回到此时此地",
      "btnPlan": "危险时的计划",
      "sos": {
        "call119": "119 急救",
        "call110": "110 警察",
        "call": "打电话"
      },
      "agree": {
        "title": "开始之前",
        "body1": "这个应用会把状态好的时候自己定下的步骤，在难受的时候一次一屏地显示出来。",
        "body2": "它不能代替医疗。",
        "body3": "遇到危险时，请联系日本的 119(急救)、110(警察)，或者咨询窗口。",
        "body4": "连续点按最上方的应用名称 5 次，就会打开步骤的登记。",
        "ok": "明白了"
      },
      "player": {
        "nowTitle": "回到此时此地",
        "planTitle": "危险时的计划",
        "today": "今天是",
        "place": "现在所在的地方是",
        "words": "给自己的话",
        "calm": "有用的呼吸方式、可以摸的东西",
        "signs": "危险的信号",
        "yellow": "黄灯的时候",
        "yellowRest": "休息的方式",
        "yellowStep": "小小的一步",
        "contacts": "可以联系的人",
        "windows": "咨询窗口",
        "end": "到这里就结束了。",
        "empty": "还没有步骤。",
        "pageOf": "{n} / {m}"
      }
    },
    "edit": {
      "title": "登记的房间",
      "hint": "这里只有在点按应用名称 5 次时才会打开。离开应用后会关闭(写下的内容会保留)。",
      "close": "关闭",
      "back": "返回",
      "sections": {
        "place": "现在所在的地方",
        "words": "给自己的话",
        "calm": "有用的呼吸方式、可以摸的东西",
        "signs": "危险的信号",
        "contacts": "可以联系的人",
        "windows": "咨询窗口",
        "steps": "“回到此时此地”的步骤",
        "plan": "“危险时的计划”的步骤",
        "yellow": "黄灯的时候"
      },
      "hints": {
        "place": "现在生活的地方。是难受的时候用来想起“这里是哪里”的话。",
        "words": "从状态好的自己，写给难受时的自己。",
        "calm": "用自己的话写下对自己有用的呼吸方式，以及摸了会平静下来的东西。",
        "signs": "自己定下的“变成这样就危险了”的信号。",
        "contacts": "名字和电话号码。不用全部填写也没关系。",
        "windows": "119(急救)和 110(警察)是日本的号码，会一直显示。其他窗口请自己添加。",
        "steps": "一个步骤写一行。会从上到下按顺序显示。",
        "plan": "一个步骤写一行。会在“黄灯的时候”之后显示。",
        "yellow": "还不到危险，但感到累的时候。写下休息的方式，和小小的一步(只写一个)。"
      },
      "name": "名字",
      "tel": "电话号码",
      "addRow": "添加",
      "del": "删除",
      "delAgain": "再点一次就会删除",
      "stepPh": "一个步骤写一行",
      "addStep": "添加步骤",
      "up": "向上",
      "down": "向下",
      "yellowRest": "休息的方式(用自己的话)",
      "yellowStep": "小小的一步(只写一个)",
      "textPh": "在这里写",
      "saved": "已保存 ✓"
    }
  },
  "guide": {
    "title": "使用方法",
    "step": "{n} / {m}",
    "start": "开始",
    "again": "再看一次",
    "heads": [
      "欢迎使用 一个一个来 - SOYOGI",
      "怎样打开登记的房间",
      "登记的房间",
      "写下步骤",
      "难受的时候，用首页的按钮",
      "电话按钮",
      "写下的内容只在这台设备里",
      "让画面更好看清"
    ],
    "bodies": [
      "这个应用会把状态好的时候自己定下的步骤，在难受的时候一次一屏地显示出来。\n它不能代替医疗。\n遇到危险时，请联系日本的 119(急救)、110(警察)，或者咨询窗口。",
      "步骤要在状态好的时候先写好。\n连续点按最上方的应用名称 5 次，就会打开“登记的房间”。\n没有进入房间的按钮。这份说明读到最后就不会再出现，请记住打开的方法。",
      "房间里有“现在所在的地方”“给自己的话”等 9 个项目。\n点按项目后书写，写的同时就会保存。不用全部写完也没关系。\n点“完成”回到项目列表。点“关闭”或离开应用，房间就会关上。",
      "“回到此时此地”和“危险时的计划”的步骤，一行写一个。\n用“＋ 添加步骤”增加一行，用 ↑ ↓ 调整顺序。\n在“咨询窗口”里写下窗口的名称和电话号码。",
      "首页有“回到此时此地”和“危险时的计划”两个按钮。\n点按后，在房间里写下的内容会一次一屏地显示出来。\n用“下一个”“上一个”翻页，点“关闭”回到首页。",
      "遇到危险时，可以马上打电话。\n点按画面下方的“119 急救”或“110 警察”，电话应用就会带着这个号码打开。\n写在“咨询窗口”里的窗口也会排在这里。显示步骤的时候，这些按钮在最上方。",
      "写下的内容全部只保存在这台设备里，不会发送到任何地方。\n换新手机时，请在“设置”里点“导出”保存文件，再在新手机上点“导入”。\n想马上切换画面时，点最上方的“× 关闭”，就会打开 Google 的页面。",
      "在“设置”里可以更改“文字大小”(普通、大、特大)和“颜色”(绿色、浅蓝、白色、黑色)。\n“背景音乐”和“点按音”也可以在这里更改。\n语言可以在最上方的“Language”里选择。"
    ]
  }
});
/* ---- /zh ---- */
/* ---- ar: 翻訳 ---- */
TBL.ar = mergeDeep(JSON.parse(JSON.stringify(en)), {
  "app": {
    "name": "واحدة تلو الأخرى - SOYOGI",
    "short": "واحدة تلو الأخرى",
    "tagline": "العودة إلى الآن، بالخطوات التي قررتها حين كنت بخير.",
    "exit": "× إغلاق"
  },
  "nav": {
    "home": "الرئيسية",
    "set": "الإعدادات",
    "edit": "التسجيل"
  },
  "common": {
    "ok": "موافق",
    "cancel": "إلغاء",
    "save": "حفظ",
    "del": "حذف",
    "back": "رجوع",
    "close": "إغلاق",
    "yes": "نعم",
    "no": "لا",
    "add": "إضافة",
    "edit": "تعديل",
    "next": "التالي",
    "prev": "السابق",
    "done": "تم",
    "saved": "تم الحفظ ✓",
    "saveFail": "تعذّر الحفظ",
    "storageFull": "المساحة ممتلئة، تعذّر الحفظ",
    "deleted": "تم الحذف",
    "delConfirm": "هل تريد الحذف فعلًا؟",
    "empty": "لا يوجد شيء بعد",
    "optional": "لا داعي لكتابة كل شيء.",
    "today": "اليوم",
    "backConfirm": "ما كتبته لم يُحفظ بعد. هل تريد تجاهله والرجوع؟",
    "photo": {
      "camera": "التقاط صورة بالكاميرا",
      "roll": "اختيار من الصور",
      "cropTitle": "قص الصورة",
      "cropHint": "حرّك الصورة بإصبعك أو بالأسهم، ثم غيّر الحجم بشريط التمرير.",
      "zoom": "الحجم",
      "panUp": "إلى الأعلى",
      "panDown": "إلى الأسفل",
      "panLeft": "إلى اليسار",
      "panRight": "إلى اليمين",
      "make": "اعتماد هذه الصورة",
      "fail": "تعذّر تحميل الصورة"
    }
  },
  "set": {
    "hNormal": "الإعدادات اليومية",
    "hBackup": "تغيير الهاتف (نسخة احتياطية)",
    "fs": "حجم الخط",
    "fsSizes": [
      "عادي",
      "كبير",
      "كبير جدًا"
    ],
    "lang": "ことば / Language",
    "theme": "اللون",
    "themes": [
      "أخضر",
      "أزرق فاتح",
      "أبيض",
      "أسود"
    ],
    "bgm": "موسيقى الخلفية",
    "bgms": [
      "بدون",
      "نغمة خضراء",
      "نغمة زرقاء"
    ],
    "sound": "صوت النقر",
    "on": "تشغيل",
    "off": "إيقاف",
    "bkHint": "عند الانتقال إلى هاتف جديد، اضغط على «تصدير» لحفظ ملف، ثم اضغط على «استيراد» في الهاتف الجديد.",
    "bkExport": "تصدير",
    "bkImport": "استيراد",
    "exported": "تم التصدير ✓",
    "imported": "تم الاستيراد ✓",
    "importFail": "تعذّر الاستيراد",
    "importConfirm": "سيُستبدل المحتوى الحالي بمحتوى الملف. هل تريد الاستيراد؟",
    "note": "كل ما يُكتب هنا يُحفظ في هذا الجهاز فقط. ولا يُرسل إلى أي مكان.",
    "privacy": "سياسة الخصوصية",
    "credit": "تطوير التطبيق: SOYOGI، خدمة استشارات للرعاية والدعم"
  },
  "screen": {
    "home": {
      "title": "واحدة تلو الأخرى",
      "btnNow": "العودة إلى هنا والآن",
      "btnPlan": "خطة وقت الخطر",
      "sos": {
        "call119": "119 الإسعاف",
        "call110": "110 الشرطة",
        "call": "اتصال"
      },
      "agree": {
        "title": "قبل البدء",
        "body1": "هذا التطبيق أداة تعرض، في الأوقات الصعبة، الخطوات التي قررتها بنفسك حين كنت بخير، شاشة واحدة في كل مرة.",
        "body2": "هو ليس بديلًا عن الرعاية الطبية.",
        "body3": "عند الخطر، يُرجى الاتصال بالرقم 119 (الإسعاف) أو 110 (الشرطة) في اليابان، أو بجهة استشارة.",
        "body4": "تُفتح شاشة تسجيل الخطوات بالضغط على اسم التطبيق في الأعلى 5 مرات متتالية.",
        "ok": "فهمت"
      },
      "player": {
        "nowTitle": "العودة إلى هنا والآن",
        "planTitle": "خطة وقت الخطر",
        "today": "اليوم هو",
        "place": "المكان الذي أنا فيه الآن",
        "words": "كلمات لنفسي",
        "calm": "تنفّس يساعدني وأشياء ألمسها",
        "signs": "علامات الخطر",
        "yellow": "عند الإشارة الصفراء",
        "yellowRest": "كيف أرتاح",
        "yellowStep": "خطوة صغيرة",
        "contacts": "أشخاص يمكنني التواصل معهم",
        "windows": "جهات الاستشارة",
        "end": "هذا كل شيء.",
        "empty": "لا توجد خطوات بعد.",
        "pageOf": "{n} / {m}"
      }
    },
    "edit": {
      "title": "غرفة التسجيل",
      "hint": "تُفتح هذه الغرفة فقط عند الضغط على اسم التطبيق 5 مرات. وتُغلق عند مغادرة التطبيق (ما كتبته يبقى محفوظًا).",
      "close": "إغلاق",
      "back": "رجوع",
      "sections": {
        "place": "المكان الذي أنا فيه الآن",
        "words": "كلمات لنفسي",
        "calm": "تنفّس يساعدني وأشياء ألمسها",
        "signs": "علامات الخطر",
        "contacts": "أشخاص يمكنني التواصل معهم",
        "windows": "جهات الاستشارة",
        "steps": "خطوات «العودة إلى هنا والآن»",
        "plan": "خطوات «خطة وقت الخطر»",
        "yellow": "عند الإشارة الصفراء"
      },
      "hints": {
        "place": "مكان السكن الحالي. كلمات لتذكّر «أين أنا» في الأوقات الصعبة.",
        "words": "من نفسي حين أكون بخير، إلى نفسي في الأوقات الصعبة.",
        "calm": "طريقة التنفّس التي تناسبني، والأشياء التي أهدأ عند لمسها، بكلماتي الخاصة.",
        "signs": "العلامات التي قررتها بنفسي: «إذا حدث هذا، فالأمر خطر».",
        "contacts": "الاسم ورقم الهاتف. لا داعي لكتابة كل شيء.",
        "windows": "الرقمان 119 (الإسعاف) و110 (الشرطة) في اليابان يظهران دائمًا. أما الجهات الأخرى فيمكن إضافتها بنفسك.",
        "steps": "خطوة واحدة في كل سطر. تُعرض بالترتيب من الأعلى.",
        "plan": "خطوة واحدة في كل سطر. تُعرض بعد «عند الإشارة الصفراء».",
        "yellow": "حين لا يوجد خطر بعد، لكن هناك تعب. كيف أرتاح، وخطوة صغيرة واحدة فقط."
      },
      "name": "الاسم",
      "tel": "رقم الهاتف",
      "addRow": "إضافة",
      "del": "حذف",
      "delAgain": "اضغط مرة أخرى للحذف",
      "stepPh": "خطوة واحدة في سطر واحد",
      "addStep": "إضافة خطوة",
      "up": "إلى الأعلى",
      "down": "إلى الأسفل",
      "yellowRest": "كيف أرتاح (بكلماتي الخاصة)",
      "yellowStep": "خطوة صغيرة (واحدة فقط)",
      "textPh": "اكتب هنا",
      "saved": "تم الحفظ ✓"
    }
  },
  "guide": {
    "title": "طريقة الاستخدام",
    "step": "⁦{n} / {m}⁩",
    "start": "ابدأ",
    "again": "عرض مرة أخرى",
    "heads": [
      "مرحبًا بك في واحدة تلو الأخرى - SOYOGI",
      "كيف تفتح غرفة التسجيل",
      "غرفة التسجيل",
      "كتابة الخطوات",
      "في الأوقات الصعبة، زرّا الرئيسية",
      "أزرار الاتصال",
      "ما تكتبه يبقى في هذا الجهاز",
      "لرؤية أوضح"
    ],
    "bodies": [
      "هذا التطبيق أداة تعرض، في الأوقات الصعبة، الخطوات التي قررتها بنفسك حين كنت بخير، شاشة واحدة في كل مرة.\nهو ليس بديلًا عن الرعاية الطبية.\nعند الخطر، يُرجى الاتصال بالرقم 119 (الإسعاف) أو 110 (الشرطة) في اليابان، أو بجهة استشارة.",
      "تُكتب الخطوات في وقت تكون فيه بخير.\nاضغط على اسم التطبيق في الأعلى 5 مرات متتالية، فتُفتح «غرفة التسجيل».\nلا يوجد زر للدخول إلى الغرفة. ولن يظهر هذا الدليل مرة أخرى بعد قراءته حتى النهاية، فتذكّر طريقة فتحها.",
      "في الغرفة 9 أقسام، مثل «المكان الذي أنا فيه الآن» و«كلمات لنفسي».\nاضغط على قسم واكتب، فيُحفظ ما تكتبه فورًا. لا داعي لكتابة كل شيء.\nيعيدك زر «تم» إلى قائمة الأقسام. وتُغلق الغرفة عند الضغط على «إغلاق» أو عند مغادرة التطبيق.",
      "اكتب خطوات «العودة إلى هنا والآن» و«خطة وقت الخطر»، خطوة واحدة في كل سطر.\nأضف سطرًا بزر «＋ إضافة خطوة»، وغيّر الترتيب بالسهمين ↑ ↓.\nفي «جهات الاستشارة» اكتب اسم الجهة ورقم هاتفها.",
      "في الرئيسية زرّان، «العودة إلى هنا والآن» و«خطة وقت الخطر».\nعند الضغط على أحدهما، يظهر ما كتبته في الغرفة شاشة واحدة في كل مرة.\nتنقّل بزرّي «التالي» و«السابق»، وارجع إلى الرئيسية بزر «إغلاق».",
      "عند الخطر، يمكنك الاتصال فورًا.\nاضغط على «119 الإسعاف» أو «110 الشرطة» أسفل الشاشة، فيُفتح تطبيق الهاتف بهذا الرقم.\nوتظهر هنا أيضًا الجهات التي كتبتها في «جهات الاستشارة». وأثناء عرض الخطوات تكون هذه الأزرار في الأعلى.",
      "كل ما تكتبه يُحفظ في هذا الجهاز فقط. ولا يُرسل إلى أي مكان.\nعند الانتقال إلى هاتف جديد، اضغط على «تصدير» في «الإعدادات» لحفظ ملف، ثم اضغط على «استيراد» في الهاتف الجديد.\nإذا أردت تغيير الشاشة بسرعة، اضغط على «× إغلاق» في الأعلى، فتُفتح صفحة من Google.",
      "في «الإعدادات» يمكنك تغيير «حجم الخط» (عادي، كبير، كبير جدًا) و«اللون» (أخضر، أزرق فاتح، أبيض، أسود).\nويمكنك هناك أيضًا تغيير «موسيقى الخلفية» و«صوت النقر».\nاختر اللغة من «Language» في الأعلى."
    ]
  }
});
/* ---- /ar ---- */
/* 翻訳前の仮置き: de〜ar は en を流用する(翻訳Workflowで各言語を書いたらこの行より上に追加し、ここは残してよい) */
['de','fr','es','it','pt','nl','sv','ko','zh','ar'].forEach(function(l){
  if(!TBL[l]) TBL[l] = JSON.parse(JSON.stringify(en));
});
window.ANSHIN_I18N = TBL;
})();
