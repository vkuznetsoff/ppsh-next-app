import Image from "next/image";
import styles from "./profile.module.scss";
import { InitData } from "@telegram-apps/sdk-react";
import { Button } from "@telegram-apps/telegram-ui";
import { IUser } from "@/app/page";
import Info from "./Info/Info";

interface ProfileProps {
  initData: InitData | undefined;
  register: Function;
  user: IUser | null;
}
const Profile = ({ initData, register, user }: ProfileProps) => {
  // const handleButton = () =>  {
  //    register()
  // }
  if (true) {
    return (
      <div className={styles.page}>
        <Info user={user} avatar={user?.photo_url} initData={initData}/>
        {/* <div className={styles.header}>
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
        </div> */}
      </div>
    );
  } else {
    <div>Loading...</div>
  }
};

export default Profile;
