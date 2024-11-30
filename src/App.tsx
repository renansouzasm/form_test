import { Button } from "./components/Button";
import { Input } from "./components/Input";

import { useState } from "react";

export function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    cpf: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (id: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Success!");

    setFormData({
      fullName: "",
      email: "",
      cpf: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <form
      className="max-w-80 w-4/5 min-h-80 absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]"
      method="POST"
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl text-center font-bold mb-8">
        Create Your Account
      </h1>

      <div className="w-full">
        <Input
          type="text"
          id="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleInputChange}
        />
        <Input
          type="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          id="cpf"
          placeholder="CPF"
          value={formData.cpf}
          onChange={handleInputChange}
          pattern="^\d{3}\.\d{3}\.\d{3}-\d{2}$"
          title="The CPF must be in the format 000.000.000-00."
        />
        <Input
          type="password"
          id="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          minLength={6}
          title="The password must be at least 6 characters long."
        />
        <Input
          type="password"
          id="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          pattern={formData.password}
          title="Passwords must be the same."
        />
      </div>

      <Button />
    </form>
  );
}
