import { Ingredient } from './ingredient';
export class Recipe {

    constructor(
        public name: string,
        public insctructions: string,
        public timeToPrepareInSecond: number,
        public type: string,
        public ingredients: Ingredient[]
    ) {
    }


    
}