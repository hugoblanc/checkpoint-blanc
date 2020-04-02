export class Ingredient {
    name: string;
    kgPrice: number;
    imageUrl: string;

    constructor(name: string, kgPrice: number, imageUrl: string) {
        this.name = name;
        this.kgPrice = kgPrice;
        this.imageUrl = imageUrl;
    }
}