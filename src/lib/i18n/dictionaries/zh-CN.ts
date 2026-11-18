import type { Dictionary } from "../types";
import { atelierUi, pendant, top } from "./extra/zh-CN";

// 简体中文（中国大陆）。訳は Jobs の下書き：公開前にネイティブの確認（KORIN_JEWELRY_SPEC.md「未確定」3）
// 表記：实验室培育钻石（合成钻石）
const zhCN: Dictionary = {
  meta: {
    siteName: "KŌRIN Jewelry",
    title: "KŌRIN Jewelry｜实验室培育钻石全定制珠宝",
    description: "KŌRIN Jewelry 是以实验室培育钻石（合成钻石）为主，并可选择珍珠与彩色宝石的全定制珠宝品牌。",
  },
  nav: {
    atelier: "工作室",
    consult: "咨询",
    language: "语言",
    home: "首页",
  },
  brand: {
    definition: "KŌRIN Jewelry 是以实验室培育钻石（合成钻石）为主，并可选择珍珠与彩色宝石的全定制珠宝品牌。",
    disclosure: "※本店所有钻石均为实验室培育钻石（合成钻石），并非天然钻石。",
    freeConsultation: "设计草图与报价，首次咨询免费。",
  },
  home: {
    heroTagline: "让沉睡在保险箱里、价值千万日元的光芒，走进日常。",
    enterAtelier: "进入工作室",
  },
  atelier: {
    title: "工作室",
    lead: "从宝石、形状、金属，到佩戴的场合。您的选择将生成规格书，可直接用于咨询。",
    previewLabel: "预览",
    specIdLabel: "规格书编号",
    sections: {
      category: "品类",
      piercePlacement: "穿孔位置",
      stoneKind: "宝石",
      pearl: "珍珠种类",
      colorStone: "彩色宝石种类",
      shape: "形状",
      metal: "金属",
      bodyType: "体型・骨架",
      skinTone: "肤色",
      attire: "服装・场合",
    },
    savedAt: "已于 {time} 自动保存",
    notSavedYet: "您的选择会自动保存在此设备上。",
    issueSpec: "生成规格书",
    copySpec: "复制规格书",
    copied: "已复制",
    reset: "重新选择",
  },
  contact: {
    heading: "咨询",
    viaLine: "通过 LINE 咨询",
    viaInstagram: "通过 Instagram 私信咨询",
    viaEmail: "通过电子邮件咨询",
    viaWhatsApp: "通过 WhatsApp 咨询",
    viaWeChat: "通过微信咨询",
    weChatInstruction: "请添加微信号「{id}」，并发送您复制的规格书。",
    emailSubject: "全定制咨询（{id}）",
  },
  top,
  atelierUi,
  spec: {
    heading: "KŌRIN Jewelry 规格书",
    idLabel: "规格书编号",
    issuedLabel: "生成日期",
    closing: "我想按此内容咨询全定制。",
  },
  care: {
    "title": "KŌRIN 终身保养",
    "lead": "交付之后，为了让您长久佩戴而设的保修与保养规定。",
    "items": {
      "handover": {
        "heading": "送修与取件",
        "body": "请先与我们联系，再以带保险与追踪的寄送方式，送至日本的指定维修窗口。仅限东京・大阪地区，可提前预约，由礼宾专员直接收件与交付。"
      },
      "initialDefect": {
        "heading": "初期不良",
        "body": "交付后14天内发现的制造缺陷，含往返运费，全部免费维修或更换。"
      },
      "basicCare": {
        "heading": "基本保养（终身免费）",
        "body": "超声波清洗、轻度抛光翻新、镶嵌松动检查，终身免收技术费。往返运费及从海外寄送时的清关手续费由顾客承担。"
      },
      "resizing": {
        "heading": "戒圈调整",
        "body": "购买后1年内，日本戒圈约±2号以内且结构上可调整者，首次免费（往返运费由顾客承担）。第2年起按实际费用报价。"
      },
      "repair": {
        "heading": "损坏维修",
        "body": "因过失或撞击造成的损坏、链子断裂，由合作工坊以合理的实际费用报价。"
      }
    }
  },
  legal: {
    "title": "依据日本《特定商业交易法》的标示",
    "labels": {
      "seller": "销售商",
      "representative": "运营负责人",
      "address": "地址",
      "phone": "电话",
      "email": "电子邮箱",
      "price": "销售价格",
      "extraCosts": "商品价款以外的费用",
      "payment": "付款方式",
      "paymentTiming": "付款时间",
      "delivery": "交货时间",
      "returns": "退货・取消"
    },
    "representativeTitle": "代表董事",
    "disclosedOnRequest": "如有请求，将及时披露。",
    "values": {
      "price": "完全按订单生产，按规格单独报价。金额（含税）显示在付款页面。",
      "extraCosts": "运费（报价时说明）。寄送至日本以外地区时，可能产生关税、进口税及清关手续费，由顾客承担。",
      "payment": "通过 BASE 或 Stripe 付款页面付款（信用卡及各付款页面提供的方式）。",
      "paymentTiming": "同意规格与报价后，请在付款页面付款。确认付款后开始制作。",
      "delivery": "完全按订单生产，确认付款后约4～8周交货。",
      "returns": "因属按订单生产的商品，付款后不接受取消及因顾客个人原因的退货。初期不良请在到货后14天内联系，将免费处理。"
    }
  },
  options: {
    category: { ring: "戒指", pendant, necklace: "项链", pierce: "穿孔饰品", bracelet: "手链" },
    piercePlacement: { ear: "耳", nose: "鼻", navel: "肚脐" },
    stoneKind: { diamond: "实验室培育钻石", pearl: "珍珠", colorStone: "彩色宝石" },
    pearl: {
      akoya: "Akoya 珍珠",
      southSeaWhite: "南洋珍珠（白色）",
      southSeaGold: "南洋珍珠（金色）",
      tahitianBlack: "大溪地黑珍珠",
      baroque: "巴洛克珍珠",
    },
    colorStone: { blueSapphire: "蓝宝石", pinkSapphire: "粉色蓝宝石", ruby: "红宝石", emerald: "祖母绿", tanzanite: "坦桑石" },
    shape: {
      round: "圆形",
      oval: "椭圆形",
      pear: "梨形",
      emerald: "祖母绿切割",
      marquise: "马眼形",
      radiant: "雷迪恩切割",
      cushion: "垫形",
      elongatedCushion: "长垫形",
      princess: "公主方形",
      asscher: "阿斯切切割",
      pearlRound: "圆形",
      pearlDrop: "水滴形",
      pearlBaroque: "巴洛克",
    },
    metal: {
      platinum: "铂金",
      k18Yellow: "18K 黄金",
      k18Pink: "18K 玫瑰金",
      k18White: "18K 白金",
      k14Yellow: "14K 黄金",
      k14Pink: "14K 玫瑰金",
      k14White: "14K 白金",
    },
    bodyType: { slender: "纤细", natural: "自然", curvy: "曲线" },
    skinTone: { fair: "白皙", olive: "橄榄", deep: "深色" },
    attire: {
      gym: "健身服",
      sweat: "卫衣",
      yogaPilates: "瑜伽・普拉提",
      tankTop: "背心",
      sleeveless: "无袖",
      wedding: "婚礼",
      party: "派对",
      nightDress: "晚礼服",
      suit: "西装",
      morning: "晨礼服",
    },
  },
};

export default zhCN;
