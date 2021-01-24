import React from "react";


function Community() {
    return (
        <div className="community">
            <DataInput />
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                        <img
                            class="img-fluid rounded mb-4 mb-lg-0"
                            src="http://placehold.it/900x400"
                            alt=""
                        />
                    </div>
                    <div class="col-lg-5">
                        <h1 class="font-weight-light">Home</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book.
            </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

class DataInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        console.log("Submitting information form");
        e.preventDefault();
    }

    render() {
        return (
            <div className="dataInput">
                <h1>Submit information</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>General info</label>
                    <br/>
                    <label>Time on HRT (months, approx):</label>
                    <input type="text" name="hrttime" />
                    <br/>
                    <label>Age:</label>
                    <input type="text" name="age" />
                    <br/>
                    <label>Form:</label>
                    <select>
                        <option value={null}>select...</option>
                        <option value="pills">Pills</option>
                        <option value="gel">Gel/cream</option>
                        <option value="patch">Patch</option>
                        <option value="injection">Injection</option>
                    </select>
                    <br/>
                    <label>Testosterone-specific info</label>
                    <br/>
                    <label>Increased libido:</label>
                    <input type="checkbox" name="libido"/>
                    <br/>
                    <label>Increased acne:</label>
                    <input type="checkbox" name="acne"/>
                    <br/>
                    <label>Weight gain:</label>
                    <input type="checkbox" name="weightgain"/>
                    <br/>
                    <label>Weight loss:</label>
                    <input type="checkbox" name="weightloss"/>
                    <br/>
                    <label>Muscle gain:</label>
                    <input type="checkbox" name="muscle"/>
                    <br/>
                    <label>Fat redistribution:</label>
                    <input type="checkbox" name="fatredistribution"/>
                    <br/>
                    <label>Increased irritability:</label>
                    <input type="checkbox" name="irritability"/>
                    <br/>
                    <label>Increased body hair:</label>
                    <input type="checkbox" name="bodyhair"/>
                    <br/>
                    <label>Increased facial hair:</label>
                    <input type="checkbox" name="facialhair"/>
                    <br/>
                    <label>Voice changes:</label>
                    <input type="checkbox" name="voicechanges"/>
                    <br/>
                    <label>Body odor changes:</label>
                    <input type="checkbox" name="bodyodor"/>
                    <br/>
                    <label>Bottom growth:</label>
                    <input type="checkbox" name="bottomgrowth"/>
                    <br/>
                    <label>Other effects:</label>
                    <input type="text" name="othereffects"/>
                    <br/>
                    <input type="submit" value="submit" />
                </form>
            </div>
        );
    }
}

export default Community;
