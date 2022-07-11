//importaciones

import { productosRostro } from "../helpers/database.js";


console.log(productosRostro)
import {pintarProductos} from "../controllers/controladorLLenado.js"
pintarProductos(productosRostro)