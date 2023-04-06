import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import dummyWiki from "../dummyList";

const Newwiki = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newWiki = {
      id: dummyWiki.length + 1,
      title,
      content,
    };
    dummyWiki.push(newWiki);
    navigate(`/wikipage/${newWiki.id}`);
  };

  const handleCancel = () => {
    navigate(`/`);
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

export default Newwiki;
