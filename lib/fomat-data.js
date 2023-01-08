
export const formatUnixTime = (unixTime) =>{
    let date = new Date(unixTime * 1000)
    let hours = date.getHours();
    let minutes = date.getMinutes()
    if(hours > 12){
        hours -= 12
        return `${hours}:${minutes}`
    }
    else{
        return `${hours}:${minutes}`
    }
}

export const formatNumbers =(temperature, otherNums) => {
    const millibarsPerHg = 33.6388
    let n = otherNums

    if (temperature) {
        return Math.round(temperature)
    }

    if (n){
       
        let count = 0
        if (n >= 1) ++count;

        while (n / 10 >= 1) {
            n /= 10;
            ++count;
        }

        if (count >= 5){
            
            return  Math.round(otherNums / 1000)
        }else{
            return Math.round(otherNums / millibarsPerHg)
        }
    }
}