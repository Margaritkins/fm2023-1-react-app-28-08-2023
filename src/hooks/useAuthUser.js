import { useState } from 'react';

const useAuthUser = (authUser) => {
  const [user, setUser] = useState(authUser);
  const selectorUser = (id) => {
    setUser({ ...user, isSelect: !user.isSelect });
  };
  return { user, selectorUser };
};

export default useAuthUser;