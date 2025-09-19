import { toast as showToast } from "react-toastify";

const toast = {
    info: (message) => showToast(message, { type: 'info' }),
    success: (message) => showToast(message, { type: 'success' }),
    warning: (message) => showToast(message, { type: 'warning' }),
    error: (message) => showToast(message, { type: 'error' }),
}


export default toast;
