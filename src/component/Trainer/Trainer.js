import React from 'react';
import { Card, CardGroup} from 'react-bootstrap';

const Trainer = () => {
  return (
    <div>
      <CardGroup className="m-3">
  <Card>
    <Card.Img variant="top" src="https://media.istockphoto.com/photos/portrait-of-chinese-personal-trainer-in-gym-picture-id1018043738?k=20&m=1018043738&s=170667a&w=0&h=D73Bdou7PZFE_ASJ1LOyOij4KHk1zRwOGCqAZnS5cqg=" />
    <Card.Body>
      <Card.Title>Huang Sai</Card.Title>
      <Card.Text>
      A Personal Trainer, or fitness trainer, works with a variety of clients to improve their fitness, physicality and overall health. Their duties include evaluating a client's needs and goals, modelling workouts and making a workout schedule for clients
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://us.123rf.com/450wm/wavebreakmediamicro/wavebreakmediamicro1603/wavebreakmediamicro160333359/54600800-portrait-of-gym-instructor-holding-clipboard-in-gym.jpg?ver=6" />
    <Card.Body>
      <Card.Title>Galen Watt</Card.Title>
      <Card.Text>
      A fitness instructor, also known as a personal trainer, provides training and instruction of fitness programs to individuals and groups. The fitness instructor engages clients in exercise routines and weight loss programs, and helps them to reach their individual goals.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://image.shutterstock.com/image-photo/group-seniors-gym-young-trainer-260nw-1342162667.jpg" />
    <Card.Body>
      <Card.Title>Aron Tylor</Card.Title>
      <Card.Text>
      Fitness trainers and instructors lead, instruct, and motivate individuals or groups in exercise activities, including cardiovascular exercises (exercises for the heart and blood circulation), strength training, and stretching. They work with people of all ages and skill levels.
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
    </div>
  );
};

export default Trainer;