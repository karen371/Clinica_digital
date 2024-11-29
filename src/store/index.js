import { createStore } from 'vuex';
import loginData from '@/data/dashboard.json'; // Importamos el archivo JSON con los datos
import historialData from '@/data/historico.json'; // Importamos el archivo JSON con los datos
/**NO PUDE IMPLEMENTAR FETCH NI AXIOS, ME SALIA UN ERROR POR ESO LO HICE DE ESTA MANERA */
export default createStore({
  state: {
    user: {}, // Almacena los datos del usuario
    futureAppointments: [], // Almacena las citas futuras
    pastAppointments: [], // Almacena las citas pasadas
    loading: false, // Estado para la carga
    error: null, // Para almacenar errores
  },
  mutations: {
    // Mutación para actualizar los datos del usuario
    setUserData(state, user) {
      state.user = user;
    },
    // Mutación para actualizar las citas
    setAppointments(state, { futureAppointments, pastAppointments }) {
      state.futureAppointments = futureAppointments;
      state.pastAppointments = pastAppointments;
    },
    // Mutación para establecer el error
    setError(state, error) {
      state.error = error;
    },
    // Mutación para establecer el estado de carga
    setLoading(state, status) {
      state.loading = status;
    },
  },
  actions: {
    // Acción para obtener los datos del usuario
    async fetchUserData({ commit }) {
      commit('setLoading', true); // Comienza la carga
      try {
        // Usamos los datos importados del archivo JSON
        const data = loginData;

        // Llamamos a la mutación para actualizar el estado con los datos del usuario
        commit('setUserData', data.user);
      } catch (err) {
        commit('setError', err.message); // Si ocurre un error, lo almacenamos
        console.error('Error al cargar los datos del usuario:', err);
      } finally {
        commit('setLoading', false); // Termina la carga
      }
    },

    // Acción para obtener las citas
    async fetchAppointments({ commit }) {
      commit('setLoading', true); // Comienza la carga
      try {
        // Usamos los datos importados del archivo historico.json
        const data = historialData;

        // Llamamos a la mutación para actualizar las citas
        commit('setAppointments', {
          futureAppointments: data.appointments.future,
          pastAppointments: data.appointments.past,
        });
      } catch (err) {
        commit('setError', err.message); // Si ocurre un error, lo almacenamos
        console.error('Error al cargar las citas:', err);
      } finally {
        commit('setLoading', false); // Termina la carga
      }
    },
  },
});
