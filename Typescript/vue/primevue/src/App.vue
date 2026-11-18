<script setup lang="ts">
import Button from "primevue/button";
import Card from "primevue/card";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import { ref } from "vue";

const name = ref("");
const people = [{ name: "Ada", role: "Engineer" }, { name: "Grace", role: "Admiral" }];
</script>

<template>
  <Card style="max-width: 32rem; margin: 2rem auto">
    <template #title>Hello, PrimeVue</template>
    <template #content>
      <InputText v-model="name" placeholder="Your name" />
      <Button :label="name ? `Hello, ${name}` : 'Say hello'" style="margin-left: 0.5rem" />
      <DataTable :value="people" style="margin-top: 1rem">
        <Column field="name" header="Name" />
        <Column field="role" header="Role" />
      </DataTable>
    </template>
  </Card>
</template>
