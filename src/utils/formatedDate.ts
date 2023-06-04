export function formatedDate(dateString: any) {
    const date = new Date(dateString);

    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = date.toLocaleString('en-US', { day: 'numeric' });

    console.log(month); // Output: "May"
    console.log(day); // Output: "27"

    return { month, day } 
}