<template>
    <h2>Sign In</h2>
    <form class="flex flex-column gap-3">
        <Message v-if="authStore.error" severity="warn">{{ authStore.error }}</Message>
        <div class="p-inputgroup flex-1">
        <span class="p-inputgroup-addon">
            <i class="pi pi-user"></i>
        </span>
        <InputText type="email" v-model="email" placeholder="Your Email" />
        </div>
        <div class="p-inputgroup flex-1">
        <span class="p-inputgroup-addon">
            <i class="pi pi-at"></i>
        </span>
        <InputText type="password" v-model="password" placeholder="Password" />
        </div>
        <Loader v-if="authStore.loader"/>
        <div v-else class="flex flex-column gap-3">
        <Button label="Signin" @click="signin"/>
        <span>Are you not registered yet? <router-link to="/signup">Sign up</router-link></span>
        </div>
    </form>
</template>

<script setup>
// import {Button, InputText } from 'primevue'
</script>

<style lang="">
    
</style>