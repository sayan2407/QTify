
import "./Faqs.css";

import { useEffect, useState } from "react";
import apis from "../../assets/apis/api";
import axios from 'axios';

import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography
} from "@mui/material";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faqs = () => {

    const [ qtifyFaqs, setQtifyFaqs ] = useState([]);

    // console.log('apis', apis);

    const faqAPI = apis.faqs;

    useEffect(()=>{
        fetchFaqs();
    }, [])

    const fetchFaqs = async () => {
        const response = await axios.get(faqAPI);
        console.log(response.data.data);
        setQtifyFaqs(response.data.data);
    }

    return <div className="container">
        <h2 className="faq_heading"> Faqs </h2>
        {qtifyFaqs.map( ( item, index ) => (
              <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                 {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
        ) )}
    </div>

}

export default Faqs;