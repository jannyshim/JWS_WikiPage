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
    <div>
      <EditWiki className="editing">
        <button onClick={() => handleEditButton(datas.id)}>수정</button>
      </EditWiki>
      <TitleWrpper>{datas?.title}</TitleWrpper>
      <ContentWrpper>{datas?.content}</ContentWrpper>
    </div>
  );
};

const EditWiki = styled.div``;
const TitleWrpper = styled.div``;
const ContentWrpper = styled.div``;
export default Wikipage;
