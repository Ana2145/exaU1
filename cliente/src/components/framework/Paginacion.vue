<template>
    <b-container>
      <div class="overflow-auto">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>
  
        <p class="mt-3">Current Page: {{ currentPage }}</p>
  
        <b-table
          id="my-table"
          :items="items"
          :per-page="perPage"
          :current-page="currentPage"
          small
          :fields="fields"
        ></b-table>
      </div>
    </b-container>
  </template>
  
  <script>
  import axios from "axios";
  //import personaService from "../examen/VehicleService.js";
  export default {
    data() {
      return {
        perPage: 3,
        currentPage: 1,
        items: [],
        fields: [
          {key: 'brand', label:'Brand', sortable: true},
          {key: 'model', label:'Model', sortable: true},
          {key: 'serie', label:'Serie', sortable: true},
          {key: 'year', label:'Year', sortable: true},
          {key: 'serie', label:'Serie'},
        ]
      };
    },
    computed: {
      rows() {
        return this.items.length;
      },
    },
    mounted() {
      this.obtenerPersonas();
    },
    methods: {
      async obtenerPersonas() {
        const data = await personaService.obtenerPersonasPaginadas();
        items = data.content;
      },
    },
  };
  </script>
  