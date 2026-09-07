export function ProsePage({ kicker, title, intro, children }: { kicker: string; title: string; intro: string; children: React.ReactNode }) {
  return <main id="main-content"><header className="page-header shell"><span className="eyebrow">{kicker}</span><h1>{title}</h1><p>{intro}</p></header><article className="policy-prose shell">{children}</article></main>;
}
