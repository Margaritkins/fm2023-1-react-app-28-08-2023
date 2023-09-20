import React from 'react';
import Error from '../Error';
import Spinner from '../Spinner';
import { getProductsJSON } from '../../api';
import { useLoaderData } from '../../hooks';

const ViewProducts = (props) => {
  const { data, error, isFetching } = useLoaderData(getProductsJSON);
  if (error) {
    return <Error />;
  }
  return (
    <div>
      {isFetching && <Spinner />}
      <ul>
        {isFetching ||
          data.map(({ id, title, price }) => (
            <li key={id}>
              <h3>{title}</h3>
              <p>{price}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ViewProducts;
