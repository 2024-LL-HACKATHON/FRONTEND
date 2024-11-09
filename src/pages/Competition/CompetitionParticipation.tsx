import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CompetitionDetail from "../../components/CompetitionComponent/CompetitionDetail";
import ParticipationSwitchButtonComponent from "../../components/CompetitionComponent/ParticipationSwitchButtonComponent";
import Footer from "../../components/Footer/Footer";
import { ReactComponent as ParticipateImg } from "../../assets/images/ParticipateImg.svg";
import Modal from "../../components/Modal/Modal";
import apiClient from "../../api/clientapi";

interface FormData {
  title: string;
  content: string;
  image: string;
}

function CompetitionParticipation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();
  const [error, setError] = React.useState<string | null>(null);
  const [token, setToken] = React.useState<string | null>(
    localStorage.getItem("token")
  );
  const [preview, setPreview] = React.useState<string | null>(null);
  const [modalOpen, setModalOpen] = React.useState<boolean>(false); // State for modal visibility
  const navigate = useNavigate();
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files && files.length > 0) {
      const file = files[0];
      const fileUrl = URL.createObjectURL(file);
      setPreview(fileUrl);

      try {
        const fileData = new FormData();
        fileData.append("file", file);

        const uploadResponse = await apiClient.post(
          "/api/files/upload",
          fileData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        const uploadedFileUrl = uploadResponse.data;
        setValue("image", uploadedFileUrl);
      } catch (error) {
        console.error("파일 업로드 에러", error);
        setError("파일 업로드 중 오류가 발생했습니다.");
      }
    }
  };

  const handleParticipateClick = () => {
    navigate("/competitionparticipation");
  };

  const handleRecommendClick = () => {
    navigate("/competitionlist");
  };

  const endDate = "2024-08-15T23:59:00";

  const onSubmit = async (data: FormData) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("content", data.content);
      formData.append("image", data.image);

      const response = await apiClient.post(
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
      setModalOpen(true);
    } catch (error: unknown) {
      console.error(error);
      setError("등록 중 오류가 발생했습니다.");
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    navigate("/competitionlist");
  };

  React.useEffect(() => {
    if (!token) {
      navigate("/login", { state: { from: window.location.pathname } });
    }
  }, [token, navigate]);

  return (
    <ParticipateLayer>
      <Header isLoggedIn={!!token} fixed={false} />
      <ParticipationTitle>
        <h1>경진대회 참가 등록</h1>
        <p>경진대회 참가 정보를 입력해주세요</p>
      </ParticipationTitle>
      <CompetitionDetail endDate={endDate} />
      <ParticipationSwitchButtonComponent
        participateBackgroundColor="#72d49b"
        participateBorderColor="#72d49b"
        participateTextColor="#fff"
        recommendBackgroundColor="#fff"
        recommendBorderColor="#72d49b"
        recommendTextColor="#000"
        onParticipateClick={handleParticipateClick}
        onRecommendClick={handleRecommendClick}
      />
      <ParticipateForm onSubmit={handleSubmit(onSubmit)}>
        <div id="formdiv">
          <div id="titlebox">
            <div id="titleGroup">
              <label htmlFor="title">제목</label>
              <input
                id="title"
                type="text"
                {...register("title", { required: "제목을 입력해주세요" })}
              />
            </div>
            {errors.title && (
              <ErrorMessage>{errors.title.message}</ErrorMessage>
            )}
          </div>
          <div id="imageGroup">
            <div id="imgLabel">OUTPUT</div>
            <label id="imageLabel" htmlFor="image">
              {!preview && <ParticipateImg />}
              {preview && <PreviewImage src={preview} alt="미리보기" />}
            </label>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleChange}
              ref={fileInputRef}
              style={{ display: "none" }}
            />
          </div>
          <div id="contentGroup">
            <label htmlFor="content">프롬프트</label>
            <textarea
              id="content"
              {...register("content", { required: "내용을 입력해주세요" })}
            />

            {errors.content && (
              <ErrorMessage>{errors.content.message}</ErrorMessage>
            )}
          </div>
        </div>
        <ParticipateStroke />
        <SubmitButton type="submit">등록하기</SubmitButton>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </ParticipateForm>
      <Footer />
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        message="경진대회 등록이 완료되었습니다!"
        linkto="확인"
      />
    </ParticipateLayer>
  );
}

export default CompetitionParticipation;

const ParticipateLayer = styled.div`
  max-width: 100%;
`;

const ParticipateStroke = styled.div`
  width: 68.31263rem;
  height: 0.0625rem;
  background: #72d49b;
  margin-top: 4.06rem;
  margin-left: 5.88rem;
`;

const ParticipationTitle = styled.div`
  width: 80rem;
  margin: 0 auto;
  margin-bottom: 5rem;
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
  margin-bottom: 15.37rem;
  #formdiv {
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
    align-items: center;
  }

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
    cursor: pointer;
  }
  #imgLabel {
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
    cursor: pointer;
  }
  #titlebox {
    margin-bottom: 2.75rem;
  }

  #titleGroup {
    display: flex;
    align-items: center;
    gap: 1.43rem;
    margin-top: 1.81rem;
  }
  #imageGroup {
    margin-bottom: 1.31rem;
    display: flex;
    flex-direction: column;
  }
  #contentGroup {
    margin-bottom: 1.31rem;
  }
  #title {
    width: 50.5rem;
    height: 3rem;
    border-radius: 1rem;
    border: none;
    background: rgba(114, 212, 155, 0.1);
    padding: 1rem;
  }
  #content {
    width: 61.125rem;
    height: 23.75rem;
    border-radius: 1rem;
    border: none;
    background: rgba(114, 212, 155, 0.1);
    resize: none;
    margin-top: 1rem;
    padding: 1rem;
  }

  #imageLabel {
    width: 61.125rem;
    height: 17.625rem;
    flex-shrink: 0;
    border-radius: 1rem;
    border: none;
    background: rgba(114, 212, 155, 0.1);
    margin-top: 1rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 1rem;
`;

const ErrorMessage = styled.div`
  display: flex;
  text-align: left;
  color: red;
  font-size: 0.875rem;
  margin-top: 0.2rem;
  margin-left: 0.5rem;
`;

const SubmitButton = styled.button`
  width: 13.1875rem;
  height: 2.9375rem;
  border-radius: 0.625rem;
  background: #72d49b;
  color: #fff;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-left: 33.44rem;
`;
