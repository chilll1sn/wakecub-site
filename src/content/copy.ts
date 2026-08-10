/**
 * Every visible string on the landing page, in both languages.
 *
 * Both translations ship in the one static export and CSS picks between them
 * (see the head script in layout.tsx) — the same mechanism the legal pages
 * already use in public/terms.html, kept consistent on purpose.
 *
 * The Chinese is written for Taiwan, not translated line by line: it keeps the
 * English version's habit of needling you about staying in bed. Task names
 * match the ones already established in terms.html and privacy.html
 * (深蹲, 揮拳, 慢跑, 刷牙, 拍照比對) so the site and the App agree.
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

export type Copy = {
  htmlLang: string;
  nav: { en: string; zh: string };
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

const en: Copy = {
  htmlLang: "en",
  nav: { en: "English", zh: "中文" },
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
  nav: { en: "English", zh: "中文" },
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
    rightAfter: "，而且用相機確認。躲在棉被裡是深蹲不出來的。",
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
    body: "抓到朋友還在睡，你可以直接讓他的手機響，還能指定他要做完什麼任務才關得掉。你選深蹲，他就得做深蹲。",
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

export const copy = { en, zh } as const;
