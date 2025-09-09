export default function geneatePass(){
    let password: string = ''
    let charcaters: string = 'Aa@$#123456789abcdefghijFGHIJKLMNOP!'
    let passwordLenght = 8
    
    for(let index =0; index < passwordLenght; index++){
        password += charcaters.charAt(
            Math.floor(Math.random() * charcaters.length)
        )
    }

    return password
}