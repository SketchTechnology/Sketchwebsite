import Card from 'react-bootstrap/Card';

function SimpleCard() {
  return (
    <Card >
      <Card.Body>
        <Card.Title className='text-dark'>Mobile application</Card.Title>
        <Card.Text>
        With over a decade of experience, we’ve established ourselves as one of the pioneering agencies in the region
        </Card.Text>
        <Card.Link href="#" className='text-dark'>Card Link</Card.Link>
        <Card.Link href="#" className='text-dark'>Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default SimpleCard;