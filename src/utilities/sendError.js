export const sendError = (listErrors) => {
    for (const error of listErrors)
    {
      let condition = error.condition
      let message = error.message
      let setFunction = error.setFunction
  
      if (condition) {
        setFunction(message)
        return true
      }
    }
  }