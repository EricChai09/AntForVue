<template>
  <a-form-model
    layout="inline"
    :model="formInline"
    @submit="handleSubmit"
    @submit.native.prevent
  >
    <a-form-model-item>
      <a-input v-model="formInline.user" placeholder="Username">
        <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item>
      <a-input
        v-model="formInline.password"
        type="password"
        placeholder="Password"
      >
        <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item>
      <a-button
        type="primary"
        html-type="submit"
        :disabled="formInline.user === '' || formInline.password === ''"
      >
        登 录
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        password: "",
      },
    }
  },
  methods: {
    handleSubmit() {
      console.log(this.formInline)
      if (
        this.formInline.user === "admin" &&
        this.formInline.password === "123"
      ) {
        this.$message.success("登录成功！", 1, () => {
          this.$router.push("/")
        })
      } else {
        this.$message.warning("用户名密码错误！")
      }
    },
  },
}
</script>
