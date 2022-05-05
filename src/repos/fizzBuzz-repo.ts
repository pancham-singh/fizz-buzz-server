export const generateFizzBuzz = (count: number) => {
    let fizzBuzz = []
    for(let numberRange = 1; numberRange <= count; numberRange++){
        if(numberRange % 3 === 0 && numberRange % 5 === 0) {
            console.log('fizzBuzz');
            fizzBuzz.push('fizzBuzz');
        }else if(numberRange % 3 === 0){
            console.log('fizz');
            fizzBuzz.push('fizz');
        }else if(numberRange % 5 === 0){
            console.log('buzz')
            fizzBuzz.push('buzz');
        }
    }
    return fizzBuzz;
}