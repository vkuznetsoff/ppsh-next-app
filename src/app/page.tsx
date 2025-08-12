"use client";

import { useTranslations } from "next-intl";
import { Page } from "@/components/Page";
import Profile from "@/components/Profile/Profile";
import Link from "next/link";
import { Cell } from "@telegram-apps/telegram-ui";
import { initDataRaw as _initDataRaw,  initDataState as _initDataState, useSignal } from "@telegram-apps/sdk-react";

export default function Home() {
  const t = useTranslations("i18n");
  const style = {
    backgroundColor: "red",
   
  };

  // const initDataRaw = useSignal(_initDataRaw);
  //   console.log('initData - ', initDataRaw)
    const initDataState = useSignal(_initDataState);
    console.log('initDataState!!! - ', initDataState)
    

  return (
    <Page back={true}>
      <div style={style}>КЛУБ ПЕРЕПРОШИТЫХ 2.0!</div>
      <Profile initData={initDataState}/>
      <Link href="/init-data">
        <Cell subtitle="User data, chat information, technical data">
          Init Data
         
          
        </Cell>
      </Link>
    </Page>
  );
}
