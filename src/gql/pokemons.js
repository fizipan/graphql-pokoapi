import { gql } from '@apollo/client';

export const GET_POKEMONS = gql`
  query Pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`;

export const GET_ABILITIES = gql`
  query Abilities {
    abilities {
      count
      next
      previous
      results {
        url
        name
      }
    }
  }
`;

const pokemons = {
  GET_POKEMONS,
  GET_ABILITIES,
};

export default pokemons;
