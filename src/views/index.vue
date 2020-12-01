<template>
  <div class="index">
    <el-container>
      <el-header>Header</el-header>

      <el-container class="container">
        <el-aside width="200px">
          <!-- 导航栏 -->
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>讲师管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/teacher"> 添加讲师</el-menu-item>
                <el-menu-item index="/list">讲师列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>课程管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/course">导入课程分类</el-menu-item>
                <el-menu-item index=""> 课程分类列表 </el-menu-item>
                <el-menu-item index="">发布课程</el-menu-item>
                <el-menu-item index="">课程列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>内容管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">文案推荐</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>统计分析</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">统计表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <!-- 结束 -->
        <!-- 视图 -->
        <el-main>
          <router-view></router-view>
        </el-main>
        <!--  -->
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: rgb(84, 92, 100);
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  height: 100%;
  background: #545c64;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-menu {
  border: 0px;
  box-sizing: border-box;
}

.el-main {
  height: 100%;
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.index,
.el-container {
  height: 100%;
}
</style>