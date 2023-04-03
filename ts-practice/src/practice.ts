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

// const obj: { lat: number, lon: number } = { lat: 37.5, lon: 127.5 };
