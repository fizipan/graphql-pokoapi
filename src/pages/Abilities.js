import { useQuery } from '@apollo/client';
import { GET_ABILITIES } from '../gql/pokemons';

export default function Pokemons() {
  const { loading, error, data } = useQuery(GET_ABILITIES);

  if (loading) return 'loading...';

  if (error) return `Error! ${error.message}`;

  console.log('Response From Server', data);

  return (
    <div>
      <ul>
        {data.abilities.results.map((ability, index) => {
          return <li key={index}>{ability.name}</li>;
        })}
      </ul>
    </div>
  );
}
