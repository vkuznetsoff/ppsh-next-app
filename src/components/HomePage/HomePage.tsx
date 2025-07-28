// pages/index.tsx
import { useEffect, useState } from "react";

const HomePage = () => {
  const [initData, setInitData] = useState("");

  useEffect(() => {
    const tg = window.Telegram?.WebApp;

    if (!tg) {
      console.warn("Telegram WebApp API не найден.");
      return;
    }

    tg.ready();
    tg.expand();
    tg.setBackgroundColor("#f5f5f5");
    tg.setHeaderColor("secondary_bg_color");

    setInitData(tg.initData || "нет данных");

    tg.MainButton.setText("Закрыть");
    tg.MainButton.show();
    tg.MainButton.onClick(() => {
      tg.close();
    });

    return () => {
      tg.MainButton.offClick();
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
          window.Telegram?.WebApp?.close();
        }}
      >
        🚪 Выйти из приложения
      </button>
    </div>
  );
};

export default HomePage;
