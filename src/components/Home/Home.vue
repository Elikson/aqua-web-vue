<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from 'vue-router'
import TabMenu from 'primevue/tabmenu';
import Button from 'primevue/button'
import { useLoginStore } from "@/stores/login";
import router from "@/router";

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        to: '/home'
    },
    {
        label: 'Dispositivos',
        icon: 'pi pi-fw pi-calendar',
        to: '/devices'
    },
    {
        label: 'Usuários',
        icon: 'pi pi-fw pi-pencil',
        to: '/users'
    }
]);

function clickLogout(){
    const loginStore = useLoginStore()
    loginStore.change(false)
}

</script>

<template lang="">
    <div id="home">
        <div class="card">
            <div class="header-division">
                <TabMenu id="menu" :model="items">
                    
                </TabMenu>
                <Button icon="pi pi-sign-out" outlined rounded aria-label="Logout" @click="clickLogout()" />
            </div>
            
            <RouterView />
        </div>
    </div>
</template>

<style>
    #home {
        padding: 16px;
        background-color: #F5F6FA;
    }
    .header-division {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    #menu {
        width: 100%;
    }
</style>