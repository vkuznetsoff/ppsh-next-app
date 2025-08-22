import {
  Avatar,
  Blockquote,
  Button,
  Modal,
  Placeholder,
  Section,
  Text,
} from "@telegram-apps/telegram-ui";
import styles from "./info.module.scss";
import { IUser } from "@/app/page";
import { InitData } from "@telegram-apps/sdk-react";
import { init } from "@/core/init";
import { ModalHeader } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";
import ProfileModal from "../ProfileForm/ProfileModal";

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
        {/* <Button mode="gray" size="l">
          Редактировать
        </Button> */}
        <ProfileModal />
        <Button disabled mode="gray" size="l">
          Поделиться
        </Button>
      </div>
    </Section>
  );
};

const EditButton = () => {
  return (
    <Button mode="gray" size="l">
      Редактировать
    </Button>
  );
};



export default Info;
