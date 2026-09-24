<template>
  <div class="app-shell">
    <nav class="main-nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/lost-and-found">Lost and Found</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>

    <main class="page-content">
      <RouterView />
    </main>
  </div>
</template>