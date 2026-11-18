import type { AtelierUi, TopContent } from "../../types";

// English. Draft by Jobs: have a native speaker check it before launch. Term: "laboratory-grown diamond" (never "lab-grown")
export const pendant = "Pendant";

export const top: TopContent = {
  nav: { about: "About", stones: "Stones", collection: "Designs", flow: "How to order", care: "Care", faq: "FAQ", contact: "Contact" },
  hero: {
    define:
      "KŌRIN Jewelry is a made-to-order jeweller centred on laboratory-grown diamonds, with pearls and coloured gemstones also available. Every piece is made one at a time, only after we have talked with you.",
    ctaAtelier: "Build your design in the Atelier",
  },
  strip: [
    { title: "Made to order only", body: "We begin only after we have talked with you" },
    { title: "Designed to 0.1 mm", body: "Every detail is fine-tuned in CAD" },
    { title: "Three kinds of stone", body: "Laboratory-grown diamond, pearl, coloured gemstone" },
    { title: "18K / 14K / platinum", body: "Combine metal and stone freely" },
  ],
  about: {
    title: "About KŌRIN",
    lead: "Is your fine jewellery reserved for special days only?",
    cards: [
      {
        title: "The idea of a second jewel",
        body: "The more precious a piece is, the more we worry about scratches, theft and loss, and so it stays in the safe. KŌRIN makes made-to-order jewellery as a “second jewel”: something you can wear on a trip or with everyday clothes without a second thought. Bring that brilliance into daily life. That is our proposal.",
      },
      {
        title: "We begin after we talk",
        body: "We are not a shop of ready-made pieces. We start with a design drawing, fine-tune it in CAD to 0.1 mm, and begin making only once you are happy. Rings, earrings, bracelets, necklaces. We choose the stone with you, from the very beginning.",
      },
    ],
    sceneAlt: "A person training while wearing a laboratory-grown diamond tennis bracelet and ring",
    sceneNote: "During a workout or on a journey. A second jewel is one you can wear anywhere.",
  },
  stones: {
    title: "Choose your stone",
    lead: "Laboratory-grown diamond is at the centre, and pearls and coloured gemstones are also available. Start from the stone or start from the design. We decide together as we talk.",
    cards: {
      diamond: {
        title: "Laboratory-grown diamond",
        body: "A carbon crystal grown in a laboratory. Choose from ten cuts, in any size you like.",
        items: ["Cuts: round, oval, emerald and seven more", "Size: tell us the carat weight you have in mind", "A stone that is not mined"],
      },
      pearl: {
        title: "Pearl",
        body: "A calm, luminous white. From Akoya to South Sea and Tahitian pearls, and characterful baroque pearls. For formal occasions and for lifting everyday looks.",
        items: ["Akoya", "South Sea (white / gold)", "Tahitian / baroque"],
      },
      colorStone: {
        title: "Coloured gemstone",
        body: "Stones to enjoy for their colour. Choose by birthstone, or by the person you are giving it to.",
        items: ["Blue sapphire / pink sapphire", "Ruby / emerald", "Tanzanite"],
      },
    },
    ctaAtelier: "Try combinations in the Atelier",
  },
  diamond: {
    title: "About laboratory-grown diamond",
    lead: "The main stone at KŌRIN is the laboratory-grown diamond, grown in a laboratory. We tell you honestly how it differs from a natural diamond.",
    headNatural: "Natural diamond",
    headLab: "Laboratory-grown diamond",
    rows: [
      { label: "Composition", natural: "Carbon crystal", lab: "Carbon crystal" },
      { label: "Hardness", natural: "10", lab: "10" },
      { label: "Refractive index", natural: "2.42", lab: "2.42" },
      { label: "Where it forms", natural: "Underground (mined)", lab: "Grown in a laboratory" },
    ],
    distinguishLabel: "Telling them apart",
    distinguishBody: "They cannot be told apart by eye. Identifying one requires the testing equipment of a specialist laboratory.",
    honest:
      "We see the laboratory-grown diamond not as an asset to hold, but as jewellery to wear and enjoy. That lets us spend freedom of size and design on everyday life.",
    methods: [
      {
        title: "Method 1: high pressure, high temperature (HPHT)",
        body: "A machine recreates the conditions deep underground where natural diamonds form. A small seed crystal and carbon are placed with a metal catalyst and subjected to temperatures above 1,300 degrees and pressure of tens of thousands of atmospheres. Carbon travels through the molten metal to the seed, and the crystal grows over days to weeks. A well-established method, in practical use since the 1950s.",
      },
      {
        title: "Method 2: chemical vapour deposition (CVD)",
        body: "A method that grows the crystal inside a vacuum chamber. Carbon-bearing gas and hydrogen are turned into plasma by microwaves, and carbon atoms settle, little by little, on a thin seed crystal. At about 800 to 1,000 degrees and below atmospheric pressure, the crystal builds up in layers over several weeks. It readily yields crystals of high purity.",
      },
    ],
    note: "However it is grown, the crystal is cut and polished by the same process as a natural rough stone, and becomes jewellery.",
  },
  collection: {
    title: "Design examples",
    lead: "Everything is made to order. These are only examples; the design is decided as we talk.",
    items: [
      { title: "Solitaire ring", body: "One stone as the star: the classic engagement ring", alt: "Design example of a round brilliant solitaire ring" },
      { title: "Pavé ring", body: "An example set with 118 laboratory-grown diamonds, 1.5 carats in total. The number and size of stones can be adjusted", alt: "Design example of a wide pavé ring set with 118 laboratory-grown diamonds" },
      { title: "Tennis bracelet", body: "A single line that glints with the movement of the wrist. For everyday and for training", alt: "Design example of a tennis bracelet" },
      { title: "Pendant", body: "One bright stone at the neckline. Choose the shape and size freely", alt: "Design example of an oval-cut pendant" },
      { title: "Stud earrings", body: "One stone that stays still at the ear. For every day", alt: "Design example of princess-cut stud earrings" },
      { title: "Slim pavé ring", body: "Choose 18K, 14K or platinum. A slim band that stacks well", alt: "Design example of a slim gold pavé ring" },
    ],
    note: "* Images are illustrations of design examples. The actual design is decided together as we talk.",
    visualAlt: "KŌRIN brand visual of a silver ring",
  },
  shapes: {
    title: "Choose by shape",
    lead: "You can choose the shape of a laboratory-grown diamond too. Here are ten representative cuts. At the same size, the shape changes the impression greatly.",
    note: "* Images illustrate the shape of each cut.",
    altTemplate: "Laboratory-grown diamond in {name} cut",
    items: {
      round: "The classic round that draws out brilliance",
      oval: "An ellipse that makes the finger look longer",
      emerald: "A stepped cut that shows off clarity",
      marquise: "Pointed at both ends, full of character",
      radiant: "A square with trimmed corners, known for strong sparkle",
      pear: "A teardrop. Popular for pendants",
      elongatedCushion: "A lengthened cushion with a modern feel",
      cushion: "A square with soft corners and a gentle glow",
      princess: "A square with sharp sparkle",
      asscher: "A square step cut with depth of light",
    },
  },
  flow: {
    title: "How to order",
    lead: "From the first talk to delivery, we go step by step and you confirm each stage.",
    steps: [
      { title: "Consultation", body: "Contact us by email or by direct message on Instagram or TikTok. Based in Tokyo and Osaka, we can also visit you anywhere in Japan. You do not need to have decided to buy." },
      { title: "Design drawing and quotation", body: "We hear what you wish for and propose a design drawing and a quotation. Everything up to here is a free consultation." },
      { title: "Design (CAD)", body: "We fine-tune the design to 0.1 mm. You can confirm the stone size and the metal combination at this stage too." },
      { title: "Making", body: "We begin making only after the design is final. We keep you informed of progress if you wish." },
      { title: "Delivery", body: "You check the finished piece and we hand it over. Completion takes about 4 to 8 weeks." },
    ],
  },
  atelierBanner: {
    title: "Build your design in the Atelier",
    body: "Choose the shape and size of the stone, the metal and the type of item, and put your wishes together on the spot. Your design is given a number, and you can take it straight into a consultation.",
    button: "Open the Atelier",
  },
  care: {
    title: "Care and warranty",
    lead: "Handing over is not the end. This is our warranty, so that you can wear it every day for a long time.",
    more: "Read the details of the warranty",
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      { question: "What is a laboratory-grown diamond?", answer: "A carbon crystal grown in a laboratory. It is made of the same carbon as a natural diamond and has the same hardness and brilliance as the stone itself. The big difference from a natural diamond is that it is not mined." },
      { question: "How does it differ from a natural diamond?", answer: "Where it formed. A natural diamond forms underground over a very long time; a laboratory-grown diamond is grown in a laboratory over a few weeks. Both are carbon, and both have a hardness of 10." },
      { question: "Can you tell them apart by looking?", answer: "No. Identifying one requires the testing equipment of a specialist laboratory. That is why we make a point of telling you the material honestly. All diamonds at KŌRIN are laboratory-grown diamonds (not natural)." },
      { question: "Can you make jewellery with pearls or coloured gemstones?", answer: "Yes. Besides laboratory-grown diamond, we take made-to-order commissions in pearls such as Akoya, South Sea and Tahitian, and in coloured gemstones such as sapphire, ruby, emerald and tanzanite. We decide the stone and metal together as we talk." },
      { question: "How long does it take from order to delivery?", answer: "Because we begin making only after we have talked with you, completion takes about 4 to 8 weeks. It may vary with how the design adjustments go." },
      { question: "How can I find out the budget?", answer: "It depends on the design and the size of the stone, so we give a guide when you get in touch. A design drawing and quotation are available as a free consultation first." },
      { question: "How can I get in touch?", answer: "By email (korin.jewelry@gmail.com) or by direct message on Instagram or TikTok. Based in Tokyo and Osaka, we can also visit you anywhere in Japan." },
    ],
  },
  contact: { title: "Contact", lead: "A design drawing and quotation are a free consultation. Please get in touch.", mailLabel: "Email: " },
  operator: {
    title: "About the operator",
    labels: { brand: "Brand", operator: "Operated by", representative: "Representative", base: "Based in", business: "Business", contact: "Contact" },
    values: {
      brand: "KŌRIN Jewelry",
      base: "Tokyo and Osaka (visits anywhere in Japan available)",
      business: "Design and sale of made-to-order jewellery centred on laboratory-grown diamonds, with pearls and coloured gemstones also available",
      contact: "Email / direct message on Instagram or TikTok",
    },
  },
  footer: { legal: "Legal notice (Act on Specified Commercial Transactions)", care: "Care and warranty" },
};

export const atelierUi: AtelierUi = {
  labels: { size: "Size", ringSize: "Ring size", chainLength: "Chain length", braceletLength: "Bracelet length" },
  steps: {
    item: { title: "Choose the item", hint: "Choose one" },
    stone: { title: "Choose the stone", hint: "Shape and size for each kind" },
    metal: { title: "Choose the metal", hint: "Choose one" },
    fit: { title: "Sizing", hint: "If you do not know, “Not specified” is fine" },
    wear: { title: "How it will be worn", hint: "Optional" },
  },
  stonePanel: {
    diamond: "A carbon crystal grown in a laboratory. Choose the shape and size.",
    pearl: "Choose the kind and size of the pearl. The colour differs from pearl to pearl.",
    colorStone: "Choose the kind and shape of the gemstone. We decide the size as we talk.",
  },
  sub: { cut: "Shape (cut)", size: "Size", type: "Kind", placement: "Placement" },
  metalNote: "For 18K and 14K you can also choose yellow, pink or white gold.",
  fitNone: "Earrings and piercings need no size.",
  fit: { unspecified: "Not specified", consult: "Decide in consultation", ringSize: "Japanese size {n}" },
  summaryAria: "Summary of your choices",
  priceNote: "We give the price in the quotation (a design drawing and quotation are a free consultation)",
  idNote: "Please tell us your design ID ({id}) when you get in touch",
  notIssued: "Not issued",
  staleNote: "You changed your choices. Please create the design sheet again.",
  afterNote: {
    label: "What happens next",
    body: "Consultation → design drawing and quotation (free) → CAD design, adjusted to 0.1 mm → making → delivery. You can change the design as we talk. First, get in touch and tell us your design ID.",
  },
  previewCaption: "* The picture is an illustration. You confirm the actual design on the design drawing.",
  storageUnavailable: "Your choices cannot be saved on this device. They are kept only while this page is open.",
  back: "← Back to top",
};
