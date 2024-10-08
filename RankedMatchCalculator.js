let rank

function calculatingRank(wins , defeats){
    let result = (wins - defeats)
    return result
}

let balance = calculatingRank(85 , 17)
console.log(`Your Balance is:: ${balance}`)

    if(balance<10){
        rank = "Iron"
    }else if(balance>10&&balance<=20){
        rank = "Bronze"
    }else if(balance>20&&balance<=50){
        rank = "Silver"
    }else if(balance>50&&balance<=80){
        rank = "Gold"
    }else if(balance>80&&balance<=90){
        rank = "Diamond"
    }else if(balance>90&&balance<=100){
        rank = "Legendary"
    }else{
        rank = "Immortal"
    }

console.log(`The Hero has a balance of ${balance} and is at level ${rank}!`)