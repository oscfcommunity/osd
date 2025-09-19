import type { Speaker } from "@/config.types";

// Team imports
import OSDGreen from "@/assets/icons/OSDGreen.svg";
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
import SurajNath from "@/assets/team/SurajNath.webp";
import MehulPatel from "@/assets/team/MehulPatel.webp";
import HarshManvar from "@/assets/team/HarshManvar.webp";
import NiravShah from "@/assets/team/NiravShah.webp";
import PrathameshChavan from "@/assets/team/PrathameshChavan.webp";
import RohitChavda from "@/assets/team/RohitChavda.webp";
import SantoshYadav from "@/assets/team/SantoshYadav.webp";
import VishalRajpurohit from "@/assets/team/VishalRajpurohit.webp";
import KalyanPrasad from "@/assets/team/KalyanPrasad.webp";

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

import FacebookIcon from "@/assets/icons/facebook.svg";
import TwitterIcon from "@/assets/icons/x.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import LinkedInIcon from "@/assets/icons/footer-linkedin.svg";
import MediumIcon from "@/assets/icons/medium.svg";
import GithubIcon from "@/assets/icons/github.svg";
import DiscordIcon from "@/assets/icons/discord.svg";
import Mail from "@/assets/icons/mail.svg";
import Phone from "@/assets/icons/phone.svg";
import SOU from "@/assets/partners/Silver Oak University.png";

export const SITE = {
  title: "2025 OpenSourceDay",
  shortTitle: "OSD2025",
  description:
    "OpenSourceDay is all about giving back to the open source projects, sharpening your skills, and celebrating all things open source. Join us for a day!",
  website: "https://osd.opensourceweekend.org",
  ogImage: "https://osd.opensourceweekend.org/images/Viral_Parmar_Stage.jpg",
  icon: "@/assets/icons/OSDGreen.svg",
};

export const fullEvent = {
  title: "Open Source Day 2025",
  room: "VENUE - TBA Ahmedabad",
  start: "20251005T080000",
  end: "20251005T173000",
};

export const eventSchedule = [
  {
    time: "08:00 AM - 09:30 AM",
    title: "Registration/Breakfast",
    speaker: "",
    type: "registration",
    room: "Lobby/Food Court",
    start: "20251005T080000",
    end: "20251005T093000",
  },
  {
    time: "09:30 AM - 10:00 AM",
    title: "Warmup Activity",
    speaker: "",
    type: "activity",
    room: "Main Auditorium",
    start: "20251005T093000",
    end: "20251005T100000",
  },
  {
    time: "10:00 AM - 10:15 AM",
    title: "Welcome Note",
    speaker: "",
    type: "opening",
    room: "Main Auditorium",
    start: "20251005T100000",
    end: "20251005T101500",
  },
  {
    time: "10:15 AM - 10:45 AM",
    title: "Keynote",
    speaker: "",
    type: "keynote",
    room: "Main Auditorium",
    start: "20251005T101500",
    end: "20251005T104500",
  },
  {
    time: "10:45 AM - 11:30 AM",
    title: "Speaker 1",
    speaker: "",
    type: "talk",
    room: "Main Auditorium",
    start: "20251005T104500",
    end: "20251005T113000",
  },
  {
    time: "11:30 AM - 12:15 PM",
    title: "Speaker 2",
    speaker: "",
    type: "talk",
    room: "Main Auditorium",
    start: "20251005T113000",
    end: "20251005T121500",
  },
  {
    time: "12:15 PM - 01:00 PM",
    title: "Panel Discussion",
    speaker: "",
    type: "panel",
    room: "Main Auditorium",
    start: "20251005T121500",
    end: "20251005T130000",
  },
  {
    time: "01:00 PM - 02:00 PM",
    title: "Lunch",
    speaker: "",
    type: "break",
    room: "Food Court",
    start: "20251005T130000",
    end: "20251005T140000",
  },
  {
    time: "02:00 PM - 02:45 PM",
    title: "Speaker 3",
    speaker: "",
    type: "talk",
    room: "Main Auditorium",
    start: "20251005T140000",
    end: "20251005T144500",
  },
  {
    time: "02:45 PM - 03:30 PM",
    title: "Speaker 4",
    speaker: "",
    type: "talk",
    room: "Main Auditorium",
    start: "20251005T144500",
    end: "20251005T153000",
  },
  {
    time: "03:30 PM - 04:15 PM",
    title: "Panel Discussion",
    speaker: "",
    type: "panel",
    room: "Main Auditorium",
    start: "20251005T153000",
    end: "20251005T161500",
  },
  {
    time: "04:15 PM - 04:45 PM",
    title: "Closing Keynote",
    speaker: "",
    type: "keynote",
    room: "Main Auditorium",
    start: "20251005T161500",
    end: "20251005T164500",
  },
  {
    time: "04:45 PM - 05:00 PM",
    title: "Closing Remarks",
    speaker: "",
    type: "closing",
    room: "Main Auditorium",
    start: "20251005T164500",
    end: "20251005T170000",
  },
  {
    time: "05:00 PM - 05:30 PM",
    title: "Goodies Distribution",
    speaker: "",
    type: "social",
    room: "Exhibition Hall",
    start: "20251005T170000",
    end: "20251005T173000",
  },
];

export const workshopSchedule = [];

export const BRANDING = {
  logos: {
    main: OSDGreen,
    mainNoText: "/icons/OSDLogoNoText.svg",
    fullWhite: "/icons/OSWFullWhite.svg",
    fullBlack: "/icons/OSWFullBlack.svg",
    white: "/icons/OSWWhite.svg",
    black: "/icons/OSWBlack.svg",
    green: OSDGreen,
  },
  colors: {
    primary: "#22c55e",
    secondary: "#16a34a",
    dark: "#15803d",
    light: "#dcfce7",
  },
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
    sponsors: "20+",
    communityPartners: "40+",
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
    text: "Register Now",
    url: "https://konfhub.com/open-source-day-2025",
  },
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
  // {
  //   name: "Discord",
  //   href: "https://discord.gg/opensourceweekend",
  //   icon: DiscordIcon,
  //   description: "Discord icon",
  // },
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
  {
    name: "Phone",
    content: "+91 8401 3399 36",
    href: "tel:+918401339936",
    icon: Phone,
  },
];

export const CONTACT = {
  title: "Contact Us",
  email: "opensourceweekend@gmail.com ",
  phone: ["+91 8980808222", "+91 8401339936"],
  address: {
    venue: "VENUE - TBA",
    city: "Ahmedabad",
    state: "Gujarat",
    country: "India",
  },
  emergencyPhone: "+91 8980808222",
};

export const HERO = {
  title: {
    part1: "PEN",
    part2: "SOURCE",
    part3: "DAY",
    year: "2025",
  },
  subtitle:
    "Join us for a day of learning, networking, and celebrating open source innovation. Connect with developers, contribute to projects, and shape the future of technology.",
  buttons: {
    primary: {
      text: "Register Now",
      url: "https://konfhub.com/open-source-day-2025",
    },
    secondary: {
      text: "Learn More",
      url: "/about",
    },
  },
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
      icon: "check",
    },
    {
      title: "Connect",
      description:
        "Network with fellow developers, open source maintainers, and tech enthusiasts from the Indian tech community.",
      icon: "users",
    },
    {
      title: "Celebrate",
      description:
        "Celebrate the achievements of the open source community and discover exciting new projects and opportunities.",
      icon: "star",
    },
  ],
};

export const SPEAKERS: Speaker[] = [
  {
    name: "Ashish Tiwari",
    position: "Principal Solutions Architect",
    company: "Elastic",
    presentationTitle: "Open Source Journey with Elastic",
    event: "2024 OSW × HacktoberFest",
    eventYear: 2024,
    image: AshishTiwari,
  },
  {
    name: "Sanjay Vaghela",
    position: "CTO",
    company: "IQM",
    presentationTitle: "Open Source Technologies for a SaaS at Scale",
    event: "2024 OSW × HacktoberFest",
    eventYear: 2024,
    image: SanjayVaghela,
  },
  {
    name: "Ruchit Patel",
    position: "Team lead",
    company: "ViitorCloud Technologies",
    presentationTitle: "Demystifying Open Source",
    event: "2024 OSW × HacktoberFest",
    eventYear: 2024,
    image: RuchitPatel,
  },
  {
    name: "Devarsh Shah",
    position: "Sr. Full Stack Developer",
    company: "IQM",
    presentationTitle: "Open Source Technologies for a SaaS at Scale",
    event: "2024 OSW × HacktoberFest",
    eventYear: 2024,
    image: DevarshShah,
  },
  {
    name: "Rishang Bhavsar",
    position: "Devops Engineer",
    company: "smartSense Consulting Solutions",
    presentationTitle:
      "How to start an Open Source Project and contribute on Github",
    event: "2024 OSW × HacktoberFest",
    eventYear: 2024,
    image: RishangBhavsar,
  },
  {
    name: "Krupa Galiya",
    position: "Sr. Data scientist",
    company: "PatternAI",
    presentationTitle:
      "Significance of Open Source Contribution and Community Engagement",
    event: "2023 OSW × HacktoberFest",
    eventYear: 2023,
    image: KrupaGaliya,
  },
  {
    name: "Viral Parmar",
    position: "Director",
    company: "ComExpo Cyber Security",
    presentationTitle:
      "How Can We Create Community Around Open Source Project And Get More Contribution",
    event: "2023 OSW × HacktoberFest",
    eventYear: 2023,
    image: ViralParmar,
  },
  {
    name: "Santosh Viswanatham",
    position: "Principal Engineer",
    company: "Arcesium",
    presentationTitle: "Coding for Change: Hacktoberfest with Interledger",
    event: "2023 OSW × HacktoberFest",
    eventYear: 2023,
    image: SantoshViswanatham,
  },
  // {
  //   name: "Dishant Makwana",
  //   position: "Sr. System Engineer",
  //   company: "EPAM Systems",
  //   presentationTitle:
  //     "Introduction to Kubernetes and How to Run Wordpress on Kubernetes",
  //   event: "2023 OpenSourceWeekend × HacktoberFest",
  //   eventYear: 2023,
  //   image: "",
  // },
  {
    name: "Ronak Ganatra",
    position: "Sr. Wordpress Engineer",
    company: "Multidots Solutions Pvt. Ltd.",
    presentationTitle: "Kickstart Your Open Source Journey with Wordpress",
    event: "2023 OSW × HacktoberFest",
    eventYear: 2023,
    image: RonakGanatra,
  },
  {
    name: "Nisharg Shah",
    position: "Sr. Software Engineer",
    company: "Coda",
    presentationTitle: "Kickstart Your Open Source Journey with NodeJS",
    event: "2023 OSW × HacktoberFest",
    eventYear: 2023,
    image: NishargShah,
  },
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
      "Early Bird Discount",
    ],
    availableTill: "20th Sep 2025, 06:00 PM (GMT+05:30)",
    popular: false,
    available: true,
    fillingFast: true,
    konfhubUrl:
      "https://konfhub.com/checkout/open-source-day-2025?ticketId=56932",
  },
  {
    name: "Open Source with AI Workshop + OSD Conference",
    price: "₹699",
    originalPrice: null,
    description:
      "Use coupon code OSDWSHOP25 and get Flat 30% OFF. Access to hands-on workshop and conference.",
    features: [
      "Full-access to conference",
      "Lunch",
      "Keynotes, Panels",
      "OSD Goodies",
      "1 Day Open Source + AI Workshop",
      "Beginner to Intermediate level",
      "Hands-on Workshop",
      "Make first Open Source Contribution",
      "Create an AI Agent for your project",
      "Develop Project and Pitch",
      "Week long Mentorship",
      "Solve Open Source Communities Problems",
      "Workshop Exclusive Goodies",
      "Digital Certificate",
    ],
    availableTill: "26th Sep 2025, 06:00 PM (GMT+05:30)",
    popular: true,
    available: true,
    konfhubUrl:
      "https://konfhub.com/checkout/open-source-day-2025?ticketId=56933",
    couponCode: "OSDWSHOP25",
    discountedPrice: "₹499",
  },
  {
    name: "Regular Ticket",
    price: "₹499",
    originalPrice: null,
    description:
      "Tickets include full-access to conference, lunch, keynotes, panels, OSD goodies.",
    features: [
      "Full-access to conference",
      "Lunch",
      "Keynotes, Panels",
      "OSD Goodies",
    ],
    startsOn: "20th Sep 2025, 03:45 AM (GMT+05:30)",
    popular: false,
    availableTill: false,
    konfhubUrl:
      "https://konfhub.com/checkout/open-source-day-2025?ticketId=56800",
    linkText: "Coming Soon",
  },
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
      "Digital Certificate",
    ],
    availableTill: "20th Sep 2025, 06:00 PM (GMT+05:30)",
    popular: true,
    available: true,
    konfhubUrl:
      "https://konfhub.com/checkout/open-source-day-2025?ticketId=56934",
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
      "Digital Certificate",
    ],
    availableTill: "5th Oct 2025, 06:00 PM (GMT+05:30)",
    popular: false,
    available: true,
    konfhubUrl:
      "https://konfhub.com/checkout/open-source-day-2025?ticketId=56805",
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
      "Digital Certificate",
    ],
    availableTill: "5th Oct 2025, 06:00 PM (GMT+05:30)",
    popular: false,
    available: true,
    konfhubUrl:
      "https://konfhub.com/checkout/open-source-day-2025?ticketId=56803",
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
      "Networking Dinner with Speakers, sponsors, organizers and some special industry invitees",
    ],
    availableTill: "5th Oct 2025, 06:00 PM (GMT+05:30)",
    popular: false,
    available: true,
    konfhubUrl:
      "https://konfhub.com/checkout/open-source-day-2025?ticketId=56804",
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
      "Appreciation Memento from OSD",
    ],
    availableTill: "5th Oct 2025, 06:00 PM (GMT+05:30)",
    popular: false,
    available: true,
    konfhubUrl:
      "https://konfhub.com/checkout/open-source-day-2025?ticketId=56806",
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
      "Appreciation Memento from OSD",
    ],
    availableTill: "5th Oct 2025, 06:00 PM (GMT+05:30)",
    popular: false,
    available: false,
    konfhubUrl:
      "https://konfhub.com/checkout/open-source-day-2025?ticketId=56807",
    linkText: "Sold Out",
  },
];

export const VENUE = {
  name: "Silver Oak University",
  address:
    "Silver Oak University, 370/371, near Bhavik Publication, Gota Gam, Gota, Ahmedabad, Gujarat 382481",
  description:
    "Silver Oak University (SOU) is premier private university carrying forward the legacy of Silver Oak Group of Institutes. As a reflection to its motto,“Gyanam Param Bhushanam” meaning Knowledge is the highest virtue, SOU delivers engaging learning experience through futuristic curriculum, advanced technological interface, eminent faculty, industry academia bonding, career planning and counseling and ample career opportunities. This state-of-the-art campus provides an inspiring and dynamic environment, perfect for fostering innovation and collaboration among tech enthusiasts.",
  capacity: "500+ attendees across multiple halls",
  googleMapsLink: "https://maps.app.goo.gl/A3NanjxtBwtiqJQK8",
  facilities: [
    "Main auditorium with 300 seats",
    "3 workshop rooms (50 seats each)",
    "Networking lounge and exhibition area",
    "High-speed WiFi throughout",
    "Professional A/V equipment",
    "Accessible facilities",
  ],
};

export const FOOTER = {
  description:
    "Open Source Day 2025 - A community-driven event celebrating open source innovation. Join developers, maintainers, and enthusiasts for learning and collaboration.",
  quickLinks: [
    { name: "Speakers", href: "/speakers" },
    { name: "Schedule", href: "/schedule" },
    { name: "Venue", href: "/venue" },
    { name: "Tickets", href: "/tickets" },
    { name: "Past Events", href: "/past-events" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Code of Conduct", href: "/code-of-conduct" },
  ],
  copyright: "© 2025 OpenSource Weekend",
  credits: "Made with ❤️ by the OSW community",
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
    "community",
  ],
  author: "OpenSource Weekend",
  twitterCard: "summary_large_image",
};

export const SPONSORS = [
  {
    name: "Acme Labs",
    tier: "Platinum",
    logo: "https://placehold.co/200x80?text=Acme+Labs&bg=0d9488&color=ffffff",
    website: "https://acme.example",
  },
  {
    name: "DevTools Inc",
    tier: "Gold",
    logo: "https://placehold.co/200x80?text=DevTools&bg=16a34a&color=ffffff",
    website: "https://devtools.example",
  },
  {
    name: "Cloudify",
    tier: "Silver",
    logo: "https://placehold.co/200x80?text=Cloudify&bg=0f172a&color=ffffff",
    website: "https://cloudify.example",
  },
  {
    name: "OpenSource Community",
    tier: "Community",
    logo: "https://placehold.co/200x80?text=Community&bg=64748b&color=ffffff",
    website: "https://community.example",
  },
];

export const VENUE_PARTNER = [
  {
    name: "Silver Oak University",
    logo: SOU.src,
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
  {
    id: 5,
    name: "GDG Surat",
    logo: "/partners/gdg_surat.png",
    website: "#",
  },
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
    name: "Hashicorp Gandhinagar",
    logo: "/partners/hashicorp_gandhinagar.jpg",
    website: "#",
  },
  {
    id: 9,
    name: "Grafana Ahmedabad",
    logo: "/partners/grafana_ahmedabad.png",
    website: "#",
  },
  {
    id: 10,
    name: "Ahmedabad Developer Club",
    logo: "/partners/ahmedabad_developer_club.jpg",
    website: "#",
  },
  {
    id: 11,
    name: "Devoops Gujarat",
    logo: "/partners/devoops_gujarat.jpg",
    website: "#",
  },
  {
    id: 12,
    name: "The Hackers Meetup",
    logo: "/partners/the_hackers_meetup.png",
    website: "#",
  },
  {
    id: 13,
    name: "Java User Group Gujarat",
    logo: "/partners/java_user_group_gujarat.svg",
    website: "#",
  },
  {
    id: 14,
    name: "GDG Cloud Ahmedabad",
    logo: "/partners/gdg_cloud_ahmedabad.png",
    website: "#",
  },
  {
    id: 15,
    name: "GDG Ahmedabad",
    logo: "/partners/gdg_ahmedabad.png",
    website: "#",
  },
  {
    id: 16,
    name: "FFDG Gandhinagar",
    logo: "/partners/ffdg_gandhinagar.png",
    website: "#",
  },
  {
    id: 17,
    name: "FFDG Ahmedabad",
    logo: "/partners/ffdg_ahmedabad.png",
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
    name: "GDG Nashik",
    logo: "/partners/gdg_nashik.png",
    website: "#",
  },
  {
    id: 20,
    name: "GDG Cloud Pune",
    logo: "/partners/gdg_cloud_pune.png",
    website: "#",
  },
  {
    id: 21,
    name: "CNCF Rajkot",
    logo: "/partners/cncf_rajkot.png",
    website: "#",
  },
  {
    id: 22,
    name: "GDG Pune",
    logo: "/partners/gdg_pune.png",
    website: "#",
  },
  {
    id: 23,
    name: "Flutter Surat",
    logo: "/partners/flutter_surat.png",
    website: "#",
  },
  {
    id: 24,
    name: "R User Group Ahmedabad",
    logo: "/partners/r_user_group_ahmedabad.jpeg",
    website: "#",
  },
  {
    id: 25,
    name: "IT Sales Community",
    logo: "/partners/it_sales_community.png",
    website: "#",
  },
  {
    id: 26,
    name: "HR Professional Community",
    logo: "/partners/hr_professional_community.png",
    website: "#",
  },
  {
    id: 27,
    name: "GDG Cloud Mumbai",
    logo: "/partners/gdg_cloud_mumbai.png",
    website: "#",
  },
  {
    id: 28,
    name: "Azure UG Vadodara",
    logo: "/partners/azure_vadodara.jpeg",
    website: "#",
  },
  {
    id: 29,
    name: "Laracon India",
    logo: "/partners/laracon_india.png",
    website: "#",
  },
  {
    id: 30,
    name: "AI Camp India",
    logo: "/partners/ai_camp_india.png",
    website: "#",
  },
  {
    id: 31,
    name: "TechExpo Gujarat",
    logo: "/partners/techexpo_gujarat.png",
    website: "#",
  },
  {
    id: 32,
    name: "FFDG Rajkot",
    logo: "/partners/ffdg_rajkot.png",
    website: "#",
  },
  {
    id: 33,
    name: "GDG Rajkot",
    logo: "/partners/gdg_rajkot.png",
    website: "#",
  },
  {
    id: 34,
    name: "AWS Ahmedabad",
    logo: "/partners/aws_ahmedabad.png",
    website: "#",
  },
  {
    id: 35,
    name: "Figma Surat",
    logo: "/partners/figma_surat.png",
    website: "#",
  },
  {
    id: 36,
    name: "Laravel Surat",
    logo: "/partners/laravel_surat.png",
    website: "#",
  },
  {
    id: 37,
    name: "MongoDB Ahmedabad",
    logo: "/partners/mongodb_ahmedabad.jpg",
    website: "#",
  },
  {
    id: 38,
    name: "Magento Ahmedabad",
    logo: "/partners/magento_ahmedabad.png",
    website: "#",
  },
  {
    id: 39,
    name: "CNCF Ahmedabad",
    logo: "/partners/cncf_ahmedabad.jpg",
    website: "#",
  },
  {
    id: 40,
    name: "FFDG Surat",
    logo: "/partners/ffdg_surat.png",
    website: "#",
  },
  {
    id: 41,
    name: "AWS Vadodara",
    logo: "/partners/aws_vadodara.jpeg",
    website: "#",
  },
  {
    id: 42,
    name: "Hashicorp Vadodara",
    logo: "/partners/hashicorp_vadodara.png",
    website: "#",
  },
  {
    id: 43,
    name: "HydPy",
    logo: "/partners/hydpy.png",
    website: "#",
  },
  {
    id: 44,
    name: "Wordpress Surat",
    logo: "/partners/wordpress_surat.png",
    website: "#",
  },
  {
    id: 45,
    name: "AWS Surat",
    logo: "/partners/aws_surat.jpg",
    website: "#",
  },
  {
    id: 46,
    name: "Figma Ahmedabad",
    logo: "/partners/figma_ahmedabad.png",
    website: "#",
  },
  {
    id: 47,
    name: "Wordpress Ahmedabad",
    logo: "/partners/wordpress_ahmedabad.jpg",
    website: "#",
  },
];

// Simple tier grouping for display on Home and Sponsors page.
export const SPONSOR_TIERS = {
  gold: [
    { name: "OSCF", logo: "/icons/OSCF.png", website: "#" },
    { name: "OSW", logo: OSWBlack.src, website: "#" },
    { name: "CCSF", logo: "/icons/CCSF.png", website: "#" },
  ],
  silver: [
    { name: "OSCF", logo: "/icons/OSCF.png", website: "#" },
    { name: "OSW", logo: OSWBlack.src, website: "#" },
    { name: "CCSF", logo: "/icons/CCSF.png", website: "#" },
  ],
  bronze: [
    { name: "OSCF", logo: "/icons/OSCF.png", website: "#" },
    { name: "OSW", logo: OSWBlack.src, website: "#" },
    { name: "CCSF", logo: "/icons/CCSF.png", website: "#" },
  ],
};

// Add a few extra online sponsor logos for demo
export const EXTRA_SPONSORS = [
  {
    name: "Stripe",
    logo: "https://placehold.co/200x80?text=Stripe&bg=0ea5a4&color=ffffff",
    website: "https://stripe.com",
  },
  {
    name: "Netlify",
    logo: "https://placehold.co/200x80?text=Netlify&bg=0f172a&color=ffffff",
    website: "https://netlify.com",
  },
  {
    name: "Vercel",
    logo: "https://placehold.co/200x80?text=Vercel&bg=111827&color=ffffff",
    website: "https://vercel.com",
  },
];

export const TEAM = {
  advisory: [
    {
      name: "Dr. Rinkesh Bansal",
      roles: ["Program Director", "Master Inventor at IBM"],
      linkedin: "https://www.linkedin.com/in/rinkesh-bansal-09798843/",
      image: RinkeshBansal,
    },
    {
      name: "Nirav Shah",
      roles: [
        "Director at Eternal Web Private Limited",
        "AWS Community Builder",
      ],
      linkedin: "https://www.linkedin.com/in/nirav-eternal/",
      image: NiravShah,
    },
    {
      name: "Santosh Yadav",
      roles: [
        "Staff Engineer at Celonis",
        "Google Developer Expert",
        "GitHub Star",
      ],
      linkedin: "https://www.linkedin.com/in/santoshyadavdev/",
      image: SantoshYadav,
    },
    {
      name: "Vishal Rajpurohit",
      roles: ["CTO at ViitorCloud", "Organizer of Laracon India"],
      linkedin: "https://www.linkedin.com/in/vishalrajpurohit/",
      image: VishalRajpurohit,
    },
  ],
  mentors: [
    {
      name: "Mehul Patel",
      roles: [
        "Sr. DevOps Engineer",
        "Mozilla Reps Council",
        "Docker Captain",
        "AWS Community Builder",
        "Google Developer Expert",
      ],
      linkedin: "https://www.linkedin.com/in/nomadicmehul/",
      image: MehulPatel,
    },
    {
      name: "Ashish Tiwari",
      roles: [
        "Principal Solutions Architect",
        "Search Specialist @ Elastic India",
      ],
      linkedin: "https://www.linkedin.com/in/ashishtiwari93/",
      image: AshishTiwari,
    },
    {
      name: "Prathamesh Chavan",
      roles: [
        "AI Engineering Manager at Red Hat",
        "Mozilla Reps Council",
        "3X Wrangler at MozFest",
      ],
      linkedin: "https://www.linkedin.com/in/prathameshpchavan/",
      image: PrathameshChavan,
    },
    {
      name: "Harsh Manvar",
      roles: ["CNCF Ambassador", "Docker Captain", "Google Developer Expert"],
      linkedin: "https://www.linkedin.com/in/harsh-manvar-64a30aa3/",
      image: HarshManvar,
    },

    {
      name: "Suraj Nath",
      roles: ["Sr. Software Engineer at Grafana Labs"],
      linkedin: "https://www.linkedin.com/in/electron0zero/",
      image: SurajNath,
    },
    {
      name: "Kalyan Prasad",
      roles: [
        "Lead Data Scientist",
        "Open Source & Community Advocate",
        "Chair PyConf Hyderabad",
        "Co-chair PyCon India",
        "Kaggle4X contributor",
      ],
      linkedin: "https://www.linkedin.com/in/itskpflow/",
      image: KalyanPrasad,
    },
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
        "Co-organizer at Open Source Weekend",
      ],
      linkedin: "https://www.linkedin.com/in/viral-parmar-8402a04a/",
      image: ViralParmar,
    },
    {
      name: "Neel Shah",
      roles: [
        "Developer Advocate at Middleware",
        "Co-organizer at Open Source Weekend",
      ],
      linkedin: "https://www.linkedin.com/in/neelcshah/",
      image: NeelShah,
    },
    {
      name: "Dhaval Desai",
      roles: ["Product Manager at Gluu"],
      linkedin: "https://www.linkedin.com/in/dhavaltdesai/",
      image: DhavalDesai,
    },
    {
      name: "Bhargav Pithva",
      roles: ["Technical Project Manager at Rysun Labs"],
      linkedin: "https://www.linkedin.com/in/bhargavpithva/",
      image: BhargavPithva,
    },
    {
      name: "Tanvir Dhanani",
      roles: ["Backend Developer at IBM"],
      linkedin: "https://www.linkedin.com/in/dhanani-tanvir-aa4076118/",
      image: DhananiTanvir,
    },
    {
      name: "Jignesh Gadhavi",
      roles: [
        "Sr. DevOps Engineer at Yellow Panther",
        "Co-organizer at GDG Cloud Gandhinagar",
      ],
      linkedin: "https://www.linkedin.com/in/jigneshkumar-gadhavi/",
      image: JigneshGadhavi,
    },
    {
      name: "Falgun Bhalsod",
      roles: ["DevOps Engineer at Yellow Panther"],
      linkedin: "https://www.linkedin.com/in/falgunbhalsod/",
      image: FalgunBhalsod,
    },
  ],
  volunteers: [
    {
      name: "Chavda Rohit",
      role: "Website Engineer",
      image: RohitChavda,
    },
  ],
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
      OSWMay_9,
    ],
  },
  {
    year: "2025",
    title: "OSW-Product Collective - April 2025",
    images: [OSWApril_1, OSWApril_2, OSWApril_3, OSWApril_4],
  },
  {
    year: "2024",
    title: "OSW-Day × Hacktoberfest 2024",
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
      OSW24_15,
    ],
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
      OSWJune23_10,
    ],
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
      OSW23_10,
    ],
  },
];
