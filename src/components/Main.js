import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import dummyWiki from "../dummyList";

const Main = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const navigate = useNavigate();

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const sortedList = dummyWiki.sort((a, b) => b.id - a.id);
  const displayedDatas = sortedList.slice(startIndex, endIndex);

  const handleClick = (id) => {
    navigate(`/wikipage/${id}`);
  };

  const handleAddButton = () => {
    navigate(`/newwiki`);
  };

  return (
    <WikiContainer>
      <AddWiki className="adding">
        <button onClick={handleAddButton} className="add-button">
          ➕추가
        </button>
      </AddWiki>
      <ContentContainer>
        {displayedDatas.map((data) => (
          <WikiTitle key={data.id} onClick={() => handleClick(data.id)}>
            {data.title}
          </WikiTitle>
        ))}
      </ContentContainer>
      <PaginateContainer>
        <ReactPaginate
          previousLabel="◀︎이전"
          nextLabel="다음▶︎"
          previousClassName={"previous"}
          nextClassName={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={Math.ceil(dummyWiki.length / itemsPerPage)}
          marginPagesDisplayed={0}
          pageRangeDisplayed={5}
          onPageChange={(page) => setCurrentPage(page.selected + 1)}
          containerClassName={"pagination"}
          activeClassName={"active"}
          pageClassName={"page-item"}
        />
      </PaginateContainer>
    </WikiContainer>
  );
};

const WikiContainer = styled.div``;
const AddWiki = styled.div`
  float: right;
  margin-right: 50px;
  .add-button {
    color: #2f4f4f;
    font-size: 16px;
    width: 60px;
    border: 1px solid #a9a9a9;
    border-radius: 8px;
    padding: 5px;
    cursor: pointer;
    text-align: center;
    &:hover {
      background-color: #a9a9a9;
      transition: all 0.5s;
    }
  }
`;
const ContentContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
`;
const WikiTitle = styled.div`
  width: 70%;
  padding: 20px 0 5px 10px;
  border-bottom: 1px solid rgba(169, 169, 169, 0.3);
  &:hover {
    background-color: rgba(169, 169, 169, 0.3);
    transition: all 0.5s;
    cursor: pointer;
  }
`;
const PaginateContainer = styled.div`
  .page-item {
    width: 30px;
    height: 30px;
    border: 1px solid #a9a9a9;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    padding: 1px;
    margin: 0 2px 2px 0;
    font-size: 18px;
    text-align: center;
    cursor: pointer;
    &:hover {
      background-color: #66cdaa;
      transition: all 0.5s;
    }
  }
  .previous {
    padding-top: 5px;
    margin-right: 10px;
  }
  .next {
    padding-top: 5px;
    margin-left: 7px;
  }
  .break-me {
    color: #66cdaa;
  }
  .active {
    color: #ffe4e1;
    background-color: #66cdaa;
    display: flex;
    justify-content: center;
  }
  .pagination {
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin-top: 30px;
    margin-bottom: 30px;
    color: #2f4f4f;
  }
`;
export default Main;
