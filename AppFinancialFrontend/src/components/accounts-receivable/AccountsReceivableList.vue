<template>
    lista de contas a receber

    <CDataTable :value="accounts" v-model:selection="selectedAccounts" tableStyle="min-width: 50rem">

        <template #header>
            <div class="flex flex-wrap items-center justify-between gap-2">
                <span class="text-xl font-bold">Contas a receber</span>
                <CButton icon="pi pi-plus" rounded size="small" severity="contrast" aria-label="plus" />
            </div>
        </template>

        <CColumn selectionMode="multiple" headerStyle="width: 3rem" />
        <CColumn field="duoDate" header="Vencimento">
            <template #body="{ data }">
                {{ formatDate(data.duoDate) }}
            </template>
        </CColumn>

        <CColumn v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" />

        <CColumn field="amount" header="Valor">
            <template #body="{ data }">
                {{ formatCurrency(data.amount) }}
            </template>
        </CColumn>

    </CDataTable>

    <div class="card flex justify-center">
        <CButton label="Baixar" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import "primeicons/primeicons.css";
import { formatCurrency, formatDate } from '@/utils/utils';
import type { AccountsReceivableListModel } from '@/models/frontend/AccountsReceivableListModel';

const selectedAccounts = ref([]);

const accounts = [
    { duoDate: '2023-10-01', code: "10211", name: 'Despesa 1', supplier: 'Fornecedor 1', costCenter: 'Conta 1', amount: 100.00 },
    { duoDate: '2023-10-02', code: "22548", name: 'Despesa 2', supplier: 'Fornecedor 2', costCenter: 'Conta 2', amount: 200.77 },
    { duoDate: '2023-10-03', code: "33659", name: 'Despesa 3', supplier: 'Fornecedor 3', costCenter: 'Conta 3', amount: 300.50 },
];

const columns = [
    { field: 'code', header: 'Código' },
    { field: 'name', header: 'Despesa' },
    { field: 'supplier', header: 'Fornecedor' },
    { field: 'costCenter', header: 'Centro de Custos' },
];

</script>