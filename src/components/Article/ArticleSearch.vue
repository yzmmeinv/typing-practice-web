<template>
  <a-input-search v-model:value="value" placeholder="请输入文章标题" enter-button @search="onSearch" />
  <a-card>
    <div>
      <div class="tags">
        语言：
        <span v-for="(language, index) in selectedLanguage" :key="index">
          {{ language }}
          <CloseOutlined :style="{ fontSize: '12px' }" @click="deleteLanguage(index)" />
        </span>
      </div>
      <span v-for="(language, index) in languages" :key="index" @click="selectLanguage(index)"
        :class="{ 'selected': selectedLanguage.includes(language) }" class="tag">
        {{ language }}
      </span>
    </div>
  </a-card>
  <a-card>
    <div>
      <div class="tags">
        类型：
        <span v-for="(type, index) in selectedType" :key="index">
          {{ type }}
          <CloseOutlined :style="{ fontSize: '12px' }" @click="deleteType(index)" />
        </span>
      </div>
      <span v-for="(type, index) in types" :key="index" @click="selectType(index)"
        :class="{ 'selected': selectedType.includes(type) }" class="tag">
        {{ type }}
      </span>
    </div>
  </a-card>
  <a-card hoverable @click="handleStarClick" :style="{
    border: cardStared ? '1px solid #86DDFF' : '',
    color: cardStared ? '#298AE6' : '',
  }">
    <div class="userLike">
      我的收藏
    </div>
  </a-card>
  <a-card hoverable @click="handleLikeClick" :style="{
    border: cardLiked ? '1px solid #86DDFF' : '',
    color: cardLiked ? '#298AE6' : '',
  }">
    <div class="userLike">
      我的点赞
    </div>
  </a-card>
</template>


<script setup>
import { ref, defineEmits } from 'vue';
import utils from '../../api/utils/componentUtil';
import { CloseOutlined } from '@ant-design/icons-vue';

const value = ref('');
const types = ref(['小说', '散文', '童话', '诗歌', '叙事', '新闻', '哲学', '其他']);
const languages = ref(['中文', '英语', '韩语', '日语']);
const selectedType = ref([]);
const selectedLanguage = ref([]);
const cardLiked = ref(false);
const cardStared = ref(false);

const searchData = ref({
  title: '',
  language: null,
  tagMask: [],
});

const emit = defineEmits(['searchData']);
const ziChuanFu = () => {
  emit('searchData', searchData.value);
};
const onSearch = value => {
  searchData.value.title = value;
  ziChuanFu();
};

const selectType = index => {
  if (selectedType.value.length <= 2) {
    if (selectedType.value.includes(types.value[index])) {
      utils.tip('不能重复选择', "warning");
    } else {
      selectedType.value.push(types.value[index]);
      searchData.value.tagMask.push(index);
      ziChuanFu();
    }
  } else {
    utils.tip('最多只能选择三个', "warning");
  }
};
const selectLanguage = index => {
  if (selectedLanguage.value.includes(languages.value[index])) {
    utils.tip('不能重复选择', "warning");
  } else {
    selectedLanguage.value.splice(0, 1, languages.value[index]);
    searchData.value.language = index;
    ziChuanFu();
  }
};
const deleteType = (index) => {
  selectedType.value.splice(index, 1);
  searchData.value.tagMask.splice(index, 1);
  ziChuanFu();
};
const deleteLanguage = index => {
  selectedLanguage.value.splice(index, 1);
  searchData.value.language = null;
  ziChuanFu();
};

const handleStarClick = () => {
  cardStared.value = !cardStared.value;
};
const handleLikeClick = () => {
  cardLiked.value = !cardLiked.value;
};
</script>

<style scoped>
* {
  user-select: none;
}

.tag,
.tags span {
  display: inline-block;
  margin: 0.2rem;
  padding: 0.1rem 0.8rem;
  background-color: #DDF4FF;
  border-radius: 2rem;
  color: #298AE6;
  line-height: 1.5714285714285714;
  cursor: pointer;
}

.tags {
  min-height: 2.2rem;
  line-height: 2rem;
}

.selected {
  background-color: rgb(184, 231, 248);
  font-weight: bold;
}

.ant-card-bordered {
  margin-top: 1rem;
}

.tags .anticon-close {
  margin: 0;
  padding: 0;
}

.userLike {
  text-align: center;
  padding: 0;
}
</style>
