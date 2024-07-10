"use client";

import { useRouter } from 'next/navigation'
import { FormEvent, SyntheticEvent, useState } from "react";

export default function Login() {
  const router = useRouter();
  const [formData, setformData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;

    setformData({
      ...formData,
      [target?.name]: target?.value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await fetch("http://localhost:3001/api/authentication/login", {
        method: "POST",
        body: JSON.stringify(formData),
        credentials: "include",
      });

      router.push("/cms");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <section>
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
}
