
import {
  backButton,
  closeMiniApp,
  useLaunchParams,
  useRawInitData,
  useRawLaunchParams
} from "@telegram-apps/sdk-react";
import { Cell } from "@telegram-apps/telegram-ui";
import Link from "next/link";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [initData, setInitData] = useState("");
 

  
  
  useEffect(() => {
    console.log("backButton", backButton);
     
    if (backButton.isSupported()) {
      console.log();
      backButton.hide();
    }

      

    return () => {};
  }, []);

  return (
    <div style={{ padding: 20, backgroundColor: 'red', height: '100%'}}>
      <h1>Привет из Mini App!</h1>
      <p>Init data: {initData}</p>

      <Link href="/init-data">
        <Cell subtitle="User data, chat information, technical data">
          Init Data
        </Cell>
      </Link>

             <Link href="/launch-params">
             <Cell subtitle="Platform identifier, Mini Apps version, etc.">
               Launch Parameters
             </Cell>
           </Link>

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
          closeMiniApp();
        }}
      >
        🚪 Выйти из приложения
      </button>
    </div>
  );
};

export default HomePage;
