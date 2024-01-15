

function requestDecorator(methodType: string) {
  return function (path: string): MethodDecorator {
    return function (targetClassPrototype, methodName) {
      console.log('方法装饰器requestDecorator执行...');
      Reflect.defineMetadata('path', path, targetClassPrototype, methodName);
      Reflect.defineMetadata('methodType', methodType, targetClassPrototype, methodName);
    }
  }
}

export const get = requestDecorator('get');
export const post = requestDecorator('post');