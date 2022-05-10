import React from "react";
import Card from "./ui/Card/Card";
import Styles from "./MostanadBox.module.css";
function MostanadBox() {
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: "1px",
        width: 350,
       borderColor: color
      }}
    />
  );
  return (
    <Card className={Styles.mostanad}>
      <Card className={Styles.insidemostanad}>
        <h3 className={Styles.h3}>مستند1</h3>
        <ColoredLine color="black" />
        <h3 className={Styles.h3}>lsjkn 2222</h3>
        <ColoredLine color="black" />
        <h3 className={Styles.h3}>مستند 33333</h3>
        <ColoredLine color="black" />
        <h3 className={Styles.h3}>مستند 4444</h3>
        <ColoredLine color="black" />
        <h3 className={Styles.h3}>مستند 4444</h3>
        <ColoredLine color="black" />
        <h3 className={Styles.h3}>مستند 4444</h3>
      </Card>
    </Card>
  );
}

export default MostanadBox;
