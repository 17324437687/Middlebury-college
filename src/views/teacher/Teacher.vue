<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>添加讲师</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 添加讲师表单 -->
    <el-card>
      <el-row>
        <el-col class="date" :span="12">
          <el-date-picker
            v-model="mode.date"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-col>
      </el-row>

      <el-row>
        <el-col class="date" :span="12">
          <el-select v-model="mode.title" placeholder="讲师头衔">
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
        <el-col class="date" :span="12">
          <el-input-number
            v-model="mode.num"
            label="讲师排序"
          ></el-input-number>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-input v-model="mode.name" placeholder="请输入讲师名称"></el-input>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
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

      <!-- 讲师图片 -->
      <el-row>
        <el-col class="date" :span="12">
          <el-upload
            action="http://localhost:5000/api/upload"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-success="actionUpload"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
        </el-col>
      </el-row>

      <el-row>
        <el-col class="date" :span="12">
          <el-button type="primary" @click="addTeacher">提交讲师列表</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { setUpdata } from "../../http/api";
export default {
  data() {
    return {
      mode: {},
      text: ["首席", "高级"],
      dialogImageUrl: "", //图片地址
      dialogVisible: false,
    };
  },

  methods: {
    addTeacher() {
      console.log(this.mode);
      setUpdata(this.mode).then((res) => {
        if (res.status !== 200) return this.$msg.error("提交讲师信息失败");
        this.$msg.success("提交成功");
        this.mode = {};
      });
    },
    //文件上传成功
    actionUpload(res) {
      this.mode.ImageUrl = res.data;
    },
    handleRemove(file, fileList) {
      //文件删除
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      //放大

      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },
};
</script>

<style scoped>
.date {
  text-align: left;
}
</style>