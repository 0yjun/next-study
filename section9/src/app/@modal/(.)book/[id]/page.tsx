"use server";

import Page from "@/app/book/[id]/page";
import Modal from "@/components/modal";

export default async function ModalPage(props: any) {
  return (
    <Modal>
      <Page {...props} />
    </Modal>
  );
}
