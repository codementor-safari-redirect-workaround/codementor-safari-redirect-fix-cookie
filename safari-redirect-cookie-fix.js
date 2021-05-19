const thirdPartySafariRedirectWorkaround = {
  setCookie: function setCookie(name, value) {
    const d = new Date();
		const year = d.getFullYear();
		const month = d.getMonth();
		const day = d.getDate();
    const expDate = new Date(year + 10, month, day);
		let cookieValue = typeof value !== "undefined" ? value : "";
		cookieValue += ";expires=" + expDate.toGMTString() + ";path=/";
		document.cookie = name + "=" + cookieValue;
  },
  
  isSafari: function isSafari() {
    // https://stackoverflow.com/a/7768006/421891
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }
};

if (
  thirdPartySafariRedirectWorkaround.isSafari()
) {
  thirdPartySafariRedirectWorkaround.setCookie('safari_fix_applied', new Date().toISOString())  
}
