<template>
  <el-container class="app-container">
    <el-header class="app-header">Hello Vue 3.0</el-header>
    <el-container class="app-body">
      <el-aside width="80px" class="app-aside">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-footer class="app-footer">Power by Joe</el-footer>
  </el-container>
</template>

<style lang="scss" scoped>
.app-container {
  height: 100%;
}

.app-header {
  background: #ddd;
  font-weight: 700;
  display: flex;
  align-items: center;
}

.app-aside {
  background: #eee;
  width: 50px;

  a {
    color: #999;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
  a.router-link-active {
    background: #ddd;
  }
}

.app-footer {
  background: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
