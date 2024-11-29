<script>
import Table from '../components/Table.vue';
import Navbar from '@/components/Navbar.vue';
import { mapGetters, mapState } from 'vuex';

export default {
  components: {
    Table,
    Navbar
  },
  data() {
    return {
      showModal: false,
      modalData: {},
      futurasCitas: [], // Se actualizarán desde el store
      pasadasCitas: [] // Se actualizarán desde el store
    };
  },
  computed: {
    ...mapState(['user', 'futureAppointments', 'pastAppointments', 'loading']),
  },
  methods: {
    openModal(cita) {
      this.modalData = cita;
      const modal = new bootstrap.Modal(document.getElementById('modifyModal'));
      modal.show(); // Mostrar el modal utilizando Bootstrap
    },
    closeModal() {
      const modal = new bootstrap.Modal(document.getElementById('modifyModal'));
      modal.hide(); // Cerrar el modal utilizando Bootstrap
    },
    updateModal() {
      alert('Datos Modificados')
    },
    deleteAppointment(index) {
      // Eliminar la cita seleccionada de la lista
      this.futureAppointments.splice(index, 1);
      // También podrías mostrar una notificación de éxito o similar si lo deseas
      alert("Cita eliminada");
    },
  },
  mounted() {
    this.$store.dispatch('fetchAppointments'); // Cargar los datos cuando el componente se monta
  },
}
</script>
<template>
  <div>
    <Navbar />
    
 <!-- Sección de citas futuras -->
 <section class="container my-4">
  <div class="d-flex justify-content-between mb-4 ">
    <h3 class="h3 contenedor__titulo--futuras">Citas Futuras</h3>
  </div>
  <Table class="table table-striped table-bordered">
    <!-- Aquí estamos pasando las filas dinámicas como contenido del slot -->
    <template v-slot:default>
      <tr v-for="(appointment, index) in futureAppointments" :key="appointment.id">
        <td>{{ appointment.date }}</td>
        <td>{{ appointment.time }}</td>
        <td>{{ appointment.specialty }}</td>
        <td>{{ appointment.doctor }}</td>
         <!-- Slot de acción (botones) -->
        <td>
            <div class="d-flex justify-content-center">
                <button class="btn btn-warning btn-sm mx-1" @click="openModal(appointment)">Modificar</button>
                <button class="btn btn-danger btn-sm mx-1" @click="deleteAppointment(index)">Eliminar</button>
            </div>
        </td>
       
      </tr>
    </template>
    <!-- Se agrega la columna accion-->
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
      <tr v-for="(appointment, index) in pastAppointments" :key="appointment.id">
        <td>{{ appointment.date }}</td>
        <td>{{ appointment.time }}</td>
        <td>{{ appointment.specialty }}</td>
        <td>{{ appointment.doctor }}</td>
        <td>{{ appointment.status }}</td>
      </tr>
    </template>
     <!-- Se agrega la columna estado-->
    <template v-slot:estado>
        <th>Estado</th>
      </template>
  </Table>
</section>

    <!-- Modal para mostrar detalles de la cita -->
    <div class="modal fade" id="modifyModal" tabindex="-1" aria-labelledby="modifyModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modifyModalLabel">Detalles de la Cita</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal"></button>
          </div>
          <!-- Modal para modificar detalles de la cita -->
          <div class="modal-body">
            <div class="mb-3">
              <label for="name" class="form-label"><strong>Nombre:</strong></label>
              <input type="text" class="form-control" id="name" v-model="modalData.specialty" placeholder="Ingresa el nombre" />
            </div>
            <div class="mb-3">
              <label for="name" class="form-label"><strong>Nombre:</strong></label>
              <input type="text" class="form-control" id="name" v-model="modalData.doctor" placeholder="Ingresa el nombre" />
            </div>
            <div class="mb-3">
              <label for="date" class="form-label"><strong>Fecha:</strong></label>
              <input type="date" class="form-control" id="date" v-model="modalData.date" />
            </div>
            <div class="mb-3">
              <label for="hora" class="form-label">Hora de la cita</label>
              <input type="text" class="form-control" id="time" v-model="modalData.time">
            </div>
            <!-- Puedes agregar más campos si lo necesitas -->
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="closeModal">Cerrar</button>
            <button type="button" class="btn btn-primary" @click="updateModal">Modificar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
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
