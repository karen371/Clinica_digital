<script>
import agenda from '@/data/agenda.json'; // Ruta del archivo JSON con los datos de la agenda

export default {
  data() {
    return {
      specialties: agenda.specialties, // Guardamos las especialidades en el estado local
      selectedSpecialty: null, // Especialidad seleccionada
      selectedDoctor: null, // Doctor seleccionado
    };
  },
  computed: {
    // Obtener los doctores de la especialidad seleccionada
    doctors() {
      return this.selectedSpecialty ? this.selectedSpecialty.doctors : [];
    },
    // Calcular la disponibilidad de la especialidad seleccionada
    specialtyAvailability() {
      if (this.selectedSpecialty) {
        const { availability } = this.selectedSpecialty;
        return (availability.bookedSlots / availability.totalSlots) * 100;
      }
      return 0;
    },
    // Calcular la disponibilidad del doctor seleccionado
    doctorAvailability() {
      if (this.selectedDoctor) {
        const { availability } = this.selectedDoctor;
        return (availability.bookedSlots / availability.totalSlots) * 100;
      }
      return 0;
    }
  }
};
</script>

<template>
    <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Selecciona la especialidad</label>
          <select id="specialtySelect" class="form-select" v-model="selectedSpecialty">
            <option v-for="specialty in specialties" :key="specialty.id" :value="specialty">
              {{ specialty.name }}
            </option>
          </select>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Disponibilidad de la especialidad</label>
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
              {{ Math.round(specialtyAvailability) }}%
            </div>
          </div>
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Seleccionar Doctor</label>
            <select id="doctorSelect" class="form-select" v-model="selectedDoctor" :disabled="!selectedSpecialty">
              <option v-for="doctor in doctors" :key="doctor.id" :value="doctor">
                {{ doctor.name }}
              </option>
            </select>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Disponibilidad del doctor</label>
            <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                  {{ Math.round(doctorAvailability) }}%
                </div>
            </div>
        </div>
        <div class="mb-3">
            <label for="fecha" class="form-label">Fecha de la cita</label>
            <input type="date" class="form-control" id="fecha" name="fecha">
        </div>
          
          <div class="mb-3">
            <label for="hora" class="form-label">Hora de la cita</label>
            <input type="time" class="form-control" id="hora" name="hora">
          </div>
        <button type="submit" class="btn btn-primary">Agendar</button>
    </form>
</template>