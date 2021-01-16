<template>
  <div class="View">
    <img
      alt="Vue logo"
      class="w-64 mx-auto mb-5"
      src="https://quvia.cz/qlogo.svg"
    />
    <p class="font-bold text-6xl mb-16 text-gray-800"></p>
    <BasicDisplay
      v-for="(infoArray, index) in info"
      :key="index"
      :title="infoArray[0]"
      :content="infoArray[1]"
    />
  </div>
  {{ info }}
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BasicDisplay from "@/components/basicValue.vue"; // @ is an alias to /src

@Options({
  components: {
    BasicDisplay,
  },
})
export default class View extends Vue {
  info: string[][] = [
    ["Status", "loading..."],
  ];
  number?: number
 
  mounted() {
    if (this.$route.params.no) {
      console.log(this.$route.params.no, 'lol');
      
    }
  }
}
</script>
