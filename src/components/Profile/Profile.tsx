import Image from "next/image";
import styles from "./profile.module.scss";
import { InitData } from "@telegram-apps/sdk-react";
import { Button } from "@telegram-apps/telegram-ui";

interface ProfileProps {
  initData: InitData | undefined;
  register: Function 
}
const Profile = ({ initData, register }: ProfileProps) => {
    

    // const handleButton = () =>  {
    //    register()
    // }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h2>ПРОФИЛЬ</h2>
        <Image
        className={styles.photo}
          src={initData?.user?.photo_url ?? "/img/profile.jpeg"}
          width={100}
          height={100}
          alt="profile"
        />
        <div>{initData?.user?.username}</div>
        <Button onClick={() => register()}>Зарегистрироваться</Button>
      </div>
    </div>
  );
};

export default Profile;
