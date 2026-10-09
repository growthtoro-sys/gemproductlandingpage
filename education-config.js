/* Hidden Gem · Shop page config. Edit only this file.
   ALL products below are TEST placeholders (example:true) — replace name, price, copy, cover and checkout.
   checkout: paste the Stripe link (https://buy.stripe.com/...). null = button disabled. */
window.EDU_CONFIG = {
  products: [
    { id: "ebook-1", featured: true, example: true,
      kind: "Ebook · Best seller", name: "Sample Ebook One", price: "69.99",
      blurb: "Test description. Replace with what this ebook teaches and who it’s for.",
      includes: ["Test bullet: what’s inside", "Test bullet: who it’s for", "Instant digital download"],
      cta: "Get the ebook", checkout: null, cover: null },
    { id: "ebook-2", example: true, kind: "Ebook", name: "Sample Ebook Two", price: "39.99",
      blurb: "Test description for the second ebook.", cta: "Get the ebook", checkout: null, cover: null },
    { id: "ebook-3", example: true, kind: "Ebook", name: "Sample Ebook Three", price: "39.99",
      blurb: "Test description for the third ebook.", cta: "Get the ebook", checkout: null, cover: null },
    { id: "ebook-4", example: true, kind: "Ebook", name: "Sample Ebook Four", price: "29.99",
      blurb: "Test description for the fourth ebook.", cta: "Get the ebook", checkout: null, cover: null }
  ]
};
