export default {
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Boukhouima Renting Cars',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/assets/logo.svg' },
        { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css' }, // Bootstrap 3 CDN
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' }, // Font Awesome CDN
        {
          href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
          rel: 'stylesheet',
        },
      ],
      script: [
        { src: 'https://code.jquery.com/jquery-3.6.0.min.js' }, // jQuery for Bootstrap
        { src: 'https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js' } // Bootstrap JS
      ]
    }
  },

  // Global CSS
  css: [
    // Add your global CSS files here
  ],

  // Modules
  buildModules: [
    // Add any build modules here
  ],

  modules: [
    // Add Nuxt modules here
  ],

  // Build Configuration
  build: {
    // Add custom build configurations here
  },

  components: true,
}
