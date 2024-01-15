// 数据访问层dao层，data access object 数据访问层模型，封装专门用于查询数据库的操作。dao层用实体层。
import userinfoFromDB from '../entity/UserInfo'

export default class UserDaoImpl {
  public findUserByUsmAndPwd(username: string, pwd: string) {
    return userinfoFromDB.find(userinfo => {
      // 没有连接数据库，模拟数据库查询
      return userinfo.username === username && userinfo.password === pwd
    })
  } 
}