import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import { ReactComponent as CompetitionGlassSvg } from "../../assets/images/Glass.svg";
import {
  CompetitionExample,
  ParticipationInfo,
  ParticipationInfoText,
} from "./CompetitionParticipation";

interface Post {
  id: number;
  title: string;
  date: string;
  author: string;
  content: string;
  image: string;
  likes: number;
}

const CompetitionList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [openPostId, setOpenPostId] = useState<number | null>(null);
  const postsPerPage: number = 5;
  const pageRange: number = 3;

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("http://localhost:3001/posts");
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const toggleContent = (postId: number) => {
    setOpenPostId(openPostId === postId ? null : postId);
  };

  const increaseLikes = (postId: number) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startPage = Math.max(1, currentPage - Math.floor(pageRange / 2));
  const endPage = Math.min(totalPages, startPage + pageRange - 1);

  return (
    <>
      <CompetitionListHead>
        <Header isLoggedIn={false} marginTop="" />
        <CompetitionGlassWrapper>
          <CompetitionGlassSvg />
          <TextOverlay>경진대회 참가 리스트</TextOverlay>
        </CompetitionGlassWrapper>
      </CompetitionListHead>
      <ParticipationInfo>
        <ParticipationInfoText>
          <h1>미래 도시 설계</h1>
          <p>2024.08.01 ~ 2024.08.08 23:59</p>
          <p>24명</p>
        </ParticipationInfoText>
        <CompetitionExample />
      </ParticipationInfo>
      <ParticipationSwitchButtonBox>
        <ParticipateButton>참가하기</ParticipateButton>
        <RecommendButton>추천하러 가기</RecommendButton>
      </ParticipationSwitchButtonBox>
      <CompetitionListContainer>
        <Table>
          <thead>
            <tr>
              <th>제목</th>
              <th>추천수</th>
              <th>등록일자</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((post) => (
              <React.Fragment key={post.id}>
                <tr
                  onClick={() => toggleContent(post.id)}
                  style={{ cursor: "pointer" }}
                >
                  <td>{post.title}</td>
                  <td>{post.likes}</td>
                  <td>{post.date}</td>
                </tr>
                {openPostId === post.id && (
                  <tr>
                    <td colSpan={3}>
                      <Content>
                        <h2>{post.title}</h2>
                        <p>
                          {post.date} - {post.author}
                        </p>
                        <p>{post.content}</p>
                        {post.image && (
                          <img src={post.image} alt={post.title} />
                        )}
                        <button onClick={() => increaseLikes(post.id)}>
                          추천 {post.likes}
                        </button>
                      </Content>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </Table>
        <Pagination>
          <button onClick={() => paginate(1)} disabled={currentPage === 1}>
            &lt; &lt;
          </button>
          <button
            onClick={() => paginate(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
            <button
              key={startPage + index}
              onClick={() => paginate(startPage + index)}
              disabled={currentPage === startPage + index}
            >
              {startPage + index}
            </button>
          ))}
          <button
            onClick={() => paginate(Math.min(currentPage + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
          <button
            onClick={() => paginate(totalPages)}
            disabled={currentPage === totalPages}
          >
            &gt;&gt;
          </button>
        </Pagination>
      </CompetitionListContainer>
    </>
  );
};

export default CompetitionList;

const CompetitionListHead = styled.div`
  width: 80rem;
  height: 18.25rem;
  flex-shrink: 0;
  background: rgba(114, 212, 155, 0.3);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  text-align: center;
`;

const CompetitionGlassWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 54px;

  svg {
    width: 70.4375rem;
    height: 16.6875rem;
    fill: rgba(255, 255, 255, 0.6);
    stroke-width: 2px;
    stroke: rgba(44, 193, 191, 0.3);
  }
`;

const TextOverlay = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #000;
  font-family: "Gmarket Sans TTF";
  font-size: 2.25rem;
  font-weight: 500;
  line-height: normal;
`;
const ParticipationSwitchButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 6.75rem;
  gap: 2.37rem;
`;
const ParticipateButton = styled.div`
  width: 8.625rem;
  height: 3.625rem;
  flex-shrink: 0;
  border-radius: 1rem;
  border: 1px solid #72d49b;
  background: #fff;
  color: #000;
  font-family: "Gmarket Sans TTF";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const RecommendButton = styled.div`
  width: 10.5625rem;
  height: 3.625rem;
  flex-shrink: 0;
  border-radius: 1rem;
  background: #72d49b;
  color: #fff;
  font-family: "Gmarket Sans TTF";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CompetitionListContainer = styled.div`
  padding: 20px;
`;

const Table = styled.table`
  width: 68.3125rem;
  height: 3.1875rem;
  margin-top: 10rem;
  margin-bottom: 20px;
  thead {
    width: 68.3125rem;
    height: 3.1875rem;
    border-radius: 1rem;
    background: rgba(114, 212, 155, 0.3);
    color: #7e7e7e;
    font-family: "Gmarket Sans TTF";
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  th,
  td {
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #f1f1f1;
  }
`;

const Content = styled.div`
  padding: 10px;
  img {
    max-width: 100%;
    height: auto;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-family: "Noto Sans";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  button {
    width: 3.125rem;
    height: 3.125rem;
    flex-shrink: 0;
    margin: 0 5px;
    border: none;
    border-radius: 50%;
    background-color: rgba(114, 212, 155, 0.5);
    color: #fff;
    cursor: pointer;
    &:disabled {
      color: #808080;
    }
  }
`;
