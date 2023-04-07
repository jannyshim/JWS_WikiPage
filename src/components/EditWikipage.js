import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import dummyWiki from "../dummyList";

const Editwiki = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const foundData = dummyWiki.find((item) => item.id === Number(id));
    if (foundData) {
      setTitle(foundData.title);
      setContent(foundData.content);
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dummyWiki.forEach((item) => {
      if (item.id === Number(id)) {
        item.title = title;
        item.content = content;
      }
    });
    navigate(`/wikipage/${id}`);
  };
  const handleCancel = () => {
    navigate(`/wikipage/${id}`);
  };

  return (
    <EditContainer>
      <form onSubmit={handleSubmit}>
        <TitleInput
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="제목"
          required
        />
        <ContentInput
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="내용"
          required
        />
        <ButtonWrapper>
          <CancelButton onClick={handleCancel}>취소</CancelButton>
          <SubmitButton type="submit">저장</SubmitButton>
        </ButtonWrapper>
      </form>
    </EditContainer>
  );
};

const EditContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TitleInput = styled.input`
  width: 90%;
  height: 40px;
  margin-bottom: 20px;
  font-size: 16px;
  padding-left: 10px;
  ::placeholder {
    font-size: 16px;
  }
`;
const ContentInput = styled.textarea`
  width: 90%;
  height: 250px;
  padding: 10px;
  resize: vertical;
  font-size: 16px;
  white-space: pre-wrap;
  ::placeholder {
    font-size: 16px;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 40px;
`;
const CancelButton = styled.button`
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
`;
const SubmitButton = styled.button`
  color: #2f4f4f;
  font-size: 16px;
  width: 60px;
  margin-left: 20px;
  border: 1px solid #a9a9a9;
  border-radius: 8px;
  padding: 5px;
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: #a9a9a9;
    transition: all 0.5s;
  }
`;

export default Editwiki;
