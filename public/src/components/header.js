/**
 * Created by zhangsha on 16-8-14.
 */
import React, {Component} from 'react';// eslint-disable-line no-unused-vars

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="left">
          <span><strong>萤火虫 </strong>居住自由主义</span>
        </div>
        <div className="right">
          <ul>
            <li><a href="#">登录</a></li>
            <li><a href="#">短租指南</a></li>
            <li><a href="#">免费发布房间</a></li>
          </ul>
        </div>
      </div>
    );
  }
}