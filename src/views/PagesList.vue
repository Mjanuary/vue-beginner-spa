<template>
  <h4>Pages</h4>
  <div class="text-end">
    <router-link to="/pages/create" class="btn btn-primary btn-sm">
      Add Page
    </router-link>
  </div>
  <table class="table table-hover">
    <head>
      <tr>
        <th>Title</th>
        <th>Link text</th>
        <th>Is Published</th>
      </tr>
    </head>
    <tbody>
      <tr
        @click="goToPage(index)"
        v-for="(page, index) in $pages.getAllPages()"
        :key="index"
      >
        <td>{{ page.pageTitle }}</td>
        <td>{{ page.link.text }}</td>
        <td>{{ page.published ? "yes" : "no" }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref, reactive, inject } from "vue";
import { useRouter } from "vue-router";

const data = reactive({ counter: 0 });
const $pages = inject("$pages");
const router = useRouter();

const goToPage = (index) => {
  router.push({ path: `pages/${index}/edit` });
};
</script>

<style scope>
.table.table-hover tr:hover {
  cursor: pointer;
}
</style>
