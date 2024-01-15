// 中间件装饰器
import 'reflect-metadata'
import type {RequestHandler} from 'express'

export function myMiddleware(middleware: RequestHandler): MethodDecorator {
  return function (targetClassPrototype, methodName, descriptor) {
    let metadataMid = Reflect.getMetadata('middlewares', targetClassPrototype, methodName) || []
    metadataMid.push(middleware)
    Reflect.defineMetadata('middlewares', metadataMid, targetClassPrototype, methodName)
  }
}