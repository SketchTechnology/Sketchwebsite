import Card from 'react-bootstrap/Card';

function SimpleCard({item}) {
  return (
    <Card >
      <Card.Body>
        <div className="iconCards my-3 ">
        <img src={item.icon} alt="" />

        </div>
        <Card.Title className='text-dark'>{item.title}</Card.Title>
        <Card.Text>
          {item.content}
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default SimpleCard;