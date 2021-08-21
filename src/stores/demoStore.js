import { observable } from 'mobx';

class DemoStore {
  @observable
  greeting = 'Hello React MobX';
}

const demoStore = new DemoStore();

export default demoStore;