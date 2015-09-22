/**
 * @param {Type}
 * @return {Type}
 */
export default function (object, truncationLength) {
	if(truncationLength === undefined){
		truncationLength = 3;
	}

	var result = {};
	Object.keys(object).forEach(key => {
		if(typeof object[key] === 'string'){
			result[key] = object[key].substring(0, truncationLength);
		}
		else {
			result[key] = object[key];
		}
	});
  	return result;
}