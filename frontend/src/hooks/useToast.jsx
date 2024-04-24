import { Toastify } from "../components/Toast";
import { toast } from "@welcome-ui/toast";
export function useToast() {
  function toasted(message, type, position = "top-right") {
    return toast(<Toastify message={message} type={type} />, {
      position,
    });
  }

  return { toasted };
}
