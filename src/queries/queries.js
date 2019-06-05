import { gql } from 'apollo-boost';

const getBookQuery = gql`
  query($id: ID) {
    book(id: $id) {
      id
      name
      author {
        id
        name
        age
        books {
          id
          name
        }
      }
    }
  }
`;

const getBooksQuery = gql`
  {
    books {
      name
      genre
      id
    }
  }
`;

const getAuthorsQuery = gql`
  {
    authors {
      name
      age
      id
    }
  }
`;

// $name is qurey variable, String!: not null
const addBookMutation = gql`
  mutation ($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`

export { getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery };
