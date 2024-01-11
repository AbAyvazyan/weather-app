const formatedDate = (day:number) =>{
    let today = new Date();
    today.setDate(today.getDate() + day);
    const formattedDate = today.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
    });

    return formattedDate
}

export default formatedDate