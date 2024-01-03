import gql from 'graphql-tag'

export default gql`
  mutation UpdateNRIFQA($input: UpdateNRIFQAInput!) {
  updateNRIFQA(input: $input) {
    id
    title
    detail
    category
    tag
    answer
    createtime
  }
  }
`
