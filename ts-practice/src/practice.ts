const a = '5';
const b = 5;
const c = true;
const d = undefined;
const e = null;

let aa = 123;
aa = 'hello' as unknown as number;

try {
	const array: string[] = [];
	array.push('hello');
} catch (error) {
	error;
}
interface Add {
	(x: number, y: number): number;
}

// const add: Add = (x, y) => x + y;

const f: true = true;
const z: 5 = 5;

const arr = ['123', '456'];
const arr2: Array<number> = [123, 456]; //Generics
const arr3: [number, number, string] = [123, 456, 'hello']; //튜플 tuple
const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };
