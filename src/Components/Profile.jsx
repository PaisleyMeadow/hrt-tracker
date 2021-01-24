import { useState } from 'react';
import Select from "react-dropdown-select";
<<<<<<< HEAD
import Graph from "./Graph"
import '../App.css';

=======
import Graph from "./Graph";
>>>>>>> 70459088524a0946927e2d15fbdcfddd37bb099d

const defaultMeds = [
    {
        name: "Testosterone",
        form: "injection",
        dosage: "750",
        units: "mg",
        start: "9/1/2019",
    },
    {
        name: "Zoloft",
        form: "tablet",
        dosage: "100",
        units: "mg",
        start: "9/21/2020",
    },
];

const defaultWeights = [
    {
        weight: 170,
        date: "9/25/2020",
    },
    {
        weight: 171,
        date: "9/30/2020",
    },
];

const defaultMoods = [
    {
        mood: "Meh",
        date: "9/25/2020",
        note: "Did not sleep enough, fatigued during work.",
    },
    {
        mood: "Good",
        date: "9/25/2020",
        note: "Cuddled with Fido.",
    },
];

const defaultCycles = [
    {
        start: "9/16/2021",
        end: "9/25/2021",
        symptoms: "Bad cramps, heavy flow, craved chocolate",
    },
    {
        start: "10/12/2021",
        end: "10/17/2021",
        symptoms: "Cramps, back pain, fatigue.",
    },
];



function Medication(props) {
    
    const [dosage, setDosage] = useState(0);
    let newDosage = 0;
    const handleInput = (e) => {
        newDosage = e.target.value;
    }

    const updateDosage = () => {
        setDosage(newDosage);
    }
    return (
        <div>
            <h3>
                {props.name}
            </h3>
            <p>
                 Current dosage: {props.dosage} {props.units}
            </p>
            <p>Update dosage.</p>
            <input type="number" onChange={handleInput} /><br/>
            <button onClick={updateDosage}>Update</button>
        </div>
    );
}

function AddMed(props) {
    const [name, setName] = useState("");
    const [form, setForm] = useState("");
    const [dosage, setDosage] = useState(0);
    const [units, setUnits] = useState("");
    const [start, setStart] = useState("");
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleForm = (e) => {
        setForm(e.target.value);
    }
    const handleDosage = (e) => {
        setDosage(e.target.value);
    }
    const handleUnits = (e) => {
        setUnits(e.target.value);
    }
    const handleStart = (e) => {
        setStart(e.target.value);
    }
    const publish = () => {
        props.createMed(name, form, dosage, units, start);
        setName("");
        setForm("");
        setDosage(0);
        setUnits("");
        setStart("");
    }
    return (
        <div className="add-entry">
            <p>Add Medication</p>
            <p>Medication name.</p>
            <input type="text" onChange={handleName} />
            <p>Start date.</p>
            <input type="text" onChange={handleStart} />
            <p>Form of medication.</p>
            <input type="text" onChange={handleForm} />
            <p>Dosage.</p>
            <input type="text" onChange={handleDosage} />
            <p>Units of Dosage.</p>
            <input type="text" onChange={handleUnits} /><br/>
            <button onClick={publish}>Create</button>
        </div>
    )
}

function Weight(props) {

    const [weight, setWeight] = useState(0);
    const [date, setDate] = useState("")
    let newWeight = 0;
    let newDate = "";
    const handleWeight = (e) => {
        newWeight = e.target.value;
    }
    const handleDate = (e) => {
        newDate = e.target.value;
    }

    const updateWeight = () => {
        setWeight(newWeight);
    }
    const updateDate = () => {
        setDate(newDate);
    }
    return (
        <div>
            <h3>
                {props.date}
            </h3>
            <p>
                 {props.weight} lbs
            </p>
            <p>Edit weight.</p>
            <input type="number" onChange={handleWeight} /><br/>
            <button onClick={updateWeight}>Update</button>
            <p>Edit date.</p>
            <input type="text" onChange={handleDate} /><br/>
            <button onClick={updateDate}>Update</button>
        </div>
    );
}

function AddWeight(props) {
    const [weight, setWeight] = useState(0);
    const [date, setDate] = useState("")
    const handleWeight = (e) => {
        setWeight(e.target.value);
    }
    const handleDate = (e) => {
        setWeight(e.target.value);
    }

    const publish = () => {
        props.createWeight(weight,date);
        setWeight(0);
        setDate("");
    }
    return (
        <div className="add-entry">
            <p>Add Weight Entry</p>
            <input type="number" onChange={handleWeight} />
            <p>Input date.</p>
            <input type="text" onChange={handleDate} /><br/>
            <button onClick={publish}>Create</button>
        </div>
    )
}

function Mood(props) {

    const [mood, setMood] = useState("Neutral");
    const [date, setDate] = useState("");
    const [note, setNote] = useState("");

    
    let newDate = "";
    let newNote = "";
    let newMood = "";
    

    const handleMood = (e) => {
        e.preventDefault();
        newMood = e.target.value;
    }
    const handleDate = (e) => {
        e.preventDefault();
        newDate = e.target.value;
    }
    const handleNote = (e) => {
        e.preventDefault();
        newNote = e.target.value;
    }

    const updateMood = () => {
        setMood(newMood);
    }
    const updateDate= () => {
        setDate(newDate);
    }
    const updateNote = () => {
        setNote(newNote);
    }
    return (
        <div>
            <h3>
                {props.date}
            </h3>
            <p>
                I'm feeling {props.mood}.
                Notes: {props.note}
            </p>
            <p>Edit Mood input.</p>
            Input Mood.
            <input type="text" onChange={handleMood} />
            <button onClick={updateMood}>Update</button>
            <p>Edit date.</p>
            <input type="text" onChange={handleDate} /><br/>
            <button onClick={updateDate}>Update</button>
            <p>Edit note.</p>
            <input type="text" onChange={handleNote} /><br/>
            <button onClick={updateNote}>Update</button>
        </div>
    );
}

function AddMood(props) {
    const [mood, setMood] = useState("Neutral");
    const [date, setDate] = useState("");
    const [note, setNote] = useState("");

   
    const handleMood = (e) => {
        e.preventDefault();
        setMood(e.target.value);
    }
    const handleDate = (e) => {
        e.preventDefault();
        setDate(e.target.value);
    }
    const handleNote = (e) => {
        e.preventDefault();
        setNote(e.target.value);
    }
    

    const handleChange = (e) => {
        setMood(e.target.value );
    }


    const publish = () => {
        props.createMood(mood, date, note);
        setMood("");
        setDate("");
        setNote("");
    }
    return (
        <div className="add-entry">
            <p>Add Mood entry.</p>
            Input Mood.
            <input type="text" onChange={handleDate} />
            <p>Date.</p>
            <input type="text" onChange={handleDate} />
            <p>Notes.</p>
            <input type="text" onChange={handleNote} /><br/>
            <button onClick={publish}>Create</button>
        </div>
    )
}

function Cycle(props) {
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(0);
    const [symptoms, setSym] = useState("");
    const [duration, setDur] = useState(0);
    let newStart = 0;
    let newEnd = 0;
    let newSym = "";
    let newDur = 0;
    const handleStart = (e) => {
        newStart = e.target.value;
    }
    const handleEnd = (e) => {
        newEnd = e.target.value;
    }
    const handleSym = (e) => {
        newSym = e.target.value;
    }
    const handleDur = (e) => {
        newDur = e.target.value;
    }
    const updateStart = () => {
        setStart(newStart);
    }
    const updateEnd = () => {
        setEnd(newEnd);
    }
    const updateSym = () => {
        setSym(newSym);
    }
    const updateDur = () => {
        setDur(newDur);
    }
    return (
        <div>
            <h3>
                Cycle {props.start}
            </h3>
            <p>
                Duration: {props.duration} days.
                End date: {props.end}
                Notable symptoms: {props.symptoms}
            </p>
            <p>Edit start date.</p>
            <input type="text" onChange={handleStart} /><br/>
            <button onClick={updateStart}>Update</button>
            <p>Edit Duration.</p>
            <input type="number" onChange={handleDur} /><br/>
            <button onClick={updateDur}>Update</button>
            <p>Edit end date.</p>
            <input type="number" onChange={handleEnd} /><br/>
            <button onClick={updateEnd}>Update</button>
            <p>Edit Symptoms.</p>
            <input type="text" onChange={handleSym} /><br/>
            <button onClick={updateSym}>Update</button>
        </div>
    );
}


function AddCycle(props) {
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(0);
    const [symptoms, setSym] = useState("");
    const [duration, setDur] = useState(0);
    const handleStart = (e) => {
        setStart(e.target.value);
    }
    const handleEnd = (e) => {
        setEnd(e.target.value);
    }
    const handleSym = (e) => {
        setSym(e.target.value);
    }
    const handleDur = (e) => {
        setDur(e.target.value);
    }

    const publish = () => {
        props.createCycle(start, end, symptoms, duration);
        setStart("");
        setEnd("");
        setSym("");
        setDur(0);
    }
    return (
        <div className="add-entry">
            <p>Add Cycle Entry</p>
            <p>Start date.</p>
            <input type="text" onChange={handleStart} />
            <p>Duration.</p>
            <input type="number" onChange={handleDur} />
            <p>End date.</p>
            <input type="number" onChange={handleEnd} />
            <p>Symptoms.</p>
            <input type="text" onChange={handleSym} /><br/>
            <button onClick={publish}>Create</button>
        </div>
    )
}




function Profile() {
    const [meds, setMeds] = useState(defaultMeds);
    const createMed = (_name, _form, _dosage, _units, _start) => {
        const newMeds = [...meds];
        newMeds.push({
            name: _name,
            form: _form,
            dosage: _dosage,
            units:_units,
            start: _start,
        });
        setMeds(newMeds);
    }
    const [moods, setMoods] = useState(defaultMoods);
    const createMood = (_mood, _date, _note) => {
        const newMoods = [...moods];
        newMoods.push({
            mood: _mood,
            date: _date,
            note: _note,
        });
        setMoods(newMoods);
    }
    const [weights, setWeights] = useState(defaultWeights);
    const createWeight = (_weight, _date) => {
        const newWeights = [...weights];
        newWeights.push({
            weight: _weight,
            date: _date,
        });
        setWeights(newWeights);
    }
    const [cycles, setCycles] = useState(defaultCycles);
    const createCycle = (_start, _end, _duration, _symptoms) => {
        const newCycles = [...cycles];
        newCycles.push({
            start: _start,
            end: _end,
            duration: _duration,
            symptoms: _symptoms,
        });
        setCycles(newCycles);
    }
    return (
        <div className="profile">
        <div className="medication-container">
                <h2>
                    Medications
        </h2>
                <AddMed createMed={createMed} />
                {
                    meds.map((med) => {
                        return <Medication name={med.name} form={med.form} dosage={med.dosage} units={med.units} start={med.start}/>
                    })
                }
        </div>
        <div className="mood-container">
            <h2>
                Mood Tracker
        </h2>
            <AddMood createMood={createMood} />
            {
                moods.map((mood) => {
                    return <Mood mood={mood.mood} date={mood.date} note={mood.note} />
                })
            }
        </div>
        <div className="menstrual-container">
            <h2>
                Menstrual Cycle Tracker
        </h2>
            <AddCycle createCycle={createCycle} />
            {
                cycles.map((cycle) => {
                    return <Cycle start={cycle.start} end={cycle.end} duration={cycle.duration} symptoms={cycle.symptoms} />
                })
            }
        </div>
        <div className="weight-container">
            <h2>
                Weight Tracker
        </h2>
            <AddWeight createWeight={createWeight} />
            {
                weights.map((weight) => {
                    return <Weight weight={weight.weight} date={weight.date} />
                })
            }
            <Graph />
        </div>
        </div>
    );
}


export default Profile;