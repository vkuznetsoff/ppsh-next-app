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
 initDataQueryId as  _initDataQueryId,
 useLaunchParams,
 useRawLaunchParams
 
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
  const [err, setErr] = useState<String>("")
  const [isRegister, setIsRegister] = useState<boolean>(false)

  const t = useTranslations("i18n");
  const style = {
    backgroundColor: "red",
  };
  const baseUrl = "https://91.201.53.38/api/v1/";

  const initDataRaw = useSignal(_initDataRaw);
  const initDataState = useSignal(_initDataState);
    const initDataQueryId = useSignal(_initDataQueryId);
    const params = useRawLaunchParams()
  console.log('initDataRaw ', initDataRaw)
  console.log('initDataState ', initDataState)
  console.log('initDataQueryId ', initDataQueryId)
  console.log('useRawLaunchParams ', params)


  const register = async ():Promise<void> => {
    // const url = baseUrl + `auth/telegram/register`;
    const url = "https://ppsh-club.ru/api/v1/auth/telegram/register"
    
    // try {
    //   const response = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     initData: initDataRaw
    //   })
    // })
    
    //  if (!response.ok) {
    //   setErr("newError!!!")
    // }

    //  const data: RegisterResponse = await response.json();
    //  setIsRegister(true)

    // } catch (error)  {
     
    //   setErr(error as string); // Если ошибка неизвестна, установим дефолтное сообщение
    // }
    fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ initData: initDataRaw }),
  })
    .then((response) => {
      if (!response.ok) {
        console.log("response.ok = ", response.ok)
      }
      // Возвращаем промис с типизированным JSON
      return response.json() as Promise<RegisterResponse>;
    })
    .then((data) => {
      setIsRegister(true);
      console.log("Token:", data.token);
      console.log("User:", data.user);
    })
    .catch((error: any) => {
     console.log('ERR - ', error)
    });
};
    



  return (
    <Page back={true}>
      <div style={style}>КЛУБ ПЕРЕПРОШИТЫХ 2.0!</div>
      <Profile initData={initDataState} register={register} />
      <div>{initDataRaw}</div>
      {isRegister && <div>Успех!</div>}
      {err && <div>{err}</div>}
      <Link href="/init-data">
        <Cell subtitle="User data, chat information, technical data">
          Init Data
        </Cell>
      </Link>
    </Page>
  );
}
