function daysToNewYear() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const newYear = new Date(currentYear + 1, 0, 1); // 1 января следующего года
    const timeDiff = newYear - today;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysLeft;
}

console.log(`До нового года осталось ${daysToNewYear()} дней.`);