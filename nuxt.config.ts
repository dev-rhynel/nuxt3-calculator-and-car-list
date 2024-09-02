export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {enabled: false},
  runtimeConfig: {
    app: {
      nodeEnv: process.env.NODE_ENV || 'development'
    }
  },
  ssr: true,
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/google-fonts',
    'nuxt-lazy-load',
    '@pinia/nuxt'
  ],
  plugins: ['@/plugins/mirage'],
  css: ['@/assets/scss/app.scss'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: 'shad',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  googleFonts: {
    families: {
      Poppins: [100, 300, 400, 500, 700, 900]
    }
  },
  lazyLoad: {
    // These are the default values
    images: true,
    videos: true,
    audios: true,
    iframes: true,
    native: false,
    directiveOnly: false,

    // To remove class set value to false
    loadingClass: 'isLoading',
    loadedClass: 'isLoaded',
    appendClass: 'lazyLoad',

    observerConfig: {
      // See IntersectionObserver documentation
    }
  },
  devServer: {
    port: 2000
  }
})
