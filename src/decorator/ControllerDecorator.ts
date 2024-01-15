// 控制器类装饰器。所有的函数和请求路径是在这里汇总。
import {router} from '../util/router'
import type {MethodType} from '../util/methodType'
import type {RequestHandler} from 'express'

export type MyClassDecorator = <T extends {new(...args: any[]): any}>(targetClass: T) => any

export function Controller(reqRootPath?: string): MyClassDecorator {
  return function (targetClass: any) {
    console.log('类装饰器Controller执行...');
    
    Object.keys(targetClass.prototype).forEach((methodName) => {
      const reqPath = Reflect.getMetadata('path', targetClass.prototype, methodName);
      const methodType: MethodType = Reflect.getMetadata('methodType', targetClass.prototype, methodName);
      const method: RequestHandler = targetClass.prototype[methodName]
      const middleware: RequestHandler[] | undefined = Reflect.getMetadata('middlewares', targetClass.prototype, methodName);
      if (reqPath && methodType) {
        if (middleware) {
          router[methodType](reqPath, ...middleware, method)
        } else {
          router[methodType](reqPath, method)
        }
      }
    })
    router.get
  };
}