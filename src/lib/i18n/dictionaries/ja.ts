import type { Dictionary } from "../types";
import { atelierUi, pendant, top } from "./extra/ja";

// 日本語（基準）。表記の決まり：初出は「合成ダイヤモンド（ラボグロウンダイヤモンド）」、「ダイヤ」と略さない
const ja: Dictionary = {
  meta: {
    siteName: "KŌRIN Jewelry",
    title: "KŌRIN Jewelry｜合成ダイヤモンドのフルオーダージュエリー",
    description:
      "KŌRIN Jewelry（コーリン ジュエリー）は、合成ダイヤモンド（ラボグロウンダイヤモンド）を中心に、真珠・カラーストーンも選べるフルオーダージュエリーブランドです。",
  },
  nav: {
    atelier: "アトリエ",
    consult: "ご相談",
    language: "言語",
    home: "トップ",
  },
  brand: {
    definition:
      "KŌRIN Jewelryは、合成ダイヤモンド（ラボグロウンダイヤモンド）を中心に、真珠・カラーストーンも選べるフルオーダージュエリーブランドです。",
    disclosure: "※当店のダイヤモンドはすべて合成ダイヤモンドです（天然ではありません）",
    freeConsultation: "まずはデザイン画・お見積もりを無料相談",
  },
  home: {
    heroTagline: "金庫に眠る、1000万円の輝きを日常に。",
    enterAtelier: "アトリエへ",
  },
  atelier: {
    title: "アトリエ",
    lead: "石・形・地金、身につける場面まで。選んだ内容は仕様書になり、そのままご相談に引き継げます。",
    previewLabel: "プレビュー",
    specIdLabel: "仕様書ID",
    sections: {
      category: "アイテム",
      piercePlacement: "ピアスの位置",
      stoneKind: "石",
      pearl: "真珠の種類",
      colorStone: "カラーストーンの種類",
      shape: "形",
      metal: "地金",
      bodyType: "体型・骨格",
      skinTone: "肌のトーン",
      attire: "服装・シーン",
    },
    savedAt: "{time} に自動保存しました",
    notSavedYet: "選んだ内容はこの端末に自動で保存されます",
    issueSpec: "仕様書を作成",
    copySpec: "仕様書をコピー",
    copied: "コピーしました",
    reset: "最初から選び直す",
  },
  contact: {
    heading: "ご相談",
    viaLine: "公式LINEで相談",
    viaInstagram: "InstagramのDMで相談",
    viaEmail: "メールで相談",
    viaWhatsApp: "WhatsAppで相談",
    viaWeChat: "WeChatで相談",
    weChatInstruction: "WeChat ID「{id}」を追加し、コピーした仕様書を送ってください。",
    emailSubject: "フルオーダーのご相談（{id}）",
  },
  top,
  atelierUi,
  spec: {
    heading: "KŌRIN Jewelry 仕様書",
    idLabel: "仕様書ID",
    issuedLabel: "作成日",
    closing: "この内容でフルオーダーの相談をしたいです。",
  },
  care: {
    "title": "KŌRIN ライフタイム・ケア",
    "lead": "お届けした後も長く身に着けていただくための、保証とお手入れの決まりです。",
    "items": {
      "handover": {
        "heading": "お預かりとお渡し",
        "body": "事前にご連絡のうえ、日本の所定のメンテナンス窓口へ、保険・追跡付きの配送でお送りください。東京・大阪エリアに限り、事前のご予約でコンシェルジュが直接お預かり・お渡しに伺うこともできます。"
      },
      "initialDefect": {
        "heading": "初期不良",
        "body": "お届けから14日以内に見つかった製造上の欠陥は、往復の送料を含めて無償で修理または交換します。"
      },
      "basicCare": {
        "heading": "基本のお手入れ（永年無料）",
        "body": "超音波クリーニング、軽い新品仕上げ、石留めの緩みの点検は、技術料を永年無料で承ります。往復の送料と、海外からお送りいただく場合の通関手数料はお客様のご負担です。"
      },
      "resizing": {
        "heading": "リングのサイズ直し",
        "body": "ご購入から1年以内は、±2号程度で構造上お直しできるものに限り、初回を無償で承ります（往復の送料はお客様のご負担）。2年目以降は実費でお見積もりします。"
      },
      "repair": {
        "heading": "破損の修理",
        "body": "過失や衝撃による破損、チェーン切れは、提携工房の適正な実費でお見積もりします。"
      }
    }
  },
  legal: {
    "title": "特定商取引法に基づく表記",
    "labels": {
      "seller": "販売業者",
      "representative": "運営統括責任者",
      "address": "所在地",
      "phone": "電話番号",
      "email": "メールアドレス",
      "price": "販売価格",
      "extraCosts": "商品代金以外の必要料金",
      "payment": "お支払い方法",
      "paymentTiming": "お支払いの時期",
      "delivery": "引渡しの時期",
      "returns": "返品・キャンセル"
    },
    "representativeTitle": "代表取締役",
    "disclosedOnRequest": "ご請求があれば遅滞なく開示します。",
    "values": {
      "price": "完全受注生産のため、仕様ごとに個別にお見積もりします。金額は決済ページに税込で表示します。",
      "extraCosts": "配送料（お見積もりの際にご案内します）。日本国外へのお届けは、関税・輸入時の税金・通関手数料がかかる場合があり、お客様のご負担となります。",
      "payment": "BASEまたはStripeの決済ページでのお支払い（クレジットカードほか、各決済ページで選べる方法）。",
      "paymentTiming": "仕様とお見積もりにご同意いただいた後、決済ページでお支払いください。決済の確認後に製作を始めます。",
      "delivery": "完全受注生産のため、決済の確認後4〜8週間前後でお届けします。",
      "returns": "受注生産品のため、決済後のキャンセルとお客様のご都合による返品はお受けできません。初期不良は、到着後14日以内にご連絡いただければ無償で対応します。"
    }
  },
  options: {
    category: { ring: "リング", pendant, necklace: "ネックレス", pierce: "ピアス", bracelet: "ブレスレット" },
    piercePlacement: { ear: "耳", nose: "鼻", navel: "へそ" },
    stoneKind: { diamond: "合成ダイヤモンド", pearl: "真珠", colorStone: "カラーストーン" },
    pearl: {
      akoya: "アコヤ真珠",
      southSeaWhite: "白蝶真珠（ホワイト）",
      southSeaGold: "白蝶真珠（ゴールド）",
      tahitianBlack: "黒蝶真珠",
      baroque: "バロック真珠",
    },
    colorStone: { blueSapphire: "ブルーサファイア", pinkSapphire: "ピンクサファイア", ruby: "ルビー", emerald: "エメラルド", tanzanite: "タンザナイト" },
    shape: {
      round: "ラウンド",
      oval: "オーバル",
      pear: "ペアシェイプ",
      emerald: "エメラルドカット",
      marquise: "マーキース",
      radiant: "ラディアント",
      cushion: "クッション",
      elongatedCushion: "エロンゲーテッド・クッション",
      princess: "プリンセス",
      asscher: "アッシャー",
      pearlRound: "ラウンド",
      pearlDrop: "ドロップ",
      pearlBaroque: "バロック",
    },
    metal: {
      platinum: "プラチナ",
      k18Yellow: "K18 イエローゴールド",
      k18Pink: "K18 ピンクゴールド",
      k18White: "K18 ホワイトゴールド",
      k14Yellow: "K14 イエローゴールド",
      k14Pink: "K14 ピンクゴールド",
      k14White: "K14 ホワイトゴールド",
    },
    bodyType: { slender: "スレンダー", natural: "ナチュラル", curvy: "カーヴィー" },
    skinTone: { fair: "明るい肌", olive: "オリーブ", deep: "深みのある肌" },
    attire: {
      gym: "ジムウェア",
      sweat: "スウェット",
      yogaPilates: "ヨガ・ピラティス",
      tankTop: "タンクトップ",
      sleeveless: "ノースリーブ",
      wedding: "ウェディング",
      party: "パーティ",
      nightDress: "ナイトドレス",
      suit: "スーツ",
      morning: "モーニング",
    },
  },
};

export default ja;
