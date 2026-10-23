export const personalInfo = {
  name: "Mohamed Ragab",
  fullName: "Mohamed Ragab Hamdy Ali",
  title: "Junior Data Analyst & BI Specialist",
  tagline: "Bridging Raw Data, Analytics & Business Strategy",
  shortBio: "Computer Science student at Fayoum University transforming complex, fragmented datasets into clear executive dashboards, actionable business strategies, and measurable ROI.",
  location: "Fayoum, Egypt",
  email: "momoragab09@gmail.com",
  phone: "+20 109 038 0693",
  avatar: "./assets/mohamed_ragab_new.jpg",
  resumeUrl: "./assets/Mohamed_Ragab_CV.pdf",
  socials: {
    linkedin: "https://www.linkedin.com/in/mohamed-ragab-6b4b84395",
    github: "https://github.com/Mohamed32213",
    facebook: "https://www.facebook.com/share/1H9nC5athr/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/mohamedragabhamdy",
    whatsapp: "https://wa.me/201090380693",
  },
  status: {
    availableForHire: true,
    badgeText: "Available for Roles & Freelance",
    currentFocus: "DEPI Fellow & CS Year 3 at Fayoum Univ"
  }
};

export const highImpactStats = [
  { label: "Revenue Analyzed", value: "$900M+", change: "+11.2% YoY", sub: "Enterprise scale data" },
  { label: "Call Records Handled", value: "3.0M+", change: "92% Service Level", sub: "High-volume operations" },
  { label: "Data Records Modeled", value: "22,000+", change: "4+ Multi-table Schemas", sub: "Cleaned & transformed" },
  { label: "ICPC Algorithmic Problems", value: "100+", change: "Analytical mindset", sub: "Competitive problem solving" },
  { label: "Production BI Dashboards", value: "5", change: "End-to-end delivery", sub: "Executive decision tools" },
];

export const skillsCategories = [
  {
    category: "Business Intelligence & Visualization",
    description: "Designing end-to-end interactive reports, star schemas, and executive dashboards.",
    skills: [
      { name: "Power BI", level: 5, max: 5, tags: ["DAX Measures", "Data Modeling", "Star Schema", "KPI Cards", "Row-Level Security"] },
      { name: "Microsoft Excel", level: 5, max: 5, tags: ["Pivot Tables", "Power Pivot", "XLOOKUP", "Dynamic Formulas", "Executive Models"] },
      { name: "Tableau", level: 5, max: 5, tags: ["Calculated Fields", "Dual-Axis Charts", "Storyboards", "Parameters"] },
      { name: "Power Query", level: 5, max: 5, tags: ["M Code", "ETL Pipelines", "Data Reshaping", "Automated Cleansing"] },
    ]
  },
  {
    category: "Databases & Querying",
    description: "Architecting complex relational queries, aggregate metrics, and data extraction pipelines.",
    skills: [
      { name: "SQL", level: 4, max: 5, tags: ["Multi-Table JOINs", "Window Functions", "CTEs", "Subqueries", "GROUP BY Aggregations"] },
      { name: "Data Modeling", level: 5, max: 5, tags: ["Relational Integrity", "Fact & Dimension Tables", "One-to-Many Relationships"] },
    ]
  },
  {
    category: "Programming & Data Science",
    description: "Exploratory data analysis, automated data manipulation, and statistical validation.",
    skills: [
      { name: "Python", level: 3, max: 5, tags: ["Pandas", "NumPy", "Exploratory Data Analysis (EDA)", "Data Cleansing"] },
      { name: "Statistics", level: 5, max: 5, tags: ["Descriptive Stats", "Variance & Correlation", "Distribution Analysis", "Hypothesis Testing"] },
      { name: "Git & GitHub", level: 4, max: 5, tags: ["Version Control", "Repository Documentation", "Collaboration"] },
    ]
  }
];

export const projectsData = [
  {
    id: "adidas-sales-analysis",
    title: "Adidas U.S. Sales Performance & Profit Optimization",
    category: "Retail & Commercial Analytics",
    tools: ["Power BI", "DAX", "Power Query", "Excel"],
    dataset: {
      source: "Kaggle",
      size: "9,070 records × 13 fields",
      type: "Enterprise Sales Transaction Data"
    },
    image: "./dashboards/adidas_dashboard.png",
    githubUrl: "https://github.com/Mohamed32213/Adidas-Dashboard-powerBI",
    kpis: [
      { label: "Total Sales", value: "$900M", highlight: true },
      { label: "Operating Profit", value: "$332M", highlight: true },
      { label: "Units Sold", value: "2M", highlight: false },
      { label: "Operating Margin", value: "36.9%", highlight: false },
    ],
    problemStatement: "Why do product sales experience seasonal contractions during specific months of the year, and how do sales channels and retail partners influence overall margin?",
    methodology: [
      "Extracted, cleansed, and transformed 9,070 records using Power Query to standardize transaction dates, retailer tiers, and product categories.",
      "Engineered custom DAX measures for Year-over-Year (YoY) variance, rolling averages, and regional contribution margins.",
      "Built a 3-page executive Power BI reporting system consisting of a strategic Cover Page, an interactive KPI Cockpit, and a Deep-Dive Insights Page.",
      "Mapped geographic sales across U.S. territories to identify performance clusters."
    ],
    keyInsights: [
      "The West region is the primary revenue powerhouse, driving $270M (30% of total company sales).",
      "In-store sales method yields the highest gross revenue ($356.6M / 39.63%), followed by Online ($295.6M / 32.8%) and Outlet ($247.7M / 27.52%).",
      "West Gear ($243M) and Foot Locker ($220M) generate the majority of third-party retail volume.",
      "Seasonal sales peak during July ($95M) and August ($92M), with predictable troughs in March ($57M) and October ($64M), before holiday recovery in December ($86M)."
    ],
    businessRecommendations: "Reallocate marketing budget toward digital push campaigns during mid-spring (March–April) to smooth out the early-year revenue dip, while expanding physical shelf space in West region Foot Locker partners."
  },
  {
    id: "salla-call-center",
    title: "Salla Omnichannel Call Center & Workforce Optimization",
    category: "Customer Operations & Workforce Analytics",
    tools: ["Power BI", "Power Query", "DAX", "Data Modeling"],
    dataset: {
      source: "Kaggle",
      size: "450 records × 12 fields (Verified)",
      type: "Call Center Operations & Agent Telemetry"
    },
    image: "./dashboards/salla_dashboard.png",
    githubUrl: "https://github.com/Mohamed32213/Sallah-Call-center-Dashboard",
    kpis: [
      { label: "Total Calls Offered", value: "3.0M", highlight: true },
      { label: "Service Level", value: "92%", highlight: true },
      { label: "Total Calls Handled", value: "3.0M", highlight: false },
      { label: "Abandon Rate", value: "1.4%", highlight: false },
    ],
    problemStatement: "What operational bottlenecks cause response latency and abandonment spikes during peak commercial periods, and how can workforce allocation be optimized?",
    methodology: [
      "Overcame high-complexity data modeling challenges by designing a star schema integrating 4+ relational tables in Power BI.",
      "Structured a dedicated Date & Time dimension table to unlock granular hourly and daily time-intelligence analysis.",
      "Developed DAX logic calculating Service Level adherence against a target 90% threshold and instantaneous abandonment ratios.",
      "Evaluated historical call volume vs forecasted demand to stress-test staffing models."
    ],
    keyInsights: [
      "Identified an extreme call volume surge during the first 5 days of each calendar month (peaking at ~450K calls/day).",
      "Maintained an exceptional 92% Service Level with an ultra-low 1.4% Abandon Rate, well above global industry benchmarks (80/20).",
      "Project B accounted for the largest operational share (1.6M calls), followed closely by Project A (1.3M calls).",
      "Forecasted volume closely tracked actual inbound calls, confirming the predictive validity of current models."
    ],
    businessRecommendations: "Implement a dynamic scheduling shift model with front-loaded staffing on Days 1–5 of each month to prevent queue congestion and mitigate agent burnout."
  },
  {
    id: "misuo-metal-furniture",
    title: "MISUO Metal Furniture E-Commerce & Logistics Analytics",
    category: "Supply Chain & E-Commerce",
    tools: ["Microsoft Excel", "Power Query", "PivotTables", "Data Modeling"],
    dataset: {
      source: "Real Company Data (MISUO)",
      size: "1,014 rows × 13 columns",
      type: "Production Commercial Sales & Order Log"
    },
    image: "./dashboards/misuo_dashboard.png",
    githubUrl: "https://github.com/Mohamed32213",
    kpis: [
      { label: "Total Sales", value: "EGP 873,275", highlight: true },
      { label: "Total Orders", value: "80 Orders", highlight: false },
      { label: "Average Selling Price", value: "EGP 10,916", highlight: true },
      { label: "Homezmart Share", value: "83.9%", highlight: false },
    ],
    problemStatement: "Which e-commerce channels and product variations generate the highest margins, and what operational delivery bottlenecks impact fulfillment?",
    methodology: [
      "Consolidated raw operational Excel spreadsheets using Power Query into a normalized data model.",
      "Segmented B2B (Corporate) vs B2C (Individual) buyer behaviors and geographical demand across Egyptian governorates.",
      "Calculated On-Time Delivery vs Late Delivery ratios to evaluate logistics partners.",
      "Created an interactive Excel dashboard with synchronized slicers for month, city, and product category."
    ],
    keyInsights: [
      "Homezmart is the overwhelmingly dominant sales engine, generating EGP 732,762 (83.9% of all commercial revenue).",
      "Black is the top-selling product color (7 units), followed by Grey (5 units) and White (4 units).",
      "Greater Cairo (Cairo EGP 284.5K + Giza EGP 155K) accounts for more than 50% of total geographic demand.",
      "Critical bottleneck uncovered: On-Time Delivery was only 32.26%, with 67.74% of shipments experiencing delays."
    ],
    businessRecommendations: "Renegotiate SLAs with third-party last-mile couriers in Greater Cairo to bring on-time fulfillment above 80%, while expanding the inventory of black matte finish furniture on Homezmart."
  },
  {
    id: "blaban-sales-analysis",
    title: "B.LABAN Branch Performance & Demand Volatility Analysis",
    category: "FMCG & Food Retail Analytics",
    tools: ["Power BI", "DAX", "Power Query", "Data Cleaning"],
    dataset: {
      source: "Kaggle",
      size: "7,000 rows × 20 columns",
      type: "Multi-branch POS Transaction Data"
    },
    image: "./dashboards/blaban_dashboard.png",
    githubUrl: "https://github.com/Mohamed32213",
    kpis: [
      { label: "Total Sales", value: "EGP 7.26M", highlight: true },
      { label: "Net Sales", value: "EGP 6.61M", highlight: true },
      { label: "Units Sold", value: "42,000", highlight: false },
      { label: "Total Orders", value: "7,000", highlight: false },
    ],
    problemStatement: "What drives intra-month sales volatility across branch networks, and which dessert innovations yield the highest return?",
    methodology: [
      "Cleaned and validated 7,000 transaction records containing 20 granular attributes using Power Query.",
      "Classified products into distinct portfolio tiers (Traditional, Modern, Signature, Ice Cream).",
      "Tracked daily sales velocities from Day 1 to Day 30 to identify consumer purchasing behavior curves.",
      "Built an intuitive Power BI dashboard highlighting category shares and top product performers."
    ],
    keyInsights: [
      "Sales exhibit a strong monthly lifecycle: massive spikes during Days 1–10 (peaking at EGP 0.43M/day on Day 3), followed by a taper towards Days 20–30 (EGP 0.15M/day) aligned with national payroll cycles.",
      "Super B.Laban (EGP 1.14M) and El Qashtouta variants (EGP 1.11M + EGP 0.98M) are the brand's primary revenue drivers.",
      "Traditional Desserts represent 33.88% of volume, closely followed by Modern innovations at 28.75% and Signature line at 25.9%."
    ],
    businessRecommendations: "Launch targeted end-of-month loyalty promotions ('Payday Countdown Discounts') between Days 20–30 to elevate trough periods and stabilize cash flow."
  },
  {
    id: "imdb-entertainment-analysis",
    title: "IMDb Global Entertainment Economics & Director ROI",
    category: "Media & Entertainment Intelligence",
    tools: ["Power BI", "DAX", "Data Modeling", "Visualization"],
    dataset: {
      source: "Kaggle",
      size: "4,000+ records × 13 fields",
      type: "Historical Cinematic Box Office & Production Budget Data"
    },
    image: "./dashboards/imdb_dashboard.png",
    githubUrl: "https://github.com/Mohamed32213",
    kpis: [
      { label: "Total Revenue", value: "$528.25B", highlight: true },
      { label: "Total Budget", value: "$170.52B", highlight: false },
      { label: "Net Profit", value: "$244.50B", highlight: true },
      { label: "Profit Margin", value: "46.0%", highlight: false },
    ],
    problemStatement: "Which film genres and directors demonstrate the highest capital efficiency, and how have theatrical economics evolved over past decades?",
    methodology: [
      "Harmonized financial metrics across multiple decades of global film releases, calculating Net Profit and ROI margins.",
      "Designed a radial / polar genre revenue matrix to visualize thematic genre performance.",
      "Benchmarked top grossing directors comparing cumulative production budget against box office returns.",
      "Modeled multi-decade historical timeline (1960–2015+) tracking industry revenue expansion."
    ],
    keyInsights: [
      "The dataset captured $528.25 Billion in total gross revenue against $170.52 Billion in production budgets, yielding a solid 46% net profit margin.",
      "Steven Spielberg stands as the unmatched top-earning director, generating $15.2 Billion in revenue against only $2.1 Billion in cumulative budgets.",
      "Action, Adventure, and Animation genres represent the highest commercial return per dollar invested.",
      "Long-term revenue trends demonstrate exponential expansion starting in the late 1990s, peaking above $20B annually in recent eras."
    ],
    businessRecommendations: "Studios should prioritize high-concept Action/Adventure IPs with proven director track records, as they exhibit the highest statistical resilience against budget overruns."
  }
];

export const educationAndExperience = [
  {
    type: "experience",
    role: "Data Analysis Trainee",
    organization: "Digital Egypt Pioneers Initiative (DEPI)",
    issuer: "Ministry of Communications and Information Technology (MCIT), Egypt",
    period: "Jul 2026 – Present",
    status: "In Progress (4 months completed, 2 months to certification)",
    description: "Intensive government-backed professional training track focused on practical enterprise data analysis.",
    highlights: [
      "Gained hands-on experience in Excel, Power BI, and SQL through real-world, project-based data analysis.",
      "Completed applied workshops covering data visualization, DAX modeling, and executive KPI reporting.",
      "Applied data cleaning, ETL pipelines, and dashboard architecture to messy enterprise datasets."
    ]
  },
  {
    type: "experience",
    role: "Problem Solving & Algorithmic Trainee",
    organization: "ICPC Community",
    issuer: "International Collegiate Programming Contest",
    period: "2025 – Present",
    status: "Active Competitor",
    description: "Developing structured algorithmic reasoning, complexity optimization, and mathematical logic.",
    highlights: [
      "Solved 100+ competitive programming problems under strict time and space complexity constraints.",
      "Strengthened deep analytical thinking, edge-case validation, and structured problem decomposition."
    ]
  },
  {
    type: "education",
    role: "Bachelor of Computers & Artificial Intelligence",
    organization: "Fayoum University",
    issuer: "Faculty of Computers and Artificial Intelligence",
    period: "2022 – Expected 2028",
    status: "Third Year Student (Major: Computer Science - CS)",
    description: "Rigorous computer science curriculum emphasizing algorithms, database design, software engineering, and artificial intelligence fundamentals.",
    highlights: [
      "Core courses: Relational Databases, Data Structures & Algorithms, Object-Oriented Programming, Statistics & Probability.",
      "Applied computer science foundations to real-world analytical modeling."
    ]
  },
  {
    type: "certification",
    role: "Professional Data Analysis Diploma",
    organization: "Specialized Diploma with Eng. Mazen",
    issuer: "Professional Data Mentorship Program",
    period: "Completed",
    status: "Certified",
    description: "Comprehensive end-to-end diploma covering data extraction, cleaning, modeling, and presentation.",
    highlights: [
      "Mastered Power BI DAX calculations, advanced Excel modeling, and SQL relational querying.",
      "Developed multiple portfolio-ready business intelligence dashboards."
    ]
  }
];
