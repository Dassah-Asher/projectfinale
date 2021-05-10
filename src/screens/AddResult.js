import { Form, Container, Button } from "react-bootstrap";

const AddResult = () => {
  return (
    <Container
      style={{
        height: "70vh",
        width: "70%",
        display: "grid",
        gridTemplateColumns: "40%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          gridTemplateColumns: "1fr",
          gridGap: 15,
          padding: "20px",
          border: "1px solid green",
        }}
      >
        <h3 className="text-center"> Results Form</h3>
        <Form.Control placeholder="Enter Student Name"></Form.Control>
        <Form.Control placeholder="Enter Class"></Form.Control>
        <Form.Control placeholder="Enter Year "></Form.Control>
        <Form.Control placeholder="Enter Subject"></Form.Control>
        <Form.Control placeholder="Enter Class Score "></Form.Control>
        <Form.Control placeholder="Enter Subject Grade "></Form.Control>
        <Form.Control placeholder="Enter Peformance Remarks "></Form.Control>
        <Form.Control placeholder="Enter Attendance "></Form.Control>
        <Form.Control placeholder="Enter Interest "></Form.Control>
        <Form.Control placeholder="Enter Interest "></Form.Control>
        <Form.Control placeholder="Teacher Remarks "></Form.Control>
        <Form.Control placeholder="Announcement"></Form.Control>
        <Button>SAVE</Button>
      </Form>
    </Container>
  );
};

export default AddResult;
