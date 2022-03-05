import {get, post } from "./axios";
export function getItems() {
    return get("api/items");
}

export function getBanner() {
    return post("api/favorite");
}