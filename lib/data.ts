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

    Technologies: [
        {
            name: 'C',
            icon: '/logo/c.png',
        },
        {
            name: 'C++',
            icon: '/logo/cpp.png',
        },
        {
            name: 'Python',
            icon: '/logo/python.svg.png',
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
        description: `A sleek and user-friendly news website built with React that delivers real-time news using external APIs. It showcases dynamic content rendering and efficient API integration—all on the frontend. <br/><br/>
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
            '/projects/images/bloghaven-1.png',
            '/projects/images/bloghaven-2.png',
            '/projects/images/bloghaven-3.png',
            '/projects/images/bloghaven-4.png',
            '/projects/images/bloghaven-5.png',
            '/projects/images/bloghaven-6.png',
            '/projects/images/bloghaven-7.png',
            '/projects/images/bloghaven-8.png',
        ],
        sourceCode: 'https://github.com/rashelshah/BlogHaven.git',
        liveUrl: 'https://blog-haven-orcin.vercel.app',
        year: 2025,
        description: `BlogHaven is a modern blogging platform where users can create and share articles, with content curated by admins for quality and relevance. It features trending blogs, search functionality, and a seamless experience across devices using the MERN stack. <br/><br/>

            Key Features:<br/>
            <ul>
  <li>✍️ Blog Submission: Users can create and submit blogs for admin approval</li>
  <li>✅ Admin Moderation: Approve, reject, hide, or delete blog posts to maintain quality</li>
  <li>🔥 Trending Blogs: Highlights popular articles based on likes and comments</li>
  <li>🔍 Search & Filter: Easily find blogs by keywords or categories</li>
  <li>📱 Responsive Design: Optimized for both mobile and desktop devices</li>
  <li>🔒 Secure Authentication: Signup and login using JWT for safe user management</li>
</ul>
            `,
    },
    {
        title: 'Dogify',
        slug: 'dogify',
        techStack: ['React', 'Typescript', 'Javascript', 'Bootstrap', 'CSS'],

        images: [
            '/projects/images/dogify-1.png',
            '/projects/images/dogify-2.png',
            '/projects/images/dogify-3.png',
            '/projects/images/dogify-4.png',
            '/projects/images/dogify-5.png',
        ],
        sourceCode: 'https://github.com/rashelshah/Dogify.git',
        liveUrl: 'https://dogify-rho.vercel.app',
        year: 2024,
        description: `Dogify helps you identify your dog’s breed by simply uploading its photo and explore a marketplace for all dog-related products in one place. Smart, easy, and made for dog lovers! <br/><br/>

            Key Features:<br/>
            <ul>
  <li>🐶 Breed Identification: Upload photos to instantly recognize your dog’s breed</li>
  <li>🛍️ Marketplace: Discover a variety of dog-related products for sale</li>
  <li>🔍 Search & Filter: Find specific items by category or keyword</li>
  <li>📱 Responsive Design: Accessible on various devices including smartphones and tablets</li>
  <li>🔒 Secure Login: Sign up and log in securely using JWT tokens</li>
</ul>
            `,
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
        sourceCode: 'https://github.com/rashelshah/iBook.git',
        liveUrl: '',
        year: 2024,
        description: `A simple and efficient notes-taking website to create, organize, and access your notes anytime.
Keep your thoughts, ideas, and important information neatly saved in one place with ease.<br/><br/>

            Key Features:<br/>
            <ul>
            <li>📝 Create & Edit Notes: Quickly jot down and update your notes</li>
            <li>📂 Organize Notes: Sort notes by categories or tags for easy access</li>
            <li>🔍 Search Functionality: Find notes instantly using keywords</li>
            <li>☁️ Cloud Sync: Access your notes from any device seamlessly</li>
            <li>🔒 Secure Storage: Keep your notes safe and private</li>
            </ul>

`,
        role: ``,
    },
];
