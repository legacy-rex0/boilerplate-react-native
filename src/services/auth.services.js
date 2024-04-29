import { request } from "./api";

class AuthServices {

    register(payload){
        return request(
            "/auth/register", "POST",
            payload, undefined, false, false
        );
    }


    login(payload){
        return request(
            "/auth/login", "POST",
            payload, undefined, false, false
        )
    }

    verify(payload){
        return request(
            "/auth/verify", "POST",
            payload, undefined, false, false
        )
    }

    resendOTP(payload){
        return request(
            "/auth/resend", "POST",
            payload, true, false, false
        );
    }

    setPIN(payload){
        return request(
            "/auth/set-pin", "PATCH",
            payload, true, false, false
        )
    }

    forgotPassword(payload){
        return request(
            "/auth/forget-password", "POST",
            payload, undefined, false, false
        );
    }

    resetPassword(payload){
        return request(
            "/auth/reset", "POST",
            payload, true, false, false
        );
    }

    signWithPIN(payload){
        return request(
            "/auth/signin", "POST",
            payload, true, false, false
        );
    }

    resetPIN(payload){
        return request(
            "/auth/reset-pin", "POST",
            payload, true, false, false
        );
    }

    signout(payload){
        return request(
            "/auth/signout", "POST",
            payload, true, false, false
        );
    }


}

export default new AuthServices();
