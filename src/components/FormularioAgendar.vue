<template>
    <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Selecciona la especialidad</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Disponibilidad de la especialidad</label>
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
              60%
            </div>
          </div>
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Seleccionar Doctor</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Disponibilidad del doctor</label>
            <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                  60%
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
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>