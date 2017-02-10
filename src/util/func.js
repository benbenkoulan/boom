Function.prototype.partial = () => {
	console.log(arguments.constructor);
	let fn = this, args = Array.from(arguments);
	console.log(args.constructor);
	return () => fn.bind(args.concat.call(Array.from(arguments)));
}