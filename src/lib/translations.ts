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
      drumroll: {
        title: "Drumroll",
        desc: "Co-Founder and sole engineer for a startup company for rota creation and employee management for businesses. Currently working with a hospitality business in North London and in talks to expand to more businesses in the area. Fully deployed on AWS with CI/CD pipelines and custom authentication. ",
      },
      orpheus: {
        title: "Orpheus Archives",
        desc: "A full-stack catalogue app for films, books, music and more. Implemented modular data models and custom search, sorting and analytic endpoints.",
      },
      vox_mundi: {
        title: "Vox Mundi",
        desc: "An interactive global culture tracker and hub built using Next.js 14, Django REST, and PostgresSQL (Neon). Deployed a three-tiered architecture with on Vercel, Railway, and Neon with full CI/CD pipelines. Engineered complex relational models for cultures, media, and timelines.",
      },
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
      drumroll: {
        title: "Drumroll",
        desc: "Mitgründer und einziger Softwareentwickler eines Start-ups für Dienstplanerstellung und Personalmanagement. Derzeit arbeite ich mit einem Gastronomiebetrieb in Nord-London zusammen und befinde mich in Gesprächen über eine Expansion auf weitere Betriebe in der Region. Die Lösung ist vollständig auf AWS mit CI/CD-Pipelines und benutzerdefinierter Authentifizierung bereitgestellt.",
      },
      orpheus: {
        title: "Orpheus Archives",
        desc: "Eine Full-Stack-Katalog-App für Filme, Bücher, Musik und mehr. Implementierung modularer Datenmodelle sowie benutzerdefinierter Endpunkte für Suche, Sortierung und Analysen.",
      },
      vox_mundi: {
        title: "Vox Mundi",
        desc: "Ein interaktiver globaler Kultur-Tracker und Hub, erstellt mit Next.js 14, Django REST und PostgreSQL (Neon). Implementierung einer Drei-Schichten-Architektur auf Vercel, Railway und Neon mit vollständigen CI/CD-Pipelines. Entwicklung komplexer relationaler Modelle für Kulturen, Medien und Zeitachsen.",
      },
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
      drumroll: {
        title: "ドラムロール",
        desc: "企業向けのシフト作成・従業員管理システムを開発するスタートアップの共同創業者兼唯一のエンジニアです。現在は北ロンドンのホスピタリティ企業と提携しており、近隣エリアへの拡大に向けて協議を進めています。CI/CDパイプラインと独自認証を実装し、AWS上でフル稼働しています。",
      },
      orpheus: {
        title: "オルフィウスアーカイブ",
        desc: "映画、本、音楽などを網羅したフルスタックのカタログアプリ。モジュール化されたデータモデルを採用し、独自の検索、ソート、および分析用エンドポイントを実装しました。",
      },
      vox_mundi: {
        title: "ボックス・ムンド",
        desc: "Next.js 14、Django REST、PostgreSQL（Neon）を使用して構築された、インタラクティブなグローバル文化トラッカー兼ハブ。Vercel、Railway、Neonを使用した3層アーキテクチャをデプロイし、完全なCI/CDパイプラインを構築しました。文化、メディア、タイムラインに関する複雑なリレーショナルモデルを設計・実装しました。",
      },
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
      drumroll: {
        title: "Drumroll",
        desc: "İşletmeler için vardiya planlama ve personel yönetimi sunan bir girişimin kurucu ortağı ve tek mühendisyim. Şu an Kuzey Londra'da bir hizmet sektörü işletmesiyle çalışmaktayım ve bölgedeki diğer işletmelerle büyüme görüşmeleri sürdürüyorum. Sistem; CI/CD süreçleri ve özel kimlik doğrulama ile tamamen AWS üzerinde çalışmaktadır.",
      },
      orpheus: {
        title: "Orpheus Archives",
        desc: "Filmler, kitaplar, müzik ve daha fazlası için tam bir Full-Stack-Katalog-App. Modüler veri modelleri ve benutzerdefinierte Endpunkte für Suche, Sortierung und Analysen.",
      },
      vox_mundi: {
        title: "Vox Mundi",
        desc: "Next.js 14, Django REST ve PostgreSQL (Neon) kullanılarak geliştirilmiş, interaktif bir küresel kültür takipçisi ve merkezi. Vercel, Railway ve Neon üzerinde, tam CI/CD süreçleriyle üç katmanlı (three-tier) bir mimari uygulandı. Kültürler, medya ve zaman çizelgeleri için karmaşık ilişkisel veri modelleri tasarlandı.",
      },
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
