import gql from 'graphql-tag'

export default gql`
  query ListNRIFQAS($filter: TableNRIFQAFilterInput) {
  listNRIFQAS(filter: $filter) {
    items {
      id
      title
      detail
      category
      tag
      createtime
     }
   }
 }
`