// service 业务逻辑层，封装业务逻辑方法。
// 对于登录注册都需要查询用户，所以还需要细化一个dao层，专门用于查询数据库。
import UserDaoImpl from '../dao/UserDaoImpl'
import {UserInfo} from '../entity/UserInfo'

export default class UserServiceImpl {
  // 也可以依赖注入
  userDaoImpl: UserDaoImpl = new UserDaoImpl()
  static userServiceImpl: UserServiceImpl
  static getInstance() {
    if (!this.userServiceImpl) {
      this.userServiceImpl = new UserServiceImpl()
    } 
    return this.userServiceImpl
  }
  constructor() {
    console.log('UserServiceImpl...constructor')
  }
  login(username: string, pwd: string, role?: string): UserInfo | undefined {
    console.log('service...login')
    return this.userDaoImpl.findUserByUsmAndPwd(username, pwd)
    

  
  }
  register() {
    console.log('UserService...register')
  }
}









