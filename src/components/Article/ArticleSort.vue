<template>
  <span>排列方式：</span>
  <a-space>
    <a-select ref="select" v-model:value="value" style="width: 120px" :options="options1"
      @change="handleChange"></a-select>
  </a-space>
  <a-button type="primary" @click="showDrawer">创建文章</a-button>
  <a-drawer :width="500" title="创建文章" :open="open" @close="onClose">
    <template #extra>
      <a-button style="margin-right: 8px" @click="onClose">关闭</a-button>
      <a-button type="primary" @click="submit">创建</a-button>
    </template>

    <a-form :model="form" layout="vertical">
      <a-row :gutter="16">
        <a-col :span="24">
          <a-form-item label="文章标题" name="title">
            <a-input v-model:value="form.title" placeholder="请输入你的标题" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item label="语言" name="language">
            <a-select v-model:value="form.language" placeholder="请选择你的语言">
              <a-select-option value=0>中文</a-select-option>
              <a-select-option value=1>英语</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="是否公开" name="isPublic">
            <a-select v-model:value="form.isPublic" placeholder="请选择是否公开">
              <a-select-option value=0>公开</a-select-option>
              <a-select-option value=1>私有</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="24">
          <a-form-item label="类型" name="tagMask">
            <a-select v-model:value="form.tagMask" mode="tags" placeholder="请选择你的类型">
              <a-select-option value=0>小说</a-select-option>
              <a-select-option value=1>散文</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="24">
          <a-form-item label="描述" name="summary">
            <a-textarea v-model:value="form.summary" :rows="2" placeholder="请输入你的文章描述" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="24">
          <a-form-item label="正文" name="content">
            <a-textarea v-model:value="form.content" :rows="4" placeholder="请输入文章正文" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>

  </a-drawer>
</template>
<script setup>
import { ref, defineEmits, reactive } from 'vue';
import api from '../../api';
import utils from '@/api/utils/componentUtil';

const sortord = ref(0);
const emit = defineEmits(['sortord']);
const ziChuanFu = () => {
  emit('sortord', sortord.value);
};
const value = ref('名称');
const options1 = ref([
  {
    value: 0,
    label: '名称',
  },
  {
    value: 1,
    label: '最新',
  },
  {
    value: 2,
    label: '最热',
  },
]);
const handleChange = value => {
  sortord.value = value;
  ziChuanFu();
};

const open = ref(false);
const showDrawer = () => {
  open.value = true;
};
const onClose = () => {
  open.value = false;
};
const submit = () => {
  open.value = false;
  api.articleApi.create(form).then(res => {
    console.log(res);
    utils.tip('创建成功', "success");
  });
};

const form = reactive({
  title: '',
  language: '',
  isPublic: '',
  tagMask: [],
  summary: '',
  content: '',
});
</script>

<style scoped>
* {
  user-select: none;
}

.ant-btn {
  float: right;
}
</style>
