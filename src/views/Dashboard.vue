<script setup>
import Table from '../components/Table.vue'
import Navbar from '@/components/Navbar.vue';
</script>

<template>
  <Navbar/>
  <section class="contenedor-bienvenida my-5">
    <!-- Sección de bienvenida -->
    <div class="contenedor-bienvenida__cabecera mb-4 text-center">
      <h2 class="contenedor-bienvenida__titulo">¡Bienvenido, Pedro Pérez!</h2>
      <p class="contenedor-bienvenida__mensaje text-muted">Recuerde que su próxima cita es el bal bla</p>
    </div>
    <!-- Tabla de citas o información -->
    <div class="contenedor-bienvenida__tabla">
    <h3>Estados de citas agendadas</h3>
    <Table>
      <!-- Fila 1 -->
      <tr>
        <td>02/12/2024</td>
        <td>04:00 PM</td>
        <td>Neurología</td>
        <td>Dr. Sánchez</td>
        <!-- Slot de acción -->
      </tr>
      <!-- Fila 2 -->
      <tr>
        <td>03/12/2024</td>
        <td>10:00 AM</td>
        <td>Ginecología</td>
        <td>Dr. López</td>
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

