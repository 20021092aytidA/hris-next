"use client";

import { useRouter } from "next/navigation";

export default function LoginForm() {
  const route = useRouter();

  const handleLogin = () => {
    route.push("/dashboard");
  };

  return (
    <div className="space-y-2">
      <fieldset className="fieldset">
        <label htmlFor="username" className="fieldset-legend">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="input"
          placeholder="Input username"
        />
      </fieldset>
      <fieldset className="fieldset mb-4">
        <label htmlFor="password" className="fieldset-legend">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="input"
          placeholder="Input password"
        />
      </fieldset>
      <div className="flex justify-center">
        <button onClick={handleLogin} className="btn bg-white text-black">
          Login
        </button>
      </div>
    </div>
  );
}
