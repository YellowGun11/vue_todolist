<!--  -->
<template>
  <div id="index">
    <el-container>
      <el-aside width="200px" class="leftNav">
        <div class="navBox">
          <div class="userInfo">
            <el-avatar :size="80" :src="circleUrl"></el-avatar>
            <div>
              <span class="title">用户名字</span>
            </div>
          </div>
          <el-menu :default-active="$route.path"  background-color="#ccffff" active-text-color="#f2a24c" :router='true'>
            <el-menu-item index="/index/items">
              <i class="el-icon-date"></i>
              <span slot="title">待办项 </span>
              <span slot="title">0</span>
            </el-menu-item>
            <el-menu-item index="/index/finished">
              <i class="el-icon-document-checked"></i>
              <span slot="title">已完成 </span>
              <span slot="title">0</span>
            </el-menu-item>
            <el-menu-item index="/index/recycle">
              <i class="el-icon-delete"></i>
              <span slot="title">回收站 </span>
              <span slot="title">1</span>
            </el-menu-item>
          </el-menu>
        </div>

      </el-aside>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    };
  },

  components: {},

  computed: {},

  methods: {
  },
};
</script>

<style scoped>
#index {
  min-width: 100%;
  min-height: 100vh;
}
.leftNav {
  /* height: calc(100vh - 50px); */
  height: 100vh;
}
.navBox {
  margin: 20px 0;
  height: calc(100vh - 50px);
  border-right: 1px dotted #f2a24c;
}
.userInfo {
  margin-bottom: 10px;
}
</style>