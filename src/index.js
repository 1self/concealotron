/**
 * @param {Type}
 * @return {Type}
 */
export default function (value, truncationLength) {
	if(truncationLength === undefined){
		truncationLength = 3;
	}

	if(typeof value === 'string'){
		return value.substring(0, truncationLength);
	}

	var result = {};
	Object.keys(value).forEach(key => {
		if(typeof value[key] === 'string'){
			result[key] = value[key].substring(0, truncationLength);
		}
		else {
			result[key] = value[key];
		}
	});
  	return result;
}