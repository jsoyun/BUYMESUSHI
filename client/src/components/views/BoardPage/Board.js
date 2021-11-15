import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import ViewBoard from "./ViewBoard";

const Board = (props) => {
  return (
    <div>
      <ViewBoard />
    </div>
  );
};

export default withRouter(Board);
