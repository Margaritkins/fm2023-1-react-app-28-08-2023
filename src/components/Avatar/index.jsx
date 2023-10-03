import React from "react";
import { UserContext } from "../../contexts";

const Avatar = () => {
  const renderFunc = ({ user: { avatar } }) => {
    const imgStyles = { with: "70px", height: "70px", borderRadius: "50%" };

    return (
      <div>
        <img
          src={avatar}
          alt="avatar"
          style={imgStyles}
        />
      </div>
    );
  };
  return <UserContext.Consumer>{renderFunc}</UserContext.Consumer>;
};

export default Avatar;
