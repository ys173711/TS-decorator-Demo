// 类装饰器-Controller-权限控制器
import { Request, Response } from "express"
import { Autowired, Singleton, get, post, Controller } from '../decorator'

@Controller('/')
export default class RightsController {

  @get('/rightsManager')
  rightsShow(req: Request, res: Response) {
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.write(`<div>权限管理页面</div>`)
    res.write(`<div><a href='javascript:history.back()'>返回进入首页</a></div>`)
    res.send()
  }
}