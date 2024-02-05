import { useState } from "react"

export default function UserInput({handleInputChange, inputValue}) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" value={inputValue.initialInvestment} required onChange={(event)=> 
                        handleInputChange("initialInvestment", event.target.value)
                    }/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" value={inputValue.annualInvestment} required onChange={(event)=> 
                        handleInputChange("annualInvestment", event.target.value)
                    }/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" value={inputValue.expectedReturn} required onChange={(event)=> 
                        handleInputChange("expectedReturn", event.target.value)
                    }/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" value={inputValue.duration} required onChange={(event)=> 
                        handleInputChange("duration", event.target.value)
                    }/>
                </p>
            </div>
        </section>
    )
}