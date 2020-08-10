const inquirer = require('inquirer');
const figlet = require('figlet');

figlet('Binod', (err,data) => {
    if(err){
        console.log('Somethings Wrong');
        console.dir(err);
        return
    }
    console.log(data);
    display();
});


function display(){
inquirer
    .prompt([
        {
           type: 'list',
           name: 'binod',
           choices:['Creator', 'News', 'Exit' ]
        }
    ])
    .then(answers => {
        if(answers.binod == "Creator"){
            console.log(`Binod tharu, The meme was created from a youtube Channel Slay Point, while reading their comments 
                            Link : https://www.youtube.com/watch?v=n8vlEklS3gA
            `);
            displaNext();
        }else if(answers.binod == "News"){
            console.log(`https://timesofindia.indiatimes.com/viral-news/binod-the-most-bizarre-meme-trend-of-year/articleshow/77448500.cms`);
            console.log(`https://www.india.com/viral/mystery-solved-who-is-binod-here-is-how-the-twitter-meme-fest-originated-4106503/`);
            displaNext();
        }else{
            console.log("Stay Home, Stay Safe, Spread Binodness");
        }
    });

}

function displaNext(){
    inquirer
    .prompt([
        {
           type: 'list',
           name: 'binod_menu',
           choices:['back']
        }
    ])
    .then(answers => {
        if(answers.binod_menu == "back"){
            display();
        }else{
            console.log("NA");
        }
    });

}



