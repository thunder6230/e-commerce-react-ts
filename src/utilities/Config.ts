//Netlify can not understand vite environmental variables => hardcoded settings

/*const { VITE_CURRENCY,
    VITE_ANONYMOUS_CART,
    VITE_ANONYMOUS_WISHLIST,
    VITE_DISCOUNTS,
    VITE_ENABLE_WEBP,
    VITE_SHOP_NAME,
    VITE_SHOW_SELLER,
    VITE_PRICE_ADDITIONAL_TEXT,
    VITE_PRICE_ADDITIONAL_LINK_TEXT, } = import.meta.env*/

export const SHOP_SETTINGS = {
    BASE_URL: "http://localhost:5000",
    ENABLE_WEBP:  true,
    DISCOUNTS:  true,
    SHOW_SELLER:  true,
    CURRENCY:  "€",
    PRICE_ADDITIONAL_TEXT: "Prices include VAT. Depending on the delivery address, the VAT may vary at checkout.",
    PRICE_ADDITIONAL_LINK_TEXT: "More Info Here",
    SHOP_NAME: "Thunder Shop",
    ANONYMOUS_CART: true,
    ANONYMOUS_WISHLIST:  true,
}

