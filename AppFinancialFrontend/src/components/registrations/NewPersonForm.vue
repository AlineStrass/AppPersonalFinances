<template>
    cadastro pessoa
    <CForm class="flex flex-col gap-4 w-full sm:w-56">
        <CFormField name="username" initialValue="" class="flex flex-col gap-1">
            <CInputText type="text" placeholder="Nome" />
            <!-- <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message> -->
        </CFormField>
        <CFormField name="username" initialValue="" class="flex flex-col gap-1">
            <CInputText type="text" placeholder="Sobrenome" />
            <!-- <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message> -->
        </CFormField>
        <CFormField name="username" initialValue="" class="flex flex-col gap-1">
            <CInputText type="text" placeholder="CPF" />
            <!-- <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message> -->
        </CFormField>

        <CButton type="submit" severity="secondary" label="Salvar" />
    </CForm>
</template>
<script setup lang="ts">






</script>