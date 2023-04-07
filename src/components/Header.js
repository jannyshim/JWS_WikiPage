import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  const handleHeaderClick = () => {
    navigate(`/`);
  };
  return (
    <Head>
      <h1 onClick={handleHeaderClick}>Global Knowledge Wiki Page</h1>
    </Head>
  );
}

const Head = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  border-bottom: 2px dashed grey;
  font-family: monospace;
  font-size: larger;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;
