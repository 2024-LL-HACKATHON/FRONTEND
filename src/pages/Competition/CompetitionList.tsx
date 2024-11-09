import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import { ReactComponent as CompetitionGlassSvg } from "../../assets/images/Glass.svg";
import CompetitionDetail from "../../components/CompetitionComponent/CompetitionDetail";
import ParticipationSwitchButtonComponent from "../../components/CompetitionComponent/ParticipationSwitchButtonComponent";
import Footer from "../../components/Footer/Footer";
import { ReactComponent as LikedImg } from "../../assets/images/LikedImg.svg";
import apiClient from "../../api/clientapi";

interface Item {
  com_id: number;
  title: string;
  createdAt: string;
  com_writer: string;
  content: string;
  image: string;
  likes: number;
  isLiked: boolean;
}

const CompetitionList: React.FC = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<Item[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [openItemId, setOpenItemId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(10);

  const pageRange: number = 3;
  const endDate = "2024-08-15T23:59:00";
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchTotalPages = async () => {
      try {
        const response = await apiClient.get(
          "/api/v1/competition/countCompetitions"
        );
        const totalItems = response.data;
        const pages = Math.ceil(totalItems / itemsPerPage);
        setTotalPages(pages);
      } catch (error) {
        setError("Failed to fetch total number of competitions");
      }
    };

    fetchTotalPages();
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await apiClient.get(
          `/api/v1/competition/getCompetitionByList?page=${currentPage}`
        );
        const itemsData = response.data.items;
        const likesPromises = itemsData.map((item: any) =>
          apiClient.get(`/api/v1/like/countLike/${item.com_id}`)
        );
        const likesResponses = await Promise.all(likesPromises);

        const itemsWithLikes = itemsData.map((item: any, index: number) => ({
          ...item,
          likes: likesResponses[index].data,
          isLiked: false,
        }));

        const likedItems = JSON.parse(
          localStorage.getItem("likedItems") || "{}"
        );
        const itemsWithLikeStatus = itemsWithLikes.map(
          (item: { com_id: string | number }) => ({
            ...item,
            isLiked: likedItems[item.com_id] || false,
          })
        );

        setItems(itemsWithLikeStatus);

        if (response.data.totalPages) {
          setTotalPages(response.data.totalPages);
        }
      } catch (error) {
        setError("Failed to fetch items");
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, [currentPage, totalPages]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    const [{ value: year }, , { value: month }, , { value: day }] =
      formatter.formatToParts(date);
    return `${year}.${month}.${day}`;
  };

  const toggleContent = (itemId: number) => {
    setOpenItemId(openItemId === itemId ? null : itemId);
  };

  const updateLikeStatus = async (itemId: number, isLiked: boolean) => {
    const token = localStorage.getItem("token");
    try {
      await apiClient.post(
        "/api/v1/like/createLike",
        { comId: itemId },
        {
          headers: { "X-AUTH-TOKEN": token || "" },
        }
      );

      const response = await apiClient.get(`/api/v1/like/countLike/${itemId}`);
      const updatedLikes = response.data;

      setItems((prevItems) => {
        const updatedItems = prevItems.map((item) =>
          item.com_id === itemId
            ? { ...item, likes: updatedLikes, isLiked: !isLiked }
            : item
        );

        const likedItems = updatedItems.reduce((acc, item) => {
          acc[item.com_id] = item.isLiked;
          return acc;
        }, {} as Record<number, boolean>);

        localStorage.setItem("likedItems", JSON.stringify(likedItems));

        return updatedItems;
      });
    } catch (error) {
      console.error("Error updating like status", error);
    }
  };

  const handleParticipateClick = () => {
    navigate("/competitionparticipation");
  };

  const handleRecommendClick = () => {
    navigate("/competitionlist");
  };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const startPage = Math.max(1, currentPage - Math.floor(pageRange / 2));
  const endPage = Math.min(totalPages, startPage + pageRange - 1);

  const expandedItem = items.find((item) => item.com_id === openItemId);

  return (
    <CompetitionListLayer>
      <CompetitionListHead>
        <Header isLoggedIn={false} fixed={false} />
        <CompetitionGlassWrapper>
          <CompetitionGlassSvg />
          <TextOverlay>경진대회 참가 리스트</TextOverlay>
        </CompetitionGlassWrapper>
      </CompetitionListHead>
      <CompetitionDetail endDate={endDate} />
      <ParticipationSwitchButtonComponent
        participateBackgroundColor="#fff"
        participateBorderColor="#72d49b"
        participateTextColor="#000"
        recommendBackgroundColor="#72d49b"
        recommendBorderColor="#72d49b"
        recommendTextColor="#fff"
        onParticipateClick={handleParticipateClick}
        onRecommendClick={handleRecommendClick}
      />
      <CompetitionListContainer>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
            <ListBox>
              <ListHeader>
                <ListHeaderItem>제목</ListHeaderItem>
                <ListHeaderItem>추천수</ListHeaderItem>
                <ListHeaderItem>등록일</ListHeaderItem>
              </ListHeader>
              <ListWrapper>
                {items.map((item) => (
                  <ListItem
                    key={item.com_id}
                    onClick={() => toggleContent(item.com_id)}
                  >
                    <ListItemContent>{item.title}</ListItemContent>
                    <ListItemContent>{item.likes}</ListItemContent>
                    <ListItemContent>
                      {formatDate(item.createdAt)}
                    </ListItemContent>
                  </ListItem>
                ))}
              </ListWrapper>
            </ListBox>

            {expandedItem && (
              <ExpandedContent>
                <Content>
                  <div id="contentHeader">
                    <h1>{expandedItem.title}</h1>
                    <div id="likedCount">
                      <LikedImg />
                      {expandedItem.likes}개
                    </div>
                    <p>등록 일자 {formatDate(expandedItem.createdAt)}</p>
                    <p>{expandedItem.com_writer}</p>
                  </div>
                  <h2>프롬프트</h2>
                  <h3>{expandedItem.content}</h3>
                  <h2>결과</h2>
                  <div id="imgnbtn">
                    {expandedItem.image && (
                      <img src={expandedItem.image} alt={expandedItem.title} />
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        updateLikeStatus(
                          expandedItem.com_id,
                          expandedItem.isLiked
                        );
                      }}
                    >
                      {expandedItem.isLiked ? "추천 취소" : "추천하기"}
                    </button>
                  </div>
                </Content>
              </ExpandedContent>
            )}
            <Pagination>
              <button onClick={() => paginate(1)} disabled={currentPage === 1}>
                &lt;&lt;
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
            <Footer />
          </>
        )}
      </CompetitionListContainer>
    </CompetitionListLayer>
  );
};

export default CompetitionList;

const CompetitionListLayer = styled.div`
  max-width: 100%;
`;
const CompetitionListHead = styled.div`
  max-width: 100%;
  height: 18.25rem;
  flex-shrink: 0;
  background: rgba(114, 212, 155, 0.3);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  text-align: center;
  margin-bottom: 10rem;
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

const CompetitionListContainer = styled.div`
  margin-top: 4.25rem;
`;

const ListBox = styled.div`
  margin-left: 5.56rem;
`;

const ListHeader = styled.div`
  display: flex;
  width: 68.3125rem;
  height: 3.1875rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 1rem;
  background: rgba(114, 212, 155, 0.3);
  padding: 10px;
  color: #7e7e7e;
  font-family: "Gmarket Sans TTF";
  font-size: 1rem;
  font-weight: 500;
`;

const ListHeaderItem = styled.div`
  flex: 1;
  text-align: center;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ListItem = styled.div`
  display: flex;
  width: 68.3125rem;
  justify-content: space-between;
  padding: 0.6rem;
  background: #fff;
  cursor: pointer;
  border-radius: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f1f1f1;
    border-radius: 1rem;
  }
`;

const ListItemContent = styled.div`
  flex: 1;
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
`;

const ExpandedContent = styled.div`
  margin-top: 20px;
`;

const Content = styled.div`
  width: 64.75rem;
  height: 76.5625rem;
  margin-left: 9.56rem;
  margin-top: 8.37rem;
  #contentHeader {
    display: flex;
    margin-left: 1.5rem;
    margin-bottom: 1.88rem;
    align-items: center;
    gap: 1.5rem;
    padding: 30px;
    border-bottom: 2px solid #72d49b;
  }
  h1 {
    color: #72d49b;
    font-family: "Gmarket Sans TTF";
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  h2 {
    color: #72d49b;
    font-family: "Noto Sans KR";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 30px 0px;
  }
  h3 {
    color: #000;
    font-family: "Noto Sans KR";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.5rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  p {
    color: #000;
    text-align: center;
    font-family: "Noto Sans KR";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  #likedCount {
    width: 8.4375rem;
    height: 2.8125rem;
    flex-shrink: 0;
    border-radius: 1rem;
    background: #72d49b;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: #fff;
    text-align: center;
    font-family: "Gmarket Sans TTF";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    margin-left: auto;
  }
  #imgnbtn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    max-width: 68.3125rem;
    margin: 0 auto;
    padding: 0 1rem;
  }
  img {
    max-width: 100%;
    max-height: 28rem;
    border-radius: 0.5rem;
  }
  button {
    width: 14.625rem;
    height: 4.5rem;
    border-radius: 1rem;
    border: 2px solid #72d49b;
    background: #fff;
    color: #000;
    text-align: center;
    font-family: "Gmarket Sans TTF";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
    margin-top: 7.12rem;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-family: "Noto Sans";
  font-size: 1.25rem;
  font-weight: 400;
  line-height: normal;
  margin-top: 4.25rem;
  gap: 0.88rem;
  margin-bottom: 10.37rem;

  button {
    width: 3.125rem;
    height: 3.125rem;
    border: none;
    border-radius: 50%;
    background-color: rgba(114, 212, 155, 0.5);
    cursor: pointer;
    color: #fff;

    &:disabled {
      opacity: 0.5;
    }
  }
`;
