/**
 * 将原始数据转换为节点对象
 *
 * 原始数据：
 * [
 *   "level_0(root)",
 *   [
 *     [
 *       "level_1(branch)",
 *       [
 *         [
 *           "level_2(branch)",
 *           [
 *             "level_3(leaf)",
 *             "level_3(leaf)"
 *           ]
 *         ]
 *       ]
 *     ],
 *     "level_1(leaf)"
 *   ]
 * ]
 *
 * 处理后的数据：
 * [
 *   {
 *     id 0->
 *     type 0, 1, 2
 *     level 0->
 *     value
 *     valueType 'text'/'url'
 *     iconClass
 *     parentNode id
 *     childNodes [id]
 *   }
 * ]
 *
 * @param  {array} data 原始数据
 * @return {array} processedData 处理后的数据
 */
export default function dataHandler (data) {
  // mock
  if (!data) {
    data = [
      '食物',
      [
        '主食',
        ['米饭', '面', '馒头']
      ],
      [
        '喝的',
        [
          '饮料',
          ['可乐']
        ],
        [
          '汤',
          ['榨菜汤', '蘑菇汤']
        ]
      ],
      [
        '零食'
      ]
    ]
  }

  let id = 0
  let parentNode = []

  return _loop(data, 0)

  /**
  * 单次遍历
  *
  * @param  {array} data 传入的数据
  * @return {object}
  */
  function _loop (data, level) {
    let rt = []
    let type

    if (id === 0) {
      type = 0
    } else if (data[1] instanceof Array) {
      type = 1
    } else {
      type = 2
    }

    data.forEach((v, i) => {
      if (typeof v === 'string') {
        let obj = {
          id,
          type,
          level,
          value: v,
          valueType: 'text',
          parentNode: parentNode[level - 1] ? parentNode[level - 1] : undefined,
          childNodes: []
        }
        rt.push(obj)
        parentNode[level - 1] && parentNode[level - 1].childNodes.push(obj) // push 到父节点的子节点属性中
        if (type !== 2) {
          parentNode[level] = obj // 更新当前等级节点的父节点
        }
        id++
      } else if (v instanceof Array) {
        let children = _loop(v, level + 1)
        children.forEach(v => {
          rt.push(v)
        })
      } else {
        let obj = Object.assign({}, {
          id,
          type,
          level,
          // value,
          // valueType,
          parentNode: parentNode[level - 1] ? parentNode[level - 1] : undefined,
          childNodes: []
        }, v)
        rt.push(obj)
        parentNode[level - 1] && parentNode[level - 1].childNodes.push(obj)
        if (type !== 2) {
          parentNode[level] = obj
        }
        id++
      }
    })

    return rt
  }
}
