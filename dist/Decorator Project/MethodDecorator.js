import 'reflect-metadata';
export function get(reqPath) {
    return function (targetClassPrototype, methodName, descriptor) {
        // 给方法上定义一个元数据，key为'path'，值为reqPath
        Reflect.defineMetadata('path', reqPath, targetClassPrototype, methodName);
        console.log('进入方法装饰器：', 'path: ', reqPath);
    };
}
