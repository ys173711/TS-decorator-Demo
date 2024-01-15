import 'reflect-metadata'
import express from 'express'
import session from 'express-session'
import {router} from './util/router'

// 引入控制器
import './controller/UserController'
import './controller/RightsController'
import './controller/FoodController'

const app = express()

app.use(session({
  secret: 'cookieid12345',
  name: 'cookieinfo',
  resave: false,
  saveUninitialized: true,
}))
app.use(express.urlencoded({extended: true})) // 处理表单数据url
app.use(router)

const server = app.listen(8080, 'localhost', () => {
  console.log('服务器已启动，地址是：http://localhost:8080')
})