<template>
  <div id="app">
    <a-button type="primary" @click="go('/')">去home</a-button>
    <a-button type="primary" @click="go('/main')">去main</a-button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {}
  },
  methods: {
    go(url) {
      this.$router.push({
        path: url,
        query: {},
      })
    },
  },
  mounted() {},
}
</script>
<style></style>
