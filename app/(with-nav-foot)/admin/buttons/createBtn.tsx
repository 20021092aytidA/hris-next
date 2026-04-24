"use client";

import { useEffect, useState } from "react";
import Modal from "../../component/modal/modal";

export default function CreateBtn() {
  type AdminCreate = {
    fullName: string;
    username: string;
    password: string;
    isSuperAdmin: string;
  };

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [createForm, setCreateForm] = useState<AdminCreate>({
    fullName: "",
    username: "",
    password: "",
    isSuperAdmin: "",
  });

  useEffect(() => {
    setCreateForm({
      fullName: "",
      username: "",
      password: "",
      isSuperAdmin: "",
    });
  }, [isOpen]);

  const handleCreate = async () => {
    const formPost = new FormData();
    Object.entries(createForm).map(([key, value]) => {
      formPost.append(key, value);
    });

    try {
      const res = await fetch("http://localhost:8080/hris-api/v1/admins", {
        method: "POST",
        body: formPost,
      });

      if (res.ok) {
        alert("Created admin!");
      } else {
        alert("Fail admin creation!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="btn"
      >
        Add Admin
      </button>

      <Modal
        open={isOpen}
        close={() => {
          setIsOpen(false);
        }}
        className="flex justify-center items-center"
      >
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend font-semibold">Add Admin</legend>

          <label className="label">Full name</label>
          <input
            type="text"
            className="input"
            placeholder="Full name"
            value={createForm.fullName}
            onChange={(e) => {
              setCreateForm((prev) => ({ ...prev, fullName: e.target.value }));
            }}
          />

          <label className="label">Username</label>
          <input
            type="text"
            className="input"
            placeholder="Username"
            value={createForm.username}
            onChange={(e) => {
              setCreateForm((prev) => ({ ...prev, username: e.target.value }));
            }}
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            value={createForm.password}
            onChange={(e) => {
              setCreateForm((prev) => ({ ...prev, password: e.target.value }));
            }}
          />

          <label className="label">Role</label>
          <select
            value={createForm.isSuperAdmin}
            className="select"
            onChange={(e) => {
              setCreateForm((prev) => ({
                ...prev,
                isSuperAdmin: e.target.value,
              }));
            }}
          >
            <option disabled={true} value="">
              Pick a role
            </option>
            <option value="0">Admin</option>
            <option value="1">Super Admin</option>
          </select>

          <button
            className="btn bg-white text-black mt-4"
            onClick={() => {
              handleCreate();
              console.log(createForm);
            }}
          >
            Add
          </button>
        </fieldset>
      </Modal>
    </>
  );
}
