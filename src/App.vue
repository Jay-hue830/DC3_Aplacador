<template>
  <div>
    <nav>
      <RouterLink to="/">Home Page</RouterLink>
      |
      <RouterLink to="/announcement">About Page</RouterLink>
      |
      <RouterLink to="/lost-and-found">Lost and Found Page</RouterLink>
    </nav>
    <br>
  <RouterView />
  </div>
</template>