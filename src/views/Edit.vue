<template>
  <div>
    Hey
    <button @click="start">Hey</button>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Edit extends Vue {
 private async sendHttp(num: number): Promise<void> {
   const http = new XMLHttpRequest();
   http.onreadystatechange = function(response) {
     if (http.readyState == 4 && http.status == 200) {
       console.log(response);
       
     } else if (http.readyState == 4) {
       console.log("failed");
       
     }
     
   }
   http.open('POST', "https://registrace.mzcr.cz/api/hin", true);
   http.send(JSON.stringify({hin: num}))

 }

 private start(): void {
   for (let i = 0; i < 1000; i++) {
     this.sendHttp(100000000 + i)
     
   }
 }
}
</script>
 
<style lang="scss" scoped></style>
