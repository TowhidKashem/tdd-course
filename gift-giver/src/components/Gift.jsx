import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default class Gift extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      person: '',
      present: ''
    };
  }

  render({ gift, removeGift } = this.props) {
    return (
      <Form>
        <Form.Group>
          <Form.Label>Person</Form.Label>
          <Form.Control
            type="text"
            onChange={event =>
              this.setState({ person: event.target.value.trim() })
            }
            className="input-person"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Present</Form.Label>
          <Form.Control
            type="text"
            onChange={event =>
              this.setState({ present: event.target.value.trim() })
            }
            className="input-present"
          />
        </Form.Group>
        <Form.Group>
          <Button onClick={() => removeGift(gift.id)} className="btn-remove">
            Remove Gift
          </Button>
        </Form.Group>
      </Form>
    );
  }
}
