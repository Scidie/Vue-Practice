<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

let loginInput = ref("")
let passwordInput = ref("")
let passwordConfirm = ref("")

let isErrorMessageVisible = ref(false)
let errorMessages = ["Passwords doesn't match", "Incorrect password", "Incorrect login"]
let errorMessage = ref("")

const register = (login, password, passwordConfirm) => {
  if (password !== passwordConfirm) {
    errorMessage.value = errorMessages[0]
    isErrorMessageVisible.value = true
  }
}

</script>

<template>
  <outer-wrapper>
    <form-section id="form-section">
      <h1 class="text-center">Enter your credentials</h1>
      <p class="text-red-500 text-center" :class="{'hidden': !isErrorMessageVisible}">{{ errorMessage }}</p>
      <input v-model="loginInput" placeholder="Enter your login">
      <input v-model="passwordInput" placeholder="Enter your password">
      <input v-model="passwordConfirm" placeholder="Confirm your password">
      <button id="register-button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-[200px] m-10 p-5" @click="register(loginInput, passwordInput, passwordConfirm)">register</button>
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

#form-section > *:not(h1, p, button) {
  width: 100%;
  margin: 10px;
  border: solid black 1px;
  padding: 5px;
  border-radius: 2px;
}

.hidden {
  display: none;
}

#register-button {
  margin: 10px;
  padding: 5px;
  border-radius: 40px; 
}

h1 {
  padding: 15px;
}
</style>