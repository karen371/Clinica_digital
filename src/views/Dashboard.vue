<script>
import Table from '../components/Table.vue';
import Navbar from '@/components/Navbar.vue';
import dashboard from '@/data/dashboard.json'; // Cargamos el archivo JSON
import { mapState } from 'vuex';

export default {
  data() {
    return {
      token: localStorage.getItem('authToken'), // Obtenemos el token almacenado
      user: {},
      Appointments: [],
    };
  },
  components: {
    Table,
    Navbar,
  },
  computed: {
    ...mapState(['loading', 'error']),
  },
  mounted() {
    // Intentamos obtener el token desde localStorage
    const token = localStorage.getItem('authToken');

    // Si no hay token, redirigir al login
    if (!token) {
      this.$router.push('/');
    } else {
      // Simulamos el proceso de carga de los datos
      this.loadUserData();
      this.loadAppointments();
    }
  },
  methods: {
    // Método para cargar los datos del usuario desde el JSON
    loadUserData() {
      this.user = dashboard.user; // Asignamos los datos del usuario
      console.log('Datos del usuario cargados:', this.user);
    },
    // Método para cargar las citas (simulando una llamada a la API)
    loadAppointments() {
      this.Appointments = dashboard.appointments;
      console.log('Citas cargadas:', this.Appointments);
    },
  },
};
</script>


<template>
  <Navbar/>
  <section class="contenedor-bienvenida my-5">
    <!-- Sección de bienvenida -->
    <div class="contenedor-bienvenida__cabecera mb-4 text-center">
      <h2 class="contenedor-bienvenida__titulo">¡Bienvenido, {{ user.name }}!</h2>
      <p class="contenedor-bienvenida__mensaje text-muted">Recuerde que su próxima cita</p>
    </div>
    <div class="contenedor-bienvenida__tabla">
    <h3>Estados de citas agendadas</h3>
    <Table>
      <tr v-for="appointment in Appointments" :key="appointment.date + appointment.time">
        <td>{{ appointment.date }}</td>
        <td>{{ appointment.time }}</td>
        <td>{{ appointment.specialty }}</td>
        <td>{{ appointment.doctor }}</td>
        <td>
          <span :class="appointment.statusClass">{{ appointment.status }}</span>
        </td>
      </tr>
    </Table>
  </div>
  </section>
</template>

<style lang="sass" scoped>
/* Estilos personalizados usando BEM */
.contenedor-bienvenida
  background-color: #f9f9f9
  border-radius: 8px
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1)

.contenedor-bienvenida__cabecera
  margin-bottom: 1.5rem
  background-color: var(--color-background-soft)
  height: 100px
  border-radius: 10px
  border: 1px solid var(--color-border-hover)
  
.contenedor-bienvenida__titulo
  font-weight: bold
  color: var(--color-heading)
  margin-left: 30px 

.contenedor-bienvenida__mensaje
  font-size: 1rem
  color: var(--color-text)
  margin-left: 30px 

.contenedor-bienvenida__tabla
  margin-top: 20px
</style>

