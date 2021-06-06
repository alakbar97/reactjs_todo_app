import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useHistory, useParams, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { updateTask } from "pages/Home/redux/actionCreators";
import routes from "routes";
import { priorityArray, statusArray } from "services/constants";
import { getHomeData } from "services/selectors/home";

const Create = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const history = useHistory();

  const [task, setTask] = useState({});

  const data = useSelector(getHomeData);

  useEffect(() => {
    setTask(data.find((item) => item.id === id));
  }, [data]);

  const onSubmit = () => {
    dispatch(updateTask(task));

    history.push(routes.home);
  };

  if (!task) return <Redirect push to={routes.home} />;

  return (
    <Container className="pt-5">
      <Row>
        <Col sm={12}>
          <Button
            variant="outline-primary"
            onClick={() => history.push(routes.home)}
            className="mb-5"
          >
            Back to list
          </Button>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                name="title"
                disabled
                value={task.title}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                name="description"
                disabled
                value={task.description}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="person">
              <Form.Label>Person</Form.Label>
              <Form.Control
                type="text"
                placeholder="Person"
                name="person"
                disabled
                value={task.person}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="deadline">
              <Form.Label>Deadline</Form.Label>
              <Form.Control
                type="date"
                placeholder="Deadline"
                name="deadline"
                disabled
                value={task.deadline}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="start">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Start Date"
                name="start"
                disabled
                value={task.start}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="priority">
              <Form.Label>Priority</Form.Label>
              <select
                className="form-select"
                name="priority"
                value={task.priority}
                onChange={(e) =>
                  setTask((prev) => {
                    const { value } = e.target;
                    return {
                      ...prev,
                      priority: value,
                    };
                  })
                }
              >
                {priorityArray.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="status">
              <Form.Label>Status</Form.Label>
              <select
                className="form-select"
                name="status"
                value={task.status}
                onChange={(e) =>
                  setTask((prev) => {
                    const { value } = e.target;
                    return {
                      ...prev,
                      status: value,
                    };
                  })
                }
              >
                {statusArray.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Create;
