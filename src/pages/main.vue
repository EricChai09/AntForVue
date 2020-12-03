<template>
  <div>
    <div class="main">我是main</div>
    <a-button type="primary" @click="query">cliclMe</a-button>
  </div>
</template>

<script>
import { queryData } from "~a/api"
export default {
  name: "main",
  methods: {
    async query() {
      console.log(123)
      let res = await queryData()
      this.data = res.data
      console.log(223)
    },
  },
}
</script>
<style scoped></style>
