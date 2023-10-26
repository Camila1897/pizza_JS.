import PromptSync from "prompt-sync";
import { pizzas } from "./modules/pizzas.js";


function createPizza() {
    const prompt = PromptSync();
    const pizzaName = prompt ("which pizzaName would you want?  (puttanesca) ");
     pizzas
}

createPizza();

