<script lang="ts" setup>
import router from '../router'
import { PrimeIcons } from 'primevue/api';
import {
    useLoginStore
} from '@/stores/login'

const loginStore = useLoginStore()

function navigate() {
    loginStore.change(true)
}

function loggedStatus() {
    return loginStore.logged
}
</script>

<template lang="">
<div class="container">
    <div class="content-left">
        <div class="inner-content-left">
            <img id="logo" />

            <label for="email">E-mail</label>
            <i class="p-input-icon-left">
                <i class="pi pi-envelope" style="color: slateblue; z-index: 1"></i>
                <InputText v-model="value1" id="email" placeholder="Digite aqui seu e-mail" />
            </i>

            <label for="password">Senha</label>
            <i class="p-input-icon-left">
                <i class="pi pi-lock" style="color: slateblue; z-index: 1"></i>
                <InputText v-model="value1" id="password" placeholder="Digite aqui sua senha" />
            </i>

            <Button id="login" label="Entrar"></Button>

            <div id="keep-connect" class="flex align-items-center">
                <Checkbox v-model="pizza" inputId="keep-connect" name="pizza" value="Cheese" />
                <label for="keep-connect" class="ml-2"> Manter conectado </label>
            </div>

            <Button id="recover" label="Esqueci a senha" severity="secondary" outlined />

            <Button id="demonstration-login" severity="secondary" @click="navigate" label="Acessar modo de demonstração" outlined />

            <!-- <div>{{ 'estado' + loggedStatus() }}</div> -->
        </div>
    </div>

    <div class="content-right">
        <div class="inner-content-right">
            <div id="title">Bem vindo</div>
            <div id="subtitle">Faça login para começar a economizar!</div>
            <div id="line" ></div>
            <div id="description">Acesse nosso dashboard agora mesmo!</div>
            <div id="demonstration">
                <Button id="demonstration-button" @click="navigate" label="Acessar modo de demonstração" outlined />
            </div>
        </div>
    </div>

</div>
</template>

<style>
html,
body,
#app {
    height: 100%;
    font-family: 'Montserrat';
}

#app {
    padding: 0px;
}

.p-button-label {
    font-family: 'Montserrat';
    font-size: 14px;
    font-weight: normal;
}

.container {
    height: 100%;
    display: flex;
    align-items: space-between;
}

.content-left {
    display: flex;
    width: -webkit-fill-available;
    justify-content: center;
    align-items: center;
}

.inner-content-left {
    display: flex;
    flex-direction: column;
    width: 55%;
}

.content-right {
    display: flex;
    width: -webkit-fill-available;
    background-image: url('@/assets/images/background-right-side-login.png');
    background-size: cover;
    background-position-y: bottom;
    justify-content: center;
    align-items: center;
}

#logo {
    content: url('@/assets/images/logo.png');
    width: 90px;
    display: flex;
    justify-self: center;
    align-self: center;
    margin-bottom: 32px;
}

#access-text {
    font-size: 20px;
}

#email,
#password {
    width: 100%;
    margin-bottom: 12px;
}

#login {
    margin-top: 20px;
    background-color: #1E2A4C;
}

#recover {
    margin-top: 52px;
}

#demonstration-button {
    margin-top: 38px;
    color: white;
}

#keep-connect {
    margin-top: 22px;
}

.inner-content-right {
    display: flex;
    flex-direction: column;
    text-align: start;
    padding: 20px;
}

#title{
    font-weight: 400;
    font-size: 34px;
    color: #DBDBDB;
}

#subtitle{
    color: white;
    font-weight: 700;
    font-size: 36px;
    max-width: 500px;
}

#line{
    background-color: #DBDBDB;
    width: 38%;
    height: 0.5px;
    margin-top: 22px;
    margin-bottom: 42px;
}

#description{
    color: white;
    font-weight: 500;
    size: 24px;
}

#demonstration-login {
    display: none;
}

@media only screen and (max-width: 700px) {
    .content-right {
        display: none;
    }

    .inner-content-left {
        display: flex;
        flex-direction: column;
        width: 85%;
    }

    #demonstration-login {
        display: flex;
        margin-top: 32px;
        width: 100%;
    }
}
</style>
