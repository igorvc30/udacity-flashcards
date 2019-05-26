import { Toast } from "native-base";

const showToast = (message, type, duration = 4000) => {
  Toast.show({
    text: message,
    duration,
    position: "bottom",
    type,
    textStyle: { textAlign: "center" },
    buttonText: "Ok"
  });
};

export default showToast;
