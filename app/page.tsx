import Image from "next/image";
import LoginForm from "./component/login/loginForm";

export default function LoginPage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="shadow-md rounded-sm space-y-2 px-8 py-4 outline">
        <LoginForm />
      </div>
    </div>
  );
}
