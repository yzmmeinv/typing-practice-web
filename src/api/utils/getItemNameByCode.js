import store from "../../store";

const articleLanguage = store.state.article.articleLanguage;
const articleTag = store.state.article.articleTag;

function getItemNameByCode(itemtype, itemCode) {
  if (itemtype === "articleLanguage") {
    const item = articleLanguage.find(entry => entry.itemCode === itemCode);
    return item ? item.itemName : null;

  } else if (itemtype === "articleTag") {
    const item = articleTag.find(entry => entry.itemCode === itemCode);
    return item ? item.itemName : null;
  }
}
export default getItemNameByCode;
