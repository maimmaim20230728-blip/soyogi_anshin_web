/* 安心の手順(仮) 多言語テーブル(そよぎアプリ・キット v1・12言語)
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
  app: { name:'安心の手順(仮)', tagline:'元気なときに決めた手順で、いまに戻る。', exit:'× とじる' },
  nav: { home:'ホーム', set:'せってい', edit:'とうろく' },
  common: {
    ok:'OK', cancel:'やめる', save:'ほぞんする', del:'けす', back:'もどる', close:'とじる',
    yes:'はい', no:'いいえ', add:'ついか', edit:'なおす', next:'つぎ', prev:'まえ', done:'できた',
    saved:'ほぞんしました ✓', saveFail:'ほぞんできませんでした', storageFull:'いっぱいで ほぞんできません',
    deleted:'けしました', delConfirm:'ほんとうに けしますか?', empty:'まだ なにも ありません',
    optional:'ぜんぶ 書かなくても だいじょうぶです。', today:'きょう',
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
    note:'書いたことは すべて この端末の中だけに ほぞんされます。どこにも 送られません。',
    privacy:'プライバシーポリシー',
    credit:'アプリ開発：介護と支援の相談どころ そよぎ'
  },
  screen: {
    home: {
      title:'安心の手順(仮)',
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
      hint:'ここは アプリの名前を 5回 おしたときだけ ひらきます。画面を よみこみ直すと とじます(書いたものは のこります)。',
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
      name:'なまえ', tel:'でんわばんごう', addRow:'ついか', del:'けす',
      stepPh:'てじゅんを 1行で', addStep:'てじゅんを ついか', up:'うえへ', down:'したへ',
      yellowRest:'やすみかた(じぶんの ことばで)', yellowStep:'ちいさな いっぽ(ひとつだけ)',
      textPh:'ここに かきます', saved:'ほぞんしました ✓'
    }
  }
};

/* ============ en ============ */
var en = {
  app: { name:'Calm Steps - SOYOGI (draft)', tagline:'Come back to now, with the steps you decided when you were well.', exit:'× Close' },
  nav: { home:'Home', set:'Settings', edit:'Register' },
  common: {
    ok:'OK', cancel:'Cancel', save:'Save', del:'Delete', back:'Back', close:'Close',
    yes:'Yes', no:'No', add:'Add', edit:'Edit', next:'Next', prev:'Previous', done:'Done',
    saved:'Saved ✓', saveFail:'Could not save', storageFull:'Storage is full, could not save',
    deleted:'Deleted', delConfirm:'Really delete this?', empty:'Nothing here yet',
    optional:'You do not have to fill in everything.', today:'Today',
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
    note:'Everything you write is stored only on this device. Nothing is sent anywhere.',
    privacy:'Privacy policy',
    credit:'Developed by SOYOGI, a care and support consultation service'
  },
  screen: {
    home: {
      title:'Calm Steps - SOYOGI (draft)',
      btnNow:'Come back to here and now',
      btnPlan:'My plan for hard moments',
      sos: { call119:'119 Ambulance', call110:'110 Police', call:'Call' },
      agree: {
        title:'Before you start',
        body1:'This app shows, one screen at a time, the steps you decided for yourself when you were well.',
        body2:'It is not a substitute for medical care.',
        body3:'If you are in danger, call 119 (ambulance), 110 (police) or a helpline.',
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
      hint:'This room opens only when you tap the app name 5 times. Reloading the page closes it (what you wrote stays).',
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
        windows:'119 (ambulance) and 110 (police) are always shown. Add other helplines yourself.',
        steps:'One step per line. They are shown from the top, one at a time.',
        plan:'One step per line. They are shown after "When the light is yellow".',
        yellow:'Not dangerous yet, but tired. How you rest, and just one small step.'
      },
      name:'Name', tel:'Phone number', addRow:'Add', del:'Delete',
      stepPh:'One step in one line', addStep:'Add a step', up:'Up', down:'Down',
      yellowRest:'How I rest (in my own words)', yellowStep:'One small step (just one)',
      textPh:'Write here', saved:'Saved ✓'
    }
  }
};

var TBL = { ja: ja, en: en };
/* 翻訳の差し込み用: en の複製に訳を重ねる(足りないキーは en のまま) */
function mergeDeep(t, s){ for(var k in s){ if(s[k] && typeof s[k] === 'object' && !Array.isArray(s[k])){ if(!t[k] || typeof t[k] !== 'object') t[k] = {}; mergeDeep(t[k], s[k]); } else t[k] = s[k]; } return t; }
/* ---- de: 翻訳 ---- */
TBL.de = mergeDeep(JSON.parse(JSON.stringify(en)), {
  "app": {
    "name": "Sichere Schritte - SOYOGI (Entwurf)",
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
    "note": "Alles, was Sie schreiben, bleibt nur auf diesem Gerät gespeichert. Nichts wird irgendwohin gesendet.",
    "privacy": "Datenschutzerklärung",
    "credit": "App-Entwicklung: SOYOGI, Beratungsstelle für Pflege und Unterstützung"
  },
  "screen": {
    "home": {
      "title": "Sichere Schritte - SOYOGI (Entwurf)",
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
      "hint": "Dieser Raum öffnet sich nur, wenn Sie 5-mal auf den App-Namen tippen. Beim Neuladen der Seite schließt er sich (was Sie geschrieben haben, bleibt erhalten).",
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
        "windows": "119 (Rettungsdienst) und 110 (Polizei) werden immer angezeigt. Weitere Anlaufstellen fügen Sie selbst hinzu.",
        "steps": "Ein Schritt pro Zeile. Sie werden von oben nach unten einzeln angezeigt.",
        "plan": "Ein Schritt pro Zeile. Sie werden nach „Wenn die Ampel auf Gelb steht“ angezeigt.",
        "yellow": "Noch nicht gefährlich, aber müde. Wie Sie sich ausruhen, und nur ein kleiner Schritt."
      },
      "name": "Name",
      "tel": "Telefonnummer",
      "addRow": "Hinzufügen",
      "del": "Löschen",
      "stepPh": "Ein Schritt in einer Zeile",
      "addStep": "Schritt hinzufügen",
      "up": "Nach oben",
      "down": "Nach unten",
      "yellowRest": "Wie ich mich ausruhe (in meinen eigenen Worten)",
      "yellowStep": "Ein kleiner Schritt (nur einer)",
      "textPh": "Hier schreiben",
      "saved": "Gespeichert ✓"
    }
  }
});
/* ---- /de ---- */
/* ---- fr: 翻訳 ---- */
TBL.fr = mergeDeep(JSON.parse(JSON.stringify(en)), {
  "app": {
    "name": "Étapes sereines - SOYOGI (provisoire)",
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
    "note": "Tout ce que vous écrivez reste uniquement sur cet appareil. Rien n'est envoyé nulle part.",
    "privacy": "Politique de confidentialité",
    "credit": "Application développée par SOYOGI, lieu de conseil pour les soins et le soutien"
  },
  "screen": {
    "home": {
      "title": "Étapes sereines - SOYOGI (provisoire)",
      "btnNow": "Revenir ici et maintenant",
      "btnPlan": "Mon plan pour les moments difficiles",
      "sos": {
        "call119": "119 Ambulance (Japon)",
        "call110": "110 Police (Japon)",
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
      "hint": "Cet espace s'ouvre seulement quand vous appuyez 5 fois sur le nom de l'application. Recharger la page le ferme (ce que vous avez écrit reste).",
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
      "stepPh": "Une étape en une ligne",
      "addStep": "Ajouter une étape",
      "up": "Monter",
      "down": "Descendre",
      "yellowRest": "Comment je me repose (avec mes propres mots)",
      "yellowStep": "Un petit pas (un seul)",
      "textPh": "Écrivez ici",
      "saved": "Enregistré ✓"
    }
  }
});
/* ---- /fr ---- */
/* ---- es: 翻訳 ---- */
TBL.es = mergeDeep(JSON.parse(JSON.stringify(en)), {
  "app": {
    "name": "Pasos de calma - SOYOGI (borrador)",
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
    "note": "Todo lo escrito se guarda solo en este dispositivo. No se envía a ninguna parte.",
    "privacy": "Política de privacidad",
    "credit": "Desarrollo de la aplicación: SOYOGI, espacio de consulta sobre cuidados y apoyo"
  },
  "screen": {
    "home": {
      "title": "Pasos de calma - SOYOGI (borrador)",
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
      "hint": "Esta sala se abre solo al tocar 5 veces el nombre de la aplicación. Al recargar la pantalla se cierra (lo escrito se conserva).",
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
        "windows": "El 119 (ambulancia) y el 110 (policía) aparecen siempre. Las demás líneas de ayuda se añaden a mano.",
        "steps": "Un paso por línea. Se muestran en orden, desde arriba.",
        "plan": "Un paso por línea. Se muestran después de «Cuando el semáforo está en amarillo».",
        "yellow": "Cuando todavía no hay peligro, pero sí cansancio. Una forma de descansar y un solo pequeño paso."
      },
      "name": "Nombre",
      "tel": "Número de teléfono",
      "addRow": "Añadir",
      "del": "Borrar",
      "stepPh": "Un paso en una línea",
      "addStep": "Añadir un paso",
      "up": "Arriba",
      "down": "Abajo",
      "yellowRest": "Cómo descansar (con palabras propias)",
      "yellowStep": "Un pequeño paso (solo uno)",
      "textPh": "Escribir aquí",
      "saved": "Guardado ✓"
    }
  }
});
/* ---- /es ---- */
/* ---- it: 翻訳 ---- */
TBL.it = mergeDeep(JSON.parse(JSON.stringify(en)), {
  "app": {
    "name": "Passi sereni - SOYOGI (bozza)",
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
    "note": "Tutto ciò che scrive resta solo in questo dispositivo. Non viene inviato da nessuna parte.",
    "privacy": "Informativa sulla privacy",
    "credit": "App sviluppata da SOYOGI, sportello di consulenza per l'assistenza e il sostegno"
  },
  "screen": {
    "home": {
      "title": "Passi sereni - SOYOGI (bozza)",
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
      "hint": "Questa stanza si apre solo toccando 5 volte il nome dell'app. Se ricarica la schermata, si chiude (ciò che ha scritto resta).",
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
      "stepPh": "Un passo per riga",
      "addStep": "Aggiungi un passo",
      "up": "Su",
      "down": "Giù",
      "yellowRest": "Come riposare (con parole Sue)",
      "yellowStep": "Un piccolo passo (uno solo)",
      "textPh": "Scriva qui",
      "saved": "Salvato ✓"
    }
  }
});
/* ---- /it ---- */
/* ---- pt: 翻訳 ---- */
TBL.pt = mergeDeep(JSON.parse(JSON.stringify(en)), {
  "app": {
    "name": "Passos de Calma - SOYOGI (rascunho)",
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
    "note": "Tudo o que for escrito fica guardado apenas neste aparelho. Nada é enviado para fora.",
    "privacy": "Política de privacidade",
    "credit": "Desenvolvido por SOYOGI, espaço de aconselhamento sobre cuidados e apoio"
  },
  "screen": {
    "home": {
      "title": "Passos de Calma - SOYOGI (rascunho)",
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
      "hint": "Esta sala abre apenas ao tocar 5 vezes no nome que aparece no topo. Ao recarregar a página, fecha (o que foi escrito fica guardado).",
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
        "windows": "O 119 (ambulância) e o 110 (polícia) aparecem sempre. Outras linhas de apoio podem ser adicionadas.",
        "steps": "Um passo por linha. Aparecem um de cada vez, de cima para baixo.",
        "plan": "Um passo por linha. Aparecem depois de \"Quando a luz está amarela\".",
        "yellow": "Quando ainda não é perigoso, mas há cansaço. A forma de descansar e um pequeno passo, só um."
      },
      "name": "Nome",
      "tel": "Número de telefone",
      "addRow": "Adicionar",
      "del": "Apagar",
      "stepPh": "Um passo por linha",
      "addStep": "Adicionar um passo",
      "up": "Para cima",
      "down": "Para baixo",
      "yellowRest": "Como descansar (com as próprias palavras)",
      "yellowStep": "Um pequeno passo (só um)",
      "textPh": "Escrever aqui",
      "saved": "Guardado ✓"
    }
  }
});
/* ---- /pt ---- */
/* ---- nl: 翻訳 ---- */
TBL.nl = mergeDeep(JSON.parse(JSON.stringify(en)), {
  "app": {
    "name": "Stappen naar rust - SOYOGI (concept)",
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
    "note": "Alles wat u schrijft, wordt alleen op dit apparaat bewaard. Er wordt niets verstuurd.",
    "privacy": "Privacybeleid",
    "credit": "App-ontwikkeling: SOYOGI, adviespunt voor zorg en ondersteuning"
  },
  "screen": {
    "home": {
      "title": "Stappen naar rust - SOYOGI (concept)",
      "btnNow": "Terug naar het hier en nu",
      "btnPlan": "Plan voor gevaarlijke momenten",
      "sos": {
        "call119": "119 Ambulance (Japan)",
        "call110": "110 Politie (Japan)",
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
      "hint": "Deze ruimte opent alleen als u 5 keer op de naam van de app tikt. Als u het scherm opnieuw laadt, sluit hij (wat u schreef, blijft bewaard).",
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
        "windows": "119 (ambulance) en 110 (politie) staan er altijd bij. Andere hulplijnen kunt u zelf toevoegen.",
        "steps": "Eén stap per regel. Ze verschijnen op volgorde, van boven naar beneden.",
        "plan": "Eén stap per regel. Ze verschijnen na \"Bij geel licht\".",
        "yellow": "Nog niet gevaarlijk, maar wel moe. Hoe u uitrust, en maar één kleine stap."
      },
      "name": "Naam",
      "tel": "Telefoonnummer",
      "addRow": "Toevoegen",
      "del": "Wissen",
      "stepPh": "Eén stap per regel",
      "addStep": "Stap toevoegen",
      "up": "Omhoog",
      "down": "Omlaag",
      "yellowRest": "Hoe ik uitrust (in mijn eigen woorden)",
      "yellowStep": "Eén kleine stap (maar één)",
      "textPh": "Schrijf hier",
      "saved": "Opgeslagen ✓"
    }
  }
});
/* ---- /nl ---- */
/* ---- sv: 翻訳 ---- */
TBL.sv = mergeDeep(JSON.parse(JSON.stringify(en)), {
  "app": {
    "name": "Trygga steg - SOYOGI (utkast)",
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
    "note": "Allt du skriver sparas bara på den här enheten. Inget skickas någonstans.",
    "privacy": "Integritetspolicy",
    "credit": "Apputveckling: SOYOGI, rådgivning för omsorg och stöd"
  },
  "screen": {
    "home": {
      "title": "Trygga steg - SOYOGI (utkast)",
      "btnNow": "Tillbaka till här och nu",
      "btnPlan": "Plan för farliga stunder",
      "sos": {
        "call119": "119 Ambulans (Japan)",
        "call110": "110 Polis (Japan)",
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
      "hint": "Det här rummet öppnas bara när du trycker på appens namn 5 gånger. Om sidan laddas om stängs det (det du skrivit finns kvar).",
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
        "windows": "119 (ambulans) och 110 (polis) visas alltid. Lägg till andra hjälplinjer själv.",
        "steps": "Ett steg per rad. De visas uppifrån, ett i taget.",
        "plan": "Ett steg per rad. De visas efter \"När ljuset är gult\".",
        "yellow": "Inte farligt än, men trött. Hur du vilar, och bara ett litet steg."
      },
      "name": "Namn",
      "tel": "Telefonnummer",
      "addRow": "Lägg till",
      "del": "Ta bort",
      "stepPh": "Ett steg på en rad",
      "addStep": "Lägg till ett steg",
      "up": "Upp",
      "down": "Ner",
      "yellowRest": "Så här vilar jag (med egna ord)",
      "yellowStep": "Ett litet steg (bara ett)",
      "textPh": "Skriv här",
      "saved": "Sparat ✓"
    }
  }
});
/* ---- /sv ---- */
/* ---- ko: 翻訳 ---- */
TBL.ko = mergeDeep(JSON.parse(JSON.stringify(en)), {
  "app": {
    "name": "안심 순서 - SOYOGI (가칭)",
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
    "note": "쓴 내용은 모두 이 기기 안에만 저장돼요. 어디에도 보내지 않아요.",
    "privacy": "개인정보 처리방침",
    "credit": "앱 개발: 돌봄과 지원 상담소 SOYOGI"
  },
  "screen": {
    "home": {
      "title": "안심 순서 - SOYOGI (가칭)",
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
      "hint": "이곳은 앱 이름을 5번 눌렀을 때만 열려요. 화면을 다시 불러오면 닫혀요(쓴 내용은 남아요).",
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
        "windows": "119(구급)·110(경찰)은 항상 나와요. 다른 창구는 직접 더해 주세요.",
        "steps": "한 단계를 한 줄로. 위에서부터 차례로 나와요.",
        "plan": "한 단계를 한 줄로. '노란 신호일 때' 다음에 나와요.",
        "yellow": "아직 위험하지는 않지만 지쳐 있을 때. 쉬는 방법과, 작은 한 걸음을 하나만."
      },
      "name": "이름",
      "tel": "전화번호",
      "addRow": "추가",
      "del": "지우기",
      "stepPh": "한 단계를 한 줄로",
      "addStep": "단계 추가",
      "up": "위로",
      "down": "아래로",
      "yellowRest": "쉬는 방법(나의 말로)",
      "yellowStep": "작은 한 걸음(하나만)",
      "textPh": "여기에 써요",
      "saved": "저장했어요 ✓"
    }
  }
});
/* ---- /ko ---- */
/* ---- zh: 翻訳 ---- */
TBL.zh = mergeDeep(JSON.parse(JSON.stringify(en)), {
  "app": {
    "name": "安心步骤 - SOYOGI (暂定)",
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
    "note": "写下的内容全部只保存在这台设备里，不会发送到任何地方。",
    "privacy": "隐私政策",
    "credit": "应用开发：照护与支援咨询处 SOYOGI"
  },
  "screen": {
    "home": {
      "title": "安心步骤 - SOYOGI (暂定)",
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
      "hint": "这里只有在点按应用名称 5 次时才会打开。重新加载画面后会关闭(写下的内容会保留)。",
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
      "stepPh": "一个步骤写一行",
      "addStep": "添加步骤",
      "up": "向上",
      "down": "向下",
      "yellowRest": "休息的方式(用自己的话)",
      "yellowStep": "小小的一步(只写一个)",
      "textPh": "在这里写",
      "saved": "已保存 ✓"
    }
  }
});
/* ---- /zh ---- */
/* ---- ar: 翻訳 ---- */
TBL.ar = mergeDeep(JSON.parse(JSON.stringify(en)), {
  "app": {
    "name": "خطوات الطمأنينة - SOYOGI (مسودة)",
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
    "note": "كل ما يُكتب هنا يُحفظ في هذا الجهاز فقط. ولا يُرسل إلى أي مكان.",
    "privacy": "سياسة الخصوصية",
    "credit": "تطوير التطبيق: SOYOGI، خدمة استشارات للرعاية والدعم"
  },
  "screen": {
    "home": {
      "title": "خطوات الطمأنينة - SOYOGI (مسودة)",
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
      "hint": "تُفتح هذه الغرفة فقط عند الضغط على اسم التطبيق 5 مرات. وتُغلق عند إعادة تحميل الشاشة (ما كتبته يبقى محفوظًا).",
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
      "stepPh": "خطوة واحدة في سطر واحد",
      "addStep": "إضافة خطوة",
      "up": "إلى الأعلى",
      "down": "إلى الأسفل",
      "yellowRest": "كيف أرتاح (بكلماتي الخاصة)",
      "yellowStep": "خطوة صغيرة (واحدة فقط)",
      "textPh": "اكتب هنا",
      "saved": "تم الحفظ ✓"
    }
  }
});
/* ---- /ar ---- */
/* 翻訳前の仮置き: de〜ar は en を流用する(翻訳Workflowで各言語を書いたらこの行より上に追加し、ここは残してよい) */
['de','fr','es','it','pt','nl','sv','ko','zh','ar'].forEach(function(l){
  if(!TBL[l]) TBL[l] = JSON.parse(JSON.stringify(en));
});
window.ANSHIN_I18N = TBL;
})();
