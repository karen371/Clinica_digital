<script>
export default {
  methods: {
    logout() {
      // Eliminar el token del localStorage
      localStorage.removeItem('authToken'); // o sessionStorage.removeItem('authToken') si usas sessionStorage

      // Opcionalmente, puedes eliminar otros datos relacionados con la sesión
      localStorage.removeItem('userData'); // Por ejemplo, si guardas los datos del usuario

      // Redirigir al login o a una página pública
      this.$router.push('/');
    }
  }
};
</script>
<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary contenedor__nav">
      <div class="container-fluid">
        <a class="navbar-brand fw-bold" href="#">Clinica Digital</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Aquí se aplica ms-auto para alinear los elementos a la derecha -->
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/dashboard">Inicio</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/agendar">Agendar Citas</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/historial-citas">Historial de citas</RouterLink>
            </li>
            <li class="nav-item">
              <button class="btn btn-danger" @click="logout">Cerrar Sesión</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  <style lang="sass" scoped>
    .contenedor__nav
        a 
            color: var(--color-heading)
  </style>
  