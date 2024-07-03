import express from 'express';
import path from 'path';
import rootRouter from './routers/rootRouter';

const app = express();

const PORT: number = 6600;

// * static 사용을 위한 경로 변수 할당
const publicPath: string = path.join('public');
const srcPath: string = path.join('src');

// * 정적 파일 읽는 미들웨어
app.use(express.static(publicPath));
app.use(express.static(srcPath));

app.use('/', rootRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
