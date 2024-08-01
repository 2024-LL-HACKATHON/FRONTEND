import React from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface FormData {
  title: string;
  content: string;
  image: string; // 이미지 URL을 저장할 string 타입
}

function CompetitionParticipation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue, // 폼 값을 프로그래밍 방식으로 업데이트하기 위해 사용
  } = useForm<FormData>();
  const [error, setError] = React.useState<string | null>(null);
  const [token, setToken] = React.useState<string | null>(
    localStorage.getItem("token")
  );
  const navigate = useNavigate();

  // 파일 변경 및 업로드 처리
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, files } = e.target;

    if (type === "file" && files) {
      const file = files[0];
      try {
        const fileData = new FormData();
        fileData.append("file", file);

        // 파일 업로드
        const uploadResponse = await axios.post("/api/files/upload", fileData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        // 응답 처리
        const fileUrl = uploadResponse.data; // 서버에서 반환한 이미지 URL
        setValue("image", fileUrl); // 이미지 URL을 폼 값에 설정
      } catch (error) {
        console.error("파일 업로드 에러", error);
        setError("파일 업로드 중 오류가 발생했습니다.");
      }
    }
  };

  // 폼 제출 처리
  const onSubmit = async (data: FormData) => {
    try {
      // FormData 객체 생성
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("content", data.content);
      formData.append("image", data.image); // 이미지 URL 추가

      // 폼 제출
      const response = await axios.post(
        "/api/v1/competition/createCompetition",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "X-AUTH-TOKEN": token || "",
          },
        }
      );

      console.log(response.data);
    } catch (error: unknown) {
      console.error(error);

      if (axios.isAxiosError(error)) {
        if (error.response) {
          if (error.response.status === 401) {
            setError(
              "토큰이 만료되었거나 유효하지 않습니다. 로그인 페이지로 이동합니다."
            );
            localStorage.removeItem("token");
            setToken(null);
            navigate("/login");
          } else {
            setError("경진대회 등록 중 오류가 발생했습니다.");
          }
        } else if (error.request) {
          setError("서버에 요청을 보냈지만 응답이 없습니다.");
        } else {
          setError(`오류 발생: ${error.message}`);
        }
      } else {
        setError("알 수 없는 오류가 발생했습니다.");
      }
    }
  };

  React.useEffect(() => {
    if (!token) {
      navigate("/login", { state: { from: window.location.pathname } });
    }
  }, [token, navigate]);

  return (
    <>
      <Header isLoggedIn={!!token} fixed={false} />
      <ParticipationTitle>
        <h1>경진대회 참가 등록</h1>
        <p>경진대회 참가 정보를 입력해주세요</p>
      </ParticipationTitle>
      <ParticipateForm onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">제목</label>
        <input
          id="title"
          type="text"
          {...register("title", { required: "제목을 입력해주세요" })}
        />
        {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
        <label htmlFor="content">내용</label>
        <textarea
          id="content"
          {...register("content", { required: "내용을 입력해주세요" })}
        />
        {errors.content && (
          <ErrorMessage>{errors.content.message}</ErrorMessage>
        )}
        <label htmlFor="image">이미지</label>
        <input
          id="image"
          type="file"
          accept="image/*"
          onChange={handleChange}
        />
        <SubmitButton type="submit">등록하기</SubmitButton>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </ParticipateForm>
    </>
  );
}

export default CompetitionParticipation;

const ParticipationTitle = styled.div`
  width: 80rem;
  margin: 0 auto;
  h1 {
    color: #000;
    text-align: center;
    font-family: "Gmarket Sans TTF";
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 500;
    margin-top: 6.25rem;
  }
  p {
    color: #626260;
    text-align: center;
    font-family: "Gmarket Sans TTF";
    font-size: 0.875rem;
    font-weight: 500;
    margin-top: 2.25rem;
  }
`;

const ParticipateForm = styled.form`
  width: 69.1875rem;
  height: 66.1875rem;
  border-radius: 1rem;
  border: 2px solid #72d49b;
  background: #fff;
  box-shadow: 4px 3px 10px 1px #ececec;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
  margin-left: 5.63rem;
  margin-top: 5.69rem;

  label {
    width: 8.88rem;
    height: 3rem;
    border-radius: 1rem;
    border: 2px solid #72d49b;
    background: #fff;
    color: #000;
    text-align: center;
    font-family: "Gmarket Sans TTF";
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #title {
    width: 50.5rem;
    height: 3rem;
    border-radius: 1rem;
    border: none;
    background: rgba(114, 212, 155, 0.1);
  }
  #content {
    width: 61.125rem;
    height: 23.75rem;
    border-radius: 1rem;
    border: none;
    background: rgba(114, 212, 155, 0.1);
    resize: none;
  }
  #image {
    margin-top: 1rem;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
`;

const SubmitButton = styled.button`
  width: 8.875rem;
  height: 3.625rem;
  border-radius: 1rem;
  background: #72d49b;
  color: #fff;
  font-family: "Gmarket Sans TTF";
  font-size: 1.25rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  margin-top: 2rem;
`;
