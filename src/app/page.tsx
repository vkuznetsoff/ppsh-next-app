'use client';

import { Section, Cell, Image, List } from '@telegram-apps/telegram-ui';
import { useTranslations } from 'next-intl';

import { Link } from '@/components/Link/Link';
import { LocaleSwitcher } from '@/components/LocaleSwitcher/LocaleSwitcher';
import { Page } from '@/components/Page';
import {} from "@telegram-apps/sdk-react"
import HomePage from '@/components/HomePage/HomePage';


export default function Home() {
  const t = useTranslations('i18n');
  
  const style= {
    border: "1px solid white",
    height: "50%"
  }


  return (
  
    <div style={style}>
<Page back={false} >
     <HomePage />
      КЛУБ ПЕРЕПРОШИТЫХ 2.0

      
      {/* <List>
        <Section
          header="Application Launch Data"
          footer="These pages help developer to learn more about current launch information"
        >
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
          <Link href="/theme-params">
            <Cell subtitle="Telegram application palette information">
              Theme Parameters
            </Cell>
          </Link>
        </Section>
        <Section header={t('header')} footer={t('footer')}>
          <LocaleSwitcher />
        </Section>
      </List> */}
    </Page>
    </div>
    
  );
}
