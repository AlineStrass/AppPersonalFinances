import type { App } from 'vue'

// Componentes
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Dialog from 'primevue/dialog'
import Tag from 'primevue/tag'
import ToggleButton from 'primevue/togglebutton'


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
}
