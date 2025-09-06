import React from "react";
import "../styles/global.css"
import {
  Github,
  CalendarDays,
  MapPin,
  Clock,
  Users,
  Megaphone,
  Star,
  Mail,
  ChevronRight,
  ShieldCheck,
  Building2,
  HeartHandshake,
  Sparkles,
  Rocket,
  BookOpen,
  Network,
  Cpu,
  Globe2,
  Database,
  Brain,
  Layers,
} from "lucide-react";

const sections = [
  { id: "about", label: "About" },
  { id: "vision", label: "Vision & Mission" },
  { id: "aim", label: "Our Aim" },
  { id: "impact", label: "Impact" },
  { id: "conference", label: "Open Source Day" },
  { id: "tracks", label: "Tracks" },
  { id: "schedule", label: "Schedule" },
  { id: "speakers", label: "Speakers" },
  { id: "partners", label: "Partners" },
  { id: "venue", label: "Venue" },
  { id: "faq", label: "FAQ" },
];

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
    {children}
  </span>
);

const Stat = ({ value, label }) => (
  <div className="rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-black/5 dark:bg-zinc-900 dark:ring-white/10">
    <div className="text-3xl font-extrabold tracking-tight">{value}</div>
    <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{label}</div>
  </div>
);

const Track = ({ icon: Icon, title, desc }) => (
  <div className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 transition group-hover:scale-105 dark:bg-zinc-800">
      <Icon className="h-5 w-5" />
    </div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{desc}</p>
  </div>
);

const CTAButtons = () => (
  <div className="mt-8 flex flex-wrap items-center gap-3">
    <a
      href="#register"
      className="inline-flex items-center gap-2 rounded-2xl bg-black px-5 py-3 text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-zinc-800 dark:bg-white dark:text-black"
    >
      <Rocket className="h-4 w-4" /> Register
    </a>
    <a
      href="#cfp"
      className="inline-flex items-center gap-2 rounded-2xl border border-zinc-300 bg-white px-5 py-3 shadow-sm transition hover:-translate-y-0.5 dark:border-zinc-700 dark:bg-zinc-900"
    >
      <Megaphone className="h-4 w-4" /> Submit Talk
    </a>
    <a
      href="#volunteer"
      className="inline-flex items-center gap-2 rounded-2xl border border-zinc-300 bg-white px-5 py-3 shadow-sm transition hover:-translate-y-0.5 dark:border-zinc-700 dark:bg-zinc-900"
    >
      <HeartHandshake className="h-4 w-4" /> Volunteer
    </a>
    <a
      href="#sponsor"
      className="inline-flex items-center gap-2 rounded-2xl border border-zinc-300 bg-white px-5 py-3 shadow-sm transition hover:-translate-y-0.5 dark:border-zinc-700 dark:bg-zinc-900"
    >
      <Star className="h-4 w-4" /> Sponsor
    </a>
  </div>
);

const Nav = () => (
  <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-zinc-950/70 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
      <a href="#top" className="flex items-center gap-2 text-white">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black">OS</span>
        <span className="font-semibold tracking-tight">OPEN SOURCE DAY</span>
      </a>
      <nav className="hidden gap-6 md:flex">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="text-sm text-zinc-300 transition hover:text-white"
          >
            {s.label}
          </a>
        ))}
      </nav>
      <a
        href="#register"
        className="hidden rounded-xl bg-white px-4 py-2 text-sm font-medium text-black shadow md:block"
      >
        Get Tickets
      </a>
    </div>
  </header>
);

const Hero = () => (
  <section
    id="top"
    className="relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900"
  >
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
    <div className="mx-auto max-w-7xl px-4 py-20 text-white md:py-28">
      <div className="flex flex-col items-start gap-6 md:max-w-3xl">
        <div className="flex flex-wrap items-center gap-2">
          <Pill>
            <CalendarDays className="h-3.5 w-3.5" /> Date: <span className="font-semibold">TBD 2025</span>
          </Pill>
          <Pill>
            <MapPin className="h-3.5 w-3.5" /> Location: <span className="font-semibold">Ahmedabad, Gujarat</span>
          </Pill>
          <Pill>
            <Users className="h-3.5 w-3.5" /> Community-first
          </Pill>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
          Open Source Day 2025
        </h1>
        <p className="text-lg text-zinc-300">
          A one-day conference celebrating open exchange, collaboration, and the
          communities building the future of technology.
        </p>
        <CTAButtons />
        <div className="mt-6 flex items-center gap-4 text-zinc-400">
          <a href="#cfp" className="inline-flex items-center gap-2 hover:text-white">
            <Megaphone className="h-4 w-4" /> Call for Proposals
          </a>
          <a href="#sponsor" className="inline-flex items-center gap-2 hover:text-white">
            <Star className="h-4 w-4" /> Sponsorships
          </a>
          <a href="#codeofconduct" className="inline-flex items-center gap-2 hover:text-white">
            <ShieldCheck className="h-4 w-4" /> Code of Conduct
          </a>
        </div>
      </div>
    </div>
    <div className="mx-auto max-w-7xl px-4 pb-16">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        <Stat value="300+" label="Meetups since 2015" />
        <Stat value="600+" label="Speakers" />
        <Stat value="500+" label="Topics" />
        <Stat value="5,000+" label="Attendees last year" />
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="bg-white py-16 dark:bg-zinc-950">
    <div className="mx-auto max-w-5xl px-4">
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">About the Initiative</h2>
      <p className="mt-6 text-zinc-700 dark:text-zinc-300">
        “Open Source Weekend” is an initiative to promote open source technology. Projects, products, and initiatives
        embrace and celebrate principles of open exchange, collaborative participation, rapid prototyping, transparency,
        meritocracy, and community-oriented development. We raise awareness and adoption of open source software and build
        bridges between open source communities and industry. It is a movement for software freedom—enabling the community
        to use, study, change, and share software in modified and unmodified form.
      </p>
    </div>
  </section>
);

const VisionMission = () => (
  <section id="vision" className="bg-gradient-to-br from-zinc-50 to-white py-16 dark:from-zinc-900 dark:to-zinc-950">
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 md:grid-cols-2">
      <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <h3 className="text-xl font-semibold">Vision</h3>
        <p className="mt-4 text-zinc-700 dark:text-zinc-300">
          Provide an open ecosystem to learn and grow as professionals. Bring together open source advocates, enthusiasts,
          developers, business leaders, entrepreneurs, and practitioners from academia, industry, and government—along with
          students—to explore how to contribute to the ever‑growing world of open source.
        </p>
      </div>
      <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <h3 className="text-xl font-semibold">Mission</h3>
        <p className="mt-4 text-zinc-700 dark:text-zinc-300">
          We organize weekend events that offer a platform for advocates and enthusiasts who want to learn something new,
          gain exposure to the latest open source technologies, share knowledge, collaborate, network, and establish a
          thriving community.
        </p>
      </div>
    </div>
  </section>
);

const Aim = () => (
  <section id="aim" className="bg-white py-16 dark:bg-zinc-950">
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Our Aim</h2>
      <p className="mt-6 text-zinc-700 dark:text-zinc-300">
        Our aim is to create an inclusive and thriving open source community that empowers developers and promotes the
        adoption of open technologies. We strive to:
      </p>
      <ul className="mt-6 grid list-disc grid-cols-1 gap-3 pl-5 text-zinc-700 marker:text-zinc-400 dark:text-zinc-300">
        <li>Foster collaboration and knowledge sharing among community members.</li>
        <li>Support the development and maintenance of open source projects.</li>
        <li>Provide resources and mentorship for aspiring contributors.</li>
        <li>Organize events, workshops, and initiatives to promote open source values.</li>
      </ul>
    </div>
  </section>
);

const Impact = () => (
  <section id="impact" className="bg-gradient-to-b from-white to-zinc-50 py-16 dark:from-zinc-950 dark:to-zinc-900">
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Impact Since 2015</h2>
      <p className="mt-6 text-zinc-700 dark:text-zinc-300">
        “Open Source Weekend” by ComExpo Cyber Security Foundation began in June 2015 as a free, open-for-all event.
        Since then we have hosted 300+ meetups with 600+ speakers across 500+ topics. Over 100 news articles have
        highlighted our journey. In the last year alone, 5,000+ individuals engaged with 200+ active volunteers from
        across cities and states—helping form Gujarat’s first dedicated open source community. We’ve also partnered with
        30+ communities to promote, support, and encourage open source contribution.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        <Stat value="2015" label="Started" />
        <Stat value="30+" label="Partner Communities" />
        <Stat value="200+" label="Active Volunteers" />
        <Stat value="100+" label="Media Mentions" />
      </div>
    </div>
  </section>
);

const ConferenceIntro = () => (
  <section id="conference" className="bg-white py-16 dark:bg-zinc-950">
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Open Source Day</h2>
      <p className="mt-6 text-zinc-700 dark:text-zinc-300">
        Open Source Day is about giving back to open source projects, sharpening skills, and celebrating all things open
        source. Join us for a day dedicated to the heart and soul of the tech community. We’re celebrating the remarkable
        individuals who contribute to the open source world—a day of unity, innovation, and dedication to the open source
        ethos. We are collaborating with other communities to make this event successful.
      </p>
      <div className="mt-6 rounded-3xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-700 dark:text-zinc-300">
          <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4"/> Date: <strong>TBD 2025</strong></span>
          <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4"/> Ahmedabad, Gujarat</span>
          <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4"/> 1-Day • In‑person</span>
        </div>
        <CTAButtons />
      </div>
    </div>
  </section>
);

const Tracks = () => (
  <section id="tracks" className="bg-gradient-to-br from-zinc-50 to-white py-16 dark:from-zinc-900 dark:to-zinc-950">
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Conference Tracks</h2>
      <p className="mt-4 text-zinc-700 dark:text-zinc-300">
        Explore the breadth of the open movement across technology and beyond.
      </p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Track icon={Github} title="Open Source Technology" desc="Languages, frameworks, toolchains, and real‑world case studies." />
        <Track icon={Layers} title="Open Source Projects" desc="Maintainers showcase, project deep dives, and contributor onboarding." />
        <Track icon={Building2} title="Open Source Products" desc="Business models, sustainability, licensing, and governance." />
        <Track icon={Network} title="Open Communities" desc="Community ops, moderation, growth, and inclusive practices." />
        <Track icon={BookOpen} title="Open Design & Docs" desc="Design systems, UX in the open, docs-as-code, and localization." />
        <Track icon={Database} title="Open Data" desc="Standards, interoperability, and data commons for research & industry." />
        <Track icon={Brain} title="Open Source & AI" desc="Models, safety, MLOps, and responsible AI built in the open." />
        <Track icon={Globe2} title="Open Source in Web3" desc="Decentralized infra, protocols, and public goods funding." />
        <Track icon={Cpu} title="Open Hardware" desc="RISC‑V, firmware, robotics, and maker‑friendly hardware tooling." />
      </div>
    </div>
  </section>
);

const Schedule = () => (
  <section id="schedule" className="bg-white py-16 dark:bg-zinc-950">
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Tentative Schedule</h2>
      <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">All times are local (IST). Subject to change.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="font-semibold">Morning</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3"><Clock className="mt-0.5 h-4 w-4"/> 09:00 – Registration & Breakfast</li>
            <li className="flex items-start gap-3"><Megaphone className="mt-0.5 h-4 w-4"/> 10:00 – Opening Keynote</li>
            <li className="flex items-start gap-3"><Users className="mt-0.5 h-4 w-4"/> 10:45 – Lightning Talks (Community)
            </li>
            <li className="flex items-start gap-3"><BookOpen className="mt-0.5 h-4 w-4"/> 11:30 – Track Sessions</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="font-semibold">Afternoon</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3"><Network className="mt-0.5 h-4 w-4"/> 13:00 – Lunch & Networking</li>
            <li className="flex items-start gap-3"><Cpu className="mt-0.5 h-4 w-4"/> 14:00 – Workshops & Demos</li>
            <li className="flex items-start gap-3"><Star className="mt-0.5 h-4 w-4"/> 16:00 – Panel: Future of Open Source</li>
            <li className="flex items-start gap-3"><Sparkles className="mt-0.5 h-4 w-4"/> 17:30 – Closing & Community Awards</li>
          </ul>
        </div>
      </div>
      <div id="cfp" className="mt-8 rounded-2xl border border-dashed border-zinc-300 p-6 text-sm dark:border-zinc-700">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h4 className="font-semibold">Call for Proposals</h4>
            <p className="mt-1 text-zinc-600 dark:text-zinc-400">Share your work! We welcome talks, lightning talks, panels, and hands‑on workshops across all tracks.</p>
          </div>
          <a href="#register" className="inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-white dark:bg-white dark:text-black">
            Submit your talk <ChevronRight className="h-4 w-4"/>
          </a>
        </div>
      </div>
    </div>
  </section>
);

const SpeakerCard = ({ name, title, org, avatar }) => (
  <div className="group rounded-2xl border border-zinc-200 bg-white p-6 transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
    <div className="flex items-center gap-4">
      <img src={avatar} alt={name} className="h-14 w-14 rounded-xl object-cover" />
      <div>
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-zinc-600 dark:text-zinc-400">{title} · {org}</div>
      </div>
    </div>
  </div>
);

const Speakers = () => (
  <section id="speakers" className="bg-gradient-to-b from-white to-zinc-50 py-16 dark:from-zinc-950 dark:to-zinc-900">
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Featured Speakers</h2>
      <p className="mt-4 text-zinc-700 dark:text-zinc-300">First wave of speakers will be announced soon. Here’s a sample lineup.</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <SpeakerCard name="A. Shah" title="Maintainer" org="Popular OSS" avatar="https://i.pravatar.cc/300?img=12" />
        <SpeakerCard name="B. Patel" title="Security Researcher" org="ComExpo CSF" avatar="https://i.pravatar.cc/300?img=32" />
        <SpeakerCard name="C. Mehta" title="Developer Advocate" org="CloudCo" avatar="https://i.pravatar.cc/300?img=22" />
        <SpeakerCard name="D. Rao" title="AI Engineer" org="ML Labs" avatar="https://i.pravatar.cc/300?img=45" />
        <SpeakerCard name="E. Kaur" title="Data Scientist" org="Open Data Org" avatar="https://i.pravatar.cc/300?img=5" />
        <SpeakerCard name="F. Iyer" title="Founder" org="Hardware Collective" avatar="https://i.pravatar.cc/300?img=15" />
      </div>
    </div>
  </section>
);

const Partners = () => (
  <section id="partners" className="bg-white py-16 dark:bg-zinc-950">
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Community Partners & Sponsors</h2>
      <p className="mt-4 text-zinc-700 dark:text-zinc-300">
        We’ve partnered with 30+ communities. Want to support Open Source Day? Become a sponsor or community partner.
      </p>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="flex h-20 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-sm text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900"
          >
            Logo {i + 1}
          </div>
        ))}
      </div>
      <div id="sponsor" className="mt-8 rounded-2xl border border-dashed border-zinc-300 p-6 dark:border-zinc-700">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h4 className="font-semibold">Partner with us</h4>
            <p className="mt-1 text-zinc-600 dark:text-zinc-400">Sponsorships help us keep the event accessible and community‑driven.</p>
          </div>
          <a href="#register" className="inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-white dark:bg-white dark:text-black">
            Get the prospectus <ChevronRight className="h-4 w-4"/>
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Venue = () => (
  <section id="venue" className="bg-gradient-to-b from-white to-zinc-50 py-16 dark:from-zinc-950 dark:to-zinc-900">
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Venue</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="font-semibold">Ahmedabad, Gujarat</h3>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">
            Exact venue will be announced soon. Expect a centrally connected location with ample space for tracks,
            workshops, and networking lounges.
          </p>
          <a
            href="https://maps.google.com"
            className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-700 underline underline-offset-4 hover:text-black dark:text-zinc-300 dark:hover:text-white"
          >
            <MapPin className="h-4 w-4"/> View on Maps
          </a>
        </div>
        <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
          <img
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1600&auto=format&fit=crop"
            alt="Conference venue"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => (
  <section id="faq" className="bg-white py-16 dark:bg-zinc-950">
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">FAQ</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {[
          {
            q: "Who can attend?",
            a: "Everyone—maintainers, contributors, developers, designers, students, and anyone curious about open source.",
          },
          {
            q: "Is there a fee?",
            a: "We strive to keep the event accessible. Final ticketing details will be announced with the registration.",
          },
          {
            q: "How can I contribute?",
            a: "Submit a talk or workshop, volunteer on‑site, mentor newcomers, or help with community outreach.",
          },
          {
            q: "Will sessions be recorded?",
            a: "We plan to record key sessions and share them publicly when possible.",
          },
        ].map((item, i) => (
          <div key={i} className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="font-semibold">{item.q}</h3>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">{item.a}</p>
          </div>
        ))}
      </div>
      <div id="codeofconduct" className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-sm dark:border-zinc-800 dark:bg-zinc-900">
        <h3 className="font-semibold">Code of Conduct</h3>
        <p className="mt-2 text-zinc-700 dark:text-zinc-300">
          Be kind, inclusive, and respectful. We follow a zero‑tolerance policy for harassment or discrimination. Report
          concerns to the organizing team at the registration desk or via email.
        </p>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-white/10 bg-zinc-950 py-12 text-zinc-300">
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 md:grid-cols-4">
      <div>
        <div className="flex items-center gap-2 text-white">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black">OS</span>
          <span className="font-semibold tracking-tight">OPEN SOURCE DAY</span>
        </div>
        <p className="mt-3 text-sm text-zinc-400">
          #Join the Open Source Movement
        </p>
        <div className="mt-4 flex gap-3">
          <a href="https://github.com" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
            <Github className="h-4 w-4"/>
          </a>
          <a href="mailto:hello@example.org" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
            <Mail className="h-4 w-4"/>
          </a>
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-white">Event</h4>
        <ul className="mt-3 space-y-2 text-sm">
          <li><a href="#schedule" className="hover:text-white">Schedule</a></li>
          <li><a href="#speakers" className="hover:text-white">Speakers</a></li>
          <li><a href="#partners" className="hover:text-white">Partners</a></li>
          <li><a href="#venue" className="hover:text-white">Venue</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-white">Participate</h4>
        <ul className="mt-3 space-y-2 text-sm">
          <li><a href="#cfp" className="hover:text-white">Call for Proposals</a></li>
          <li><a href="#volunteer" className="hover:text-white">Volunteer</a></li>
          <li><a href="#sponsor" className="hover:text-white">Sponsor</a></li>
          <li><a href="#register" className="hover:text-white">Register</a></li>
        </ul>
      </div>
      <div id="register">
        <h4 className="font-semibold text-white">Stay in the loop</h4>
        <p className="mt-3 text-sm text-zinc-400">Get updates about tickets, CFP, and schedule.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks! We'll be in touch.");
          }}
          className="mt-3 flex items-center gap-2"
        >
          <input
            required
            type="email"
            placeholder="you@opensource.dev"
            className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-zinc-400 focus:outline-none"
          />
          <button type="submit" className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black">
            Subscribe
          </button>
        </form>
      </div>
    </div>
    <div className="mx-auto mt-10 max-w-6xl px-4 text-xs text-zinc-500">
      © {new Date().getFullYear()} ComExpo Cyber Security Foundation · Built with love by the community.
    </div>
  </footer>
);

const VolunteerSponsorStrips = () => (
  <section id="volunteer" className="bg-gradient-to-r from-indigo-50 via-zinc-50 to-emerald-50 py-10 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-900">
    <div className="mx-auto max-w-6xl px-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="flex items-center gap-2 font-semibold"><HeartHandshake className="h-5 w-5"/> Volunteer</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Help run the show—registration desk, AV, speaker support, and more.</p>
          <a href="#register" className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400">Sign up <ChevronRight className="h-4 w-4"/></a>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="flex items-center gap-2 font-semibold"><Star className="h-5 w-5"/> Sponsor</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Showcase your commitment to open source and meet passionate builders.</p>
          <a href="#sponsor" className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400">View tiers <ChevronRight className="h-4 w-4"/></a>
        </div>
      </div>
    </div>
  </section>
);

export default function OpenSourceDaySite() {
  React.useEffect(() => {
    // Smooth scroll for hash links
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', `#${id}`);
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <Nav />
      <Hero />
      <About />
      <VisionMission />
      <Aim />
      <Impact />
      <ConferenceIntro />
      <Tracks />
      <Schedule />
      <Speakers />
      <Partners />
      <Venue />
      <VolunteerSponsorStrips />
      <FAQ />
      <Footer />
    </div>
  );
}
