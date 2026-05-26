<template>
    <div>
        <PersonList @editar="editRegistration" />
    </div>
   
    <CDialog v-model:visible="openModal" header="Editar Pessoa" modal>
        <NewPersonForm :dataPerson="selectedPerson" />
    </CDialog>



</template>
<script setup lang="ts">
import NewPersonForm from '@/components/registrations/NewPersonForm.vue';
import PersonList from '@/components/registrations/PersonList.vue';
import type { DataPersonModel } from '@/models/frontend/DataPersonModel';
import { ref } from 'vue';


const openModal = ref(false);
const selectedPerson = ref<DataPersonModel | null>(null);

function editRegistration(person: DataPersonModel) {
    console.log('Editar:', person);

    selectedPerson.value = person;
    openModal.value = true;
    //identificar dados do campo clicado
    // emitir um evento, 
    // abrir tela de edição.
}
</script>