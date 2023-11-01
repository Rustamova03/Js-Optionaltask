let a=10;
let b=5;
let c=4;

if((a+b >a+c) &(a+b >b+c)){
    console.log(`Big sum result ${a} and ${b}`);
}
else if((b+c >a+c)& (b+c>a+b) ){
console.log(`Big sum result ${b} and ${c}`)
}
else{
    console.log(`Big sum result ${a} and ${c}`)
}