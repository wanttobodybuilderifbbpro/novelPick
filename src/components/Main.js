import React from "react";
//css-in-js
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import MainImage from "../assets/images/candidate2.png";
import { useNavigate } from "react-router-dom";
import "../pages/home/App.css";
import Wrapper from "../common/Wrapper";
// import Footer from "../common/Footer";
const Main = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    // useHistroy
    navigate("/question");
  };
  return (
    <>
      <Wrapper>
        <Contents>
          <Title>Novel-Pic</Title>
          <SubTitle>웹소설 추천 서비스</SubTitle>
          <LogoImage>
            <img
              className="col-lg-10 col-md-8 mx-3 col-sm-8 col-8"
              src={MainImage}
              alt="..."
            />
          </LogoImage>
          <Button
            className="start-btn"
            variant="dark"
            style={{
              width: "250px",
              height: "70px",
              marginTop: "20px",
              borderRadius: "20px",
              fontSize: "20px",
              fontFamily: "Pretendard-Regular",
            }}
            onClick={handleClickButton}
          >
            시작!
          </Button>
        </Contents>
        {/* <Footer />  */}
      </Wrapper>
    </>
  );
};

export default Main;

// const Wrapper = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 448px;
  height: 100vh;
  background-image: linear-gradient(to bottom, #fff27b, #e1e8ea);
`;

const Title = styled.div`
  font-size: 28pt;
  font-weight: bold;
  margin-top: 40px;
  font-family: "MICEGothic Bold";
  color: black;
`;

const SubTitle = styled.div`
  font-size: 20pt;
  margin-top: 25px;
  font-family: "Pretendard-Regular";
  color: black;
`;

const LogoImage = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;
