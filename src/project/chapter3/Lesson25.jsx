import _ from 'lodash';

const Lesson25 = props => {
  const person = {
    name: 'abc',
    address: {
      city: 'hn',
      country: 'vn',
    },
    job: {
      title: 'dev',
      detail: {
        position: 'boss',
        salary: '5k',
      },
    },
  };

  //   const shallowCopiedPerson = _.clone(person); // shallow copy

  const deepCopiedPerson = _.cloneDeep(person);

  deepCopiedPerson.name = 'James le';
  deepCopiedPerson.job.title = 'superman';
  console.log('>>> check person', person);
  console.log('>>> check deepCopiedPerson', deepCopiedPerson);

  return <div>Lesson 25;</div>;
};

export default Lesson25;
