import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import GridContainer from "./Grid/GridContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  para: {
    marginLeft: "2.5vh",
    marginTop: "2vh",
  },
}));
export default function OrientationPdf(props) {
  //-------------------------------
  const classes = useStyles();
  return (
    <div>
      <h4 align="center"><strong>Higher school of computer science sidi belabbes</strong></h4>
      <GridContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Patient : Yasser</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Doctor : Houssem</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Age : 22</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Date : 8-23-2021</strong>
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
        <Typography className={classes.para} variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </GridContainer>
    </div>
  );
}
