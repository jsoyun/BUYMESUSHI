import React from "react";

const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? "show" : ""}`}>
      <p>이미 입력하셨습니다. 다시 시도하십시오.</p>
    </div>
  );
};

export default Notification;
