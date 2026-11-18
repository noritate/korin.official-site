import Link from "next/link";
import { Img } from "@/components/Img";
import { SITE } from "@/config/site";
import { consultCta, contactActions } from "@/lib/contact";
import type { Locale } from "@/lib/i18n/config";
import { fill } from "@/lib/i18n/get-dictionary";
import { CARE_ITEMS, type Dictionary } from "@/lib/i18n/types";
import { CUT_SHAPES } from "@/lib/simulator/types";

// 石の種類ごとの見本の色（平らな色。グラデーションは使わない決まり）
const SWATCHES: Record<"diamond" | "pearl" | "colorStone", string[]> = {
  diamond: ["#e9ecee", "#f3f1ea", "#cfd6de"],
  pearl: ["#ece6d6", "#e6cf93", "#2c2f3a"],
  colorStone: ["#2f57b0", "#d9779f", "#b3202f", "#18895a", "#6a54b3"],
};
const COLLECTION_IMAGES = ["col_solitaire", "col_pave_wide", "col_tennis", "col_pendant", "col_studs", "col_pave_narrow"] as const;

function isExternal(href: string): boolean {
  return href.startsWith("http") || href.startsWith("mailto:");
}

/** 区切り（「、」「，」、または後ろに空白が続く「,」）で改行して2行にする。「1,000」の桁区切りでは切らない */
function TaglineBreak({ text }: { text: string }) {
  const i = text.search(/[、，]|,(?=\s)/);
  if (i < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, i + 1)}
      <br />
      {text.slice(i + 1).trim()}
    </>
  );
}

export function HomePage({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const t = dict.top;
  const base = `/${lang}/`;
  const cta = consultCta(lang, dict);
  const ctaProps = isExternal(cta.href) ? { target: "_blank", rel: "noopener" } : {};
  const atelier = `${base}atelier/`;
  const seller = lang === "ja" ? SITE.legal.sellerJa : SITE.legal.sellerIntl;
  const channels = contactActions(lang, dict, "", "").filter((a) => a.href !== null);

  return (
    <main id="top">
      <section className="hero">
        <div className="hero-bg">
          <Img src="/images/hero_gold.jpg" alt="KŌRIN Jewelry" width={1920} height={1080} eager />
        </div>
        <div className="hero-in">
          <div className="hero-frame">
            <p className="brandline">KŌRIN JEWELRY</p>
            <h1 className="tagline">
              <TaglineBreak text={dict.home.heroTagline} />
            </h1>
            <p className="define">{t.hero.define}</p>
            <div className="cta-row">
              <a className="btn solid" href={cta.href} {...ctaProps}>
                {cta.label}
              </a>
              <Link className="btn" href={atelier}>
                {t.hero.ctaAtelier}
              </Link>
            </div>
          </div>
                  </div>
      </section>

      <section style={{ paddingTop: "4rem" }}>
        <div className="wrap">
          <div className="strip">
            {t.strip.map((s) => (
              <div key={s.title}>
                <b>{s.title}</b>
                {s.body}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="sec">
        <div className="wrap">
          <h2>
            <span className="eyebrow">ABOUT</span>
            {t.about.title}
          </h2>
          <p className="lead">{t.about.lead}</p>
          <div className="cols">
            {t.about.cards.map((c) => (
              <div className="card" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
          <p className="portrait-img" style={{ marginTop: "1.6rem" }}>
            <Img src="/images/scene_gym.jpg" alt={t.about.sceneAlt} width={1152} height={2048} />
          </p>
          <p className="note">{t.about.sceneNote}</p>
        </div>
      </section>

      <section id="stones" className="sec sec-ecru">
        <div className="wrap">
          <h2>
            <span className="eyebrow">STONES</span>
            {t.stones.title}
          </h2>
          <p className="lead">{t.stones.lead}</p>
          <div className="stone-cards">
            {(["diamond", "pearl", "colorStone"] as const).map((kind) => {
              const c = t.stones.cards[kind];
              return (
                <div className="stone" key={kind}>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                  <ul>
                    {c.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="swatches" aria-hidden="true">
                    {SWATCHES[kind].map((color) => (
                      <i key={color} style={{ background: color }} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cta-row" style={{ marginTop: "2.75rem" }}>
            <Link className="btn solid" href={atelier}>
              {t.stones.ctaAtelier}
            </Link>
          </div>
        </div>
      </section>

      <section id="diamond" className="sec">
        <div className="wrap">
          <h2>
            <span className="eyebrow">LABORATORY-GROWN DIAMOND</span>
            {t.diamond.title}
          </h2>
          <p className="lead">{t.diamond.lead}</p>
          <table className="compare">
            <thead>
              <tr>
                <th scope="col" />
                <th scope="col">{t.diamond.headNatural}</th>
                <th scope="col">{t.diamond.headLab}</th>
              </tr>
            </thead>
            <tbody>
              {t.diamond.rows.map((r) => (
                <tr key={r.label}>
                  <th scope="row">{r.label}</th>
                  <td>{r.natural}</td>
                  <td className="hl">{r.lab}</td>
                </tr>
              ))}
              <tr>
                <th scope="row">{t.diamond.distinguishLabel}</th>
                <td colSpan={2}>{t.diamond.distinguishBody}</td>
              </tr>
            </tbody>
          </table>
          <p className="lead" style={{ marginTop: "1.5rem" }}>
            {t.diamond.honest}
          </p>
          <div className="cols">
            {t.diamond.methods.map((m) => (
              <div className="card" key={m.title}>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </div>
            ))}
          </div>
          <p className="note">{t.diamond.note}</p>
        </div>
      </section>

      <section id="collection" className="sec sec-tight">
        <div className="wrap">
          <h2>
            <span className="eyebrow">COLLECTION</span>
            {t.collection.title}
          </h2>
          <p className="lead">{t.collection.lead}</p>
          <div className="tiles jewelry">
            {t.collection.items.map((item, i) => (
              <div className="tile" key={item.title}>
                <Img src={`/images/${COLLECTION_IMAGES[i]}.jpg`} alt={item.alt} width={640} height={640} />
                <b>{item.title}</b>
                <span>{item.body}</span>
              </div>
            ))}
          </div>
          <p className="note">{t.collection.note}</p>
          <p style={{ marginTop: "1.6rem" }}>
            <Img src="/images/visual_silver.jpg" alt={t.collection.visualAlt} width={1920} height={1080} />
          </p>
        </div>
      </section>

      <section id="shapes" className="sec sec-tight">
        <div className="wrap">
          <h2>
            <span className="eyebrow">SHAPES</span>
            {t.shapes.title}
          </h2>
          <p className="lead">{t.shapes.lead}</p>
          <div className="tiles">
            {CUT_SHAPES.map((shape) => (
              <div className="tile" key={shape}>
                <Img
                  src={`/images/shape_${shape === "elongatedCushion" ? "elongated_cushion" : shape}.jpg`}
                  alt={fill(t.shapes.altTemplate, { name: dict.options.shape[shape] })}
                  width={492}
                  height={488}
                />
                <b>{dict.options.shape[shape]}</b>
                <span>{t.shapes.items[shape]}</span>
              </div>
            ))}
          </div>
          <p className="note">{t.shapes.note}</p>
        </div>
      </section>

      <section id="flow" className="sec sec-tight">
        <div className="wrap">
          <h2>
            <span className="eyebrow">ORDER FLOW</span>
            {t.flow.title}
          </h2>
          <p className="lead">{t.flow.lead}</p>
          <ol className="flow">
            {t.flow.steps.map((s) => (
              <li key={s.title}>
                <b>{s.title}</b>
                {s.body}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec-tight" style={{ paddingBottom: "4rem" }}>
        <div className="wrap">
          <div className="atelier-banner">
            <p className="eyebrow">ATELIER — SIMULATOR</p>
            <h3>{t.atelierBanner.title}</h3>
            <p>{t.atelierBanner.body}</p>
            <Link className="btn solid" href={atelier}>
              {t.atelierBanner.button}
            </Link>
          </div>
        </div>
      </section>

      <section id="care" className="sec sec-tight">
        <div className="wrap">
          <h2>
            <span className="eyebrow">CARE &amp; WARRANTY</span>
            {t.care.title}
          </h2>
          <p className="lead">{t.care.lead}</p>
          <div className="care-box">
            <h3>{dict.care.title}</h3>
            <ul className="care-list">
              {CARE_ITEMS.map((key) => (
                <li key={key}>
                  <b>{dict.care.items[key].heading}</b>
                  {dict.care.items[key].body}
                </li>
              ))}
            </ul>
            <p className="legal-line">
              <Link href={`${base}care/`}>{t.care.more}</Link>　｜　<Link href={`${base}legal/`}>{t.footer.legal}</Link>
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="sec sec-tight">
        <div className="wrap">
          <h2>
            <span className="eyebrow">FAQ</span>
            {t.faq.title}
          </h2>
          <div className="faq">
            {t.faq.items.map((f) => (
              <details key={f.question}>
                <summary>{f.question}</summary>
                <p>{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="sec sec-tight contact">
        <div className="wrap">
          <h2>
            <span className="eyebrow">CONTACT</span>
            {t.contact.title}
          </h2>
          <p className="lead">{t.contact.lead}</p>
          <div className="cta-row" style={{ marginTop: 0 }}>
            {channels.map((a, i) => (
              <a key={a.channel} className={i === 0 ? "btn solid" : "btn"} href={a.channel === "line" ? SITE.line.addFriendUrl : (a.href as string)} {...(a.channel === "email" ? {} : { target: "_blank", rel: "noopener" })}>
                {a.label}
              </a>
            ))}
          </div>
          <p style={{ marginTop: "2rem", fontSize: "1.15rem" }}>
            {t.contact.mailLabel}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
        </div>
      </section>

      <section id="operator" className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2>
            <span className="eyebrow">OPERATOR</span>
            {t.operator.title}
          </h2>
          <div className="opinfo">
            <dl>
              <dt>{t.operator.labels.brand}</dt>
              <dd>{t.operator.values.brand}</dd>
              <dt>{t.operator.labels.operator}</dt>
              <dd>{seller}</dd>
              <dt>{t.operator.labels.representative}</dt>
              <dd>
                {dict.legal.representativeTitle} {SITE.legal.representativeName}
              </dd>
              <dt>{t.operator.labels.base}</dt>
              <dd>{t.operator.values.base}</dd>
              <dt>{t.operator.labels.business}</dt>
              <dd>{t.operator.values.business}</dd>
              <dt>{t.operator.labels.contact}</dt>
              <dd>{t.operator.values.contact}</dd>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
