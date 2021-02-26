<template>
  <v-app>
    <v-main>
      <Table />
    </v-main>
  </v-app>
</template>

<script>
import Table from './components/Table'

export default {
  name: 'App',
  components: {
    Table,
  },
};
</script>

<style lang="scss"> 
:root {
  font-size: 16px;
  @media(max-width: 600px) {
    font-size: 12px;
  }
}
</style>