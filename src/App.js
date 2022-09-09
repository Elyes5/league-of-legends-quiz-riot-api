import './App.css';
import MainComponent from './components/MainComponent';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { faHammer } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret,faFire,faHammer,faBook,faTimesCircle,faCircleCheck,faQuestion,faCaretRight)
function App() {
  return (
    <div>
      <MainComponent/>
    </div>
  );
}

export default App;
