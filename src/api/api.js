import {get, post } from "./axios";
export function getItems() {
    return get("api/items");
}

export function getMember(params) {
    console.log(params);
    return post("api/signup", params);
}