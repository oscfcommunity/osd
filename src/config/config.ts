import FacebookIcon from "@/assets/icons/facebook.svg";
import LinkedInIcon from "@/assets/icons/footer-linkedin.svg";
import GithubIcon from "@/assets/icons/github.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import Mail from "@/assets/icons/mail.svg";
import MediumIcon from "@/assets/icons/medium.svg";
import Phone from "@/assets/icons/phone.svg";
import TwitterIcon from "@/assets/icons/x.svg";
import OSDGreen from "@/assets/icons/OSDGreen.svg";
import OSWBlack from "@/assets/icons/OSWBlack.svg";

export const SITE = {
  title: "2026 OpenSourceDay",
  shortTitle: "OSD2026",
  description: "OpenSourceDay 2026 - Join us for the next chapter of open source innovation, learning, and community building.",
  website: "https://osd.opensourceweekend.org",
  ogImage: "https://osd.opensourceweekend.org/images/Viral_Parmar_Stage.jpg",
  icon: OSDGreen,
};

export const BRANDING = {
  logos: {
    main: OSDGreen,
  },
};

export const EVENT = {
  name: "Open Source Day 2026",
  shortName: "OSD2026",
  date: "TBA",
  location: "Ahmedabad, Gujarat, India",
  tagline: "Join the largest open source developer conference of the year. Learn, network, and contribute to the future of technology.",
  description:
    "Open Source Day 2026 is a community-driven event celebrating the power of open source software. Join developers, maintainers, and enthusiasts for a day of learning, collaboration, and innovation.",
  stats: {
    expectedAttendees: "600+",
    speakers: "20+",
    workshops: "8+",
    sponsors: "25+",
    communityPartners: "70+",
  },
};

export const HERO = {
  title: {
    part1: "PEN",
    part2: "SOURCE",
    part3: "DAY",
    year: "2026",
  },
  subtitle:
    "Join us for a day of learning, networking, and celebrating open source innovation. Connect with developers, contribute to projects, and shape the future of technology.",
  buttons: {
    primary: {
      text: "Join Community",
      url: "https://chat.whatsapp.com/Fi50G9prGcH4b7891LrPir",
    },
    secondary: {
      text: "Explore OSD 2025",
      url: "/2025",
    },
  },
};

export const NAVIGATION = {
  items: [
    { name: "Speakers", href: "/speakers" },
    { name: "Schedule", href: "/schedule" },
    { name: "Team", href: "/team" },
    { name: "Tickets", href: "/tickets" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Venue", href: "/venue" },
    { name: "Past Events", href: "/past-events" },
  ],
  cta: {
    text: "OSD 2025",
    url: "/2025",
  },
};

export const CALLS_2026 = [
  {
    title: "Call for Speakers",
    description: "Share your knowledge & inspire the community with a talk or workshop.",
    href: "/cfspk",
    emoji: "🎤",
    color: "from-violet-500 to-purple-600",
    badge: "Open",
    deadline: "15th March 2026",
    enable: true,
  },
  {
    title: "Call for Volunteers",
    description: "Help us make OSD 2026 an unforgettable experience for everyone.",
    href: "/cfv",
    emoji: "🙌",
    color: "from-emerald-500 to-green-600",
    badge: "CLOSED",
    deadline: "CLOSED",
    enable: false,
  },
  {
    title: "Call for Sponsors",
    description: "Support open source and grow your brand with the community.",
    href: "/cfs",
    emoji: "🤝",
    color: "from-amber-500 to-orange-600",
    badge: "Open",
    deadline: "31st March 2026",
    enable: true,
  },
  {
    title: "Call for Community Partners",
    description: "Partner with us to amplify the open source movement together.",
    href: "/cfc",
    emoji: "🌐",
    color: "from-sky-500 to-blue-600",
    badge: "Open",
    deadline: "31st March 2026",
    enable: true,
  },
  {
    title: "Call for Evangelists",
    description: "Spread the word about OSD 2026 and help grow our reach.",
    href: "/cfe",
    emoji: "📣",
    color: "from-pink-500 to-rose-600",
    badge: "Open",
    deadline: "21st March 2026",
    enable: true,
  },
];

export const eventSchedule = [
  {
    time: "08:00 AM – 09:30 AM",
    title: "Registration & Welcome Kit",
    speaker: "",
    type: "registration",
    room: "Lobby",
  },
  {
    time: "09:30 AM – 10:00 AM",
    title: "Warm Up Activity & Icebreaker",
    speaker: "",
    type: "activity",
    room: "Main Auditorium",
  },
  {
    time: "10:00 AM – 10:15 AM",
    title: "Welcome Note",
    speaker: "",
    type: "opening",
    room: "Main Auditorium",
  },
  {
    time: "10:15 AM – 10:45 AM",
    title: "Opening Keynote — TBA",
    speaker: "Speaker TBA",
    type: "keynote",
    room: "Main Auditorium",
  },
  {
    time: "10:45 AM – 11:30 AM",
    title: "Technical Session — TBA",
    speaker: "Speaker TBA",
    type: "talk",
    room: "Main Auditorium",
  },
  {
    time: "11:30 AM – 12:45 PM",
    title: "Devroom Workshop — TBA",
    speaker: "Speaker TBA",
    type: "Devroom (Parallel)",
    room: "Secondary Hall",
    isPanelLeft: true,
  },
  {
    time: "11:30 AM – 12:00 PM",
    title: "Technical Talk — TBA",
    speaker: "Speaker TBA",
    type: "talk",
    room: "Main Auditorium",
    isPanelRight: true,
  },
  {
    time: "12:00 PM – 12:45 PM",
    title: "CXO Panel Discussion",
    speaker: "Panelists TBA",
    type: "CXO Panel Discussion",
    room: "Main Auditorium",
    isPanelRight: true,
  },
  {
    time: "12:45 PM – 01:45 PM",
    title: "Lunch & Networking",
    speaker: "",
    type: "break",
    room: "Food Court",
  },
  {
    time: "01:45 PM – 03:00 PM",
    title: "Hands-On Workshop — TBA",
    speaker: "Speaker TBA",
    type: "Devroom (Parallel)",
    room: "Secondary Hall",
    isPanelLeft: true,
  },
  {
    time: "01:45 PM – 02:30 PM",
    title: "Technical Talk — TBA",
    speaker: "Speaker TBA",
    type: "talk",
    room: "Main Auditorium",
    isPanelRight: true,
  },
  {
    time: "02:30 PM – 03:00 PM",
    title: "Technical Talk — TBA",
    speaker: "Speaker TBA",
    type: "talk",
    room: "Main Auditorium",
    isPanelRight: true,
  },
  {
    time: "03:00 PM – 03:45 PM",
    title: "Community Panel Discussion",
    speaker: "Panelists TBA",
    type: "Community Panel Discussion",
    room: "Main Auditorium",
  },
  {
    time: "03:45 PM – 04:15 PM",
    title: "Technical Talk — TBA",
    speaker: "Speaker TBA",
    type: "talk",
    room: "Main Auditorium",
  },
  {
    time: "04:15 PM – 04:45 PM",
    title: "Closing Keynote — TBA",
    speaker: "Speaker TBA",
    type: "Closing Keynote",
    room: "Main Auditorium",
  },
  {
    time: "04:45 PM – 05:00 PM",
    title: "Closing Remarks",
    speaker: "",
    type: "Closing",
    room: "Main Auditorium",
  },
  {
    time: "05:00 PM – 05:30 PM",
    title: "Goodies Distribution & Networking",
    speaker: "",
    type: "Social",
    room: "Exhibition Hall",
  },
];

export const workshopSchedule = [
  {
    time: "09:30 AM – 10:00 AM",
    title: "Event Introduction & Icebreaker",
    speaker: "",
    type: "activity",
  },
  {
    time: "10:00 AM – 11:30 AM",
    title: "Workshop 1 — TBA",
    speaker: "Speaker TBA",
    type: "workshop",
  },
  {
    time: "11:30 AM – 1:00 PM",
    title: "Workshop 2 — TBA",
    speaker: "Speaker TBA",
    type: "workshop",
  },
  {
    time: "01:00 PM – 02:00 PM",
    title: "Lunch & Networking",
    speaker: "",
    type: "break",
  },
  {
    time: "02:00 PM – 03:00 PM",
    title: "Workshop 3 — TBA",
    speaker: "Speaker TBA",
    type: "workshop",
  },
  {
    time: "03:00 PM – 04:00 PM",
    title: "Workshop 4 — TBA",
    speaker: "Speaker TBA",
    type: "workshop",
  },
  {
    time: "04:00 PM – 05:00 PM",
    title: "Project Development & Demo",
    speaker: "OSD Team",
    type: "panel",
  },
  {
    time: "05:00 PM – 05:15 PM",
    title: "Closing Remarks",
    speaker: "",
    type: "closing",
  },
];

export const OUR_SPEAKERS = [
  {
    name: "Speaker TBA",
    position: "Keynote Speaker",
    company: "To Be Announced",
    event: "Keynote",
    presentationTitle: "Opening Keynote — coming soon",
  },
  {
    name: "Speaker TBA",
    position: "Industry Leader",
    company: "To Be Announced",
    event: "Closing Keynote",
    presentationTitle: "Closing Keynote — coming soon",
  },
  {
    name: "Speaker TBA",
    position: "Open Source Expert",
    company: "To Be Announced",
    event: "Technical Talk",
    presentationTitle: "Technical Talk — coming soon",
  },
  {
    name: "Speaker TBA",
    position: "Cloud & DevOps Expert",
    company: "To Be Announced",
    event: "Technical Talk",
    presentationTitle: "Technical Talk — coming soon",
  },
  {
    name: "Speaker TBA",
    position: "AI & ML Engineer",
    company: "To Be Announced",
    event: "Workshop",
    presentationTitle: "Hands-On Workshop — coming soon",
  },
  {
    name: "Speaker TBA",
    position: "Community Leader",
    company: "To Be Announced",
    event: "Panel",
    presentationTitle: "Community Panel — coming soon",
  },
];

export const TICKETS = [
  {
    name: "Super Early Bird Ticket",
    price: "₹350",
    originalPrice: 350,
    description: "Super Early Bird pricing with full conference access. Limited availability!",
    features: ["Full-access to conference", "Breakfast & Lunch", "Keynotes, Panels, Workshop", "OSD Goodies", "Super Early Bird Discount"],
    popular: true,
    available: true,
    alert: {
      text: "Most Awaited",
      classes: "text-white bg-green-500",
    },
    konfhubUrl: "/purchase",
    linkText: "Register Now",
  },
  {
    name: "Early Bird Ticket",
    price: "₹450",
    originalPrice: 450,
    description: "Early bird pricing with full conference access. Limited availability!",
    features: ["Full-access to conference", "Breakfast & Lunch", "Keynotes, Panels, Workshop", "OSD Goodies", "Early Bird Discount"],
    popular: false,
    available: false,
    alert: {
      text: "Coming Soon",
      classes: "text-white bg-green-500",
    },
    konfhubUrl: "/purchase",
    linkText: "Coming Soon",
  },
  {
    name: "Regular Ticket",
    price: "₹700",
    originalPrice: 700,
    description: "Full conference access including lunch, keynotes, panels, and OSD goodies.",
    features: ["Full-access to conference", "Breakfast & Lunch", "Keynotes, Panels, Workshop", "OSD Goodies"],
    popular: false,
    available: false,
    alert: {
      text: "Most Popular",
      classes: "text-white bg-green-600",
    },
    konfhubUrl: "/purchase",
    linkText: "Coming Soon",
  },
  {
    name: "Community Fan",
    price: "₹999",
    originalPrice: 999,
    description: "This ticket for all our community people who constantly support us and create a vibrant community.",
    features: [
      "Full-access to conference",
      "Breakfast & Lunch",
      "Keynotes, Panels, Workshops",
      "OSD Goodies",
      "Super Fan Goodies (Tshirts etc)",
      "Digital Certificate",
    ],
    popular: false,
    available: true,
    alert: {
      text: "Most Preferred",
      classes: "text-white bg-blue-500",
    },
    konfhubUrl: "/purchase",
    linkText: "Register Now",
  },
  {
    name: "Supporter Ticket",
    price: "₹1,999",
    originalPrice: 1999,
    description: "This ticket for all our community people who constantly support us and create a vibrant community.",
    features: [
      "Full-access to conference",
      "Breakfast, Lunch & High-Tea with Speakers and Organizers on the event day ",
      "Keynotes, Panels, Workshop",
      "OSD Goodies",
      "Supporter Exclusive goodies (Including Token of Apprecation,Tshirt etc.)",
      "Digital Certificate",
      "Priority Pass",
    ],
    popular: false,
    available: true,
    konfhubUrl: "/purchase",
    linkText: "Register Now",
  },
  {
    name: "Silver Ticket",
    price: "₹4,999",
    originalPrice: 4999,
    description: "This ticket for all our community people who constantly support us and create a vibrant community.",
    features: [
      "Full-access to conference",
      "Breakfast, Lunch & High-Tea with Speakers and Organizers on the event day ",
      "Keynotes, Panels, Workshop",
      "OSD Goodies",
      "Silver Ticket Exclusive goodies (Including Token of Apprecation,Tshirt etc.)",
      "Digital Certificate",
      "VIP Pass",
      "Shout out during the event",
      "Shout-out on Social Media",
      "Networking Dinner with Speakers , sponsors , organizers and some special industry invitees",
    ],
    popular: false,
    available: true,
    konfhubUrl: "/purchase",
    linkText: "Register Now",
    extra:
      "We are a registered Non-Profit, Section-8 Organization. This Ticket would be considered as a Donation which could be claimed in 80G & 12AA Tax Exemption. For more details Contact Event Organizers.",
  },
  {
    name: "Golden Ticket",
    price: "₹9,999",
    originalPrice: 9999,
    description: "This ticket for all our community people who constantly support us and create a vibrant community.",
    features: [
      "Full-access to conference",
      "Breakfast, Lunch & High-Tea with Speakers and Organizers on the event day ",
      "Keynotes, Panels, Workshop",
      "OSD Goodies",
      "Golden Ticket Exclusive goodies",
      "Digital Certificate",
      "Networking Dinner with Speakers, sponsors, organizers and some special industry invitees",
      "Shout-out on Social Media",
      "Shout out during the event",
      "Appreciation Memento from OSD",
    ],
    popular: false,
    available: true,
    konfhubUrl: "mailto:opensourceweekend@gmail.com",
    linkText: "Contact Organizers",
    extra:
      "We are a registered Non-Profit, Section-8 Organization. This Ticket would be considered as a Donation which could be claimed in 80G & 12AA Tax Exemption. For more details Contact Event Organizers.",
  },
  {
    name: "Micro Sponsor (Pack of 3 Golden Ticket)",
    price: "₹29,999",
    originalPrice: 29999,
    description:
      "This ticket for all our community people who constantly support us and create a vibrant community.  (Ideal for Startup & MSME to get Visibility)",
    featureTitle: "Pack of 3 Tickets includes:",
    features: [
      "Full-access to conference",
      "Breakfast, Lunch & High-Tea with Speakers and Organizers on the event day",
      "Keynotes, Panels, Workshop",
      "OSD Goodies",
      "Golden Ticket Exclusive goodies",
      "Digital Certificate",
      "Networking Dinner with Speakers , sponsors , organizers and some special industry invitees",
      "Company Branding at relevant places",
      "Shout-out during the event",
      "Shout-out on Social Media",
      "Appreciation Memento from OSD",
    ],
    popular: false,
    available: true,
    konfhubUrl: "mailto:opensourceweekend@gmail.com",
    linkText: "Contact Organizers",
    extra:
      "We are a registered Non-Profit, Section-8 Organization. This Ticket would be considered as a Donation which could be claimed in 80G & 12AA Tax Exemption. For more details Contact Event Organizers.",
  },
];

export const VENUE = {
  name: "To Be Announced",
  address: "Ahmedabad, Gujarat, India",
  description:
    "The OSD 2026 venue is being finalized. We'll be hosting the event at a premier institution in Ahmedabad that provides a dynamic environment for innovation and collaboration.",
  capacity: "600+ attendees",
  googleMapsLink: "#",
  facilities: [
    "Large auditorium with 500+ seats",
    "Multiple workshop rooms",
    "Networking lounge and exhibition area",
    "High-speed WiFi throughout",
    "Professional A/V equipment",
    "Accessible facilities",
  ],
};

// Reuse 2025 sponsor data as placeholders
export const SPONSOR_TIERS = {
  gold: [
    { name: "OSCF", logo: "/icons/OSCF.png", website: "#" },
    { name: "OSW", logo: OSWBlack.src, website: "#" },
    { name: "CCSF", logo: "/icons/CCSF.png", website: "#" },
  ],
};

export const EVENT_PARTNER = [
  {
    id: 1,
    name: "Partner TBA",
    logo: "/icons/OSDGreen.svg",
    website: "#",
  },
];

export const VENUE_PARTNER = [
  {
    id: 1,
    name: "Venue Partner TBA",
    logo: "/icons/OSDGreen.svg",
    website: "#",
  },
];

export const COMMUNITY_PARTNERS = [
  {
    id: 1,
    name: "GDG Gandhinagar",
    logo: "/partners/gdg_gandhinagar.png",
    website: "#",
  },
  {
    id: 2,
    name: "GDG Cloud Gandhinagar",
    logo: "/partners/gdg_cloud_gandhinagar.png",
    website: "#",
  },
  {
    id: 3,
    name: "FFDG Vadodara",
    logo: "/partners/ffdg_vadodara.svg",
    website: "#",
  },
  {
    id: 4,
    name: "GDG Cloud Rajkot",
    logo: "/partners/gdg_cloud_rajkot.png",
    website: "#",
  },
  { id: 5, name: "GDG Surat", logo: "/partners/gdg_surat.png", website: "#" },
  {
    id: 6,
    name: "CNCG Gandhinagar",
    logo: "/partners/cncg_gandhinagar.png",
    website: "#",
  },
  {
    id: 7,
    name: "Hashicorp Ahmedabad",
    logo: "/partners/hashicorp_ahmedabad.jpg",
    website: "#",
  },
  {
    id: 8,
    name: "Grafana Ahmedabad",
    logo: "/partners/grafana_ahmedabad.png",
    website: "#",
  },
  {
    id: 9,
    name: "Ahmedabad Developer Club",
    logo: "/partners/ahmedabad_developer_club.jpg",
    website: "#",
  },
  {
    id: 10,
    name: "The Hackers Meetup",
    logo: "/partners/the_hackers_meetup.png",
    website: "#",
  },
  {
    id: 11,
    name: "Java User Group Gujarat",
    logo: "/partners/java_user_group_gujarat.svg",
    website: "#",
  },
  {
    id: 12,
    name: "GDG Cloud Ahmedabad",
    logo: "/partners/gdg_cloud_ahmedabad.png",
    website: "#",
  },
  {
    id: 13,
    name: "GDG Ahmedabad",
    logo: "/partners/gdg_ahmedabad.png",
    website: "#",
  },
  {
    id: 14,
    name: "FOSS United",
    logo: "/partners/FOSS_United.png",
    website: "#",
  },
  {
    id: 15,
    name: "Docker Ahmedabad",
    logo: "/partners/docker_ahmedabad.png",
    website: "#",
  },
  {
    id: 16,
    name: "Laravel Ahmedabad",
    logo: "/partners/laravel_ahmedabad.png",
    website: "#",
  },
  {
    id: 17,
    name: "MongoDB Ahmedabad",
    logo: "/partners/mongodb_ahmedabad.jpg",
    website: "#",
  },
  {
    id: 18,
    name: "Node Ahmedabad",
    logo: "/partners/node_ahmedabad.jpg",
    website: "#",
  },
  {
    id: 19,
    name: "AWS Ahmedabad",
    logo: "/partners/aws_ahmedabad.png",
    website: "#",
  },
  {
    id: 20,
    name: "CNCF Ahmedabad",
    logo: "/partners/cncf_ahmedabad.jpg",
    website: "#",
  },
];

// Past event images — reuse from 2025 assets
import OSWMay_1 from "@/assets/PastEvents/OSW-may/Image_20250504_135007_012.webp";
import OSWMay_2 from "@/assets/PastEvents/OSW-may/Image_20250504_135007_119 (1).webp";
import OSWMay_3 from "@/assets/PastEvents/OSW-may/Image_20250504_135007_299.webp";
import OSWMay_4 from "@/assets/PastEvents/OSW-may/Image_20250504_135008_924 (1).webp";

import OSWApril_1 from "@/assets/PastEvents/OSW-april/20250405_114037.webp";
import OSWApril_2 from "@/assets/PastEvents/OSW-april/20250405_123827.webp";
import OSWApril_3 from "@/assets/PastEvents/OSW-april/20250405_140515.webp";
import OSWApril_4 from "@/assets/PastEvents/OSW-april/20250405_142305.webp";

import OSW24_1 from "@/assets/PastEvents/OSW-24/20241013_094101.webp";
import OSW24_2 from "@/assets/PastEvents/OSW-24/20241013_094102.webp";
import OSW24_3 from "@/assets/PastEvents/OSW-24/20241013_094249.webp";
import OSW24_4 from "@/assets/PastEvents/OSW-24/20241013_102037.webp";
import OSW24_5 from "@/assets/PastEvents/OSW-24/20241013_102246.webp";

import OSWJune23_1 from "@/assets/PastEvents/OSW-june-23/IMG20230625102644.webp";
import OSWJune23_2 from "@/assets/PastEvents/OSW-june-23/IMG20230625121634.webp";
import OSWJune23_3 from "@/assets/PastEvents/OSW-june-23/IMG20230625121639.webp";

import OSW23_1 from "@/assets/PastEvents/OSW-23/IMG_0759.webp";
import OSW23_2 from "@/assets/PastEvents/OSW-23/IMG_0761.webp";
import OSW23_3 from "@/assets/PastEvents/OSW-23/IMG_0767.webp";

export const PastEvent = [
  {
    year: "2025",
    title: "OpenSourceWeekend: Product Collective (May 2025)",
    images: [OSWMay_1, OSWMay_2, OSWMay_3, OSWMay_4],
  },
  {
    year: "2025",
    title: "OpenSourceWeekend: Product Collective (April 2025)",
    images: [OSWApril_1, OSWApril_2, OSWApril_3, OSWApril_4],
  },
  {
    year: "2024",
    title: "2024 OpenSourceWeekend × Hacktoberfest",
    images: [OSW24_1, OSW24_2, OSW24_3, OSW24_4, OSW24_5],
  },
  {
    year: "2023",
    title: "Open Source Talks (June 2023)",
    images: [OSWJune23_1, OSWJune23_2, OSWJune23_3],
  },
  {
    year: "2023",
    title: "2023 OpenSourceWeekend × Hacktoberfest",
    images: [OSW23_1, OSW23_2, OSW23_3],
  },
];

export const FOOTER = {
  description:
    "OpenSourceDay is all about giving back to the open source projects, sharpening your skills, and celebrating all things open source. Join us for 2026!",
};

export const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/OSWeekend",
    icon: FacebookIcon,
    description: "Facebook",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/OSWeekend",
    icon: TwitterIcon,
    description: "Twitter icon",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/OSWeekend",
    icon: InstagramIcon,
    description: "Instagram icon",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/open-source-weekend/",
    icon: LinkedInIcon,
    description: "LinkedIn icon",
  },
  {
    name: "Github",
    href: "https://github.com/oscfcommunity",
    icon: GithubIcon,
    description: "Github icon",
  },
  {
    name: "Medium",
    href: "https://medium.com/@opensourceweekend",
    icon: MediumIcon,
    description: "Medium icon",
  },
];

export const CONTACTS = [
  {
    name: "Email",
    content: "opensourceweekend@gmail.com",
    href: "mailto:opensourceweekend@gmail.com",
    icon: Mail,
  },
  {
    name: "Phone",
    content: "+91 89 8080 8222",
    href: "tel:+918980808222",
    icon: Phone,
  },
];
