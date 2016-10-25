export const windowMatchMedia = window.matchMedia || function () {
	return {
		matches: false,
		addListener: function () {},
		removeListener: function () {}
	};
};
