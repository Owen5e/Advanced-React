import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import DisplayError from './ErrorMessage';

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      title
      description
      price
      image
    }
  }
`;

export default function SingleProduct({ id }) {
  const { data, loading, error } = useQuery(SINGLE_PRODUCT_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  return (
    <div>
      <h2>{data.Product.title}</h2>
    </div>
  );
}
