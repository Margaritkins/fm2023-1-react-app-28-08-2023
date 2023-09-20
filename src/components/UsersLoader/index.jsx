import React, { useState, useEffect } from 'react';
import { getUsers } from '../../api';
import Error from '../Error';
import Spinner from '../Spinner';
// import styles from './UsersLoader.module.scss';

const UsersLoader = (props) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentResults, setCurrentResults] = useState(5);
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((currentPage) => currentPage - 1);
    }
  };
  const nextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  const load = () => {
    setIsFetching(true);
    getUsers({ page: currentPage, results: currentResults })
      .then((data) => {
        if (data.error) {
          throw new Error();
        }
        setUsers(data.results);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  useEffect(() => {
    load(); // eslint-disable-next-line
  }, [currentPage, currentResults]);

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
