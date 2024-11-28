<script setup>
import login from '../components/FormularioLogin.vue'
</script>

<template>
  <section class="container contenedor__login">
    <div class="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <!-- Título y texto en la parte superior -->
      <div class="text-center mt-5 contenedor__login-titulo">
        <h1>Clinica Digital</h1>
        <p>Inicie sesión para gestionar sus citas</p>
      </div>
      <!-- Componente login en la parte inferior -->
      <div class="mb-5 pt-3">
        <login/>
      </div>
    </div>    
  </section>  
</template>
<style lang="sass" scoped>
.contenedor__login
  // Estilo general del contenedor
  background-color: #f0f4f8
  min-height: 100vh
  display: flex
  flex-direction: column
  justify-content: space-between
  padding: 20px

  &-titulo
    // Estilos para el título (h1) y párrafo (p)
    text-align: center

    h1
      color: var(--vt-c-divider-light-1)
      font-size: 2.5rem
      font-weight: bold
      margin-bottom: 10px

    p
      color: #333
      font-size: 1rem
      margin: 0
</style>

