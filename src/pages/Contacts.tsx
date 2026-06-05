import { useNavigate } from "react-router-dom";

export default function Contacts() {
  const navigate = useNavigate();

  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo" style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          КУШАЕМ*СЛУШАЕМ
        </div>
        <nav style={{ display: "flex" }}>
          <a href="/" onClick={(e) => { e.preventDefault(); navigate("/"); }}>Меню</a>
          <a href="#">О нас</a>
          <a href="/contacts" onClick={(e) => { e.preventDefault(); navigate("/contacts"); }}>Контакты</a>
        </nav>
        <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }} onClick={() => navigate("/concert")}>
          Афиша
        </button>
      </header>

      <main>
        <section className="hero" style={{ minHeight: "260px" }}>
          <div className="hero-content" style={{ borderRight: "none" }}>
            <h1 className="hero-title">
              НАЙДИ
              <br />
              <span>НАС</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-[#555]">
              Мы ждём тебя каждый день. Приходи сам, приводи друзей — столов хватит на всех.
            </p>
          </div>
          <div
            className="hero-img"
            style={{
              background:
                "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80') center/cover",
            }}
          >
            <div className="sticker">МЫ<br />ОТКРЫТЫ!</div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * КУШАЕМ И СЛУШАЕМ * КУРИНЫЕ БУРГЕРЫ * БЕЗ МАЙОНЕЗА * ЖИВАЯ МУЗЫКА * ПРИХОДИ К НАМ *
            КУШАЕМ И СЛУШАЕМ * КУРИНЫЕ БУРГЕРЫ * БЕЗ МАЙОНЕЗА * ЖИВАЯ МУЗЫКА * ПРИХОДИ К НАМ
          </div>
        </div>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "48px" }}>КОНТАКТЫ</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px" }}>

            <div className="menu-card" style={{ padding: "32px" }}>
              <div style={{ fontSize: "40px", marginBottom: "16px" }}>📍</div>
              <h3 style={{ marginBottom: "12px" }}>Адрес</h3>
              <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.7 }}>
                г. Москва,<br />
                ул. Примерная, д. 1<br />
                м. Центральная
              </p>
            </div>

            <div className="menu-card" style={{ padding: "32px" }}>
              <div style={{ fontSize: "40px", marginBottom: "16px" }}>📞</div>
              <h3 style={{ marginBottom: "12px" }}>Телефон</h3>
              <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.7 }}>
                <a href="tel:+78001234567" style={{ color: "var(--primary)", fontWeight: 700, textDecoration: "none" }}>
                  8 800 123-45-67
                </a><br />
                Звонок бесплатный
              </p>
            </div>

            <div className="menu-card" style={{ padding: "32px" }}>
              <div style={{ fontSize: "40px", marginBottom: "16px" }}>✉️</div>
              <h3 style={{ marginBottom: "12px" }}>Email</h3>
              <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.7 }}>
                <a href="mailto:hi@kushaem-slushaem.ru" style={{ color: "var(--primary)", fontWeight: 700, textDecoration: "none" }}>
                  hi@kushaem-slushaem.ru
                </a>
              </p>
            </div>

            <div className="menu-card" style={{ padding: "32px" }}>
              <div style={{ fontSize: "40px", marginBottom: "16px" }}>🕐</div>
              <h3 style={{ marginBottom: "12px" }}>Часы работы</h3>
              <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.7 }}>
                Пн – Пт: 11:00 – 22:00<br />
                Сб – Вс: 10:00 – 23:00
              </p>
            </div>

          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">КУШАЕМ*СЛУШАЕМ</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Куриные бургеры без вредных соусов и с живой музыкой. Честная еда для честных людей.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li><a href="/" onClick={(e) => { e.preventDefault(); navigate("/"); }} style={{ color: "inherit", textDecoration: "none" }}>Меню</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>О нас</a></li>
            <li><a href="/concert" onClick={(e) => { e.preventDefault(); navigate("/concert"); }} style={{ color: "inherit", textDecoration: "none" }}>Афиша</a></li>
            <li><a href="/contacts" onClick={(e) => { e.preventDefault(); navigate("/contacts"); }} style={{ color: "inherit", textDecoration: "none" }}>Контакты</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн–Пт: 11:00–22:00</li>
            <li>Сб–Вс: 10:00–23:00</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li><a href="tel:+78001234567" style={{ color: "inherit", textDecoration: "none" }}>8 800 123-45-67</a></li>
            <li><a href="mailto:hi@kushaem-slushaem.ru" style={{ color: "inherit", textDecoration: "none" }}>hi@kushaem-slushaem.ru</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}
