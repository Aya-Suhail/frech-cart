export async function getCaregories(){
  try{
    const response = await fetch(`${process.env.BASEURL}/categories`)
    if(!response.ok){
      throw new Error('Error occured!')
    }

    const data = await response.json()
    return data
  }catch(error){
     return error
  }
}
