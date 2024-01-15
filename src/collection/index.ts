class Collection<T = any> {
  static collection: Collection = new Collection();
  private constructor() {

  }
  private containerMap = new Map<string | symbol, any>();
  set(id: string | symbol, value: T) {
    this.containerMap.set(id, value);
  }
  get(id: string | symbol) {
    return this.containerMap.get(id);
  }
  has(id: string | symbol) {
    return this.containerMap.has(id);
  }
}

export default Collection.collection;