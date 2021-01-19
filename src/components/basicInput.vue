<template>
  <div class="View">
    <div class="mb-2 inline-grid grid-cols-2">
     
      <span class="text-3xl font-bold mr-3 text-right">{{ title }} </span>
     
    
      <span class="text-3xl ml-3  text-left">{{ content }}</span>
     

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

  mounted() {
    console.log("Display Element Mounted");
    
  }
}
</script>
