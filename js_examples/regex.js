const url = 'https://www.esanum.de/email-change-verification/xymw570adkxvsbo77jrzvuiyhja4uhcnpygyozrlpczkzctiiwy2jmjx8pfupqnc';
const regexp = /https\:\/\/www\.esanum\.de\/email\-change\-verification\/(.*)/g;
const match = url.match(regexp);
console.log(match);