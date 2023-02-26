export interface SiteNews {
  /**
   * 资讯内容
   */
  content: string;
  /**
   * 封面文件id
   */
  coverFileId: string;
  /**
   * 封面文件url
   */
  coverFileUrl: string;
  /**
   * 资讯id
   */
  dynamicId: string;
  /**
   * 资讯类型 0平台资讯 1机构资讯
   */
  dynamicType: string;
  /**
   * 机构id
   */
  orgId: string;
  /**
   * 机构名称
   */
  orgName: string;
  /**
   * 发布时间
   */
  pubdate: string;
  /**
   * 驳回理由
   */
  rejectReason: string;
  /**
   * 资讯状态 0未发布/未审核 1已停用 2已驳回 3已发布
   */
  status: string;
  /**
   * 标题
   */
  title: string;
  /**
   * 浏览量
   */
  viewNumber: string;
}

export interface SearchSiteNewsParams {
  /**
   * 资讯类型 0平台资讯 1机构资讯
   */
  dynamicType?: string;
  /**
   * 排序方式 hot按点击率排序 默认按发布时间排序
   */
  order?: string;
  /**
   * 机构id
   */
  orgId?: string;
  /**
   * 资讯状态 0未发布/未审核 1已停用 2已驳回 3已发布
   */
  status: string;
  /**
   * 标题，模糊查询
   */
  title?: string;
}

export interface AddSiteNews {
  /**
   * 作者
   */
  author?: string;
  /**
   * 资讯内容
   */
  content: string;
  /**
   * 封面文件id
   */
  coverFileId?: string;
  /**
   * 资讯类型 0平台资讯 1机构资讯
   */
  dynamicType?: string;
  /**
   * 来源
   */
  source?: string;
  /**
   * 来源url
   */
  sourceUrl?: string;
  /**
   * 标题
   */
  title: string;
}
