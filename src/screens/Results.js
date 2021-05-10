import { useContext, useEffect } from "react";
import { Spinner, Table } from "react-bootstrap";
import { ResultsContext } from "../contexts/ResultsContext";
import { FiEdit, FiDelete, FiEye } from "react-icons/fi";
const Results = () => {
  const { loading, results, getResults } = useContext(ResultsContext);

  useEffect(() => {
    getResults();
    // eslint-disable-next-line
  }, []);

  return (
    <section>
      {loading && <Spinner className="text-center" animation="grow" />}
      {results.length > 0 ? (
        <Table striped hover>
          <thead>
            <tr>
            <th>STUDENT NAME</th>
              <th>CLASS</th>
              <th>YEAR</th>
              <th>SUBJECT</th>
              <th>CLASS SCORE</th>
              <th>EXAM SCORE</th>
              <th>GRADE</th>
              <th>REMARKS</th>
              <th>ATTENDANCE</th>
              <th>INTEREST</th>
              <th>TEACHER REMARKS</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr key={results._id}>
                <td>{result.class}</td>
                <td>{result.year}</td>
                <td>{result.subject}</td>
                <td>{result.classScore}</td>
                <td>{result.examScore}</td>
                <td>{result.grade}</td>
                <td>{result.remarks}</td>
                <td>{result.attendance}</td>
                <td>{result.interest}</td>
                <td>{result.teacherRemarks}</td>
                <td>
                  <FiDelete /> <FiEdit /> <FiEye />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        !loading && <h1>NO RECORDS</h1>
      )}
    </section>
  );
};

export default Results;