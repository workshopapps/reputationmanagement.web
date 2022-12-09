import React, {useState} from 'react';
import { MdExpandMore, MdExpandLess } from "react-icons/md";


function Accordion(props) {
    const [isContentOpen, setIsContentOpen] = useState(false);

    return (  
        <div>
            <div className='flex justify-between border-b border-b-gray-300 w-full py-3 cursor-pointer' onClick={() => setIsContentOpen(!isContentOpen)}>
                <span className='text-xl font-[500]'>{props.title}</span>
                <button>
                    {isContentOpen ? <MdExpandLess /> : <MdExpandMore />}
                </button>
            </div>
            
            {isContentOpen &&
                <div className='p-3'>
                    {props.content}
                </div> 
            }
        </div>
    );
}

export default Accordion;