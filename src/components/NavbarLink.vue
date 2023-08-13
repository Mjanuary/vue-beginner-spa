<template>
  <li>
    <router-link
      :to="`/${index}`"
      class="nav-link"
      active-class="active emphasize"
      aria-current="page"
      :href="page.link.url"
      :title="`This si the ${page.link.text}`"
      >{{ page.link.text }}</router-link
    >
  </li>
</template>

<script>
export default {
  props: ["page", "index", "isActive"],
};
</script>
