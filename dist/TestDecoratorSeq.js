"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
};
// 方法装饰器 1
function firstMethodDecorator(param) {
  return function (targetClassPrototype, methodName, descriptor) {
    console.log('firstMethodDecorator', '方法装饰器 1');
  };
}
// 方法装饰器 2
function secondMethodDecorator(param) {
  return function (targetClassPrototype, methodName, descriptor) {
    console.log('secondMethodDecorator', '方法装饰器 2');
  };
}
// 方法参数装饰器
function paramDecorator(param) {
  return function (targetClassPrototype, paramName, paramIndex) {
    console.log('paramDecorator', '方法参数装饰器');
  };
}
// 构造器参数装饰器
function ctorParamDecorator(param) {
  return function (targetClass, paramName, paramIndex) {
    console.log('ctorParamDecorator', '构造器参数装饰器');
  };
}
// 属性装饰器
function propertyDecorator(param) {
  return function (targetClassPrototype, propertyName) {
    console.log('propertyDecorator', '属性装饰器');
  };
}
// 类装饰器
function classDecorator(param) {
  return function (targetClass) {
    console.log('classDecorator', '类装饰器');
  };
}
var TestDecoratorSeq = /** @class */ (function () {
  function TestDecoratorSeq(count, age) {
    this.count = count;
    this.age = age;
    this.name = 'name';
  }
  TestDecoratorSeq.prototype.getName = function (name) {
    return name;
  };
  TestDecoratorSeq.prototype.getAge = function (name) {
    return name;
  };
  __decorate([
    propertyDecorator('param'),
    __metadata("design:type", String)
  ], TestDecoratorSeq.prototype, "name", void 0);
  __decorate([
    firstMethodDecorator('param'),
    __param(0, paramDecorator('param')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
  ], TestDecoratorSeq.prototype, "getName", null);
  __decorate([
    secondMethodDecorator('param'),
    __param(0, paramDecorator('param')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
  ], TestDecoratorSeq.prototype, "getAge", null);
  TestDecoratorSeq = __decorate([
    classDecorator('param'),
    __param(0, ctorParamDecorator('param')),
    __metadata("design:paramtypes", [Number, Number])
  ], TestDecoratorSeq);
  return TestDecoratorSeq;
}());
/* 打印结果：
propertyDecorator 属性装饰器
paramDecorator 方法参数装饰器
firstMethodDecorator 方法装饰器 1
paramDecorator 方法参数装饰器
secondMethodDecorator 方法装饰器 2
ctorParamDecorator 构造器参数装饰器
classDecorator 类装饰器
*/
/* 总结：
方法装饰器和方法参数装饰器是一起执行的，先方法参数装饰器，后方法装饰器；
构造器参数装饰器和类装饰器是一起执行的，先构造器参数装饰器，后类装饰器；
执行顺序：属性装饰器 -> 方法参数装饰器 -> 方法装饰器 -> 构造器参数装饰器 -> 类装饰器
*/
