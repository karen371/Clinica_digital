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
    openModal(cita) {
      this.modalData = cita;
      const modal = new bootstrap.Modal(document.getElementById('modifyModal'));
      modal.show(); // Mostrar el modal utilizando Bootstrap
    },
    closeModal() {
      const modal = new bootstrap.Modal(document.getElementById('modifyModal'));
      modal.hide(); // Cerrar el modal utilizando Bootstrap
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
    <!-- Modal para modificar la cita -->
  <div class="modal fade" id="modifyModal" tabindex="-1" aria-labelledby="modifyModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modifyModalLabel">Modificar Cita</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
                <label for="fecha" class="form-label">Fecha de la cita</label>
                <input type="date" class="form-control" id="fecha" name="fecha">
            </div>
            <div class="mb-3">
                <label for="hora" class="form-label">Hora de la cita</label>
                <input type="time" class="form-control" id="hora" name="hora">
              </div>
            <div class="mb-3">
              <label for="consulta" class="form-label">Consulta</label>
              <input type="text" class="form-control" id="consulta" v-model="modalData.consulta" readonly>
            </div>
            <div class="mb-3">
                <label for="doctor" class="form-label">Doctor</label>
                <select class="form-control" id="doctor" v-model="modalData.doctor">
                  <option value="Dr. Sánchez">Dr. Sánchez</option>
                  <option value="Dr. López">Dr. López</option>
                  <option value="Dr. Martínez">Dr. Martínez</option>
                </select>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">Cerrar</button>
          <button type="button" class="btn btn-primary">Guardar cambios</button>
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
