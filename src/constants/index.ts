// INPRIME Constants

export const SITE_CONFIG = {
  name: "INPRIME",
  tagline: "Elite Discord Community",
  description:
    "Join the community of professional traders. Get up-to-date signals and support 24/7.",
};

export const SOCIAL_LINKS = {
  telegram: "https://t.me/suport_OS", // Замінити на реальне посилання
  discord: "https://discord.gg/inprime", // Замінити на реальне посилання
};

export const SUPPORT_TELEGRAM_HANDLE = "@suport_OS";

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About us", href: "#features" },
  { label: "Prices", href: "#pricing" },
  { label: "Contacts", href: "#contact" },
];

export const FEATURES = [
  {
    id: 1,
    title: "Підтримка",
    description:
      "Support, підтримка від менторів. Ми вирішили зробити корисну гілку для вас для вирішення всіх ваших запитань.",
    image: "/images/feature-1.png",
  },
  {
    id: 2,
    title: "Inprime-camping",
    description:
      "Мінікурс від нашої команди. Ми підготували детальні методички по всіх торгових інструментах, які використовуємо у власній торгівлі.",
    image: "/images/feature-2.png",
  },
  {
    id: 3,
    title: "Записи кожного нашого стріму",
    description:
      "Якщо ти вперше доєднався до нас, у тебе є можливість переглянути записи всіх наших стрімів. Там ти зможеш побачити наш процес торгівлі та розбір ринку.",
    image: "/images/feature-3.png",
  },
  {
    id: 4,
    title: "Ранкові UPD від нашої команди",
    description:
      "Отримуй ранкові UPD по активах GER40, XAU, EUR, GBP. Ми ділимося актуальним баченням ринку та розбором кожної угоди.",
    image: "/images/feature-4.png",
  },
];

export const PRICING_PLANS = [
  {
    id: "monthly",
    name: "1 Month",
    price: 35,
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
    price: 90,
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
