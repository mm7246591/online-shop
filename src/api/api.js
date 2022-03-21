import {get, post } from "./axios";
export function itemsEvent() {
    return get("/api/items");
}
export function signupEvent(params) {
    return post("/api/user/signup", params);
}
export function signinEvent(params) {
    return post("/api/user/signin", params);
}