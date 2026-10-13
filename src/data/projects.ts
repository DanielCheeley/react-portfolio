export const projects = {
  nova: {
    name: "Nova",
    number: "01",
    category: "AI APPLICATION · PERSONAL PROJECT",
    summary: "An AI assistant built to do more than talk.",
    description:
      "An ongoing project exploring conversational interfaces, tool use, and the full-stack systems that turn a conversation into useful actions.",
    stack: ["React", "TypeScript", "Node.js", "Express"],
    sections: [
      [
        "The idea",
        "Build an assistant that connects a conversational interface to useful tools and actions. Nova is an ongoing exploration of how those pieces work together."
      ],
      [
        "Across the stack",
        "The project brings together a React frontend and a TypeScript / Express backend. Work spans the chat experience, streamed responses, and coordination between the assistant and its tools."
      ],
      [
        "A work in progress",
        "Nova continues to evolve. A deeper technical walkthrough, real screenshots, and repository links will be added to this case study."
      ]
    ]
  },
  tracker: {
    name: "Issue tracker",
    number: "02",
    category: "FULL-STACK APPLICATION · SCHOOL PROJECT",
    summary: "From a React interface to a complete REST API.",
    description:
      "A deployed MERN application for tracking issues, connecting a web interface to an Express API and MongoDB persistence.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    sections: [
      [
        "The idea",
        "Create a deployed issue tracker with a full REST API as part of my school work at Ranken Technical College."
      ],
      [
        "Across the stack",
        "The application uses MongoDB, Express, React, and Node.js. It connects a frontend experience to API endpoints and persistent data."
      ],
      [
        "Current state",
        "The project is deployed and still in development, with parts of the functionality unfinished. Screenshots, deployment links, and a precise breakdown of completed features will be added next."
      ]
    ]
  }
};
export type ProjectKey = keyof typeof projects;
