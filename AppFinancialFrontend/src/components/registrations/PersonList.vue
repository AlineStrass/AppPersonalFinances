<template>
    <div>
        <p class="title">Pessoas cadastrastradas</p>
        <CButton label="adicionar" severity="secondary" />
    </div>

    <CDataTable :value="people" tableStyle="min-width: 50rem">
        <CColumn field="name" header="Nome"></CColumn>
        <CColumn field="lastname" header="Sobrenome"></CColumn>
        <CColumn field="cpf" header="CPF"></CColumn>
        <CColumn>
            <template #body="slotProps">
                <CButton label="editar" severity="secondary" @click="editRegistration(slotProps.data)" />
            </template>
        </CColumn>
    </CDataTable>
</template>

<script setup lang="ts">

const people = [
    { name: 'Adam', lastname: 'Smith', cpf: '123.456.789-00' },
    { name: 'Amalie', lastname: 'Johnson', cpf: '987.654.321-00' },
    { name: 'Estefanía', lastname: 'García', cpf: '456.789.123-00' },
    { name: 'Miyu', lastname: 'Tanaka', cpf: '321.654.987-00' },
    { name: 'Sophie', lastname: 'Martin', cpf: '654.987.321-00' },
    { name: 'Hanna', lastname: 'Schmidt', cpf: '789.123.456-00' }
];

function editRegistration(person: typeof people[0]) {
    console.log('Editar:', person);
    // aqui emitir um evento, abrir tela de edição.
}


</script>