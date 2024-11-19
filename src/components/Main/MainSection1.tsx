import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as SearchImg } from "../../assets/images/SearchIcon.svg";
import { ReactComponent as ServiceImg1 } from "../../assets/images/MainSection1_Icon1.svg";
import { ReactComponent as ServiceImg2 } from "../../assets/images/MainSection1_Icon2.svg";
import { ReactComponent as ServiceImg3 } from "../../assets/images/MainSection1_Icon3.svg";
import { ReactComponent as BackCircle } from "../../assets/images/MainSection1_BackCircle.svg";
import { Link } from "react-router-dom";
import userDefault from "../../assets/images/userdefault.png";
import apiClient from "../../api/clientapi";

interface User {
  name: string;
  nickname: string;
  thumbnail: string;
}

const MainSection1: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [output, setOutput] =
    useState<string>("프롬프트 전송 결과물 예시입니다.");
  const [userName, setUserName] = useState<string>("");
  const [userImage, setUserImage] = useState<string>("");
  const [userNickname, setUserNickname] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    const token = localStorage.getItem("authToken");
    try {
      apiClient.defaults.headers.common["X-AUTH-TOKEN"] = token;
      const response = await apiClient.get(
        `/api/v1/main/getGptApi?prompt=${searchText}`
      );
      setOutput(response.data || "결과가 없습니다.");
    } catch (error) {
      setOutput("Error");
      setError("프롬프트 전송 중 오류 발생");
      console.error("프롬프트 전송 중 오류 발생", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserInfo = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      setUserName("");
      setUserImage("");
      setUserNickname("");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      apiClient.defaults.headers.common["X-AUTH-TOKEN"] = token;
      const response = await apiClient.get("/api/v1/user/getUser");
      const { name, nickname, thumbnail } = response.data;
      setUserName(name);
      setUserImage(thumbnail);
      setUserNickname(nickname);
    } catch (error) {
      setError("사용자 정보 가져오기 실패");
      setUserName("");
      setUserImage("");
      setUserNickname("");
      console.error("사용자 정보 가져오기 실패", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <Section1>
      <Background>
        <BackCircle />
      </Background>
      <Contents>
        <Text1>
          <span>프롬프렌</span> 체험해보기
        </Text1>
        <Text2>
          해당 입력란을 통해 프롬프렌이 제공한 프롬프트를 바로 사용해 볼 수
          있어요!
        </Text2>
        <Search>
          <input
            type="text"
            placeholder="프롬프트를 입력해주세요."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <SearchIcon onClick={handleSearch} />
        </Search>
        <Category>
          <p>맞춤형 카테고리</p>
          <CategoryHash>#프롬프렌이 제공하는</CategoryHash>
          <CategoryHash>#프롬프트를</CategoryHash>
          <CategoryHash>#직접 사용해보세요!</CategoryHash>
          <CategoryHash>#지금 바로!</CategoryHash>
          <CategoryHash>#여기에서!</CategoryHash>
        </Category>
        <Output>{output}</Output>
        {loading && <Loading>로딩 중...</Loading>}
        {error && <Error>{error}</Error>}
        <InfoContainer>
          <ServiceInfo>
            편리하고 안전한 프롬프트를 제공하는 <span>프롬프렌 서비스</span>
            <ServiceList>
              <Service>
                <StyledLink to="/prompt_register">
                  <StyledImg1 />
                </StyledLink>
                <p>프롬프트 작성</p>
              </Service>
              <Service>
                <StyledLink to="/competitionlist">
                  <StyledImg2 />
                </StyledLink>
                <p>경진대회 참가</p>
              </Service>
              <Service>
                <StyledLink to="/guide">
                  <StyledImg3 />
                </StyledLink>
                <p>작성 가이드</p>
              </Service>
            </ServiceList>
          </ServiceInfo>
          <UserInfo>
            <UserInfoLeft>
              {userName && (
                <p>
                  <span>{userName}</span>님 반갑습니다!
                </p>
              )}
              {userImage ? (
                <UserImage src={userImage} alt="User profile" />
              ) : (
                <UserImage src={userDefault} alt="Default profile" />
              )}
            </UserInfoLeft>
            <UserInfoRight>
              <p>
                프롬프렌 닉네임: <span>{userNickname || "로그인 필요"}</span>
              </p>
              <div id="userinfostroke" />
              <StyledLink to="/prompt_register">
                <StyledButton>프롬프트 등록하기</StyledButton>
              </StyledLink>
            </UserInfoRight>
          </UserInfo>
        </InfoContainer>
      </Contents>
    </Section1>
  );
};

export default MainSection1;

const Loading = styled.div``;
const Error = styled.div``;
const StyledLink = styled(Link)``;
const Section1 = styled.div`
  background: rgba(205, 240, 220, 0.05);
  height: 800px;
  position: relative;

  @media (max-width: 768px) {
    height: auto;
    padding-bottom: 20px;
  }
`;

const Background = styled.div`
  position: absolute;
  top: -34px;
  left: 0;
  z-index: -1;
`;

const Contents = styled.div`
  padding: 151px 0px 62px 107px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 100px 20px;
  }
`;

const Text1 = styled.div`
  font-family: "Gmarket Sans TTF light", sans-serif;
  font-size: 36px;
  font-weight: 300;
  line-height: normal;

  span {
    font-family: "Gmarket Sans TTF", sans-serif;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Text2 = styled.div`
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-weight: 100;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Search = styled.div`
  display: flex;
  width: 100%;
  max-width: 1066px;
  margin-top: 30px;
  border-bottom: 1.5px solid #000;
  align-items: center;

  input {
    flex-grow: 1;
    font-size: 16px;
    margin: 10px;
    outline: none;
    border-style: none;
    background: none;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    input {
      font-size: 14px;
      margin: 5px;
    }
  }
`;

const SearchIcon = styled(SearchImg)`
  width: 32px;
  height: 39px;
  margin-bottom: 6px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 28px;
    height: 34px;
  }
`;

const Category = styled.div`
  font-family: "Noto Sans KR";
  font-size: 16px;
  margin-top: 24px;
  margin-bottom: 37px;

  p {
    width: 108px;
    height: 36px;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    margin-top: 16px;
    margin-bottom: 24px;
  }
`;

const CategoryHash = styled.div`
  display: inline-block;
  font-size: 12px;
  margin: 3px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 16px;

  @media (max-width: 768px) {
    font-size: 10px;
    padding: 4px 8px;
  }
`;

const Output = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  width: 100%;
  max-width: 1066px;
  height: 131px;
  border-radius: 9px;
  border: 1px solid #72d49b;
  padding: 19px 13px;
  margin-bottom: 26px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 15px 10px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 17px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const ServiceInfo = styled.div`
  width: 525px;
  height: 170px;
  border-radius: 9px;
  border: 1px solid #72d49b;
  padding-top: 31px;
  text-align: center;
  font-family: "Gmarket Sans TTF";
  font-size: 18px;
  font-weight: 300;

  span {
    font-weight: 700;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding-top: 20px;
    font-size: 16px;
  }
`;

const ServiceList = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Service = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  font-weight: 300;

  &:hover {
    transform: scale(1.25);
  }

  p {
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const UserInfo = styled.div`
  width: 525px;
  height: 170px;
  border-radius: 9px;
  border: 1px solid #72d49b;
  display: flex;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 18px;
  font-weight: 300;
  padding: 15px 0px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    flex-direction: column;
  }
`;

const UserImage = styled.img`
  width: 5.5rem;
  height: 5.5rem;
  object-fit: cover;
  border-radius: 1rem;

  @media (max-width: 768px) {
    width: 4rem;
    height: 4rem;
  }
`;

const UserInfoLeft = styled.div`
  width: 300px;
  padding: 17px 33px 0px 57px;
  border-right: 1px solid #72d49b;

  p {
    color: #000;
    font-family: "Gmarket Sans TTF Thin";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }

  span {
    color: #000;
    text-align: center;
    font-family: "Gmarket Sans TTF";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px 20px;
    border-right: none;
    border-bottom: 1px solid #72d49b;
  }
`;

const UserInfoRight = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 2rem;
  color: #949494;
  font-family: "Gmarket Sans TTF Thin";
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-align: left;

  #userinfostroke {
    width: 9.9375rem;
    height: 0.06rem;
    background-color: #72d49b;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    padding-left: 0;
    align-items: center;
    text-align: center;
  }
`;

const StyledButton = styled.button`
  width: 8.875rem;
  height: 2.0625rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: linear-gradient(90deg, #72d49b 0%, #2cc1bf 100%);
  color: #fff;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  margin-left: 0.4rem;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 7rem;
    height: 2rem;
  }
`;

const StyledImg1 = styled(ServiceImg1)`
  background-color: #b2f909;
  width: 50px;
  height: 50px;
  padding: 10px;
  border-radius: 50%;
`;

const StyledImg2 = styled(ServiceImg2)`
  background-color: #72d49b;
  width: 50px;
  height: 50px;
  padding: 10px;
  border-radius: 50%;
`;

const StyledImg3 = styled(ServiceImg3)`
  background-color: #2cc1bf;
  width: 50px;
  height: 50px;
  padding: 10px;
  border-radius: 50%;
`;