/*
 * Dogbro LLC Site Configuration
 */
export const site = {
  /** サイト名 */
  name: "Dogbro",
  /** トップページ用のフルタイトル */
  title: "Dogbro — AI-Driven Solutions for Business Growth",
  /** タイトルテンプレート */
  titleTemplate: "%s — Dogbro",
  /** デフォルトの meta description */
  description:
    "We build tailored AI and automation solutions that help businesses scale operations, cut overhead, and uncover market opportunities.",
  /** 本番 URL */
  url: "https://dogbro.store",
  /** コンテンツ言語 */
  locale: "en",
  /** デフォルト著者 */
  author: "Dogbro LLC",
  /** デフォルト OGP 画像 */
  defaultOgImage: undefined as string | undefined,
  /** SNS ハンドル */
  social: {
    twitter: "@dogbro",
    github: "https://github.com/totalch/dogbro27",
  },
  },
  /** ブログ一覧の1ページあたり記事数 */
  postsPerPage: 6,
};

export type SiteConfig = typeof site;