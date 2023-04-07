import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import dummyWiki from "../dummyList";

const Wikipage = () => {
  const [datas, setDatas] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const foundData = dummyWiki.find((item) => item.id === Number(id));
    setDatas(foundData);
  }, [id]);

  const handleEditButton = (id) => {
    navigate(`/editwiki/${id}`);
  };

  return (
    <WikiPageContainer>
      <EditWiki className="editing">
        <button
          className="edit-button"
          onClick={() => handleEditButton(datas.id)}
        >
          수정
        </button>
      </EditWiki>
      <WikiContentContainer>
        <TitleWrapper>{datas?.title}</TitleWrapper>
        <ContentWrapper>{datas?.content}</ContentWrapper>
      </WikiContentContainer>
    </WikiPageContainer>
  );
};
const WikiPageContainer = styled.div``;
const EditWiki = styled.div`
  float: right;
  margin-right: 50px;
  .edit-button {
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
const WikiContentContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
`;
const TitleWrapper = styled.div`
  width: 70%;
  padding: 20px 0 5px 10px;
  font-size: 22px;
  border-bottom: 1px solid rgba(169, 169, 169, 0.3);
`;
const ContentWrapper = styled.div`
  width: 70%;
  height: 100vh;
  padding: 20px 10px 5px 10px;
  font-size: 16px;
  line-height: 1.5;
`;
export default Wikipage;
