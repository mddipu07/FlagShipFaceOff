import toast from "react-hot-toast"

export const getFavourites = () => {
    const favourites = localStorage.getItem('favourites')
    if(favourites) return JSON.parse(favourites)
    return []
}




export const addFavourite = phone => {
    const favourites = getFavourites()
    const isExist = favourites.find(p => p.id === phone.id)
    if(isExist) return console.log('Phone Alread Added');
     favourites.push(phone)
     toast.success('Phone Added Succesfully!!')
     localStorage.setItem('favourites',JSON.stringify(favourites))
}


export const removeFavourite = id => {
    console.log(id);
    const favourites = getFavourites()
    console.log(favourites);
    const remainingFavourites = favourites.filter(phone => phone.id !== id)
    localStorage.setItem('favourites',JSON.stringify(remainingFavourites))
}


export const getCart = () => {
    const cart = localStorage.getItem('cart')
    if(cart) return JSON.parse(cart)
    return []
}




export const addToCart = phone => {
    const cart = getCart()
    const isExist = cart.find(p => p.id === phone.id)
    if(isExist) return toast.error('Phone Alread Added');
     cart.push(phone)
     toast.success('Phone Added Successfully!!')
     localStorage.setItem('cart',JSON.stringify(cart))
}


 export const removeCart = id => {
     console.log(id);
    const cart = getCart()
     console.log(cart);
     const remainingCart = cart.filter(phone => phone.id !== id)
     localStorage.setItem('cart',JSON.stringify(remainingCart))
     toast.error('Removed Succesfully!!')
}

