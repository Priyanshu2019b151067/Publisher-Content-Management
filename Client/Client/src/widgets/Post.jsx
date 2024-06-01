import Card from 'react-bootstrap/Card';

function Post({post}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>
          {post.description}
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">{post.price}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default Post;