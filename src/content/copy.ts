/**
 * Every visible string on the landing page, in all five languages.
 *
 * Every translation ships in the one static export and CSS picks between them
 * (see the head script in layout.tsx) — the same mechanism the legal pages
 * already use in public/terms.html, kept consistent on purpose.
 *
 * The Chinese is written for Taiwan, not translated line by line: it keeps the
 * English version's habit of needling you about staying in bed. Task names
 * match the ones already established in terms.html and privacy.html
 * (深蹲, 揮拳, 慢跑, 刷牙, 拍照比對) so the site and the App agree.
 *
 * The Japanese deliberately pulls the needling BACK a notch. The English and
 * Chinese taunt the reader outright ("you can't argue with a bear"); Japanese
 * marketing copy that talks down to the reader that hard reads as rude rather
 * than funny, so the jokes stay and the accusations soften. Task names match
 * the App's own ja strings in src/settings/i18n.ts (スクワット, パンチ,
 * その場ジョギング, 歯みがき) so the site and the App agree here too.
 *
 * The Simplified Chinese is NOT a glyph conversion of the Traditional. Mainland
 * UI and marketing vocabulary differs where the characters do not (订阅, 视频,
 * 手机), and a converted page reads as a Taiwanese one someone ran through a
 * tool. Its needling sits between the Traditional and the Japanese: the jokes
 * land, but the copy stops short of the Traditional's outright accusations.
 *
 * The Korean is 해요체 — the warm-but-polite register Korean product pages
 * actually use; 합니다체 would read like a bank, and 반말 like an insult from a
 * stranger. Task names match the App's own ko strings (스쿼트, 펀치, 제자리
 * 조깅, 양치).
 */

/* Artwork is shared between languages, so the filename lives outside the
   per-language copy and the alt text travels with each translation. */
export const taskArt = {
  squat: "bear-squat-6fps.webp",
  punch: "bear-punch-6fps.webp",
  walk: "bear-walk-6fps.webp",
} as const;

type Task = { alt: string; title: string; body: string };
type Item = { title: string; body: string };

/* The language codes the site ships, in the order the switcher shows them.
   Everything else — the CSS classes, the head script, the switcher pills — is
   derived from this, so adding a fourth language is a matter of extending this
   list and writing the strings. */
export const LANGS = ["en", "zh", "zhHans", "ja", "ko"] as const;
export type Lang = (typeof LANGS)[number];

export type Copy = {
  htmlLang: string;
  nav: Record<Lang, string>;
  hero: {
    badge: string;
    headlineLead: string;
    headlineAccent: string;
    lede: string;
    cta: string;
    heroAlt: string;
  };
  problem: { heading: string; left: string; rightBefore: string; rightStrong: string; rightAfter: string };
  tasks: [Task, Task, Task];
  otherTasksHeading: string;
  otherTasks: Item[];
  friends: { title: string; body: string };
  guarantees: [Item, Item];
  closing: { line: string; body: string; cta: string };
  footer: { rights: string; privacy: string; terms: string };
  notFound: { heading: string; bodyBefore: string; link: string; bodyAfter: string };
  invite: {
    intro: string;
    download: string;
    copy: string;
    copied: string;
    outro: string;
  };
};

/* The switcher shows every language in its OWN name, identically in all five
   translations — someone who lands on the Japanese page and wants English is
   looking for the word "English", not for その言語の日本語名. So this object is
   shared rather than repeated per translation.

   The two Chinese entries name their script rather than both saying 中文: with
   only one of them the bare word was unambiguous, and with both it stops being
   a choice at all. */
const nav: Record<Lang, string> = {
  en: "English",
  zh: "繁體中文",
  zhHans: "简体中文",
  ja: "日本語",
  ko: "한국어",
};

const en: Copy = {
  htmlLang: "en",
  nav,
  hero: {
    badge: "Out now on iOS",
    headlineLead: "Every other alarm can be turned off",
    headlineAccent: "in your sleep.",
    lede: "Wake cub keeps ringing until the camera has watched you actually do something.",
    cta: "Download on the App Store",
    heroAlt: "The Wake cub bear throwing punches at the camera",
  },
  problem: {
    heading: "Shake. Tap. Scan a barcode. All of it works lying down.",
    left: "That’s the problem with every “hard to dismiss” alarm: the mission is something your thumb can finish while the rest of you stays asleep. You solve it, you go back to bed, and you oversleep anyway.",
    rightBefore: "Wake cub asks for your ",
    rightStrong: "whole body",
    rightAfter: ", and it uses the camera to check. There is no way to fake a squat from under the duvet.",
  },
  tasks: [
    {
      alt: "The bear dropping into a squat and standing back up",
      title: "Squats",
      body: "The camera tracks your hips and knees through every rep. Go down far enough or it doesn't count. Pick shallow, normal or deep, depending on how much you hate mornings.",
    },
    {
      alt: "The bear throwing alternating punches toward the camera",
      title: "Punches",
      body: "Throw punches at the phone. Each one has to extend and pull back like a real punch. Waving your arm around gets you nothing but a still-ringing alarm.",
    },
    {
      alt: "The bear jogging in place",
      title: "Jogging in place",
      body: "Run on the spot until the timer fills. Stop moving and the timer stops with you, so standing there catching your breath only makes the morning longer.",
    },
  ],
  otherTasksHeading: "Four more ways to get out of bed",
  otherTasks: [
    {
      title: "Brushing your teeth",
      body: "The camera has to see a real toothbrush in your hand.",
    },
    {
      title: "A photo from home",
      body: "Match a spot you chose the night before, so you have to leave the bedroom.",
    },
    { title: "Maths", body: "No camera. For quieter mornings." },
    { title: "Vocabulary", body: "No camera. Answer to stop the ringing." },
  ],
  friends: {
    title: "Set off a friend's alarm",
    body: "Catch a friend still asleep and you can ring their phone yourself and choose the task they have to finish to stop it. Pick squats, and they are doing squats.",
  },
  guarantees: [
    {
      title: "Nothing leaves your phone",
      body: "Pose and object detection run entirely on-device. No frame of video is uploaded, stored, or sent anywhere. The camera is a sensor, not a recorder.",
    },
    {
      title: "Killing the app doesn't help",
      body: "Force-quit it, swipe the notification away, turn the volume down. It keeps coming back. Getting rid of Wake cub is meant to be harder than getting up.",
    },
  ],
  closing: {
    line: "You can't argue with a bear that won't stop shouting.",
    body: "Free to download, with the camera-verified tasks available on subscription.",
    cta: "Download on the App Store",
  },
  footer: { rights: "© 2026 Wake cub", privacy: "Privacy", terms: "Terms" },
  notFound: {
    heading: "This page went back to sleep.",
    bodyBefore: "We couldn't find what you were looking for. ",
    link: "Head back to the front page",
    bodyAfter: ".",
  },
  invite: {
    intro: "A friend invited you to Wake cub. Their friend code:",
    download: "Download on the App Store",
    copy: "Copy code",
    copied: "Copied",
    outro: "Taking you to the App Store. Once installed, open the Friends tab and enter this code.",
  },
};

const zh: Copy = {
  htmlLang: "zh-Hant",
  nav,
  hero: {
    badge: "iOS 版已上架",
    headlineLead: "其他鬧鐘，你閉著眼睛",
    headlineAccent: "就能關掉。",
    lede: "Wake cub 會一直響，直到相機看見你真的起來動了。",
    cta: "從 App Store 下載",
    heroAlt: "Wake cub 小熊對著鏡頭揮拳",
    },
  problem: {
    heading: "搖一搖、點一下、掃條碼，這些你躺著都做得到。",
    left: "這就是那些號稱「關不掉」的鬧鐘的問題：任務用一根手指就能解決，身體其他部分繼續睡。你關掉它、翻身再睡，最後還是遲到。",
    rightBefore: "Wake cub 要的是你的",
    rightStrong: "整個身體",
    rightAfter: "，而且用相機確認。躲在棉被裡可是沒辦法深蹲的。",
  },
  tasks: [
    {
      alt: "小熊蹲下再站起來",
      title: "深蹲",
      body: "相機會盯著你的髖部和膝蓋，一下一下算。蹲得不夠低就不算數。你可以選淺蹲、正常或深蹲，看你有多討厭早上。",
    },
    {
      alt: "小熊對著鏡頭左右揮拳",
      title: "揮拳",
      body: "對著手機出拳。每一拳都要確實推出去再收回來，像真的在打拳。手隨便揮一揮不會有任何進度，鬧鐘只會繼續響。",
    },
    {
      alt: "小熊原地慢跑",
      title: "原地慢跑",
      body: "原地跑到計時條跑滿為止。你一停下來，計時也跟著停，所以站在那邊喘氣只會讓這個早上更漫長。",
    },
  ],
  otherTasksHeading: "另外四種把你挖起來的方式",
  otherTasks: [
    {
      title: "刷牙",
      body: "相機必須真的看到你手上那支牙刷。",
    },
    {
      title: "拍照比對",
      body: "比對你前一晚指定的角落，逼你離開房間。",
    },
    { title: "數學題", body: "不用相機。給想安靜一點的早上。" },
    { title: "單字題", body: "不用相機。答對才能讓它閉嘴。" },
  ],
  friends: {
    title: "叫醒還在睡的朋友",
    body: "好朋友還在賴床？Wake cub 會通知你誰正在賴床，你可以直接讓他的手機響起來，還能指定他要做完什麼任務才關得掉。你選深蹲，他就得做深蹲。",
  },
  guarantees: [
    {
      title: "畫面不會離開你的手機",
      body: "姿勢與物件辨識全部在裝置上運算。沒有任何一格影像會被上傳、儲存或送到任何地方。相機在這裡是感應器，不是錄影機。",
    },
    {
      title: "把 App 關掉也沒用",
      body: "強制關閉、把通知滑掉、把音量轉小，它還是會回來。想擺脫 Wake cub，本來就該比起床還難。",
    },
  ],
  closing: {
    line: "你沒辦法跟一隻一直吼你的熊講道理。",
    body: "免費下載，相機驗證任務採訂閱制。",
    cta: "從 App Store 下載",
  },
  footer: { rights: "© 2026 Wake cub", privacy: "隱私權政策", terms: "使用條款" },
  notFound: {
    heading: "這個頁面又睡著了。",
    bodyBefore: "我們找不到你要的東西。",
    link: "回到首頁",
    bodyAfter: "。",
  },
  invite: {
    intro: "有朋友邀請你加入 Wake cub。他的好友代碼：",
    download: "從 App Store 下載",
    copy: "複製代碼",
    copied: "已複製",
    outro: "正在帶你前往 App Store。安裝完成後，打開「好友」分頁輸入這組代碼。",
  },
};

const zhHans: Copy = {
  htmlLang: "zh-Hans",
  nav,
  hero: {
    badge: "iOS 版已上架",
    headlineLead: "别的闹钟，你闭着眼睛",
    headlineAccent: "就能关掉。",
    lede: "Wake cub 会一直响，直到摄像头看见你真的起来动了。",
    cta: "在 App Store 下载",
    heroAlt: "Wake cub 小熊对着镜头挥拳",
  },
  problem: {
    heading: "摇一摇、点一下、扫条码，这些躺着都能做完。",
    left: "这就是那些号称“关不掉”的闹钟的问题：任务用一根手指就能解决，身体其他部分继续睡。关掉、翻身再睡，最后还是迟到。",
    rightBefore: "Wake cub 要的是你的",
    rightStrong: "整个身体",
    rightAfter: "，而且用摄像头确认。躲在被子里，是没法做深蹲的。",
  },
  tasks: [
    {
      alt: "小熊蹲下再站起来",
      title: "深蹲",
      body: "摄像头会盯着你的髋部和膝盖，一个一个数。蹲得不够低就不算数。深度可以选浅、正常或深，看你有多不想面对早晨。",
    },
    {
      alt: "小熊对着镜头左右挥拳",
      title: "挥拳",
      body: "对着手机出拳。每一拳都要确实打出去再收回来，像真的在打拳。手随便挥两下不会有任何进度，闹钟只会继续响。",
    },
    {
      alt: "小熊原地慢跑",
      title: "原地慢跑",
      body: "原地跑到计时条跑满为止。一停下来，计时也跟着停，所以站在那儿喘气只会让这个早晨更长。",
    },
  ],
  otherTasksHeading: "另外四种把你叫起来的方式",
  otherTasks: [
    {
      title: "刷牙",
      body: "摄像头必须真的看到你手里那支牙刷。",
    },
    {
      title: "拍照比对",
      body: "比对你前一晚指定的角落，让你不得不离开卧室。",
    },
    { title: "算术题", body: "不用摄像头。留给想安静一点的早晨。" },
    { title: "单词题", body: "不用摄像头。答对才能让它停下来。" },
  ],
  friends: {
    title: "叫醒还在睡的朋友",
    body: "朋友还在赖床？Wake cub 会通知你谁正在赖床，你可以直接让他的手机响起来，还能指定他要做完什么任务才关得掉。你选深蹲，他就得做深蹲。",
  },
  guarantees: [
    {
      title: "画面不会离开你的手机",
      body: "姿势与物体识别全部在设备上完成。没有任何一帧画面会被上传、保存或发送到任何地方。摄像头在这里是传感器，不是录像机。",
    },
    {
      title: "把 App 关掉也没用",
      body: "强制退出、把通知划掉、把音量调小，它还是会回来。想摆脱 Wake cub，本来就该比起床更难。",
    },
  ],
  closing: {
    line: "一只不停吼你的熊，是讲不通道理的。",
    body: "免费下载，摄像头验证任务为订阅制。",
    cta: "在 App Store 下载",
  },
  footer: { rights: "© 2026 Wake cub", privacy: "隐私政策", terms: "使用条款" },
  notFound: {
    heading: "这个页面又睡着了。",
    bodyBefore: "我们找不到你要的东西。",
    link: "回到首页",
    bodyAfter: "。",
  },
  invite: {
    intro: "有朋友邀请你加入 Wake cub。他的好友码：",
    download: "在 App Store 下载",
    copy: "复制好友码",
    copied: "已复制",
    outro: "正在带你前往 App Store。安装完成后，打开“好友”页输入这组好友码。",
  },
};

const ja: Copy = {
  htmlLang: "ja",
  nav,
  hero: {
    badge: "iOS版 配信中",
    headlineLead: "ほかの目覚ましは、寝たまま",
    headlineAccent: "止められる。",
    lede: "Wake cub は、あなたが実際に体を動かしたことをカメラが確認するまで鳴り続けます。",
    cta: "App Store でダウンロード",
    heroAlt: "カメラに向かってパンチを繰り出す Wake cub のクマ",
  },
  problem: {
    heading: "振る、タップする、バーコードを読む。全部、寝たままできます。",
    left: "「止めにくい目覚まし」の弱点はここにあります。ミッションは指先だけで片づいてしまい、体はまだ眠ったまま。解除して、二度寝して、結局また寝坊する。",
    rightBefore: "Wake cub が求めるのは",
    rightStrong: "体ぜんぶ",
    rightAfter: "。しかもカメラで確認します。布団の中からスクワットをごまかす方法はありません。",
  },
  tasks: [
    {
      alt: "しゃがんで立ち上がるクマ",
      title: "スクワット",
      body: "カメラが腰と膝を1回ずつ追いかけます。十分に下ろさなければカウントされません。深さは浅め・普通・深めから選べます。朝がどれくらい苦手かに合わせてどうぞ。",
    },
    {
      alt: "カメラに向かって左右のパンチを打つクマ",
      title: "パンチ",
      body: "スマホに向かってパンチ。1発ごとに、しっかり伸ばして引き戻すところまでが1回です。腕を適当に振っても進みません。アラームが鳴り続けるだけです。",
    },
    {
      alt: "その場で駆け足をするクマ",
      title: "その場ジョギング",
      body: "タイマーが満ちるまでその場で走ります。足を止めるとタイマーも止まるので、立ち止まって息を整えるほど朝が長くなります。",
    },
  ],
  otherTasksHeading: "ベッドから出る方法は、あと4つ",
  otherTasks: [
    {
      title: "歯みがき",
      body: "手に持った本物の歯ブラシを、カメラが認識します。",
    },
    {
      title: "指定した場所で撮影",
      body: "前の晩に決めた場所と照合。寝室から出るしかありません。",
    },
    { title: "計算", body: "カメラなし。静かに始めたい朝に。" },
    { title: "単語", body: "カメラなし。正解すると鳴りやみます。" },
  ],
  friends: {
    title: "寝ている友だちのアラームを鳴らす",
    body: "友だちがまだ寝ていると分かったら、その人のスマホを自分で鳴らせます。解除に必要なタスクを選ぶのもあなた。スクワットを選べば、相手はスクワットをすることになります。",
  },
  guarantees: [
    {
      title: "映像は端末から出ません",
      body: "姿勢と物体の認識はすべて端末上で処理されます。映像は1フレームたりともアップロードも保存もされず、どこにも送信されません。カメラはここではセンサーであって、レコーダーではありません。",
    },
    {
      title: "アプリを終了しても無駄です",
      body: "強制終了しても、通知をスワイプで消しても、音量を下げても、また戻ってきます。Wake cub から逃げるより、起きるほうが簡単なように作ってあります。",
    },
  ],
  closing: {
    line: "叫び続けるクマとは、話し合いになりません。",
    body: "ダウンロードは無料。カメラで確認するタスクはサブスクリプションでご利用いただけます。",
    cta: "App Store でダウンロード",
  },
  footer: { rights: "© 2026 Wake cub", privacy: "プライバシー", terms: "利用規約" },
  notFound: {
    heading: "このページは二度寝しました。",
    bodyBefore: "お探しのページが見つかりませんでした。",
    link: "トップページへ戻る",
    bodyAfter: "。",
  },
  invite: {
    intro: "友だちがあなたを Wake cub に招待しました。フレンドコード：",
    download: "App Store でダウンロード",
    copy: "コードをコピー",
    copied: "コピーしました",
    outro: "App Store へ移動します。インストール後、「フレンド」タブでこのコードを入力してください。",
  },
};

const ko: Copy = {
  htmlLang: "ko",
  nav,
  hero: {
    badge: "iOS 출시",
    headlineLead: "다른 알람은 자면서도",
    headlineAccent: "끌 수 있어요.",
    lede: "Wake cub은 카메라가 당신이 실제로 몸을 움직였다고 확인할 때까지 계속 울려요.",
    cta: "App Store에서 다운로드",
    heroAlt: "카메라를 향해 펀치를 날리는 Wake cub 곰",
  },
  problem: {
    heading: "흔들기, 탭하기, 바코드 찍기. 전부 누운 채로 돼요.",
    left: "'끄기 어려운 알람'의 문제가 바로 여기 있어요. 미션이 손가락만으로 끝나서, 몸은 여전히 자고 있죠. 해제하고, 다시 눕고, 결국 또 늦잠을 자요.",
    rightBefore: "Wake cub이 요구하는 건 ",
    rightStrong: "몸 전체",
    rightAfter: "예요. 그것도 카메라로 확인해요. 이불 속에서 스쿼트를 속일 방법은 없어요.",
  },
  tasks: [
    {
      alt: "앉았다 일어서는 곰",
      title: "스쿼트",
      body: "카메라가 골반과 무릎을 한 개씩 따라가며 세요. 충분히 내려가지 않으면 인정되지 않아요. 깊이는 얕게·보통·깊게 중에서 고를 수 있어요. 아침이 얼마나 힘든지에 맞춰서요.",
    },
    {
      alt: "카메라를 향해 좌우로 펀치를 날리는 곰",
      title: "펀치",
      body: "휴대폰을 향해 주먹을 뻗어요. 한 번마다 제대로 뻗고 다시 당겨야 1회로 쳐줘요. 팔만 대충 휘두르면 아무 진전 없이 알람만 계속 울려요.",
    },
    {
      alt: "제자리에서 뛰는 곰",
      title: "제자리 조깅",
      body: "타이머가 다 찰 때까지 제자리에서 달려요. 멈추면 타이머도 같이 멈추니까, 서서 숨 고르는 만큼 아침이 길어질 뿐이에요.",
    },
  ],
  otherTasksHeading: "침대에서 나오는 방법 4가지 더",
  otherTasks: [
    {
      title: "양치",
      body: "손에 든 진짜 칫솔을 카메라가 알아봐야 해요.",
    },
    {
      title: "지정한 곳에서 촬영",
      body: "전날 밤에 정해둔 자리와 맞춰야 해서, 침실에서 나올 수밖에 없어요.",
    },
    { title: "수학", body: "카메라 없이. 조용히 시작하고 싶은 아침에." },
    { title: "단어", body: "카메라 없이. 맞히면 알람이 멈춰요." },
  ],
  friends: {
    title: "자고 있는 친구의 알람 울리기",
    body: "친구가 아직 자고 있으면 Wake cub이 알려줘요. 그 친구의 휴대폰을 직접 울릴 수 있고, 무엇을 해야 알람을 끌 수 있을지도 당신이 정해요. 스쿼트를 고르면, 친구는 스쿼트를 하게 돼요.",
  },
  guarantees: [
    {
      title: "영상은 휴대폰 밖으로 나가지 않아요",
      body: "자세와 사물 인식은 전부 기기 안에서 처리돼요. 영상은 단 한 프레임도 업로드되거나 저장되지 않고, 어디로도 전송되지 않아요. 여기서 카메라는 센서이지 녹화기가 아니에요.",
    },
    {
      title: "앱을 종료해도 소용없어요",
      body: "강제 종료해도, 알림을 밀어서 지워도, 음량을 낮춰도 다시 돌아와요. Wake cub에서 벗어나는 것보다 일어나는 게 더 쉽도록 만들었으니까요.",
    },
  ],
  closing: {
    line: "계속 소리치는 곰과는 대화가 안 통해요.",
    body: "다운로드는 무료이고, 카메라로 확인하는 미션은 구독으로 이용할 수 있어요.",
    cta: "App Store에서 다운로드",
  },
  footer: { rights: "© 2026 Wake cub", privacy: "개인정보", terms: "이용약관" },
  notFound: {
    heading: "이 페이지는 다시 잠들었어요.",
    bodyBefore: "찾으시는 페이지를 찾을 수 없었어요. ",
    link: "첫 페이지로 돌아가기",
    bodyAfter: ".",
  },
  invite: {
    intro: "친구가 당신을 Wake cub에 초대했어요. 친구 코드:",
    download: "App Store에서 다운로드",
    copy: "코드 복사",
    copied: "복사했어요",
    outro: "App Store로 이동할게요. 설치한 뒤 '친구' 탭에서 이 코드를 입력하세요.",
  },
};

export const copy = { en, zh, zhHans, ja, ko } as const;
