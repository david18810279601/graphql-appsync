import gql from 'graphql-tag'

export default gql`
  mutation createNRIFQA($createnrifqainput: CreateNRIFQAInput!) {
  createNRIFQA(input: $createnrifqainput) {
    id
    title
    detail
    category
    tag
    createtime
   }
  }
`
