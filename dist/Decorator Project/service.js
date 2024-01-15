var UserService = /** @class */ (function () {
    function UserService() {
        this.pName = '人名';
        console.log('UserService构造函数执行了...');
    }
    UserService.prototype.login = function () {
        console.log(this.pName + '登录...');
    };
    return UserService;
}());
export { UserService };
