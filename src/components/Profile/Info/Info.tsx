import {
  Avatar,
  Blockquote,
  Button,
  Section,
  Text,
} from "@telegram-apps/telegram-ui";
import styles from "./info.module.scss";
import { IUser } from "@/app/page";

interface IInfoProps {
  user: IUser | null;
  avatar?: string;
}
const Info = ({ user, avatar }: IInfoProps) => {
  return (
    <Section className={styles.section}>
      <Avatar
        className={styles.avatar}
        size={96}
        src={
          avatar
            ? avatar
            : "https://avatars.githubusercontent.com/u/84640980?v=4"
        }
      />
      <Text weight="2">{user?.telegram_id ? user.telegram_id : "User"}</Text>
      <Text>Город</Text>
      <Button mode="outline" size="s">
        Организатор перепрошивок
      </Button>
      <Blockquote>Some text</Blockquote>
      <div className={styles.infoControls}>
        <Button mode="gray" size="l">
          Редактировать
        </Button>
        <Button disabled mode="gray" size="l">Поделиться</Button>
      </div>
    </Section>
  );
};

export default Info;
