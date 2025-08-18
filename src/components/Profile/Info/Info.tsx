import {
  Avatar,
  Blockquote,
  Button,
  Section,
  Text,
} from "@telegram-apps/telegram-ui";
import styles from "./info.module.scss";
import { IUser } from "@/app/page";
import { InitData } from "@telegram-apps/sdk-react";
import { init } from "@/core/init";

interface IInfoProps {
  user: IUser | null;
  avatar?: string;
  initData: InitData | undefined;
}
const Info = ({ initData }: IInfoProps) => {
  const userName = initData?.user?.username ? initData?.user?.username : "User";
  const avatar = initData?.user?.photo_url
    ? initData?.user?.photo_url
    : "https://avatars.githubusercontent.com/u/84640980?v=4";

  return (
    <Section className={styles.section}>
      <Avatar className={styles.avatar} size={96} src={avatar} />
      <Text weight="2">{userName}</Text>
      <Text>Город</Text>
      <Button mode="outline" size="s">
        Организатор перепрошивок
      </Button>
      <Blockquote>Some text</Blockquote>
      <div className={styles.infoControls}>
        <Button mode="gray" size="l">
          Редактировать
        </Button>
        <Button disabled mode="gray" size="l">
          Поделиться
        </Button>
      </div>
    </Section>
  );
};

export default Info;
