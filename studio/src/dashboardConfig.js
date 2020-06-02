export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ed6230fec7ef9bfac77e72b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-gtr96dxu',
                  apiId: 'b37b3b38-b19a-48d3-8aa4-521b977f7fb7'
                },
                {
                  buildHookId: '5ed6230fec7ef9dd3877e67b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-gjcfxhcr',
                  apiId: '726a2c67-6183-4d0c-a1c6-dae11249a07d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rogernomen/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-gjcfxhcr.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
