import type { Speaker } from "@/config.types";

// Team imports
import OSDGreen from "@/assets/icons/OSDGreen.png";
import OSWBlack from "@/assets/icons/OSWBlack.svg";
import BhargavPithva from "@/assets/team/BhargavPithva.webp";
import DhananiTanvir from "@/assets/team/DhananiTanvir.webp";
import ViralParmar from "@/assets/team/ViralParmar.webp";
import NeelShah from "@/assets/team/NeelShah.webp";
import JigneshGadhavi from "@/assets/team/JigneshGadhavi.webp";
import FalgunBhalsod from "@/assets/team/FalgunBhalsod.webp";
import DhavalDesai from "@/assets/team/DhavalDesai.webp";
import RinkeshBansal from "@/assets/team/RinkeshBansal.webp";
import AshishTiwari from "@/assets/team/AshishTiwari.webp";
// import SurajNath from "@/assets/team/SurajNath.webp";
import MehulPatel from "@/assets/team/MehulPatel.webp";
import HarshManvar from "@/assets/team/HarshManvar.webp";
import NiravShah from "@/assets/team/NiravShah.webp";
import PrathameshChavan from "@/assets/team/PrathameshChavan.webp";
import RohitChavda from "@/assets/team/RohitChavda.webp";

// Speaker Imports
import SanjayVaghela from "@/assets/speakers/SanjayVaghela.png";
// import AshishTiwari from "@/assets/speakers/AshishTiwari.png"; Repeat
import DevarshShah from "@/assets/speakers/DevarshShah.png";
import KrupaGaliya from "@/assets/speakers/KrupaGaliya.png";
import NishargShah from "@/assets/speakers/NishargShah.png";
import RishangBhavsar from "@/assets/speakers/RishangBhavsar.png";
import RonakGanatra from "@/assets/speakers/RonakGanatra.png";
import RuchitPatel from "@/assets/speakers/RuchitPatel.png";
import SantoshViswanatham from "@/assets/speakers/SantoshViswanatham.png";
// import DishantMakwana from "@/assets/speakers/DishantMakwana.png";

// Past Events Images Imports
import OSWMay_1 from "@/assets/PastEvents/OSW-may/Image_20250504_135007_012.webp";
import OSWMay_2 from "@/assets/PastEvents/OSW-may/Image_20250504_135007_119 (1).webp";
import OSWMay_3 from "@/assets/PastEvents/OSW-may/Image_20250504_135007_299.webp";
import OSWMay_4 from "@/assets/PastEvents/OSW-may/Image_20250504_135008_924 (1).webp";
import OSWMay_5 from "@/assets/PastEvents/OSW-may/Image_20250504_135032_445.webp";
import OSWMay_6 from "@/assets/PastEvents/OSW-may/Image_20250504_135033_071.webp";
import OSWMay_7 from "@/assets/PastEvents/OSW-may/IMG_20250504_101248.webp";
import OSWMay_8 from "@/assets/PastEvents/OSW-may/IMG_20250504_115928.webp";
import OSWMay_9 from "@/assets/PastEvents/OSW-may/IMG_7570.webp";

import OSWApril_1 from "@/assets/PastEvents/OSW-april/20250405_114037.webp";
import OSWApril_2 from "@/assets/PastEvents/OSW-april/20250405_123827.webp";
import OSWApril_3 from "@/assets/PastEvents/OSW-april/20250405_140515.webp";
import OSWApril_4 from "@/assets/PastEvents/OSW-april/20250405_142305.webp";

import OSW24_1 from "@/assets/PastEvents/OSW-24/20241013_094101.webp";
import OSW24_2 from "@/assets/PastEvents/OSW-24/20241013_094102.webp";
import OSW24_3 from "@/assets/PastEvents/OSW-24/20241013_094249.webp";
import OSW24_4 from "@/assets/PastEvents/OSW-24/20241013_102037.webp";
import OSW24_5 from "@/assets/PastEvents/OSW-24/20241013_102246.webp";
import OSW24_6 from "@/assets/PastEvents/OSW-24/20241013_102830.webp";
import OSW24_7 from "@/assets/PastEvents/OSW-24/20241013_103742.webp";
import OSW24_8 from "@/assets/PastEvents/OSW-24/20241013_104148.webp";
import OSW24_9 from "@/assets/PastEvents/OSW-24/20241013_104753.webp";
import OSW24_10 from "@/assets/PastEvents/OSW-24/20241013_111739.webp";
import OSW24_11 from "@/assets/PastEvents/OSW-24/20241013_112335.webp";
import OSW24_12 from "@/assets/PastEvents/OSW-24/20241013_113256.webp";
import OSW24_13 from "@/assets/PastEvents/OSW-24/20241013_114008.webp";
import OSW24_14 from "@/assets/PastEvents/OSW-24/20241013_124553.webp";
import OSW24_15 from "@/assets/PastEvents/OSW-24/20241013_131111.webp";

import OSWJune23_1 from "@/assets/PastEvents/OSW-june-23/IMG20230625102644.webp";
import OSWJune23_2 from "@/assets/PastEvents/OSW-june-23/IMG20230625121634.webp";
import OSWJune23_3 from "@/assets/PastEvents/OSW-june-23/IMG20230625121639.webp";
import OSWJune23_4 from "@/assets/PastEvents/OSW-june-23/IMG_7994.webp";
import OSWJune23_5 from "@/assets/PastEvents/OSW-june-23/IMG_7995.webp";
import OSWJune23_6 from "@/assets/PastEvents/OSW-june-23/IMG_8006.webp";
import OSWJune23_7 from "@/assets/PastEvents/OSW-june-23/IMG_8018.webp";
import OSWJune23_8 from "@/assets/PastEvents/OSW-june-23/IMG_8024.webp";
import OSWJune23_9 from "@/assets/PastEvents/OSW-june-23/IMG_8033.webp";
import OSWJune23_10 from "@/assets/PastEvents/OSW-june-23/IMG_8038.webp";

import OSW23_1 from "@/assets/PastEvents/OSW-23/IMG_0759.webp";
import OSW23_2 from "@/assets/PastEvents/OSW-23/IMG_0761.webp";
import OSW23_3 from "@/assets/PastEvents/OSW-23/IMG_0767.webp";
import OSW23_4 from "@/assets/PastEvents/OSW-23/IMG_0782.webp";
import OSW23_5 from "@/assets/PastEvents/OSW-23/IMG_0787.webp";
import OSW23_6 from "@/assets/PastEvents/OSW-23/IMG_0790.webp";
import OSW23_7 from "@/assets/PastEvents/OSW-23/IMG_0803.webp";
import OSW23_8 from "@/assets/PastEvents/OSW-23/IMG_0804.webp";
import OSW23_9 from "@/assets/PastEvents/OSW-23/IMG_0806.webp";
import OSW23_10 from "@/assets/PastEvents/OSW-23/IMG_0824.webp";

export const SITE = {
  title: "OpenSourceDay 2025",
  shortTitle: "OSD2025",
  description:
    "OpenSourceDay is all about giving back to the open source projects, sharpening your skills, and celebrating all things open source. Join us for a day!",
  website: "https://opensourceweekend.org",
  ogImage: "/images/OSWBlack.png",
  icon: "@/assets/icons/OSDGreen.png"
};

export const eventSchedule = [
  {
    time: "08:00 AM - 09:30 AM",
    title: "Registration/Breakfast",
    speaker: "",
    type: "registration",
    room: "Lobby/Food Court"
  },
  {
    time: "09:30 AM - 10:00 AM",
    title: "Warmup Activity",
    speaker: "",
    type: "activity",
    room: "Main Auditorium"
  },
  {
    time: "10:00 AM - 10:15 AM",
    title: "Welcome Note",
    speaker: "",
    type: "opening",
    room: "Main Auditorium"
  },
  {
    time: "10:15 AM - 10:45 AM",
    title: "Keynote",
    speaker: "",
    type: "keynote",
    room: "Main Auditorium"
  },
  {
    time: "10:45 AM - 11:30 AM",
    title: "Speaker 1",
    speaker: "",
    type: "talk",
    room: "Main Auditorium"
  },
  {
    time: "11:30 AM - 12:15 PM",
    title: "Speaker 2",
    speaker: "",
    type: "talk",
    room: "Main Auditorium"
  },
  {
    time: "12:15 PM - 01:00 PM",
    title: "Panel Discussion",
    speaker: "",
    type: "panel",
    room: "Main Auditorium"
  },
  {
    time: "01:00 PM - 02:00 PM",
    title: "Lunch",
    speaker: "",
    type: "break",
    room: "Food Court"
  },
  {
    time: "02:00 PM - 02:45 PM",
    title: "Speaker 3",
    speaker: "",
    type: "talk",
    room: "Main Auditorium"
  },
  {
    time: "02:45 PM - 03:30 PM",
    title: "Speaker 4",
    speaker: "",
    type: "talk",
    room: "Main Auditorium"
  },
  {
    time: "03:30 PM - 04:15 PM",
    title: "Panel Discussion",
    speaker: "",
    type: "panel",
    room: "Main Auditorium"
  },
  {
    time: "04:15 PM - 04:45 PM",
    title: "Closing Keynote",
    speaker: "",
    type: "keynote",
    room: "Main Auditorium"
  },
  {
    time: "04:45 PM - 05:00 PM",
    title: "Closing Remarks",
    speaker: "",
    type: "closing",
    room: "Main Auditorium"
  },
  {
    time: "05:00 PM - 05:30 PM",
    title: "Goodies Distribution",
    speaker: "",
    type: "social",
    room: "Exhibition Hall"
  }
];

export const workshopSchedule = [];

export const BRANDING = {
  logos: {
    main: OSDGreen.src,
    mainNoText: "/icons/OSDLogoNoText.svg",
    fullWhite: "/icons/OSWFullWhite.svg",
    fullBlack: "/icons/OSWFullBlack.svg",
    white: "/icons/OSWWhite.svg",
    black: "/icons/OSWBlack.svg",
    green: OSDGreen.src
  },
  colors: {
    primary: "#22c55e",
    secondary: "#16a34a",
    dark: "#15803d",
    light: "#dcfce7"
  }
};

export const EVENT = {
  name: "Open Source Day 2025",
  shortName: "OSD2025",
  date: "October 05, 2025",
  location: "Tech Convention Center, San Jose",
  tagline:
    "Join the largest open source developer conference of the year. Learn, network, and contribute to the future of technology.",
  description:
    "Open Source Day 2025 is a community-driven event celebrating the power of open source software. Join developers, maintainers, and enthusiasts for a day of learning, collaboration, and innovation.",
  stats: {
    expectedAttendees: "600+",
    speakers: "20+",
    workshops: "15+",
    sponsors: "20+"
  }
};

export const NAVIGATION = {
  items: [
    { name: "Speakers", href: "/speakers" },
    { name: "Schedule", href: "/schedule" },
    { name: "Team", href: "/team" },
    { name: "Tickets", href: "/tickets" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Venue", href: "/venue" },
    { name: "Past Events", href: "/past-events" }
  ],
  cta: {
    text: "Register Now",
    url: "https://konfhub.com/open-source-day-2025"
  }
};

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/OSWeekend",
  twitter: "https://twitter.com/OSWeekend",
  instagram: "https://instagram.com/OSWeekend",
  linkedin: "https://www.linkedin.com/company/open-source-weekend/",
  medium: "https://medium.com/@opensourceweekend",
  github: "https://github.com/opensourceweekend",
  discord: "https://discord.gg/opensourceweekend"
};

export const CONTACT = {
  title: "Contact Us",
  email: "opensourceweekend@gmail.com ",
  phone: "+91 8980808222, +91 8401339936",
  address: {
    venue: "VENUE - TBA",
    city: "Ahmedabad",
    state: "Gujarat",
    country: "India"
  },
  emergencyPhone: "+91 8980808222"
};

export const HERO = {
  title: {
    part1: "PEN",
    part2: "SOURCE",
    part3: "DAY",
    year: "2025"
  },
  subtitle:
    "Join us for a day of learning, networking, and celebrating open source innovation. Connect with developers, contribute to projects, and shape the future of technology.",
  buttons: {
    primary: {
      text: "Register Now",
      url: "https://konfhub.com/open-source-day-2025"
    },
    secondary: {
      text: "Learn More",
      url: "/about"
    }
  }
};

export const ABOUT = {
  title: "About Open Source Day",
  description:
    "Open Source Day 2025 is a community-driven event celebrating the power of open source software. Join developers, maintainers, and enthusiasts for a day of learning, collaboration, and innovation.",
  features: [
    {
      title: "Learn & Contribute",
      description:
        "Discover new technologies, learn best practices, and get hands-on experience contributing to real open source projects.",
      icon: "check"
    },
    {
      title: "Connect",
      description:
        "Network with fellow developers, open source maintainers, and tech enthusiasts from the Indian tech community.",
      icon: "users"
    },
    {
      title: "Celebrate",
      description:
        "Celebrate the achievements of the open source community and discover exciting new projects and opportunities.",
      icon: "star"
    }
  ]
};

export const SPEAKERS: Speaker[] = [
  {
    name: "Ashish Tiwari",
    position: "Principal Solutions Architect",
    company: "Elastic",
    presentationTitle: "Open Source Journey with Elastic",
    event: "2024 OpenSourceWeekend x HacktoberFest",
    eventYear: 2024,
    image: AshishTiwari
  },
  {
    name: "Sanjay Vaghela",
    position: "CTO",
    company: "IQM",
    presentationTitle: "Open Source Technologies for a SaaS at Scale",
    event: "2024 OpenSourceWeekend x HacktoberFest",
    eventYear: 2024,
    image: SanjayVaghela
  },
  {
    name: "Ruchit Patel",
    position: "Team lead",
    company: "ViitorCloud Technologies",
    presentationTitle: "Demystifying Open Source",
    event: "2024 OpenSourceWeekend x HacktoberFest",
    eventYear: 2024,
    image: RuchitPatel
  },
  {
    name: "Devarsh Shah",
    position: "Sr. Full Stack Developer",
    company: "IQM",
    presentationTitle: "Open Source Technologies for a SaaS at Scale",
    event: "2024 OpenSourceWeekend x HacktoberFest",
    eventYear: 2024,
    image: DevarshShah
  },
  {
    name: "Rishang Bhavsar",
    position: "Devops Engineer",
    company: "smartSense Consulting Solutions",
    presentationTitle:
      "How to start an Open Source Project and contribute on Github",
    event: "2024 OpenSourceWeekend x HacktoberFest",
    eventYear: 2024,
    image: RishangBhavsar
  },
  {
    name: "Krupa Galiya",
    position: "Sr.Data scientist",
    company: "PatternAI",
    presentationTitle:
      "Significance of Open Source Contribution and Community Engagement",
    event: "2023 OpenSourceWeekend x HacktoberFest",
    eventYear: 2023,
    image: KrupaGaliya
  },
  {
    name: "Viral Parmar",
    position: "Director",
    company: "ComExpo Cyber Security",
    presentationTitle:
      "How Can We Create Community Around Open Source Project And Get More Contribution",
    event: "2023 OpenSourceWeekend x HacktoberFest",
    eventYear: 2023,
    image: ViralParmar
  },
  {
    name: "Santosh Viswanatham",
    position: "Principal Engineer",
    company: "Arcesium",
    presentationTitle: "Coding for Change: Hacktoberfest with Interledger",
    event: "2023 OpenSourceWeekend x HacktoberFest",
    eventYear: 2023,
    image: SantoshViswanatham
  },
  // {
  //   name: "Dishant Makwana",
  //   position: "Sr. System Engineer",
  //   company: "EPAM Systems",
  //   presentationTitle:
  //     "Introduction to Kubernetes and How to Run Wordpress on Kubernetes",
  //   event: "2023 OpenSourceWeekend x HacktoberFest",
  //   eventYear: 2023,
  //   image: "",
  // },
  {
    name: "Ronak Ganatra",
    position: "Sr. Wordpress Engineer",
    company: "Multidots Solutions Pvt. Ltd.",
    presentationTitle: "Kickstart Your Open Source Journey with Wordpress",
    event: "2023 OpenSourceWeekend x HacktoberFest",
    eventYear: 2023,
    image: RonakGanatra
  },
  {
    name: "Nisharg Shah",
    position: "Sr. Software Engineer",
    company: "Coda",
    presentationTitle: "Kickstart Your Open Source Journey with NodeJS",
    event: "2023 OpenSourceWeekend x HacktoberFest",
    eventYear: 2023,
    image: NishargShah
  }
];

export const TICKETS = [
  {
    name: "Early Bird Ticket",
    price: "₹199",
    originalPrice: null,
    description:
      "Tickets include full-access to conference, lunch, keynotes, panels, OSD goodies, and early bird discount.",
    features: [
      "Full-access to conference",
      "Lunch",
      "Keynotes, Panels",
      "OSD Goodies",
      "Early Bird Discount"
    ],
    availableTill: "20th Sep 2025, 06:00 PM (GMT+05:30)",
    popular: false,
    available: true,
    konfhubUrl:
      "https://konfhub.com/checkout/open-source-day-2025?ticketId=56932"
  },
  // {
  //   name: "Regular Ticket",
  //   price: "₹499",
  //   originalPrice: null,
  //   description:
  //     "Tickets include full-access to conference, lunch, keynotes, panels, OSD goodies.",
  //   features: [
  //     "Full-access to conference",
  //     "Lunch",
  //     "Keynotes, Panels",
  //     "OSD Goodies",
  //   ],
  //   startsOn: "20th Sep 2025, 03:45 AM (GMT+05:30)",
  //   popular: false,
  //   available: false,
  //   konfhubUrl:
  //     "https://konfhub.com/checkout/open-source-day-2025?ticketId=56800",
  //   linkText: "Coming Soon",
  // },
  {
    name: "Open Source Day 25 + Devfest Gandhinagar 25",
    price: "₹799",
    originalPrice: null,
    description:
      "Tickets include access for both Open Source Day and DevFest Gandhinagar with multiple perks.",
    features: [
      "Tickets include for Open Source Day:",
      "Full-access to conference",
      "Lunch",
      "Keynotes, Panels",
      "OSD Goodies",
      "Tickets include for DevFest Gandhinagar:",
      "Full-access to conference",
      "Lunch",
      "Hi-Tea",
      "Keynotes, Panels",
      "GDG Gandhinagar Goodies",
      "Digital Certificate"
    ],
    availableTill: "20th Sep 2025, 06:00 PM (GMT+05:30)",
    popular: true,
    available: true,
    konfhubUrl:
      "https://konfhub.com/checkout/open-source-day-2025?ticketId=56934"
  },
  {
    name: "Community Fan",
    price: "₹999",
    originalPrice: null,
    description:
      "This ticket is for all community members who constantly support us and create a vibrant community.",
    features: [
      "Full-access to conference",
      "Lunch",
      "Keynotes, Panels",
      "OSD Goodies",
      "Super Fan Goodies",
      "Digital Certificate"
    ],
    availableTill: "5th Oct 2025, 06:00 PM (GMT+05:30)",
    popular: false,
    available: true,
    konfhubUrl:
      "https://konfhub.com/checkout/open-source-day-2025?ticketId=56805"
  },
  {
    name: "Supporter Ticket",
    price: "₹1,999",
    originalPrice: null,
    description:
      "This ticket is for community members who support us and create a vibrant community.",
    features: [
      "Full-access to conference",
      "Lunch",
      "Keynotes, Panels",
      "OSD Goodies",
      "Supporter Exclusive goodies",
      "Digital Certificate"
    ],
    availableTill: "5th Oct 2025, 06:00 PM (GMT+05:30)",
    popular: false,
    available: true,
    konfhubUrl:
      "https://konfhub.com/checkout/open-source-day-2025?ticketId=56803"
  },
  {
    name: "Silver Ticket",
    price: "₹4,999",
    originalPrice: null,
    description:
      "This ticket is for community members who support us and create a vibrant community.",
    features: [
      "Full-access to conference",
      "Lunch",
      "Keynotes, Panels",
      "OSD Goodies",
      "Silver Ticket Exclusive goodies",
      "Digital Certificate",
      "Shout out during the event",
      "Shout-out on Social Media",
      "Networking Dinner with Speakers, sponsors, organizers and some special industry invitees"
    ],
    availableTill: "5th Oct 2025, 06:00 PM (GMT+05:30)",
    popular: false,
    available: true,
    konfhubUrl:
      "https://konfhub.com/checkout/open-source-day-2025?ticketId=56804"
  },
  {
    name: "Golden Ticket",
    price: "₹9,999",
    originalPrice: null,
    description:
      "This ticket is for community members who support us and create a vibrant community. This Ticket would be considered as a Donation which could be claimed in 80G & 12AA Tax Exemption.",
    features: [
      "Full-access to conference",
      "Lunch",
      "Keynotes, Panels",
      "OSD Goodies",
      "Golden Ticket Exclusive goodies",
      "Digital Certificate",
      "Networking Dinner with Speakers , sponsors , organizers and some special industry invitees",
      "Shout-out on Social Media",
      "Shout out during the event",
      "Appreciation Memento from OSD"
    ],
    availableTill: "5th Oct 2025, 06:00 PM (GMT+05:30)",
    popular: false,
    available: true,
    konfhubUrl:
      "https://konfhub.com/checkout/open-source-day-2025?ticketId=56806"
  },
  {
    name: "Micro Sponsor",
    subtitle: "Pack of 3 Golden Ticket",
    price: "₹29,999",
    originalPrice: null,
    description:
      "This ticket is for all our community people who constantly support us and create a vibrant community. Pack of 3 tickets with company branding and networking. Sponsorship considered as a Donation which could be claimed in 80G & 12AA Tax Exemption.",
    features: [
      "Full-access to conference",
      "Lunch",
      "Keynotes, Panels",
      "OSD Goodies",
      "Golden Ticket Exclusive goodies",
      "Digital Certificate",
      "Networking Dinner with Speakers , sponsors , organizers and some special industry invitees",
      "Company Branding at relevant places",
      "Shout-out during the event",
      "Appreciation Memento from OSD"
    ],
    availableTill: "5th Oct 2025, 06:00 PM (GMT+05:30)",
    popular: false,
    available: false,
    konfhubUrl:
      "https://konfhub.com/checkout/open-source-day-2025?ticketId=56807",
    linkText: "Sold Out"
  }
];

export const VENUE = {
  name: "Ahmedabad",
  address: "Ahmedabad, Gujarat, India",
  description:
    "Ahmedabad, the vibrant heart of Gujarat, where heritage meets innovation.",
  capacity: "500+ attendees across multiple halls",
  facilities: [
    "Main auditorium with 300 seats",
    "3 workshop rooms (50 seats each)",
    "Networking lounge and exhibition area",
    "High-speed WiFi throughout",
    "Professional A/V equipment",
    "Accessible facilities"
  ],
  transport: {
    parking: "Free parking available. Exit 12A from Highway 101",
    Transit: "Bus and local transport options available, Train, Flights",
    airport: "Sardar Vallabhbhai Patel International Airport (AMD)"
  }
};

export const FOOTER = {
  description:
    "Open Source Day 2025 - A community-driven event celebrating open source innovation. Join developers, maintainers, and enthusiasts for learning and collaboration.",
  quickLinks: [
    { name: "Speakers", href: "/speakers" },
    { name: "Schedule", href: "/schedule" },
    { name: "Venue", href: "/venue" },
    { name: "Tickets", href: "/tickets" },
    { name: "Past Events", href: "/past-events" }
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Code of Conduct", href: "/code-of-conduct" }
  ],
  copyright: "© {year} OpenSource Weekend. All rights reserved.",
  credits: "Made with ❤️ by the OSW community"
};

export const META = {
  defaultTitle: "Open Source Day 2025 - Celebrate Innovation",
  titleTemplate: "%s | Open Source Day 2025",
  description:
    "Join the largest open source developer conference of the year. Learn, network, and contribute to the future of technology.",
  keywords: [
    "open source",
    "conference",
    "developers",
    "technology",
    "innovation",
    "community"
  ],
  author: "OpenSource Weekend",
  twitterCard: "summary_large_image"
};

export const SPONSORS = [
  {
    name: "Acme Labs",
    tier: "Platinum",
    logo: "https://placehold.co/200x80?text=Acme+Labs&bg=0d9488&color=ffffff",
    website: "https://acme.example"
  },
  {
    name: "DevTools Inc",
    tier: "Gold",
    logo: "https://placehold.co/200x80?text=DevTools&bg=16a34a&color=ffffff",
    website: "https://devtools.example"
  },
  {
    name: "Cloudify",
    tier: "Silver",
    logo: "https://placehold.co/200x80?text=Cloudify&bg=0f172a&color=ffffff",
    website: "https://cloudify.example"
  },
  {
    name: "OpenSource Community",
    tier: "Community",
    logo: "https://placehold.co/200x80?text=Community&bg=64748b&color=ffffff",
    website: "https://community.example"
  }
];

export const COMMUNITY_PARTNERS = [
  {
    name: "DevOops 1",
    logo: "/partners/DevOops-Sticker_Logo-V2-1_page-0001.jpg",
    website: "#"
  },
  { name: "HashicorpUG", logo: "/partners/HashicorpUG.jpg", website: "#" },
  {
    name: "Cloud native",
    logo: "/partners/CNCG Blue.png",
    website: "#"
  },
  { name: "gdg", logo: "/partners/gdg.png", website: "#" },
  {
    name: "Gdg Rajkot",
    logo: "/partners/GDG cloud rajkot SVG.svg",
    website: "#"
  },
  {
    name: "THM",
    logo: "/partners/THM logo Black Long.png",
    website: "#"
  },
  {
    name: "grafana",
    logo: "/partners/Grafana Ahmedabad.png",
    website: "#"
  },
  {
    name: "adc",
    logo: "/partners/ADC with White BG - Ahmedabad Developer Club.jpg",
    website: "#"
  },
  {
    name: "Fluter Flow vadodara",
    logo: "/partners/Fluter Flow vadodara.svg",
    website: "#"
  },
  {
    name: "gdg cloud gandhinagar copy",
    logo: "/partners/gdg cloud gandhinagar copy.jpg",
    website: "#"
  },
  {
    name: "GDG Surat",
    logo: "/partners/GDG Surat.png",
    website: "#"
  },
  {
    name: "gujarat jug - full logo",
    logo: "/partners/gujarat jug - full logo.svg",
    website: "#"
  },
  {
    name: "GDG pune",
    logo: "/partners/GDGPUNE.png",
    website: "#"
  },
  {
    name: "GDG nashik",
    logo: "/partners/GDGNashik_logo.png",
    website: "#"
  }
];

// Simple tier grouping for display on Home and Sponsors page.
export const SPONSOR_TIERS = {
  gold: [
    { name: "OSCF", logo: "/icons/OSCF.png", website: "#" },
    { name: "OSW", logo: OSWBlack.src, website: "#" },
    { name: "CCSF", logo: "/icons/CCSF.png", website: "#" }
  ],
  silver: [
    { name: "OSCF", logo: "/icons/OSCF.png", website: "#" },
    { name: "OSW", logo: OSWBlack.src, website: "#" },
    { name: "CCSF", logo: "/icons/CCSF.png", website: "#" }
  ],
  bronze: [
    { name: "OSCF", logo: "/icons/OSCF.png", website: "#" },
    { name: "OSW", logo: OSWBlack.src, website: "#" },
    { name: "CCSF", logo: "/icons/CCSF.png", website: "#" }
  ]
};

// Add a few extra online sponsor logos for demo
export const EXTRA_SPONSORS = [
  {
    name: "Stripe",
    logo: "https://placehold.co/200x80?text=Stripe&bg=0ea5a4&color=ffffff",
    website: "https://stripe.com"
  },
  {
    name: "Netlify",
    logo: "https://placehold.co/200x80?text=Netlify&bg=0f172a&color=ffffff",
    website: "https://netlify.com"
  },
  {
    name: "Vercel",
    logo: "https://placehold.co/200x80?text=Vercel&bg=111827&color=ffffff",
    website: "https://vercel.com"
  }
];

export const TEAM = {
  advisory: [
    {
      name: "Dr. Rinkesh Bansal",
      roles: ["Program Director", "Master Inventor at IBM"],
      linkedin: "https://www.linkedin.com/in/rinkesh-bansal-09798843/",
      image: RinkeshBansal
    }
  ],
  mentors: [
    {
      name: "Mehul Patel",
      roles: [
        "Sr. DevOps Engineer",
        "Mozilla Reps Council",
        "Docker Captain",
        "AWS Community Builder",
        "Google Developer Expert"
      ],
      linkedin: "https://www.linkedin.com/in/nomadicmehul/",
      image: MehulPatel
    },
    {
      name: "Ashish Tiwari",
      roles: [
        "Principal Solutions Architect",
        "Search Specialist @ Elastic India"
      ],
      linkedin: "https://www.linkedin.com/in/ashishtiwari93/",
      image: AshishTiwari
    },
    {
      name: "Prathamesh Chavan",
      roles: [
        "AI Engineering Manager at Red Hat",
        "Mozilla Reps Council",
        "3X Wrangler at MozFest"
      ],
      linkedin: "https://www.linkedin.com/in/prathameshpchavan/",
      image: PrathameshChavan
    },
    {
      name: "Harsh Manvar",
      roles: ["CNCF Ambassador", "Docker Captain", "Google Developer Expert"],
      linkedin: "https://www.linkedin.com/in/harsh-manvar-64a30aa3/",
      image: HarshManvar
    },
    {
      name: "Nirav Shah",
      roles: [
        "Director at Eternal Web Private Limited",
        "AWS Community Builder"
      ],
      linkedin: "https://www.linkedin.com/in/nirav-eternal/",
      image: NiravShah
    }
    // {
    //   name: "Suraj Nath",
    //   roles: ["Sr. Software Engineer at Grafana Labs"],
    //   linkedin: "https://www.linkedin.com/in/electron0zero/",
    //   image: SurajNath,
    //   hide: true, // Hidden for now
    // },
    // {
    //   name: "Kalyan Prasad",
    //   roles: ["Advisor, Kaggle", "Organizer, PyCon India"],
    //   linkedin: "https://www.linkedin.com/in/itskpflow/",
    //   image: "/partners/Kalyan-Prasad.jpg",
    //   hide: true, // Hidden for now (no Mentor Board image available)
    // },
    // {
    //   name: "Vishal Rajpurohit",
    //   roles: ["CTO, Viitor Cloud", "Organizer Laracon India"],
    //   linkedin: "https://www.linkedin.com/in/vishalrajpurohit/",
    //   image: "/partners/Vishal-Rajpurohit.jpg",
    //   hide: true, // Hidden for now
    // },
    // {
    //   name: "Ram Iyenger",
    //   roles: ["Chief Evangelist at Cloud Foundry Foundation"],
    //   linkedin: "https://www.linkedin.com/in/ram-iyengar/",
    //   image: "/partners/Ram-Iyenger.jpg",
    //   hide: true, // Hidden for now
    // },
    // {
    //   name: "Santosh Yadav",
    //   roles: ["Staff Engineer, Celonis"],
    //   linkedin: "https://www.linkedin.com/in/santoshyadavdev/",
    //   image: "/partners/Santosh-Yadav.jpg",
    //   hide: true, // Hidden for now
    // },
  ],
  core: [
    {
      name: "Viral Parmar",
      roles: [
        "Director - Open Source Community Foundation",
        "Director - ComExpo Cyber Security Foundation",
        "Community Manager at The Hackers Meetup",
        "Co-organizer at Open Source Weekend"
      ],
      linkedin: "https://www.linkedin.com/in/viral-parmar-8402a04a/",
      image: ViralParmar
    },
    {
      name: "Neel Shah",
      roles: [
        "Developer Advocate at Middleware",
        "Co-organizer at Open Source Weekend"
      ],
      linkedin: "https://www.linkedin.com/in/neelcshah/",
      image: NeelShah
    },
    {
      name: "Dhaval Desai",
      roles: ["Product Manager at Gluu"],
      linkedin: "https://www.linkedin.com/in/dhavaltdesai/",
      image: DhavalDesai
    },
    {
      name: "Bhargav Pithva",
      roles: ["Technical Project Manager at Rysun Labs"],
      linkedin: "https://www.linkedin.com/in/bhargavpithva/",
      image: BhargavPithva
    },
    {
      name: "Tanvir Dhanani",
      roles: ["Backend Developer at IBM"],
      linkedin: "https://www.linkedin.com/in/dhanani-tanvir-aa4076118/",
      image: DhananiTanvir
    },
    {
      name: "Jignesh Gadhavi",
      roles: [
        "Sr. DevOps Engineer at Yellow Panther",
        "Co-organizer at GDG Cloud Gandhinagar"
      ],
      linkedin: "https://www.linkedin.com/in/jigneshkumar-gadhavi/",
      image: JigneshGadhavi
    },
    {
      name: "Falgun Bhalsod",
      roles: ["DevOps Engineer at Yellow Panther"],
      linkedin: "https://www.linkedin.com/in/falgunbhalsod/",
      image: FalgunBhalsod
    }
  ],
  volunteers: [
    {
      name: "Chavda Rohit",
      role: "Website Engineer",
      image: RohitChavda
    }
  ]
};

export const PastEvent = [
  {
    year: "2025",
    title: "Open Source Weekend - Product Collective - May 2025",
    images: [
      OSWMay_1,
      OSWMay_2,
      OSWMay_3,
      OSWMay_4,
      OSWMay_5,
      OSWMay_6,
      OSWMay_7,
      OSWMay_8,
      OSWMay_9
    ]
  },
  {
    year: "2025",
    title: "OSW-Product Collective - April 2025",
    images: [OSWApril_1, OSWApril_2, OSWApril_3, OSWApril_4]
  },
  {
    year: "2024",
    title: "OSW-Day X Hacktoberfest 2024",
    images: [
      OSW24_1,
      OSW24_2,
      OSW24_3,
      OSW24_4,
      OSW24_5,
      OSW24_6,
      OSW24_7,
      OSW24_8,
      OSW24_9,
      OSW24_10,
      OSW24_11,
      OSW24_12,
      OSW24_13,
      OSW24_14,
      OSW24_15
    ]
  },
  {
    year: "2023",
    title: "OSW-June 2023",
    images: [
      OSWJune23_1,
      OSWJune23_2,
      OSWJune23_3,
      OSWJune23_4,
      OSWJune23_5,
      OSWJune23_6,
      OSWJune23_7,
      OSWJune23_8,
      OSWJune23_9,
      OSWJune23_10
    ]
  },
  {
    year: "2023",
    title: "OSW-Day 2023",
    images: [
      OSW23_1,
      OSW23_2,
      OSW23_3,
      OSW23_4,
      OSW23_5,
      OSW23_6,
      OSW23_7,
      OSW23_8,
      OSW23_9,
      OSW23_10
    ]
  }
];
