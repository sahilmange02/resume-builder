import React from "react";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

const ResumeForm: React.FC<{ onUpdate: (data: FormData) => void }> = ({ onUpdate }) => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    onUpdate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
      <input {...register("name")} placeholder="Name" className="p-2 border w-full" />
      <input {...register("email")} placeholder="Email" className="p-2 border w-full" />
      <input {...register("phone")} placeholder="Phone" className="p-2 border w-full" />
      <button type="submit" className="bg-blue-500 text-white p-2">Update Resume</button>
    </form>
  );
};

export default ResumeForm;
