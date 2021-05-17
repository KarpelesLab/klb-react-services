export const getCatalogCartEndpoint = (cartId = '@') => `Catalog/Cart/${cartId}`;
export const getCatalogCartProcessEndpoint = (cartId = '@') => `Catalog/Cart/${cartId}:process`;
export const getCatalogCartCreateOrderEndpoint = (cartId = '@') => `Catalog/Cart/${cartId}:createOrder`;
export const getCatalogCartResetEndpoint = (cartId = '@') => `Catalog/Cart/${cartId}:reset`;
export const getCatalogCartItemSetQuantityEndpoint = (cartId = '@') => `Catalog/Cart/${cartId}:setQuantity`;
