import express from 'express';
import path from 'path';

const app = express();

const PORT: number = 8080;

// * static 사용을 위한 경로 변수 할당
const publicPath: string = path.join(__dirname, 'public');
const srcPath: string = path.join(__dirname, 'src');

// * 정적 파일 읽는 미들웨어
app.use(express.static(publicPath));
app.use(express.static(srcPath));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
