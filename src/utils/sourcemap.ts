import sourceMap from 'source-map-js'
import { useMyFetch } from './http'

// 找到以.js结尾的fileName
function matchStr(str: string) {
  if (str.endsWith('.js')) return str.substring(str.lastIndexOf('/') + 1)
}

// 将所有的空格转化为实体字符
function repalceAll(str: string) {
  return str.replace(new RegExp(' ', 'gm'), '&nbsp;')
}

// 获取文件路径
function getFileLink(str: string) {
  const reg = /vue-loader-options!\.(.*)\?/
  const res = str.match(reg)
  console.log(res)
  if (res && Array.isArray(res)) {
    return res[1]
  }
}

function loadSourceMap(fileName: string, apikey: string) {
  //   let file = matchStr(fileName)
  let file = 'home'
  if (!file) return
  return new Promise((resolve) => {
    useMyFetch(`monitor/map?filename=${file}&apikey=${apikey}`)
      .get()
      .then((res) => {
        resolve(JSON.parse(res.data.value as any))
      })
  })
}

export const findCodeBySourceMap = async (
  {
    fileName,
    line,
    column,
    apikey
  }: { fileName: string; line: number; column: number; apikey: string },
  callback: (str: string) => void
) => {
  let sourceData: any = await loadSourceMap(fileName, apikey)
  let result, codeList
  if (!sourceData) return
  let { sourcesContent, sources } = sourceData
  let consumer = await new sourceMap.SourceMapConsumer(sourceData)
  result = consumer.originalPositionFor({
    line: Number(line),
    column: Number(column)
  })
  let code = sourcesContent[sources.indexOf(result.source)]
  codeList = code.split('\n')
  let row = result.line,
    len = codeList.length - 1
  let start = row - 5 >= 0 ? row - 5 : 0, // 将报错代码显示在中间位置
    end = start + 9 >= len ? len : start + 9 // 最多展示10行
  let newLines = []
  let j = 0
  for (let i = start; i <= end; i++) {
    j++
    newLines.push(
      `<div class="code-line ${i + 1 == row ? 'heightlight' : ''}" title="${
        i + 1 == row ? result.source : ''
      }">${j}. ${repalceAll(codeList[i])}</div>`
    )
  }

  let innerHTML = `<div class="errdetail"><div class="errheader">${result.source} at line ${
    result.column
  }:${row}</div><div class="errdetail">${newLines.join('')}</div></div>`
  callback(innerHTML)
}
