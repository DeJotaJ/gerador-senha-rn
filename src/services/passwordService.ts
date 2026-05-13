export default function generatePass(){
    let password:string = ''
    let characters:string='@@@$$$###!!!&&123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let passwordLength = 16

    for (let index = 0; index < passwordLength; index++) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )
        
    }

    return password

}