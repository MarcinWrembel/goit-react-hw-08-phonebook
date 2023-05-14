import { toast } from 'react-toastify';

export const notifyErrorPass = () => {
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


export const notifyErrorMailCheck = () => {
  toast.error('Current email exist in database. Please enter other email!', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: 'light',
  });
};