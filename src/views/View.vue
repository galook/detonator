<template>
  <div class="View">
    <img
      alt="Vue logo"
      class="w-64 mx-auto mb-5"
      src="https://quvia.cz/qlogo.svg"
    />
    <p class="font-bold text-6xl mb-16 text-gray-800"></p>
    <BasicDisplay
      v-for="(infoI, index) in info"
      :key="index"
      :title="infoI.name"
      :content="infoI.text"
    />

    {{ text }}

    <p class="text-xl">{{ datum }}</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BasicDisplay from "@/components/basicValue.vue"; // @ is an alias to /src
import axios from "axios";
import Swal from "sweetalert2";

@Options({
  components: {
    BasicDisplay,
  },
})
export default class View extends Vue {
  text: number = 15;
  datum: string = new Date().toString();
  url: string = "http://quvia.cz:7551/worker";
  info?: object[] = [];
  mounted() {
    this.$emit("route", this.$route.params);

    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        this.text = 15 * (i * 15);
      }, i * 1000);
    }

    axios
      .get(this.url, {
        params: {
          name: "kolotocs",
        },
      })
      .then((response) => {
        if (response.data.ok) this.info = response.data.result;
        else Swal.fire(response.data.msg, response.data.detail, "warning");
      });

    setInterval(() => {
      this.datum = new Date().toString();
    }, 50);
  }
}
</script>
