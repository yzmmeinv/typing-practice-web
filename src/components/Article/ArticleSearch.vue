<template>
  <a-input-search v-model:value="value" placeholder="input search text" enter-button @search="onSearch" />
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
</template>


<script setup>
import { ref } from 'vue';
import utils from '../../api/utils/componentUtil';
import { CloseOutlined } from '@ant-design/icons-vue';

const value = ref('');
const types = ref(['言情', '爱国', '小说', '歌词']);
const languages = ref(['中文', '英语', '韩语', '日语']);
const selectedType = ref([]);
const selectedLanguage = ref([]);


const onSearch = searchValue => {
  console.log('use value', searchValue);
  console.log('or use this.value', value.value);
};

const selectType = index => {
  if (selectedType.value.length <= 2) {
    if (selectedType.value.includes(types.value[index])) {
      utils.tip('不能重复选择', "warning");
    } else {
      selectedType.value.push(types.value[index]);
    }
  } else {
    utils.tip('最多只能选择三个', "warning");
  }
};
const selectLanguage = index => {
  if (selectedLanguage.value.length <= 0) {
    if (selectedLanguage.value.includes(languages.value[index])) {
      utils.tip('不能重复选择', "warning");
    } else {
      selectedLanguage.value.push(languages.value[index]);
    }
  } else {
    utils.tip('最多只能选择一个', "warning");
  }
};
const deleteType = index => {
  selectedType.value.splice(index, 1);
};
const deleteLanguage = index => {
  selectedLanguage.value.splice(index, 1);
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
</style>
