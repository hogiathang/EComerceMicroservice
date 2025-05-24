import { toast, ToastPosition } from 'react-toastify';

export const ShowToast = (message: string, toastType: string, ttl: number = 5000, toastPosition: ToastPosition = "top-right") => {
    if (toastType == "SUCCESS") {
        toast.success(message, {
            position: toastPosition,
            autoClose: ttl,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return
    }

    if (toastType == "ERROR") {
        toast.error(message, {
            position: toastPosition,
            autoClose: ttl,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
}