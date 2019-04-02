import { IStringObject } from './base'

export interface IXinTaiMorePageBase {
  title: { pinyin: string[]; hanzi: string[] }
  subTitle: string[]
  description: string[]
  feature: {
    title: string
    img: string
    description: string[]
    path: string
    needReverse: boolean
  }[]
}

export interface IXinTaiMorePageConfig {
  [index: string]: IXinTaiMorePageBase
}

export interface IXinTaiMoreDetailPageBase {
  shop: {
    imgs: { big: string; small: string[] }
    description: {
      name: string
      line1: string[]
      line2: string[]
      line3: string[]
      line4: string[]
    }
  }
  source: {
    title: string
    content: string[]
    original: string[]
    img: string
    showSeal: boolean
  }
  shopDetail: {
    title: string
    feature: { img: string; header: string; desc: string; reverse: boolean }[]
  }
  textureDetail: {
    title: string
    feature: { img: string; header: string; desc: string; reverse: boolean }[]
  }
  recommend: {
    title: { [index: string]: string[] }
    feature: { img: string; header: string; desc: string[] }[]
  }
}

export interface IXinTaiMoreDetailPageConfig {
  [index: string]: IXinTaiMoreDetailPageBase
}
