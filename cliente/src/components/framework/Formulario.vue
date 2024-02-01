<template lang="">
  <div>
    <h3>el form</h3>
    <b-form @submit="submitForm">
      <b-form-group id="input-group1">
        <b-form-input
          id="input-1"
          v-model="form.brand"
          type="text"
          placeholder="Escribe la brand"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group2">
        <b-form-input
          id="input-2"
          v-model="form.model"
          type="text"
          placeholder="Escribe el model"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group3">
        <b-form-input
          id="input-3"
          v-model="form.year"
          type="number"
          placeholder="Escribe el año de fabricacion"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group3">
        <b-form-input
          id="input-4"
          v-model="form.serie"
          type="number"
          placeholder="Escribe el numero de serie"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>
<script>
export default {
  name: "Formulario",
  data() {
    return {
      form: {
        brand: "",
        model: "",
        year: "",
        serie: "",
      },
    };
  },
  methods: {
    submitForm() {
      console.log("Formulario enviado");
      if (
        this.validateAlphanumeric(this.form.brand) &&
        this.validateAlphanumeric(this.form.model) &&
        this.validateYear(this.form.year)
      ) {
        console.log("Formulario enviado");
      } else {
        console.log("Error en la validación del formulario");
      }
    },
    validateAlphanumeric(value) {
      const alphanumericRegex = /^[a-zA-Z0-9]+$/;
      return alphanumericRegex.test(value);
    },
    validateYear(value) {
      const year = parseInt(value, 10);
      return !isNaN(year) && year > 2024;
    },
  },
};
</script>
<style lang=""></style>
