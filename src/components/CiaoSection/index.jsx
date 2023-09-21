import React, { useState } from 'react';
import CiaoList from './CiaoList';
import CiaoSort from './CiaoSort';
import { USERS } from '../../constants';

const CiaoSection = (props) => {
  const [users] = useState(USERS);
  const [isSortIdUp] = useState(true); 
  const [isSortFirstNameUp] = useState(true);

  //написати функцію, яку передасте дитині, щоб дитина мала можливість змінювати стан батьківському елементу

  return (
    <>
      <CiaoSort
        // передасте пропсами функцію, яка дозволяє змінити стан
        users={users}
        isSortIdUp={isSortIdUp}
        isSortFirstNameUp={isSortFirstNameUp}
      />
      <CiaoList users={users} />
    </>
  );
};

export default CiaoSection;
