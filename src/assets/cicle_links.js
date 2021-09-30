
const contactLinks = [
    {
        text: "Open Hours " + new Date(),
        current: false,
    },
    {
        number: "+1 (505) 1234 5678",
        current: false,
    },
    {
        mail: "hello@example.com",
        current: false,
    },
]
const headerLinks = [
    {
        text: "nexgen",
        url: "#",
        current: false,
    },
    {
        text: "home",
        url: "#",
        current: false,
    },
    {
        text: "about",
        url: "#",
        current: true,
    },
    {
        text: "services",
        url: "#",
        current: false,
    },
    {
        text: "process",
        url: "#",
        current: false,
    },
    {
        text: "team",
        url: "#",
        current: false,
    },
    {
        text: "blog",
        url: "#",
        current: false,
    },
    {
        text: "get in touch",
        url: "#",
        current: false,
    },
]

const footerContact = [
    {
        text: "nexgen",
        description: "A Functional Html Template for Corporate & Business.",
        number: "+1 (505) 1234 5678",
        mail: "hello@example.com",
        position: "Main Avenue,987"
    },
]

const footerAbout = {
    about: "About",
    company: "The Company",
    institutional: "Institutional",
    social: "Social & Events",
    innovation: "Innovation",
    environment: "Environment",
    tech: "Technology"

},
 footerServices = {
    about: "Services",
    company: "Audit & Assurance",
    institutional: "Financial Advisory",
    social: "Analitics M&A",
    innovation: "Middle Marketing",
    environment: "Legal Consulting",
    tech: "Regulatory Risk"

},
footerSupport = {
    about: "Support",
    company: "Responsabilty",
    institutional: "Terms Of Use",
    social: "About Cookies ",
    innovation: "Privacy Policy ",
    environment: "Accessibility ",
    tech: "Information "

}

export { headerLinks, footerContact, contactLinks, footerAbout, footerServices, footerSupport}