import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AccountsPayableView from '../views/AccountsPayableView.vue';
import AccountsPayableCard from '@/components/accounts-payable/AccountsPayableCard.vue';
import AccountsPayableList from '@/components/accounts-payable/AccountsPayableList.vue';
import NewAccountPayableForm from '@/components/accounts-payable/NewAccountPayableForm.vue';
import AccountsReceivableView from '../views/AccountsReceivableView.vue';
import AccountsReceivableCard from '@/components/accounts-receivable/AccountsReceivableCard.vue';
import AccountsReceivableList from '@/components/accounts-receivable/AccountsReceivableList.vue';
import NewAccountReceivableForm from '@/components/accounts-receivable/NewAccountsReceivableForm.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //#region Home
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    //#endregion

    //#region Contas a Pagar
    {
      path: '/contas-pagar',
      name: 'contas a pagar',
      component: AccountsPayableView,
    },
    {
      path: '/contas-pagar/contas',
      name: 'tabela de contas a pagar',
      component: AccountsPayableCard,
    },
    {
      path: '/contas-pagar/contas/lista',
      name: 'lista de contas a pagar',
      component: AccountsPayableList,
    },
    {
      path: '/contas-pagar/cadastro',
      name: 'cadastro de contas a pagar',
      component: NewAccountPayableForm,
    },
    //#endregion

    //#region Contas a Receber
    {
      path: '/contas-receber',
      name: 'contas a receber',
      component: AccountsReceivableView,
    },
    {
      path: '/contas-receber/contas',
      name: 'tabela de contas a receber',
      component: AccountsReceivableCard,
    },
    {
      path: '/contas-receber/lista',
      name: 'lista de contas a receber',
      component: AccountsReceivableList,
    },
    {
      path: '/contas-receber/cadastro',
      name: 'cadastro de contas a receber',
      component: NewAccountReceivableForm,
    },
    //#endregion 
  ],
})

export default router

