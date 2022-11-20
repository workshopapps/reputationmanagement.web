import React, {  useState } from "react";
import styled from "styled-components";

const Checkbox = ({ label, checked, ...props }) => {

    const defaultChecked = checked ? checked : false;
    const [isChecked, setIsChecked] = useState(defaultChecked);
    
    return (
        <div className="checkbox-wrapper">
            <StyledLabel>
                <input type="checkbox"
                    checked={isChecked}
                    onChange={() => setIsChecked((prev) => !prev)}
                    {...props}
                    className={isChecked ? "checked" : ""}
                />
                <span>{label}</span>
                <span className="checkmark"></span>
            </StyledLabel>
        </div>
    );
};
export default Checkbox;

const StyledLabel = styled.label`

            display: block;
            position: relative;
            padding-left: 45px;
            margin-bottom: 15px;
            cursor: pointer;
            font-size: 16px;

            input[type=checkbox] {
                position: absolute;
                opacity: 0;
                cursor: pointer;
                height: 0;
                width: 0;

                    &:checked ~ .checkmark {
                        background: #F16F04
                    }

                    &:checked ~ .checkmark:after {
                        display: block;
                    }
            }

            .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 25px;
            width: 25px;
            background-color: #eee;
            border-radius: 5px;
            transition: 0.5s;

            &::after {
            content: "";
            position: absolute;
            display: none;
        
                }
            }
            
            &:hover input ~ .checkmark {
            background-color: #D0D0D0;
        }

       

        .checkmark:after {
            left: 9px;
            bottom: 5px;
            width: 5px;
            height: 15px;
            border: solid white;
            border-width: 0 3px 3px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
        }
           
  `;