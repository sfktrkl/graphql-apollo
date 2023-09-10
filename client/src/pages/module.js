import React from "react";
import { Layout, QueryResult } from "../components";
import { useParams } from "react-router-dom";

const Module = () => {
  const { trackId, moduleId } = useParams();
  return <Layout fullWidth={true}></Layout>;
};

export default Module;
