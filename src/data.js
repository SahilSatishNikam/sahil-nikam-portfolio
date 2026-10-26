export const profile = {
  name: 'Sahil Nikam',
  role: 'Software Developer Intern',
  company: 'Code Metric',
  startDate: 'October 2026',
  specialization: 'Java | Spring Boot | Backend Engineering',
  tagline: "HELLO, I'M",
  location: 'India',
  email: 'sahilnikam107@gmail.com', // Replace with your verified email address
  github: 'https://github.com/SahilSatishNikam',
  linkedin: 'https://www.linkedin.com/in/sahil-nikam-86a206379/',
  avatar: '/images/sahil-profile.jpg',
  resume: '/resume/SAHIL_NIKAM_SDE.pdf',
  // Set to true only if you wish to display an active availability indicator in the UI
  isOpenToOpportunities: false,
  availabilityText: 'Available for technical collaborations & projects',
  heroLead:
    'Software Developer Intern at Code Metric (starting October 2026). I build practical software applications and reliable backend systems using Java, Spring Boot, REST APIs, and relational databases. I enjoy solving technical problems and continuously improving my development skills.',
  about:
    "I'm Sahil Nikam, a Software Developer Intern at Code Metric (starting October 2026) focused on building practical applications with Java and Spring Boot. My interests include backend development, REST API design, database integration, and full-stack application development. I enjoy learning new technologies, understanding how software systems work, and writing maintainable code.",
};

export const skills = [
  {
    group: 'Programming',
    category: 'Core Languages',
    items: ['Java', 'SQL', 'JavaScript'],
  },
  {
    group: 'Backend',
    category: 'Architecture & Frameworks',
    items: [
      'Core Java',
      'Spring Boot',
      'REST APIs',
      'Spring Data JPA',
      'Hibernate',
      'JDBC',
      'Java 8 Streams & Lambdas',
      'Object-Oriented Programming (OOP)',
    ],
  },
  {
    group: 'Database',
    category: 'Data Persistence',
    items: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    group: 'Frontend',
    category: 'Client-side Engineering',
    items: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    group: 'Tools',
    category: 'Development & Build Workflow',
    items: ['Git', 'GitHub', 'Maven', 'Postman'],
  },
];

export const projects = [
  {
    slug: 'training-batch-management',
    number: '01',
    title: 'Training Batch Management System',
    category: 'FULL-STACK WEB APPLICATION',
    summary:
      'A web application for organizing technical training batches, coordinating trainers and learners, and managing training-related information.',
    problemSolved:
      'Replaces scattered spreadsheets and fragmented communication with a centralized workflow for batch scheduling, trainer assignments, and learner progress tracking.',
    description:
      'A training operations application engineered to bring structure and transparency to technical cohorts. It features organized modules for managing batch schedules, assigning dedicated trainers, maintaining student rosters, and monitoring syllabus progression through secure REST endpoints.',
    stack: [
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'Hibernate',
      'MySQL',
      'REST APIs',
      'HTML',
      'CSS',
      'JavaScript',
    ],
    highlights: [
      'Batch management and trainer assignment workflows',
      'Trainer and student profile and roster tracking',
      'Role-based dashboards for administrators and instructors',
      'Training progress tracking across curriculum modules',
      'REST API endpoints with relational database persistence in MySQL',
    ],
    accent: 'blue',
    visual: 'batch',
    status: 'IN DEVELOPMENT',
    github: 'https://github.com/SahilSatishNikam', // Update with specific repository URL when public
    demo: '', // Optional live demo link
  },
  {
    slug: 'employee-management',
    number: '02',
    title: 'Employee Management System',
    category: 'BACKEND REST API & CRUD',
    summary:
      'An employee management application designed to organize employee records and demonstrate robust backend CRUD development.',
    problemSolved:
      'Demonstrates a reliable, enterprise-grade layered architecture (Controller, Service, Repository) for standard employee record operations and data integrity.',
    description:
      'A Spring Boot project centered on clean separation of concerns and robust data persistence. The backend provides comprehensive REST endpoints to create, read, update, and delete employee records while managing database transactions smoothly with Spring Data JPA and Hibernate.',
    stack: [
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'Hibernate',
      'MySQL',
      'Maven',
    ],
    highlights: [
      'Create, retrieve, update, and delete (CRUD) employee records',
      'Layered Spring Boot architecture ensuring clear boundaries and testability',
      'Relational database persistence using Spring Data JPA and Hibernate',
      'REST API design adhering to HTTP standards and JSON payloads',
      'Maven-managed dependency structure and build configuration',
    ],
    accent: 'violet',
    visual: 'employee',
    status: 'IN DEVELOPMENT',
    github: 'https://github.com/SahilSatishNikam', // Update with specific repository URL when public
    demo: '',
  },
  {
    slug: 'salon-management',
    number: '03',
    title: 'Salon Management System',
    category: 'JAVA WEB APPLICATION',
    summary:
      'A separate Java web application for managing salon-related operations, service catalogs, and appointment workflows.',
    problemSolved:
      'Automates client service scheduling and appointment coordination, demonstrating traditional Java enterprise web architecture and JDBC connectivity.',
    description:
      'A standalone Java web application illustrating server-rendered architecture and direct database interactions. The system provides service catalog browsing, appointment scheduling workflows, and data management using Java Servlets, JSP, and direct JDBC drivers.',
    stack: ['Java Servlets', 'JSP', 'JDBC', 'MySQL'],
    highlights: [
      'Server-rendered web interface utilizing Java Servlets and JSP',
      'Direct database connectivity and transaction execution via JDBC',
      'Service catalog and appointment booking workflow management',
      'Relational schema design for managing customers and salon services',
    ],
    accent: 'cyan',
    visual: 'salon',
    status: 'PROJECT',
    github: 'https://github.com/SahilSatishNikam', // Update with specific repository URL when public
    demo: '',
  },
];

export const experience = [
  {
    id: 'current-role',
    role: 'Software Developer Intern',
    company: 'Code Metric',
    period: 'October 2026–Present',
    type: 'Internship',
    location: 'India',
    description: 'Software Developer Intern starting October 2026.',
    highlights: [],
    technologies: [],
  },
  {
    id: 'internship-role',
    role: 'Software Developer Intern',
    // Configurable internship company: Replace placeholder with your internship organization
    company: 'Cravita Technologies',
    period: 'Dec-2025 To Jun-2026',
    type: 'Internship',
    location: 'India,Pune',
    description:
      'Gained practical hands-on experience in software engineering workflows, backend programming concepts, database operations, and API testing.',
    highlights: [
      'Contributed to software development modules and backend logic implementation.',
      'Tested and validated API endpoints using Postman to verify request/response payloads.',
      'Practiced version control workflows using Git and GitHub in a collaborative environment.',
    ],
    technologies: ['Java', 'Spring Boot', 'MySQL', 'Postman', 'Git', 'GitHub'],
  },
];

export const education = {
  degree: 'Bachelor of Computer Applications (BCA)',
  college: 'Karmaveer Bhaurao Patil College, Urun-Ishwarpur',
  university: 'Shivaji University, Kolhapur',
  location: 'Maharashtra, India',
  description:
    'Studied computer application fundamentals including Object-Oriented Programming (OOP), Data Structures and Algorithms, Relational Database Management Systems (RDBMS), Software Engineering, and Web Development.',
};

export const certification = {
  title: 'Java Full Stack Development',
  institution: 'Fortune Cloud',
  credentialUrl: '', // Add credential URL or verification link if available
  description:
    'Intensive professional program with focused practical training in Core Java, Spring Boot, Spring Data JPA, Hibernate, RESTful Web Services, MySQL, and modern frontend technologies.',
  highlights: [
    'Advanced Object-Oriented Programming and Java 8 features (Streams, Lambdas)',
    'Enterprise application architecture with Spring Boot and Spring Data JPA',
    'RESTful API development and database integration with Hibernate & MySQL',
    'Full stack connectivity integrating frontend clients with backend services',
  ],
};
