import { useState, useEffect } from "react";
import { Container, Row, Col, Table, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { BsFillTrashFill, BsPencilSquare } from "react-icons/bs";

import routes from "routes";
import { getHomeData, getHomeSort } from "services/selectors/home";
import { toggleModal, sortBy } from "./redux/actionCreators";
import { sortingArray } from "services/constants";
import { sortArray } from "services/helpers";

import WarningModal from "components/WarningModal";

const Home = () => {
  const dispatch = useDispatch();

  const data = useSelector(getHomeData);
  const sort = useSelector(getHomeSort);

  const [tasks, setTasks] = useState(data);

  useEffect(() => {
    let orderedArray = sortArray(sort, tasks);

    setTasks([...orderedArray]);
  }, [sort]);

  useEffect(() => {
    let orderedArray = sortArray(sort, data);

    setTasks([...orderedArray]);
  }, [data]);

  return (
    <Container className="pt-5">
      <Row>
        <Col sm={12} className="mb-5">
          <Link to={routes.create} className="btn btn-outline-primary">
            Create task
          </Link>
        </Col>
        <Col sm={6}>
          <Form.Group className="mb-3">
            <Form.Label>Sort By</Form.Label>
            <select
              className="form-select"
              onChange={(e) => {
                const { value } = e.target;
                dispatch(sortBy(value));
              }}
              value={sort}
            >
              <option value="" disabled hidden>
                Choose here
              </option>
              {sortingArray.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Form.Group>
        </Col>
        <Col sm={12}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Description</th>
                <th>Person</th>
                <th>Priority</th>
                <th>Start Date</th>
                <th>Deadline</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.person}</td>
                  <td>{item.priority}</td>
                  <td>{item.start}</td>
                  <td>{item.deadline}</td>
                  <td>{item.status}</td>
                  <td>
                    <Button
                      style={{ marginRight: "15px" }}
                      className="bg-danger border-0"
                      onClick={() =>
                        dispatch(toggleModal({ showModal: true, id: item.id }))
                      }
                    >
                      <BsFillTrashFill />
                    </Button>
                    <Link
                      to={`edit/${item.id}`}
                      className="bg-success border-0 btn btn-primary"
                    >
                      <BsPencilSquare />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <WarningModal />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
