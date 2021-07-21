
export const messageCleaner = input => {

    return input.replaceAll(/<|>|&/g, '');
}