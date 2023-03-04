import './App.css';
import HeavyComponent from './components/HeavyComponent';

// heavy work -> 엄청 무거운 작업!

function App() {
  return (
    <>
      <nav style={{
        backgroundColor: 'yellow',
        marginBottom: '30px',
      }}>네비게이션 바</nav>
      <HeavyComponent />
      <footer style={{
        backgroundColor: 'green',
        marginBottom: '30px',
      }}>푸터 영역이다.</footer>
    </>
  );
}

export default App;
