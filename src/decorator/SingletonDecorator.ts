// 属性装饰器SingletonDecorator
export function Singleton(isSingleton: boolean):PropertyDecorator {
  return function (targetClassPrototype, propertyName) {
    console.log('属性装饰器singleton执行...')
    const targetClass = Reflect.getMetadata('design:type', targetClassPrototype, propertyName).getUserServiceImpl();
    let instanceOrClass;

    const metadataSingleton = Reflect.getMetadata('singleton', targetClassPrototype, propertyName);
    if (isSingleton) { // 如果是单件模式
      if(!metadataSingleton) { // 第一次
        Reflect.defineMetadata('singleton', isSingleton, targetClassPrototype, propertyName);
      } else { // 第二次及多次
        console.log('单件模式创建，使用第一次创建的对象。');
      } 
      instanceOrClass = targetClass.getInstance();
    }
    else {
      instanceOrClass = targetClass
    }
    Reflect.defineMetadata('instanceOrClass', instanceOrClass, targetClassPrototype, propertyName);
  };
}


