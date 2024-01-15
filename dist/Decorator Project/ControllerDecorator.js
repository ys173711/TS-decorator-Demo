import 'reflect-metadata';
// 泛型工厂类装饰器
export function Controller(rootPath) {
    return function (targetClass) {
        Object.keys(targetClass.prototype).forEach(function (key) {
            var reqPath = Reflect.getMetadata('path', targetClass.prototype, key);
            console.log('进入类装饰器：', 'reqPath: ', reqPath);
        });
    };
}
