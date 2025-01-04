"use client";

import { Login } from "@/app/ui/login";
import { Modal } from "@/app/ui/modal";
import React from "react";

export default function page() {
  return (
    <Modal>
      <Login>login modal</Login>
    </Modal>
  );
}
