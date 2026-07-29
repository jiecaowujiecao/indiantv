import { createFileRoute } from "@tanstack/react-router";
import { t, type TKey } from "@/lib/i18n";
import { APK_DOWNLOAD_URL, APP_INFO, SITE_URL, LOGO_URL } from "@/config";
import { series, sports, games, korean, news, night, adult, priv, finance, type Card } from "@/lib/movies-data";
import { triggerDownload } from "@/lib/fb-pixel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NETPLAYA — Live Sports, Movies and Free Serials" },
      {
        name: "description",
        content:
          "NETPLAYA: the free Android app for live sports, movies, hit serials and world news. Fast APK download in HD/4K.",
      },
      { property: "og:title", content: "NETPLAYA — Live and free entertainment" },
      { property: "og:description", content: "Download the NETPLAYA APK. Sports, movies, serials and news in HD/4K, 100% free." },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: LOGO_URL },
      { name: "twitter:title", content: "NETPLAYA — Live and free entertainment" },
      { name: "twitter:description", content: "Download the NETPLAYA APK. Sports, movies, serials and news in HD/4K, 100% free." },
      { name: "twitter:image", content: LOGO_URL },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", type: "image/webp", href: LOGO_URL },
      { rel: "apple-touch-icon", href: LOGO_URL },
      { rel: "preload", as: "image", href: LOGO_URL, fetchpriority: "high" },
      { rel: "preconnect", href: "https://jk2.anrtv.top" },
      { rel: "dns-prefetch", href: "https://jk2.anrtv.top" },
    ],
  }),
  component: Index,
});

function Index() {
  const apkUrl = APK_DOWNLOAD_URL;
  const tr = (k: TKey) => t("en", k);

  return (
    <div className="netplaya-app">
      <TopBar tr={tr} apkUrl={apkUrl} />
      <Hero tr={tr} apkUrl={apkUrl} />
      <div className="bd-divider" />
      <Promo tr={tr} apkUrl={apkUrl} />
      <div className="bd-divider" />
      <Section title={tr("cat1_h")} sub={tr("cat1_sub")} emoji="🎬" cards={series} tr={tr} apkUrl={apkUrl} />
      <div className="bd-divider" />
      <Section title={tr("cat2_h")} sub={tr("cat2_sub")} emoji="🏆" cards={sports} wide tr={tr} apkUrl={apkUrl} />
      <div className="bd-divider" />
      <Section title={tr("cat6_h")} sub={tr("cat6_sub")} emoji="🎭" cards={games} tr={tr} apkUrl={apkUrl} />
      <div className="bd-divider" />
      <Section title={tr("cat7_h")} sub={tr("cat7_sub")} emoji="🌍" cards={korean} tr={tr} apkUrl={apkUrl} />
      <div className="bd-divider" />
      <Section title={tr("cat3_h")} sub={tr("cat3_sub")} emoji="📺" cards={news} tr={tr} apkUrl={apkUrl} />
      <div className="bd-divider" />
      <Section title={tr("night_h")} sub={tr("night_sub")} emoji="🌙" cards={night} tr={tr} apkUrl={apkUrl} />
      <div className="bd-divider" />
      <Section title={tr("adult_h")} sub={tr("adult_sub")} emoji="🔞" cards={adult} tr={tr} apkUrl={apkUrl} />
      <div className="bd-divider" />
      <Section title={tr("priv_h")} sub={tr("priv_sub")} emoji="🔒" cards={priv} tr={tr} apkUrl={apkUrl} />
      <div className="bd-divider" />
      <Section title={tr("cat5_h")} sub={tr("cat5_sub")} emoji="📈" cards={finance} tr={tr} apkUrl={apkUrl} />
      <div className="bd-divider" />
      <WhyNetplaya tr={tr} />
      <Compare tr={tr} />
      <CtaBanner tr={tr} apkUrl={apkUrl} />
      <InstallGuide tr={tr} />
      <AppInfo tr={tr} />
      <Share tr={tr} apkUrl={apkUrl} />
      <div className="bd-divider" />
      <Faq tr={tr} />
      <footer className="gootv-footer">
        <p>{tr("footer_note")}</p>
      </footer>
      <div style={{ height: 110 }} />
      <DownloadBar tr={tr} apkUrl={apkUrl} />
    </div>
  );
}

function TopBar({ tr, apkUrl }: { tr: (k: TKey) => string; apkUrl: string }) {
  return (
    <header className="top-bar">
      <div className="top-bar-inner">
        <a href={apkUrl} onClick={(e) => { e.preventDefault(); triggerDownload(apkUrl); }} className="top-logo" aria-label="NETPLAYA" download>
          <img src={LOGO_URL} alt="NETPLAYA" width={32} height={32} className="top-logo-img" fetchPriority="high" decoding="async" />
          <span className="top-logo-text">NETPLAYA</span>
        </a>
        <div className="top-actions">
          <a href={apkUrl} onClick={(e) => { e.preventDefault(); triggerDownload(apkUrl); }} className="top-install" download>{tr("install_guide")}</a>
        </div>
      </div>
      <div className="top-progress" aria-hidden="true"><span /></div>
    </header>
  );
}

function Hero({ tr, apkUrl }: { tr: (k: TKey) => string; apkUrl: string }) {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-inner">
        <div className="hero-chip">
          <span className="dot" /> {tr("chip")}
        </div>
        <h1>
          <span>{tr("h1a")}</span>
          <br />
          <span className="gold">{tr("h1b")}</span>
          <br />
          <span>{tr("h1c")}</span>
        </h1>
        <p className="hero-sub">{tr("hero_sub")}</p>
        <div className="hero-cta">
          <a href={apkUrl} onClick={(e) => { e.preventDefault(); triggerDownload(apkUrl); }} className="btn-dl" download>
            <DlIcon />
            <span>{tr("cta_dl")}</span>
          </a>
        </div>
        <div className="hero-info">
          {[
            { v: "1000+", l: tr("hi1") },
            { v: "4K", l: tr("hi2") },
            { v: "500K+", l: tr("hi3") },
            { v: "FREE", l: tr("hi4") },
          ].map((it) => (
            <div className="hero-info-item" key={it.l}>
              <div className="val">{it.v}</div>
              <div className="lbl">{it.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DlIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
    </svg>
  );
}

function Promo({ tr, apkUrl }: { tr: (k: TKey) => string; apkUrl: string }) {
  const items = [
    { icon: "👤", h: tr("promo_h1"), p: tr("promo_p1") },
    { icon: "⚡", h: tr("promo_h2"), p: tr("promo_p2") },
    { icon: "🌙", h: tr("promo_h3"), p: tr("promo_p3") },
    { icon: "🎁", h: tr("promo_h4"), p: tr("promo_p4") },
  ];
  const feats = [
    { b: "HD", t: tr("promo_f1") },
    { b: "📱", t: tr("promo_f2") },
    { b: "▶", t: tr("promo_f3") },
    { b: "🎭", t: tr("promo_f4") },
  ];
  return (
    <>
      <section className="promo-panel">
        <div className="promo-head">
          <div className="gootv-logo">NETPLAYA</div>
          <p>{tr("promo_tag")}</p>
        </div>
        <div className="promo-list">
          {items.map((it) => (
            <div className="promo-item" key={it.h}>
              <div className="promo-icon">{it.icon}</div>
              <div className="promo-copy">
                <h3>{it.h}</h3>
                <p>{it.p}</p>
              </div>
            </div>
          ))}
        </div>
        <a href={apkUrl} onClick={(e) => { e.preventDefault(); triggerDownload(apkUrl); }} className="promo-big-btn" download>
          ⬇ {tr("promo_btn")}
        </a>
      </section>
      <div className="promo-features">
        {feats.map((f) => (
          <div className="promo-feature" key={f.t}>
            <b>{f.b}</b>
            <span>{f.t}</span>
          </div>
        ))}
      </div>
    </>
  );
}

function Section({
  title,
  sub,
  emoji,
  cards,
  wide,
  tr,
  apkUrl,
}: {
  title: string;
  sub: string;
  emoji: string;
  cards: Card[];
  wide?: boolean;
  tr: (k: TKey) => string;
  apkUrl: string;
}) {
  const loop = [...cards, ...cards];
  const dur = cards.length * (wide ? 5 : 4);
  return (
    <section className="cat-section">
      <div className="cat-header">
        <h2>
          <span className="emoji">{emoji}</span> {title}
        </h2>
        <a href={apkUrl} onClick={(e) => { e.preventDefault(); triggerDownload(apkUrl); }} className="see-all" download>{tr("see_all")}</a>
      </div>
      <p className="cat-sub">{sub}</p>
      <div className="cat-scroll">
        <div className="scroll-track marquee" style={{ animationDuration: `${dur}s` }}>
          {loop.map((c, i) => (
            <a href={apkUrl} onClick={(e) => { e.preventDefault(); triggerDownload(apkUrl); }} download className={wide ? "wide-card" : "content-card"} key={i}>
              <div className="thumb">
                <img src={c.img} alt={c.title} loading="lazy" decoding="async" width={wide ? 320 : 160} height={wide ? 180 : 220} />
                {c.badge && (
                  <span className="badge" style={c.badgeColor ? { background: c.badgeColor } : undefined}>
                    {c.badge}
                  </span>
                )}
                {!wide && <span className="badge2">{c.badge2 || "FREE"}</span>}
              </div>
              {!wide && (
                <>
                  <div className="title">{c.title}</div>
                  <div className="meta">{c.meta}</div>
                </>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyNetplaya({ tr }: { tr: (k: TKey) => string }) {
  const items: Array<{ icon: string; h: TKey; d: TKey }> = [
    { icon: "📡", h: "w1", d: "w1d" },
    { icon: "🎬", h: "w2", d: "w2d" },
    { icon: "🏏", h: "w3", d: "w3d" },
    { icon: "🚫", h: "w4", d: "w4d" },
    { icon: "📱", h: "w5", d: "w5d" },
    { icon: "🌍", h: "w6", d: "w6d" },
  ];
  return (
    <section className="highlights">
      <div className="cat-header" style={{ padding: 0, marginBottom: 14 }}>
        <h2>
          <span className="emoji">✨</span> {tr("why_h")}
        </h2>
      </div>
      <div className="hl-grid">
        {items.map((it) => (
          <div className="hl-card" key={it.h}>
            <div className="icon">{it.icon}</div>
            <h3>{tr(it.h)}</h3>
            <p>{tr(it.d)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Compare({ tr }: { tr: (k: TKey) => string }) {
  const rows: Array<[TKey, TKey, TKey]> = [
    ["vs1", "vs1a", "vs1b"],
    ["vs2", "vs2a", "vs2b"],
    ["vs3", "vs3a", "vs3b"],
    ["vs4", "vs4a", "vs_yes"],
    ["vs5", "vs_no", "vs_yes"],
  ];
  return (
    <section className="compare">
      <h2>{tr("vs_h")}</h2>
      <table className="compare-table">
        <tbody>
          <tr>
            <th>{tr("vs_feat")}</th>
            <th className="mblive-col">NETPLAYA</th>
            <th>{tr("vs_others")}</th>
          </tr>
          {rows.map(([a, b, c]) => (
            <tr key={a}>
              <td>{tr(a)}</td>
              <td className="check">{tr(b)}</td>
              <td className="cross">{tr(c)}</td>
            </tr>
          ))}
          <tr>
            <td>{tr("vs6")}</td>
            <td className="check">✓</td>
            <td>{tr("vs6b")}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

function CtaBanner({ tr, apkUrl }: { tr: (k: TKey) => string; apkUrl: string }) {
  return (
    <div className="cta-banner">
      <h2>{tr("cta_h")}</h2>
      <p>{tr("cta_p")}</p>
      <div className="stats">
        <div className="stat">
          <div className="v">1000+</div>
          <div className="l">{tr("cta_s1")}</div>
        </div>
        <div className="stat">
          <div className="v">130+</div>
          <div className="l">{tr("cta_s2")}</div>
        </div>
        <div className="stat">
          <div className="v">4K</div>
          <div className="l">{tr("cta_s3")}</div>
        </div>
      </div>
      <a href={apkUrl} onClick={(e) => { e.preventDefault(); triggerDownload(apkUrl); }} className="btn-dl" download>
        <DlIcon />
        <span>{tr("cta_dl")}</span>
      </a>
    </div>
  );
}

function InstallGuide({ tr }: { tr: (k: TKey) => string }) {
  const steps: Array<{ n: number; t: TKey; d: TKey }> = [
    { n: 1, t: "s1t", d: "s1d" },
    { n: 2, t: "s2t", d: "s2d" },
    { n: 3, t: "s3t", d: "s3d" },
  ];
  return (
    <section className="install-section" id="install">
      <h2>
        <span className="emoji">📲</span> {tr("inst_h")}
      </h2>
      <div className="step-cards">
        {steps.map((s) => (
          <div className="step-card" key={s.n}>
            <div className="snum">{s.n}</div>
            <div className="stxt">
              <h3>{tr(s.t)}</h3>
              <p>{tr(s.d)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AppInfo({ tr }: { tr: (k: TKey) => string }) {
  const rows: Array<[string, string]> = [
    [tr("ai1"), "NETPLAYA"],
    [tr("ai2"), APP_INFO.version],
    [tr("ai3"), APP_INFO.size],
    [tr("ai4"), tr("ai4v")],
    [tr("ai5"), tr("ai5v")],
    [tr("ai6"), APP_INFO.platform],
    [tr("ai7"), APP_INFO.downloads],
  ];
  return (
    <div className="app-info">
      <table>
        <tbody>
          {rows.map(([k, v]) => (
            <tr key={k}>
              <td>{k}</td>
              <td>{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Share({ tr, apkUrl }: { tr: (k: TKey) => string; apkUrl: string }) {
  return (
    <section className="share-section">
      <div className="share-card">
        <h2>{tr("ref_h")}</h2>
        <p>{tr("ref_p")}</p>
        <div className="share-progress">
          <div className="sp-label">{tr("ref_prog")}</div>
          <div className="sp-bar">
            <div className="sp-bar-fill" style={{ width: "0%" }} />
          </div>
          <div className="sp-text">
            <span>0/3</span> <span>{tr("ref_joined")}</span>
          </div>
        </div>
        <div className="share-btns">
          <a href={apkUrl} onClick={(e) => { e.preventDefault(); triggerDownload(apkUrl); }} download className="share-btn wa">💬 WhatsApp</a>
          <a href={apkUrl} onClick={(e) => { e.preventDefault(); triggerDownload(apkUrl); }} download className="share-btn fb">📘 Facebook</a>
          <a href={apkUrl} onClick={(e) => { e.preventDefault(); triggerDownload(apkUrl); }} download className="share-btn tg">✈️ Telegram</a>
          <a href={apkUrl} onClick={(e) => { e.preventDefault(); triggerDownload(apkUrl); }} download className="share-btn cp">📋 {tr("ref_copy")}</a>
        </div>
        <a href={apkUrl} onClick={(e) => { e.preventDefault(); triggerDownload(apkUrl); }} download className="share-link">
          <span>{tr("ref_your")}</span>
          <span>https://netplaya.app/?ref=NET123</span>
        </a>
      </div>
    </section>
  );
}

function Faq({ tr }: { tr: (k: TKey) => string }) {
  const items: Array<[TKey, TKey]> = [
    ["q1", "a1"],
    ["q2", "a2"],
    ["q3", "a3"],
    ["q4", "a4"],
    ["q5", "a5"],
  ];
  return (
    <section className="faq-section">
      <h2>{tr("faq_h")}</h2>
      {items.map(([q, a]) => (
        <div className="faq-item" key={q}>
          <div className="faq-q">{tr(q)}</div>
          <div className="faq-a">{tr(a)}</div>
        </div>
      ))}
    </section>
  );
}

function DownloadBar({ tr, apkUrl }: { tr: (k: TKey) => string; apkUrl: string }) {
  return (
    <div className="dl-bar">
      <a href={apkUrl} onClick={(e) => { e.preventDefault(); triggerDownload(apkUrl); }} className="dl-bar-cta" download>
        <DlIcon />
        <span>{tr("float_cta")}</span>
      </a>
      <div className="dl-bar-sub">{tr("float_sub")}</div>
    </div>
  );
}
