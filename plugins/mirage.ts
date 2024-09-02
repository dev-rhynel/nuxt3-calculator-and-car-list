import {defineNuxtPlugin} from '#app'
import {makeServer} from '@/mirage/config'

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig()

  if (config.app.nodeEnv == 'development') {
    const server = makeServer()
    nuxtApp.provide('mirageServer', server)
  }
})
