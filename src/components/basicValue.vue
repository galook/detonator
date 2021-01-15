<template>
  <div class="View">
    <div class="mb-2">
      <span class="text-3xl font-bold mr-2">{{ title }}:</span>
      <span class="text-2xl m-auto">{{ content }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    title: String,
    content: String,
  },
})
export default class BasicDisplay extends Vue {
  title!: string;
  content!: string;
}
</script>
