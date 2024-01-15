// 类装饰器-Controller-美食控制器
import { Request, Response } from "express"
import { Autowired, Singleton, get, post, Controller, myMiddleware } from '../decorator'
import {isValidated, SecondMiddleware} from '../middleware/middlewareFn'

@Controller('/')
export default class FoodController {

  @get('/showFood/:foodName/:address')
  @myMiddleware(SecondMiddleware)
  @myMiddleware(isValidated)
  showFood(req: Request, res: Response) {
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.write(`<div>美食页面</div>`)
    res.write(`<div>大馄饨</div>`)
    res.write(`<div>小馄饨</div>`)
    res.write(`<div>饺子</div>`)
    
    res.write(`<div>${req.params.foodName}</div>`)
    res.send()
  }
}