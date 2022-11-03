const url = 'https://www.esanum.de/email-change-verification/xymw570adkxvsbo77jrzvuiyhja4uhcnpygyozrlpczkzctiiwy2jmjx8pfupqnc';
const regexp = /https\:\/\/www\.esanum\.de\/email\-change\-verification\/([a-z0-9]+)/;
const match = url.match(regexp);
if (!!match) {
    const code = match[1];
    console.log(code);
}


// const regexp = /https\:\/\/www\.esanum\.de\/email\-change\-verification\/(.*)/.exec();
// console.log();