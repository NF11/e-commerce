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
