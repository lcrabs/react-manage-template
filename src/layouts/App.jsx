import React, { PureComponent } from "react";
import { inject, observer } from "mobx-react";

import Child from '@/components/child'


@inject("demoStore")
@observer
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.demoStore = props.demoStore;
  }
  render() {
    return (
      <div>
        <div>{this.demoStore.greeting}</div>
        <Child />
      </div>
    );
  }
}

export default App;
