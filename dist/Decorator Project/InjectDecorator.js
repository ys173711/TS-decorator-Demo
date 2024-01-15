import 'reflect-metadata';
// export function Inject(injectId: string): PropertyDecorator {
export function Inject(injectId) {
    return function (targetClassPrototype, prop) {
        // 我们想获取属性装饰器修饰的属性的类型
        // 通过下面一行代码可以获取到，这里先不了解，记住就行
        var PropClass = Reflect.getMetadata('design:type', targetClassPrototype, prop);
        console.log('进入属性装饰器：', 'injectId: ', injectId, ' PropClass: ', PropClass);
        var userService = new PropClass();
    };
}
