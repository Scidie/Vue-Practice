<script setup>
import { computed } from 'vue';
import store from '../store'
import LoginForm from '../components/loginForm.vue';

const meals = computed(() => store.state.meals)
</script>

<template>
  <h1>{{ meals }}</h1>
  <links-section>
    <router-link to="/LoginPage">Go to Logging Page</router-link>
    <router-link to="/RegistrationPage">Go to Registration Page</router-link>
  </links-section>
</template>

<style>
links-section {
  
}
</style>