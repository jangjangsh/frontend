import "../CreateMoim/CreateMoimForm.css";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000"; // 기본값 설정

const SelectButton = ({ selectedMoim }) => {
  const navigate = useNavigate();
  console.log("🔍 SelectButton에서 받은 selectedMoim:", selectedMoim); // ✅ 데이터 확인용 로그 추가

  const handleSubmit = async () => {
    if (!selectedMoim) {
      alert("모임을 선택해주세요!");
      return;
    }

    console.log(
      "📤 서버로 보낼 데이터:",
      JSON.stringify(selectedMoim, null, 2)
    );

    fetch(`${API_URL}/confirm-schedule`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(selectedMoim),
    })
      .then((response) => response.json())
      .then((serverData) => {
        console.log(
          "✅ 서버 응답 데이터:",
          JSON.stringify(serverData, null, 2)
        );
        navigate("/main"); // ✅ 성공하면 다음 페이지로 이동
      })
      .catch((error) => console.error("🚨 서버 연결 실패:", error));
  };

  return (
    <div className="center">
      <button className="submit-button" onClick={handleSubmit}>
        <span className="center">확인</span>
      </button>
    </div>
  );
};

export default SelectButton;
