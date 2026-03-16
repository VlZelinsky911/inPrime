export type Language = "en" | "uk";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About us",
      prices: "Prices",
      feedback: "Feedback",
      contacts: "Contacts",
      join: "Join",
    },
    hero: {
      badge: "Private community of traders",
      subtitle: "Trading Community",
      line1: "Join the community of professional traders.",
      strong: "Get up-to-date signals",
      line2: "and support 24/7.",
      joinCta: "JOIN US",
      learnMore: "LEARN MORE",
    },
    features: {
      badge: "What's inside",
      titlePrefix: "Look at our",
      titleAccent: "Discord",
    },
    pricing: {
      badge: "Pricing",
      title: "Choose your",
      titleAccent: "plan",
      description: "Simple and transparent pricing with no hidden fees",
      mostPopular: "MOST POPULAR",
      choosePlan: "Choose plan",
      guarantee: {
        secure: "Secure payment",
        support: "Support 24/7",
        access: "Instant access",
      },
    },
    feedback: {
      badge: "Feedback",
      titlePrefix: "Community",
      titleAccent: "feedback",
      description:
        "Screenshots from our chat so you can see real results and the atmosphere inside the community.",
      imageAlt: "Feedback",
    },
    contact: {
      titlePrefix: "Ready",
      titleAccent: "to join",
      description:
        "Write to us on Telegram to subscribe. Our team will help you with all your questions.",
      cta: "WRITE TO TELEGRAM",
      responseTime: "We respond within 5 minutes",
    },
    footer: {
      tagline: "Trading Community",
      rights: "All rights reserved.",
    },
    language: {
      en: "EN",
      uk: "UA",
    },
  },
  uk: {
    nav: {
      home: "Головна",
      about: "Про нас",
      prices: "Ціни",
      feedback: "Відгуки",
      contacts: "Контакти",
      join: "Приєднатися",
    },
    hero: {
      badge: "Приватне комʼюніті трейдерів",
      subtitle: "Trading Community",
      line1: "Приєднуйся до спільноти професійних трейдерів.",
      strong: "Актуальні сигнали",
      line2: " та підтримка 24/7.",
      joinCta: "ПРИЄДНАТИСЬ",
      learnMore: "ДІЗНАТИСЬ БІЛЬШЕ",
    },
    features: {
      badge: "Що всередині",
      titlePrefix: "Подивись наш",
      titleAccent: "Discord",
    },
    pricing: {
      badge: "Ціни",
      title: "Обери свій",
      titleAccent: "план",
      description: "Прозорі ціни без прихованих платежів",
      mostPopular: "НАЙПОПУЛЯРНІШЕ",
      choosePlan: "Обрати план",
      guarantee: {
        secure: "Безпечна оплата",
        support: "Підтримка 24/7",
        access: "Миттєвий доступ",
      },
    },
    feedback: {
      badge: "Відгуки",
      titlePrefix: "Відгуки нашого",
      titleAccent: "комʼюніті",
      description:
        "Живі скріншоти з нашого чату, щоб ти побачив реальні результати та атмосферу всередині спільноти.",
      imageAlt: "Відгук",
    },
    contact: {
      titlePrefix: "Готовий",
      titleAccent: "приєднатися",
      description:
        "Напиши нам у Telegram, щоб підписатися. Наша команда допоможе з усіма питаннями.",
      cta: "НАПИСАТИ В TELEGRAM",
      responseTime: "Відповідаємо протягом 5 хвилин",
    },
    footer: {
      tagline: "Trading Community",
      rights: "Всі права захищені.",
    },
    language: {
      en: "EN",
      uk: "UA",
    },
  },
} as const;
