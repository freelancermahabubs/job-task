import toast from "react-hot-toast";
let EmailRegx = /\S+@\S+\.\S+/;

class FormHelper {
  IsEmpty(value) {
    return value.length === 0;
  }
  IsEmail(value) {
    return !EmailRegx.test(value);
  }
  SetEmail(value) {
    sessionStorage.setItem("email", value);
  }
  GetEmail() {
    return sessionStorage.getItem("email");
  }

  ErrorToast(msg) {
    toast.error(msg);
  }
  SuccessToast(msg) {
    toast.success(msg);
  }
}
export const {
  IsEmpty,
  SetEmail,
  GetEmail,
  IsMobile,
  IsEmail,
  ErrorToast,
  SuccessToast,
  SetOTP,
  GetOTP,
} = new FormHelper();
