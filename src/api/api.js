import {get, post } from "./axios";
export function getItems() {
    return get("api/items");
}

export function getMember() {
    return post("api/member/signup");
}