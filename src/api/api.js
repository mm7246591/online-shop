import {get, post } from "./axios";
export function getItems() {
    return get("/api/items");
}

export function signupEvent(params) {
    return post("/api/user/signup", params);
}