import { createRoot } from "react-dom/client";
import { useForm } from "react-hook-form";

interface Fields { name: string }

function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm<Fields>();
  return (
    <form onSubmit={(e) => void handleSubmit((d) => { alert(`Hello ${d.name}`); })(e)}>
      <input placeholder="name" {...register("name", { required: "Name is required" })} />
      {errors.name && <span>{errors.name.message}</span>}
      <button type="submit">Submit</button>
    </form>
  );
}

createRoot(document.getElementById("root")!).render(<><h1>Hello, React Hook Form</h1><Form /></>);
