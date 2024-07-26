export const findIndexById = (arr, id) =>{
    const findResult = arr.findIndex(obj => obj.id === id)
    
    return findResult
}