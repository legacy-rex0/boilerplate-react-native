import Toast from "react-native-toast-message";

export const errorMsg = (title, content, error, location) => {
    console.warn({error}, "LOCATION:: ", location ?? "");
    Toast.show({
        type: 'error',
        text1: `${title ?? ""}`,
        text2: `${content ?? ""}`
    });
};


export const successMsg = (title, content) => {
    Toast.show({
        type: 'success',
        text1: `${title ?? ""}`,
        text2: `${content ?? ""}`
    });
};
