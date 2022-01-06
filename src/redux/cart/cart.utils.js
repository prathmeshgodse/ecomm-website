export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);

export const decreaseItemCount = (cartItems, cartItemToDecrease) => {
  let cartItemToRemove = cartItems.find(
    (cartItem) => cartItem.id === cartItemToDecrease.id
  );
  if (cartItemToRemove.quantity === 1) {
    return removeItemFromCart(cartItems, cartItemToRemove);
  } else {
    cartItemToRemove = {
      ...cartItemToRemove,
      quantity: cartItemToRemove.quantity - 1,
    };
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id ? cartItemToRemove : cartItem
    );
    return [...updatedCartItems];
  }
};
