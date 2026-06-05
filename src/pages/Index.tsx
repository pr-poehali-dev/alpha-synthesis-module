import React from "react";

const burgers = [
  {
    id: 1,
    name: "Классика",
    tag: "Хит продаж",
    tagColor: "var(--primary)",
    tagTextColor: "white",
    price: "390 ₽",
    img: "https://cdn.poehali.dev/projects/ac53f79e-b0ae-4cb2-8fcc-a0300755e8f3/files/a75569a9-91ef-4a85-a0e5-29602f9dd940.jpg",
    ingredients: ["Куриная котлета гриль", "Листья салата", "Помидор", "Огурец", "Горчичный соус", "Бриошь-булка"],
    kcal: 480, protein: 32, fat: 14, carbs: 52,
  },
  {
    id: 2,
    name: "Острый Петух",
    tag: "Огонь",
    tagColor: "var(--secondary)",
    tagTextColor: "white",
    price: "420 ₽",
    img: "https://cdn.poehali.dev/projects/ac53f79e-b0ae-4cb2-8fcc-a0300755e8f3/files/440bc80d-88bf-4c45-a5f7-dc7061ad47a3.jpg",
    ingredients: ["Острая куриная котлета", "Халапеньо", "Красный лук", "Авокадо", "Чили-соус", "Цельнозерновая булка"],
    kcal: 520, protein: 34, fat: 18, carbs: 48,
  },
  {
    id: 3,
    name: "Зелёный вайб",
    tag: "Популярное",
    tagColor: "var(--accent)",
    tagTextColor: "var(--dark)",
    price: "410 ₽",
    img: "https://cdn.poehali.dev/projects/ac53f79e-b0ae-4cb2-8fcc-a0300755e8f3/files/8602281f-efc7-4063-901e-60316ac98232.jpg",
    ingredients: ["Куриная котлета гриль", "Руккола", "Вяленые томаты", "Огурец", "Песто без майонеза", "Артизанская булка"],
    kcal: 460, protein: 30, fat: 13, carbs: 50,
  },
  {
    id: 4,
    name: "Сырный босс",
    tag: "Новинка",
    tagColor: "#ff9800",
    tagTextColor: "white",
    price: "450 ₽",
    img: "https://cdn.poehali.dev/projects/ac53f79e-b0ae-4cb2-8fcc-a0300755e8f3/files/a75569a9-91ef-4a85-a0e5-29602f9dd940.jpg",
    ingredients: ["Двойная куриная котлета", "Чеддер", "Бекон из индейки", "Лук-гриль", "Горчица", "Поджаренная булка"],
    kcal: 610, protein: 42, fat: 22, carbs: 54,
  },
  {
    id: 5,
    name: "Лёгкий ветер",
    tag: "Лёгкий",
    tagColor: "#4caf50",
    tagTextColor: "white",
    price: "370 ₽",
    img: "https://cdn.poehali.dev/projects/ac53f79e-b0ae-4cb2-8fcc-a0300755e8f3/files/440bc80d-88bf-4c45-a5f7-dc7061ad47a3.jpg",
    ingredients: ["Куриная котлета на пару", "Айсберг", "Томат черри", "Огурец", "Йогуртовый соус", "Цельнозерновая булка"],
    kcal: 380, protein: 28, fat: 8, carbs: 44,
  },
  {
    id: 6,
    name: "Гриль-мастер",
    tag: "Шеф рекомендует",
    tagColor: "var(--primary)",
    tagTextColor: "white",
    price: "460 ₽",
    img: "https://cdn.poehali.dev/projects/ac53f79e-b0ae-4cb2-8fcc-a0300755e8f3/files/8602281f-efc7-4063-901e-60316ac98232.jpg",
    ingredients: ["Куриная котлета угольный гриль", "Болгарский перец гриль", "Руккола", "Пармезан", "Томатный соус", "Фокачча-булка"],
    kcal: 530, protein: 36, fat: 16, carbs: 55,
  },
  {
    id: 7,
    name: "Азиатский бит",
    tag: "Экзотика",
    tagColor: "var(--secondary)",
    tagTextColor: "white",
    price: "430 ₽",
    img: "https://cdn.poehali.dev/projects/ac53f79e-b0ae-4cb2-8fcc-a0300755e8f3/files/a75569a9-91ef-4a85-a0e5-29602f9dd940.jpg",
    ingredients: ["Куриная котлета в панко", "Дайкон", "Морковь по-корейски", "Кинза", "Терияки-соус", "Булка с кунжутом"],
    kcal: 510, protein: 33, fat: 15, carbs: 58,
  },
  {
    id: 8,
    name: "Средиземноморец",
    tag: "Нежный",
    tagColor: "#00bcd4",
    tagTextColor: "white",
    price: "440 ₽",
    img: "https://cdn.poehali.dev/projects/ac53f79e-b0ae-4cb2-8fcc-a0300755e8f3/files/440bc80d-88bf-4c45-a5f7-dc7061ad47a3.jpg",
    ingredients: ["Куриная котлета с зеленью", "Фета", "Оливки", "Свежий огурец", "Хумус", "Питта-булка"],
    kcal: 470, protein: 31, fat: 17, carbs: 46,
  },
  {
    id: 9,
    name: "Грибной лес",
    tag: "Сезонный",
    tagColor: "#795548",
    tagTextColor: "white",
    price: "415 ₽",
    img: "https://cdn.poehali.dev/projects/ac53f79e-b0ae-4cb2-8fcc-a0300755e8f3/files/8602281f-efc7-4063-901e-60316ac98232.jpg",
    ingredients: ["Куриная котлета гриль", "Шампиньоны гриль", "Шпинат", "Лук-порей", "Сливочно-чесночный соус", "Бриошь"],
    kcal: 490, protein: 33, fat: 15, carbs: 51,
  },
  {
    id: 10,
    name: "Барбекю-гитара",
    tag: "Дымный",
    tagColor: "#e91e63",
    tagTextColor: "white",
    price: "455 ₽",
    img: "https://cdn.poehali.dev/projects/ac53f79e-b0ae-4cb2-8fcc-a0300755e8f3/files/a75569a9-91ef-4a85-a0e5-29602f9dd940.jpg",
    ingredients: ["Куриная котлета копчёная", "Хрустящий лук", "Томат", "Айсберг", "Домашний BBQ-соус", "Поджаренная булка"],
    kcal: 560, protein: 38, fat: 19, carbs: 53,
  },
];

type Burger = typeof burgers[0];

function BurgerModal({ burger, onClose }: { burger: Burger; onClose: () => void }) {
  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{ background: "var(--bg)", border: "var(--border)", boxShadow: "var(--shadow)", width: "100%", maxWidth: "540px", position: "relative", maxHeight: "90vh", overflowY: "auto" }}>
        <button onClick={onClose} style={{ position: "absolute", top: "12px", right: "16px", background: "none", border: "none", fontSize: "28px", cursor: "pointer", fontWeight: 800, zIndex: 1, lineHeight: 1 }}>×</button>

        <div style={{ position: "relative" }}>
          <img src={burger.img} alt={burger.name} style={{ width: "100%", height: "260px", objectFit: "cover", display: "block" }} />
          <span style={{ position: "absolute", top: "16px", left: "16px", background: burger.tagColor, color: burger.tagTextColor ?? "white", padding: "4px 12px", border: "var(--border)", fontWeight: 800, fontSize: "12px", textTransform: "uppercase" }}>
            {burger.tag}
          </span>
        </div>

        <div style={{ padding: "28px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <h2 style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "22px", textTransform: "uppercase" }}>{burger.name}</h2>
            <span className="price">{burger.price}</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px", marginBottom: "24px" }}>
            {[
              { label: "Калории", value: `${burger.kcal} ккал` },
              { label: "Белки", value: `${burger.protein} г` },
              { label: "Жиры", value: `${burger.fat} г` },
              { label: "Углеводы", value: `${burger.carbs} г` },
            ].map((item) => (
              <div key={item.label} style={{ background: "var(--dark)", color: "white", padding: "12px 8px", textAlign: "center", border: "var(--border)" }}>
                <div style={{ fontSize: "15px", fontWeight: 800, marginBottom: "4px" }}>{item.value}</div>
                <div style={{ fontSize: "11px", color: "#aaa", textTransform: "uppercase" }}>{item.label}</div>
              </div>
            ))}
          </div>

          <h4 style={{ fontWeight: 800, textTransform: "uppercase", fontSize: "13px", marginBottom: "12px" }}>Состав:</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
            {burger.ingredients.map((ing, i) => (
              <li key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#555" }}>
                <span style={{ color: "var(--primary)", fontWeight: 800, fontSize: "16px" }}>—</span> {ing}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function BookingModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = React.useState({ name: "", surname: "", phone: "", date: "", time: "" });
  const [sent, setSent] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(0,0,0,0.6)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        style={{
          background: "var(--bg)",
          border: "var(--border)",
          boxShadow: "var(--shadow)",
          padding: "40px",
          width: "100%",
          maxWidth: "480px",
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: "16px", right: "16px",
            background: "none", border: "none", fontSize: "24px",
            cursor: "pointer", fontWeight: 800, lineHeight: 1,
          }}
        >×</button>

        {sent ? (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>🎉</div>
            <h3 style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "22px", marginBottom: "12px", textTransform: "uppercase" }}>
              Столик забронирован!
            </h3>
            <p style={{ color: "#666", lineHeight: 1.6 }}>
              Ждём вас, {form.name}! Если что-то изменится — звоните нам.
            </p>
            <button className="btn-cta" style={{ marginTop: "24px", background: "var(--primary)", color: "white" }} onClick={onClose}>
              Закрыть
            </button>
          </div>
        ) : (
          <>
            <h3 style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "20px", textTransform: "uppercase", marginBottom: "24px" }}>
              Забронировать столик
            </h3>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div>
                  <label style={{ fontSize: "12px", fontWeight: 800, textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Имя</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Иван"
                    style={{ width: "100%", padding: "10px 12px", border: "var(--border)", background: "white", fontFamily: "inherit", fontSize: "14px" }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "12px", fontWeight: 800, textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Фамилия</label>
                  <input
                    required
                    value={form.surname}
                    onChange={(e) => setForm({ ...form, surname: e.target.value })}
                    placeholder="Иванов"
                    style={{ width: "100%", padding: "10px 12px", border: "var(--border)", background: "white", fontFamily: "inherit", fontSize: "14px" }}
                  />
                </div>
              </div>
              <div>
                <label style={{ fontSize: "12px", fontWeight: 800, textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Номер телефона</label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+7 900 000-00-00"
                  style={{ width: "100%", padding: "10px 12px", border: "var(--border)", background: "white", fontFamily: "inherit", fontSize: "14px" }}
                />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div>
                  <label style={{ fontSize: "12px", fontWeight: 800, textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Дата</label>
                  <input
                    required
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    style={{ width: "100%", padding: "10px 12px", border: "var(--border)", background: "white", fontFamily: "inherit", fontSize: "14px" }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "12px", fontWeight: 800, textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Время</label>
                  <input
                    required
                    type="time"
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    style={{ width: "100%", padding: "10px 12px", border: "var(--border)", background: "white", fontFamily: "inherit", fontSize: "14px" }}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn-cta"
                style={{ background: "var(--primary)", color: "white", marginTop: "8px", fontSize: "14px", padding: "14px" }}
              >
                Забронировать
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default function Index() {
  const [showBooking, setShowBooking] = React.useState(false);
  const [selectedBurger, setSelectedBurger] = React.useState<Burger | null>(null);

  return (
    <>
      <div className="grain-overlay" />
      {showBooking && <BookingModal onClose={() => setShowBooking(false)} />}
      {selectedBurger && <BurgerModal burger={selectedBurger} onClose={() => setSelectedBurger(null)} />}

      <header className="header">
        <div className="logo">КУШАЕМ*СЛУШАЕМ</div>
        <nav style={{ display: "flex" }}>
          <a href="#" onClick={(e) => { e.preventDefault(); document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" }); }}>Меню</a>
          <a href="/about" onClick={(e) => { e.preventDefault(); window.location.href = "/about"; }}>О нас</a>
          <a href="/contacts" onClick={(e) => { e.preventDefault(); window.location.href = "/contacts"; }}>Контакты</a>
        </nav>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "stretch", gap: "4px", minWidth: 0 }}>
          <button className="btn-cta" style={{ background: "var(--primary)", color: "white", fontSize: "11px", padding: "6px 10px", whiteSpace: "nowrap" }} onClick={() => window.location.href = "/concert"}>
            Афиша
          </button>
          <button className="btn-cta" style={{ background: "var(--accent)", color: "var(--dark)", fontSize: "11px", padding: "6px 10px", whiteSpace: "nowrap" }} onClick={() => setShowBooking(true)}>
            Забронировать
          </button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              БЕЗ ВРЕДА,
              <br />
              ТОЛЬКО <span>ВКУС</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Куриные бургеры без майонеза и вредных соусов. Только натуральные ингредиенты и атмосфера настоящего дайнера. А пока ты ешь — на сцене живая музыка: джаз, соул и фанк каждую пятницу и субботу.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }} onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}>
                Смотреть меню
              </button>
              <button className="btn-cta" style={{ background: "white" }} onClick={() => window.location.href = "/team"}>
                Наш состав
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              БЕЗ
              <br />
              МАЙОНЕЗА!
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ЗДОРОВО
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "35%", left: "10%" }}>
              #ЖИВАЯМУЗЫКА
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "50%", left: "10%" }}>
              #ЗДОРОВЬЕ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "65%", left: "10%" }}>
              #ВАЙБ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ВКУСНО
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * КУРИНЫЕ БУРГЕРЫ * БЕЗ МАЙОНЕЗА * ТОЛЬКО НАТУРАЛЬНОЕ * ЖИВАЯ МУЗЫКА * КУШАЕМ И СЛУШАЕМ *
            КУРИНЫЕ БУРГЕРЫ * БЕЗ МАЙОНЕЗА * ТОЛЬКО НАТУРАЛЬНОЕ * ЖИВАЯ МУЗЫКА * КУШАЕМ И СЛУШАЕМ
          </div>
        </div>

        <section className="section-padding" id="menu">
          <div className="section-header">
            <h2 className="section-title">НАШЕ МЕНЮ</h2>
            <span
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              10 бургеров
            </span>
          </div>

          <div className="menu-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
            {burgers.map((burger) => (
              <div className="menu-card" key={burger.id} onClick={() => setSelectedBurger(burger)} style={{ cursor: "pointer" }}>
                <span className="menu-tag" style={{ background: burger.tagColor, color: burger.tagTextColor }}>
                  {burger.tag}
                </span>
                <img src={burger.img} alt={burger.name} />
                <div className="menu-card-body">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <h3>{burger.name}</h3>
                    <span className="price">{burger.price}</span>
                  </div>
                  <ul style={{ fontSize: "13px", color: "#666", listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
                    {burger.ingredients.map((ing, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <span style={{ color: "var(--primary)", fontWeight: 800 }}>—</span> {ing}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ЕДА + МУЗЫКА = КАЙФ.</h2>
            <p className="vibe-text">
              Мы верим: вкусная еда должна быть честной. Никакого майонеза, никаких скрытых добавок — только куриное мясо,
              свежие овощи и настоящие соусы. А пока ты ешь — играет живая музыка. Просто приходи с аппетитом.
            </p>

          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @KUSHАЕМ.СЛУШАЕМ
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/ac53f79e-b0ae-4cb2-8fcc-a0300755e8f3/files/a75569a9-91ef-4a85-a0e5-29602f9dd940.jpg"
                alt="Фото 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/ac53f79e-b0ae-4cb2-8fcc-a0300755e8f3/files/440bc80d-88bf-4c45-a5f7-dc7061ad47a3.jpg"
                alt="Фото 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/ac53f79e-b0ae-4cb2-8fcc-a0300755e8f3/files/8602281f-efc7-4063-901e-60316ac98232.jpg"
                alt="Фото 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/ac53f79e-b0ae-4cb2-8fcc-a0300755e8f3/files/a75569a9-91ef-4a85-a0e5-29602f9dd940.jpg"
                alt="Фото 4"
              />
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
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="/about" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="/contacts" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
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
            <li>
              <a href="tel:+78001234567" style={{ color: "inherit", textDecoration: "none" }}>
                8 800 123-45-67
              </a>
            </li>
            <li>
              <a href="mailto:hi@kushaem-slushaem.ru" style={{ color: "inherit", textDecoration: "none" }}>
                hi@kushaem-slushaem.ru
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}