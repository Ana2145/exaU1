<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col>
          <b-navbar toggleable="lg" type="light" variant="light">
            <b-navbar-brand href="#">Logo</b-navbar-brand>
            <b-navbar-toggle target="navbar-nav"></b-navbar-toggle>

            <b-collapse id="navbar-nav" is-nav>
              <b-navbar-nav class="ml-auto">
                <b-nav-item :to="{ name: 'formulario' }">Formulario</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </b-col>
      </b-row>

      <b-row>

        <b-col>
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Inicio",
          href: "#",
        },
      ],
    };
  },
  methods: {
    navegarSiguiente() {
      this.$router.push({ name: "tercero" });
    },
  },
};
</script>

<style></style>
