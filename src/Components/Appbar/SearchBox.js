import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import MenuItem from '@material-ui/core/MenuItem';
import { fade, makeStyles } from '@material-ui/core/styles';
import { InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ListSubheader from '@material-ui/core/ListSubheader';



const useStyles = makeStyles((theme) => ({
    formControl: {
        textAlign: 'center',
        height: '35px',
        color: 'white',
        backgroundColor: fade(theme.palette.common.white, 0.25),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },

        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    search: {
        flex: 1,
        position: 'relative',
        justifyContent: 'center',
        position: 'relative',
        display: 'flex',
        borderRadius: theme.shape.borderRadius,
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
     
        position: 'absolute',
        right: '209px',
        height: '35px', 
        padding: '0 7px',
        paddingTop:'4px',
        background:'rgba(255, 255, 255, 0.25)',
        hover:{
            background:'rgba(255, 255, 255, 0.3)',
        },
        cursor:'pointer'
        
    },
    inputRoot: {
        minWidth: '40%',
        height: '35px',
        color: 'inherit',
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `1em`,
        // paddingRight: `29px`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            // width: '20ch',
        },
    },
    underline: {
        border: '1px solid yellow',
    },
    
}));

export default function SearchBox() {
    const classes = useStyles();

    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };


    return (
        <div className={classes.search}>

            <FormControl  >
                <Select disableUnderline defaultValue="0" id="grouped-select" className={classes.formControl} onChange={handleChange}>
                    <MenuItem value="0">
                        Category
                    </MenuItem>
                    <ListSubheader value={10}>Category 1</ListSubheader>
                    <MenuItem value={1}>Option 1</MenuItem>
                    <MenuItem value={2}>Option 2</MenuItem>
                    <ListSubheader>Category 2</ListSubheader>
                    <MenuItem value={3}>Option 3</MenuItem>
                    <MenuItem value={4}>Option 4</MenuItem>
                </Select>
            </FormControl>

            <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />

            <div className={classes.searchIcon} >
              
                <SearchIcon />
              
            </div>

        </div>
    );
}

