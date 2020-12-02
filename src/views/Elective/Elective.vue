<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>发布课程</el-breadcrumb-item>
    </el-breadcrumb>

    <!--卡片 -->
    <el-card>
      <!-- 提示 -->
      <el-alert
        title="发布课程步骤"
        type="info"
        center
        show-icon
        :closable="false"
      ></el-alert>
      <!-- 步骤 -->
      <el-steps :active="active - 1" align-center>
        <el-step title="基本信息"> </el-step>
        <el-step title="视频章节"></el-step>
        <el-step title="课程大纲"></el-step>
        <el-step title="确认发布"></el-step>
      </el-steps>
      <!-- 侧边导航栏 -->
      <el-form ref="form" :model="form" label-width="80px">
        <el-tabs :tab-position="'left'" v-model="active">
          <el-tab-pane label="基本信息" name="0">
            <el-row>
              <el-col :span="12">
                <el-form-item label="课程标题">
                  <div class="text-align">
                    <el-select
                      v-model="form.specialty"
                      placeholder="请选择课程标题"
                    >
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
                  </div>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="主讲老师">
                  <div class="text-align">
                    <el-select v-model="form.teacher" placeholder="请选择讲师">
                      <el-option
                        v-for="(item, index) in name"
                        :key="index"
                        :label="item.name"
                        :value="item.name"
                      >
                      </el-option>
                    </el-select>
                  </div>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="课程分类">
                  <div class="text-align">
                    <el-select
                      multiple
                      v-model="form.title"
                      placeholder="请选择课程"
                    >
                      <el-option
                        v-for="item in text"
                        :key="item"
                        :label="item"
                        :value="item"
                      >
                      </el-option>
                    </el-select>
                  </div>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="课时">
                  <div class="text-align">
                    <el-input-number v-model="form.num"></el-input-number>
                  </div>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="价格">
                  <div class="text-align">
                    <el-input-number v-model="form.pirc"></el-input-number>
                  </div>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="课程简介">
                  <el-input
                    type="textarea"
                    :rows="3"
                    v-model="form.text"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="视频章节" name="1">
            <el-row>
              <el-col :span="12">
                <el-form-item label="章节">
                  <el-input v-model="form.chapter"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <!-- 视频上传 -->
            <el-row>
              <el-col class="date" :span="12">
                <div class="upload">
                  <el-form-item label="上传视频">
                    <el-upload
                      action="#"
                      list-type="picture-card"
                      :on-preview="handlePictureCardPreview"
                      :on-remove="handleRemove"
                      :on-success="actionUpload"
                    >
                      <i class="el-icon-plus"></i>
                    </el-upload>
                  </el-form-item>
                </div>
                <el-dialog :visible.sync="dialogVisible">
                  <video :src="dialogImageUrl"></video>
                </el-dialog>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="课程大纲" name="2">
            <el-row>
              <el-col :span="12">
                <el-form-item label="课程大纲">
                  <el-input
                    type="textarea"
                    :rows="5"
                    v-model="form.data"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="确认发布" name="3">
            <div class="upload">
              <el-button type="primary" @click="addElective"
                >发布课程</el-button
              >
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { list, course, getApi, conrseList } from "@/http/api";
export default {
  data() {
    return {
      active: "0",
      form: {},
      dialogImageUrl: "", //视频地址
      dialogVisible: false,

      name: {},
      options: [],
      text: [],
    };
  },
  created() {
    this.optionslist();
  },
  methods: {
    addElective() {
      console.log(this.form);
    },

    optionslist() {
      getApi().then((res) => {
        this.name = res.data.data;
      });
      list().then((res) => {
        if (res.status !== 200) return;

        this.options = res.data.data;
        // console.log(this.options);
      });
      course().then((res) => {
        if (res.status !== 200) return;
        this.text = res.data.data[0].course;
      });
    },

    actionUpload() {},
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
.el-alert {
  line-height: 0;
  margin: 20px 0;
}
.text-align {
  text-align: left;
}
.upload {
  text-align: left;
  margin: 20px 0;
}
</style>