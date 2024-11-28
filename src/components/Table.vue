<script></script>
<template>
  <section class="contenedor__tabla">
    <table class="table">
      <thead class="table-info">
        <tr>
          <th scope="col">Fecha</th>
          <th scope="col">Hora</th>
          <th scope="col">Especialidad</th>
          <th scope="col">Médico</th>
          <!-- Agregar columna de Acción si el slot está presente -->
          <th v-if="$slots.accion" scope="col">Acción</th>
          <th v-if="$slots.estado" scope="col">Estado</th>
        </tr>
      </thead>
      <tbody>
        <slot></slot> <!-- Aquí se insertarán las filas -->
      </tbody>
    </table>
  </section>
</template>

<style lang="sass" scoped>
/* Estilos generales de las tablas */
.contenedor__tabla
  margin-bottom: 2rem
  background-color: #f8f9fa
  padding: 1rem
  border-radius: 8px

/* Estilo para el contenedor de acción */
.contenedor__accion
  display: flex
  gap: 1rem

.contenedor__accion--modificar
  background-color: #007bff
  border: none
  color: white
  padding: 0.5rem 1rem
  border-radius: 5px
  cursor: pointer

.contenedor__accion--modificar:hover
  background-color: darken(#007bff, 10%)

.contenedor__accion--eliminar
  background-color: #dc3545
  border: none
  color: white
  padding: 0.5rem 1rem
  border-radius: 5px
  cursor: pointer

.contenedor__accion--eliminar:hover
  background-color: darken(#dc3545, 10%)
</style>

<style lang="sass" scoped>
    
    
</style>
