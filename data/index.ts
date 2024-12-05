export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" }
];

export const gridItems = [
  {
    id: 1,
    title: "Crafting scalable systems with Java and Spring Boot",
    description: "Modern applications",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/Banner.jpg",
    spareImg: ""
  },
  {
    id: 2,
    title: "I ensure smooth communication and alignment with global teams",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: ""
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Some things",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: ""
  },
  {
    id: 4,
    title: "Passionate about solving complex problems with code",
    description: "Clean and efficient",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg"
  },

  {
    id: 5,
    title: "Exploring creativity through innovative projects",
    description: "Passionate about technology",
    className: "md:col-span-3 md:row-span-2",
    imgClassName:
      "absolute right-0 bottom-0 md:w-96 w-60 rounded-lg opacity-85",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/project10.png",
    spareImg: "/grid.svg"
  },
  {
    id: 6,
    title: "Looking for a partner to bring your idea to life?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: ""
  }
];

export const projects = [
  {
    id: 1,
    title: "Microservices with Spring Boot and Grafana Stack",
    des: "This Spring Boot microservices project prioritizes reliability, observability, and developer experience. By using the Circuit Breaker pattern, the system can tolerate failures without cascading effects. The combination of Swagger, OpenAPI, Grafana, Prometheus, Loki, and Tempo provides a comprehensive solution for monitoring and managing the microservices, ensuring that they are always available and performing optimally.",
    img: "/project10.png",
    iconLists: [
      "/java.png",
      "/spring-boot.png",
      "/openapi.png",
      "/swagger.png",
      "/grafana.png",
      "/mongodb.png",
      "/Keycloak.png",
      "/kafka.png",
      "/mysql.png",
      "/dock.svg"
    ],
    link: "https://portafolio-jack.netlify.app/microservices-app/"
  },
  {
    id: 2,
    title: "Reactive Microservices Application with Spring Boot",
    des: "This microservices application, built with Spring Boot, delivers a seamless and responsive user experience. By employing reactive programming with Spring WebFlux and adhering to SOLID principles, we've optimized performance and scalability. The use of design patterns like Event-Driven ensures efficient data processing and timely responses.",
    img: "/project9.png",
    iconLists: [
      "/java.png",
      "/spring-boot.png",
      "/mongodb.png",
      "/kafka.png",
      "/dock.svg"
    ],
    link: "https://portafolio-jack.netlify.app/microservices-app-reactive/"
  },
  {
    id: 3,
    title: "Secure and Scalable Microservices Architecture",
    des: "This project implements a scalable, secure, and distributed microservices architecture using Spring Boot. It leverages technologies like Eureka for service discovery, Kafka for asynchronous communication, OpenFeign and RestTemplate for synchronous calls, and Zipkin for distributed tracing. Adhering to DDD principles and utilizing Docker and Docker Compose, this project ensures modularity, scalability, and maintainability. Keycloak provides robust security, and Spring Actuator offers valuable insights into the application's health and performance.",
    img: "/project7.png",
    iconLists: [
      "/java.png",
      "/spring-boot.png",
      "/zipkin.png",
      "/postger.png",
      "/mongodb.png",
      "/Keycloak.png",
      "/kafka.png",
      "/dock.svg"
    ],
    link: "https://portafolio-jack.netlify.app/project_microservices-app/"
  },
  {
    id: 4,
    title: "Reactive CRUD API with Spring WebFlux",
    des: "This project implements a reactive, non-blocking CRUD API using Spring WebFlux and PostgreSQL. By leveraging reactive programming, we achieve high performance and scalability, handling a large number of concurrent requests efficiently. The API adheres to RESTful principles and includes robust error handling and validation mechanisms.",
    img: "/project8.png",
    iconLists: ["/java.png", "/spring-boot.png", "/postger.png", "/dock.svg"],
    link: "https://github.com/JackSilverioC/crud-webflux"
  },
  {
    id: 5,
    title: "Spring Boot Supermarket Management App",
    des: "This Spring Boot application provides a backend solution for supermarket management. It leverages PostgreSQL as the database and includes features like product management, inventory control, and order processing. The application is deployed on AWS Elastic Beanstalk for scalability and reliability.",
    img: "/project1.png",
    iconLists: ["/java.png", "/spring-boot.png", "/postger.png", "/dock.svg"],
    link: "https://github.com/JackSilverioC/application-java-spring"
  },
  {
    id: 6,
    title: "Task list",
    des: "The project involves creating a to-do list application that stores data locally within the user's browser using TypeScript and the browser's local storage.",
    img: "/project2.png",
    iconLists: ["/tail.svg", "/ts.svg", "/react.png"],
    link: "https://jacksilverioc.github.io/frontend-typescript/"
  },
  {
    id: 7,
    title: "Expense Tracker",
    des: "Tracking income and expenses using Local Storage and React.",
    img: "/project3.png",
    iconLists: ["/tail.svg", "/react.png"],
    link: "https://jacksilverioc.github.io/expense-tracker-react/"
  },
  {
    id: 8,
    title: "Data analysis A",
    des: "Analysis of the data performed on 'Bike store sales' using NumPy, Pandas, and Matplotlib in Python 3.",
    img: "/project4.png",
    iconLists: ["/python.png"],
    link: "https://colab.research.google.com/github/UsserJack/Data_Analysis_A/blob/main/data_analysis_a.ipynb"
  },
  {
    id: 9,
    title: "Demographic Data Analyzer",
    des: "Analysis of demographic data using Pandas on the 'Adult Data' set to create a function for this purpose.",
    img: "/project6.png",
    iconLists: ["/python.png"],
    link: "https://colab.research.google.com/github/UsserJack/Analizador-de-datos-demograficos/blob/main/Demographic_Data_Analyzer.ipynb"
  }
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies"
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies"
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies"
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies"
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies"
  }
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg"
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg"
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg"
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg"
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg"
  }
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg"
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg"
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg"
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg"
  }
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg"
  },
  {
    id: 2,
    img: "/twit.svg"
  },
  {
    id: 3,
    img: "/link.svg"
  }
];

export const skills = [
  {
    id: 1,
    name: "Git",
    img: "/git.svg"
  },
  {
    id: 2,
    name: "Docker",
    img: "/dock.svg"
  },
  {
    id: 3,
    name: "GitHub",
    img: "/gitwhite.png"
  },
  {
    id: 4,
    name: "Grafana",
    img: "/grafana.png"
  },
  {
    id: 5,
    name: "Html",
    img: "/html.png"
  },
  {
    id: 6,
    name: "Java",
    img: "/java.png"
  },
  {
    id: 7,
    name: "JavaScript",
    img: "/js.png"
  },
  {
    id: 8,
    name: "Kafka",
    img: "/kafka.png"
  },
  {
    id: 9,
    name: "KeyCloak",
    img: "/Keycloak.png"
  },
  {
    id: 10,
    name: "MongoDB",
    img: "/mongodb.png"
  }
];

export const skills_2 = [
  {
    id: 11,
    name: "MySql",
    img: "/mysql.png"
  },
  {
    id: 12,
    name: "NextJs",
    img: "/next.png"
  },
  {
    id: 13,
    name: "OpenApi",
    img: "/openapi.png"
  },
  {
    id: 14,
    name: "PostgreSQL",
    img: "/postger.png"
  },
  {
    id: 15,
    name: "Python",
    img: "/python.png"
  },
  {
    id: 16,
    name: "ReactJs",
    img: "/react.png"
  },
  {
    id: 17,
    name: "Spring Boot",
    img: "/spring-boot.png"
  },
  {
    id: 18,
    name: "Swagger",
    img: "/swagger.png"
  }
];

export const skills_3 = [
  {
    id: 19,
    name: "TailWind",
    img: "/tailwind.png"
  },
  {
    id: 20,
    name: "TypeScript",
    img: "/ts.png"
  },
  {
    id: 21,
    name: "ZipKin",
    img: "/zipkin.png"
  },
  {
    id: 22,
    name: "CSS",
    img: "/css.png"
  },
  {
    id: 23,
    name: "Jenkins",
    img: "/jenkins.svg"
  }
];
