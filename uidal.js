const chalk = require('chalk');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// function playbanana() {
//     let audio = new Audio('https://www.youtube.com/watch?v=nniqVBqJv60');
//     audio.play();
//   };
rl.question('to start a song?(Its you)(y or n!) :', (utgaa_av) => {
    if(utgaa_av == "y"){
        // console.log(playbanana)
        console.log(
            chalk.keyword("yellow")(
        'Its you','\n',
        'Its always you','\n',
        'If Im ever gonna fall in love','\n',
        'I know its gon be you','\n',
        'Its you ','\n',
        'Its always you','\n',
        'Met a lot of people','\n',
        'But nobody feels like you','\n',
        'So please dont break my heart','\n',
        'Dont tear me apart','\n',
        'I know how it starts','\n',
        'Trust me Ive been broken before','\n',
        'Dont break me again','\n',
        'I am delicate','\n',
        'Please dont break my heart','\n',
        'Trust me Ive been broken before','\n',) + chalk.keyword("green")(
        'Ive been broken, yeah','\n',
        'I know how it feels','\n',
        'To be open','\n',
        'And then find out your love isnt real','\n',
        'Im still hurting, yeah','\n',
        'Im hurting inside','\n',
        'Im so scared to fall in love','\n',
        'But if its you then Ill try','\n',) + chalk.keyword("yellow")(
        'Its you','\n',
        'Its always you','\n',
        'If Im ever gonna fall in love','\n',
        'I know its gon be you','\n',
        'Its you','\n',
        'Its always you','\n',
        'Met a lot of people','\n',
        'But nobody feels like you','\n',
        'So please, dont break my heart','\n',
        'Dont tear me apart','\n',
        'I know how it starts','\n',
        'Trust me Ive been broken before','\n',
        'Dont break me again','\n',
        'I am delicate','\n',
        'Please, dont break my heart','\n',
        'Trust me Ive been broken before','\n',) + + chalk.keyword("green")(
        'No, Im not the best at choosing lovers','\n',
        'We both know my past speaks for itself','\n',
        'If you dont think that were right for each other','\n',
        'Then please dont let history repeat itself','\n',
        'Cause I want you','\n',
        'I want you','\n',
        'Theres nothing else I want','\n',
        'Cause I want you','\n',
        'I want you','\n',
        'And youre the only thing I want','\n',) + chalk.keyword("yellow")(
        'Its you','\n',
        'Its always you','\n',
        'If Im ever gonna fall in love','\n',
        'I know its gon be you','\n',
        'Its you','\n',
        'Its always you','\n',
        'Met a lot of people','\n',
        'But nobody feels like you','\n',
        'So please, dont break my heart','\n',
        'Dont tear me apart','\n',
        'I know how it starts','\n',
        'Trust me Ive been broken before','\n',) + chalk.keyword("red")(
        'Dont break me again','\n',
        'I am delicate','\n',
        'Please dont break my heart','\n',
        'Trust me Ive been broken before'));
        console.log("Okey song is end Byee!!!");
        rl.close();
    }
    else{
        console.log("Okey bye :) ")
        rl.close();
    }

});