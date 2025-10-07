import type { Config } from '@react-router/dev/config'

export default {
  // Config options

  // Server-side render by default
  // To enable SPA mode, set this to `false`
  ssr: true,
  future: {
    v8_middleware: true,
  },
} satisfies Config
