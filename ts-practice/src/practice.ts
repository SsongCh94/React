const a: string = '5';
const b: number = 5;
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;

// function add(x: number, y: number): number {
// 	return x + y;
// }

// type Add = (x: number, y: number) => number;
// const add: Add = (x, y) => x + y;

interface Add {
	(x: number, y: number): number;
}

const add: Add = (x, y) => x + y;

const f: true = true;
const z: 5 = 5;

const arr: string[] = ['123', '456'];
const arr2: Array<number> = [123, 456]; //Generics
const arr3: [number, number, string] = [123, 456, 'hello']; //튜플 tuple
const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };
