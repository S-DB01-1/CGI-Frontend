<template>
  <div>
    <h1>Auth dev page</h1>
    <h2>Auth store</h2>
    <table class="border-collapse border border-2 border-black">
      <tr>
        <td class="p-2 border border-black">IsAuthenticated</td>
        <td class="p-2 border border-black">{{ IsAuthenticated }}</td>
      </tr>
      <tr>
        <td class="p-2 border border-black">Token</td>
        <td class="p-2 border border-black">{{ Token }}</td>
      </tr>
      <tr>
        <td class="p-2 border border-black">CurrentUser</td>
        <td class="p-2 border border-black">{{ CurrentUser }}</td>
      </tr>
    </table>
    <h2>Actions</h2>
    <label>Username:</label>
    <input v-model="username"><br />
    <label>Password:</label>
    <input v-model="password"><br />
    <label>Remember session:</label>
    <input v-model="useLocalStorage" type="checkbox" :value="true"><br />
    <button @click="login" class="m-4 p-4 px-12 border-2 bg-gray-200">Login</button>
    <button @click="logout" class="m-4 p-4 px-12 border-2 bg-gray-200">Logout</button>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useAuthStore} from "@/stores/Auth";
import {storeToRefs} from "pinia";

const store = useAuthStore()

const { Token, CurrentUser, IsAuthenticated } = storeToRefs(store)

const username = ref('john@doe.com')
const password = ref('1234')
const useLocalStorage = ref(false)

function login() {
  store.Login(username.value, password.value, useLocalStorage.value);
}

function logout() {
  store.Logout();
}
</script>
