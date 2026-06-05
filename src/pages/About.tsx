import { useNavigate } from "react-router-dom";

export default function About() {
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
          <a href="/about" onClick={(e) => { e.preventDefault(); navigate("/about"); }}>О нас</a>
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
              НАША
              <br />
              <span>ИСТОРИЯ</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-[#555]">
              Кафе, где еда честная, а музыка — живая.
            </p>
          </div>
          <div
            className="hero-img"
            style={{
              background:
                "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80') center/cover",
            }}
          >
            <div className="sticker">РАБОТАЕМ<br />С 2008</div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ЧЕСТНАЯ ЕДА * ЖИВАЯ МУЗЫКА * БЕЗ МАЙОНЕЗА * КУРИНЫЕ БУРГЕРЫ * КУШАЕМ И СЛУШАЕМ *
            ЧЕСТНАЯ ЕДА * ЖИВАЯ МУЗЫКА * БЕЗ МАЙОНЕЗА * КУРИНЫЕ БУРГЕРЫ * КУШАЕМ И СЛУШАЕМ
          </div>
        </div>

        <section className="section-padding">
          <div style={{ maxWidth: "760px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "40px" }}>

            <div className="menu-card" style={{ padding: "40px" }}>
              <h2 style={{ fontFamily: "var(--font-unbounded, 'Unbounded')", fontSize: "28px", marginBottom: "20px", textTransform: "uppercase" }}>
                Как всё началось
              </h2>
              <p style={{ fontSize: "16px", color: "#555", lineHeight: 1.9 }}>
                Всё началось с простой идеи: почему фастфуд должен быть вредным? Основатели кафе — два друга, которые
                обожали бургеры, но не хотели есть майонез и химические соусы. Они решили: можно сделать иначе.
                В 2024 году открылось первое кафе «Кушаем и слушаем» — место, где куриные бургеры готовятся
                только из натуральных ингредиентов.
              </p>
            </div>

            <div className="menu-card" style={{ padding: "40px" }}>
              <h2 style={{ fontFamily: "var(--font-unbounded, 'Unbounded')", fontSize: "28px", marginBottom: "20px", textTransform: "uppercase" }}>
                Еда без компромиссов
              </h2>
              <p style={{ fontSize: "16px", color: "#555", lineHeight: 1.9 }}>
                Мы убрали из меню всё лишнее: никакого майонеза, никаких консервантов, никаких скрытых добавок.
                Только свежее куриное мясо, хрустящие овощи и соусы, которые мы готовим сами. Каждый бургер —
                это маленький подвиг в мире здорового питания. Вкусно и честно — вот наш главный принцип.
              </p>
            </div>

            <div className="menu-card" style={{ padding: "40px" }}>
              <h2 style={{ fontFamily: "var(--font-unbounded, 'Unbounded')", fontSize: "28px", marginBottom: "20px", textTransform: "uppercase" }}>
                Музыка как часть меню
              </h2>
              <p style={{ fontSize: "16px", color: "#555", lineHeight: 1.9 }}>
                Название «Кушаем и слушаем» — не просто слова. Мы убеждены: хорошая еда звучит лучше под живую музыку.
                Каждую пятницу и субботу у нас выступают артисты — джаз, соул, фанк, блюз. Атмосфера дайнера 70-х
                создаёт ощущение, что ты попал в другое время, где всё было немного медленнее и вкуснее.
              </p>
            </div>

            <div
              style={{
                background: "var(--dark)",
                color: "white",
                padding: "48px 40px",
                border: "var(--border)",
                boxShadow: "var(--shadow)",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontSize: "clamp(22px, 4vw, 36px)",
                  lineHeight: 1.4,
                  color: "var(--accent)",
                }}
              >
                «Кушаем здоровую еду, слушаем здоровую музыку»
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
            <li><a href="/about" onClick={(e) => { e.preventDefault(); navigate("/about"); }} style={{ color: "inherit", textDecoration: "none" }}>О нас</a></li>
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