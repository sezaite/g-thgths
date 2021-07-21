export const isValidMessage = input => {
    const emailRgx = new RegExp("^.{10,2000}$");
    return emailRgx.test(input);
}