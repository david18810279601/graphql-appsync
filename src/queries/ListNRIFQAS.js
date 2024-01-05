import gql from 'graphql-tag'

export default gql`
query ListAllNRIFQAS($filter: TableNRIFQAFilterInput) {
  listNRIFQAS(filter: $filter) {
    items {
      id
      title
      detail
      category
      tag
      answer
      createtime
    }
  }
}
`
