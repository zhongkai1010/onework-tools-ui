export interface SiteNotice {
  /**
   * 消息内容
   */
  content: string;
  /**
   * 消息标题
   */
  noticeTitle: string;
  /**
   * 通知类型（0运营系统消息 1机构消息 2机构项目消息）
   */
  noticeType: string;
  /**
   * 相关记录id
   */
  recordId?: string;
}

export interface AddSiteNotice {
  /**
   * 消息内容
   */
  content: string;
  /**
   * 消息标题
   */
  noticeTitle: string;
  /**
   * 通知类型（0运营系统消息 1机构消息 2机构项目消息）
   */
  noticeType: string;
  /**
   * 相关记录id
   */
  recordId?: string;
}

export interface UpdateSiteNotice {
  /**
   * 消息内容
   */
  content: string;
  /**
   * 消息标题
   */
  noticeTitle: string;
  /**
   * 通知类型（0运营系统消息 1机构消息 2机构项目消息）
   */
  noticeType: string;
  /**
   * 相关记录id
   */
  recordId?: string;
}
