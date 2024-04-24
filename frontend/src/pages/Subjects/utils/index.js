import * as yup from "yup";

export const SubjectSchema = yup.object({
  subject_name: yup
    .string("Fan nomi matn ko'rinishida bo'lishi kerak !")
    .required("Fan nomi kiritish majburiy !"),
});

export function handleResponse(res, toasted, reset) {
  res
    .then((res) => {
      if (res?.error) {
        toasted("Uzr, xatolik yuz berdi !", "error");
        return;
      } else toasted("Yangi fan qo'shildi", "success");
    })
    .catch(() => toasted("Uzr, xatolik yuz berdi !", "error"))
    .finally(() => reset());
}

export function handleDeleteSubject(event, mutationCallback, id, toasted) {
  const deleteButton = event.target.closest(".action-btn");
  const initialValueOfTarget = deleteButton.innerHTML;
  deleteButton.disabled = true;
  mutationCallback(id)
    .then(({ data }) => {
      if (data.status === 200) {
        toasted("Fan o'chirildi !", "success");
      }
    })
    .catch((err) => {
      console.log(err);
      toasted("Uzr, qandaydir xatolik yuz berdi !", "error");
      deleteButton.innerHTML = initialValueOfTarget;
      deleteButton.disabled = false;
      setTimeout(() => toasted("Keyinroq urinib ko'ring !", "info"), 1000);
    });
  event.target.closest(".action-btn").innerHTML = "o'chirilmoqda...";
}
