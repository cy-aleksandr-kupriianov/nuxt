<template>
  <div id="app">
    <!-- Wrap <router-view> in <Transition> for animations -->
    <router-view v-slot="{ Component }">
      <Transition name="fade">
        <component :is="Component" />
      </Transition>
    </router-view>
  </div>
</template>

<style>
/* Navigation styling */
nav {
  margin: 20px;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: blue;
}
nav a:hover {
  text-decoration: underline;
}

/* Fade transition styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>