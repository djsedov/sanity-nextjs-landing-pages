export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5e43d22d02ea5b118c3bcc86',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-s2sj8rkt',
                  apiId: '5303c990-a82a-437b-b37a-b80fb4b0abd2'
                },
                {
                  buildHookId: '5e43d22d4fb75d4b89d5bf74',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-b63c8dbp',
                  apiId: '9796a4d9-9977-4353-a233-fa1274bdda65'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/djsedov/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-b63c8dbp.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
