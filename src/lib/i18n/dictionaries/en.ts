import type { Dictionary } from "../types";
import { atelierUi, pendant, top } from "./extra/en";

// English. Rule: always "laboratory-grown diamond" — never "lab-grown".
const en: Dictionary = {
  meta: {
    siteName: "KŌRIN Jewelry",
    title: "KŌRIN Jewelry | Made-to-order laboratory-grown diamond jewelry",
    description:
      "KŌRIN Jewelry is a made-to-order jewelry brand centered on laboratory-grown diamonds, with pearls and colored gemstones also available.",
  },
  nav: {
    atelier: "Atelier",
    consult: "Consultation",
    language: "Language",
    home: "Home",
  },
  brand: {
    definition:
      "KŌRIN Jewelry is a made-to-order jewelry brand centered on laboratory-grown diamonds, with pearls and colored gemstones also available.",
    disclosure: "All diamonds at KŌRIN Jewelry are laboratory-grown diamonds (not natural diamonds).",
    freeConsultation: "Your first design sketch and estimate consultation is free.",
  },
  home: {
    heroTagline: "The brilliance of a ¥10-million jewel, out of the vault and into everyday life.",
    enterAtelier: "Enter the Atelier",
  },
  atelier: {
    title: "Atelier",
    lead: "Choose the stone, shape and metal, down to the moment you will wear it. Your choices become a specification you can bring straight to a consultation.",
    previewLabel: "Preview",
    specIdLabel: "Specification ID",
    sections: {
      category: "Piece",
      piercePlacement: "Piercing placement",
      stoneKind: "Stone",
      pearl: "Pearl type",
      colorStone: "Colored gemstone",
      shape: "Shape",
      metal: "Metal",
      bodyType: "Body type",
      skinTone: "Skin tone",
      attire: "Attire & occasion",
    },
    savedAt: "Saved automatically at {time}",
    notSavedYet: "Your choices are saved automatically on this device.",
    issueSpec: "Create specification",
    copySpec: "Copy specification",
    copied: "Copied",
    reset: "Start over",
  },
  contact: {
    heading: "Consultation",
    viaLine: "Consult on LINE",
    viaInstagram: "Consult via Instagram DM",
    viaEmail: "Consult by email",
    viaWhatsApp: "Consult on WhatsApp",
    viaWeChat: "Consult on WeChat",
    weChatInstruction: "Add WeChat ID \"{id}\" and send the specification you copied.",
    emailSubject: "Made-to-order consultation ({id})",
  },
  top,
  atelierUi,
  spec: {
    heading: "KŌRIN Jewelry Specification",
    idLabel: "Specification ID",
    issuedLabel: "Created",
    closing: "I would like to consult about a made-to-order piece based on this specification.",
  },
  care: {
    "title": "KŌRIN Lifetime Care",
    "lead": "Our warranty and care terms, so your piece can be worn for many years after delivery.",
    "items": {
      "handover": {
        "heading": "Sending and collecting",
        "body": "Please contact us first, then send the piece to our designated maintenance service in Japan by insured, tracked shipping. In the Tokyo and Osaka areas, our concierge can also collect and return it in person by advance appointment."
      },
      "initialDefect": {
        "heading": "Initial defects",
        "body": "Manufacturing defects found within 14 days of delivery are repaired or replaced free of charge, including shipping both ways."
      },
      "basicCare": {
        "heading": "Basic care (free for life)",
        "body": "Ultrasonic cleaning, light refinishing and checks for loose stone settings carry no labour charge for life. Shipping both ways and, when sent from abroad, customs fees are paid by the customer."
      },
      "resizing": {
        "heading": "Ring resizing",
        "body": "Within one year of purchase, the first resizing of up to about ±2 Japanese ring sizes is free where the design allows it (shipping both ways is paid by the customer). From the second year, we quote at actual cost."
      },
      "repair": {
        "heading": "Damage repair",
        "body": "Damage caused by accidents or impact, and broken chains, are quoted at fair actual cost by our partner workshop."
      }
    }
  },
  legal: {
    "title": "Legal Notice (Act on Specified Commercial Transactions)",
    "labels": {
      "seller": "Seller",
      "representative": "Head of operations",
      "address": "Address",
      "phone": "Phone",
      "email": "Email",
      "price": "Price",
      "extraCosts": "Additional costs",
      "payment": "Payment methods",
      "paymentTiming": "Payment timing",
      "delivery": "Delivery time",
      "returns": "Returns and cancellations"
    },
    "representativeTitle": "Representative Director",
    "disclosedOnRequest": "Disclosed without delay upon request.",
    "values": {
      "price": "Every piece is made to order and quoted individually. The amount, including tax, is shown on the payment page.",
      "extraCosts": "Shipping (stated in your quote). Deliveries outside Japan may incur customs duties, import taxes and clearance fees, which are paid by the customer.",
      "payment": "Payment on a BASE or Stripe payment page (credit card and the other methods offered on that page).",
      "paymentTiming": "Please pay on the payment page after agreeing to the specifications and quote. Production starts once payment is confirmed.",
      "delivery": "As every piece is made to order, delivery takes about 4–8 weeks after payment is confirmed.",
      "returns": "As pieces are made to order, cancellations after payment and returns for personal reasons are not accepted. Initial defects reported within 14 days of arrival are handled free of charge."
    }
  },
  options: {
    category: { ring: "Ring", pendant, necklace: "Necklace", pierce: "Piercing", bracelet: "Bracelet" },
    piercePlacement: { ear: "Ear", nose: "Nose", navel: "Navel" },
    stoneKind: { diamond: "Laboratory-grown diamond", pearl: "Pearl", colorStone: "Colored gemstone" },
    pearl: {
      akoya: "Akoya pearl",
      southSeaWhite: "South Sea pearl (white)",
      southSeaGold: "South Sea pearl (gold)",
      tahitianBlack: "Tahitian black pearl",
      baroque: "Baroque pearl",
    },
    colorStone: { blueSapphire: "Blue sapphire", pinkSapphire: "Pink sapphire", ruby: "Ruby", emerald: "Emerald", tanzanite: "Tanzanite" },
    shape: {
      round: "Round",
      oval: "Oval",
      pear: "Pear",
      emerald: "Emerald cut",
      marquise: "Marquise",
      radiant: "Radiant",
      cushion: "Cushion",
      elongatedCushion: "Elongated cushion",
      princess: "Princess",
      asscher: "Asscher",
      pearlRound: "Round",
      pearlDrop: "Drop",
      pearlBaroque: "Baroque",
    },
    metal: {
      platinum: "Platinum",
      k18Yellow: "18K Yellow Gold",
      k18Pink: "18K Pink Gold",
      k18White: "18K White Gold",
      k14Yellow: "14K Yellow Gold",
      k14Pink: "14K Pink Gold",
      k14White: "14K White Gold",
    },
    bodyType: { slender: "Slender", natural: "Natural", curvy: "Curvy" },
    skinTone: { fair: "Fair", olive: "Olive", deep: "Deep" },
    attire: {
      gym: "Gym wear",
      sweat: "Sweats",
      yogaPilates: "Yoga & Pilates",
      tankTop: "Tank top",
      sleeveless: "Sleeveless",
      wedding: "Wedding",
      party: "Party",
      nightDress: "Evening gown",
      suit: "Suit",
      morning: "Morning dress",
    },
  },
};

export default en;
