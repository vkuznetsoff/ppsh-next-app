
import {
  backButton,
  closeMiniApp,
  viewport,
  useSignal
} from "@telegram-apps/sdk-react";
import { Cell } from "@telegram-apps/telegram-ui";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TG } from "./var";


const HomePage = () => {
  
    const [initData, setInitData] = useState("");
  
 
   
  
  
  useEffect(() => {
    const initData = TG.initData


    console.log("initData", initData);
  
     
    if (backButton.isSupported()) {
      console.log();
      backButton.hide();
    }

     

    return () => {};
  }, []);

  return (
    <div style={{ padding: 20, backgroundColor: 'red', height: '100%' }}>
      <h1>Привет из Mini App!</h1>
      <p>Init data: {initData}</p>

      <Link href="/init-data">
        <Cell subtitle="User data, chat information, technical data">
          Init Data
          {initData}
          user
          
        </Cell>
      </Link>

             {/* <Link href="/launch-params">
             <Cell subtitle="Platform identifier, Mini Apps version, etc.">
         
             </Cell>
           </Link> */}

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
