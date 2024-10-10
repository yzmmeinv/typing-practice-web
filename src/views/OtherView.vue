<template>
  <button @click="sendMessage">发送</button>
  <button @click="initSocket">建立连接</button>
  <button @click="handleOnClose">断开连接</button>
  <input type="text" v-model="sendValue">
  <input type="text">
</template>

<script setup>
import { ref } from 'vue';
import protobuf from 'protobufjs';
import * as Constant from '../js/Constant';
// import responseProto from '../assets/proto/ResponseProtobuf.proto';

let webSocket = null;
let webSocketIsOpen = false; // 连接开启状态
let webSocketReconnectCount = 0; // 重连次数
const webSocketReconnectMaxCount = 3; // 最大重连次数
const heartbeat = '[0513]';
let webSocketPingTimer = null; // 心跳定时器
const webSocketPingTime = 10000; // 心跳的间隔，当前为10秒,
const urll = 'localhost:3333';
const types = 'ws';
const sendValue = ref();
const msgRoot = protobuf.parse(Constant.MESSAGE_PROTOBUF).root;
const msgType = msgRoot.lookupType('Msg');

// WebSocket 编码
const WSResEncode = (data) => {
  // 解析proto文件中的消息结构
  const message = msgType.create(data);
  const encodedMessage = msgType.encode(message).finish();
  console.log(data, ' -> 编码之后 -> ', encodedMessage);
  return encodedMessage;
};
// WebSocket 解码
const WSResDecode = (data) => {
  // const decodedMessage = ResponseType.decode(data);
  // const decodedData = ResponseType.toObject(decodedMessage, { defaults: true });
  // console.log('解码之后', decodedData);
  return data;
};

// 建立连接
const initSocket = () => {
  // 有参数的情况下：
  let url = `ws://${urll}/${types}`;
  webSocket = new WebSocket(url);
  webSocket.onopen = handleOnOpen;
  webSocket.onclose = handleOnClose;
  webSocket.onmessage = handleOnMessage;
  webSocket.onerror = handleOnError;

};
// 在 WebSocket 连接成功后，定时发送心跳包
const startHeartbeat = () => {
  webSocketPingTimer = setTimeout(() => {
    if (!webSocketIsOpen) {
      return false;
    }
    console.log("心跳", heartbeat);
    webSocket.send(heartbeat);
    clearTimeout(webSocketPingTimer);
    // 重新执行
    startHeartbeat();
  }, webSocketPingTime);
};
// WebSocket 重连
const webSocketReconnect = () => {
  if (webSocketIsOpen) {
    return false;
  }
  this.webSocketReconnectCount += 1;
  // 判断是否到了最大重连次数
  if (webSocketReconnectCount >= webSocketReconnectMaxCount) {
    // webSocketWarningText = "重连次数超限";
    return false;
  }
  // 初始化
  initSocket();

  // 每过 5 秒尝试一次，检查是否连接成功，直到超过最大重连次数
  let timer = setTimeout(() => {
    webSocketReconnect();
    clearTimeout(timer);
  }, 5000);
};
// 建立连接成功后的状态
const handleOnOpen = () => {
  console.log('websocket连接成功');
  webSocketIsOpen = true;
  webSocketReconnectCount = 0;
  startHeartbeat();
};
// 获取到后台消息的事件，操作数据的代码在onmessage中书写
const handleOnMessage = (res) => {
  // res就是后台实时传过来的数据
  console.log(WSResDecode(res));
  //给后台发送数据
};
const sendMessage = () => {
  console.log('发送了数据', sendValue.value);
  let msg = WSResEncode(sendValue.value);
  webSocket.send(msg);
};
// 关闭连接
const handleOnClose = () => {
  webSocket.close();
  webSocketIsOpen = false;
  webSocket = null;
  console.log('websocket连接已关闭');
};
//连接失败的事件
const handleOnError = (res) => {
  console.log('websocket连接失败');
  // 重连
  webSocketReconnect();
  // 打印失败的数据
  console.log(res);
}

</script>

<style scoped></style>
