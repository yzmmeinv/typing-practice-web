<template>
  <a-table class="ant-table-striped" :dataSource="dataSource" :columns="columns" :pagination="pagination"
    :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-striped' : null)" v-if="!status">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'action'">
        <span>
          <a @click="viewDetails(record.exerciseId)">查看详情</a>
        </span>
      </template>
    </template>
  </a-table>
  <div v-else>
    <div class="header" @click="back">
      <ArrowLeftOutlined />&nbsp; 返回
    </div>
    <AfterPracticeView />
  </div>
</template>

<script setup>
import { ref, defineProps, watch, defineEmits, onMounted, provide } from 'vue';
import utils from '../../api/utils/generalUtil';
import api from '../../api';
import AfterPracticeView from '../../views/Practice/AfterPracticeView.vue';
import { ArrowLeftOutlined } from '@ant-design/icons-vue';

const props = defineProps(['listData']);
const dataSource = ref(props.listData);
const scoreInfo = ref();
const status = ref(false);

watch(() => props.listData, (newListData) => {
  if (newListData) {
    dataSource.value = newListData.list.map((item) => {
      item.res = sceneMapping[item.scene](item);
      item.scene = item.scene === 0 ? "练习" : item.scene === 1 ? "对战" : "挑战";
      item.mode = item.mode === 1 ? "一" : item.mode === 2 ? "二" : "三";
      return item;
    });
    pagination.value.total = newListData.total;
  } else {
    utils.tip('无数据', "error");
  }
});

const sceneMapping = {
  0: (item) => item.result + '分',
  1: (item) => item.result + ' / ' + item.baseResult,
  2: (item) => {
    if (item.result > item.baseResult) {
      return "胜";
    } else if (item.result < item.baseResult) {
      return "败";
    } else {
      return "平";
    }
  }
};
const pagination = ref({
  pageSize: 10,
  total: 0,
  page: 1,
  onChange: page => {
    pageData.value.page = page;
    ziChuanFu();
  },
});
const pageData = ref({
  pageSize: pagination.value.pageSize,
  total: pagination.value.total,
  page: pagination.value.page,
});
const emit = defineEmits(['pageData']);
const ziChuanFu = () => {
  emit('pageData', pageData.value);
};

onMounted(() => {
  ziChuanFu();
});

const viewDetails = (id) => {
  api.practiceApi.scoreGetInfo(id).then(res => {
    if (res.data.success) {
      scoreInfo.value = res.data.data;
      status.value = true;
    } else {
      utils.tip("成绩有误", "error");
    }
  });
};
provide('scoreInfo', scoreInfo);

const back = () => {
  status.value = false;
};
const columns = [
  {
    title: '结果',
    dataIndex: 'res',
    key: 'res',
  },
  {
    title: '场景',
    dataIndex: 'scene',
    key: 'scene',
  },
  {
    title: '模式',
    dataIndex: 'mode',
    key: 'mode',
  },
  {
    title: '均速(字/分)',
    dataIndex: 'speed',
    key: 'speed',
  },
  {
    title: '用时(秒)',
    dataIndex: 'actualDuration',
    key: 'actualDuration',
  },
  {
    title: '评分',
    dataIndex: 'ranking',
    key: 'ranking',
  },
  {
    title: '时间',
    dataIndex: 'createTime',
    key: 'createTime',
  },
  {
    title: 'Action',
    key: 'action',
  },
];
</script>

<style scoped>
[data-doc-theme='light'] .ant-table-striped :deep(.table-striped) td {
  background-color: #fafafa;
}

[data-doc-theme='dark'] .ant-table-striped :deep(.table-striped) td {
  background-color: rgb(29, 29, 29);
}

.header {
  margin: 10px 0;
  font-size: 18px;
  cursor: pointer;
}
</style>
../../api/utils/generalUtil
