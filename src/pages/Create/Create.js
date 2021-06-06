import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";

import { createTask } from "pages/Home/redux/actionCreators";
import routes from "routes";
import { priorityArray, statusArray } from "services/constants";

const Create = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newObj = { ...data, id: nanoid() };

    dispatch(createTask(newObj));

    history.push(routes.home);
  };

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
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                name="title"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <Form.Text className="text-danger">
                  This field cannot be empty.
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                name="description"
                {...register("description", { required: true })}
              />
              {errors.description && (
                <Form.Text className="text-danger">
                  This field cannot be empty.
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="person">
              <Form.Label>Person</Form.Label>
              <Form.Control
                type="text"
                placeholder="Person"
                name="person"
                {...register("person", { required: true })}
              />
              {errors.person && (
                <Form.Text className="text-danger">
                  This field cannot be empty.
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="deadline">
              <Form.Label>Deadline</Form.Label>
              <Form.Control
                type="date"
                placeholder="Deadline"
                name="deadline"
                {...register("deadline", { required: true })}
              />
              {errors.deadline && (
                <Form.Text className="text-danger">
                  This field cannot be empty.
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="start">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Start Date"
                name="start"
                {...register("start", { required: true })}
              />
              {errors.start && (
                <Form.Text className="text-danger">
                  This field cannot be empty.
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="priority">
              <Form.Label>Priority</Form.Label>
              <select
                className="form-select"
                name="priority"
                {...register("priority", { required: true })}
              >
                {priorityArray.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
              {errors.priority && (
                <Form.Text className="text-danger">
                  This field cannot be empty.
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="status">
              <Form.Label>Status</Form.Label>
              <select
                className="form-select"
                name="status"
                {...register("status", { required: true })}
              >
                {statusArray.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
              {errors.status && (
                <Form.Text className="text-danger">
                  This field cannot be empty.
                </Form.Text>
              )}
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
