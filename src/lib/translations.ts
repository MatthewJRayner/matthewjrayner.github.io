export type Language = "en" | "de" | "jp" | "tr";

export const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hey,",
      name: "I'm Matthew.",
      role: "Full Stack Software Engineer",
      description_start: "I'm a ",
      description_end: " interested in creating user-friendly and clean web applications and experiences.",
    },
    projects: {
      title: "Here are some of my ",
      title_highlight: "projects",
      sales_dashboard: {
        title: "Sales Dashboard",
        desc: "Custom sales dashboard for my client in the hospitality industry. Full-stack application with user authentication, data visualization, and real-time updates. The link leads to a preview of the site with dummy-data not connected to a backend.",
      },
      bread_by_bike: {
        title: "Bread By Bike",
        desc: "Maintaining and currently developing the website for a London café and bakery in Camden. It needs to be regularly updated to inform customers of any events, as well as be able to take orders for wholesale, including information like addresses and payment details. Currently transitioning from the Shopify base that was used before into a more custom fit design that I'm leading.",
      },
      portfolio: {
        title: "E-Portfolio",
        desc: "This very own e-portfolio page. It was a challenge to test my skills in trying to blend my interests in space with creating a user-friendly, professional, and modern design.",
      },
    },
    contact: {
      title: "Let's have a chat.",
      subtitle: "I'm currently looking for new opportunities",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send it to me",
      success: "Thanks for the email! Excited to get back to you soon.",
      error: "Something seems to have gone wrong! Please contact me directly on: raynerjmatthew@gmail.com",
    },
    footer: {
      copyright: "Copyright © 2025 Matthew Rayner",
      top: "Top",
    },
  },
  de: {
    nav: {
      about: "Über mich",
      projects: "Projekte",
      contact: "Kontakt",
    },
    hero: {
      greeting: "Hey,",
      name: "ich bin Matthew.",
      role: "Full-Stack-Softwareentwickler",
      description_start: "Ich bin ein ",
      description_end: " und interessier mich dafür, benuzterfreundliche und saubere Webanwendungen und -erlebnisse zu schaffen.",
    },
    projects: {
      title: "Hier sind einige meiner ",
      title_highlight: "Projekte",
      sales_dashboard: {
        title: "Sales Dashboard",
        desc: "Individuelles Verkaufs-Dashboard für meinen Kunden in der Gastronomiebranche. Full-Stack-Anwendung mit Benutzer-Authentifizierung, Datenvisualisierung und Echtzeit-Updates. Der Link führt zu einer Vorschau der Website mit Dummy-Daten, die nicht mit einem Backend verbunden sind.",
      },
      bread_by_bike: {
        title: "Bread By Bike",
        desc: "Wartung und derzeitige Entwicklung der Website für ein Café und eine Bäckerei in London, Camden. Es muss regelmäßig aktualisiert werden, um die Kunden über Veranstaltungen zu informieren, sowie Bestellungen für den Großhandel entgegenzunehmen, einschließlich Informationen wie Adressen und Zahlungsdetails. Derzeit Übergang von der zuvor verwendeten Shopify-Basis zu einem maßgeschneiderten Design, das ich leite.",
      },
      portfolio: {
        title: "E-Portfolio",
        desc: "Diese E-Portfolio-Seite stammt von mir und wurde entwickelt, um meine Fähigkeiten zu testen und Interessen an Weltraum mit einem benutzerfreundlichen, professionellen und modernen Design zu verbinden.",
      },
    },
    contact: {
      title: "Lass uns ins Gespräch kommen.",
      subtitle: "Ich suche derzeit nach neuen Möglichkeiten",
      name: "Name",
      email: "E-Mail",
      message: "Nachricht",
      submit: "Schick es mir",
      success: "Danke für die E-Mail! Ich freue mich darauf, bald von Ihnen zu hören.",
      error: "Etwas scheint schief gelaufen zu sein! Bitte kontaktieren Sie mich direkt unter: raynerjmatthew@gmail.com",
    },
    footer: {
      copyright: "Copyright © 2025 Matthew Rayner",
      top: "Oben",
    },
  },
  jp: {
    nav: {
      about: "自己紹介",
      projects: "プロジェクト",
      contact: "お問い合わせ",
    },
    hero: {
      greeting: "こんにちは、",
      name: "マシューです。",
      role: "フルスタックソフトウェアエンジニア",
      description_start: "ユーザーフレンドリーでシンプルなウェブアプリケーションや体験の開発に興味がある",
      description_end: "です。",
    },
    projects: {
      title: "こちらは私の ",
      title_highlight: "プロジェクト",
      sales_dashboard: {
        title: "販売ダッシュボード",
        desc: "ホスピタリティ業界のクライアント向けに作成したカスタム販売ダッシュボードです。ユーザー認証、データの可視化、リアルタイム更新を備えたフルスタックアプリケーションです。リンクはバックエンドに接続されていないダミーデータのプレビューに移動します。",
      },
      bread_by_bike: {
        title: "Bread By Bike",
        desc: "ロンドン・カムデンにあるカフェ＆ベーカリーのウェブサイトを保守・開発しています。イベント情報を定期的に更新し、卸売注文（住所や支払い情報含む）も可能にする必要があります。現在は、以前使用されていたShopifyベースから、私が主導するカスタムデザインへと移行中です。",
      },
      portfolio: {
        title: "E-Portfolio",
        desc: "このポートフォリオサイトは自作です。宇宙への興味と、使いやすくプロフェッショナルでモダンなデザインを融合させるという課題に挑戦しました。",
      },
    },
    contact: {
      title: "お気軽にご連絡ください。",
      subtitle: "新しい機会を探しています",
      name: "名前",
      email: "メールアドレス",
      message: "メッセージ",
      submit: "送信",
      success: "メールを送信しました！すぐにお返事できることを楽しみにしています。",
      error: "何か問題が発生したようです！直接連絡してください: raynerjmatthew@gmail.com",
    },
    footer: {
      copyright: "Copyright © 2025 Matthew Rayner",
      top: "上",
    },
  },
  tr: {
    nav: {
      about: "Hakkımda",
      projects: "Projeler",
      contact: "İletişim",
    },
    hero: {
      greeting: "Merhaba,",
      name: "ben Matthew.",
      role: "Full Stack Software Engineer",
      description_start: "Ben ",
      description_end: " olarak kullanıcı dostu ve temiz web uygulamaları ve deneyimleri oluşturmakla ilgileniyorum.",
    },
    projects: {
      title: "Işte bazı ",
      title_highlight: "projelerim",
      sales_dashboard: {
        title: "Satış Paneli",
        desc: "Misafirperverlik sektöründeki bir müşterim için özel olarak geliştirilmiş bir satış paneli. Kullanıcı kimlik doğrulaması, veri görselleştirmesi ve gerçek zamanlı güncellemeler içeren tam kapsamlı bir uygulama. Bağlantı, arka uca bağlı olmayan sahte verilerle oluşturulmuş bir önizlemeye yönlendirir.",
      },
      bread_by_bike: {
        title: "Bread By Bike",
        desc: "Camden, Londra’daki bir kafe ve fırının web sitesini yönetiyor ve geliştiriyorum. Müşterileri etkinliklerden haberdar edebilmek ve toptan siparişleri (adres ve ödeme bilgileri dahil) alabilmek için site düzenli olarak güncellenmeli. Şu anda Shopify tabanlı yapıdan, benim öncülüğümde daha özelleştirilmiş bir tasarıma geçiliyor.",
      },
      portfolio: {
        title: "E-Portfolio",
        desc: "Bu portfolyo sayfası tamamen bana ait. Uzaya olan ilgimi kullanıcı dostu, profesyonel ve modern bir tasarımla birleştirmeyi denediğim bir beceri testi oldu.",
      },
    },
    contact: {
      title: "Hadi sohbet edelim.",
      subtitle: "Şu anda yeni fırsatlar arıyorum",
      name: "İsim",
      email: "E-posta",
      message: "Mesaj",
      submit: "Bana gönder",
      success: "Teşekkürler! En kısa sürede geri dönmeyi dört gözle bekliyorum.",
      error: "Bir şeyler ters gitmiş gibi görünüyor! Lütfen doğrudan benimle iletişime geçin: raynerjmatthew@gmail.com",
    },
    footer: {
      copyright: "Copyright © 2025 Matthew Rayner",
      top: "Top",
    },
  },
};
