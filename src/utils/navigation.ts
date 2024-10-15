// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "#" },
  // { name: "Products", url: "/products" },
  // { name: "Services", url: "/services" },
  // { name: "Blog", url: "/blog" },
  // { name: "Contact", url: "/contact" },
  { name: "Smart Cities", url: "#smartCities" },
  { name: "Agro", url: "#agro" },
  { name: "AffectWave", url: "#affect" },
  { name: "SkillMatch", url: "#SkillMatch" },
  { name: "Identificación", url: "#Identificación" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      { name: "Smart Cities", url: "#smartCities" },
      // { name: "Tools & Equipment", url: "/products" },
      // { name: "Construction Services", url: "/services" },
      { name: "Agro", url: "#agro" },
      { name: "AffectWave", url: "#affect" },
      { name: "SkillMatch", url: "#SkillMatch" },
      { name: "Identificación", url: "#Identificación" },
    ],
  },
  // {
  //   section: "Company",
  //   links: [
  //     { name: "About us", url: "#" },
  //     // { name: "Blog", url: "/blog" },
  //     { name: "Blog", url: "#" },
  //     { name: "Careers", url: "#" },
  //     { name: "Customers", url: "#" },
  //   ],
  // },
];
// An object of links for social icons
const socialLinks = {
  facebook: "#",
  youtube: "https://www.youtube.com/channel/UCb9c_GmL0xyrXC3P5GzSJwA",
  x: "https://twitter.com/globalhitss",
  github: "#",
  google: "#",
  slack: "#",
  linkedin: "https://www.linkedin.com/company/global-hitss-colombia"
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};