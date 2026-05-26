<template>
    <div class="card">
        <CTabs :value="$route.path">
            <CTabList>
                <CTab v-for="tab in items" :key="tab.label" :value="tab.route">
                    <router-link v-if="tab.route" v-slot="{ href, navigate }" :to="tab.route" custom>
                        <a :href="href" @click="navigate" class="flex items-center gap-2 text-inherit">
                            <span>{{ tab.label }}</span>
                        </a>
                    </router-link>
                </CTab>
            </CTabList>
        </CTabs>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const $route = useRoute();

const items = ref([
    { route: '/cadastros/pessoa', label: 'Pessoa' },
    { route: '/cadastros/fornecedor', label: 'Fornecedor' },
    { route: '/cadastros/conta-bancaria', label: 'Conta Bancária' },
    { route: '/cadastros/centro-custo', label: 'Centro de Custo' },
    { route: '/cadastros/metodo-pagamento', label: 'Método de Pagamento' },
]);
</script>