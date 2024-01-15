var Collection = /** @class */ (function () {
    function Collection() {
        this.containerMap = new Map();
    }
    Collection.prototype.set = function (id, value) {
        this.containerMap.set(id, value);
    };
    Collection.prototype.get = function (id) {
        return this.containerMap.get(id);
    };
    Collection.prototype.has = function (id) {
        return this.containerMap.has(id);
    };
    Collection.collection = new Collection();
    return Collection;
}());
export default Collection.collection;
