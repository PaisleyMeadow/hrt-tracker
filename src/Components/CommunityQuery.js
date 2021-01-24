import {useState} from 'react';
import {ToggleButtonGroup} from 'react-bootstrap';
import {ToggleButton} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import './CommunityQuery.css';

const posts = [
    [0,4,8,2,1,1,0,1,0,1,0,0,1,0,1,1,0,1],
    [1,1,8,4,1,1,0,1,1,0,0,1,1,1,0,1,0,1],
    [1,5,6,4,0,0,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,4,4,4,0,0,1,1,1,0,0,1,0,1,0,0,0,1],
    [1,2,11,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1],
    [0,4,7,3,1,1,0,1,1,1,1,1,1,1,1,0,1,1],
    [1,6,10,4,1,0,1,1,1,1,0,1,0,1,1,0,1,1],
    [1,7,4,3,0,0,0,0,1,1,0,0,0,0,1,0,0,1],
    [1,8,10,4,0,0,0,0,1,0,0,0,0,1,0,1,1,1],
    [0,3,6,4,0,1,0,1,0,1,1,0,0,1,1,1,0,0],
    [1,2,7,2,0,1,0,0,1,0,1,0,0,1,1,1,0,1],
    [1,6,3,4,1,0,1,1,1,1,0,0,1,1,1,0,1,1],
    [1,8,8,3,0,0,1,1,0,0,1,0,0,0,1,0,1,1],
    [0,1,1,4,0,0,1,1,0,1,0,0,0,1,1,1,1,1],
    [1,1,8,3,1,0,0,0,0,0,1,1,0,0,0,0,1,1],
    [1,4,5,2,0,1,0,0,0,1,1,0,0,0,0,0,0,1],
    [1,5,2,4,1,1,0,1,1,0,0,0,0,1,1,0,1,0],
    [0,4,10,3,0,1,0,1,0,0,1,0,0,1,1,0,1,0],
    [1,4,4,3,1,1,1,0,0,1,1,1,1,1,1,0,0,1],
    [1,1,5,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1],
    [0,8,6,3,0,0,1,1,1,1,0,1,0,0,1,0,1,0],
    [1,7,2,3,0,1,0,0,0,0,0,0,0,0,1,1,0,1],
    [0,6,4,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0],
    [1,6,2,2,1,0,0,1,0,0,1,0,1,0,0,0,0,1],
    [1,7,1,3,1,1,0,1,1,0,1,0,0,1,0,0,0,0],
    [1,5,7,3,1,0,0,1,0,0,0,1,1,1,1,1,0,0],
    [0,2,5,2,0,0,0,1,0,1,1,1,1,0,0,1,1,0],
    [0,8,11,2,0,1,0,0,0,0,0,0,1,1,1,1,1,1],
    [0,2,7,2,1,1,0,0,0,1,1,1,0,1,0,0,0,0],
    [1,1,2,3,0,0,0,0,0,1,0,1,1,0,1,0,0,0],
    [0,4,5,2,0,1,0,1,1,1,0,1,0,0,1,0,1,1],
    [0,7,10,2,1,1,0,0,0,0,0,1,1,1,0,0,1,1],
    [1,7,8,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1],
    [1,8,2,2,0,0,0,0,1,1,0,0,0,0,1,1,1,0],
    [0,3,6,2,0,0,1,1,0,0,1,0,0,1,1,0,0,1],
    [1,7,4,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1],
    [0,2,1,4,0,0,1,0,1,0,1,0,1,0,0,1,0,0],
    [1,3,8,3,0,1,0,0,1,0,0,0,1,0,0,1,0,0],
    [1,4,4,3,1,1,1,0,1,0,0,1,0,1,0,0,1,0],
    [1,8,4,3,0,0,1,0,0,0,1,0,1,1,1,1,1,1],
    [1,3,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0],
    [0,2,5,3,0,1,1,0,1,1,0,1,1,0,1,1,0,1],
    [1,4,5,4,0,1,0,1,1,1,1,0,1,0,0,1,0,0],
    [1,3,1,2,1,0,0,0,0,0,0,1,0,1,1,1,1,0],
    [0,2,3,3,1,0,0,0,0,0,0,1,1,1,1,0,0,1],
    [1,8,9,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0],
    [1,8,10,4,1,0,0,1,1,0,1,0,0,0,0,0,1,0],
    [1,5,6,3,1,1,0,1,0,0,1,1,0,1,1,1,0,1],
    [1,2,11,4,1,1,0,1,1,1,1,0,0,1,0,1,1,1],
    [0,2,9,2,1,1,1,0,0,0,1,0,0,1,1,0,1,1],
    [0,1,4,2,1,0,0,0,1,1,1,0,1,0,0,0,1,1],
    [1,3,1,3,1,0,0,1,1,1,1,0,0,1,1,0,1,1],
    [0,2,1,3,0,0,0,0,0,1,0,1,0,0,1,1,1,0],
    [1,5,2,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0],
    [1,7,9,2,0,0,0,1,0,1,0,0,1,0,1,0,1,0],
    [1,2,7,3,0,0,0,1,0,0,0,1,0,1,0,0,1,0],
    [0,8,8,2,0,0,1,0,0,1,1,0,0,1,1,0,1,0],
    [0,6,7,4,0,1,1,0,1,0,1,0,1,0,1,0,0,1],
    [0,1,6,2,0,0,0,0,1,0,0,0,0,1,0,0,1,1],
    [1,2,11,4,0,0,0,0,1,0,0,0,0,0,1,0,1,1],
    [0,8,4,3,0,1,1,1,1,0,0,0,0,1,0,1,0,0],
    [0,4,3,4,0,0,0,0,0,1,0,1,0,1,1,0,1,0],
    [0,1,11,3,1,0,1,0,0,1,1,0,0,1,1,1,0,1],
    [1,6,5,2,1,0,0,1,0,0,1,1,0,1,1,1,1,0],
    [1,2,1,4,0,0,1,0,1,0,0,1,1,1,0,0,1,0],
    [1,8,11,2,1,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,7,7,2,1,0,1,1,0,1,0,1,1,1,0,1,0,1],
    [0,6,9,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0],
    [1,4,1,4,1,0,1,1,0,1,0,1,0,0,1,0,1,1],
    [0,2,8,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0],
    [1,1,1,3,0,0,1,1,1,0,1,1,1,0,0,1,0,1],
    [0,5,11,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1],
    [1,3,8,3,0,1,1,0,0,1,1,1,1,1,0,0,0,1],
    [1,4,9,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0],
    [1,3,11,3,0,1,1,0,1,0,1,1,0,0,1,0,0,1],
    [1,6,2,2,0,0,1,1,0,1,1,1,1,1,0,1,0,1],
    [0,2,4,4,1,0,0,1,0,0,1,0,0,0,1,0,0,0],
    [0,5,3,3,1,1,1,1,0,1,1,0,1,0,1,0,1,0],
    [1,2,4,2,1,0,1,0,1,0,0,0,1,0,1,1,1,0],
    [1,5,4,2,1,0,0,1,1,0,1,0,1,0,1,0,1,1],
    [1,7,4,4,1,1,0,0,1,1,0,1,0,1,1,1,1,0],
    [1,4,3,2,1,0,1,0,1,1,1,1,1,0,1,1,0,1],
    [1,1,4,2,0,1,1,1,1,0,0,0,1,1,0,0,1,0],
    [0,3,6,4,0,0,1,1,1,0,1,0,1,1,1,1,1,0],
    [0,2,6,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0],
    [1,5,4,2,0,0,0,0,0,1,1,1,0,1,0,0,1,1],
    [1,7,10,3,1,0,1,0,0,0,0,0,1,1,0,1,0,1],
    [0,3,10,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0],
    [0,3,4,4,0,0,0,0,1,0,1,0,1,0,0,0,0,1],
    [1,5,1,4,0,1,1,1,0,0,1,0,1,1,1,0,0,0],
    [1,7,6,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0],
    [0,8,9,3,0,0,0,1,0,0,0,1,0,0,0,1,1,0],
    [0,4,4,3,1,1,0,1,0,0,1,0,1,1,1,1,0,1],
    [0,4,10,3,1,1,1,1,1,0,1,1,1,0,1,0,0,0],
    [0,7,4,4,0,0,0,1,0,0,1,1,0,1,1,1,0,0],
    [0,2,6,3,1,1,1,1,0,0,1,1,0,0,1,1,1,1],
    [1,8,7,4,0,0,0,0,1,1,0,0,0,0,1,0,0,0],
    [1,4,1,2,1,0,0,0,0,0,0,1,0,1,0,1,1,0],
    [0,2,11,3,1,1,0,0,1,1,0,0,0,0,0,1,0,0],
    [1,6,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1]
];

function CommunityQuery() {
  const [counts, setCounts] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const updateCounts = () => {
    const newCounts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i < 100; i++) {
        var post = posts[i];
        if (((post[0] === 0 && medChecks.includes('med1', 0)) ||
            (post[0] === 1 && medChecks.includes('med2', 0))) &&
            (ageChecks.length === 0 ||
            (post[1] === 1 && ageChecks.includes('age1', 0)) ||
            (post[1] === 2 && ageChecks.includes('age2', 0)) ||
            (post[1] === 3 && ageChecks.includes('age3', 0)) ||
            (post[1] === 4 && ageChecks.includes('age4', 0)) ||
            (post[1] === 5 && ageChecks.includes('age5', 0)) ||
            (post[1] === 6 && ageChecks.includes('age6', 0)) ||
            (post[1] === 7 && ageChecks.includes('age7', 0)) ||
            (post[1] === 8 && ageChecks.includes('age8', 0))) &&
            (timeChecks.length === 0 ||
            (post[2] === 1 && timeChecks.includes('time1', 0)) ||
            (post[2] === 2 && timeChecks.includes('time2', 0)) ||
            (post[2] === 3 && timeChecks.includes('time3', 0)) ||
            (post[2] === 4 && timeChecks.includes('time4', 0)) ||
            (post[2] === 5 && timeChecks.includes('time5', 0)) ||
            (post[2] === 6 && timeChecks.includes('time6', 0)) ||
            (post[2] === 7 && timeChecks.includes('time7', 0)) ||
            (post[2] === 8 && timeChecks.includes('time8', 0)) ||
            (post[2] === 9 && timeChecks.includes('time9', 0)) ||
            (post[2] === 10 && timeChecks.includes('time10', 0)) ||
            (post[2] === 11 && timeChecks.includes('time11', 0))) &&
            ((radios === '' ||
            (post[3] === 1 && radios === 'form1') ||
            (post[3] === 2 && radios === 'form2') ||
            (post[3] === 3 && radios === 'form3') ||
            (post[3] === 4 && radios === 'form4')))) {
            newCounts[0] += post[4];
            newCounts[1] += post[5];
            newCounts[2] += post[6];
            newCounts[3] += post[7];
            newCounts[4] += post[8];
            newCounts[5] += post[9];
            newCounts[6] += post[10];
            newCounts[7] += post[11];
            newCounts[8] += post[12];
            newCounts[9] += post[13];
            newCounts[10] += post[14];
            newCounts[11] += post[15];
            newCounts[12] += post[16];
            newCounts[13] += post[17];
            newCounts[14] += 1;
        }
    }
    setCounts(newCounts);
  };

  const [medChecks, setMedChecks] = useState(() => 'med1');

  const handleMedChecks = (newMedChecks, event) => {
    setMedChecks(newMedChecks);
  };

  const medList = [
    { name: 'Testosterone', value: 'med1' },
    { name: 'Estrogen', value: 'med2' },
  ];

  const [ageChecks, setAgeChecks] = useState(() => []);

  const handleAgeChecks = (newAgeChecks, event) => {
    setAgeChecks(newAgeChecks);
  };

  const ageList = [
    { name: '<12', value: 'age1' },
    { name: '12-18', value: 'age2' },
    { name: '18-24', value: 'age3' },
    { name: '24-30', value: 'age4' },
    { name: '30-40', value: 'age5' },
    { name: '40-50', value: 'age6' },
    { name: '50-65', value: 'age7' },
    { name: '>65', value: 'age8' },
  ];

  const [timeChecks, setTimeChecks] = useState(() => []);

  const handleTimeChecks = (newTimeChecks, event) => {
    setTimeChecks(newTimeChecks);
  };

  const timeList = [
    { name: '<1 week', value: 'time1' },
    { name: '1-2 weeks', value: 'time2' },
    { name: '2-4 weeks', value: 'time3' },
    { name: '2-4 months', value: 'time4' },
    { name: '4-6 months', value: 'time5' },
    { name: '6-8 months', value: 'time6' },
    { name: '8-12 months', value: 'time7' },
    { name: '1-2 years', value: 'time8' },
    { name: '2-4 years', value: 'time9' },
    { name: '4-8 years', value: 'time10' },
    { name: '>8 years', value: 'time11' },
  ];

  const [radios, setRadios] = useState(() => '');

  const handleRadios = (newRadios, event) => {
    setRadios(newRadios);
  };

  const formList = [
    { name: 'gel', value: 'form1' },
    { name: 'injection', value: 'form2' },
    { name: 'pill', value: 'form3' },
    { name: 'patch', value: 'form4' },
  ];

  const clearAll = () => {
    setAgeChecks([]);
    setTimeChecks([]);
    setRadios('');
  };

  return (
    <div className="App">
      <div className="Box Filters">
        <p className="BoxName">Filters</p>
        <div className="Category">
          <ToggleButtonGroup type="radio" name="meds" value={medChecks} onChange={handleMedChecks}>
            <p className="CategoryName">Medication</p>
            {medList.map((check) => (
              <ToggleButton className="Buttons" value={check.value}>{check.name}</ToggleButton>
            ))}
          </ToggleButtonGroup>
        </div>
        <div className="Category">
          <ToggleButtonGroup type="checkbox" value={ageChecks} onChange={handleAgeChecks}>
            <p className="CategoryName">Age</p>
            {ageList.map((check) => (
              <ToggleButton className="Buttons" value={check.value}>{check.name}</ToggleButton>
            ))}
          </ToggleButtonGroup>
        </div>
        <div className="Category">
          <ToggleButtonGroup type="checkbox" value={timeChecks} onChange={handleTimeChecks}>
            <p className="CategoryName">Time on HRT</p>
            {timeList.map((check) => (
              <ToggleButton className="Buttons" value={check.value}>{check.name}</ToggleButton>
            ))}
          </ToggleButtonGroup>
        </div>
        <div className="Category">
          <ToggleButtonGroup type="radio" name="forms" value={radios} onChange={handleRadios}>
            <p className="CategoryName">Form taken</p>
            {formList.map((radio) => (
              <ToggleButton className="Buttons" value={radio.value}>{radio.name}</ToggleButton>
            ))}
          </ToggleButtonGroup>
        </div>
        <div className="Category">
            <Button onClick={clearAll}>Clear</Button>
            <Button onClick={updateCounts}>Update</Button>
        </div>
      </div>
      <div className="Box Findings">
        <p className="BoxName">Here's what we found</p>
        <div className="Category"><p className="Finding">Increased Libido: <span>{counts[0]}/{counts[14]} ({Math.round(counts[0] / counts[14] * 100)}%)</span></p></div>
        <div className="Category"><p className="Finding">Decreased Libido: <span>{counts[1]}/{counts[14]} ({Math.round(counts[1] / counts[14] * 100)}%)</span></p></div>
        <div className="Category"><p className="Finding">Gain Weight: <span>{counts[2]}/{counts[14]} ({Math.round(counts[2] / counts[14] * 100)}%)</span></p></div>
        <div className="Category"><p className="Finding">Lose Weight: <span>{counts[3]}/{counts[14]} ({Math.round(counts[3] / counts[14] * 100)}%)</span></p></div>
        <div className="Category"><p className="Finding">Muscle Gain: <span>{counts[4]}/{counts[14]} ({Math.round(counts[4] / counts[14] * 100)}%)</span></p></div>
        <div className="Category"><p className="Finding">Fat Redistribution: <span>{counts[5]}/{counts[14]} ({Math.round(counts[5] / counts[14] * 100)}%)</span></p></div>
        <div className="Category"><p className="Finding">Irritability: <span>{counts[6]}/{counts[14]} ({Math.round(counts[6] / counts[14] * 100)}%)</span></p></div>
        <div className="Category"><p className="Finding">Body Hair: <span>{counts[7]}/{counts[14]} ({Math.round(counts[7] / counts[14] * 100)}%)</span></p></div>
        <div className="Category"><p className="Finding">Facial Hair: <span>{counts[8]}/{counts[14]} ({Math.round(counts[8] / counts[14] * 100)}%)</span></p></div>
        <div className="Category"><p className="Finding">Voice Change: <span>{counts[9]}/{counts[14]} ({Math.round(counts[9] / counts[14] * 100)}%)</span></p></div>
        <div className="Category"><p className="Finding">Allergic Reaction: <span>{counts[10]}/{counts[14]} ({Math.round(counts[10] / counts[14] * 100)}%)</span></p></div>
        <div className="Category"><p className="Finding">Body Odor Changing: <span>{counts[11]}/{counts[14]} ({Math.round(counts[11] / counts[14] * 100)}%)</span></p></div>
        <div className="Category"><p className="Finding">Bottom Growth: <span>{counts[12]}/{counts[14]} ({Math.round(counts[12] / counts[14] * 100)}%)</span></p></div>
        <div className="Category"><p className="Finding">Increased Acne: <span>{counts[13]}/{counts[14]} ({Math.round(counts[13] / counts[14] * 100)}%)</span></p></div>
      </div>
    </div>
  );
}

export default CommunityQuery;
