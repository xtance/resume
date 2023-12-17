export class Arr {
	
	public static getNext<T>(arr: Array<T>, what: T|undefined = undefined, add: number = 1){
		const currentIndex = what ? arr.indexOf(what) : 0;
		let index = currentIndex + add;
		if (index < 0) index = arr.length - 1;
		if (index >= arr.length) index = 0;
		return arr[index]!;
	}

	public static getPrevious<T>(arr: Array<T>, what: T){
		return this.getNext(arr, what, -1);
	}
}