
<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>创建课程分类</el-breadcrumb-item>
      <el-breadcrumb-item>课程分类列表</el-breadcrumb-item>
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
    <!--课程分类列表-->
    <el-card>
      <el-table :data="tableData">
        <el-table-column type="index"></el-table-column>
        <el-table-column type="expand">
          <template slot-scope="scope">
            <div>
              <el-tag v-for="(item, i) in scope.row.title" :key="i">
                {{ item }}
              </el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="date"
          show-overflow-tooltip
          label="日期"
          width="120"
        >
        </el-table-column>

        <el-table-column
          prop="_id"
          label="课程代码"
          show-overflow-tooltip
          width="220"
        ></el-table-column>

        <el-table-column
          prop="teacher"
          label="姓名"
          width="120"
        ></el-table-column>
        <el-table-column
          prop="specialty"
          label="专业"
          width="180"
        ></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div>
              <el-button
                type="primary"
                size="mini"
                @click="updata(scope.row, 'u')"
                >编辑</el-button
              >
              <el-button
                type="primary"
                size="mini"
                @click="delelist(scope.row, 'd')"
                >删除</el-button
              >
            </div>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <el-row>
        <el-col :span="24">
          <div class="pagination">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="paginations.page_index"
              :page-sizes="paginations.page_sizes"
              :page-size="paginations.page_size"
              :layout="paginations.layout"
              :total="paginations.total"
            >
            </el-pagination>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { getConrseList } from "@/http/api";
export default {
  data() {
    return {
      text: "",
      tableData: [],
      allTableData: [],
      //分页
      paginations: {
        page_index: 1, //当前在那一页
        total: 0, //数据的总数
        page_size: 5, //一页显示多少条
        page_sizes: [5, 15, 25], //每页显示多少条
        layout: "total, sizes, prev, pager, next, jumper", //翻页属性
      },
    };
  },
  created() {
    this.getlist();
  },
  methods: {
    getlist() {
      getConrseList().then((res) => {
        this.allTableData = res.data.data;
        this.setPaginations();
      });
    },

    // 分页
    setPaginations() {
      //分页属性
      this.paginations.total = this.allTableData.length;
      this.paginations.page_index = 1;
      this.paginations.page_size = 5;
      // 设置默认的分页数据
      this.tableData = this.allTableData.filter((item, index) => {
        return index < this.paginations.page_size;
      });
    },
    handleSizeChange(page_size) {
      this.paginations.page_index = 1;
      this.paginations.page_size = page_size;
      this.tableData = this.allTableData.filter((item, index) => {
        return index < page_size;
      });
    },
    handleCurrentChange(page) {
      //获取当前页
      let index = this.paginations.page_size * (page - 1);
      let nums = this.paginations.page_size * page;
      let tables = [];
      for (let i = index; i < nums; i++) {
        if (this.allTableData[i]) {
          tables.push(this.allTableData[i]);
        }
        this.tableData = tables;
      }
    },
  },
};
</script>

<style scoped>
.el-tag {
  margin: 0 5px;
}
</style>