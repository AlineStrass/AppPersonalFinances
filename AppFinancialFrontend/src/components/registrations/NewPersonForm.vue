<template>
    <div>
        <p> Cadastrar pessoa </p>
    </div>


    <CForm class="flex flex-col gap-4 w-full sm:w-56">
        <CFormField name="name" initialValue="" class="flex flex-col gap-1">
            <CInputText type="text" placeholder="Nome" />
            <!-- <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message> -->
        </CFormField>

        <CFormField name="lastname" initialValue="" class="flex flex-col gap-1">
            <CInputText type="text" placeholder="Sobrenome" />
            <!-- <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message> -->
        </CFormField>

        <CFormField name="cpf" initialValue="" class="flex flex-col gap-1">
            <CInputText type="text" placeholder="CPF" />
        </CFormField>

        <p>Dados bancários</p>

        <CFormField name="banckAccount" initialValue="" class="flex flex-col gap-1">
            <CInputText type="text" placeholder="Instituição bancária" />
        </CFormField>
        
        <CFormField name="banckAccount" initialValue="" class="flex flex-col gap-1">
            <CInputText type="text" placeholder="Agência" />
        </CFormField>

         <CFormField name="banckAccount" initialValue="" class="flex flex-col gap-1">
             <CInputText type="text" placeholder="Conta" />
         </CFormField>

          <CFormField name="banckAccount" initialValue="" class="flex flex-col gap-1">
              <CInputText type="text" placeholder="Tipo de conta" />
          </CFormField>
            

        <CButton type="submit" severity="secondary" label="Salvar" />
    </CForm>
</template>
<script setup lang="ts">






</script>