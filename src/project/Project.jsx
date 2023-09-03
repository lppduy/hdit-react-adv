import Login from './Login';
import './Project.scss';
import 'nprogress/nprogress.css';
// import Lesson26 from './chapter4/lesson26/Lesson26';
import Lesson17 from './chapter3/Lesson17';
import Lesson18 from './chapter3/Lesson18';
import Lesson25 from './chapter3/Lesson25';

const Project = props => {
  return (
    <div className="project">
      <Login />
      {/* <Lesson26 /> */}
      {/* <Lesson17 /> */}
      {/* <Lesson18 /> */}
      <Lesson25 />
    </div>
  );
};

export default Project;
