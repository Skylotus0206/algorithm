let fs = require("fs");
const [x, y] = fs.readFileSync(0).toString().trim().split("\n").map(Number);

if (x > 0) y > 0 ? console.log(1) : console.log(4);
if (x < 0) y < 0 ? console.log(3) : console.log(2);

// 평소에는 테스트 케이스 파일이 존재하는 '/dev/stdin' 경로로 readFileSync Path 값을 넘겨주었지만, 14681번 문제에서는 fs모듈 런타임 에러가 발생합니다.

// 여기서 0을 넣는 이유는 표준 파일 설명자 값이(standard input) 0이기 때문입니다! 별도의 파일('/dev/stdin')이 아닌 표준 입력을 받는 경우에는 0이라는 인자값을 넘겨줍니다!

// 아마 해당 문제에서는 '/dev/stdin' 경로에 파일이 없던가, 권한이 설정 안 된 문제가 있는 거 같습니다.
