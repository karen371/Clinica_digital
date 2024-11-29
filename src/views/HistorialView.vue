<script>
import Table from '../components/Table.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Table,
    Navbar
  },
  data() {
    return {
      showModal: false,
      modalData: {},
      futurasCitas: [
        { fecha: '02/12/2024', hora: '04:00 PM', consulta: 'Neurología', doctor: 'Dr. Sánchez' },
        { fecha: '03/12/2024', hora: '10:00 AM', consulta: 'Ginecología', doctor: 'Dr. López' }
      ],
      pasadasCitas: [
        { fecha: '02/12/2024', hora: '04:00 PM', consulta: 'Neurología', doctor: 'Dr. Sánchez', estado: 'Cancelada' },
        { fecha: '03/12/2024', hora: '10:00 AM', consulta: 'Ginecología', doctor: 'Dr. López', estado: 'Cancelada' }
      ]
    };
  },
  methods: {
    // Función para abrir el modal y cargar los datos de la cita
    openModal(cita) {
      this.modalData = cita;
      this.showModal = true;
      const modal = new bootstrap.Modal(document.getElementById('modifyModal'));
      modal.show(); // Mostrar el modal usando el constructor de Bootstrap
    },
    // Función para cerrar el modal
    closeModal() {
      this.showModal = false;
      const modal = new bootstrap.Modal(document.getElementById('modifyModal'));
      modal.hide(); // Cerrar el modal usando el constructor de Bootstrap
    }
  }
}
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
      <Table class="table table-striped table-bordered">
        <!-- Aquí estamos pasando las filas dinámicas como contenido del slot -->
        <template v-slot:default>
          <tr v-for="(row, index) in futurasCitas" :key="index" class="table-light">
            <td>{{ row.fecha }}</td>
            <td>{{ row.hora }}</td>
            <td>{{ row.consulta }}</td>
            <td>{{ row.doctor }}</td>
            <td>
                <div class="d-flex justify-content-center">
                    <button class="btn btn-warning btn-sm mx-1" @click="openModal(row)">Modificar</button>
                    <button class="btn btn-danger btn-sm mx-1">Eliminar</button>
                </div>
            </td>
            <!-- Slot de acción (botones) -->
          </tr>
        </template>
        <!-- Si se necesita agregar una columna con un estado, puedes usar el slot de estado -->
        <template v-slot:accion>
          <th>Acción</th>
        </template>
      </Table>
    </section>
  
    <!-- Sección de citas pasadas o canceladas -->
    <section class="container my-4">
      <div class="d-flex justify-content-between mb-4">
        <h3 class="h3 contenedor__titulo--otras">Citas Pasadas o Canceladas</h3>
      </div>
      <Table class="table table-striped table-bordered">
        <!-- Aquí estamos pasando las filas dinámicas de citas pasadas -->
        <template v-slot:default>
          <tr v-for="(row, index) in pasadasCitas" :key="index">
            <td>{{ row.fecha }}</td>
            <td>{{ row.hora }}</td>
            <td>{{ row.consulta }}</td>
            <td>{{ row.doctor }}</td>
            <td>{{ row.estado }}</td> <!-- Mostrar estado -->
          </tr>
        </template>
        <template v-slot:estado>
            <th>Estado</th>
          </template>
      </Table>
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
