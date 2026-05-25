<template>
    <header class="app-header">
        <!-- Lado esquerdo: Logo e Título -->
        <div class="header-left">
            <div class="logo-container">
                <span class="logo-icon">💰</span>
                <div class="logo-text">
                    <h1 class="app-title">Sistema Financeiro</h1>
                    <p class="app-subtitle">Controle Pessoal</p>
                </div>
            </div>
        </div>

        <!-- Centro: Informações (opcional) -->
        <div class="header-center">
            <span class="current-date">{{ currentDate }}</span>
        </div>

        <!-- Lado direito: Usuário e ações -->
        <div class="header-right">
            <!-- Notificações (opcional) -->
            <button class="icon-button" title="Notificações">
                🔔
            </button>

            <!-- Usuário -->
            <div class="user-info">
                <div class="user-avatar">A</div>
                <div class="user-details">
                    <span class="user-name">Aline</span>
                    <span class="user-role">Administrador</span>
                </div>
            </div>

            <!-- Logout (opcional) -->
            <button class="icon-button" title="Sair">
                🚪
            </button>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Data atual
const currentDate = ref('')

const updateDate = () => {
    const now = new Date()
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    currentDate.value = now.toLocaleDateString('pt-BR', options)
}

onMounted(() => {
    updateDate()
})
</script>

<style scoped>
/* Container principal do header */
.app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1.5rem;
    background: hsl(var(--white));
    border-bottom: 1px solid hsl(var(--border-default));
    box-shadow: 0 4px 12px 0 rgb(0 0 0 / 0.08);
    min-height: 4rem;
    position: sticky;
    top: 0;
    z-index: 100;
}

/* ========== LADO ESQUERDO - LOGO ========== */
.header-left {
    display: flex;
    align-items: center;
}

.logo-container {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.logo-icon {
    font-size: 2rem;
}

.logo-text {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
}

.app-title {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-bold);
    color: hsl(var(--primary-color));
    margin: 0;
    line-height: 1;
}

.app-subtitle {
    font-size: var(--font-size-xs);
    color: hsl(var(--text-muted));
    margin: 0;
    line-height: 1;
}

/* ========== CENTRO - DATA ========== */
.header-center {
    display: flex;
    align-items: center;
}

.current-date {
    font-size: var(--font-size-sm);
    color: hsl(var(--text-secondary));
    font-weight: var(--font-weight-medium);
    text-transform: capitalize;
}

/* ========== LADO DIREITO - USUÁRIO ========== */
.header-right {
    display: flex;
    align-items: center;
    gap: 1rem;
}

/* Botões de ícone */
.icon-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    background: transparent;
    border: none;
    border-radius: var(--radius-md);
    cursor: pointer;
    font-size: 1.25rem;
    transition: background 0.2s ease;
}

.icon-button:hover {
    background: hsl(var(--gray-100));
}

/* Informações do usuário */
.user-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 0.75rem;
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: background 0.2s ease;
}

.user-info:hover {
    background: hsl(var(--gray-50));
}

/* Avatar do usuário */
.user-avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    background: hsl(var(--primary-color));
    color: hsl(var(--white));
    border-radius: 50%;
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-sm);
}

/* Detalhes do usuário */
.user-details {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
}

.user-name {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semibold);
    color: hsl(var(--text-primary));
    line-height: 1;
}

.user-role {
    font-size: var(--font-size-xs);
    color: hsl(var(--text-muted));
    line-height: 1;
}

/* ========== RESPONSIVIDADE ========== */
@media (max-width: 768px) {
    .app-header {
        padding: 0.5rem 1rem;
    }

    /* Esconder data no mobile */
    .header-center {
        display: none;
    }

    /* Esconder detalhes do usuário no mobile */
    .user-details {
        display: none;
    }

    .app-subtitle {
        display: none;
    }
}
</style>
