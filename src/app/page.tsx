"use client";

import { useTranslations } from "next-intl";
import { Page } from "@/components/Page";
import Profile from "@/components/Profile/Profile";
import Link from "next/link";
import { Cell } from "@telegram-apps/telegram-ui";
import {
  initDataRaw as _initDataRaw,
  initDataState as _initDataState,
  useSignal,
} from "@telegram-apps/sdk-react";
import { ErrorInfo, useState } from "react";
import Error from "next/error";

interface User {
  telegram_id: string;
  first_name: string;
  last_name: string;
  updated_at: string;
  created_at: string;
  id: number;
}

interface RegisterResponse {
  token: string;
  user: User;
}

export default function Home() {
  const [err, setErr] = useState<String | unknown>("")
  const [isRegister, setIsRegister] = useState<boolean>(false)

  const t = useTranslations("i18n");
  const style = {
    backgroundColor: "red",
  };
  const baseUrl = "https://91.201.53.38/api/v1/";

  const initDataRaw = useSignal(_initDataRaw);
  const initDataState = useSignal(_initDataState);

  const register = async ():Promise<void> => {
    const url = baseUrl + `auth/telegram/register?initData=${(initDataRaw)}`;
    
    try {
      const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
    
     if (!response.ok) {
      setErr("newError!!!")
    }

     const data: RegisterResponse = await response.json();
     setIsRegister(true)

    } catch (error: unknown)  {
     
      setErr(error); // Если ошибка неизвестна, установим дефолтное сообщение
    }
    
  }


  return (
    <Page back={true}>
      <div style={style}>КЛУБ ПЕРЕПРОШИТЫХ 2.0!</div>
      <Profile initData={initDataState} register={register} />
      <div>{initDataRaw}</div>
      {isRegister && <div>Успех!</div>}
      <Link href="/init-data">
        <Cell subtitle="User data, chat information, technical data">
          Init Data
        </Cell>
      </Link>
    </Page>
  );
}
