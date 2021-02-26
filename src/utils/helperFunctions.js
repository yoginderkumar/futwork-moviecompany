//Convert minutes into hours and minuts
export const convertMinutes = (totalMinutes) => {
    let hours = Math.floor(totalMinutes / 60);          
    let mins = totalMinutes % 60;
    return `${hours}h ${mins}min`;
};  