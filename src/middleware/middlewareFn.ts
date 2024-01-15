//
import { Request, Response, NextFunction, RequestHandler } from 'express';
import { getSession } from '../util/sessionUtil'

export const isValidated: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  console.log('执行中间件... isValidated')
  const session = getSession(req)
  const userinfo = (session as any).userinfo
  if (userinfo && userinfo.mark === 'noAllowLogin') {
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.write(`<div>您没有权限访问，请联系管理员</div>`)
    res.end()
  } else {
    next()
  }
}

export const SecondMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log('执行第二个中间件... SecondMiddleware')
  next()
}