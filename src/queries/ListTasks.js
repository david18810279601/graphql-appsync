import gql from 'graphql-tag'

export default gql`
  query listTasks {
    listTasks {
      items {
        ID
        name
        completed
      }
    }
  }
`
