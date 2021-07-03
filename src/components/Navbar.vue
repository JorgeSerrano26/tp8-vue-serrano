<template>
  <section class="src-components-navbar">
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Inicio</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <!-- ruta formulario -->
            <li class="nav-item">
              <router-link to="/formulario">
                <a class="nav-link" href="#">Formulario</a>
              </router-link>
            </li>
            <!-- ruta formulario -->
            <li class="nav-item">
              <router-link to="/datos">
                <a class="nav-link" href="#">Datos</a>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-navbar',
    props: [],
}
</script>

<style scoped lang="css"></style>
