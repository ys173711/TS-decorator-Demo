// 实体层entity，跟数据表息息相关，获取数据表数据的包装。


export interface UserInfo {
  username: string;
  password: string;
  role: string;
  phone: string;
  mark: string;
}

// 模拟数据表
let userinfoFromDB: Array<UserInfo> = [
  {
    username: 'admin',
    password: '123',
    role: 'admin',
    phone: '123456789',
    mark: '管理员'
  }, {
    username: 'lisi',
    password: '123',
    role: 'general',
    phone: '123456789',
    mark: '普通用户'
  }, {
    username: 'wangwu',
    password: '123',
    role: 'manager',
    phone: '123456789',
    mark: '项目经理'
  }, {
    username: '游客',
    password: '123',
    role: 'general',
    phone: '123456789',
    mark: 'noAllowLogin'
  }
]  

export default userinfoFromDB