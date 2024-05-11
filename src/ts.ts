export function SampleFunction() {
    SampleFunction2("Bob");
    console.log("If you put export function FunctionName then you can access said function from another file by importing it")
}

export function SampleFunction2(name: string) {
    console.log("Your name is " + name)
}