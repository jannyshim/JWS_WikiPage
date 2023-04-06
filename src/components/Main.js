import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

  return (
    <WikiContainer>
      <AddWiki className="adding">
        <Link to="/newwiki" className="link">
          추가
        </Link>
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
          previousLabel={"<"}
          nextLabel={">"}
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
const AddWiki = styled.div``;
const ContentContainer = styled.div``;
const WikiTitle = styled.div``;
const PaginateContainer = styled.div`
  a {
    width: 26px;
  }
  .page-item {
    width: 30px;
    height: 30px;
    border: 1px solid #a9a9a9;
    display: flex;
    justify-content: center;
    padding: 1px;
    margin: 0 2px 2px 0;
    font-size: 18px;
    text-align: center;
    cursor: pointer;
    &:hover {
      background-color: #6667ab;
      transition: all 0.5s;
    }
  }
  .break-me {
    color: #6667ab;
  }
  .active {
    color: #fcc72c;
    background-color: #6667ab;
    display: flex;
    justify-content: center;
  }
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 30px;
    color: #251749;
  }
`;
export default Main;
