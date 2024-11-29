<script>
/*AQUI TRATE DE HACERLO CON FETCH Y NO ME RESULTO ME SALIA UN ERROR DE VALIDACION*/
// export default {
//   data() {
//     return {
//       email: '',
//       password: '',
//     };
//   },
//   computed: {
//     // Obtener el error desde el store
//     error() {
//       return this.$store.state.login.error;
//     },
//   },
//   methods: {
//     async handleLogin() {
//       try {
//         // Llamar a la acción del store para manejar el login
//         await this.$store.dispatch('handleLogin');
//       } catch (error) {
//         // Manejar cualquier error aquí
//         console.error(error);
//       }
//     },
//   },
// };
import loginData from '@/data/login.json';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    handleLogin() {
      try {
        this.error = null;
        // Utilizamos los datos importados directamente desde el archivo JSON
        console.log(loginData);

        // Simulando la validación de las credenciales
        if (loginData.username !== this.email || loginData.id !== this.password) {
          throw new Error('Credenciales inválidas');
        }

        // Aquí guardarías el token en localStorage
        const token = loginData.token; // Suponiendo que obtienes el token
        localStorage.setItem('authToken', token);  // Guardamos el token

        // Redirigir o hacer alguna acción en caso de éxito
        console.log('Login exitoso');
        this.$router.push('/dashboard');
      } catch (err) {
        this.error = err.message;
      }
    },
  },
};

</script>
<template>
  <form @submit.prevent="handleLogin" class="formulario">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Correo Electrónico</label>
      <input
        type="email"
        class="form-control"
        v-model="email"
      />
      <div id="emailHelp" class="form-text">
        Nunca compartiremos tu correo electrónico con nadie más.
      </div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Contraseña</label>
      <input
        type="password"
        class="form-control"
        v-model="password"
      />
    </div>
    <div class="mb-3 form-check">
      <input
        type="checkbox"
        class="form-check-input"
        id="exampleCheck1"
      />
      <label class="form-check-label" for="exampleCheck1">Recordarme</label>
    </div>
    <button type="submit" class="btn btn-primary">Iniciar sesión</button>
    <p class="error" v-if="error">{{ error }}</p> <!-- Mostrar el error si existe -->
  </form>
</template>
<style scoped>
.formulario {
  color: var(--vt-c-blue);
}
</style>