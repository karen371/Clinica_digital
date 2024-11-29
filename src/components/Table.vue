<script>
export default {
   name: 'Table'
}
</script>

<template>
  <table class="table table-striped table-bordered">
    <thead>
      <tr>
        <th>Fecha</th>
        <th>Hora</th>
        <th>Consulta</th>
        <th>Doctor</th>
        <slot name="accion"></slot>
        <slot name="estado"></slot>
      </tr>
    </thead>
    <tbody>
      <slot></slot>
    </tbody>
  </table>
</template>


<style lang="sass" scoped>
    
    
</style>
