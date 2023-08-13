<template>
  <form action="" class="container mb-3">
    <div class="row">
      <div class="col-md-8">
        <div class="mb-3">
          <label for="" class="form-label">Page Title </label>
          <input type="text" class="form-control" v-model="pageTitle" />
        </div>

        <div class="mb-3">
          <label for="" class="form-label">Content </label>
          <textarea
            type="text"
            class="form-control"
            v-model="content"
            rows="5"
          ></textarea>
        </div>

        <div class="mb-3">
          <button
            class="btn btn-primary"
            @click.prevent="submitForm"
            :disabled="isFormInvalid"
          >
            Create Page
          </button>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <label for="" class="form-label">Link text</label>
          <input type="text" class="form-control" v-model="linkText" />
        </div>
        <div class="mb-3">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="published"
            />
            <label class="form-check-label" for="">Published</label>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref, inject, computed, watch } from "vue";
import { useRouter } from "vue-router";

const bus = inject("$bus");
const pages = inject("$pages");
const router = useRouter();

let pageTitle = ref("");
let content = ref("");
let linkText = ref("");
let published = ref(true);

function submitForm() {
  if (!pageTitle.value || !content.value || !linkText.value) {
    alert("Please fill all the data");
    return;
  }

  let newPage = {
    pageTitle: pageTitle.value,
    content: content.value,
    link: {
      text: linkText.value,
    },
    published: published.value,
  };

  pages.addPage(newPage);

  bus.$emit("page-created", newPage);

  router.push({ path: "/pages" });
}

const isFormInvalid = computed(() => !pageTitle || !content || !linkText);

watch(pageTitle, (newTitle, oldTitle) => {
  if (linkText.value === oldTitle) {
    linkText.value = newTitle;
  }
});
</script>
