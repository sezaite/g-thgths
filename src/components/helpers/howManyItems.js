function howManyItems(componentWidth) {

    let count = Math.floor(window.innerWidth / componentWidth) > 4 ? 4 : Math.floor(window.innerWidth / componentWidth);

    return count !== 0 ? count : 1;

}

export default howManyItems
