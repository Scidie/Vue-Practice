<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue';

const store = useStore()
const data = computed(() => store.state.data);

let loginInput = ref("")
let passwordInput = ref("")
const router = useRouter()
const url = "http://localhost:3000/login"
const message = ref("")


const login = async () => {
  await store.dispatch('login', {username: loginInput.value, password: passwordInput.value});
  if (store.state.isLoggedIn) {
    console.log(store.getters.getData)
    // router.push('AccountPage')
  }
};

</script>

<template>
  <outer-wrapper>
    <form-section id="form-section">
      <h1 class="text-center">Enter your credentials</h1>
      <input v-model="loginInput" placeholder="Enter your login">
      <input v-model="passwordInput" placeholder="Enter your password">
      <button id="login-button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-[200px] m-10 p-5"
        @click="login">login</button>
    </form-section>
  </outer-wrapper>
</template>

<style>
outer-wrapper {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}

form-section {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#form-section>*:not(h1, p, button) {
  width: 100%;
  margin: 10px;
  border: solid black 1px;
  padding: 5px;
  border-radius: 2px;
}

.hidden {
  display: none;
}

#login-button {
  margin: 10px;
  padding: 5px;
  border-radius: 40px;
}
</style>