import './Lesson8.scss';

const Lesson8 = props => {
  // function handleOnClick1() {
  //     alert('click me')
  // }

  const handleOnClick2 = () => {
    alert('click me');
  };

  //   event handler
  //   running (execute) vs passing functions

  return (
    <div className="lesson8">
      <h3>Lesson 8 :</h3>
      <div>
        <button
        // onClick={handleOnClick2} // pasing function
        //   onClick={handleOnClick2()} // running function
        >
          Tham Chiếu
        </button>
      </div>
      <div>
        <button
        // onClick={alert('inline @.@')}
        >
          Inline
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            alert('anonymous function 👨🏻‍🔬');
          }} // passing function || anonymous function
        >
          Arrow function
        </button>
      </div>
    </div>
  );
};

export default Lesson8;
