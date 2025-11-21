export const validate = (email, password) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    if(!isEmailValid) return "Please Enter Valid Email"
    if(!isPasswordValid) return "Please Enter Valid Password"
    return { isEmailValid, isPasswordValid };
}