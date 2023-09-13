import React from 'react';
import { withUser } from '../HOCs';

const Avatar = (props) => {
  const {
    user: { avatar },
  } = props;
  return (
    <div>
      <img src={avatar} alt="avatar" />
    </div>
  );
};

export default withUser(Avatar);
