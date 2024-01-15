import 'reflect-metadata'

/**
 * 
 * @param injectId 等同dependencyId，依赖id，唯一标识符，作为传入实参区分是哪个控制器
 * @param singleton 判断是否是单例模式的对象
 * @returns 
 */
export function Autowired(injectId: string, singleton?: boolean): PropertyDecorator {
  return function (targetClassPrototype, propertyName) {
    console.log('自动装配装饰器autowired执行...')
    const instanceOrClass = Reflect.getMetadata('instanceOrClass', targetClassPrototype, propertyName);
    const singleton = Reflect.getMetadata('singleton', targetClassPrototype, propertyName);
    let obj = singleton ? instanceOrClass : new instanceOrClass();
    Reflect.defineProperty(targetClassPrototype, propertyName, {value: obj});
    
  }
}