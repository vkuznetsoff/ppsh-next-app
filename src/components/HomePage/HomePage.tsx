// pages/index.tsx
import { backButton, BackgroundColor, PopupButton, closeMiniApp } from "@telegram-apps/sdk-react";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [initData, setInitData] = useState("");

  useEffect(() => {
    
  console.log('backButton', backButton);
  //backButton.hide()
//    console.log('BackgroundColor', BackgroundColor);
//     console.log('PopupButton', PopupButton.);


    return () => {
    
    };
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Привет из Mini App!</h1>
      <p>Init data: {initData}</p>

      <button
        style={{
          marginTop: 20,
          padding: "10px 20px",
          backgroundColor: "#e74c3c",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
        }}
        onClick={() => {
          closeMiniApp
        }}
      >
        🚪 Выйти из приложения
      </button>
    </div>
  );
};

export default HomePage;
