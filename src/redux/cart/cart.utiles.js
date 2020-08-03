export const addItemToCart = (oldCartItems, cartItemToAdd) => {
  const isAlreadyExist = oldCartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (isAlreadyExist) {
    return oldCartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...oldCartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemToCart = (oldCartItems, cartItemToRemove) => {
  const isAlreadyExist = oldCartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  if (isAlreadyExist.quantity === 1) {
    return clearItemToCart(oldCartItems, cartItemToRemove);
  }
  return oldCartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const clearItemToCart = (oldCartItems, cartItemToRemove) =>
  oldCartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
