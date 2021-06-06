import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import { getModalStatus } from "services/selectors/home";
import { toggleModal, removeTask } from "pages/Home/redux/actionCreators";

const WarningModal = () => {
  const dispatch = useDispatch();

  const { showModal: show, id } = useSelector(getModalStatus);

  const handleClose = () => dispatch(toggleModal({ showModal: false, id: "" }));

  const handleSubmit = () => {
    dispatch(removeTask(id));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Are you sure you want to delete item ?</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="danger" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WarningModal;
