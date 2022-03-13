import {get, post } from "./axios";
export function getItems() {
    return get("api/items");
}

export function getMember(params) {
    return post("api/signup", params);
}