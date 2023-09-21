import React from 'react';
import { getUsers } from '../../api';
import Error from '../Error';
import Spinner from '../Spinner';
import { useUsers } from '../../hooks';
// import styles from './UsersLoader.module.scss';

const UsersLoader = (props) => {
  const {
    users,
    error,
    isFetching,
    currentPage,
    currentResults,
    prevPage,
    nextPage,
  } = useUsers(getUsers);

  if (error) {
    return <Error />;
  }
  return (
    <section>
      <h2>'Users': 'Користувачі' {currentResults}</h2>
      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>
          &lt; prev
        </button>
        <span>&nbsp;{currentPage}&nbsp;</span>
        <button onClick={nextPage}>next &gt;</button>
      </div>
      <ul>
        {isFetching && <Spinner />}
        {isFetching ||
          users.map((user) => <li key={user.login.uuid}>{user.email}</li>)}
      </ul>
    </section>
  );
};

export default UsersLoader;
