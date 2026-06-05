import { useNavigate } from "react-router-dom";

const team = [
  {
    id: 1,
    name: "Алексей Громов",
    role: "Шеф-повар",
    experience: "Стаж: 12 лет",
    photo: "https://cdn.poehali.dev/projects/ac53f79e-b0ae-4cb2-8fcc-a0300755e8f3/files/5f50de10-f68b-4b50-b475-fe29bcc465e3.jpg",
    tag: "Шеф",
    tagColor: "var(--primary)",
  },
  {
    id: 2,
    name: "Марина Лисова",
    role: "Управляющая",
    experience: "Стаж: 8 лет",
    photo: "https://cdn.poehali.dev/projects/ac53f79e-b0ae-4cb2-8fcc-a0300755e8f3/files/61db976a-f99f-4b01-8ac6-356f99fee4bb.jpg",
    tag: "Менеджмент",
    tagColor: "var(--secondary)",
  },
  {
    id: 3,
    name: "Дмитрий Фролов",
    role: "Официант",
    experience: "Стаж: 3 года",
    photo: "https://cdn.poehali.dev/projects/ac53f79e-b0ae-4cb2-8fcc-a0300755e8f3/files/b752bba8-2632-43c6-a500-196e4e69b0b0.jpg",
    tag: "Зал",
    tagColor: "#ff9800",
  },
  {
    id: 4,
    name: "Ольга Зайцева",
    role: "Бариста",
    experience: "Стаж: 5 лет",
    photo: "https://cdn.poehali.dev/projects/ac53f79e-b0ae-4cb2-8fcc-a0300755e8f3/files/c8c118d6-cd84-4550-9626-4894962ed39b.jpg",
    tag: "Напитки",
    tagColor: "#4caf50",
  },
];

export default function Team() {
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
        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">НАША КОМАНДА</h2>
            <span style={{ fontWeight: 800, textTransform: "uppercase", fontSize: "14px" }}>
              {team.length} сотрудника
            </span>
          </div>

          <div className="menu-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}>
            {team.map((member) => (
              <div key={member.id} className="menu-card">
                <span className="menu-tag" style={{ background: member.tagColor, color: "white" }}>
                  {member.tag}
                </span>
                <img
                  src={member.photo}
                  alt={member.name}
                  style={{ width: "100%", aspectRatio: "1 / 1", objectFit: "cover", display: "block" }}
                />
                <div className="menu-card-body" style={{ textAlign: "center", padding: "20px" }}>
                  <h3 style={{ marginBottom: "6px", fontSize: "18px" }}>{member.name}</h3>
                  <p style={{ fontWeight: 700, color: "var(--primary)", fontSize: "14px", textTransform: "uppercase", marginBottom: "4px" }}>
                    {member.role}
                  </p>
                  <p style={{ fontSize: "13px", color: "#999", fontWeight: 600 }}>{member.experience}</p>
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
