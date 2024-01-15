interface Response<
  ResBody = any,
  LocalsObj extends Record<string, any> = Record<string, any>,
  StatusCode extends number = number,
> {
  status(code: StatusCode): this;
  // 中转（这里没有真正使用，只是依附于Response类做类型呈现）。中转时this具体化了成了Response类型替代Send类型的泛型T，泛型ResBody没有具体化，传递给了Send类型的泛型ResBody
  // 中转既可具体化泛型，也可不具体化泛型做传递
  send: Send<ResBody, this>;
  // send(body?: ResBody): this; // 等价于这种写法
}
type Send<ResBody = any, T = Response<ResBody>> = (body?: ResBody) => T;

// Usage
let response: Response = {
  status(code: number): Response { // 泛型StatusCode和this使用时需要具体化，
    return response;
  },
  send(body): Response {
    return response;
  },
}
response.status(200).status(200) // 返回this的好处：达到级联调用
response.send('hello world').send()

// import { RouteParameters } from 'express-serve-static-core'
interface IRouterMatcher {
  <
    Route extends string,
    P = RouteParameters<Route>,
    ResBody = any,
    ReqBody = any,
    // ReqQuery = ParsedQs,
    LocalsObj extends Record<string, any> = Record<string, any>,
  >(
    // (it's used as the default type parameter for P)
    path: Route,
    // (This generic is meant to be passed explicitly.)
    // ...handlers: Array<RequestHandler<P, ResBody, ReqBody, ReqQuery, LocalsObj>>
  ): void;
}
let get: IRouterMatcher = () => { }
get('/showFood/:foodName/:price')

// infer类型字符串去尾
type RemoveTail<S extends string, Tail extends string> = S extends `${infer P}${Tail}` ? P : S;
type RemoveTailStr = RemoveTail<'showFood.beijing-china/:foodName/:price', '/:price'> // "showFood.beijing-china/:foodName"
// 通用化
type RemoveTailStr_2 = RemoveTail<'showFood.beijing-china/:foodName/:price', `/${string}`> // "showFood.beijing-china"
type RemoveTailStr_2_2 = RemoveTail<RemoveTailStr_2, `-${string}`> // "showFood.beijing"
type RemoveTailStr_2_3 = RemoveTail<RemoveTailStr_2_2, `.${string}`> // "showFood"
// 1. 嵌套
type RemoveTailStr_3 = RemoveTail<RemoveTail<RemoveTail<'showFood.beijing-china/:foodName/:price', `/${string}`>, `-${string}`>, `.${string}`> // "showFood"
// 2. 嵌套泛型。 源码
type GetRouteParameter<S extends string> = RemoveTail<RemoveTail<RemoveTail<S, `/${string}`>, `-${string}`>, `.${string}`>
type GetRouteParameter_test = GetRouteParameter<'showFood.beijing-china/:foodName/:price'>

//
type ParamsDictionary = { [p: string]: string }
type RouteParameters_<Route extends string> = string extends Route ? ParamsDictionary 
  : Route extends `${string}(${string}` ? ParamsDictionary
  // : Route extends `${string}:${infer Rest}` ? RemoveTail<Rest, `/${string}`> 
  : Route extends `${string}:${infer Rest}` ? Rest extends `${infer P}/${string}` ? {[K in P]: string} & (Rest extends `${P}/${infer Next}` ? RouteParameters_<Next> : unknown)
  : {[K in Rest]: string}
  : {};
type Test = RouteParameters_<'showFood.beijing-china/:foodName/:price/:count'>
type RouteParameters_2<Route extends string> = string extends Route ? ParamsDictionary 
  : Route extends `${string}(${string}` ? ParamsDictionary
  : Route extends `${string}:${infer Rest}` ? {[P in RemoveTail<Rest, `/${string}`>]: string} & (Rest extends `${RemoveTail<Rest, `/${string}`>}/${infer Next}` ? RouteParameters_2<Next> : unknown)
  : {};
type Test2 = RouteParameters_2<'showFood.beijing-china/:foodName/:price/:count'>
// 源码
type RouteParameters<Route extends string> = string extends Route 
  ? ParamsDictionary
  : Route extends `${string}(${string}`
  ? ParamsDictionary
  : Route extends `${string}:${infer Rest}`
  ? (
    GetRouteParameter<Rest> extends never
    ? ParamsDictionary
    : (GetRouteParameter<Rest> extends `${infer ParamName}` 
      ? {[P in ParamName]?: string} 
      : {[P in GetRouteParameter<Rest>]: string})
  ) & (
    Rest extends `${GetRouteParameter<Rest>}${infer Next}`
    ? RouteParameters<Next>
    : unknown
  )
  : {};
type Test3 = RouteParameters<'showFood.beijing-china/:foodName/:price/:count'>
  









export { }