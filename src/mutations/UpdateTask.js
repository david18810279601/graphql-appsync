import gql from 'graphql-tag'

export default gql`
  mutation updateTask($input: UpdateTaskInput!) {
    updateTask(input: $input) {
      ID
      name
      completed
    }
  }
`
