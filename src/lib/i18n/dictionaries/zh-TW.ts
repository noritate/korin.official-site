import type { Dictionary } from "../types";
import { atelierUi, pendant, top } from "./extra/zh-TW";

// 繁體中文（台灣）。訳は Jobs の下書き：公開前にネイティブの確認（KORIN_JEWELRY_SPEC.md「未確定」3）
// 表記：實驗室培育鑽石（合成鑽石）
const zhTW: Dictionary = {
  meta: {
    siteName: "KŌRIN Jewelry",
    title: "KŌRIN Jewelry｜實驗室培育鑽石全客製珠寶",
    description: "KŌRIN Jewelry 是以實驗室培育鑽石（合成鑽石）為主，並可選擇珍珠與彩色寶石的全客製珠寶品牌。",
  },
  nav: {
    atelier: "工作室",
    consult: "諮詢",
    language: "語言",
    home: "首頁",
  },
  brand: {
    definition: "KŌRIN Jewelry 是以實驗室培育鑽石（合成鑽石）為主，並可選擇珍珠與彩色寶石的全客製珠寶品牌。",
    disclosure: "※本店所有鑽石皆為實驗室培育鑽石（合成鑽石），並非天然鑽石。",
    freeConsultation: "設計草圖與報價，首次諮詢免費。",
  },
  home: {
    heroTagline: "讓沉睡於保險箱、價值千萬日圓的光芒，走進日常。",
    enterAtelier: "進入工作室",
  },
  atelier: {
    title: "工作室",
    lead: "從寶石、形狀、金屬，到配戴的場合。您的選擇將成為規格書，可直接帶入諮詢。",
    previewLabel: "預覽",
    specIdLabel: "規格書編號",
    sections: {
      category: "品項",
      piercePlacement: "穿孔位置",
      stoneKind: "寶石",
      pearl: "珍珠種類",
      colorStone: "彩色寶石種類",
      shape: "形狀",
      metal: "金屬",
      bodyType: "體型・骨架",
      skinTone: "膚色",
      attire: "服裝・場合",
    },
    savedAt: "已於 {time} 自動儲存",
    notSavedYet: "您的選擇會自動儲存在此裝置上。",
    issueSpec: "建立規格書",
    copySpec: "複製規格書",
    copied: "已複製",
    reset: "重新選擇",
  },
  contact: {
    heading: "諮詢",
    viaLine: "透過 LINE 諮詢",
    viaInstagram: "透過 Instagram 私訊諮詢",
    viaEmail: "透過電子郵件諮詢",
    viaWhatsApp: "透過 WhatsApp 諮詢",
    viaWeChat: "透過微信諮詢",
    weChatInstruction: "請加入微信 ID「{id}」，並傳送您複製的規格書。",
    emailSubject: "全客製諮詢（{id}）",
  },
  top,
  atelierUi,
  spec: {
    heading: "KŌRIN Jewelry 規格書",
    idLabel: "規格書編號",
    issuedLabel: "建立日期",
    closing: "我想以此內容諮詢全客製。",
  },
  care: {
    "title": "KŌRIN 終身保養",
    "lead": "交付之後，為了讓您長久配戴而設的保固與保養規定。",
    "items": {
      "handover": {
        "heading": "送修與取件",
        "body": "請先與我們聯絡，再以附保險與追蹤的寄送方式，送至日本的指定維修窗口。僅限東京・大阪地區，可事先預約，由禮賓專員直接收件與交付。"
      },
      "initialDefect": {
        "heading": "初期不良",
        "body": "交付後14天內發現的製造瑕疵，含往返運費，全部免費維修或更換。"
      },
      "basicCare": {
        "heading": "基本保養（終身免費）",
        "body": "超音波清洗、輕度拋光翻新、鑲嵌鬆動檢查，終身免收技術費。往返運費及自海外寄送時的通關手續費由顧客負擔。"
      },
      "resizing": {
        "heading": "戒圍調整",
        "body": "購買後1年內，日本戒圍約±2號以內且結構上可調整者，首次免費（往返運費由顧客負擔）。第2年起依實際費用報價。"
      },
      "repair": {
        "heading": "損壞維修",
        "body": "因過失或撞擊造成的損壞、鍊子斷裂，由合作工坊以合理的實際費用報價。"
      }
    }
  },
  legal: {
    "title": "依日本《特定商業交易法》之標示",
    "labels": {
      "seller": "銷售業者",
      "representative": "營運負責人",
      "address": "地址",
      "phone": "電話",
      "email": "電子郵件",
      "price": "銷售價格",
      "extraCosts": "商品價款以外的費用",
      "payment": "付款方式",
      "paymentTiming": "付款時間",
      "delivery": "交貨時間",
      "returns": "退貨・取消"
    },
    "representativeTitle": "代表董事",
    "disclosedOnRequest": "如有請求，將立即揭示。",
    "values": {
      "price": "完全接單生產，依規格個別報價。金額（含稅）顯示於付款頁面。",
      "extraCosts": "運費（於報價時說明）。寄送至日本以外地區時，可能產生關稅、進口稅及通關手續費，由顧客負擔。",
      "payment": "透過 BASE 或 Stripe 付款頁面付款（信用卡及各付款頁面提供的方式）。",
      "paymentTiming": "同意規格與報價後，請於付款頁面付款。確認付款後開始製作。",
      "delivery": "完全接單生產，確認付款後約4～8週交貨。",
      "returns": "因屬接單生產品，付款後不接受取消及因顧客個人因素的退貨。初期不良請於到貨後14天內聯絡，將免費處理。"
    }
  },
  options: {
    category: { ring: "戒指", pendant, necklace: "項鍊", pierce: "穿孔飾品", bracelet: "手鍊" },
    piercePlacement: { ear: "耳", nose: "鼻", navel: "肚臍" },
    stoneKind: { diamond: "實驗室培育鑽石", pearl: "珍珠", colorStone: "彩色寶石" },
    pearl: {
      akoya: "Akoya 珍珠",
      southSeaWhite: "南洋珍珠（白色）",
      southSeaGold: "南洋珍珠（金色）",
      tahitianBlack: "大溪地黑珍珠",
      baroque: "巴洛克珍珠",
    },
    colorStone: { blueSapphire: "藍寶石", pinkSapphire: "粉紅藍寶石", ruby: "紅寶石", emerald: "祖母綠", tanzanite: "坦桑石" },
    shape: {
      round: "圓形",
      oval: "橢圓形",
      pear: "梨形",
      emerald: "祖母綠切割",
      marquise: "馬眼形",
      radiant: "雷地恩切割",
      cushion: "墊形",
      elongatedCushion: "長墊形",
      princess: "公主方形",
      asscher: "阿斯切切割",
      pearlRound: "圓形",
      pearlDrop: "水滴形",
      pearlBaroque: "巴洛克",
    },
    metal: {
      platinum: "鉑金",
      k18Yellow: "18K 黃金",
      k18Pink: "18K 玫瑰金",
      k18White: "18K 白金",
      k14Yellow: "14K 黃金",
      k14Pink: "14K 玫瑰金",
      k14White: "14K 白金",
    },
    bodyType: { slender: "纖細", natural: "自然", curvy: "曲線" },
    skinTone: { fair: "白皙", olive: "橄欖", deep: "深色" },
    attire: {
      gym: "健身服",
      sweat: "運動衫",
      yogaPilates: "瑜伽・皮拉提斯",
      tankTop: "背心",
      sleeveless: "無袖",
      wedding: "婚禮",
      party: "派對",
      nightDress: "晚禮服",
      suit: "西裝",
      morning: "晨禮服",
    },
  },
};

export default zhTW;
