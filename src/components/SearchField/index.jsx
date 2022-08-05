import React from 'react';
import InputBase from "@material-ui/core/InputBase";
import {makeStyles} from "@material-ui/core/styles";

export default function SearchField() {
    const classes = useStyles();
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return(
        <div>
            <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={inputHandler}
            />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            backgroundColor: "gray"
            }
        }
    )
)