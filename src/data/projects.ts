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
        "Nova continues to evolve. The workspace above shows its current interface. A deeper technical walkthrough and repository links will be added to this case study."
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
        "Problem",
        "Software issues need a shared place to be recorded and tracked instead of getting lost in scattered notes. For this school project at Ranken Technical College, the challenge was to build an issue tracker that connects a usable web interface to a REST API and stores issue data beyond a single browser session."
      ],
      [
        "My Role",
        "I worked across the MERN stack, connecting the React interface to the Node.js and Express backend and MongoDB persistence. My work included building the frontend, implementing the REST API, and deploying the application. This project gave me practice following data from the browser through the server to the database."
      ],
      [
        "What I Built",
        "I built and deployed a full-stack issue tracker using React, Node.js, Express, and MongoDB. The React frontend communicates with the Express REST API, while MongoDB provides persistent storage for issue data. The live application is hosted on Google Cloud Run and is available through the link above."
      ],
      [
        "What I Will Improve",
        "The application is still in development, and completing the unfinished functionality (mainly the react frontend) is my first priority. I would then improve form validation and make loading, empty, and error states clearer so users know whether an action succeeded. I would also add end-to-end tests for the main issue workflows to check that the interface, API, and database work together reliably."
      ]
    ]
  }
};
export type ProjectKey = keyof typeof projects;
