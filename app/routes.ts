import { type RouteConfig, route, index } from '@react-router/dev/routes'

export default [index('routes/home.tsx'), route('api/webhooks', 'routes/webhooks.ts')] satisfies RouteConfig
