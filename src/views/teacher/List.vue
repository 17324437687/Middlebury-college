<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/teacher' }"
        >添加讲师</el-breadcrumb-item
      >
      <el-breadcrumb-item>讲师列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 查询 -->
    <el-card>
      <el-row>
        <el-col :span="12">
          <el-input v-model="text" placeholder="请输入名称"></el-input>
        </el-col>
        <el-col :span="2">
          <el-button type="primary" @click="inquire">查询</el-button>
        </el-col>
      </el-row>
    </el-card>
    <!-- 表格 -->
    <el-card>
      <!-- 查询表格 -->
      <el-table
        v-if="inquireData.length != 0"
        border
        :data="inquireData"
        style="width: 100%"
      >
        <el-table-column
          prop="date"
          show-overflow-tooltip
          label="日期"
          width="120"
        >
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
          width="380"
        >
        </el-table-column>
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

      <el-table v-else border :data="tableData" style="width: 100%">
        <el-table-column
          prop="date"
          show-overflow-tooltip
          label="日期"
          width="120"
        >
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
          width="380"
        >
        </el-table-column>
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

    <!-- 对话框 -->
    <el-dialog
      :title="title"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
    >
      <div>
        <el-row>
          <el-col>
            <el-input
              v-model="mode.name"
              disabled
              placeholder="请输入讲师名称"
            ></el-input>
          </el-col>
        </el-row>

        <el-row>
          <el-col>
            <el-input
              v-model="mode.brief"
              placeholder="请输入讲师简介"
            ></el-input>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-input
              type="textarea"
              :rows="5"
              v-model="mode.textarea"
              placeholder="请输入讲师资历"
            ></el-input>
          </el-col>
        </el-row>

        <el-row>
          <el-col class="date">
            <el-select v-model="mode.title" placeholder="讲师头衔">
              <el-option
                v-for="item in texts"
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
          </el-col>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="Visible">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getApi, getlis, updataTeacher, deleteList } from "../../http/api";
export default {
  data() {
    return {
      text: "",
      tableData: [],
      inquireData: [],
      allTableData: [],
      // 对话框
      centerDialogVisible: false,
      mode: {},
      texts: ["首席", "高级"],
      ID: "",
      str: "",
      title: "",
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
    this.getTeacher();
  },
  methods: {
    // 查询操作
    inquire() {
      let name = "name";
      getlis(name, this.text).then((res) => {
        if (res.status !== 200) return this.$msg.error("获取信息失败");
        this.inquireData = res.data.data;
        this.$msg.success("获取信息成功");
      });
    },
    // 获取所有的讲师数据
    getTeacher() {
      getApi(this.quire).then((res) => {
        if (res.status !== 200) return this.$msg.error("获取信息失败");
        this.allTableData = res.data.data;
        // 设置分页
        this.setPaginations();
        this.$msg.success("获取信息成功");
      });
    },

    // 编辑
    updata(data, str) {
      this.centerDialogVisible = true;
      this.str = str;
      this.ID = data._id;
      this.title = "修改";
      this.mode.name = data.name;
    },

    // 删除
    delelist(data, str) {
      this.centerDialogVisible = true;
      this.str = str;
      this.ID = data._id;
      this.title = "确认删除";
      this.mode.name = data.name;
      this.mode.textarea = data.textarea;
      this.mode.brief = data.brief;
      this.mode.title = data.title;
    },
    Visible() {
      if (this.str == "u") {
        updataTeacher(this.ID, this.mode).then((res) => {
          if (res.status !== 200) return this.$msg.error("更新失败");
          this.getTeacher();
          this.inquireData = [];
          this.mode = {};
          this.$msg.success("更新成功");
          // console.log(res);
        });
      }

      if (this.str == "d") {
        deleteList(this.ID).then((res) => {
          if (res.status !== 200) return this.$msg.error("删除失败");
          this.getTeacher();
          this.inquireData = [];
          this.mode = {};
          this.$msg.success("删除成功");
        });
      }
      this.centerDialogVisible = false;
    },
    //分页
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
      let index = this.paginations.page_size * page - 1;
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
.pagination {
  text-align: left;
  margin-top: 10px;
}
</style>