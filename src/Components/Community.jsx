import React from "react";
import CommunityQuery from './CommunityQuery';
import firebase from '../firebase'
import $ from 'jquery'

const db = firebase.firestore();


class Community extends React.Component {
    constructor(props) {
        super(props);
        this.toggleForm = this.toggleForm.bind(this);
    }

    toggleForm(e) {
        e.preventDefault();
        $("#dataInput").toggle();
    }

    render() {
        return (
            <div className="community">
                <CommunityQuery />
                <button type="button" onClick={this.toggleForm}>Data collection form</button>
                <DataInput />
            </div>
        );
    }
}

class DataInput extends React.Component {
    constructor(props) {
        super(props);

        // input handling inspired by https://dmitripavlutin.com/react-forms-tutorial/
        // turned out to be an awful way of doing it lmao
        this.state = {
            values: {
                hrttime: "",
                age: "",
                form: "",
                libido: false,
                acne: false,
                weightgain: false,
                weightloss: false,
                muscle: false,
                fatredistribution: false,
                irritability: false,
                bodyhair: false,
                facialhair: false,
                voicechanges: false,
                bodyodor: false,
                bottomgrowth: false,
                othereffects: ""
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.setData = this.setData.bind(this);
    }

    handleSubmit(e) {
        console.log("Submitting information form");
        e.preventDefault();
        console.log(this.state.values);
        db.collection("testosterone").doc()
            .set(this.state.values)
            .then((_) => {
                alert("Information submitted!");
                window.location.reload();
            })
            .catch((error) => {
                alert("Error adding document, see console");
                console.error("error adding object to db", error);
            });

    }

    setData(name, isCheckbox = false) {
        return ({ target: { value } }) => {
            let newValue;
            if (isCheckbox) {
                newValue = (value === "on");
            } else {
                newValue = value;
            }
            this.state.values[name] = newValue;
        };
    };

    render() {
        return (
            <div style={{display: "none"}} id="dataInput">
                <h1>Submit information</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>General info</label>
                    <br/>
                    <label>Time on HRT (months, approx):</label>
                    <input onChange={this.setData("hrttime")} type="text" name="hrttime" />
                    <br/>
                    <label>Age:</label>
                    <input onChange={this.setData("age")} type="text" name="age" />
                    <br/>
                    <label>Form:</label>
                    <select onChange={this.setData("form")} name="form">
                        <option value={null} selected>select...</option>
                        <option value="pills">Pills</option>
                        <option value="gel">Gel/cream</option>
                        <option value="patch">Patch</option>
                        <option value="injection">Injection</option>
                    </select>
                    <br/>
                    <label>Testosterone-specific info</label>
                    <br/>
                    <label>Increased libido:</label>
                    <input onChange={this.setData("libido", true)} type="checkbox" name="libido"/>
                    <br/>
                    <label>Increased acne:</label>
                    <input onChange={this.setData("acne", true)} type="checkbox" name="acne"/>
                    <br/>
                    <label>Weight gain:</label>
                    <input onChange={this.setData("weightgain", true)} type="checkbox" name="weightgain"/>
                    <br/>
                    <label>Weight loss:</label>
                    <input onChange={this.setData("weightloss", true)} type="checkbox" name="weightloss"/>
                    <br/>
                    <label>Muscle gain:</label>
                    <input onChange={this.setData("muscle", true)} type="checkbox" name="muscle"/>
                    <br/>
                    <label>Fat redistribution:</label>
                    <input onChange={this.setData("fatredistribution", true)} type="checkbox" name="fatredistribution"/>
                    <br/>
                    <label>Increased irritability:</label>
                    <input onChange={this.setData("irritability", true)} type="checkbox" name="irritability"/>
                    <br/>
                    <label>Increased body hair:</label>
                    <input onChange={this.setData("bodyhair", true)} type="checkbox" name="bodyhair"/>
                    <br/>
                    <label>Increased facial hair:</label>
                    <input onChange={this.setData("facialhair", true)} type="checkbox" name="facialhair"/>
                    <br/>
                    <label>Voice changes:</label>
                    <input onChange={this.setData("voicechanges", true)} type="checkbox" name="voicechanges"/>
                    <br/>
                    <label>Body odor changes:</label>
                    <input onChange={this.setData("bodyodor", true)} type="checkbox" name="bodyodor"/>
                    <br/>
                    <label>Bottom growth:</label>
                    <input onChange={this.setData("bottomgrowth", true)} type="checkbox" name="bottomgrowth"/>
                    <br/>
                    <label>Other effects:</label>
                    <input onChange={this.setData("othereffects")} type="text" name="othereffects"/>
                    <br/>
                    <input type="submit" value="submit" />
                </form>
            </div>
        );
    }
}

export default Community;
