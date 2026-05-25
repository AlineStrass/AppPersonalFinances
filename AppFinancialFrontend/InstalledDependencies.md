# Dependências Instaladas

## Dependências Principais (usadas em produção)

| Pacote | Função |
|---|---|
| **vue** `^3.5.27` | O framework JavaScript principal do projeto. Permite criar interfaces reativas com componentes |
| **vue-router** `^5.0.1` | Gerenciador de rotas do Vue. Controla a navegação entre páginas (ex: `/home`, `/contas`) sem recarregar a página |
| **pinia** `^3.0.4` | Gerenciador de estado global. Permite compartilhar dados entre componentes (ex: usuário logado, lista de transações) |

---

## Ferramentas de Build e Desenvolvimento

| Pacote | Função |
|---|---|
| **vite** `^7.3.1` | Ferramenta de build e servidor de desenvolvimento. Compila e serve o projeto em velocidade muito alta |
| **@vitejs/plugin-vue** `^6.0.3` | Plugin do Vite para entender e processar arquivos `.vue` |
| **vite-plugin-vue-devtools** `^8.0.5` | Painel de debug no navegador específico para Vue (mostra componentes, estado do Pinia, rotas, etc.) |
| **typescript** `~5.9.3` | Adiciona tipagem estática ao JavaScript. Ajuda a evitar erros em tempo de desenvolvimento |
| **vue-tsc** `^3.2.4` | Verificador de tipos TypeScript específico para arquivos `.vue` |
| **npm-run-all2** `^8.0.4` | Permite rodar múltiplos scripts npm em paralelo ou em sequência (usado no comando `build`) |

---

## Testes

| Pacote | Função |
|---|---|
| **vitest** `^4.0.18` | Framework de testes unitários. Testa funções, stores do Pinia, lógica de componentes |
| **@vue/test-utils** `^2.4.6` | Utilitários para testar componentes Vue (montar, simular cliques, verificar o que renderiza) |
| **jsdom** `^27.4.0` | Simula o DOM do navegador para rodar testes unitários no Node.js sem abrir um browser |
| **@types/jsdom** `^27.0.0` | Tipagens TypeScript para o jsdom |
| **@playwright/test** `^1.58.1` | Framework de testes end-to-end (E2E). Abre um navegador real e simula o uso do sistema como um usuário faria |

---

## Linting e Formatação de Código

| Pacote | Função |
|---|---|
| **eslint** `^9.39.2` | Analisa o código em busca de erros, más práticas e inconsistências |
| **oxlint** `~1.42.0` | Linter extremamente rápido (escrito em Rust) que complementa o ESLint |
| **prettier** `3.8.1` | Formata o código automaticamente de forma padronizada (indentação, aspas, vírgulas, etc.) |
| **eslint-config-prettier** `^10.1.8` | Desativa regras do ESLint que conflitam com o Prettier |
| **eslint-plugin-vue** `~10.7.0` | Regras do ESLint específicas para arquivos `.vue` |
| **eslint-plugin-oxlint** `~1.42.0` | Integração do oxlint com o ESLint |
| **eslint-plugin-playwright** `^2.5.1` | Regras do ESLint para arquivos de teste do Playwright |
| **@vue/eslint-config-typescript** `^14.6.0` | Configuração base do ESLint para projetos Vue com TypeScript |
| **@vitest/eslint-plugin** `^1.6.6` | Regras do ESLint para arquivos de teste do Vitest |

---

## Configurações e Tipos TypeScript

| Pacote | Função |
|---|---|
| **@tsconfig/node24** `^24.0.4` | Configuração base do TypeScript para Node.js 24 |
| **@vue/tsconfig** `^0.8.1` | Configuração base do TypeScript recomendada para projetos Vue |
| **@types/node** `^24.10.9` | Tipagens TypeScript para APIs do Node.js (ex: `process`, `path`) |
| **jiti** `^2.6.1` | Permite que arquivos TypeScript de configuração (como `eslint.config.ts`) sejam executados diretamente |
