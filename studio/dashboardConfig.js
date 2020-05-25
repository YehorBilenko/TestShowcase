export default {
  widgets: [
    {
      name: "sanity-tutorials",
      options: {
        templateRepoId: "sanity-io/sanity-template-gatsby-portfolio",
      },
    },
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId: "5ecc1115c16d8435a150e4c6",
                  title: "Sanity Studio",
                  name: "lightdev-portfolio-studio",
                  apiId: "3e38d238-ea4d-430d-bac2-858588edf243",
                },
                {
                  buildHookId: "5ecc12b751f1bcd7fa610e9a",
                  title: "Portfolio Website",
                  name: "lightdev-portfolio",
                  apiId: "0a4ed446-642b-46c5-a2df-fd7754a5ab70",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/LightDevGames/sanity-gatsby-portfolio",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://lightdevgames.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: { title: "Recent projects", order: "_createdAt desc", types: ["sampleProject"] },
      layout: { width: "medium" },
    },
  ],
};
