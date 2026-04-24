"use client";

import { useState } from "react";
import Modal from "../../component/modal/modal";

export default function EditBtn({ id }: { id: number }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="badge badge-warning cursor-pointer hover:scale-115 text-xs font-semibold"
      >
        edit
      </button>

      <Modal
        open={isOpen}
        close={() => {
          setIsOpen(false);
        }}
      >
        test
      </Modal>
    </>
  );
}
