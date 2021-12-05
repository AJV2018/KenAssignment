export const getReleaseDate = (date: string) => {
    const dateObj = new Date(date);
    return `${months[dateObj.getMonth()]} ${dateObj.getFullYear()}`
}

const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
]