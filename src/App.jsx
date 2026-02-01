import { useEffect, useRef, useState } from "react";
import logoDark from "./assets/1.png";
import logoLight from "./assets/2.png";
import heroVideo from "./assets/hero.mp4";

const navLinks = [
  { label: "Experiences", href: "#experiences" },
  { label: "Trips", href: "#trips" },
  { label: "Stories", href: "#stories" },
  { label: "Visas", href: "#visas" },
  { label: "Contact", href: "#contact" },
];

const experienceHighlights = [
  {
    title: "Tailor-made routes",
    description:
      "Every itinerary is built from one-on-one discovery calls and lifestyle notes.",
    icon: "🧭",
  },
  {
    title: "Calm coordination",
    description:
      "We handle visas, wellness breaks, and surprise touches so you stay present.",
    icon: "🕊️",
  },
  {
    title: "Trusted insiders",
    description:
      "Local hosts in 25+ cities unlock hidden dining rooms, ateliers, and trails.",
    icon: "🤝",
  },
];

const curatedTrips = [
  {
    title: "Cape Serenity",
    location: "Cape Town, SA",
    image:
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c291dGglMjBhZnJpY2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
    days: "6 days",
    focus: "Adventure & wine",
    details: [
      "Table Mountain sunrise hike",
      "Winelands tasting with private driver",
      "Penguin coast sail + art walk",
    ],
  },
  {
    title: "Desert + Skyline",
    location: "Dubai, UAE",
    image:
      "https://images.unsplash.com/photo-1628859017536-c2f1d69f3c84?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
    days: "5 days",
    focus: "City glow",
    details: [
      "Golden dune dinner club",
      "Private atelier shopping",
      "90-min spa + sky lounge circuit",
    ],
  },
  {
    title: "Quiet Grand Duchy",
    location: "Luxembourg",
    image:
      "https://images.unsplash.com/photo-1588336899745-22da91d8f816?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8THV4ZW1ib3VyZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
    days: "4 days",
    focus: "History & calm",
    details: [
      "Old quarter night walk",
      "Fairy-tale valley cycling",
      "Banking hub innovation visits",
    ],
  },
  {
    title: "Stateside Soul",
    location: "Austin & New York, USA",
    image:
      "https://plus.unsplash.com/premium_photo-1691547067778-0320467efa5c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TmV3JTIwWW9yayUyQyUyMFVTQXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
    days: "8 days",
    focus: "Culture mix",
    details: [
      "Live sessions + studio rentals",
      "Food truck crawl and Broadway night",
      "College visits for F1 prep",
    ],
  },
  {
    title: "London Layers",
    location: "London, UK",
    image:
      "https://images.unsplash.com/photo-1506501139174-099022df5260?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bG9uZG9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
    days: "5 days",
    focus: "Creative reset",
    details: [
      "Soho gallery mornings",
      "Thames cocktail cruise",
      "Day trip to Oxford for scholars",
    ],
  },
];

const visaHighlights = [
  {
    title: "F1 student pathway",
    notes: [
      "Timeline planning from I-20 to interview",
      "Mock interview calls + document reviews",
      "Campus visit slots woven into itineraries",
    ],
  },
  {
    title: "Tourist & family visas",
    notes: [
      "Cover letters, lodging proofs, insurance",
      "Airport meet + greet to show confirmed logistics",
      "Dubai, UK, Schengen, US B1/B2 focus",
    ],
  },
  {
    title: "Ghanaian passport assist",
    notes: [
      "Guidance through application + biometric capture",
      "Document prep, appointment booking, courier add-ons",
      "Service fee applies; status updates within 24h",
    ],
  },
  {
    title: "Students & families",
    notes: [
      "Group visa dashboards",
      "Priority embassy dates and courier handling",
      "24h response window for embassy updates",
    ],
  },
];

const testimonials = [
  {
    name: "Mr Felix ",
    trip: "Graduate School Application",
    quote:
      "I like the speed and the constant update and consistent communication. I really appreciate",
  },
  {
    name: "Mrs Dinah Mensah",
    trip: "Flight And Acomodation",
    quote:
      "Thank you so much for the seamless service you provided in booking my trip from Accra to JFK New York , including picking me up and ensuring I arrived safely at my destination at a very affordable rate.",
  },
  {
    name: "Abdul Rauf Safianu",
    trip: "School Application",
    quote:
      "I am super marveled about how fast your team is moving with my graduate school application in the US. I am also very impressed with how well you communicate and make me informed about every step along the way. As for the rate of your service, the least said the better. You are just the best!",
  },
];

const contactChannels = [
  { label: "Studio", value: "Tetegu, Accra" },
  { label: "Email", value: "hello@imashatravel.com" },
  { label: "Phone", value: "+234 054 781 2542 " },
  { label: "WhatsApp", value: "+1 330 237 0886 (tap chat bubble)" },
];

export default function App() {
  const heroVideoRef = useRef(null);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    const stored = window.localStorage.getItem("imasha-theme");
    if (stored) return stored;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("imasha-theme", theme);
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.setAttribute(
        "href",
        theme === "dark" ? "/logo-dark.png" : "/logo-light.png"
      );
    }
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        }),
      {
        threshold: 0.15,
      }
    );

    document
      .querySelectorAll("[data-animate]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video || typeof IntersectionObserver === "undefined") return;

    const playInView = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );

    playInView.observe(video);
    return () => playInView.disconnect();
  }, []);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const smoothScroll = (href) => {
    if (typeof document === "undefined") return;
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const activeLogo = theme === "dark" ? logoDark : logoLight;

  return (
    <>
      <header className="site-header" data-animate>
        <div className="container header-inner">
          <a href="#hero" className="logo" aria-label="Imasha Consults logo">
            <span className="logo-mark">
              <img src={activeLogo} alt="Imasha Consults icon" />
            </span>
            Imasha Consults
          </a>
          <nav className="main-nav" aria-label="Primary">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => smoothScroll(link.href)}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌘"}
          </button>
        </div>
      </header>

      <main>
        <section id="hero" className="hero" data-animate>
          <div className="hero-media" aria-hidden="true">
            <video
              ref={heroVideoRef}
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              src={heroVideo}
            />
            <div className="hero-video-overlay" />
          </div>
          <div className="orb orb-one" aria-hidden="true" />
          <div className="orb orb-two" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Imasha Consults</p>
              <h1>Calm travel, planned with care.</h1>
              <p className="hero-sub">
                Custom trips for students, families, and teams with clear
                timelines and visa guidance.
              </p>
              <div className="hero-actions">
                <button
                  type="button"
                  className="btn primary"
                  onClick={() => smoothScroll("#contact")}
                >
                  Draft my journey
                </button>
                <a className="btn ghost" href="#trips">
                  Browse sample routes
                </a>
              </div>
              <div className="hero-stats">
                <div>
                  <span className="stat-label">Avg. planning time</span>
                  <strong>10 days</strong>
                </div>
                <div>
                  <span className="stat-label">Guest return rate</span>
                  <strong>93%</strong>
                </div>
                <div>
                  <span className="stat-label">Timezone coverage</span>
                  <strong>3 hubs</strong>
                </div>
              </div>
            </div>
            <div className="hero-panel">
              <div className="floating-card" data-animate>
                <p className="floating-label">In progress</p>
                <h3>Desert bloom retreat</h3>
                <p>
                  Wellness-led Morocco route with breathwork guides, sunset dune
                  drives, and chef tables.
                </p>
                <span className="chip">May 2025</span>
              </div>
              <div
                className="floating-card"
                data-animate
                style={{ animationDelay: "0.15s" }}
              >
                <p className="floating-label">Next hold</p>
                <h3>Bespoke Amalfi vow renewal</h3>
                <p>
                  Private sailing days + lemon grove dinner by our chef
                  partners.
                </p>
                <span className="chip soft">Dual city</span>
              </div>
            </div>
          </div>
        </section>

        <section id="experiences" className="section" data-animate>
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Experience design</p>
              <h2>Simply curated, quietly animated</h2>
              <p>
                We mix tactile itineraries with light digital
                touchpoints—minimal planning dashboards, graceful reminders, and
                quick approvals.
              </p>
            </div>
            <div className="highlight-grid">
              {experienceHighlights.map((highlight, index) => (
                <article
                  key={highlight.title}
                  className="highlight-card"
                  data-animate
                  style={{ "--i": index }}
                >
                  <span
                    className="highlight-icon"
                    role="img"
                    aria-label={highlight.title}
                  >
                    {highlight.icon}
                  </span>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="trips" className="section alt" data-animate>
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Curated trips</p>
              <h2>Routes with room to breathe</h2>
              <p>
                Each sample route includes flexible modules. Swap studios,
                chefs, or guides without breaking flow.
              </p>
            </div>
            <div className="trip-grid">
              {curatedTrips.map((trip, index) => (
                <article
                  key={trip.title}
                  className="trip-card"
                  data-animate
                  style={{ "--i": index }}
                >
                  <div
                    className="trip-image"
                    style={{ backgroundImage: `url(${trip.image})` }}
                    aria-label={trip.location}
                  />
                  <div className="trip-body">
                    <div className="trip-top">
                      <div>
                        <p className="trip-location">{trip.location}</p>
                        <h3>{trip.title}</h3>
                      </div>
                      <span className="chip">{trip.days}</span>
                    </div>
                    <p className="trip-focus">Focus — {trip.focus}</p>
                    <ul>
                      {trip.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      className="text-link"
                      onClick={() => smoothScroll("#contact")}
                    >
                      Reserve a slot <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="stories" className="section" data-animate>
          <div className="container testimonials">
            <div className="section-heading">
              <p className="eyebrow">Traveler notes</p>
              <h2>Soft landings, vivid memories</h2>
              <p>
                Gentle timelines, quiet check-ins, and cinematic reveals keep
                guests refreshed.
              </p>
            </div>
            <div className="testimonial-grid">
              {testimonials.map((story, index) => (
                <article
                  key={story.name}
                  className="testimonial-card"
                  data-animate
                  style={{ "--i": index }}
                >
                  <p className="quote">“{story.quote}”</p>
                  <div className="author">
                    <strong>{story.name}</strong>
                    <span>{story.trip}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="visas" className="section" data-animate>
          <div className="container visa-grid">
            <div className="visa-copy">
              <p className="eyebrow">Visa help</p>
              <h2>Paperwork handled with the same calm energy.</h2>
              <p>
                Visa counseling is built into every Imasha Consults plan. From
                F1 student journeys to Schengen and tour visas, plus Ghanaian
                passport facilitation (service fee applies), we coordinate
                documents, appointments, and proof of travel so you can focus on
                packing.
              </p>
              <div className="visa-badges">
                <span className="chip">F1 &amp; J1</span>
                <span className="chip">Schengen</span>
                <span className="chip">B1/B2</span>
                <span className="chip">UAE</span>
              </div>
            </div>
            <div className="visa-cards">
              {visaHighlights.map((item, index) => (
                <article
                  key={item.title}
                  className="visa-card"
                  data-animate
                  style={{ "--i": index }}
                >
                  <h3>{item.title}</h3>
                  <ul>
                    {item.notes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section alt" data-animate>
          <div className="container contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">Start a calm plan</p>
              <h2>Tell us how you want to feel on your next journey.</h2>
              <p>
                Share a moodboard, a playlist, or a single line about why you
                need this trip. We will reply with a voice note or a tidy deck
                within 24 hours.
              </p>
              <ul className="contact-list">
                {contactChannels.map((channel) => (
                  <li key={channel.label}>
                    <span>{channel.label}</span>
                    <strong>{channel.value}</strong>
                  </li>
                ))}
              </ul>
            </div>
            <form
              className="contact-form"
              onSubmit={(event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                console.info(
                  "Imasha Consults contact request",
                  Object.fromEntries(formData)
                );
                event.currentTarget.reset();
              }}
            >
              <label htmlFor="name">Full name</label>
              <input
                id="name"
                name="name"
                placeholder="Amara Daniels"
                required
              />

              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@imashatravel.com"
                required
              />

              <label htmlFor="vibe">Trip vibe / notes</label>
              <textarea
                id="vibe"
                name="vibe"
                rows="4"
                placeholder="Sunrise hikes, film photography, plant-forward dining..."
                required
              />

              <button type="submit" className="btn primary">
                Send idea
              </button>
              <p className="form-note">
                We keep details private and only respond with tailored options.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer" data-animate>
        <div className="container footer-inner">
          <div>
            <span className="logo-mark footer-logo">
              <img src={activeLogo} alt="Imasha Consults icon" />
            </span>
            <p>Imasha Consults curates calm, well-paced travel experiences.</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>Tetegu, Accra</p>
            <p>hello@imashatravel.com</p>
            <p>+233 0547 812 542</p>
          </div>
          <div>
            <h4>Social</h4>
            <div className="social-list">
              <a
                href="https://wa.me/2348030004421"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <img
                  className="social-icon"
                  src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000"
                  alt="WhatsApp"
                />
              </a>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
              >
                <img
                  className="social-icon"
                  src="https://img.icons8.com/?size=100&id=118640&format=png&color=000000"
                  alt="TikTok"
                />
              </a>
              <a
                href="https://www.snapchat.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Snapchat"
              >
                <img
                  className="social-icon"
                  src="https://img.icons8.com/?size=100&id=KrtKMa6Fduil&format=png&color=000000"
                  alt="Snapchat"
                />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <img
                  className="social-icon"
                  src="https://img.icons8.com/?size=100&id=13912&format=png&color=000000"
                  alt="Facebook"
                />
              </a>
            </div>
          </div>
        </div>
        <p className="footer-note">
          © {new Date().getFullYear()} Imasha Consults. Designed for soft
          landings.
        </p>
      </footer>

      <a
        className="whatsapp-bubble"
        href="https://wa.me/2348030004421"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Imasha Consults on WhatsApp"
      >
        <span role="img" aria-hidden="true">
          💬
        </span>
        <strong>WhatsApp Chat</strong>
      </a>
    </>
  );
}
