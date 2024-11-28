<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary contenedor__nav">
      <div class="container-fluid">
        <a class="navbar-brand fw-bold" href="#">Clinica Digital</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Aquí se aplica ms-auto para alinear los elementos a la derecha -->
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Citas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Perfil</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Cerrar Sesión</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  <style lang="sass" scoped>
    .contenedor__nav
        a 
            color: var(--color-heading)
  </style>
  