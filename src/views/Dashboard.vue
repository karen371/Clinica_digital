<script setup>
import Table from '../components/Table.vue'
import Navbar from '@/components/Navbar.vue';
</script>

<template>
  <Navbar/>
  <section class="contenedor-bienvenida my-5">
    <!-- Sección de bienvenida -->
    <div class="contenedor-bienvenida__cabecera mb-4">
      <h2 class="contenedor-bienvenida__titulo">¡Bienvenido, Pedro Pérez!</h2>
      <p class="contenedor-bienvenida__mensaje text-muted">Recuerde que su próxima cita es el bal bla</p>
    </div>
    <!-- Tabla de citas o información -->
    <div class="contenedor-bienvenida__tabla">
      <Table/>
    </div>
  </section>
</template>

<style lang="sass" scoped>
/* Estilos personalizados usando BEM */
.contenedor-bienvenida
  background-color: #f9f9f9
  padding: 30px
  border-radius: 8px
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1)

.contenedor-bienvenida__cabecera
  margin-bottom: 1.5rem

.contenedor-bienvenida__titulo
  font-weight: bold
  color: var(--color-heading)

.contenedor-bienvenida__mensaje
  font-size: 1rem
  color: var(--color-text)

.contenedor-bienvenida__tabla
  margin-top: 20px
</style>

