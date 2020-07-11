import React, {Component} from "react";
import {observer, inject} from "mobx-react";
import {message, Tooltip} from "antd";

import {solveWeChatMath, solveHtml, copySafari} from "../../utils/converter";
import {LAYOUT_ID, ENTER_DELAY, LEAVE_DELAY, LOCAL_STORAGE_YTARTICLE} from "../../utils/constant";
import SvgIcon from "../../icon";
import "./Yitian.css";

@inject("content")
@inject("navbar")
@inject("imageHosting")
@inject("dialog")
@observer
class Wechat extends Component {
  constructor(props) {
    super(props);
    this.html = "";
  }

  saveContent = () => {
    const layout = document.getElementById(LAYOUT_ID); // 保护现场
    const html = layout.innerHTML;
    solveWeChatMath();
    // this.html = solveHtml();
    // copySafari(this.html);
    const {markdownEditor} = this.props.content;
    const content = markdownEditor.getValue();
    const ytArticle = window.localStorage.getItem(LOCAL_STORAGE_YTARTICLE);
    if (ytArticle) {
      var article = JSON.parse(ytArticle);
      article.content = content;
      article.htmlContent = html;
      window.localStorage.setItem(LOCAL_STORAGE_YTARTICLE, JSON.stringify(article));
      window.location.href = "/articlecontentcallback";
      return;
    }
    message.success("local storage 没有值");
    layout.innerHTML = html; // 恢复现场
  };

  render() {
    return (
      <Tooltip placement="left" mouseEnterDelay={ENTER_DELAY} mouseLeaveDelay={LEAVE_DELAY} title="保存">
        <a id="nice-sidebar-wechat" className="nice-btn-yitian" onClick={this.saveContent}>
          <SvgIcon name="yitian" className="nice-btn-yitian-icon" />
        </a>
      </Tooltip>
    );
  }
}

export default Wechat;
