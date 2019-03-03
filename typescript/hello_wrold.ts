function hello(text: string) {
    return "Hello, " + text;
}

let text = "world";

document.body.innerHTML = hello(text);