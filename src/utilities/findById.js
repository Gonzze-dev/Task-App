export const findById = (arr, id) =>{
    let findResult = arr.find(obj => obj.id === id)
    findResult = findResult || {}
    
    return findResult
} 