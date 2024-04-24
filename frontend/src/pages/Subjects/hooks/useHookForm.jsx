import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubjectSchema } from "../utils";

export function useHookForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful, isSubmitted },
  } = useForm({
    resolver: yupResolver(SubjectSchema),
    mode: "all",
  });
  return {
    register,
    handleSubmit,
    errors,
    isValid,
    reset,
    isSubmitting,
    isSubmitSuccessful,
    isSubmitted
  };
}
