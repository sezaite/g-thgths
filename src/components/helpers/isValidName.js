export const isValidName = input => {
    const nameRegex = new RegExp("([\w ]+)");
    return nameRegex.test(input);
}