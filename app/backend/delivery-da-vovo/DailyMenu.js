
export default class DailyMenu {

    date;
    description;
    imageUrl;
    items;
    createdAt;
    updatedAt;

    constructor({ date, description, imageUrl, items, createdAt, updatedAt }) {
        this.date = date;
        this.description = description;
        this.imageUrl = imageUrl;
        this.items = items
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    static from({ date, description, imageUrl, products, createdAt, updatedAt }) {
        const items = groupProductsByCategory(products)
        return new DailyMenu({ date, description, imageUrl, items, createdAt, updatedAt })
    }

} 

function groupProductsByCategory(products) {
    const map = new Map()
    const totalItems = {}
    products.forEach(product => {
        const key = product.category.toString().toLowerCase()
        const collection = map.get(key)
        if (!collection) {
            const items = [product]
            map.set(key, items)
            totalItems[key] = {
                description: product.categoryDescription,
                products: items
            }
        } else {
            collection.push(product)
        }

    });

    return totalItems
}