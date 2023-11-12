
const categories = {
    MEAL: 'Refeição',
    DRINK: 'Bebida'
}

class Product {

    id;
    name;
    category;
    categoryDescription;
    price;
    size;
    imgUrl;

    constructor({ id, name, category, categoryDescription, price, size, imgUrl }) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.categoryDescription = categoryDescription;
        this.price = price;
        this.size = size;
        this.imgUrl = imgUrl;
    }

}

export { Product, categories }