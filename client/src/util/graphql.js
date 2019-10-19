import gql from 'graphql-tag'


 export const FETCH_POSTS_QUERY = gql`

query{
  getPosts{
  id
    username
    createdAt
   body
    commentCount
    comments{
      id
    username
    createdAt
   body
    }
    likes{
      username
    }
    likeCount
  }
}

`;