import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// function App() {
//   const developerQuotes = [
//     "프로그래머는 코드를 작성하는데 90%의 시간을 보내고, 나머지 10%의 시간을 '왜 이게 안 되지?'라고 묻는 데 보낸다.",
// "코드 작성의 첫 번째 법칙: 누군가가 당신의 코드를 이해할 수 있도록 작성하라. 두 번째 법칙: 당신이 잠든 후 그 '누군가'는 바로 당신이다.",
// "내 코드는 완벽해. 그들이 아직 그것을 이해하지 못했을 뿐이야.",
// "프로그래머의 삶: 새벽 3시에 자려고 누웠는데, 코드의 문제를 생각하며 눈을 뜬다.",
// "소프트웨어 개발이란 커피를 코드로 변환하는 과정이다.",
// "하드웨어가 문제일 때 소프트웨어를 업데이트하고, 소프트웨어가 문제일 때 하드웨어를 바꾼다. 그래도 안 되면 재부팅한다.",
// "프로그래머는 두 가지 유형이 있다: 사람들을 미치게 만드는 코드를 작성하는 사람과, 미친 코드를 고치는 사람.",
// "컴퓨터는 빠르게 멍청해질 수 있는 유일한 기계다.",
// "코딩 중 에러가 발생했을 때: '이게 왜 안 되지?' 코딩이 잘 됐을 때: '이게 왜 되지?'",
// "프로그래밍이란 한 가지 문제를 해결하면서, 새로운 두 가지 문제를 만드는 기술이다."
//   ];
// const developerHumor = ["왜 해커들은 바다에서 수영을 못할까요?  왜요?  IP 주소를 잃어버릴까봐요!",
// "프로그래머가 천국에 갔을 때, 성 페트로가 말했어요.  여기서 당신은 두 가지 옵션을 선택할 수 있어요: 무한 루프 안에 머무르거나, 무한 루프 안에 머무르거나.",
// "왜 개발자는 농담을 잘하지 못할까요?  왜죠?  타입이 맞지 않아서요!",
// "프로그래머의 일기를 읽어보았어요. 월요일: 버그 찾기 화요일: 버그 고치기  수요일: 새로운 버그 찾기  목요일: 새로운 버그 고치기  금요일: 일주일이 어째서 이렇게 빨리 갔지?",
// "왜 자바 개발자들은 안경을 쓰나요?  왜요? 자바는 저수준 언어라서요!",
// "코드를 작성하는 건 피아노를 연주하는 것과 비슷해요. 처음엔 엉망이지만, 나중에는 더 큰 엉망이 되죠!",
// "프로그래머가 라이트를 켜는 방법:  제어판에 들어가서, '전원 옵션'을 클릭하고, '전원 버튼 설정'을 클릭하고, '켜기'를 선택한 다음 '저장'을 눌러요.",
// "왜 개발자들은 자연을 좋아하죠?  왜요?  버그들이 많아서요!",
// "프로그래머는 어떻게 휴가를 보내나요?  디버깅 없이요.",
// "개발자가 바다에서 길을 잃었을 때 어떻게 하나요? 소스 코드를 따라가요!"];
// let idx = Math.trunc(Math.random() * developerQuotes.length);
// idx = idx === 10 ? 0 :idx; //예외처리 
//   const currentProverb = developerQuotes[idx];
//   const current = developerHumor[idx];
//   return (

//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//         {currentProverb}
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           {current}
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

export default function App(){
  return (
    <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li>
            <Link to = "/">Home</Link>
          </li>
          <li>
            <Link to = "/mypage">Mypage</Link>
          </li>
          <li>
            <Link to = "/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        {/*경로는 path로 컴포넌트는 element로 연결합니다 */}
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/mypage" element = {<Mypage/>}/>
        <Route path = "/dashboard" element = {<Dashboard/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

function Home(){
  return <h1>Home</h1>
}

function Mypage(){
  return <h1>Mypage</h1>
}

function Dashboard(){
  return <h1>Dashboard</h1>
}

