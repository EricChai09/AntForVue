<template>
  <a-layout class="container">
    <a-layout-sider
      class="left-menu"
      v-model="collapsed"
      :trigger="null"
      collapsible
    >
      <div class="logo">哈哈</div>
      <a-menu
        theme="dark"
        mode="inline"
        :default-selected-keys="selectedKeys"
        :defaultOpenKeys="openKeys"
      >
        <a-menu-item key="/">
          <router-link to="/"
            ><a-icon type="user" /> <span>首页</span></router-link
          >
        </a-menu-item>
        <a-sub-menu key="用户管理">
          <span slot="title"
            ><a-icon type="appstore" /><span>用户管理</span></span
          >
          <a-menu-item key="/UserList">
            <router-link to="/UserList"><span>员工列表</span></router-link>
          </a-menu-item>
          <a-menu-item key="2-2">
            员工统计
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="业务管理">
          <span slot="title"
            ><a-icon type="appstore" /><span>业务管理</span></span
          >
          <a-menu-item key="/WorkList">
            <router-link to="/WorkList"><span>工单列表</span></router-link>
          </a-menu-item>
          <a-menu-item key="3-2">
            投诉列表
          </a-menu-item>
          <a-menu-item key="3-3">
            客户列表
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />

        <a-dropdown class="user-line">
          <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
            admin <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;"><a-icon type="edit" /> 修改密码</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;" @click="logout"
                ><a-icon type="logout" /> 注销登录</a
              >
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <Bread />
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import Bread from "~c/Bread"
export default {
  components: {
    Bread,
  },
  data() {
    return {
      collapsed: false,
      selectedKeys: [],
      openKeys: [],
    }
  },
  methods: {
    logout() {
      this.$router.push("/login")
    },
  },
  watch: {},
  created() {
    if (this.$route.meta && this.$route.meta.module) {
      this.openKeys = [this.$route.meta.module]
    }
    this.selectedKeys = [this.$route.path]
  },
}
</script>
<style lang="scss">
.container {
  height: 100vh;
  .left-menu {
    height: 100vh;
    overflow-y: scroll;
  }
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 18px;
    line-height: 32px;
    text-align: center;
    letter-spacing: 2px;
    color: #fff;
    font: {
      weight: bold;
      family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    }
  }
  .user-line {
    float: right;
    margin-right: 20px;
  }
}

::-webkit-scrollbar-track-piece {
  //滚动条凹槽的颜色，还可以设置边框属性
  background-color: #f8f8f8;
}
::-webkit-scrollbar {
  //滚动条的宽度
  width: 9px;
  height: 9px;
}
::-webkit-scrollbar-thumb {
  //滚动条的设置
  background-color: #dddddd;
  background-clip: padding-box;
  min-height: 28px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #bbb;
}
</style>
