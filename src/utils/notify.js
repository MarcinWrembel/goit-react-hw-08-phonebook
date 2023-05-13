import { toast } from 'react-toastify';

export const notify = () => {
  toast.error('Both passwords have to be same!', {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: 'light',
  });
};
