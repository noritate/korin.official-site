import type { Dictionary } from "../types";
import { atelierUi, pendant, top } from "./extra/ko";

// 한국어. 訳は Jobs の下書き：公開前にネイティブの確認（KORIN_JEWELRY_SPEC.md「未確定」3）
// 表記：합성 다이아몬드(실험실 배양 다이아몬드)。「랩그로운」は英語の lab-grown の音写なので使わない
const ko: Dictionary = {
  meta: {
    siteName: "KŌRIN Jewelry",
    title: "KŌRIN Jewelry｜합성 다이아몬드 풀오더 주얼리",
    description:
      "KŌRIN Jewelry는 합성 다이아몬드(실험실 배양 다이아몬드)를 중심으로 진주와 컬러 스톤도 선택할 수 있는 풀오더 주얼리 브랜드입니다.",
  },
  nav: {
    atelier: "아틀리에",
    consult: "상담",
    language: "언어",
    home: "홈",
  },
  brand: {
    definition:
      "KŌRIN Jewelry는 합성 다이아몬드(실험실 배양 다이아몬드)를 중심으로 진주와 컬러 스톤도 선택할 수 있는 풀오더 주얼리 브랜드입니다.",
    disclosure: "※당사의 다이아몬드는 모두 합성 다이아몬드(실험실 배양 다이아몬드)이며, 천연 다이아몬드가 아닙니다.",
    freeConsultation: "디자인 스케치와 견적 상담은 처음 무료입니다.",
  },
  home: {
    heroTagline: "금고 속에 잠든 1,000만 엔의 빛을, 일상으로.",
    enterAtelier: "아틀리에로",
  },
  atelier: {
    title: "아틀리에",
    lead: "보석, 형태, 금속부터 착용할 장면까지. 선택한 내용은 사양서가 되어 그대로 상담으로 이어집니다.",
    previewLabel: "미리보기",
    specIdLabel: "사양서 ID",
    sections: {
      category: "아이템",
      piercePlacement: "피어싱 위치",
      stoneKind: "보석",
      pearl: "진주 종류",
      colorStone: "컬러 스톤 종류",
      shape: "형태",
      metal: "금속",
      bodyType: "체형・골격",
      skinTone: "피부 톤",
      attire: "복장・장면",
    },
    savedAt: "{time}에 자동 저장되었습니다",
    notSavedYet: "선택한 내용은 이 기기에 자동으로 저장됩니다.",
    issueSpec: "사양서 만들기",
    copySpec: "사양서 복사",
    copied: "복사했습니다",
    reset: "처음부터 다시 선택",
  },
  contact: {
    heading: "상담",
    viaLine: "LINE으로 상담",
    viaInstagram: "Instagram DM으로 상담",
    viaEmail: "이메일로 상담",
    viaWhatsApp: "WhatsApp으로 상담",
    viaWeChat: "WeChat으로 상담",
    weChatInstruction: "WeChat ID \"{id}\"를 추가하고 복사한 사양서를 보내 주세요.",
    emailSubject: "풀오더 상담({id})",
  },
  top,
  atelierUi,
  spec: {
    heading: "KŌRIN Jewelry 사양서",
    idLabel: "사양서 ID",
    issuedLabel: "작성일",
    closing: "이 내용으로 풀오더 상담을 하고 싶습니다.",
  },
  care: {
    "title": "KŌRIN 라이프타임 케어",
    "lead": "전달 후에도 오래 착용하실 수 있도록 마련한 보증과 관리 규정입니다.",
    "items": {
      "handover": {
        "heading": "맡기기와 수령",
        "body": "사전에 연락하신 뒤, 보험・추적이 가능한 배송으로 일본의 지정 메인터넌스 창구에 보내 주세요. 도쿄・오사카 지역에 한해 사전 예약 시 컨시어지가 직접 맡아 드리고 전달해 드립니다."
      },
      "initialDefect": {
        "heading": "초기 불량",
        "body": "전달 후 14일 이내에 발견된 제조상의 결함은 왕복 배송비를 포함해 무상으로 수리 또는 교환합니다."
      },
      "basicCare": {
        "heading": "기본 케어(평생 무료)",
        "body": "초음파 세척, 가벼운 새 제품 마감, 스톤 세팅 풀림 점검은 기술료가 평생 무료입니다. 왕복 배송비와 해외에서 보내실 경우의 통관 수수료는 고객 부담입니다."
      },
      "resizing": {
        "heading": "반지 사이즈 조정",
        "body": "구입 후 1년 이내, 일본 호수 기준 ±2호 정도로 구조상 가능한 경우 첫 1회는 무상입니다(왕복 배송비는 고객 부담). 2년 차부터는 실비로 견적을 드립니다."
      },
      "repair": {
        "heading": "파손 수리",
        "body": "과실이나 충격으로 인한 파손, 체인 끊어짐은 제휴 공방의 적정 실비로 견적을 드립니다."
      }
    }
  },
  legal: {
    "title": "일본 특정상거래법에 따른 표기",
    "labels": {
      "seller": "판매업자",
      "representative": "운영 총괄 책임자",
      "address": "소재지",
      "phone": "전화번호",
      "email": "이메일",
      "price": "판매 가격",
      "extraCosts": "상품 대금 외 필요 요금",
      "payment": "결제 방법",
      "paymentTiming": "결제 시기",
      "delivery": "인도 시기",
      "returns": "반품・취소"
    },
    "representativeTitle": "대표이사",
    "disclosedOnRequest": "요청이 있으면 지체 없이 공개합니다.",
    "values": {
      "price": "완전 주문 제작이므로 사양별로 개별 견적을 드립니다. 금액은 결제 페이지에 세금 포함으로 표시됩니다.",
      "extraCosts": "배송비(견적 시 안내). 일본 외 지역으로 배송할 경우 관세・수입 세금・통관 수수료가 발생할 수 있으며 고객 부담입니다.",
      "payment": "BASE 또는 Stripe 결제 페이지에서 결제(신용카드 등 각 결제 페이지에서 선택할 수 있는 방법).",
      "paymentTiming": "사양과 견적에 동의하신 후 결제 페이지에서 결제해 주세요. 결제 확인 후 제작을 시작합니다.",
      "delivery": "완전 주문 제작이므로 결제 확인 후 약 4~8주 후에 전달합니다.",
      "returns": "주문 제작품이므로 결제 후 취소 및 고객 사정에 의한 반품은 받지 않습니다. 초기 불량은 도착 후 14일 이내에 연락 주시면 무상으로 대응합니다."
    }
  },
  options: {
    category: { ring: "반지", pendant, necklace: "목걸이", pierce: "피어싱", bracelet: "팔찌" },
    piercePlacement: { ear: "귀", nose: "코", navel: "배꼽" },
    stoneKind: { diamond: "합성 다이아몬드", pearl: "진주", colorStone: "컬러 스톤" },
    pearl: {
      akoya: "아코야 진주",
      southSeaWhite: "남양 진주(화이트)",
      southSeaGold: "남양 진주(골드)",
      tahitianBlack: "타히티 흑진주",
      baroque: "바로크 진주",
    },
    colorStone: { blueSapphire: "블루 사파이어", pinkSapphire: "핑크 사파이어", ruby: "루비", emerald: "에메랄드", tanzanite: "탄자나이트" },
    shape: {
      round: "라운드",
      oval: "오벌",
      pear: "페어",
      emerald: "에메랄드 컷",
      marquise: "마키즈",
      radiant: "래디언트",
      cushion: "쿠션",
      elongatedCushion: "일롱게이티드 쿠션",
      princess: "프린세스",
      asscher: "아셔",
      pearlRound: "라운드",
      pearlDrop: "드롭",
      pearlBaroque: "바로크",
    },
    metal: {
      platinum: "플래티넘",
      k18Yellow: "18K 옐로 골드",
      k18Pink: "18K 핑크 골드",
      k18White: "18K 화이트 골드",
      k14Yellow: "14K 옐로 골드",
      k14Pink: "14K 핑크 골드",
      k14White: "14K 화이트 골드",
    },
    bodyType: { slender: "슬렌더", natural: "내추럴", curvy: "커비" },
    skinTone: { fair: "밝은 톤", olive: "올리브", deep: "깊은 톤" },
    attire: {
      gym: "운동복",
      sweat: "스웨트",
      yogaPilates: "요가・필라테스",
      tankTop: "탱크톱",
      sleeveless: "민소매",
      wedding: "웨딩",
      party: "파티",
      nightDress: "이브닝드레스",
      suit: "수트",
      morning: "모닝코트",
    },
  },
};

export default ko;
