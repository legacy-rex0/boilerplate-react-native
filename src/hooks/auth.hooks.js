import authServices from "../services/auth.services";
import {errorMsg, successMsg} from "../utils/toast";


/**
 *
 * @param {*} payload
 * @return {Promise<* | boolean>}
 * @private
 */
export const _login = (payload) => {
    return authServices.login(payload)
        .then(res => {
            console.log({res})
            // successMsg("inin ");

            if((res?.success ?? false) || (!res?.errors ?? false)){
                successMsg("Login Successful");
                return res?.data;
            } else {
                // errorMsg(res.errors[0].msg ?? res.errors ?? res.message, undefined, res?.errors ?? "", ".login");
                return false;
            }
            // return res.data;
        })
        .catch(error => {
            errorMsg(error.message, undefined, error, ".login");
            return false;
        })
};


/**
 *
 * @param {code <string>} payload
 * @return {Promise<* | boolean>}
 * @private
 */
export const _register = (payload, navigation) => {
    return authServices.register(payload)
        .then(res => {
            console.log({res})
            if(!res.errors){
                successMsg("Registered Successfully");
                return res.data;
            } else {
                errorMsg(res.errors[0].msg ?? res.errors ?? res.message,undefined, res.errors, ".register");
                if((res.errors[0].msg ?? res.errors ?? res.message).includes("already exist")){
                    navigation.goBack();
                    navigation.goBack();
                }
                return false;
            }
        })
        .catch(error => {
            errorMsg(error.message, undefined, error, ".register");
            return false;
        })
};


/**
 *
 * @param {code <string>} payload
 * @return {Promise<* | boolean>}
 * @private
 */
export const _verify = (payload) => {
    return authServices.verify(payload)
        .then(res => {
            // console.log({res})
            if(!res.errors){
                successMsg("OTP Verified");
                return res.data;
            } else {
                errorMsg(res.errors[0].msg ?? res.errors ?? res.message,undefined, res.errors, ".verify");
                return false;
            }
        })
        .catch(error => {
            errorMsg(error.message, undefined, error, ".verify");
            return false;
        })
};


/**
 *
 * @param {*} payload
 * @return {Promise<* | boolean>}
 * @private
 */
export const _resendOTP = (payload) => {
    return authServices.resendOTP(payload)
        .then(res => {
            // console.log({res})
            if(!res.errors){
                successMsg("OTP Sent!");
                return res.data;
            } else {
                errorMsg(res.errors[0].msg ?? res.errors ?? res.message,undefined, res.errors, ".resendOTP");
                return false;
            }
        })
        .catch(error => {
            errorMsg(error.message,  undefined, error, ".resendOtp");
            return false;
        })
};


/**
 *
 * @param {*} payload
 * @return {Promise<* | boolean>}
 * @private
 */
export const _updatePIN = (payload) => {
    return authServices.setPIN(payload)
        .then(res => {
            console.log({res});
            if(!res.errors){
                successMsg("PIN Updated Successfully");
                return res.data;
            } else {
                errorMsg(res.errors[0].msg ?? res.errors ?? res.message,undefined, res.errors, ".updatePIN");
                return false;
            }
        })
        .catch(error => {
            errorMsg(error.message, undefined, error, ".updatePIN");
            return false;
        })
};


/**
 *
 * @param {*} payload
 * @return {Promise<* | boolean>}
 * @private
 */
export const _forgotPassword = (payload) => {
    return authServices.forgotPassword(payload)
        .then(res => {
            console.log({res})
            if(res.success === true){
                successMsg(`Please check mail, ${payload.email} `);
                return res.data;
            } else {
                errorMsg(res.errors[0].msg ?? res.errors ?? res.message ?? "An unexpected error occurred!",undefined, res.errors, ".forgotPassword");
                return false;
            }
        })
        .catch(error => {
            errorMsg(error.message, undefined, error, ".forgotPassword",);
            return false;
        })
};


/**
 *
 * @param {{code: string, email: string}} payload
 * @return {Promise<* | boolean>}
 * @private
 */
export const _resetPassword = (payload, navigation) => {
    return authServices.resetPassword(payload)
        .then(res => {
            // console.log({res})
            if(!res.errors){
                successMsg("Reset Password Successfully");
                return res.data;
            } else {
                errorMsg(res.errors[0].msg ?? res.errors ?? res.message ?? "An unexpected error occurred!",undefined, res.errors, ".resentPassword");
                return false;
            }
        })
        .catch(error => {
            errorMsg(error.message, undefined, error, ".resentPassword");
            return false;
        })
};


/**
 *
 * @param {*} payload
 * @return {Promise<* | boolean>}
 * @private
 */
export const _signinWithPIN = (payload, navigation) => {
    return authServices.signWithPIN(payload)
        .then(res => {
            console.log({res})
            if(res.success){
                successMsg("Signin Successful");
                return res.data;
            } else {
                if(
                    (res?.errors[0]?.msg ?? res?.errors ?? res?.message).toString().includes("Invalid token") ||
                    (res?.errors[0]?.msg ?? res?.errors ?? res?.message).toString().includes("Cannot convert undefined value")
                ){
                    navigation.replace("signin-screen");
                }
                errorMsg(res.errors[0].msg ?? res.errors ?? res.message,undefined, res.errors, ".signinWithPIN");
                return false;
            }
        })
        .catch(error => {
            if(error.message.includes("Cannot convert undefined value")){
                navigation.replace("signin-screen");
            };
            errorMsg(error.message, undefined, error, ".signinWithPIN" );
            return false;
        })
};


/**
 *
 * @param {*} payload
 * @return {Promise<* | boolean>}
 * @private
 */
export const _resetPIN = (payload) => {
    return authServices.resetPIN(payload)
        .then(res => {
            console.log({res})
            if(!res.errors){
                successMsg("PIN Reset Successful");
                return res.data;
            } else {
                console.log("messsage:: ", res.errors.msg);
                errorMsg(res.errors[0].msg ?? res.errors ?? res.message,undefined, res.errors, ".resentPIN");
                return false;
            }
        })
        .catch(error => {
            errorMsg(error.message, undefined, error,".resetPIN",);
            return false;
        })
};


/**
 *
 * @param {*} payload
 * @return {Promise<* | boolean>}
 * @private
 */
export const _signout = (payload) => {
    return authServices.signout(payload)
        .then(res => {
            // console.log({res})
            if(!res.errors){
                successMsg("User Signout Successfully");
                return res.data;
            } else {
                errorMsg(res.errors[0].msg ?? res.errors ?? res.message,undefined, res.errors, ".signout");
                return false;
            }
        })
        .catch(error => {
            errorMsg(error.message, undefined, error, ".signout");
            return false;
        })
};
