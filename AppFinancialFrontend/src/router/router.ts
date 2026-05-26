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
import FinancialInvestments from '@/components/financial-investments/FinancialInvestments.vue';
import RegistrationsView from '@/views/RegistrationsView.vue';
import SupplierView from '@/views/SupplierView.vue';
import BankAccountView from '@/views/BankAccountView.vue';
import CostCenterView from '@/views/CostCenterView.vue';
import PaymentMethodView from '@/views/PaymentMethodView.vue';
import PersonView from '@/views/PersonView.vue';

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

    //#region Investimentos
    {
      path: '/investimentos',
      name: 'investimentos',
      component: FinancialInvestments,
    },
    //#endregion

    //#region Cadastros
    {
      path: '/cadastros',
      component: RegistrationsView,
      children: [
        {
          path: '',
          name: 'cadastros',
          redirect: '/cadastros/pessoa',  // rota padrão ao entrar em /cadastros
        },
        {
          path: 'pessoa',
          name: 'cadastro de pessoa',
          component: PersonView,
        },
        {
          path: 'fornecedor',
          name: 'cadastro de fornecedor',
          component: SupplierView,
        },
        {
          path: 'conta-bancaria',
          name: 'cadastro de conta bancária',
          component: BankAccountView,
        },
        {
          path: 'centro-custo',
          name: 'cadastro de centro de custo',
          component: CostCenterView,
        },
        {
          path: 'metodo-pagamento',
          name: 'cadastro de método de pagamento',
          component: PaymentMethodView,
        }
      ]
    },
    //#endregion
  ],
})

export default router

