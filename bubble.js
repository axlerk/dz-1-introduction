function bubble() {
	"use strict";
	var m = document.forms["form"].elements["unsorted"].value.split(/\s*,\s*/), count, max, i, j;
	count = m.length - 1;
	for (i = 0; i < count; i++)
	for (j = 0; j < count - i; j++)
	if (+(m[j]) > +(m[j + 1])) {
		max = m[j];
		m[j] = m[j + 1];
		m[j + 1] = max;
	}
	document.forms["form"].elements["sorted"].value = m.join(", ");
}