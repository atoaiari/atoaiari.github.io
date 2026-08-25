export const heroContent = {
    badge: "Soluzioni AI su misura per PMI",
    words: ["Ricerca", "Ingegneria"],
    headingSuffix: "umana per un'intelligenza artificiale più rigorosa.",
    description:
        "Progettiamo, testiamo e integriamo soluzioni AI su misura per le PMI. Contattaci e scopri come possiamo aiutarti.",
    primaryCta: { label: "Prenota una chiamata", href: "#contact" },
    secondaryCta: { label: "Scopri i Servizi", href: "#services" },
};

export const aboutContent = {
    eyebrow: "[01] Chi Siamo",
    heading: "Oltre l'hype, con rigore scientifico.",
};

export const teamMembers = [
    {
        name: "Nome Cognome",
        traits: ["UNIVR", "AI Engineer"],
        image: "images/profilesq.jpg",
    },
    {
        name: "Nome Cognome",
        traits: ["UNIVR", "AI Engineer"],
        image: "images/profilesq.jpg",
    },
    {
        name: "Nome Cognome",
        traits: ["UNIVR", "AI Engineer"],
        image: "images/profilesq.jpg",
    },
];

export const valuesIntro = {
    eyebrow: "[03] Come Lavoriamo",
    heading: "Come Lavoriamo",
    description:
        "Caso per caso, applichiamo le nostre conoscenze e le nuove tecnologie per ottenere risultati concreti e misurabili.",
};

export const values = [
    {
        title: "Formazione e roadmap strategica",
        desc: "L'AI spaventa quando non la si conosce. Offriamo workshop formativi per demistificare la tecnologia e mappare i processi che possono beneficiare subito dell'Intelligenza Artificiale.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
        preview: "images/image.jpg",
    },
    {
        title: "Il dato prima di tutto",
        desc: "Verifichiamo la qualità e quantità di dati a vostra disposizione e capiamo se e come vale la pena automatizzare un processo.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>`,
        preview: "images/image.jpg",
    },
    {
        title: "Automazione selettiva",
        desc: "Preferiamo automatizzare solo i processi ripetitivi e che non necessitano di creatività umana. L'intelligenza artificiale funziona meglio quando diventa collaborazione.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>`,
        preview: "images/image.jpg",
    },
    {
        title: "Attenzione all'interazione",
        desc: "Una tecnologia innovativa non crea valore se l'interazione con essa è complicata e non rispetta le reali necessità di chi la utilizza.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
        preview: "images/image.jpg",
    },
];

export const techLogos = [
    { name: "Mistral", slug: "mistralai" },
    { name: "Hugging Face", slug: "huggingface" },
    { name: "Google Cloud", slug: "googlecloud" },
    { name: "Claude", slug: "claude" },
    { name: "PyTorch", slug: "pytorch" },
    { name: "LangChain", slug: "langchain" },
    { name: "Ollama", slug: "ollama" },
    { name: "Python", slug: "python" },
    { name: "Pandas", slug: "pandas" },
    { name: "Scikit-learn", slug: "scikitlearn" },
    { name: "Google Gemini", slug: "googlegemini" },
    { name: "GitHub", slug: "github" },
];

export const pricingIntro = {
    eyebrow: "[05] Servizi",
    heading: "I Nostri Servizi",
};

export const pricingServices = [
    {
        eyebrow: "Workshop & Formazione",
        title: "Corsi e Workshop LLM",
        description:
            "Corsi introduttivi sull'IA e gli LLM, seguiti da workshop pratici per l'uso dei modelli di linguaggio in azienda.",
        price: "Da €3.000",
        features: [
            "Corso introduttivo all'IA e agli LLM",
            "Workshop pratico con casi aziendali reali",
            "Roadmap strategica personalizzata",
            "Materiale didattico incluso",
        ],
        cta: { label: "Vedi il programma", href: null },
        presentationUrl:
            "https://docs.google.com/presentation/d/1ZnB2_vboORP8xVWhD7FSOc6r-8stnJRr0A8SmYckspQ/embed?start=false&loop=false&delayms=3000",
        highlighted: false,
    },
    {
        eyebrow: "Integrazione & UX",
        title: "Wrapper & Integrazione LLM",
        description:
            "Sviluppo di interfacce personalizzate per i task identificati durante i workshop. Focus su UX e UI per rendere semplice l'interazione dei dipendenti con gli LLM.",
        price: "Da €7.000",
        features: [
            "Analisi dei task e dei flussi di lavoro",
            "Sviluppo di interfacce intuitive",
            "Integrazione con i sistemi esistenti",
            "Formazione all'uso della soluzione",
        ],
        cta: { label: "Contattaci", href: "#contact" },
        highlighted: true,
    },
    {
        eyebrow: "Sviluppo Custom",
        title: "Soluzione Custom",
        description:
            "Sviluppo completamente personalizzato per chi vuole investire concretamente sull'IA. Include Small Language Models, deploy locale e privato, interazione personalizzata.",
        price: "Da €30.000",
        features: [
            "Small Language Models proprietari",
            "Deploy locale e privato",
            "Interazione completamente personalizzata",
            "Supporto e manutenzione dedicati",
        ],
        cta: { label: "Parliamo del progetto", href: "#contact" },
        highlighted: false,
    },
];

export const caseStudiesIntro = {
    eyebrow: "[06] Casi di Studio",
    heading: "Casi di Studio",
};

export const caseStudies = [
    {
        tag: "ANALISI DOCUMENTALE",
        title:
            "Estrazione semantica di valori chiave da formati documentali complessi",
        results: [
            "95% di accuratezza sui campi principali",
            "Interfaccia personalizzata per il flusso del cliente",
            "Integrazione con banca dati Excel",
        ],
    },
    {
        tag: "LINEA DI PRODUZIONE",
        title:
            "Manutenzione predittiva e supporto all'operatore in fase di collaudo",
        results: [
            "Analisi dei dati e consulenza sulla loro raccolta",
            "Modello di ML personalizzato e proprietario con accuratezza del 90%",
        ],
    },
];

export const blogIntro = {
    eyebrow: "[07] Blog",
    heading: "Articoli e Novità",
    subheading: "Vuoi scoprire di più?",
};

export const demoContent = {
    eyebrow: "[08] Contattaci",
    heading: "Prenota una chiamata.",
    description:
        "Compila il form. Ti risponderemo entro 24 ore lavorative con un link per prenotare una demo di 30 minuti. Nessun venditore. Parlerai direttamente con il team tecnico.",
    privacyNote:
        "I tuoi dati non vengono mai condivisi. Usiamo questo form solo per qualificare la richiesta e prepararci a darti risposte concrete.",
};

export const demoInterestOptions = [
    "Workshop & Formazione",
    "Wrapper & Integrazione LLM",
    "Sviluppo Custom",
    "Non so ancora",
];

export const defaultPresentationUrl =
    "https://docs.google.com/presentation/d/1ZnB2_vboORP8xVWhD7FSOc6r-8stnJRr0A8SmYckspQ/embed?start=false&loop=false&delayms=3000";

export const partnerLogos = [
    "ACME Corp",
    "Globex",
    "Soylent",
    "Initech",
    "Umbrella",
    "Massive Dynamic",
    "Stark Ind.",
    "Wayne Ent.",
];

// Legacy exports kept for compatibility
export const servicesIntro = valuesIntro;
export const services = values;
export const trainingIntro = {
    eyebrow: "[04] Formazione",
    heading: "Formazione",
    description:
        "Trasferiamo il nostro know-how al tuo team per renderti indipendente nell'era dell'AI.",
};
export const trainingCourses = [] as {
    title: string;
    desc: string;
    duration: string;
    output: string;
}[];
