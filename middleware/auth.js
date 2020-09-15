// Routing authorization middleware

export default function({ store, redirect, route }) {
  // Front-end routing authentication
  if (!store.state.token && route.path !== '/login') {
    return redirect('/login')
  } else if (store.state.token && route.path === '/login') {
    // After authorization, the login page jumps directly to the home page
    return redirect('/')
  }
}
