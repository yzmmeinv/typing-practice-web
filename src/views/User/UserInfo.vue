<template>
  <div class="info">
    <h2>个人资料</h2>
    <div>
      <p>头像：</p>
      <a-tooltip placement="bottom">
        <template #title>
          <span>点击更换头像</span>
        </template>
        <div style="position: relative; display: inline-block;" @click="showDrawer">
          <a-avatar v-if="isValidAvatar" :src="avatarSrc" class="img">
          </a-avatar>
          <a-avatar v-else class="img"></a-avatar>
        </div>
      </a-tooltip>
      <p>用户名:</p><a-input v-model:value="user.nickName" :style="{ width: '250px' }" />
      <p>邮箱:</p><a-input v-model:value="user.email" disabled :style="{ width: '250px' }" />
      <p>
        性别：
        <a-radio-group v-model:value="gender" name="radioGroup">
          <a-radio value="1">男</a-radio>
          <a-radio value="2">女</a-radio>
        </a-radio-group>
      </p>
      <p>手机号:</p><a-input v-model:value="user.phone" disabled :style="{ width: '250px' }" />
      <p>地址:</p><a-input v-model:value="user.address" :style="{ width: '500px' }" />
      <p>简介:
      </p><a-textarea v-model:value="user.bio" :autosize="{ minRows: 3, maxRows: 6, }" :style="{ width: '500px' }" />
      <p>上次登录时间:</p><a-input v-model:value="user.lastLoginTime" disabled :style="{ width: '250px' }" />
    </div>
    <div class="button">
      <a-button type="primary" @click="updataInfo">更新个人信息</a-button>
    </div>
  </div>
  <a-drawer :height="250" title="选择头像" placement="bottom" :open="open" @close="onClose">
    <template #extra>
      <a-button style="margin-right: 8px" @click="onClose">取消</a-button>
      <a-button type="primary" @click="selectAvatar">确定选择</a-button>
    </template>
    <div class="select">
      <img v-for="avatar in avatars" :key="avatar.id" :src="require(`@/assets/images/avatar/${avatar.id}.jpg`)"
        :alt="'头像' + avatar.id" @click="changeAvatar(avatar.id)" :class="{ 'selected': avatar.id === avatarn }"
        class="avatar-img" />
    </div>
  </a-drawer>
</template>
  
<script setup>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import api from '../../api';
import utils from '../../api/utils/componentUtil';
import router from '../../router';

const store = useStore();
const user = ref({ ...store.state.user.user });
const gender = ref(user.value.gender?.toString());

const avatarNumber = ref(store.state.user.user.avatar);
const isValidAvatar = computed(() => ['1', '2', '3', '4'].includes(avatarNumber.value));
const avatarSrc = computed(() => isValidAvatar.value ? require(`@/assets/images/avatar/${avatarNumber.value}.jpg`) : null);
const avatarn = ref(store.state.user.user.avatar);

const avatars = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' }
];

const updataInfo = () => {
  api.userApi.updateInfo({
    nickName: user.value.nickName,
    address: user.value.address,
    gender: gender.value,
    bio: user.value.bio,
    avatar: avatarNumber.value,
  }).then(res => {
    console.log(res);
    store.dispatch("getinfo", {
      success() {
        utils.tip("修改成功", "success");
        router.go(0);
      },
      error(e) {
        console.error("登录报错：", e);
      }
    });
  });
};
const open = ref(false);
const showDrawer = () => {
  open.value = true;
};
const onClose = () => {
  open.value = false;
};
const selectAvatar = () => {
  open.value = false;
  avatarNumber.value = avatarn.value;
  updataInfo();
};
const changeAvatar = (avatarNum) => {
  avatarn.value = avatarNum;
};
</script>

<style scoped>
.info {
  margin: 0 20px;
  padding: 0 10px;
}

.button {
  margin: 20px 0;
}

.img {
  width: 80px;
  height: 80px;
  cursor: pointer;
}

.avatar-img {
  text-align: center;
  box-sizing: border-box;
  width: 80px;
  height: 80px;
  margin: 10px 10px 0 10px;
  cursor: pointer;
  border-radius: 50%;
}

.selected {
  /* 添加选中效果，例如边框 */
  border: 2px solid rgb(59, 177, 98);
}

.select {
  text-align: center;
}
</style>
