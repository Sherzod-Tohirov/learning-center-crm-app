import { Toast } from '@welcome-ui/toast'

export function Toastify({ children, message, type = 'info' }) {
  return (
    <Toast.Growl variant={type}>
    <Toast.Title>
      {
        (() => {
            if(type === 'success') return "Muvaffaqiyatli!"
            if(type === 'error') return "Xatolik!"
            if(type === 'warning') return "Ogohlantirish!"
            if(type === 'info') return "Xabar!"
        })()
      }
    </Toast.Title>
    {message}
  </Toast.Growl>
  );
}
