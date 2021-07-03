<template>
  <section class="src-components-datos">
    <div v-if="this.$store.state.data.length">
      <table class="table">
        <thead>
          <tr class="table-primary">
            <th class="table-primary" scope="col">Nombre</th>
            <th class="table-primary" scope="col">Edad</th>
            <th class="table-primary" scope="col">Mail</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(object, index) in this.$store.state.data"
            :key="index"
            class="table-darprimaryk"
          >
            <td class="table-primary">{{ object.nombre }}</td>
            <td class="table-primary">{{ object.edad }}</td>
            <td class="table-primary">{{ object.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else class="alert alert-warning" role="alert">
      No se encontraron datos
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-datos',
    props: [],
    mounted () {
      this.$store.dispatch('getUsuarios')
      },
}
</script>