<script setup>
import Table from '../components/Table.vue'
import Navbar from '@/components/Navbar.vue';
</script>

<template>
  <Navbar />
  <!-- Contenedor principal -->
  <section class="container my-4 p-4 bg-light rounded shadow">
    <div class="d-flex justify-content-between mb-4">
      <h2 class="h2 contenedor__titulo">Listado de citas</h2>
    </div>
  </section>

  <!-- Sección de citas futuras -->
  <section class="container my-4">
    <div class="d-flex justify-content-between mb-4 ">
      <h3 class="h3 contenedor__titulo--futuras">Citas Futuras</h3>
    </div>
    <div>
      <Table class="table table-striped table-bordered">
        <!-- Fila 1 -->
        <tr class="table-light">
          <td>02/12/2024</td>
          <td>04:00 PM</td>
          <td>Neurología</td>
          <td>Dr. Sánchez</td>
          <!-- Slot de acción -->
          <td>
            <div class="d-flex justify-content-center">
              <button class="btn btn-primary btn-sm mx-1">Modificar</button>
              <button class="btn btn-danger btn-sm mx-1">Eliminar</button>
            </div>
          </td>
        </tr>
        <!-- Fila 2 -->
        <tr class="table-light">
          <td>03/12/2024</td>
          <td>10:00 AM</td>
          <td>Ginecología</td>
          <td>Dr. López</td>
          <!-- Slot de acción -->
          <td>
            <div class="d-flex justify-content-center">
              <button class="btn btn-primary btn-sm mx-1">Modificar</button>
              <button class="btn btn-danger btn-sm mx-1">Eliminar</button>
            </div>
          </td>
        </tr>
      </Table>
    </div>
  </section>

  <!-- Sección de citas pasadas o canceladas -->
  <section class="container my-4">
    <div class="d-flex justify-content-between mb-4">
      <h3 class="h3 contenedor__titulo--otras">Citas Pasadas o Canceladas</h3>
    </div>
    <div>
      <Table class="table table-striped table-bordered">
        <!-- Fila 1 -->
        <tr>
          <td>02/12/2024</td>
          <td>04:00 PM</td>
          <td>Neurología</td>
          <td>Dr. Sánchez</td>
          <!-- Slot de acción -->
          <td>Cancelada</td>
        </tr>
        <!-- Fila 2 -->
        <tr >
          <td>03/12/2024</td>
          <td>10:00 AM</td>
          <td>Ginecología</td>
          <td>Dr. López</td>
          <!-- Slot de acción -->
          <td>Cancelada</td>
        </tr>
      </Table>
    </div>
  </section>
</template>

<style lang="sass" scoped>
/* Personalización de botones */
.btn-sm 
  font-size: 0.875rem
  padding: 0.375rem 0.75rem

.table td 
  vertical-align: middle

.contenedor__titulo
  color: var(--color-heading)
.contenedor__titulo--futuras
    color: #008000
.contenedor__titulo--otras
    color: #9b9b9b
</style>
