export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ecc1115c16d8435a150e4c6',
                  title: 'Sanity Studio',
                  name: 'lightdevgames-admin',
                  apiId: 'f0ff87f9-d730-4002-881f-969f90388e61'
                },
                {
                  buildHookId: '5ecc12b751f1bcd7fa610e9a',
                  title: 'Portfolio Website',
                  name: 'lightdevgames',
                  apiId: 'e89a57bb-c53e-44a2-8c52-b444ec723b1a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/LightDevGames/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://lightdev.io',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
