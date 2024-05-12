const Notification = ({ message, notificationStyle }) => {
  console.log(notificationStyle);
  if (message === null) {
    return null;
  }

  if (notificationStyle === "successful") {
    return <div className="successful">{message}</div>;
  } else if (notificationStyle === "failed") {
    return <div className="failed">{message}</div>;
  }
};

export default Notification;
