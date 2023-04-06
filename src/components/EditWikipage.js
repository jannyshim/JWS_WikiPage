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
  );
};

const TitleInput = styled.input``;
const ContentInput = styled.textarea``;
const ButtonWrapper = styled.div``;
const CancelButton = styled.button``;
const SubmitButton = styled.button``;

export default Editwiki;
