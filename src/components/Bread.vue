<template>
  <a-breadcrumb>
    <a-breadcrumb-item>哈哈</a-breadcrumb-item>
    <a-breadcrumb-item v-if="$route.meta.module"
      ><a href="">{{ $route.meta.module }}</a></a-breadcrumb-item
    >
    <a-breadcrumb-item v-if="$route.meta.title"
      ><a href="">{{ $route.meta.title }}</a></a-breadcrumb-item
    >
  </a-breadcrumb>
</template>

<script>
export default {}
</script>

<style></style>
