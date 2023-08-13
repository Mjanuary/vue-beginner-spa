<template>
  <nav
    :class="[`bg-${theme}`, `navbar-${theme}`, 'navbar', 'navbar-expand-lg']"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex" id="navbarNav">
        <ul class="navbar-nav flex-grow-1">
          <navbar-link
            v-for="(page, index) in publishedPages"
            :key="index"
            class="nav-item"
            :page="page"
            :isActive="activePage === index"
            :index="index"
            @activated="$emit('activated')"
          ></navbar-link>
        </ul>
        <form class="d-flex">
          <button class="btn btn-primary" @click.prevent="changeTheme()">
            ☀️
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import NavbarLink from "./NavbarLink.vue";
export default {
  components: { NavbarLink },
  props: ["pages", "activePage"],
  created() {
    this.getThemeSetting();
  },
  computed: {
    publishedPages() {
      return this.pages.filter((p) => p.published);
    },
  },
  data() {
    return {
      theme: "light",
    };
  },

  methods: {
    changeTheme() {
      let theme = "light";

      if (this.theme === "light") {
        theme = "dark";
      }

      this.theme = theme;
      this.storeThemeSetting();
    },
    storeThemeSetting() {
      localStorage.setItem("theme", this.theme);
    },
    getThemeSetting() {
      let theme = localStorage.getItem("theme");
      if (theme) {
        this.theme = theme;
      }
    },
  },
};
</script>
