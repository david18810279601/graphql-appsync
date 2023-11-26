import gql from 'graphql-tag'

export default gql`
  mutation createTask($createtaskinput: CreateTaskInput!) {
    createTask(input: $createtaskinput) {
      ID
      name
      completed
    }
  }
`
