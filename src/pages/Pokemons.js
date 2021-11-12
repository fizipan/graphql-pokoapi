import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from '../gql/pokemons';

export default function Pokemons() {
  const gqlVariables = {
    limit: 2,
    offset: 1,
  };

  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });

  if (loading) return 'loading...';

  if (error) return `Error! ${error.message}`;

  console.log('Response From Server', data);

  return 'success';
}
