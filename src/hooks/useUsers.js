import { useState, useEffect } from "react";

const useUsers = (getUsers) => {
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

  return {users, error, isFetching, currentPage, currentResults, prevPage, nextPage};
};

export default useUsers;
