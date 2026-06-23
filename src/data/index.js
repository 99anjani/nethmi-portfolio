export const ME = {
  name:     "Nethmi Anjani",
  roles:    ["Software Engineer", "AI / ML Engineer", "Business Analyst", "Data Analyst"],
  tagline:  "IT Graduate from University of Moratuwa · Passionate about building intelligent, data-driven solutions.",
  email:    "nethmigunarathna.info@gmail.com",
  phone:    "(+94) 76 #######",
  location: "Matara, Sri Lanka",
  github:   "https://github.com/99anjani",
  linkedin: "https://www.linkedin.com/in/nethmi-anjani-15a7ab230/",
  photoUrl: '/images/profile.png',
  about:
    "I am a motivated IT graduate from the University of Moratuwa with expertise in Software Engineering, AI/ML, and Data Analytics. With experience in both academic and industry projects, I have developed strong analytical, communication, and problem-solving skills. I enjoy transforming complex business requirements into practical technical solutions, building scalable applications, and leveraging data to drive informed decision-making. As a proactive and adaptable learner, I thrive in collaborative environments and am committed to continuous growth while contributing effectively to organizational success",
  openTo: ["Software Engineering", "AI / ML Roles", "Business Analysis", "Data Analysis", "Remote / Hybrid"],
  stats: [
    { val: "4+",  label: "Years of Study",     icon: "📖" },
    { val: "10+",  label: "Projects Completed", icon: "🛠️" },
    { val: "6mo", label: "Industry Experience",icon: "🏢" },
    { val: "3",   label: "Career Domains",     icon: "🎯" },
  ],
};

export const EDUCATION = [
  {
    degree:  "BSc (Hons) in Information Technology",
    school:  "Faculty of IT, University of Moratuwa",
    year:    "Jun 2021 – Dec 2025",
    details: "Major: Web Development | Minor: Machine Learning and Deep Learning",
    icon:    "🎓",
  },
  {
    degree:  "G.C.E. Advanced Level Examination",
    school:  "H/Ruhunu Vijayaba National School",
    year:    "May 2016 – Aug 2019",
    details: "Combined Mathematics A | Chemistry B | Physics B",
    icon:    "📚",
  },
  {
    degree: "G.C.E. Ordinary Level Examination",
    school: "H/Ruhunu Vijayaba National School",
    year: "Jan 2010 – Dec 2015",
    details: "Mathematics A | Science A | ICT A | Sinhala A | Buddhism A | History A | Sinhala Literature A | English B | Tamil B",
    icon: "📚",
  },
];

export const EXPERIENCE = [
  {
    role:     "Trainee Software Engineer",
    company:  "EUTECH Cybernetics Lanka (Pvt) Ltd",
    period:   "Apr 2024 – Sep 2024",
    location: "Colombo, Sri Lanka",
    type:     "Industry",
    bullets: [
      "Developed and integrated scalable front-end components for the IvivaDX platform using React and Python, ensuring responsiveness and seamless API connectivity",
      "Followed coding standards, best practices, and SDLC principles, producing well-documented, high-quality code with thorough code reviews and test cases, achieving 100 % on - time task completion.",
      "Supported digital transformation initiatives by automating workflows, performing backend development, database optimization, server configuration, and implementing key platform features.",
      "Assisted QA with testing, performed debugging and troubleshooting, and actively contributed to knowledge sharing, improving overall project efficiency and platform reliability."
    ],
    skills: ["React", "Python", "Backend Dev", "Frontend Dev", "Database Optimisation", "SDLC", "Agile", "Testing"],
  },
];

export const PROJECTS = [
  {
    name:      "Paddy Guardian — AI Research Project",
    slug:      "paddy-gardian",
    role:      "Team Lead | Responsible Module",
    desc:      "Led a 3-member team to build an AI-driven web app for paddy disease identification. Developed a domain-specific Sinhala-English translator by fine-tuning mBART with LoRA, achieving a BLEU score of 26.55%.",
    tech:      ["mBART", "LoRA", "NLP", "Python", "Hugging Face", "PyTorch", "BLEU Evaluation"],
    tags:      ["AI / ML", "Research", "NLP"],
    highlight: true,
    github:    "https://github.com/99anjani/sin-eng-domain-specific-translator",
    live:      null,
    screenshots: [{ src: "/images/paddy-gardian/1.png", caption: "Translator Page" },
      { src: "/images/paddy-gardian/2.png", caption: "Research Details" },

    ]


  },
  {
    name:      "Customer Shopping Behaviour Analytics Dashboard",
    slug: "customer-behavior",
    role:      "Data Analyst",
    desc:      "Built an interactive analytics dashboard in Power BI to visualise customer shopping patterns, segment behaviour, and surface actionable business insights from raw transactional data.",
    tech:      ["Power BI", "Data Analysis", "DAX", "Data Visualisation"],
    tags:      ["Data Analysis", "Business Intelligence"],
    highlight: true,
    github:    "https://github.com/99anjani/Customer-Shopping-Behavior",
    live: null,
  },
  {
    name:      "Student Depression Prediction Model",
    slug: "student-depression-prediction",
    role:      "ML Engineer",
    desc:      "Developed a machine learning classification model in Python to predict student depression risk based on academic and behavioural features, involving feature engineering, model selection, and evaluation.",
    tech:      ["Python", "Scikit-learn", "Pandas", "ML Classification"],
    tags:      ["AI / ML", "Data Science"],
    highlight: false,
    github:    "https://github.com/99anjani/Student-Depression-Prediction-Model",
    live:      null,
  },
  {
    name:      "Admin Dashboard",
    slug: "admin-dashboard",
    role:      "Full-Stack Developer",
    desc:      "Comprehensive admin dashboard with modules for team management, contacts, invoices, forms, calendar, and analytics. Integrated real-time data and interactive visualisations replacing static mock data.",
    tech:      ["React.js", "Material-UI", "MongoDB", "Node.js", "Express.js"],
    tags:      ["Full-Stack", "Web Dev"],
    highlight: false,
    github:    "https://github.com/99anjani/AdminDashBoard",
    live:      "#",
  },
  {
    name:      "Real-Time Chat Application",
    slug: "chat-app",
    role:      "Full-Stack Developer",
    desc:      "Real-time chat app supporting one-to-one communication for 20+ active users, with authentication, live notifications, search, and profile management.",
    tech:      ["React", "Firebase", "Tailwind CSS"],
    tags:      ["Full-Stack", "Web Dev"],
    highlight: false,
    github:    "https://github.com/99anjani/chat-app",
    live:      "#",
    screenshots: [{ src: "/images/chat-app/1.png", caption: "Sign In" },
    { src: "/images/chat-app/2.png", caption: "Sign Up" },
    { src: "/images/chat-app/3.png", caption: "Chat dashboard" },
    { src: "/images/chat-app/5.png", caption: "Contacts" },
    { src: "/images/chat-app/6.png", caption: "Profile" },
    { src: "/images/chat-app/7.png", caption: "Notifications" },
    { src: "/images/chat-app/8.png", caption: "Update Profile" },
    { src: "/images/chat-app/9.png", caption: "Sign Out" },
    ]
  },
  {
    name:      "Issue Tracking System",
    slug: "issue-tracking-system",
    role:      "Full-Stack Developer",
    desc:      "Full-stack issue tracking system with secure authentication, issue lifecycle management, optimised search and filtering, pagination for large datasets, and structured data export.",
    tech:      ["React", "Node.js", "Express.js", "MongoDB"],
    tags:      ["Full-Stack", "Web Dev"],
    highlight: false,
    github:    "https://github.com/99anjani/Issue-Tracker",
    live:      null,
    screenshots: [
      { src: "/images/issue-tracker-system/1.jpeg", caption: "Sign In" },
      { src: "/images/issue-tracker-system/2.jpeg", caption: "Issue Dashboard" },
      { src: "/images/issue-tracker-system/3.jpeg", caption: "Create Issue" },
      { src: "/images/issue-tracker-system/4.png", caption: "View Issue" },
      { src: "/images/issue-tracker-system/6.jpeg", caption: "Filter Issues" },
      { src: "/images/issue-tracker-system/5.jpeg", caption: "Delete Issue" },
    ]
  },
  {
    name:      "Banking App – FunTrust",
    slug: "banking-app-funtrust",
    role:      "Frontend Developer",
    desc:      "Frontend banking application supporting digital operations including form management, bank connections, transaction history, and fund transfers with a responsive, secure UI.",
    tech:      ["Next.js", "Tailwind CSS"],
    tags:      ["Web Dev", "Frontend"],
    highlight: false,
    github:    "https://github.com/99anjani/FinTrust",
    live:      "#",
  },
  {
    name:      "Configuration Console",
    slug: "configuration-console",
    role:      "Frontend Developer · Team of 5",
    desc:      "Web platform to streamline communication between partner and client servers, reducing developer workload by 50%. Built user registration, profile management, and validated data flows.",
    tech:      ["React.js", ".NET", "MSSQL"],
    tags:      ["Web Dev", "Enterprise"],
    highlight: false,
    github:    null,
    live:      null,
  },
];

export const PROJECT_TAGS = ["All", "AI / ML", "Data Analysis", "Full-Stack", "Web Dev", "Research"];

export const TAG_STYLE = {
  "AI / ML":               "bg-violet-500/15 text-violet-300 border-violet-500/30",
  "NLP":                   "bg-violet-500/15 text-violet-300 border-violet-500/30",
  "Research":              "bg-violet-500/15 text-violet-300 border-violet-500/30",
  "Data Analysis":         "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  "Business Intelligence": "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  "Data Science":          "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  "Full-Stack":            "bg-rose-500/15 text-rose-300 border-rose-500/30",
  "Web Dev":               "bg-rose-500/15 text-rose-300 border-rose-500/30",
  "Frontend":              "bg-rose-500/15 text-rose-300 border-rose-500/30",
  "Enterprise":            "bg-slate-500/15 text-slate-400 border-slate-500/30",
};

export const SKILLS = {
  "Programming Languages": [
    { name: "Python",       level: 90 },
    { name: "JavaScript",   level: 88 },
    { name: "TypeScript",   level: 82 },
    { name: "Java",         level: 75 },
    { name: "HTML5 / CSS3", level: 90 },
    { name: "SQL",          level: 80 },
  ],
  "AI / ML & Data": [
    { name: "Machine Learning",     level: 82 },
    { name: "Deep Learning / NNs",  level: 78 },
    { name: "NLP / LLMs",           level: 80 },
    { name: "PyTorch",              level: 75 },
    { name: "Hugging Face",         level: 78 },
    { name: "Power BI",             level: 80 },
    { name: "Pandas / NumPy",       level: 82 },
    { name: "Data Visualisation",   level: 80 },
  ],
  "Web & Full-Stack": [
    { name: "React",        level: 88 },
    { name: "Next.js",      level: 80 },
    { name: "Node.js",      level: 82 },
    { name: "Express.js",   level: 80 },
    { name: "Spring Boot",  level: 70 },
    { name: "Tailwind CSS", level: 88 },
    { name: "REST APIs",    level: 85 },
  ],
  "Databases": [
    { name: "PostgreSQL", level: 80 },
    { name: "MongoDB",    level: 82 },
    { name: "MySQL",      level: 80 },
    { name: "MSSQL",      level: 72 },
    { name: "Firebase",   level: 78 },
  ],
  "Tools & Practices": [
    { name: "Git / GitHub",          level: 88 },
    { name: "Docker",                level: 72 },
    { name: "CI/CD Pipelines",       level: 70 },
    { name: "Jira / Agile",          level: 80 },
    { name: "Playwright",            level: 72 },
    { name: "Requirement Analysis",  level: 78 },
    { name: "Documentation",         level: 85 },
  ],
};

export const SOFT_SKILLS = [
  "Analytical Thinking", "Problem Solving", "Team Collaboration",
  "Requirement Refinement", "Adaptability", "Documentation",
  "Task Organisation", "Willingness to Learn",
];

export const VOLUNTEERING = [
  {
    org:  "IEEE WIE",
    role: "Volunteer",
    desc: "Assisted in organising Annual General Meeting and Award Ceremonies.",
    icon: "⚡",
  },
  {
    org:  "Denuma Yathra",
    role: "Volunteer",
    desc: "O/L Seminar Program — Sahodarathwaye Manudama.",
    icon: "🤝",
  },
];
