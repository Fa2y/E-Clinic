import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import image from 'assets/img/clinique.jpg';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ClinicalExamination(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [clinicalExam, setClinicalExam] = React.useState('');
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setClinicalExam('');
    setOpen(false);
  };
  const handleChange = (event) => {
    setClinicalExam({
      clinicalExam: event.target.value,
    });
  };
  return (
    <div>
      <Card className={classes.root}>
        <CardMedia component="img" src={image} />
        <CardActions disableSpacing>
          <Button
            variant="contained"
            color="primary"
            fullWidth="true"
            onClick={handleClickOpen}
          >
            Clinical examination
          </Button>
        </CardActions>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth="true"
      >
        <DialogTitle id="form-dialog-title">Clinical examination</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="clinical_exam"
            label="Clinical Exam Details"
            fullWidth
            multiline
            rows={10}
            maxRows={40}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary">Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
