import { Button, Modal, Placeholder } from "@telegram-apps/telegram-ui";
import { ModalHeader } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";
import ProfileEdit from "./ProfileEdit";

const ProfileModal = () => {
  return (
    <Modal
      header={<ModalHeader>Only iOS header</ModalHeader>}
      trigger={<Button mode="gray" size="l">
      Редактировать
    </Button>}
    >

      <ProfileEdit />
    </Modal>
  );
};

export default ProfileModal
