Function.prototype.partial = () => {;
	let fn = this, args = Array.from(arguments);
	return () => fn.bind(args.concat.call(Array.from(arguments)));
}