export const findById = (arr, id) =>{
    let findResult = arr.find(e => e.id === id)
    findResult = findResult || {}
    
    return findResult
} 