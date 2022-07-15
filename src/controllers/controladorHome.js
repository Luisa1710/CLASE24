//importaciones

import { productosRostro } from "../helpers/database.js";

import {pintarProductos} from "./controladorLLenado.js"
pintarProductos(productosRostro)

import{buscarProductos} from "./controladorbuscar.js"
buscarProductos()
