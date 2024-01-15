import 'reflect-metadata';
import collectionInstance from './Collection';
export function InjectCtor(injectId) {
    // 普通参数装饰器target=类的原型，构造器参数装饰器target=构造器=类
    return function (targetClass, paramName, paramIndex) {
        console.log('进入构造器参数装饰器：');
        console.log('targetClass: ', targetClass); // f UserService() 
        console.log('paramName: ', paramName); // undefined
        console.log('paramIndex: ', paramIndex); // 0
        var ctorParams = Reflect.getMetadata('design:paramtypes', targetClass);
        console.log('ctorParams: ', ctorParams); // [f UserService(), f String()] 类型就是函数
        var ctorParamType = ctorParams[paramIndex]; // 获取构造器参数装饰器修饰的参数的类型
        var obj = new ctorParamType();
        // 将实例保存到容器中
        collectionInstance.set(injectId, obj);
    };
}
