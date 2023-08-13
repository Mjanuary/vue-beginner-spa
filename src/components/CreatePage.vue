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
          <label for="" class="form-label">Link URL</label>
          <input type="text" class="form-control" v-model="linkUrl" />
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
<script>
export default {
  props: ["pageCreated"],
  computed: {
    isFormInvalid() {
      return (
        !this.pageTitle || !this.content || !this.linkText || !this.linkUrl
      );
    },
  },
  data() {
    return {
      pageTitle: "",
      content: "",
      linkText: "",
      linkUrl: "",
      published: true,
    };
  },
  methods: {
    submitForm() {
      if (!this.pageTitle || !this.content || !this.linkText || !this.linkUrl) {
        alert("Please fill all the data");
        return;
      }

      this.pageCreated({
        pageTitle: this.pageTitle,
        content: this.content,
        link: {
          text: this.linkText,
          url: this.linkUrl,
        },
        published: this.published,
      });

      this.pageTitle = "";
      this.content = "";
      this.linkText = "";
      this.linkUrl = "";
      this.published = true;
    },
  },
};
</script>
