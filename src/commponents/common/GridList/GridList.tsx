import LottieHandler from "@/commponents/feedback/lottieHandler/LottieHandler";
import React from "react";
import { Row, Col } from "react-bootstrap";

type GridListProps<T>= {
    records : T[],
    item : (record: T)=> React.ReactNode;
    message?: string;  // message to be displayed when no records found  
}
const GridList = <T extends {id?: number}>({records, item, message}:GridListProps<T>) => {
    const recordsList = records.length > 0 ? records.map(record => (
        <Col
        key={record.id}
        xs={6} sm={4} md={3} lg={2} xl={2}
        className="d-flex justify-content-center mt-2 p-2"
        >
          {item(record)}
        </Col>
      )) : <LottieHandler type='favorite' message={message}/>; 
  return (
    <Row className="justify-content-center p-3">{recordsList}</Row>
  )
}

export default GridList;
