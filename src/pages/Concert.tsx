import { useNavigate } from "react-router-dom";

const artists = [
  {
    id: 1,
    name: "The Groove Kings",
    genre: "Soul / Funk",
    date: "14 июня, пятница",
    time: "20:00",
    sortDate: new Date("2025-06-14T20:00"),
    description: "Легендарный квартет из Москвы. Живой фанк, Hammond орган и медные духовые — атмосфера чистых 70-х.",
    tag: "Аншлаг",
    tagColor: "var(--primary)",
  },
  {
    id: 2,
    name: "Lena Waves",
    genre: "Jazz / Neo-soul",
    date: "21 июня, пятница",
    time: "21:00",
    sortDate: new Date("2025-06-21T21:00"),
    description: "Нежный джаз с нотками нео-сула. Голос Лены и контрабас создают атмосферу уютного летнего вечера.",
    tag: "Новый артист",
    tagColor: "var(--secondary)",
  },
  {
    id: 3,
    name: "Radio Retro Band",
    genre: "Retro Pop / Rock",
    date: "28 июня, пятница",
    time: "20:30",
    sortDate: new Date("2025-06-28T20:30"),
    description: "Хиты 60-х и 70-х в живом исполнении. Пять музыкантов, которые знают, как поднять настроение.",
    tag: "Популярно",
    tagColor: "var(--accent)",
    tagTextColor: "var(--dark)",
  },
  {
    id: 4,
    name: "DJ Vinyl Sun",
    genre: "Disco / Electronic",
    date: "5 июля, суббота",
    time: "22:00",
    sortDate: new Date("2025-07-05T22:00"),
    description: "Диско-сеты на виниле. Настоящий проигрыватель, настоящий звук — танцы до закрытия.",
    tag: "Ночной сет",
    tagColor: "#e91e63",
  },
  {
    id: 5,
    name: "Братья Чики",
    genre: "Acoustic / Folk",
    date: "12 июля, суббота",
    time: "19:00",
    sortDate: new Date("2025-07-12T19:00"),
    description: "Акустический дуэт с авторскими песнями. Тихий, душевный вечер с гитарой и историями.",
    tag: "Камерно",
    tagColor: "#4caf50",
  },
  {
    id: 6,
    name: "Москва Бэнд",
    genre: "Blues / Rock",
    date: "19 июля, пятница",
    time: "21:00",
    sortDate: new Date("2025-07-19T21:00"),
    description: "Тяжёлый блюз и рок. Три гитары, барабаны и голос, который пробирает до мурашек.",
    tag: "Горячо",
    tagColor: "#ff9800",
  },
].sort((a, b) => a.sortDate.getTime() - b.sortDate.getTime());

export default function Concert() {
  const navigate = useNavigate();

  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo" style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          КУШАЕМ*СЛУШАЕМ
        </div>
        <nav style={{ display: "flex", gap: "0" }}>
          <a href="/" onClick={(e) => { e.preventDefault(); navigate("/"); }}>Меню</a>
          <a href="#">О нас</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
          Афиша
        </button>
      </header>

      <main>
        <section className="hero" style={{ minHeight: "300px" }}>
          <div className="hero-content" style={{ borderRight: "none" }}>
            <h1 className="hero-title">
              ЖИВАЯ
              <br />
              <span>МУЗЫКА</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 leading-relaxed text-[#555]">
              Каждую пятницу и субботу у нас выступают живые артисты. Ешь бургер — слушай музыку. Вот и весь рецепт.
            </p>
          </div>
          <div
            className="hero-img"
            style={{
              background:
                "url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80') center/cover",
            }}
          >
            <div className="sticker">
              ЖИВОЙ
              <br />
              ЗВУК!
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ЖИВАЯ МУЗЫКА * КАЖДУЮ ПЯТНИЦУ * SOUL * FUNK * JAZZ * BLUES * DISCO * КУШАЕМ И СЛУШАЕМ *
            ЖИВАЯ МУЗЫКА * КАЖДУЮ ПЯТНИЦУ * SOUL * FUNK * JAZZ * BLUES * DISCO * КУШАЕМ И СЛУШАЕМ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">АФИША</h2>
            <span style={{ fontWeight: 800, textTransform: "uppercase", fontSize: "14px" }}>Июнь — Июль 2025</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {artists.map((artist) => (
              <div
                key={artist.id}
                className="menu-card"
                style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "start", padding: "0" }}
              >
                <div className="menu-card-body" style={{ padding: "24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px", flexWrap: "wrap" }}>
                    <span
                      className="menu-tag"
                      style={{
                        position: "static",
                        background: artist.tagColor,
                        color: artist.tagTextColor ?? "white",
                        fontSize: "11px",
                      }}
                    >
                      {artist.tag}
                    </span>
                    <span style={{ fontSize: "13px", color: "#999", fontWeight: 600 }}>{artist.genre}</span>
                  </div>
                  <h3 style={{ fontSize: "24px", marginBottom: "8px" }}>{artist.name}</h3>
                  <p style={{ fontSize: "14px", color: "#666", marginBottom: "16px", lineHeight: 1.6 }}>
                    {artist.description}
                  </p>
                  <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                    <span style={{ fontWeight: 800, fontSize: "14px" }}>📅 {artist.date}</span>
                    <span style={{ fontWeight: 800, fontSize: "14px" }}>🕐 {artist.time}</span>
                  </div>
                </div>
                <div
                  style={{
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    gap: "12px",
                    borderLeft: "var(--border)",
                    height: "100%",
                  }}
                >
                  <button className="btn-cta" style={{ background: "var(--primary)", color: "white", whiteSpace: "nowrap" }}>
                    Записаться
                  </button>
                </div>
              </div>
            ))}
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
            <li><a href="/" style={{ color: "inherit", textDecoration: "none" }}>Меню</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>О нас</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Афиша</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Контакты</a></li>
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