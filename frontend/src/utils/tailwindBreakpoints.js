// Add prefix sm to each tailwind style in the string for responsive design 
function sm(styleString) {
    let list = styleString.split(' ').map((twStyle) => `md:${twStyle}`)
    
    let new_string = list.join(' ')
    
    return new_string;
}

export default sm;