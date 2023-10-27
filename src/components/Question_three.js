import { Link } from "react-router-dom";

function QuestionThree() {
  // 이곳에 기능적인 부분들이 있으면 넣어준다

  //이곳에서는 화면에 표시할 부분을 JSX 문법을 이용하여 넣어준다
  return (
    <div>
      <button
        style={{
          width: "300px",
          minHeight: "80px",
          fontSize: "15pt",
          marginTop: "20px",
          background: "#34AB64",
          border: "0px",
        }}
      >
        3. (남성) 주인공을 좋아하는 여자 캐릭터의 수는 ...
      </button>
      <br></br>
      <button
        style={{
          width: "300px",
          minHeight: "80px",
          fontSize: "15pt",
          marginTop: "20px",
          background: "#34AB64",
          border: "0px",
        }}
      >
        a. 없는 편이 좋다.
      </button>
      <br></br>
      <button
        style={{
          width: "300px",
          minHeight: "80px",
          fontSize: "15pt",
          marginTop: "20px",
          background: "#34AB64",
          border: "0px",
        }}
      >
        b. 1명
      </button>
      <br></br>
      <button
        style={{
          width: "300px",
          minHeight: "80px",
          fontSize: "15pt",
          marginTop: "20px",
          background: "#34AB64",
          border: "0px",
        }}
      >
        c. 2명
      </button>
      <br></br>
      <button
        style={{
          width: "300px",
          minHeight: "80px",
          fontSize: "15pt",
          marginTop: "20px",
          background: "#34AB64",
          border: "0px",
        }}
      >
        d. 많을수록 좋다.
      </button>
      <br></br>
      <button>
        <Link to="/questionTwo">이전</Link>
      </button>
      <button>
        <Link to="/">처음으로</Link>
      </button>
      <button>
        <Link to="/questionFour">다음</Link>
      </button>
    </div>
  );
}

export default QuestionThree;
