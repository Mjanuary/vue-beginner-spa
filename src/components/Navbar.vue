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
          <li v-for="(page, index) in pages" :key="index" class="nav-item">
            <a
              class="nav-link"
              :class="{ active: activePage == index }"
              aria-current="page"
              :href="page.link.url"
              :title="`This si the
                                    ${page.link.text}`"
              @click.prevent="navLinkClick(index)"
              >{{ page.link.text }}</a
            >
          </li>
        </ul>
        <form class="d-flex">
          <button class="btn btn-primary" @click.prevent="changeTheme()">
            {{ !useDarkNavbar ? "Use Dark Navbar" : "Use Light Navbar" }}
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["pages", "activePage", "navLinkClick"],
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
    },
  },
};
</script>
