import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import {Container} from "@mui/material";
import rootObj from './json/sample.json';
import {useState} from "react";
import {Link} from "@mui/icons-material";
import JsonTree from "./JsonTree/JsonTree";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



export default function BasicGrid() {
    const [current, setCurrent] = useState(rootObj);
    const [expr, setExpr] = useState();
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }} style={{marginTop: '100px'}}>
                <Grid container spacing={2}>
                    <Grid xs={6}>
                        <Item>
                            <JsonTree jsonData={rootObj}></JsonTree>
                        </Item>
                    </Grid>
                    <Grid xs={6}>
                        <Item>Second Div</Item>
                    </Grid>
                </Grid>
            </Box>
        </Container>

    );
}
