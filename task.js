function zadacha1() { 
    const n = 100;
     
    let sum = 0;
    let total = 0;
    for (let i = 0; i <= n; i += 5) {
      if (i % 7 !== 0) {
        sum += i;
        total++;
        
      } 
    }
    let result = `Sum ${sum} and count ${total}`
        return result
    }
    console.log(zadacha1())
    
    module.exports ={zadacha1}