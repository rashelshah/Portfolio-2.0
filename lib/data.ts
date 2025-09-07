import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'rashelshah11@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Rashel, I am reaching out to you because...',

    upworkProfile: 'https://www.upwork.com/freelancers/tajmirul',
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
    ],
};

export const PROJECTS: IProject[] = [
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

Users can browse movies fetched from an external API, read reviews from other users, and contribute their own ratings and comments. The website features dynamic content loading, user authentication, and real-time data storage, offering a seamless experience across devices. Whether you’re a casual viewer or a film enthusiast, this platform helps you discover new movies and participate in discussions with a community of movie lovers.
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
        title: 'Newsify',
        slug: 'newsify',
        techStack: ['React', 'Javascript', 'HTML', 'CSS', 'API'],

        images: [
            '/projects/images/newsify-1.png',
            '/projects/images/newsify-2.png',
            '/projects/images/newsify-3.png',
            '/projects/images/newsify-4.png',
        ],
        sourceCode: 'https://github.com/rashelshah/Newsify.git',
        liveUrl: '',
        year: 2024,
        description: `A sleek and user-friendly news website built with React that delivers real-time news using external APIs. It showcases dynamic content rendering and efficient API integration—all on the frontend.
        Key Features:<br/>
        <ul>  
  <li>📰 Real-Time News: Fetches and displays the latest news from external APIs</li>  
  <li>📂 Categorized Content: Browse news by different categories for easy access</li>  
  <li>🔍 Search Functionality: Quickly find news articles by keywords</li>  
  <li>⚡ Fast & Responsive: Smooth navigation with a clean and modern interface</li>  
  <li>🌐 Fully Frontend-Based: Handles all data fetching and rendering on the client side</li>  
</ul>  


`,
    },
    {
        title: 'BlogHaven',
        slug: 'bloghaven',
        techStack: [
            'React.js',
            'Typescript',
            'Tailwind CSS',
            'MongoDB',
            'Node.js',
            'Express.js',
        ],

        images: [
            '/projects/images/property-pro-1.png',
            '/projects/images/property-pro-2.png',
            '/projects/images/property-pro-3.png',
        ],
        sourceCode: 'https://github.com/rashelshah/BlogHaven.git',
        liveUrl: 'https://blog-haven-orcin.vercel.app',
        year: 2025,
        description:
            'PropertyPro is a real estate management platform offering users a seamless experience to explore, manage, and view property listings. The application emphasizes accessibility and responsive design, ensuring a smooth interface across devices.',
        role: `As the frontend developer, I:<br/>
        - Built the frontend using React, Redux, RTK Query, Framer Motion, and Tailwind CSS.<br/>
        - Integrated dynamic state management for efficient handling of property data.<br/>
        - Implemented multi-language support with React i18n to cater to diverse audiences.<br/>
        - Enhanced user interaction with animations and transitions using Framer Motion.`,
    },
    {
        title: 'Dogify',
        slug: 'dogify',
        techStack: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'Typescript'],

        images: [
            '/projects/images/consulting-finance-1.png',
            '/projects/images/consulting-finance-2.png',
            '/projects/images/consulting-finance-3.png',
        ],
        sourceCode: 'https://github.com/rashelshah/Dogify.git',
        liveUrl: 'https://crenotive.netlify.app/',
        year: 2023,
        description:
            'I developed Crenotive, a portfolio website using Html, SASS, and jQuery to showcase services and expertise. The design focuses on responsive user experience and effective presentation of professional achievements.',
        role: ``,
    },
    {
        title: 'iBook',
        slug: 'ibook',
        techStack: [
            'React',
            'Node.js',
            'Express.js',
            'MongoDB',
            'JWT',
            'Tailwind CSS',
        ],

        images: [
            '/projects/images/devLinks-1.png',
            '/projects/images/devLinks-2.png',
            '/projects/images/devLinks-3.png',
        ],
        sourceCode: 'https://github.com/Tajmirul/devsLink',
        liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
        year: 2023,
        description: `One of the most challenging projects in Frontend Mentor.<br/><br/>

            I developed a LinkSharing App as part of the Frontend Mentor challenge, utilizing React, Redux, and Tailwind CSS to create a responsive and feature-rich platform. The app allows users to share, save, and explore links, with a focus on intuitive design and smooth navigation. Advanced state management ensures efficient data handling for user interactions.`,
        role: ``,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Software Engineer (Frontend)',
        company: 'Strativ AB',
        duration: 'Dec 2024 - Present',
    },
    {
        title: 'Frontend Developer',
        company: 'Epikcoders',
        duration: 'Oct 2023 - Nov 2024',
    },
    {
        title: 'Frontend Engineer',
        company: 'Anchorblock Technology',
        duration: 'Oct 2022 - Sep 2023',
    },
    {
        title: 'Frontend Developer (Part-time)',
        company: 'Branex IT',
        duration: 'Jan 2022 - Oct 2022',
    },
];
