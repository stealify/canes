import { default as debug } from "./can-debug";
debug();
//!steal-remove-start
try {
	if(process.env.NODE_ENV !== 'production') {
		debug();
	}
} catch(e) {
	// process is not defined
}

//!steal-remove-end
