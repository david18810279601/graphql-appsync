import gql from 'graphql-tag'

export default gql`
  mutation delete($input: DeleteNRIFQAInput!) {
  deleteNRIFQA(input: $input) {
    id
    createtime
  }
  }
`
