var express = require('express');
var app = express();


/* 
実行
node app.js

//キャリビレーション
http://localhost:3000/tracking.js/examples/brief.html
http://localhost:3000/tracking.js/examples/brief_camera.html
//色を検出
http://localhost:3000/tracking.js/examples/color_camera.html
//色をつける
http://localhost:3000/tracking.js/examples/color_draw_something.html
//顔座標表示
http://localhost:3000/tracking.js/examples/face_camera.html
//赤の点々
http://localhost:3000/tracking.js/examples/fast_camera.html

//キャプチャ
http://localhost:3000/clmtrackr/examples/caricature.html
//クラスビュア
http://localhost:3000/clmtrackr/examples/classviewer.html
//顔感情分析
http://localhost:3000/clmtrackr/examples/clm_emotiondetection.html 
//性別
http://localhost:3000/clmtrackr/examples/clm_genderdetection.html
//変形
http://localhost:3000/clmtrackr/examples/facedeform.html
//置換
http://localhost:3000/clmtrackr/examples/facesubstitution.html
//モデルビュア
http://localhost:3000/clmtrackr/examples/modelviewer_pca.html
http://localhost:3000/clmtrackr/examples/modelviewer_spca.html


//google vision api
http://localhost:3000/web-docs-samples/vision/explore-api/index.html

//google speech api
http://localhost:3000/web-docs-samples/speech/explore-api/index.html

*/


app.use('/clmtrackr', express.static(__dirname + '/clmtrackr'));
app.use('/tracking.js', express.static(__dirname + '/tracking.js'));
// app.use('/web-docs-samples', express.static(__dirname + '/web-docs-samples'));



app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

