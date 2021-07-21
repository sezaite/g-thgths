export const isValidEmail = input => {
    const emailRgx = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    return emailRgx.test(input);
}