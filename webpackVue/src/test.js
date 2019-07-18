// export default暴露的data，外部引用时，可以定义任何变量来接受

//export  default 只能向外暴露一次

//同一个js文件中export default 和export可以同时存在


// export default {
//     name: '何雄军',
//     age: 28
// }

var info = {
    name: '何雄军',
    age: 28
}
export default info


// export向外导出的数据，外部必须用｛｝来接收,可暴露多个成员。接收时，必须严格按照导出时候定义的变量名接收
export var title = '小星星'
export var age = 23