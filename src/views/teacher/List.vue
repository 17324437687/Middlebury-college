<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/teacher' }"
        >添加讲师</el-breadcrumb-item
      >
      <el-breadcrumb-item>讲师列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <el-row>
        <el-col :span="12">
          <el-input v-model="text" placeholder="请输入名称"></el-input>
        </el-col>
        <el-col :span="2">
          <el-button type="primary">查询</el-button>
        </el-col>
      </el-row>
    </el-card>
    <!-- 表格 -->
    <el-card>
      <el-table border :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="120">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="num" label="排序" width="80"> </el-table-column>
        <el-table-column prop="title" label="头衔" width="80">
        </el-table-column>
        <el-table-column
          prop="brief"
          show-overflow-tooltip
          label="简介"
          width="280"
        >
        </el-table-column>
        <el-table-column label="操作">
          <template>
            <div>
              <el-button type="primary" size="mini">编辑</el-button>
              <el-button type="primary" size="mini">删除</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
};
</script>

<style>
</style>