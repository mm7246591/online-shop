import {get, post } from "./axios";
// get item
export function itemsEvent() {
    return get("/api/items");
}
// signup
export function signupEvent(params) {
    return post("/api/user/signup", params);
}
// signin
export function signinEvent(params) {
    return post("/api/user/signin", params);
}
// get user
export function userEvent() {
    return get("/api/user");
}
// update user
export function updateUserEvent(params) {
    return post("http://localhost:3000/user", params);
}
// add shoppingCar
export function homeItemEvent(params) {
    console.log(params);
    return post("/api/:name", params);
}