export function hexToRGBA(hex: string, alpha = 1) {
	const hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
	const match = hex?.match(hexRegex);

	if (!match) {
		return null; // invalid color string
	}

	const [, red, green, blue] = match;
	const r = parseInt(red, 16);
	const g = parseInt(green, 16);
	const b = parseInt(blue, 16);

	if (alpha != null) {
		return `rgba(${r}, ${g}, ${b}, ${alpha})`;
	} else {
		return `rgb(${r}, ${g}, ${b})`;
	}
}
