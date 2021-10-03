
const contactLinks = [
    {
        text: "Open Hours Mon - Sat - 9:00 - 18:00",
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
const headerLinks = [{
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
        description: "A Functional Html Template for Corporate & Business.",
        number: "+1 (505) 1234 5678",
        mail: "hello@example.com",
        position: "Main Avenue,987",
        button: "get in touch"
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

    },

    content = [
        {
            description: 'Increasing creativity is possible for everyone',
            img: require(`@/assets/img/news-1.jpg`),
        },
        {
            description: 'Because market research is part of the business plan',
            img: require(`@/assets/img/news-2.jpg`),
        },
        {
            description: 'Working from home is now a trend',
            img: require(`@/assets/img/news-3.jpg`),
        },

    ],

    teamOfExpert = [
        {
            name: "David Cooper",
            work: "CTO & CO-FOUNDER",
            img: require(`@/assets/img/team-1.jpg`),
        },
        {
            name: "Olicer Jones",
            work: "CHIEF PROCUREMENT",
            img: require(`@/assets/img/team-2.jpg`),

        },
        {
            name: "Emma Lopez",
            work: "CHIEF MARKETING",
            img: require(`@/assets/img/team-3.jpg`),
        },
        {
            name: "T.Johnson",
            work: "CEO & PRESIDENT",
            img: require(`@/assets/img/team-4.jpg`),
        }
    ]



export { headerLinks, footerContact, contactLinks, footerAbout, footerServices, footerSupport, content, teamOfExpert }