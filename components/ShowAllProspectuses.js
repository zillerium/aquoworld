import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useContractRead } from "wagmi";

function ShowAllProspectuses({ prospectusesContractAddress, prospectusesContractABI }) {
  const [recordsData, setRecordsData] = useState([]);

  const configForAllRecords = {
    address: prospectusesContractAddress,
    abi: prospectusesContractABI,
    functionName: "getAllRecords",
    args: [],
  };

  const { data: allRecords, error } = useContractRead(configForAllRecords);

  useEffect(() => {
    if (allRecords) {
      setRecordsData(allRecords);
    }
  }, [allRecords, prospectusesContractAddress, prospectusesContractABI]);

  if (error) {
    return <div>Error fetching data from the contract: {error.message}</div>
  }

  return (
    <div className="container mt-4">
      <h2 className="font-mono mb-4">All Prospectuses</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Prospectus CID</th>
            <th>Image CID</th>
            <th>Proposer Address</th>
          </tr>
        </thead>
        <tbody>
          {recordsData.map((record, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{record.prospectusCid}</td>
              <td>{record.imageCid}</td>
              <td>{record.proposer}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ShowAllProspectuses;

