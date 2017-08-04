
export default class Pool {
  constructor(items) {
    this.items = items;
  }

  getFreeItem() {
    return this.items.find(item => !item.display);
  }

  releaseItem(item) {
    item.display = false;
  }
}
