/**
 * 生成静态资源文件对应的 url
 * @param assetSrc
 * @returns
 */
export const getAssetUrl = (assetSrc: string) => {
  return new URL(`./assets/imgs/${assetSrc}`, import.meta.url).href
}
