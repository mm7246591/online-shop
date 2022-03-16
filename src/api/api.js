import {get, post } from "./axios";
export function itemsEvent() {
    return get("/api/items");
}
export function errorsEvent() {
    return get("/api/user/signup");
}
export function signupEvent(params) {
    return post("/api/user/signup", params);
}