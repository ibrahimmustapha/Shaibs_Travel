import { useEffect, useState } from "react";

const navLinks = [
  { label: "Destinations", href: "#destinations" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const heroHighlights = [
  {
    icon: "🧭",
    title: "Strategic planners",
    description:
      "Dedicated travel architects aligning every journey with your goals.",
  },
  {
    icon: "🏆",
    title: "Partner perks",
    description:
      "VIP upgrades, custom access, and insider guides in 30+ global cities.",
  },
  {
    icon: "⚡",
    title: "Rapid turnaround",
    description:
      "Tailored proposals in under 48 hours, even for complex multi-city routes.",
  },
];

const heroStats = [
  { label: "Years orchestrating travel", value: "12" },
  { label: "Journeys delivered annually", value: "320+" },
  { label: "Traveler return rate", value: "94%" },
];

const destinations = [
  {
    name: "Bali, Indonesia",
    excerpt:
      "Private villas, wellness rituals, and beach clubs curated for your pace.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    category: "Leisure Retreat",
    duration: "7 nights",
    focus: "Wellness Arc",
    highlights: [
      "Sunrise yoga & temple blessings",
      "Floating breakfast & reef-safari cruise",
    ],
  },
  {
    name: "Santorini, Greece",
    excerpt:
      "Cliffside suites, sunset sails, and Michelin-level tasting menus.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
    category: "Signature Escape",
    duration: "5 nights",
    focus: "Romance & Gastronomy",
    highlights: [
      "Private caldera sail & wine pairings",
      "Photography walk through Oia at dawn",
    ],
  },
  {
    name: "Kyoto, Japan",
    excerpt:
      "Tea ceremonies, artisan workshops, and hanami evenings with a local guide.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
    category: "Culture Circuit",
    duration: "6 nights",
    focus: "Heritage Immersion",
    highlights: [
      "Private tea ceremony in Gion",
      "Craft studio visits & bullet-train side trips",
    ],
  },
  {
    name: "Cape Town, South Africa",
    excerpt:
      "Table Mountain hikes, vineyard tastings, and coastal drives with expert guides.",
    image: "https://images.pexels.com/photos/4873263/pexels-photo-4873263.jpeg",
    category: "Adventure Thread",
    duration: "8 nights",
    focus: "Outdoor & Culinary",
    highlights: [
      "Helicopter hop over the peninsula",
      "Chefs-table dinner in the Winelands",
    ],
  },
  {
    name: "Singapore, Singapore",
    excerpt:
      "Hybrid summits across luxury venues with wellness and innovation immersions.",
    image:
      "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=900&q=80",
    category: "Executive Program",
    duration: "4 nights",
    focus: "Leadership & Innovation",
    highlights: [
      "Private Future of Tech briefings",
      "Sentosa wellness reset between sessions",
    ],
  },
  {
    name: "Oxford, United Kingdom",
    excerpt:
      "Campus immersions, lab time, and heritage excursions for ambitious cohorts.",
    image:
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=900&q=80",
    category: "Academic Immersion",
    duration: "9 days",
    focus: "Scholars & Research",
    highlights: [
      "STEM lab residencies with faculty",
      "Historic walking seminar & museum after-hours",
    ],
  },
];

const services = [
  {
    title: "Leisure Collections",
    icon: "🌴",
    descriptor:
      "Tailored escapes crafted for couples, families, and solo travelers seeking immersive relaxation.",
    highlights: [
      "Private villa buyouts and design-led boutique stays",
      "Signature excursions hosted by trusted local insiders",
      "24/7 travel concierge for effortless day-to-day adjustments",
    ],
    tag: "Leisure",
    variant: "leisure",
    cta: "Plan a leisure escape",
  },
  {
    title: "Executive & MICE Travel",
    icon: "💼",
    descriptor:
      "Board-level retreats, incentive programs, and conference support orchestrated across global cities.",
    highlights: [
      "Venue sourcing, contract negotiation, and compliance-ready reporting",
      "VIP meet-and-greet, charter flights, and hybrid meeting tech",
      "On-ground fixers managing agenda flow and stakeholder logistics",
    ],
    tag: "Business",
    variant: "business",
    cta: "Design a corporate program",
  },
  {
    title: "Educational Immersions",
    icon: "🎓",
    descriptor:
      "Curriculum-aligned study tours, campus residencies, and faculty-led expeditions that inspire lifelong learning.",
    highlights: [
      "Access to universities, labs, and cultural institutions worldwide",
      "Safety-first travel frameworks, guardianship, and visa assistance",
      "Reflective workshops and service-learning add-ons",
    ],
    tag: "Education",
    variant: "education",
    cta: "Create a learning journey",
  },
];

const testimonials = [
  {
    name: "Lara & David",
    segment: "Luxury Escape",
    location: "Dubai Honeymoon",
    quote:
      "Everything was beyond our expectations. The itinerary was flawless, and every day felt like a surprise honeymoon gift.",
    image: "https://images.pexels.com/photos/2533092/pexels-photo-2533092.jpeg",
    result: "24-hour Dubai concierge with bespoke desert proposal dinner",
  },
  {
    name: "Adebola K.",
    segment: "Family Adventure",
    location: "Family Safari, Kenya",
    quote:
      "From flights to game drives, Shaib’s team anticipated every need. The kids can’t stop talking about the lion pride!",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
    result:
      "Seamless 10-day safari rotation with child-friendly conservation tours",
  },
  {
    name: "Zenith Capital",
    segment: "Executive Retreat",
    location: "Leadership Retreat, Singapore",
    quote:
      "Flawless corporate travel management—from executive lounges to hybrid meeting support. Our team bonded and delivered.",
    image:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=900&q=80",
    result: "Hybrid summit across two venues with white-glove logistics",
  },
  {
    name: "Professor Aliyu",
    segment: "Academic Immersion",
    location: "STEM Scholars Tour, United Kingdom",
    quote:
      "Campus visits, lab sessions, and accommodation were coordinated to perfection. Students experienced learning beyond the classroom.",
    image: "https://images.pexels.com/photos/1058959/pexels-photo-1058959.jpeg",
    result: "18 STEM scholars hosted across Oxford labs and innovation hubs",
  },
];

const storyStats = [
  { value: "4.9/5", label: "Average post-trip rating" },
  { value: "320+", label: "Journeys delivered annually" },
  { value: "30+", label: "Countries navigated with local hosts" },
];

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "light";
    }
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return (
      window.localStorage.getItem("shaibs-theme") ||
      (prefersDark ? "dark" : "light")
    );
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("shaibs-theme", theme);
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

    const revealEls = document.querySelectorAll("[data-reveal]");
    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  const handleBookNow = (event) => {
    event.preventDefault();
    if (typeof document === "undefined") {
      return;
    }
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header className="site-header" data-reveal>
        <div className="container header-content">
          <a href="#hero" className="logo" aria-label="Shaib's Travel logo">
            <span className="logo-mark">ST</span>
            Shaib&apos;s Travel
          </a>
          <nav className="main-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      <main>
        <section id="hero" className="hero" data-reveal>
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="hero-badge">
                <span>Since 2012</span>
                Crafting purposeful journeys that move people and businesses
                forward
              </div>
              <p className="headline-kicker">
                Your passport to purposeful journeys
              </p>
              <h1>
                Next-level leisure, business, and educational travel, designed
                around your mission.
              </h1>
              <p className="hero-subtitle">
                We orchestrate every touchpoint—from vision workshops to
                on-the-ground execution—so your travelers can focus on
                connection, innovation, and discovery.
              </p>
              <div className="hero-meta">
                <div className="hero-rating">
                  <span className="rating-value">4.9</span>
                  <span className="rating-label">Guest satisfaction score</span>
                </div>
                <div className="hero-clients">
                  <span className="client-count">320+</span>
                  <span className="client-label">
                    Tailored itineraries delivered yearly
                  </span>
                </div>
              </div>
              <div className="hero-actions">
                <button
                  type="button"
                  className="btn primary"
                  onClick={handleBookNow}
                >
                  Start Your Brief
                </button>
                <a className="btn outline" href="#destinations">
                  View Signature Journeys
                </a>
              </div>
              <div className="hero-highlights">
                {heroHighlights.map((item) => (
                  <span key={item.title} className="hero-highlight-pill">
                    <span
                      className="hero-highlight-icon"
                      role="img"
                      aria-label={item.title}
                    >
                      {item.icon}
                    </span>
                    <span>{item.title}</span>
                  </span>
                ))}
              </div>
              <div className="hero-stat-row">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="hero-stat">
                    <span className="hero-stat-value">{stat.value}</span>
                    <span className="hero-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <aside className="hero-panel">
              <div className="hero-collage">
                <div
                  className="collage-item primary"
                  aria-label="Curated travel planning desk"
                />
                <div
                  className="collage-item secondary"
                  aria-label="Travellers exploring a canyon"
                />
                <div className="hero-note">
                  <span className="hero-note-label">
                    Latest brief in flight
                  </span>
                  <strong>Dubai x Maldives split-moon</strong>
                  <p>
                    Dual-destination honeymoon with private seaplane transfers
                    and underwater dining.
                  </p>
                </div>
              </div>
              <div className="hero-mini-card">
                <span className="mini-chip">Scholars</span>
                <p>
                  18 academic cohorts guided through Oxford, Cambridge, and
                  Imperial labs with Shaib&apos;s Travel this season.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section id="destinations" className="section" data-reveal>
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Featured Journeys</span>
              <h2>Destinations our travelers rave about</h2>
              <p>
                Discover a collection of handpicked escapes with immersive
                itineraries, corporate-ready venues, and academic collaborations
                curated by the Shaib&apos;s team.
              </p>
            </div>
            <div className="journeys-grid">
              {destinations.map((destination) => (
                <article key={destination.name} className="journey-card">
                  <div
                    className="journey-media"
                    role="img"
                    aria-label={destination.name}
                    style={{ backgroundImage: `url(${destination.image})` }}
                  >
                    <span className="journey-category">
                      {destination.category}
                    </span>
                  </div>
                  <div className="journey-body">
                    <div className="journey-heading">
                      <h3>{destination.name}</h3>
                      <span className="journey-duration">
                        {destination.duration}
                      </span>
                    </div>
                    <p className="journey-excerpt">{destination.excerpt}</p>
                    <ul className="journey-highlights">
                      {destination.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                    <div className="journey-meta">
                      <span className="journey-focus">{destination.focus}</span>
                      <button type="button" className="text-link journey-cta">
                        <span>View sample plan</span>
                        <span aria-hidden="true">→</span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section alt" data-reveal>
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Signature Services</span>
              <h2>Everything you need for a stress-free adventure</h2>
              <p>
                We handle every detail before, during, and after your trip so
                you can focus on building connections, driving impact, and
                savoring every experience.
              </p>
            </div>
            <div className="services-overview">
              <p className="services-intro">
                Choose the track that matches your mission—then layer bespoke
                logistics, insider access, and concierge care for a truly
                seamless journey.
              </p>
              <div className="service-pill-list" aria-label="Service pillars">
                {services.map((service) => (
                  <span key={service.tag} className="service-pill">
                    {service.tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="card service-card"
                  data-variant={service.variant}
                >
                  <div className="service-card-header">
                    <span
                      className="service-icon"
                      role="img"
                      aria-label={service.tag}
                    >
                      {service.icon}
                    </span>
                    <span className="service-tag">{service.tag}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p className="service-descriptor">{service.descriptor}</p>
                  <ul className="service-features">
                    {service.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <button type="button" className="text-link service-cta">
                    <span>{service.cta}</span>
                    <span aria-hidden="true">→</span>
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="section" data-reveal>
          <div className="container">
            <div className="stories-header">
              <div className="stories-intro">
                <span className="eyebrow">Traveler Stories</span>
                <h2>Outcomes that keep partners returning</h2>
                <p>
                  Whether it&apos;s an intimate honeymoon, a board-level
                  retreat, or a scholars&apos; residency, we design journeys
                  that deliver measurable impact and lasting memories.
                </p>
              </div>
              <div className="stories-stats">
                {storyStats.map((stat) => (
                  <div key={stat.label} className="stories-stat">
                    <span className="stories-stat-value">{stat.value}</span>
                    <span className="stories-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="stories-grid">
              {testimonials.map((story) => (
                <article key={story.name} className="story-card">
                  <span className="story-chip">{story.segment}</span>
                  <blockquote className="story-quote">
                    “{story.quote}”
                  </blockquote>
                  <div className="story-person">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="story-avatar"
                      loading="lazy"
                    />
                    <div>
                      <span className="story-name">{story.name}</span>
                      <span className="story-location">{story.location}</span>
                    </div>
                  </div>
                  <p className="story-result">{story.result}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="section alt contact-section"
          data-reveal
        >
          <div className="container contact-grid">
            <div>
              <span className="eyebrow">Start Planning</span>
              <h2>Share your dream trip—we&apos;ll handle the rest</h2>
              <p>
                Let us know the vibe, group size, corporate goals, or learning
                objectives. Our travel architects will reach out within 24
                hours.
              </p>
              <ul className="contact-benefits">
                <li>
                  Complimentary consultation with a senior travel designer
                </li>
                <li>
                  Personalized proposal spanning leisure escapes, business
                  missions, or academic tours
                </li>
                <li>
                  Exclusive perks from global hospitality and institutional
                  partners
                </li>
              </ul>
            </div>
            <form
              className="contact-form"
              onSubmit={(event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const payload = Object.fromEntries(formData);
                console.info("Contact request", payload);
                event.currentTarget.reset();
              }}
            >
              <label htmlFor="name">Full name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Shaib Ibrahim"
                required
              />

              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="hello@shaibs.travel"
                required
              />

              <label htmlFor="message">Tell us about your travel goals</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Destination, travel dates, celebration details, special requests..."
                required
              />

              <button type="submit" className="btn primary wide">
                Send Request
              </button>
              <p className="form-note">
                We respect your privacy. No spam—just curated travel ideas.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer" data-reveal>
        <div className="container footer-grid">
          <div>
            <span className="logo-mark">ST</span>
            <p>
              Bespoke journeys for discerning travelers. Offices in Lagos,
              London, and Dubai with partners in 30+ countries.
            </p>
          </div>
          <div>
            <h4>Visit</h4>
            <address>
              12 Marina Crescent, Victoria Island
              <br />
              Lagos, Nigeria
            </address>
          </div>
          <div>
            <h4>Call</h4>
            <a href="tel:+2348031234567">+234 803 123 4567</a>
            <a href="mailto:hello@shaibs.travel">hello@shaibs.travel</a>
          </div>
          <div>
            <h4>Follow</h4>
            <div className="footer-links">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
        <p className="footer-note">
          © {new Date().getFullYear()} Shaib&apos;s Travel. All rights reserved.
          Crafted with care for modern explorations.
        </p>
      </footer>

      <a
        className="whatsapp-link"
        href="https://wa.me/2348031234567"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Shaib's Travel on WhatsApp"
      >
        💬
        <span>Chat with us</span>
      </a>
    </>
  );
}
