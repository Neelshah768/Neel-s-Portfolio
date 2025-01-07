/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Neel's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "NeelShah's Portfolio",
    type: "website",
    url: "https://neelshah.tech/",
  },
};

//Home Page
const greeting = {
  title: "Neel Shah",
  logo_name: "Neel Shah",
  nickname: "FullStack Developer",
  subTitle:
    "Architecting scalable solutions bridging backends with elegant frontends.",
  resumeLink:
    "https://drive.google.com/file/d/1wp3dxNUUbvIePEurcpw8IN9wOm7akcQM/view?usp=sharing",
  portfolio_repository: "https://github.com/Neelshah768/Neel-s-Portfolio",
  githubProfile: "https://github.com/Neelshah768",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Neelshah768",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/neel-shah-215099192/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UC_Rcy-BFyVlC6nOjLuAuasg",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:shahneel20135@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Neelsha30231093",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100008660112740",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_neelix/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Architecting and developing scalable applications with React.js, Next.js, and TypeScript",
        "⚡ Building cross-platform mobile applications with React Native including state management and API integration",
        "⚡ Designing microservices and REST APIs using Node.js/Express.js and Spring Boot",
        "⚡ Managing and optimizing SQL/NoSQL databases with focus on data integrity and performance",
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "devicon:reactnative-wordmark",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#764ABC",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "vscode-icons:file-type-node",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            color: "#007396",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
      ],
    },
    {
      title: "System Architecture & Cloud",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Designing and implementing microservices architecture for scalable applications",
        "⚡ Setting up CI/CD pipelines and automated deployment workflows",
        "⚡ Managing application hosting and deployment on cloud platforms",
        "⚡ Implementing security best practices and performance optimization",
      ],
      softwareSkills: [
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#2496ED",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    {
      title: "UI/UX & Frontend Optimization",
      fileName: "DesignImg",
      skills: [
        "⚡ Creating responsive and accessible web interfaces following best practices",
        "⚡ Implementing modern UI patterns and animations for enhanced user experience",
        "⚡ Performance optimization and bundle size reduction for faster load times",
        "⚡ Cross-browser compatibility and mobile-first development",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "simple-icons:css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Tailwind",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#06B6D4",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
    {
      title: "Development Tools & Practices",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Version control and collaborative development using Git and GitHub",
        "⚡ Code quality maintenance with ESLint, Prettier, and TypeScript",
        "⚡ Unit testing and integration testing for reliable code",
        "⚡ Agile development methodologies and project management",
      ],
      softwareSkills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
        {
          skillName: "VS Code",
          fontAwesomeClassname: "simple-icons:visualstudiocode",
          style: {
            color: "#007ACC",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#FF6C37",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      // profileLink: "https://leetcode.com/NeelShah1298/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/neelfenilshah",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      // profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      // profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      // profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      // profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Silver oak University",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "SOUR.png",
      alt_name: "SOU Logo",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ Completed core computer science courses including Data Structures, Algorithms, Database Management Systems, Operating Systems and Object Oriented Programming",
        "⚡ Specialized in building web applications with modern JavaScript frameworks like React.js and backend technologies including Node.js and Spring Boot",
        "⚡ Actively participated in coding competitions, hackathons and technical events while maintaining good academic performance",
        "⚡ Demonstrated leadership through sports activities and cultural events alongside academic excellence",
      ],
      website_link: "https://silveroakuni.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "C Programing",
      subtitle: "- Prof. Anupam Basu",
      logo_path: "nptel_logo.png",
      // certificate_link:
      // "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "nptel",
      color_code: "#FFBB0099",
    },
    {
      title: "Cyber Security",
      subtitle: "- coreen Ryskamp",
      logo_path: "ibm_logo.png",
      // certificate_link:
      // "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Responsive Web Design",
      subtitle: "- kevin Powell",
      logo_path: "freecodecamp.png",
      // certificate_link:
      // "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "Freecodecamp",
      color_code: "#090920",
    },
    {
      title: "React js/Redux",
      subtitle: "- Academind Maximilian",
      logo_path: "udemy.png",
      // certificate_link:
      // "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "udemy",
      color_code: "#fff",
    },
    {
      title: "React Native",
      subtitle: "- Academind Maximilian",
      logo_path: "udemy.png",
      // certificate_link:
      // "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "udemy",
      color_code: "#fff",
    },
    {
      title: "Java/Spring Boot",
      subtitle: "- in28Minutes Official",
      logo_path: "udemy.png",
      // certificate_link:
      // "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "udemy",
      color_code: "#fff",
    },
    {
      title: "HackerRank JavaScript(Basic)",
      subtitle: "- HackerRank",
      logo_path: "HackerRankLogo.png",
      // certificate_link:
      // "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "udemy",
      color_code: "#fff",
    },
    {
      title: "HackerRank JavaScript(intermediate)",
      subtitle: "- HackerRank",
      logo_path: "HackerRankLogo.png",
      // certificate_link:
      // "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "udemy",
      color_code: "#fff",
    },
    {
      title: "Digital Marketing",
      subtitle: "- Google digital Garage",
      logo_path: "google_logo.png",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "My passion for innovation and new technologies has driven me to stay up-to-date with the latest trends and advancements in software development, allowing me to provide cutting-edge solutions that meet the unique needs of each project.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Senior FullStack Developer",
          company: "PrometheanTech.in",
          company_url: "https://www.prometheantech.in/",
          logo_path: "prometheantech.png",
          duration: "November 2024 current",
          location: "Gandhinagar, Gujarat",
          description:
            "Expanded technical expertise across full-stack development, mastering React Native, Node.js, and Java Spring Boot.Architected and delivered mission-critical applications including user access management systems.Developed cross-platform mobile and web applications demonstrating end-to-end development capabilities.Implemented robust backend solutions ensuring scalable and secure application infrastructures.Leveraged advanced JavaScript and Java technologies to create innovative software solutions.",
          color: "#0879bf",
        },
        {
          title: "Senior Frontend Developer",
          company: "PrometheanTech.in",
          company_url: "https://www.prometheantech.in/",
          logo_path: "prometheantech.png",
          duration: "September 2023 - November 2024",
          location: "Gandhinagar, Gujarat",
          description:
            "Advanced frontend development capabilities with deep expertise in React ecosystem.Developed complex web and mobile applications with focus on scalable and maintainable code.Expanded React Native mobile application development, creating sophisticated cross-platform mobile solutions.Implemented advanced mobile app features with complex state management and navigation.Created pixel-perfect responsive designs for both web and mobile platforms.Implemented state management solutions using Redux and context API across web and mobile applications.Contributed to architectural decisions for frontend and mobile development strategies.",
          color: "#0879bf",
        },
        {
          title: "Frontend Developer",
          company: "PrometheanTech.in",
          company_url: "https://www.prometheantech.in/",
          logo_path: "prometheantech.png",
          duration: "August 2022 - September 2023",
          location: "Gandhinagar, Gujarat",
          description:
            "Developed responsive and dynamic web applications using React, creating intuitive user interfaces.Initiated mobile application development using React Native, building cross-platform mobile solutions.Created initial mobile app prototypes demonstrating expertise in mobile UI/UX design.Implemented core mobile application features with React Native, focusing on seamless user experience.Collaborated with design and backend teams to develop integrated web and mobile application interfaces.Utilized advanced React and React Native techniques to optimize application performance across web and mobile platforms",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Frontend developer intern",
          company: "PrometheanTech.",
          company_url: "https://www.prometheantech.in/",
          logo_path: "prometheantech.png",
          duration: "July 2022 - Aug 2022",
          location: "Gandhinagar,Gujarat",
          description:
            "Contributed to Livcast, a video streaming and broadcasting platform, by implementing key features including third-party API integrations. Successfully integrated Google Ads for monetization, Facebook Graph API for social features, and PayTM payment gateway for secure transactions. Worked with React.js to build responsive user interfaces and handled complex API integrations while following best practices for code quality and performance.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My portfolio showcases full-stack applications built with modern technologies like React.js, Next.js, Spring Boot and React Native. From developing secure fintech solutions to crafting video streaming platforms with LiveCast, I focus on creating scalable and performant applications with clean architecture and intuitive user experiences.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  // title: "Publications",
  // description:
  // "I have worked on and published a few research papers and publications of my own.",
  // avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "neel.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    // title: "Blogs",
    // subtitle:
    // "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    // link: "https://blogs.ashutoshhathidara.com/",
    // avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Kalyanpura Kalol, Dist.-Gandhinagar, Gujarat - 382721",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/q1MaKYrM2RWsdB1r7",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
