import type { App } from 'vue'

// Componentes
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Dialog from 'primevue/dialog';
import Tag from 'primevue/tag';
import ToggleButton from 'primevue/togglebutton';
import { Form, FormField } from '@primevue/forms';
import Tab from 'primevue/tab';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import TabPanel from 'primevue/tabpanel';
import TabPanels from 'primevue/tabpanels';
import Listbox from 'primevue/listbox';



export function registerPrimeVueComponents(app: App) {
    app.component('CButton', Button)
    app.component('CCheckbox', Checkbox)
    app.component('CDataTable', DataTable)
    app.component('CColumn', Column)
    app.component('CInputText', InputText)
    app.component('CSelect', Select)
    app.component('CDialog', Dialog)
    app.component('CTag', Tag)
    app.component('CToggleButton', ToggleButton)
    app.component('CForm', Form)
    app.component('CFormField', FormField)
    app.component('CTabs', Tabs)
    app.component('CTabList', TabList)
    app.component('CTab', Tab)
    app.component('CTabPanels', TabPanels)
    app.component('CTabPanel', TabPanel)
    app.component('CListbox', Listbox)
}
