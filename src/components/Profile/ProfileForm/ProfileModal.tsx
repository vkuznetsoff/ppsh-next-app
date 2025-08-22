import { Button, Modal, Placeholder } from "@telegram-apps/telegram-ui";
import { ModalHeader } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";

const ProfileModal = () => {
  return (
    <Modal
      header={<ModalHeader>Only iOS header</ModalHeader>}
      trigger={<Button mode="gray" size="l">
      Редактировать
    </Button>}
    >
      <Placeholder description="Description" header="Title" />
    </Modal>
  );
};

export default ProfileModal
