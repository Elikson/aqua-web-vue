<template lang="">
    <div>
        <DataTable :value="users" tableStyle="min-width: 50rem">
            <Column field="name" header="Nome"></Column>
            <Column field="email" header="E-mail"></Column>
            <Column field="telephone" header="Telefone"></Column>
            <Column field="profile" header="Papel"></Column>
            <Column field="status" header="Status"></Column>
        </DataTable>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const users = ref([{ name: "Elikson Tavares", email: "Elikson.tavares@aquaapia.cpom.br", telephone: 992488234, profile: "Desenvolvedor", status: "Ativo" },
{ name: "Bruno Alencar", email: "Bruno.alencar@aquaapia.cpom.br", telephone: 984321198, profile: "Adminstrador", status: "Ativo"}])

</script>

<style>
.p-datatable {
    width: 100%;
    margin-top: 20px;
}

#content-devices {
    display: flex;
    flex-direction: row;
}
</style>