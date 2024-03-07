
const practiceUtils = {
  //计算正确率
  calculateAccuracy(articleInfo, value2) {
    if (!articleInfo || !articleInfo.content) {
      return 0; // 或者其他处理方式，表示未能正确获取 articleInfo
    }
    const originalText = articleInfo ? articleInfo.content : '';
    const userInput = value2;

    if (userInput.length === 0) {
      return 0; // 或者其他处理方式
    }
    // 获取两个文本框的长度
    const minLength = Math.min(originalText.length, userInput.length);

    // 统计相同字符的数量
    let correctCharacters = 0;
    for (let i = 0; i < minLength; i++) {
      if (originalText[i] === userInput[i]) {
        correctCharacters++;
      }
    }
    // 计算正确率
    const accuracy = (correctCharacters / userInput.length) * 100;
    return accuracy.toFixed(2); // 保留两位小数
  },

  //计算进度
  calculateInputProgress(articleInfo, value2) {
    const originalText = articleInfo.content;
    const userInput = value2;

    if (!originalText || originalText.length === 0) {
      return 0; // 避免除以零的情况
    }

    // 计算已输入字符百分比
    let progress = (userInput.length / originalText.length) * 100;
    if (progress >= 100) {
      progress = 100;
    }
    return progress.toFixed(2);
  },

  //设置颜色
  setContentToTextarea(contentContainer) {
    // 获取包含 HTML 内容的 <div>
    const container = contentContainer;
    // 在这里可以对 <div> 中的 <span> 设置样式
    const errorSpans = container.querySelectorAll('.error');
    errorSpans.forEach(span => {
      span.style.color = 'red';
      // 其他样式设置
    });

    const missSpans = container.querySelectorAll('.miss');
    missSpans.forEach(span => {
      span.style.color = "#eee";
      // 其他样式设置
    });

    const moreSpans = container.querySelectorAll('.more');
    moreSpans.forEach(span => {
      span.style.color = "pink";
      // 其他样式设置
    });
  },
};
export default practiceUtils;
