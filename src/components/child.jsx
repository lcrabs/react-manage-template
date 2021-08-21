import React, { useEffect } from "react";
import { observer, inject } from "mobx-react";

const Child = ({ userStore }) => {
  return <div style={{ color: 'green'}}>{userStore.username} --</div>;
};

export default inject("userStore")(observer(Child));
