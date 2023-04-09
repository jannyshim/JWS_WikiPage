import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import styled from "styled-components";
import { useNavigate, useParams, Link } from "react-router-dom";
import dummyWiki from "../dummyList";

const Wikipage = () => {
  const [datas, setDatas] = useState();
  const [relatedContents, setRelatedContents] = useState([]);
  const [relatedTitles, setRelatedTitles] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const foundData = dummyWiki.find((item) => item.id === Number(id));
    setDatas(foundData);
    const relatedTitle = dummyWiki
      .filter(
        (item) =>
          item.id !== Number(id) && item.content.includes(foundData.title)
      )
      .map((item) => item.title);
    setRelatedTitles(relatedTitle);
    const relatedContent = dummyWiki
      .filter(
        (item) =>
          item.id !== Number(id) && foundData.content.includes(item.title)
      )
      .map((item) => item.title);
    setRelatedContents(relatedContent);
  }, [id]);

  const createContentLinks = () => {
    if (!datas) return "";

    let content = datas.content;
    let modifiedContent = content;
    if (relatedContents.length === 0) {
      return modifiedContent;
    }

    relatedContents.forEach((relatedContent) => {
      const relatedId = dummyWiki.find((item) => item.title === relatedContent);
      const pattern = relatedContent;
      const link = `<a href="/wikipage/${relatedId.id}">${relatedContent}</a>`;
      modifiedContent = modifiedContent.replace(pattern, link);
    });
    return parse(modifiedContent);
  };

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
        <ContentWrapper>{createContentLinks()}</ContentWrapper>
        {relatedTitles.length > 0 && (
          <RelatedTitles>
            <h3>Related Titles:</h3>
            <ul>
              {relatedTitles.map((title) => (
                <li key={dummyWiki.find((item) => item.title === title).id}>
                  <Link
                    to={`/wikipage/${
                      dummyWiki.find((item) => item.title === title).id
                    }`}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </RelatedTitles>
        )}
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
  padding: 20px 10px 5px 10px;
  font-size: 16px;
  line-height: 1.5;
`;
const RelatedTitles = styled.div`
  margin-top: 2rem;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-bottom: 0.5rem;
    }
  }
`;
export default Wikipage;
