<script setup>
import FormularioAgendar from '@/components/FormularioAgendar.vue';
import Navbar from '@/components/Navbar.vue';
</script>

<template>
  <Navbar />
  
  <section class="contenedor formulario-agendar">
    <!-- Sección de título -->
    <div class="contenedor__titulo text-center mb-4">
      <h2 class="contenedor__titulo--texto">Agendar Nueva Cita</h2>
      <p class="contenedor__descripcion">Complete el siguiente formulario para agendar su cita</p>
    </div>

    <!-- Tarjeta del formulario -->
    <div class="contenedor__tarjeta card shadow-sm border-0 p-4">
      <FormularioAgendar />
    </div>
  </section>
</template>

<style lang="sass" scoped>
/* Variables */
$color-primario: #0074d9
$color-secundario: #6c757d
$color-fondo-tarjeta: #f8f9fa
$color-titulo: #0044cc

/* Estilos del contenedor principal */
.contenedor
  margin-top: 2rem
  margin-bottom: 2rem

/* Estilos del título y la descripción */
.contenedor__titulo
  text-align: center

.contenedor__titulo--texto
  font-weight: bold
  color: $color-titulo

.contenedor__descripcion
  font-size: 1.1rem
  color: $color-secundario

/* Estilos de la tarjeta */
.contenedor__tarjeta
  background-color: $color-fondo-tarjeta
  border-radius: 12px
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)
  padding: 2rem

/* Estilos responsivos */
@media (max-width: 768px)
  .contenedor
    padding-left: 15px
    padding-right: 15px

  .contenedor__tarjeta
    padding: 1.5rem
    border-radius: 10px

  .contenedor__titulo--texto
    font-size: 1.5rem

  .contenedor__descripcion
    font-size: 1rem
</style>
