<template>
  <div class="card flex justify-center">
    <PanelMenu :model="items" class="w-full md:w-80 sidebar" />
  </div>

  <!-- <aside class="sidebar">
    <nav>
      <ul>
        <li>
          <RouterLink to="/" class="menu-item">
            Início
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/contas-pagar" class="menu-item">
            Contas a Pagar
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/contas-receber" class="menu-item">
            Contas a Receber
          </RouterLink>
        </li>
      </ul>
    </nav>
  </aside> -->
</template>

<script setup lang="ts">
import PanelMenu from 'primevue/panelmenu'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()


const items = ref([
  {
    label: 'Início',
    command: () => router.push('/'),
  },
  {
    label: 'Contas a Pagar',
    command: () => router.push('/contas-pagar'),
  },
  {
    label: 'Contas a Receber',
    command: () => router.push('/contas-receber'),
  },
])
</script>

<style scoped>
.sidebar {
  color: var(--p-blue-500);
}

/* .sidebar {
  width: 250px;
  min-width: 250px;
  background: hsl(var(--primary-color));
  padding: 1.25rem;
  overflow-y: auto;
}

.menu-item {
  padding: 12px;
  color: hsl(var(--white-color));
  text-decoration: none;
  border-radius: 4px;
  margin-bottom: 8px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin-bottom: 0.5rem;
}

.menu-item {
  display: block;
  padding: 0.75rem;
  color: hsl(var(--white));
  text-decoration: none;
  border-radius: 0.375rem;
  transition: background 0.2s ease;
}

.menu-item:hover {
  background: hsl(var(--primary-dark));
}

.menu-item.router-link-active {
  background: hsl(var(--primary-dark));
  font-weight: var(--font-weight-semibold);
} 
*/
</style>
