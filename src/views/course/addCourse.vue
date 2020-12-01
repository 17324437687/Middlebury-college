<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>创建课程分类</el-breadcrumb-item>
    </el-breadcrumb>
    <!--  -->
    <el-card>
      <el-row>
        <el-col class="card" :span="12">
          <el-date-picker
            v-model="mode.date"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-col>
      </el-row>

      <el-row>
        <el-col class="card" :span="12">
          <el-select v-model="mode.title" placeholder="请选择专业">
            <el-option
              v-for="item in text"
              :key="item"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="card" :span="12">
          <el-select v-model="mode.title" placeholder="请选择课程">
            <el-option
              v-for="item in text"
              :key="item"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="card" :span="12">
          <el-select v-model="mode.title" placeholder="请选择讲师">
            <el-option
              v-for="item in text"
              :key="item"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="card" :span="12">
          <el-button type="primary">创建课程分类</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: {},
      text: ["首席", "高级"],
    };
  },
};
</script>

<style scoped>
.card {
  line-height: 0;
  text-align: left;
}
</style>