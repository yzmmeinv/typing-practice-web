<template>
  <div>
    <h2>WebSocket Connection Status</h2>
    <!-- 动态显示 WebSocket 连接状态 -->
    <label>{{ wsStatus }}</label>

    <h2>WebSocket Messages</h2>
    <!-- 显示收到的消息列表 -->
    <ul>
      <li v-for="(msg, index) in messages" :key="index">{{ msg }}</li>
    </ul>

    <h2>Send Message</h2>
    <!-- 输入框用于输入要发送的消息 -->
    <input v-model="newMessage" placeholder="Enter your message" />
    <button @click="sendMessage">Send</button>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

let ws = null; // 用来保存 WebSocket 实例
const messages = ref([]); // 用来保存收到的消息
const newMessage = ref(''); // 保存输入框中的消息内容
const address = 'localhost:3333';
let wsStatus = ref('init'); // 连接状态：'init', 'connected', 'connecting', 'disconnected'
let webSocketPingTimer = null; // 心跳定时器
const webSocketPingTime = 9000; // 心跳的间隔，当前为9秒,
const heartbeat = '[0513]';

// 在组件挂载时建立 WebSocket 连接
onMounted(() => {
  if (wsStatus.value != 'connected') {
    connectWebSocket();
  }
});

// 在组件卸载时关闭 WebSocket 连接
onBeforeUnmount(() => {
  if (ws) {
    ws.close();
  }
});

// 连接 WebSocket 服务器
const connectWebSocket = () => {
  // todo 刷新access时机
  wsStatus.value = 'connecting'
  ws = new WebSocket(`ws://${address}/ws?a=${store.state.user.access}`); // 后端WebSocket服务的地址

  ws.onopen = handleOnOpen;
  ws.onclose = handleOnClose;
  ws.onmessage = handleOnMessage;
  ws.onerror = handleOnError;
};

// WebSocket 打开连接时的处理方法
const handleOnOpen = () => {
  wsStatus.value = 'connected'; // 更新状态为已连接
  startHeartbeat();
  console.log('WebSocket connection established');
};

// WebSocket 关闭连接时的处理方法
const handleOnClose = () => {
  wsStatus.value = 'disconnected'; // 更新状态为未连接
  clearTimeout(webSocketPingTimer);
  console.log('WebSocket connection closed');
};

// WebSocket 收到消息时的处理方法
const handleOnMessage = (event) => {
  console.log('Message received from server:', event.data);
  messages.value.push(event.data); // 将收到的消息添加到 messages 列表

  // 如果收到 CONFIRM_HEARTBEAT，则立即发送心跳
  if (event.data === 'CONFIRM_HEARTBEAT') {
    sendMessage(heartbeat);
  }
};

// WebSocket 发生错误时的处理方法
const handleOnError = (error) => {
  wsStatus.value = 'disconnected'; // 更新状态为未连接
  console.error('WebSocket error:', error);
};

const startHeartbeat = () => {
  webSocketPingTimer = setTimeout(() => {
    if (wsStatus.value !== 'connected') {
      return false;
    }
    console.log("心跳", heartbeat);
    sendMessage(heartbeat);
    clearTimeout(webSocketPingTimer);
    // 重新执行
    startHeartbeat();
  }, webSocketPingTime);
};

// 发送消息到 WebSocket 服务器
const sendMessage = (msg) => {
  if (!msg) {
    msg = newMessage.value;
  }
  if (ws && wsStatus.value === 'connected') {
    ws.send(msg); // 发送输入框中的消息
    messages.value.push(`You: ${msg}`); // 将发送的消息显示到消息列表中
    newMessage.value = ''; // 清空输入框
  } else {
    console.error('Cannot send message. WebSocket is not connected.');
  }
};
</script>

<style scoped></style>
