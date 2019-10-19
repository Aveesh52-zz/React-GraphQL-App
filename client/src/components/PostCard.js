import React,{useContext} from 'react'
import {Card,Image,Button,Icon,Label} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import moment from 'moment';
import {LikeButton} from '../components/LikeButton'
import {AuthContext} from '../context/auth';
import {DeleteButton} from './DeleteButton'


function PostCard({post:{body,createdAt,id, username,like,likeCount,commentCount, likes}}){
  const { user } = useContext(AuthContext);  
  
  

  function commentonPost(){
    console.log('commentonpost');
  }

  return (
  <Card fuild>
            <Card.Content>
        <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={`posts/{id}`}>{moment(createdAt).toNow(true)}</Card.Meta>
        <Card.Description>
          {body}
        </Card.Description>
      </Card.Content>
      <Card.Content extra> 
      
     <LikeButton user={user} post={{ id , likes, likeCount}}  />
    <Button as={Link} labelPosition='right' onClick={commentonPost} to={`/posts/${id}`}>
      <Button color='blue' extra>
        <Icon name='comments' />
        
      </Button>
      <Label basic color='blue' pointing='left'>
        {commentCount}
      </Label>
    </Button>
    {user && user.username === username && <DeleteButton postId={id}/>}
</Card.Content>
</Card>
  )

}
export default PostCard