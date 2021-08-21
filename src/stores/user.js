import { action, observable } from 'mobx';

class UserStore {
  @observable
  username = 'zhe.sun';


  @action saveData () {
    this.username = 'yanyan.sun'
  }
}

const userStore = new UserStore();

export default userStore;