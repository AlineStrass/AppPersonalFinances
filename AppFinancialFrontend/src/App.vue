<!-- Layout fixo - sempre visível -->
<template>
  <div class="app-container">
    <AppHeader></AppHeader>

    <div class="app-body">
      <AppSidebar></AppSidebar>

      <main class="content-area">
        <!-- O <RouterView /> é a "área de conteúdo" que muda conforme a rota -->
        <RouterView />

      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue';
import AppSidebar from '@/components/layout/AppSidebar.vue';


</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-body {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.content-area {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  background: hsl(var(--bg-secondary));
}
</style>
