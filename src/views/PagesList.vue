<template>
  <p>{{ counter }}</p>
  <button @click.prevent="click">add</button>
</template>

<script setup>
import { ref, reactive } from "vue";

let counter = ref(0);
function click() {
  counter.value++;
}
// export default {
//   data() {
//     return {
//       counter: 0,
//     };
//   },
//   methods: {
//     click() {
//       this.counter++;
//     },
//   },
// };
</script>
