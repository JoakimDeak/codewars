// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"
function domainName(url) {
  let domainStart = 0;
  if (url.slice(0, 4) === 'http') {
    domainStart = url.indexOf('//') + 2;
  }
  if (url.slice(domainStart, domainStart + 4) === 'www.') {
    domainStart += 4;
  }
  return url.slice(domainStart, url.indexOf('.', domainStart));
}
console.log(domainName('https://www.cnet.com'));
