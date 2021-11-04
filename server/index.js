    const express = require('express');
    const app = express();
    const bodyParser = require('body-parser');
    const port = 4000;

    //객체 안에 객체 표현을 허용하는것
    app.use(bodyParser.urlencoded({extends: true}));
    //json 파서
    app.use(bodyParser.json());
    /*
    * 위 두 코드를 쓰는 이유는
    * req.body는 body-parser를 사용하기 전에는 디폴트 값으로 Undefined이 설정되기 때문입니다. (출처: Express Docs)
    * */

    app.get('/',(req,res) => {
        res.send('wewe');
    });

    app.get('/api/list',(req,res) => {
        res.send('동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세')
    })
    app.get('/api/left_content',(req,res) => {
        res.json([
            {id:1,name:'제목',text:'공부하자'},
            {id:2,name:'제목',text:'사랑하자'},
            {id:3,name:'제목',text:'계속공부하자'},
            {id:4,name:'제목',text:'자기관리'},
        ])
    })

    app.listen(port, () => {
        console.log(`${port}`);
    });