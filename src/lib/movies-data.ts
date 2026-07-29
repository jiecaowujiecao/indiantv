// Movie/show catalog. Image URLs reference public placeholder thumbnails.
export type Card = {
  img: string;
  title: string;
  meta: string;
  badge?: string;
  badgeColor?: string;
  badge2?: string;
};

// Source already serves immutable images with 30-day cache; reference directly.
const SRC = "https://jk2.anrtv.top/assets_vk2p";
const img = (file: string) => `${SRC}/${file}`;

export const series: Card[] = [
  { img: img("drama1.jpg"), title: "Squid Game S3", meta: "Netflix • Thriller", badge: "🔥 HIT", badgeColor: "#ff6b35" },
  { img: img("drama2.jpg"), title: "Wednesday S2", meta: "Netflix • Mystery", badge: "4K" },
  { img: img("drama3.jpg"), title: "Stranger Things 5", meta: "Netflix • Sci-Fi", badge: "LIVE", badgeColor: "#22c55e" },
  { img: img("drama4.jpg"), title: "House of the Dragon S3", meta: "HBO Max • Fantasy", badge: "HD" },
  { img: img("drama5.jpg"), title: "The Bear S4", meta: "FX / Hulu • Drama", badge: "4K" },
  { img: img("drama6.jpg"), title: "Bridgerton S4", meta: "Netflix • Romance", badge: "LIVE", badgeColor: "#22c55e" },
  { img: img("drama7.jpg"), title: "Severance S2", meta: "Apple TV+ • Thriller", badge: "HD" },
  { img: img("drama8.jpg"), title: "The Last of Us S2", meta: "HBO Max • Apocalyptic", badge: "🆕 NEW", badgeColor: "#8b5cf6" },
];

export const sports: Card[] = [
  { img: img("psl.jpg"), title: "NBA Finals 2026", meta: "" },
  { img: img("cricket.jpg"), title: "EPL Premier League", meta: "" },
  { img: img("football.jpg"), title: "F1 Grand Prix 2026", meta: "" },
  { img: img("kabaddi.jpg"), title: "UFC & WWE", meta: "" },
  { img: img("sport5.jpg"), title: "UEFA Champions League", meta: "" },
  { img: img("sport6.jpg"), title: "NFL Super Bowl LX", meta: "" },
  { img: img("sport7.jpg"), title: "Tennis Grand Slam", meta: "" },
  { img: img("sport8.jpg"), title: "MotoGP 2026", meta: "" },
];

export const games: Card[] = [
  { img: img("game1.jpg"), title: "America's Got Talent", meta: "NBC • Talent", badge: "🔥 HIT", badgeColor: "#ff6b35" },
  { img: img("game2.jpg"), title: "The Voice", meta: "NBC • Singing", badge: "4K" },
  { img: img("game3.jpg"), title: "Saturday Night Live", meta: "NBC • Comedy", badge: "LIVE", badgeColor: "#22c55e" },
  { img: img("game4.jpg"), title: "MasterChef", meta: "Fox • Cooking", badge: "HD" },
  { img: img("game5.jpg"), title: "Dancing with the Stars", meta: "ABC • Dance", badge: "4K" },
  { img: img("game6.jpg"), title: "Survivor", meta: "CBS • Reality", badge: "LIVE", badgeColor: "#22c55e" },
  { img: img("game7.jpg"), title: "Big Brother", meta: "CBS • Reality", badge: "HD" },
  { img: img("game8.jpg"), title: "American Idol", meta: "ABC • Singing", badge: "🆕 NEW", badgeColor: "#8b5cf6" },
];

export const korean: Card[] = [
  { img: img("turk1.jpg"), title: "Money Heist", meta: "Netflix • Spanish", badge: "🔥 HIT", badgeColor: "#ff6b35" },
  { img: img("turk2.jpg"), title: "The Glory", meta: "Netflix • K-Drama", badge: "4K" },
  { img: img("turk3.jpg"), title: "Crash Landing on You", meta: "tvN • K-Romance", badge: "LIVE", badgeColor: "#22c55e" },
  { img: img("turk4.jpg"), title: "Vincenzo", meta: "Netflix • K-Crime", badge: "HD" },
  { img: img("turk5.jpg"), title: "Alice in Borderland", meta: "Netflix • J-Sci-Fi", badge: "4K" },
  { img: img("turk6.jpg"), title: "Dark", meta: "Netflix • German Sci-Fi", badge: "LIVE", badgeColor: "#22c55e" },
  { img: img("turk7.jpg"), title: "Lupin", meta: "Netflix • French", badge: "HD" },
  { img: img("turk8.jpg"), title: "Kingdom", meta: "Netflix • K-Zombie", badge: "🆕 NEW", badgeColor: "#8b5cf6" },
];

export const news: Card[] = [
  { img: img("news1.jpg"), title: "CNN International", meta: "🌍 24/7 Global", badge: "🔥 HIT", badgeColor: "#ff6b35" },
  { img: img("news2.jpg"), title: "BBC World News", meta: "🇬🇧 UK Live", badge: "4K" },
  { img: img("news3.jpg"), title: "Reuters Live", meta: "📰 Breaking", badge: "LIVE", badgeColor: "#22c55e" },
  { img: img("news4.jpg"), title: "Weather Channel", meta: "🌤 Forecast", badge: "HD" },
  { img: img("news5.jpg"), title: "ESPN SportsCenter", meta: "⚽ Sports 24/7", badge: "4K" },
  { img: img("news6.jpg"), title: "Fox News Breaking", meta: "🇺🇸 US Politics", badge: "LIVE", badgeColor: "#22c55e" },
  { img: img("news7.jpg"), title: "Bloomberg TV", meta: "💼 Markets", badge: "HD" },
  { img: img("news8.jpg"), title: "Al Jazeera English", meta: "🌏 Middle East", badge: "🆕 NEW", badgeColor: "#8b5cf6" },
];

export const night: Card[] = [
  { img: img("night1.jpg"), title: "Midnight Cinema", meta: "Outdoor screen", badge: "NIGHT" },
  { img: img("night2.jpg"), title: "Neon Crime", meta: "City mystery", badge: "HD" },
  { img: img("night3.jpg"), title: "Late Romance", meta: "Private stories", badge: "NEW" },
  { img: img("night4.jpg"), title: "After-Hours", meta: "Fast action", badge: "HOT", badgeColor: "#22c55e" },
  { img: img("night5.jpg"), title: "Moonlight Drama", meta: "Stage drama", badge: "4K" },
  { img: img("night6.jpg"), title: "City Noir", meta: "Classic noir", badge: "NOIR" },
];

export const adult: Card[] = [
  { img: img("adult1.jpg"), title: "Private Lounge", meta: "Adults only lounge", badge: "18+", badge2: "FREE" },
  { img: img("adult2.jpg"), title: "Velvet Room", meta: "Curtain & premium feel", badge: "18+", badge2: "HD" },
  { img: img("adult3.jpg"), title: "Night Desire", meta: "Private late-night room", badge: "18+", badge2: "FREE" },
  { img: img("adult4.jpg"), title: "Secret Channel", meta: "Locked VIP channel", badge: "VIP", badge2: "18+" },
  { img: img("adult5.jpg"), title: "After Dark 18+", meta: "Neon adult room", badge: "18+", badge2: "4K" },
  { img: img("adult6.jpg"), title: "Hidden Suite", meta: "Private suite entry", badge: "NEW", badge2: "18+" },
];

export const priv: Card[] = [
  { img: img("priv1.jpg"), title: "Private Channel 1", meta: "Adults only access", badge: "18+", badge2: "FREE" },
  { img: img("priv2.jpg"), title: "Private Channel 2", meta: "Adults only access", badge: "VIP", badge2: "HD" },
  { img: img("priv3.jpg"), title: "Private Channel 3", meta: "Adults only access", badge: "18+", badge2: "4K" },
  { img: img("priv4.jpg"), title: "Private Channel 4", meta: "Adults only access", badge: "HOT", badgeColor: "#22c55e", badge2: "FREE" },
  { img: img("priv5.jpg"), title: "Private Channel 5", meta: "Adults only access", badge: "NEW", badge2: "18+" },
];

export const finance: Card[] = [
  { img: img("fin1.jpg"), title: "NYSE & NASDAQ", meta: "📊 US Stock Markets", badge: "🔥 HIT", badgeColor: "#ff6b35" },
  { img: img("fin2.jpg"), title: "BTC & ETH — Crypto", meta: "₿ Bitcoin • Ethereum Live", badge: "4K" },
  { img: img("fin3.jpg"), title: "Federal Reserve (FED)", meta: "🏦 Fed Rate & Policy", badge: "LIVE", badgeColor: "#22c55e" },
  { img: img("fin4.jpg"), title: "Forex Majors", meta: "💱 EUR/USD • GBP • JPY", badge: "HD" },
  { img: img("fin5.jpg"), title: "LBMA Gold Market", meta: "🥇 Gold • Silver Live", badge: "4K" },
  { img: img("fin6.jpg"), title: "S&P 500 & Dow Jones", meta: "📈 US Index Trading", badge: "LIVE", badgeColor: "#22c55e" },
  { img: img("fin7.jpg"), title: "Real Estate Market", meta: "🏡 Property • Mortgage", badge: "HD" },
  { img: img("fin8.jpg"), title: "Oil & Commodities", meta: "🛢️ WTI • Brent • Gas", badge: "🆕 NEW", badgeColor: "#8b5cf6" },
];
