import React, { useEffect, useState } from "react";
import { Carousel, Modal, Table } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import image1 from "../../images/Technician_Assistance_01.jpg";
import image2 from "../../images/Technician_Assistance_02.jpg";
import UserFrom from "../From/UserFrom";
import Loader from "../../shared/Loader/Loader";

const Home = () => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    axios
      .get("https://lit-savannah-40479.herokuapp.com/api/users")
      .then((res) => {
        if (res.status === 200) {
          setRows(res.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        toast.error("Internal Servel Error! Try Again latter");
        setLoading(false);
        console.log(error.response);
      });
  }, [rows]);
  return (
    <div>
      <h1 className="title">Design Avenue Assignment</h1>

      {loading ? (
        <Loader />
      ) : (
        <>
          <div>
            <Carousel
              className="carousel-section"
              activeIndex={index}
              onClick={handleShow}
              onSelect={handleSelect}
            >
              <Carousel.Item>
                <img className="d-block w-100" src={image1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image2}
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>

          {/* modal */}
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Fill In the From</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <UserFrom handleClose={handleClose} />
            </Modal.Body>
          </Modal>

          {/* user table */}
          <div>
            <h3 className="table-title">User List</h3>
            <div className="table-section">
              <Table striped bordered hover>
                <thead>
                  <tr className="text-center">
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((item, index) => (
                    <tr className="text-center" key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phoneNumber}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
