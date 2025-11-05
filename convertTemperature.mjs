export function convert(value, from, to) {
    if (from === "c" && to === "f") {
        return (value *1.8) +32}
    else return (value -32)/1.8;
}