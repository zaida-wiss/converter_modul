export function convert(value, from, to) {
   if (from === "kg" && to === "g"){
   return value *1000;}
   else return value /1000;
}