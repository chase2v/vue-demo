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
 *     valueType 'text'...
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

}
