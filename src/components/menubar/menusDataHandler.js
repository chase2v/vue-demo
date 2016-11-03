export default function menusDataHandler (data) {
  /**
   *
   * menu 对象：
   * {
   *   id
   *   url
   *   name
   *   level
   *   iconClass
   *   menuParent
   *   menuChildren
   * }
   */
  if (!data) {
    return []
  }

  let id = 0
  let parentMenu = ['root']

  /**
   * 一次循环代表遍历一级菜单
   * @param  {[type]} data  [description]
   * @param  {[type]} level [description]
   * @return {[type]}       [description]
   */
  const _loop = (data, level) => {
    let rt = []

    data.forEach(v => {
      if (v instanceof Array) {
        let l = level
        if (!(v[1] instanceof Array)) {
          l++
        }
        _loop(v, l).forEach(v => {
          rt.push(v)
        })
      } else {
        let obj = Object.assign({
          id: id++,
          level,
          menuParent: parentMenu[level],
          menuChildren: []
        }, v)
        // 设置父级菜单的子菜单
        if ((level - 1) >= 0) {
          parentMenu[level].menuChildren.push(obj)
        }

        parentMenu[level + 1] = obj

        rt.push(obj)
      }
    })

    return rt
  }

  return _loop(data, 0)
}
