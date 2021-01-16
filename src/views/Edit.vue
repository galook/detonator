<template>
  <div>
    Hey
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Edit extends Vue {
  no?: unknown = this.$route.params.no;
  mounted() {
    if (this.no) {
      console.log(this.no);
    } else console.log("no");
  }
}
</script>
 
<style lang="scss" scoped></style>
