// 类装饰器-Controller-用户控制器
import UserServiceImpl from '../service/UserServiceImpl'
import UserServiceInterf from '../service/UserServiceInterf';
import 'reflect-metadata'
import { Autowired, Singleton, get, post, Controller } from '../decorator'
import type {Request, Response}  from 'express'
import { getSession } from "../util/sessionUtil";

@Controller('/') // 类装饰器业界统一命名
export default class UserController {
  @Autowired('userServiceImpl') // Autowired 自动装配，可理解为注入Inject
  @Singleton(true)
  private userServiceImpl!: UserServiceInterf;
  constructor() {}

  @get('/')
  index(req: Request, res: Response) {
    const userinfo = (getSession(req) as any).userinfo
    if (userinfo) {
      let htmlstr = `<div>
        <div><a href='/searchFoodHistory'>搜索美食信息</a></div>
        <div><a href='/orderInfo'>订单信息</a></div>
        <div><a href='/loginout'>注销</a></div>
      </div>`;
      res.send(htmlstr);
    } else {
      res.redirect('/login')
    }
  }

  @get('/login')
  login(req: Request, res: Response): void {
    let htmlstr = `<div>
      <form method='post' action='/loginprocess'>
        <div>用户名：
          <input type='text' name='username' />
        </div>
        <div>密码：
          <input type='password' name='pwd' />
        </div>
        <button type='submit'>提交</button>
      </form>
    </div>`;
    res.send(htmlstr);
  }

  @post('/loginprocess')
  loginprocess(req: Request, res: Response): void {
    const session = getSession(req)
    
    const userServiceImpl: UserServiceImpl = Reflect.getOwnPropertyDescriptor(UserController.prototype, 'userServiceImpl')?.value
    const userinfo = userServiceImpl.login(req.body.username, req.body.pwd)
    if (userinfo) {
      (session as any).userinfo = userinfo
      res.setHeader('Content-Type', 'text/html;charset=utf-8')
      let outputHtml = ''
      if (userinfo.role === 'admin') {
        outputHtml += `<div>
          <h1>欢迎${userinfo.username}登录</h1>
          <a href='/rightsManager'>进入管理权限页面</a>
        </div>`
      }
      res.write(outputHtml)
      res.write(`<div>登陆成功，欢迎你：${userinfo.username}</div>`)
      res.write(`<div><a href='/'>进入首页</a></div>`)
      res.write(`<div><a href='/showFood/gongbaojiding/beijing'>进入美食页面</a></div>`)
      res.end()
    } else {
      res.send('登录失败')
    }
  } 
}







