import {observable, action} from "mobx";
import {CONTENT, STYLE, MARKDOWN_THEME_ID, BASIC_THEME_ID, STYLE_LABELS, THEME_LIST} from "../utils/constant";
import {replaceStyle, addStyleLabel} from "../utils/helper";
import TEMPLATE from "../template/index";

class Content {
  @observable content;

  @observable subject;

  @observable authors;

  @observable company;

  @observable createdTime;

  @observable style;

  @observable themeList;

  @observable markdownEditor;

  @action
  setThemeList = (themeList) => {
    this.themeList = themeList;
    window.localStorage.setItem(THEME_LIST, JSON.stringify(themeList));
  };

  @action
  setMarkdownEditor = (markdownEditor) => {
    this.markdownEditor = markdownEditor;
  };

  @action
  setContent = (content) => {
    this.content = content;
    window.localStorage.setItem(CONTENT, content);
  };

  @action
  setSubject = (subject) => {
    this.subject = subject;
    window.localStorage.setItem("subject", subject);
  };

  @action
  setAuthors = (authors) => {
    this.authors = authors;
    window.localStorage.setItem("authors", authors);
  };

  @action
  setCompany = (company) => {
    this.company = company;
    window.localStorage.setItem("company", company);
  };

  @action
  setCreatedTime = (createdTime) => {
    this.createdTime = createdTime;
    window.localStorage.setItem("createdTime", createdTime);
  };

  @action
  setStyle = (style) => {
    this.style = style;
    replaceStyle(MARKDOWN_THEME_ID, style);
  };

  // 自定义样式
  @action
  setCustomStyle = (style = "") => {
    // 如果传入则更新
    if (style) {
      window.localStorage.setItem(STYLE, style);
    }
    this.style = window.localStorage.getItem(STYLE);
    replaceStyle(MARKDOWN_THEME_ID, this.style);
  };
}

const store = new Content();

// 如果为空先把数据放进去
if (window.localStorage.getItem(CONTENT) === null) {
  window.localStorage.setItem(CONTENT, TEMPLATE.content);
}
if (!window.localStorage.getItem(STYLE)) {
  window.localStorage.setItem(STYLE, TEMPLATE.custom);
}
if (!window.localStorage.getItem(THEME_LIST)) {
  window.localStorage.setItem(
    THEME_LIST,
    JSON.stringify([
      {themeId: "normal", name: "默认主题", css: TEMPLATE.normal},
      {themeId: "custom", name: "自定义", css: TEMPLATE.custom},
    ]),
  );
}

store.themeList = JSON.parse(window.localStorage.getItem(THEME_LIST));

// 在head中添加style标签
addStyleLabel(STYLE_LABELS);

// 初始化整体主题
replaceStyle(BASIC_THEME_ID, TEMPLATE.basic);

store.content = window.localStorage.getItem(CONTENT);
store.subject = window.localStorage.getItem("subject");
store.authors = window.localStorage.getItem("authors");
store.company = window.localStorage.getItem("company");
store.createdTime = window.localStorage.getItem("createdTime");

export default store;
