const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

// 'public' 폴더 내의 정적 파일들을 제공하도록 설정
app.use(express.static(path.join(__dirname, 'public')));

// 기본 라우트 (index.html 제공)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});
