import UserServiceImpl from './UserServiceImpl'

// 伪接口类。因为装饰器对接口不友好，所以用类来代替接口
export default class UserServiceInterf {
  static getUserServiceImpl() {return UserServiceImpl}
}