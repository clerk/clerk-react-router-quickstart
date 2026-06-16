import { redirect } from 'react-router'
import { getAuth } from '@clerk/react-router/server'
import type { Route } from './+types/protected'

export async function loader(args: Route.LoaderArgs) {
  // Use `getAuth()` to read the session on the server and protect this route.
  // Unlike the `<Show>` component, which only controls what renders, this is
  // the real access check: a signed-out user who navigates here is redirected.
  const { isAuthenticated, userId } = await getAuth(args)

  if (!isAuthenticated) {
    return redirect('/')
  }

  return { userId }
}

export default function Protected({ loaderData }: Route.ComponentProps) {
  return (
    <main className="flex items-center justify-center px-4 py-8">
      <p>
        Welcome! Your user ID is <code>{loaderData.userId}</code>.
      </p>
    </main>
  )
}
