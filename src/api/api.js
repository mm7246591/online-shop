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
    return get("/api/user/update");
}
// update user
export function updateUserEvent(params) {
    return post("/api/user/update", params);
}
// add shoppingCar
export function homeItemEvent(params) {
    return post("/api/home/:name", params);
}
// add shoppingCar
export function MenItemEvent(params) {
    return post("/api/men/:name", params);
}
// add shoppingCar
export function WomenItemEvent(params) {
    return post("/api/women/:name", params);
}
// add shoppingCar
export function KidsItemEvent(params) {
    return post("/api/kids/:name", params);
}
// get shoppingCar
export function getShoppingCarEvent() {
    return get("/api/favorite");
}
// delete shoppingCar
export function deleteShoppingCarEvent(params) {
    return post("/api/favorite", params);
}