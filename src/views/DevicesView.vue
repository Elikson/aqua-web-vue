<template lang="">
    <div>
        <DataTable :value="devices" tableStyle="min-width: 50rem">
            <Column field="name" header="Nome"></Column>
            <Column field="code" header="Código"></Column>
            <Column field="location" header="Localização"></Column>
            <Column field="lastUpdate" header="Última atualização"></Column>
            <Column field="status" header="Status"></Column>
        </DataTable>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const devices = ref([
    { name: "Aqua 01", code: 235407180, location: "Cond. V. Jat. - Bl. 10, 304", lastUpdate: "17:22 - 06/04/2023", status: "Ativo" },
    { name: "Aqua 02", code: 235407181, location: "Cond. V. Jat. - Bl. 10, 404", lastUpdate: "13:22 - 06/04/2023", status: "Ativo" },
    { name: "Aqua 03", code: 235407182, location: "Cond. V. Jat. - Bl. 10, 504", lastUpdate: "12:22 - 06/04/2023", status: "Inativo" },
])

</script>

<style>
#app {
  background-color: #F5F6FA;
}

.p-datatable {
    width: 100%;
    margin-top: 20px;
}

#content-devices {
    display: flex;
    flex-direction: row;
}
</style>