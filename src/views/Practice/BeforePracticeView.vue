<template>
  <a-card title="练习文章" :headStyle="{ textAlign: 'center' }">
    <div>
      <a-row>
        <a-col :span="4">
          选择文章：
        </a-col>
        <a-col :span="12">
          <a-button type="link" @click="route">{{ articleInfo.articleName }}</a-button>
          <a-button type="dashed">随机选</a-button>
        </a-col>
      </a-row>
    </div>
    <div>
      <a-row>
        <a-col :span="4">
          时间：
        </a-col>
        <a-col :span="10">
          <a-slider v-model:value="inputValue" :min="1" :max="120" :disabled="checked" />
        </a-col>
        <a-col :span="5">
          <a-input-number v-model:value="inputValue" :min="1" :max="120" style="margin-left: 16px" :disabled="checked"
            :addonAfter="addonAfterText" />
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12" :offset="4">
          <a-checkbox v-model:checked="checked">不限时间</a-checkbox>
        </a-col>
      </a-row>
    </div>
    <div>
      <a-row>
        <a-col :span="4">
          模式：
        </a-col>
        <a-col :span="8">
          <a-select v-model:value="value" style="width: 90%" :options="options" @change="handleChange"></a-select>
        </a-col>
        <a-col :span="11">
          {{ tip }}
        </a-col>
      </a-row>
    </div>
    <div class="button">
      <a-button type="primary">开始练习</a-button>
    </div>
  </a-card>
</template>
  
<script setup>
import { ref, reactive } from 'vue';
import router from '@/router/';
import { useRoute } from 'vue-router';

const inputValue = ref(1);
const value = ref('模式一');
const checked = ref(false);
const addonAfterText = 'min';
const tip = ref('模式一为行行对照');

const routes = useRoute();
const articleInfo = reactive({
  articleId: routes.query.articleId || null,
  articleName: routes.query.articleName || "点击选择文章",
});

const options = ref([
  {
    value: 0,
    label: '模式一',
  },
  {
    value: 1,
    label: '模式二',
  },
  {
    value: 2,
    label: '模式三',
  },
]);
const handleChange = value => {
  console.log(value); // { key: "lucy", label: "Lucy (101)" }
  if (value === 0) {
    tip.value = '模式一为行行对照';
  } else if (value === 1) {
    tip.value = '模式二为自由排版且标出错误';
  } else if (value === 2) {
    tip.value = '模式三为自由排版且不标出错误';
  }
};

const route = () => {
  router.push({
    name: 'article',
  });
};
</script>
  
<style scoped>
:where(.css-dev-only-do-not-override-hkh161).ant-col-4 {
  text-align: right;
  margin-right: 10px;
  line-height: 2rem;
}

:where(.css-dev-only-do-not-override-hkh161).ant-row {
  margin-bottom: 1rem;
}

.button {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}

.ant-checkbox-wrapper {
  margin-left: 9px;
}

:where(.css-dev-only-do-not-override-hkh161).ant-col-11 {
  line-height: 2rem;
  color: #999;
  font-size: 12px;
}
</style>
