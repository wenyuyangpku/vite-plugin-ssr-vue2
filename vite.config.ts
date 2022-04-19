import { createVuePlugin } from 'vite-plugin-vue2'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [createVuePlugin(), ssr()],
}

export default config
