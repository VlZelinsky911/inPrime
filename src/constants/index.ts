// INPRIME Constants

export const SITE_CONFIG = {
  name: "INPRIME",
  tagline: "Elite Discord Community",
  description:
    "Join the community of professional traders. Get up-to-date signals and support 24/7.",
};

export const SOCIAL_LINKS = {
  telegram: "https://t.me/inprime_support", // Замінити на реальне посилання
  discord: "https://discord.gg/inprime", // Замінити на реальне посилання
};

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About us", href: "#features" },
  { label: "Prices", href: "#pricing" },
  { label: "Contacts", href: "#contact" },
];

export const FEATURES = [
  {
    id: 1,
    title: "Analytics",
    description:
      "Exclusive analytics from our experts. Daily forecasts and analysis.",
    image: "/images/feature-1.png",
  },
  {
    id: 2,
    title: "Signals",
    description: "Accurate trading signals. Be the first to be notified.",
    image: "/images/feature-2.png",
  },
  {
    id: 3,
    title: "Community",
    description: "Chat with professionals and like-minded traders 24/7.",
    image: "/images/feature-3.png",
  },
];

export const PRICING_PLANS = [
  {
    id: "monthly",
    name: "1 Month",
    price: 49,
    currency: "$",
    period: "/month",
    features: [
      "Access to all channels",
      "Daily analytics",
      "Real-time signals",
      "Support 24/7",
    ],
    popular: false,
  },
  {
    id: "quarterly",
    name: "3 Months",
    price: 99,
    currency: "$",
    period: "/3 months",
    features: [
      "Everything from monthly",
      "Priority support",
      "Exclusive materials",
      "33% discount",
    ],
    popular: true,
  },
];

export const COLORS = {
  black: "#000000",
  dark: "#0D0D0D",
  charcoal: "#1A1A1A",
  gray: "#2A2A2A",
  lightGray: "#B0B0B0",
  white: "#FFFFFF",
  red: "#E53935",
  redDark: "#C62828",
  redLight: "#FF5252",
};
