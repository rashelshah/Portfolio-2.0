import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'rashelshah11@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Rashel, I am reaching out to you because...',

    upworkProfile: '',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/rashelshah' },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/rashel-shah-65024b327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },

        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'HTML',
            icon: '/logo/html.png',
        },

        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Supabase',
            icon: '/logo/supabase.png',
        },
    ],

    Technologies: [
        {
            name: 'C',
            icon: '/logo/c.png',
        },
        {
            name: 'C++',
            icon: '/logo/cpp.png',
        },
    ],
    'AI & LLM': [
        {
            name: 'Python',
            icon: '/logo/python.svg.png',
        },
        {
            name: 'LangChain',
            icon: '/logo/langchain.svg',
        },
        {
            name: 'LangGraph',
            icon: '/logo/langgraph.svg',
        },
        {
            name: 'RAG',
            icon: '/logo/rag.svg',
        },
    ],
    platform: [
        {
            name: 'Shopify (App Development, APIs, CLI)',
            icon: '/logo/shopify.png',
        },
        {
            name: 'SaaS Architecture',
            icon: '/logo/saas.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Github',
            icon: '/logo/github.png',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
        {
            name: 'Vercel',
            icon: '/logo/vercel.png',
        },
        {
            name: 'Render',
            icon: '/logo/render-1.png',
        },
    ],
};

export const PROJECTS: IProject[] = [


     {
        title: 'FcuK Academia',
        slug: 'fcukacademia',
        highlight: '26K+ Visitors · 160K+ Views',
        metrics: [
            { label: 'Unique Visitors', value: '26K+' },
            { label: 'Total Views', value: '160K+' },
        ],
        techStack: [
            'Next.js',
            'Typescript',
            'Neon DB',
            'React',
            'Render',
        ],

        images: [
            '/projects/images/fcuk-1.png',
            '/projects/images/fcuk-2.png',
            '/projects/images/fcuk-3.png',
            '/projects/images/fcuk-4.png',
        ],
        sourceCode: '',
        liveUrl: 'https://www.fcukacademia.in',
        year: 2025,
        description: `FCUK Academia is a student-focused platform that centralizes academic schedules, attendance tracking, marks, and performance analytics into a unified, mobile-first experience, helping students manage their academic lives more efficiently.<br/><br/>

<div class="my-5 p-4 sm:p-5 rounded-2xl border border-primary/30 bg-primary/[0.08] backdrop-blur-sm">
  <div class="flex items-center gap-2 text-primary font-anton text-lg tracking-wide mb-2">
    <span>🚀</span>
    <span>PROVEN TRACTION & IMPACT</span>
  </div>
  <p class="text-foreground/90 text-base leading-relaxed mb-3">
    Actively used and trusted across campus, achieving over <strong class="text-primary font-bold">26,000+ unique visitors</strong> and <strong class="text-primary font-bold">160,000+ total views</strong>.
  </p>
  <div class="flex flex-wrap gap-2.5 pt-1">
    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold border border-primary/30">
      👥 26,000+ Unique Visitors
    </span>
    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold border border-primary/30">
      👁️ 160,000+ Total Views
    </span>
  </div>
</div><br/>

Key Features:<br/>
<ul>
  <li>📅 Smart Timetable: Access class schedules and organize daily academic activities through a centralized dashboard</li>
  <li>📊 Academic Performance Analytics: Track marks, monitor academic progress and visualize performance trends</li>
  <li>🧮 Attendance Calculator: Calculate attendance percentages and determine the classes required to meet attendance criteria</li>
  <li>🎓 SGPA Calculator: Estimate semester grade point averages using subject-wise marks and credits</li>
  <li>🗓️ Academic Calendar: Keep track of important academic dates, events and upcoming activities</li>
  <li>📱 Mobile-First Experience: Navigate academic information through a responsive interface optimized for smartphones</li>
  <li>🔄 Swipe-Based Navigation: Switch between application sections using intuitive horizontal gestures and smooth transitions</li>
  <li>📲 Progressive Web App: Access the platform through a PWA experience with installability and offline support where implemented</li>
  <li>🔐 Secure Student Access: Restrict account access to eligible SRMIST institutional email addresses</li>
  <li>🎨 Interactive Interface: Experience animated components, intuitive navigation and a distinctive visual design tailored to students</li>
</ul><br/>



Technical Highlights:<br/>
<ul>
  <li>Built with Next.js and React using a modern, component-based application architecture</li>
  <li>TypeScript for type safety and maintainable application code</li>
  <li>Tailwind CSS for responsive styling and consistent UI development</li>
  <li>Supabase for database integration, authentication and backend services where configured</li>
  <li>SRM Academia API integration for retrieving relevant academic information from the SRMIST KTR portal</li>
  <li>Framer Motion for smooth transitions, interactive animations and card-flip effects</li>
  <li>Lucide React and Material Symbols for consistent iconography</li>
  <li>Progressive Web App capabilities for installation and an app-like mobile experience</li>
  <li>Vercel deployment with analytics integration for monitoring application usage and performance</li>
  <li>Performance-focused navigation using optimized transitions and gesture-based interactions</li>
</ul><br/>

`,
    },

   {
        title: 'Forge',
        slug: 'forge',
        techStack: [
            'React',
            'Agentic AI',
            'RAG',
            'Python',
            'Typescript',
            'Tailwind CSS',
        ],

        images: [
            '/projects/images/forge-1.png',
            '/projects/images/forge-2.png',
            '/projects/images/forge-3.png',
            '/projects/images/forge-4.png',
        ],
        sourceCode: '',
        liveUrl: 'https://forge-frontend-se6u.onrender.com',
        year: 2026,
        description: `The Operating System for Startup Creation <br/><br/>

Key Features:<br/>
<ul>
<li>🚀 Venture Studio Dashboard: Centralized workspace to manage ventures, track progress and organize startup development</li>
<li>🔬 MVP Architect & Prototype Builder: Turn early-stage ideas into structured MVP plans and product prototypes</li>
<li>📊 Competitor Intelligence: Analyze competitors, identify market gaps and uncover opportunities for differentiation</li>
<li>📈 Market Signals: Track emerging trends, market shifts and industry opportunities to support smarter decisions</li>
<li>🧠 Venture Memory: Preserve research, strategic decisions and insights across ventures for long-term context</li>
<li>🤖 Venture Copilot: AI-powered assistant that uses venture context to support research, planning and decision-making</li>
<li>🧪 Validation Lab: Evaluate startup ideas, test assumptions and assess market potential before investing resources</li>
<li>🎯 Go-To-Market Planning: Organize launch strategies, positioning and customer acquisition plans</li>
<li>📋 AI Founder Brief: Generate concise strategic summaries with key insights, opportunities and recommended next steps</li>
<li>⚙️ Venture Operations: Monitor agent activity, manage workflows and configure workspace settings</li>
</ul><br/>

Technical Highlights:<br/>
<ul>
  <li>Built as an AI-powered venture studio platform for startup ideation, research and execution</li>
  <li>Modular workspace architecture covering venture management, intelligence and operations</li>
  <li>AI-driven workflows for market research, competitor analysis and venture validation</li>
  <li>Context-aware AI assistance designed to retain and reuse venture-specific knowledge</li>
  <li>Interactive dashboard with structured navigation, collapsible sections and dedicated workspaces</li>
  <li>Integrated tools for research, prototyping, strategic planning and go-to-market execution</li>
  <li>Deployed on Render</li>
</ul><br/>

`,
    },

    {
        title: 'FoxlyCOD',
        slug: 'foxlycod',
        techStack: [
            'Shopify',
            'Typescript',
            'Polaris',
            'React',
            'Render',
        ],

        images: [
            '/projects/images/foxlycod-1.jpg',
            '/projects/images/foxlycod-2.jpg',
            '/projects/images/foxlycod-3.jpg',
            '/projects/images/foxlycod-4.jpg',
        ],
        sourceCode: '',
        liveUrl: 'https://apps.shopify.com/foxly-cod-partial-prepaid',
        year: 2026,
        description: `Foxly COD is a Shopify SaaS platform that helps merchants boost COD conversions with a customizable one-page checkout, partial payments, smart autofill, and streamlined order management.<br/><br/>

Key Features:<br/>
<ul>
  <li>🛒 One-Page COD Checkout: Streamlined Shopify order form designed to simplify checkout and improve cash-on-delivery conversions</li>
  <li>🎨 Customizable Form Builder: Personalize checkout layouts, themes, colors, fields and button styles through a seller dashboard</li>
  <li>📦 Smart Product Bundles: Offer quantity-based bundles and discounts to increase average order value</li>
  <li>💳 Partial COD Payments: Collect a small upfront payment through supported payment gateways while keeping the remaining balance payable on delivery</li>
  <li>⚡ Smart Autofill: Automatically populate customer details to speed up checkout for returning customers</li>
  <li>📊 Order Analytics: Track orders and monitor checkout performance through a centralized dashboard</li>
  <li>📱 SMS & WhatsApp Integration: Enable customer communication and order updates through messaging integrations</li>
  <li>📑 Google Sheets Integration: Sync order data with Google Sheets for easier tracking and management</li>
  <li>💰 Usage-Based Pricing: Commission-based monetization with Shopify app usage charges rather than mandatory recurring subscriptions</li>
  <li>🌍 Shopify Integration: Designed for merchants looking to simplify COD order management and optimize their checkout experience</li>
</ul><br/>


Technical Highlights:<br/>
<ul>
<li>Built with React for the embedded merchant dashboard and Node.js with Express.js for backend services</li>
<li>Integrated with Shopify APIs to support product data, order workflows and merchant operations</li>
<li>Supabase PostgreSQL for structured data storage and application management</li>
<li>Modular architecture with dedicated data models for customers, form settings and order logs</li>
<li>Payment gateway integrations to support advance payments for partial COD orders</li>
<li>OAuth-based Google Sheets integration for synchronizing order information</li>
<li>Designed for deployment with Vercel for the frontend and Render for backend services</li>
</ul><br/>
`,
    },


     {
        title: 'ProdSync',
        slug: 'prodsync',
        techStack: [
            'React',
            'Typescript',
            'Node.js',
            'Express.js',
            'Supabase'
        ],

        images: [
            '/projects/images/prodsync-1.png',
            '/projects/images/prodsync-2.png',
            '/projects/images/prodsync-3.png',
            '/projects/images/prodsync-4.png',
        ],
        sourceCode: '',
        liveUrl: 'https://www.prodsync.in',
        year: 2025,
        description: `ProdSync is a SaaS platform designed to streamline operational workflows through real-time tracking, centralized data management, and interactive dashboards, enabling teams to improve visibility, coordination, and operational efficiency. <br/><br/>

Key Features:<br/>
<ul>
  <li>📦 Centralized Product Management: Manage product and operational data through a unified, intuitive dashboard</li>
  <li>🚚 Real-Time Transport Tracking: Monitor transportation activities and visualize shipment locations on an interactive map</li>
  <li>🗺️ Interactive Tracking Map: Visualize transport movements and location updates using Mapbox-powered mapping</li>
  <li>⚡ Live Data Synchronization: Keep tracking information updated through real-time communication and periodic data refreshes</li>
  <li>📊 Operational Visibility: Access organized information about transport activities to improve monitoring and coordination</li>
  <li>🔄 Dynamic Dashboard: Interact with responsive interfaces designed to simplify operational workflows and data navigation</li>
  <li>🔔 Instant Feedback: Receive contextual notifications for application actions and operational updates</li>
  <li>📱 Responsive User Interface: Access key features through a modern interface designed for a seamless user experience</li>
</ul><br/>


Technical Highlights:<br/>
<ul>
  <li>Built with React, TypeScript and Vite for a modern, component-based frontend architecture</li>
  <li>Node.js and TypeScript backend for server-side logic and API development</li>
  <li>Supabase integration for database connectivity and application data management</li>
  <li>Socket.IO for real-time, bidirectional communication between the client and server</li>
  <li>Mapbox GL integration for interactive maps and transport location visualization</li>
  <li>TanStack React Query for asynchronous data fetching, caching and server-state management</li>
  <li>React Router for client-side navigation and structured application routing</li>
  <li>Framer Motion and WebGL-based visual effects for interactive UI elements and animations</li>
  <li>Error boundary implementation for improved frontend error handling and application resilience</li>
</ul><br/>
`,
    },



    {
        title: 'Crypton AI',
        slug: 'crypton-ai',
        sourceCode: 'https://github.com/rashelshah/cryptotrend-ai.git',
        liveUrl: 'https://crypton-ai.vercel.app/',
        year: 2025,
        description: `
     Advanced cryptocurrency analytics powered by artificial intelligence. Track real-time market data, analyze trends, and discover investment opportunities. <br/> <br/>
      
     Key Features:<br/>
<ul>
  <li>🤖 AI & Risk Analysis: Evaluate risk levels of different cryptocurrencies</li>
  <li>📊 Smart Market Alerts: Get notified about significant market changes</li>
  <li>📈 Top Gainers & Losers: Track daily top-performing and underperforming coins</li>
  <li>📰 Real-Time Crypto News: Stay updated with the latest market insights</li>
  <li>⚡ High Volatility Detection: Identify coins with sudden price swings</li>
  <li>💬 AI Chatbot Assistant: Learn trading concepts and get interactive insights</li>
  <li>⭐ Watchlist: Keep track of your favorite cryptocurrencies</li>
  <li>📂 Portfolio AI Analysis: Personalized breakdown and performance analysis</li>
  <li>🎮 Trading Simulator: Practice risk-free trading with virtual funds</li>
</ul><br/>
    Technical Highlights:<br/>
<ul>
  <li>Developed a responsive frontend with React, TypeScript, and Tailwind CSS</li>
  <li>Implemented backend with Node.js & Express.js connected to Supabase</li>
  <li>Integrated Coinlore and Gemini APIs for real-time market and trading data</li>
  <li>Built AI-driven portfolio analysis and smart alert system</li>
  <li>Configured MySQL & Supabase for scalable and secure data management</li>
</ul><br/>

      `,
        role: `
    Role: <br/>
Full-Stack Developer <br/>
Owned the entire development lifecycle:<br/>
<ul>
  <li>✅ Backend: Built REST APIs for portfolio, alerts, and trading simulator using Express.js</li>
  <li>🎨 Frontend: Designed UI with React, TypeScript, and dark green/black theme</li>
  <li>🔄 State Management: Managed client-side data with React Query & Context API</li>
  <li>🖥️ AI Features: Integrated chatbot and AI risk analysis module</li>
  <li>🚀 Deployment: Deployed app with Supabase hosting & cloud services</li>
  <li>🧩 Third-Party Integration: Added APIs (Coinlore, Gemini) for live crypto data</li>
</ul>
      `,
        techStack: ['React', 'Typescript', 'Tailwind CSS', 'shadcn', 'Vercel'],

        images: [
            '/projects/images/crypton-1.png',
            '/projects/images/crypton-2.png',
            '/projects/images/crypton-3.png',
            '/projects/images/crypton-4.png',
            '/projects/images/crypton-5.png',
            '/projects/images/crypton-6.png',
        ],
    },
    {
        title: 'Screenly',
        slug: 'screenly',
        techStack: [
            'React',
            'Api Integration',
            'Node.js',
            'Express.js',
            'MongoDB',
            'HTML',
            'Tailwind CSS',
        ],

        images: [
            '/projects/images/screenly-1.png',
            '/projects/images/screenly-2.png',
            '/projects/images/screenly-3.png',
            '/projects/images/screenly-4.png',
            '/projects/images/screenly-5.png',
            '/projects/images/screenly-6.png',
        ],
        sourceCode: 'https://github.com/rashelshah/Screenly.git',
        liveUrl: 'https://screenly-pi.vercel.app/',
        year: 2024,
        description: `This is a modern, full-stack movie review platform where users can explore and share their opinions about movies. The website is built using React.js for the frontend and Node.js, Express, and MongoDB for the backend, ensuring a fast, scalable, and interactive experience.

Users can browse movies fetched from an external API, read reviews from other users, and contribute their own ratings and comments. The website features dynamic content loading, user authentication, and real-time data storage, offering a seamless experience across devices. Whether you’re a casual viewer or a film enthusiast, this platform helps you discover new movies and participate in discussions with a community of movie lovers. <br/><br/>

Key Features:<br/>
<ul>
  <li>🎬 Movie Browsing: Explore a wide collection of movies with search and filter options</li>
  <li>📝 User Reviews & Ratings: Share your thoughts and rate movies you’ve watched</li>
  <li>🔑 User Authentication: Secure sign-up and login for personalized experiences</li>
  <li>💬 Comments Section: Engage in discussions with other movie enthusiasts</li>
  <li>📂 Review Management: Edit or delete your reviews anytime</li>
  <li>🌐 API Integration: Get up-to-date movie details from trusted external sources</li>
  <li>📱 Responsive Design: Enjoy a smooth experience across all devices</li>
  <li>⭐ Watchlist: Save your favorite movies for quick access</li>
  <li>📊 Dynamic Data Storage: Reviews and ratings are saved and retrieved in real time using MongoDB</li>
</ul>

<br/>

    Technical Highlights:<br/>
<ul>
  <li>Developed a responsive frontend with React, TypeScript, and Tailwind CSS</li>
  <li>Implemented backend with Node.js & Express.js connected to Supabase</li>
  <li>Integrated Coinlore and Gemini APIs for real-time market and trading data</li>
  <li>Built AI-driven portfolio analysis and smart alert system</li>
  <li>Configured MySQL & Supabase for scalable and secure data management</li>
</ul><br/>

      `,
    },

    {
        title: 'SF90 Immersion',
        slug: 'sf90-immersion',
        techStack: ['Next.js', 'Typescript', 'Framer Motion', 'Tailwind CSS'],

        images: [
            '/projects/images/sf90-immersion-1.png',
            '/projects/images/sf90-immersion-2.png',
            '/projects/images/sf90-immersion-3.png',
            '/projects/images/sf90-immersion-4.png',
            '/projects/images/sf90-immersion-5.png',
            '/projects/images/sf90-immersion-6.png',
            '/projects/images/sf90-immersion-7.png',
        ],
        sourceCode: 'https://github.com/rashelshah/SF90-Immersion.git',
        liveUrl: 'https://ferrari-sf-90-stradale.vercel.app',
        year: 2026,
        description: `SF90 Immersion is a cinematic, interactive web experience that showcases the engineering, performance, and design philosophy of the Ferrari SF90 Stradale through immersive visuals and scroll-driven storytelling. The project blends high-end UI design with advanced frontend animations to create a premium digital showroom that feels closer to a product launch experience than a traditional website.

Users can explore key systems such as the hybrid powertrain, engine architecture, aerodynamics, chassis, and interior through smooth transitions, dynamic sections, and cinematic visuals. Every interaction is designed to communicate speed, precision, and technological excellence while maintaining a clean, luxury aesthetic.

Whether viewed as a design experiment or a technical demonstration, SF90 Immersion highlights how modern web technologies can be used to tell complex engineering stories in an engaging and accessible way. <br/><br/>

Key Features:<br/>
<ul>
  <li>🏎️ Cinematic Hero Experience: High-impact visuals and smooth intro animations</li>
  <li>🧬 Hybrid System Visualization: Dedicated section explaining Ferrari’s plug-in hybrid architecture</li>
  <li>⚙️ Engine & Powertrain Showcase: Detailed presentation of the V8 engine and performance metrics</li>
  <li>🌪️ Aerodynamics Exploration: Visual storytelling of airflow, downforce, and cooling management</li>
  <li>🛞 Chassis & Handling Section: Structural and suspension-focused technical breakdown</li>
  <li>🛋️ Interior Experience: Door-open transition and cockpit-focused cinematic reveal</li>
  <li>🖼️ Interactive Gallery: Masonry layout with flip cards showing fun Ferrari facts</li>
  <li>📱 Fully Responsive Design: Optimized for desktop, tablet, and mobile devices</li>
</ul>

<br/>

Technical Highlights:<br/>
<ul>
  <li>Built with React.js and Tailwind CSS for a modern, scalable frontend</li>
  <li>Implemented smooth animations using Framer Motion and GSAP</li>
  <li>Scroll-driven storytelling with performance-optimized motion</li>
  <li>Reusable component-based architecture</li>
  <li>Optimized image loading and asset management for fast performance</li>
  <li>Deployed on Vercel for seamless hosting and CI/CD</li>
</ul><br/>
`,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Full Stack Developer Intern',
        company: 'Lobelite Infotech Pvt Ltd',
        duration: 'Feb 2026 - Present',
    },
    {
        title: 'Full Stack Developer Intern',
        company: 'TUBELIGHT MEDIAWORKS · Industry Project (via SRMIST)',
        duration: 'Feb 2026 - Present',
        description: `• Completed initial internship (Feb 2026) <br/> • Re-selected for a second internship based on performance`,
    },
    {
        title: 'Technical Blog Writer Intern',
        company: 'KaizenStat',
        duration: 'Feb 2026 - Mar 2026',
    },
];
