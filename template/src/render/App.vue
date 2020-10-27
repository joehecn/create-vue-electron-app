<!--
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
-->
<template>
  <router-link to="/">Go to Home</router-link>
  <br>
  <router-link to="/about">Go to About</router-link>
  <br>
  <router-view></router-view>
</template>
