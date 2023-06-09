export function formatedDate(dateString: any) {
    const date = new Date(dateString);

    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = date.toLocaleString('en-US', { day: 'numeric' });

    return { month, day } 
}