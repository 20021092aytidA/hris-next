import React from "react";
import CreateBtn from "./buttons/createBtn";
import DeleteBtn from "./buttons/deleteBtn";
import EditBtn from "./buttons/editBtn";

export default async function ViewAdminPage() {
  type AdminType = {
    id: number;
    fullName: string;
    username: string;
    isSuperAdmin: string;
  };
  let listAdmins: AdminType[] = [];

  try {
    const admins = await fetch("http://localhost:8080/hris-api/v1/admins");
    if (admins.status === 200) {
      const jsonAdmins = await admins.json();
      listAdmins = jsonAdmins.data;
    }
  } catch (error) {}

  return (
    <div className="p-4">
      <div className="p-4 bg-gray-50 rounded-sm">
        <CreateBtn />
        <div className="bg-gray-800 mt-4 rounded-sm">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="text-white">
                <tr>
                  <th>#</th>
                  <th>Full name</th>
                  <th>Username</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {listAdmins.map((admin: AdminType, idx: number) => (
                  <tr key={idx}>
                    <td>{++idx}</td>
                    <td>{admin.fullName}</td>
                    <td>{admin.username}</td>
                    <td>
                      {admin.isSuperAdmin === "0" ? (
                        <div className="badge badge-warning text-xs">admin</div>
                      ) : (
                        <div className="badge badge-error text-xs">
                          super admin
                        </div>
                      )}
                    </td>
                    <td className="space-x-2">
                      <EditBtn id={admin.id} />
                      <DeleteBtn id={admin.id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
