<template>
  <div id="nav">
    <router-link v-on:route="evaluateR(params)" to="/">View</router-link> |
    <router-link to="/create">Create</router-link> |
    <router-link to="/edit">Edit</router-link>
  </div>
  <router-view  v-on:route="evaluateR"  />
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import alert from "sweetalert2";



export default class App extends Vue {
  private async askUser(
    title?: string,
    details?: string,
    wantNum = false
  ): Promise<string> {
    const { value: input } = await alert.fire({
      title: title,
      html: details,
      input: "text",
    });

    if ((isNaN(input) || !input) && wantNum) {
      return this.askUser(title, "Invalid number specified", wantNum);
    } else if (input) {
      return input;
    } else {
      return this.askUser(title, "Input is required");
    }
  }

// eslint-disable-next-line
async evaluateR(params: any) {
  console.log(params.no);
  if (!params.no) {      
      const id = await this.askUser(
        "Number ID Required",
        "Please specify an ID",
        true
      );
      this.$router.push('/' + id)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
