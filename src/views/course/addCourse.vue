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
          <el-select v-model="mode.specialty" placeholder="请选择专业">
            <el-option-group
              v-for="group in options"
              :key="group.label"
              :label="group.label"
            >
              <el-option
                v-for="item in group.options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-option-group>
          </el-select>
        </el-col>
      </el-row>

      <el-row>
        <el-col class="card" :span="12">
          <el-select multiple v-model="mode.title" placeholder="请选择课程">
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
          <el-select v-model="mode.teacher" placeholder="请选择讲师">
            <el-option
              v-for="(item, index) in name"
              :key="index"
              :label="item.name"
              :value="item.name"
            >
            </el-option>
          </el-select>
        </el-col>
      </el-row>

      <el-row>
        <el-col class="card" :span="12">
          <el-button type="primary" @click="addTeacher">创建课程分类</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { list, course, getApi, conrseList } from "@/http/api";
export default {
  data() {
    return {
      mode: {},
      name: {},
      text: "",
      options: [],
    };
  },
  created() {
    this.optionslist();
  },
  methods: {
    optionslist() {
      list().then((res) => {
        if (res.status !== 200) return;

        this.options = res.data.data;
        // console.log(this.options);
      });
      course().then((res) => {
        if (res.status !== 200) return;
        this.text = res.data.data[0].course;
      });
      getApi().then((res) => {
        this.name = res.data.data;
      });
    },

    addTeacher() {
      // console.log(this.mode);
      conrseList(this.mode).then((res) => {
        if (res.status != 200) return this.$msg.erroe("提交失败");
        this.$msg.success("提交成功");
        this.mode = {};
      });
    },
  },
};
</script>

<style scoped>
.card {
  line-height: 0;
  text-align: left;
}
</style>