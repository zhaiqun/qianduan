console.log('ok')


//默认导入和按需导入
import m1, { f as f1, e } from './m1'

//直接导入并执行代码
import './m2'


console.dir(m1)

console.log("=========" + f1 + "*******" + e)