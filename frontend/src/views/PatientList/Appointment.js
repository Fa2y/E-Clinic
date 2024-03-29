import React from 'react';
// import Datetime from 'react-datetime';

// import 'react-datetime/css/react-datetime.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';
// @material-ui/core components
import { lighten, makeStyles } from '@material-ui/core/styles';
import GridItem from 'components/Grid/GridItem';
import GridContainer from 'components/Grid/GridContainer';
import Button from 'components/CustomButtons/Button';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardBody from 'components/Card/CardBody';
import CardFooter from 'components/Card/CardFooter';
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
  Paper,
  // Checkbox,
  IconButton,
  Tooltip,
  TextField,
  Modal,
  List,
  ListItem,
  Divider,
} from '@material-ui/core';
import { DateRangePicker, Calendar } from 'react-date-range';
import { isSaturday, isFriday, format } from 'date-fns';
import moment from 'moment';

// Icons
import FilterListIcon from '@material-ui/icons/FilterList';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
// import EditIcon from '@material-ui/icons/Edit';
// import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import ClearAllIcon from '@material-ui/icons/ClearAll';
// import CancelIcon from '@material-ui/icons/Cancel';

import { toast } from 'react-toastify';
import { extractErrorMsg } from 'lib/utils/helpers';
import patientAPI from 'lib/api/patient';
import useSWR from 'swr';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array?.map((el, index) => [el, index]);
  stabilizedThis?.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis?.map((el) => el[0]);
}

const headCells = [
  {
    id: 'doctor',
    numeric: false,
    disablePadding: true,
    label: 'Doctor',
  },
  {
    id: 'description',
    numeric: false,
    disablePadding: false,
    label: 'Description',
  },
  {
    id: 'approved',
    numeric: false,
    disablePadding: false,
    label: 'Approved',
  },
  { id: 'date', numeric: true, disablePadding: false, label: 'Date And Time' },
];

function EnhancedTableHead(props) {
  const {
    classes,
    // onSelectAllClick,
    order,
    orderBy,
    // numSelected,
    // rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          {/* <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            color="success"
            inputProps={{ 'aria-label': 'select all desserts' }}
          /> */}
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  // numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  // onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  // rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.success.main,
          backgroundColor: lighten(theme.palette.success.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const {
    setAppliedFilter,
    numSelected,
    appointmentDates,
    handleMultiApprove,
  } = props;
  const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  };
  const [selectedFilter, setSelectedFilter] = React.useState('all');
  const [toggleFilterModal, setToggleFilterModal] = React.useState(false);
  const [dateRange, setDateRange] = React.useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const sameDay = (d1, d2) =>
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();

  const appointmentDayContent = (day) => {
    let extraDot = null;
    if (appointmentDates?.some((ele) => sameDay(ele, day))) {
      extraDot = (
        <div
          style={{
            height: '5px',
            width: '5px',
            borderRadius: '100%',
            background: 'orange',
            position: 'absolute',
            top: 2,
            right: 2,
          }}
        />
      );
    }
    return (
      <div>
        {extraDot}
        <span>{format(day, 'd')}</span>
      </div>
    );
  };

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <Modal
        open={toggleFilterModal}
        onClose={() => setToggleFilterModal(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{ overflow: 'scroll' }}
      >
        <GridContainer style={{ display: 'flex', justifyContent: 'center' }}>
          <GridItem xs={6}>
            <Card>
              <CardHeader>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <h3>Filters</h3>
                  <IconButton
                    color="danger"
                    aria-label="Cancel"
                    component="span"
                    onClick={() => setToggleFilterModal(false)}
                  >
                    <CancelIcon />
                  </IconButton>
                </div>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem
                    style={{ marginBottom: '1%' }}
                    xs={12}
                    sm={12}
                    md={5}
                  >
                    <List style={flexContainer} component="nav">
                      <p>Show: </p>
                      <ListItem
                        divider
                        selected={selectedFilter === 'all'}
                        button
                        onClick={() => setSelectedFilter('all')}
                      >
                        All
                      </ListItem>
                      <Divider orientation="vertical" flexItem />
                      <ListItem
                        button
                        divider
                        selected={selectedFilter === 'unapproved'}
                        onClick={() => setSelectedFilter('unapproved')}
                      >
                        Unapproved
                      </ListItem>
                      <Divider orientation="vertical" flexItem />
                      <ListItem
                        button
                        divider
                        selected={selectedFilter === 'approved'}
                        onClick={() => setSelectedFilter('approved')}
                      >
                        Approved
                      </ListItem>
                    </List>
                  </GridItem>
                </GridContainer>
                <Divider />
                <GridContainer>
                  <GridItem style={{ marginTop: '1%' }} xs={6}>
                    <h5>Filter Date: </h5>
                    <DateRangePicker
                      style={{ boxShadow: '1px 1px 81px rgb(41 60 74 / 18%)' }}
                      onChange={(item) => setDateRange([item.selection])}
                      showSelectionPreview
                      moveRangeOnFirstSelection={false}
                      disabledDay={(day) => isSaturday(day) || isFriday(day)}
                      ranges={dateRange}
                      dayContentRenderer={appointmentDayContent}
                      direction="horizontal"
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter
                style={{ display: 'flex', justifyContent: 'flex-end' }}
              >
                <div
                  style={{ display: 'flex', justifyContent: 'space-around' }}
                >
                  <Button
                    color="success"
                    onClick={() => {
                      setAppliedFilter({
                        filter: true,
                        dates: dateRange[0],
                        show: selectedFilter,
                      });
                      setToggleFilterModal(false);
                    }}
                  >
                    Filter
                  </Button>
                  <Button
                    color="danger"
                    onClick={() => {
                      setAppliedFilter({ filter: false });
                      setSelectedFilter('all');
                      setDateRange([
                        {
                          startDate: new Date(),
                          endDate: new Date(),
                          key: 'selection',
                        },
                      ]);
                    }}
                  >
                    CLEAR
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </Modal>
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="success"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Appointments
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Multiple Approve">
          <IconButton onClick={handleMultiApprove} aria-label="approveMulti">
            <AssignmentTurnedInIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <>
          <Tooltip title="Clear all filters">
            <IconButton
              aria-label="Clear Filters"
              onClick={() => setAppliedFilter({ filter: false })}
              color="danger"
            >
              <ClearAllIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Filter list">
            <IconButton
              aria-label="filter list"
              onClick={() => setToggleFilterModal(true)}
            >
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        </>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },

  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  tableRow: {
    '&$selected, &$selected:hover': {
      color: theme.palette.success.main,
      backgroundColor: lighten(theme.palette.success.light, 0.85),
    },
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  cardCategoryWhite: {
    color: 'rgba(255,255,255,.62)',
    margin: '0',
    fontSize: '14px',
    marginTop: '0',
    marginBottom: '0',
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none',
  },
  hover: {},
  selected: {},
}));

const CreateAppointmentModal = ({
  openCreate,
  setOpenCreate,
  classes,
  mutate,
  appointmentDates,
}) => {
  const [date, setDate] = React.useState(null);
  const [values, setValues] = React.useState({
    description: '',
    time: null,
  });
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const appointmentData = {
      ...values,
      date: `${moment(date).format('YYYY-MM-DD')} ${values.time}`,
    };
    delete appointmentData.time;
    const { data, status } = await patientAPI.requestAppointment(
      appointmentData,
    );
    if (status < 200 || status > 299) {
      const errors = extractErrorMsg(data);
      errors.map((error) => toast.error(error));
      return [];
    }
    toast.success('Appointment Requested Successfully');
    mutate({ data: [], status: 200 }, true);
    setOpenCreate(false);
    setValues({
      description: '',
      time: null,
    });
    return data;
  };
  const sameDay = (d1, d2) =>
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();

  const appointmentDayContent = (day) => {
    let extraDot = null;
    if (appointmentDates?.some((ele) => sameDay(ele, day))) {
      extraDot = (
        <div
          style={{
            height: '5px',
            width: '5px',
            borderRadius: '100%',
            background: 'orange',
            position: 'absolute',
            top: 2,
            right: 2,
          }}
        />
      );
    }
    return (
      <div>
        {extraDot}
        <span>{format(day, 'd')}</span>
      </div>
    );
  };
  return (
    <Modal
      open={openCreate}
      onClose={() => setOpenCreate(false)}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      style={{ overflow: 'scroll' }}
    >
      <GridContainer style={{ display: 'flex', justifyContent: 'center' }}>
        <GridItem xs={6}>
          <Card>
            <CardHeader color="success">
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <h4 className={classes.cardTitleWhite}>Appointment</h4>
                  <p className={classes.cardCategoryWhite}>Book</p>
                </div>
                <IconButton
                  color="danger"
                  aria-label="Cancel"
                  component="span"
                  onClick={() => setOpenCreate(false)}
                >
                  <CancelIcon />
                </IconButton>
              </div>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <TextField
                    style={{
                      marginTop: '8%',
                      // marginBottom: '%',
                      width: '100%',
                    }}
                    id="outlined-multiline-static"
                    label="Description"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    columns={11}
                    variant="outlined"
                  />
                </GridItem>
              </GridContainer>
              <Grid direction="row" alignItems="flex-start">
                <GridItem xs={6}>
                  <Calendar
                    default={new Date()}
                    onChange={(item) => setDate(item)}
                    date={date}
                    disabledDay={(day) => isSaturday(day) || isFriday(day)}
                    dayContentRenderer={appointmentDayContent}
                  />
                </GridItem>
                <GridItem xs={6}>
                  <TextField
                    id="time"
                    label="Set Time"
                    type="time"
                    name="time"
                    defaultValue="08:30"
                    value={values.time}
                    onChange={handleChange}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}
                  />
                </GridItem>
              </Grid>
            </CardBody>
            <CardFooter style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button color="info" onClick={handleSubmit}>
                Submit
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </Modal>
  );
};

const EditAppointmentModal = ({
  openEdit,
  setOpenEdit,
  classes,
  mutate,
  appointmentDates,
}) => {
  const [date, setDate] = React.useState(new Date(openEdit.data?.date));
  const d = new Date(openEdit.data?.date);
  const [values, setValues] = React.useState({
    aid: openEdit.data?.id,
    patient_data: openEdit.data?.patient_data,
    patient: openEdit.data?.patient,
    description: openEdit.data?.description,
    time: `${d.getHours().toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })}:${d.getMinutes().toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })}`,
  });
  React.useEffect(() => {
    if (openEdit.toggle) {
      const appointmentDate = new Date(openEdit.data?.date);
      setValues({
        aid: openEdit.data?.id,
        patient_data: openEdit.data?.patient_data,
        patient: openEdit.data?.patient,
        description: openEdit.data?.description,
        time: `${appointmentDate.getHours().toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}:${appointmentDate.getMinutes().toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}`,
      });
      setDate(appointmentDate);
    }
  }, [openEdit]);
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const appointmentData = {
      ...values,
      date: `${moment(date).format('YYYY-MM-DD')} ${values.time}`,
    };
    delete appointmentData.time;
    delete appointmentData.aid;
    delete appointmentData.patient_data;
    delete appointmentData.patient;
    const { data, status } = await patientAPI.editAppointment(
      values?.aid,
      appointmentData,
    );
    if (status < 200 || status > 299) {
      const errors = extractErrorMsg(data);
      errors.map((error) => toast.error(error));
      return [];
    }
    toast.success('Appointment Edited Successfully');
    mutate({ data: [], status: 200 }, true);
    setOpenEdit({ toggle: false, data: {} });
    setValues({
      patient_data: {},
      patient: '',
      description: '',
      time: null,
    });
    return data;
  };
  const sameDay = (d1, d2) =>
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();

  const appointmentDayContent = (day) => {
    let extraDot = null;
    if (appointmentDates?.some((ele) => sameDay(ele, day))) {
      extraDot = (
        <div
          style={{
            height: '5px',
            width: '5px',
            borderRadius: '100%',
            background: 'orange',
            position: 'absolute',
            top: 2,
            right: 2,
          }}
        />
      );
    }
    return (
      <div>
        {extraDot}
        <span>{format(day, 'd')}</span>
      </div>
    );
  };
  return (
    <Modal
      open={openEdit.toggle}
      onClose={() => {
        setOpenEdit({ toggle: false, data: {} });
        setValues({
          patient_data: {},
          patient: '',
          description: false,
          time: null,
        });
        setDate(null);
      }}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      style={{ overflow: 'scroll' }}
    >
      <GridContainer style={{ display: 'flex', justifyContent: 'center' }}>
        <GridItem xs={6}>
          <Card>
            <CardHeader color="success">
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <h4 className={classes.cardTitleWhite}>Appointment</h4>
                  <p className={classes.cardCategoryWhite}>Edit</p>
                </div>
                <IconButton
                  color="danger"
                  aria-label="Cancel"
                  component="span"
                  onClick={() => {
                    setOpenEdit({ toggle: false, data: {} });
                    setValues({
                      patient_data: {},
                      patient: '',
                      description: false,
                      time: null,
                    });
                    setDate(null);
                  }}
                >
                  <CancelIcon />
                </IconButton>
              </div>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12}>
                  <TextField
                    style={{ width: '100%' }}
                    id="outlined-multiline-static"
                    label="Patient"
                    name="Patient"
                    fullWidth
                    value={`${openEdit.data?.patient_data?.type}(${openEdit.data?.patient_data?.education_level}):${openEdit.data?.patient_data?.user?.first_name} ${openEdit.data?.patient_data?.user?.last_name}`}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <TextField
                    style={{
                      marginTop: '8%',
                      // marginBottom: '%',
                      width: '100%',
                    }}
                    id="outlined-multiline-static"
                    label="Description"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    columns={11}
                    variant="outlined"
                  />
                </GridItem>
              </GridContainer>
              <Grid direction="row" alignItems="flex-start">
                <GridItem xs={6}>
                  <Calendar
                    default={new Date()}
                    onChange={(item) => setDate(item)}
                    date={date}
                    disabledDay={(day) => isSaturday(day) || isFriday(day)}
                    dayContentRenderer={appointmentDayContent}
                  />
                </GridItem>
                <GridItem xs={6}>
                  <TextField
                    id="time"
                    label="Set Time"
                    type="time"
                    name="time"
                    defaultValue="08:30"
                    value={values.time}
                    onChange={handleChange}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}
                  />
                </GridItem>
              </Grid>
            </CardBody>
            <CardFooter style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button color="info" onClick={handleSubmit}>
                Edit
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </Modal>
  );
};
const CancelAppointmentModal = ({ openCancel, setOpenCancel }) => {
  const classes = useStyles();

  return (
    <Modal
      open={openCancel.toggle}
      onClose={() => {
        setOpenCancel({ toggle: false, comment: '' });
      }}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      style={{ overflow: 'scroll' }}
    >
      <GridContainer style={{ display: 'flex', justifyContent: 'center' }}>
        <GridItem xs={6}>
          <Card>
            <CardHeader color="success">
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <h4 className={classes.cardTitleWhite}>Appointment</h4>
                  <p className={classes.cardCategoryWhite}>Cancel Comment</p>
                </div>
                <IconButton
                  color="danger"
                  aria-label="Cancel"
                  component="span"
                  onClick={() => {
                    setOpenCancel({ toggle: false, comment: '' });
                  }}
                >
                  <CancelIcon />
                </IconButton>
              </div>
            </CardHeader>
            <CardBody>
              <GridItem xs={12}>
                <TextField
                  id="comment"
                  label="Cancel Comment"
                  name="comment"
                  value={openCancel?.comment}
                  multiline
                  rows={5}
                  fullWidth
                  className={classes.textField}
                  variant="outlined"
                />
              </GridItem>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </Modal>
  );
};

export default function Appointment() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('date');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [openCreate, setOpenCreate] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState({ toggle: false, data: {} });
  const [openCancel, setOpenCancel] = React.useState({
    toggle: false,
    comment: '',
  });

  const [rows, setRows] = React.useState([]);
  const [appliedFilter, setAppliedFilter] = React.useState({ filter: false });
  const {
    data: swrData,
    error: swrErr,
    mutate,
  } = useSWR(['Patientappointments'], patientAPI.fetchAppointments);
  React.useEffect(() => {
    if (!swrErr && swrData) {
      const { data, status } = swrData;

      if (status < 200 || status > 299) {
        const errors = extractErrorMsg(data);
        errors.map((error) => toast.error(error));
        return [];
      }
      setRows(data); // .filter((row) => row?.status !== 'cancelled')
      return data;
    }
    return [];
  }, [swrData, swrErr]);

  const handleMultiApprove = async (e) => {
    e.preventDefault();
    const { data, status } = await patientAPI.approveMultiAppointments({
      aids: selected,
    });
    if (status < 200 || status > 299) {
      const errors = extractErrorMsg(data);
      errors.map((error) => toast.error(error));
      return [];
    }
    toast.success('Appointments Approved Successfully');
    mutate({ data: [], status: 200 }, true);
    setSelected([]);
    return data;
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows
        .filter((ele) => !ele?.approved)
        .map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  // const handleClick = (event, id) => {
  //   const selectedIndex = selected.indexOf(id);
  //   let newSelected = [];

  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selected, id);
  //   } else if (selectedIndex === 0) {
  //     newSelected = newSelected.concat(selected.slice(1));
  //   } else if (selectedIndex === selected?.length - 1) {
  //     newSelected = newSelected.concat(selected.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(
  //       selected.slice(0, selectedIndex),
  //       selected.slice(selectedIndex + 1),
  //     );
  //   }

  //   setSelected(newSelected);
  // };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows?.length - page * rowsPerPage);
  return (
    <div>
      <CreateAppointmentModal
        setOpenCreate={setOpenCreate}
        openCreate={openCreate}
        classes={classes}
        mutate={mutate}
        appointmentDates={rows?.map((ele) => {
          const d = new Date(ele.date);
          d.setHours(0, 0, 0, 0);
          return d;
        })}
      />
      <EditAppointmentModal
        setOpenEdit={setOpenEdit}
        openEdit={openEdit}
        classes={classes}
        mutate={mutate}
        appointmentDates={rows?.map((ele) => {
          const d = new Date(ele.date);
          d.setHours(0, 0, 0, 0);
          return d;
        })}
      />
      <CancelAppointmentModal
        setOpenCancel={setOpenCancel}
        openCancel={openCancel}
        mutate={mutate}
      />
      <Card>
        <CardHeader color="success">
          <h3>Appointment Management</h3>
        </CardHeader>
        <CardBody>
          <Button
            style={{ marginBottom: '1%' }}
            type="button"
            variant="contained"
            color="primary"
            onClick={() => setOpenCreate(true)}
          >
            Request an Appointment
          </Button>
          <Paper className={classes.paper}>
            <EnhancedTableToolbar
              setAppliedFilter={setAppliedFilter}
              numSelected={selected?.length}
              appointmentDates={rows?.map((ele) => {
                const d = new Date(ele.date);
                d.setHours(0, 0, 0, 0);
                return d;
              })}
              handleMultiApprove={handleMultiApprove}
            />
            <TableContainer>
              <Table
                className={classes.table}
                aria-labelledby="tableTitle"
                size="medium"
                aria-label="enhanced table"
              >
                <EnhancedTableHead
                  classes={classes}
                  numSelected={selected?.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={rows?.filter((ele) => !ele.approved)?.length}
                />
                <TableBody>
                  {stableSort(
                    rows.filter((element) => {
                      if (appliedFilter.filter) {
                        if (
                          appliedFilter.show === 'approved' &&
                          !element?.approved
                        )
                          return false;
                        if (
                          appliedFilter.show === 'unapproved' &&
                          element?.approved
                        )
                          return false;
                        // console.log(element?.approved);
                        const eleDate = new Date(element.date);
                        eleDate.setHours(0, 0, 0, 0);
                        if (
                          appliedFilter?.dates?.startDate > eleDate ||
                          appliedFilter?.dates?.endDate < eleDate
                        )
                          return false;
                      }
                      return true;
                    }),
                    getComparator(order, orderBy),
                  )
                    ?.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage,
                    )
                    .map((row) => {
                      const isItemSelected = isSelected(row.id);
                      // const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow
                          hover
                          className={classes.tableRow}
                          classes={{
                            hover: classes.hover,
                            selected: classes.selected,
                          }}
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.id}
                          selected={isItemSelected}
                        >
                          <TableCell padding="checkbox">
                            {/* <Checkbox
                              color="green"
                              checked={isItemSelected && !row?.approved}
                              disabled={row?.approved}
                              onChange={(event) => {
                                if (!row?.approved) handleClick(event, row.id);
                              }}
                              inputProps={{ 'aria-labelledby': labelId }}
                            /> */}
                          </TableCell>

                          <TableCell align="left">{`Dr.${row?.doctor_data?.last_name} ${row?.doctor_data?.first_name}`}</TableCell>
                          <TableCell align="left">{row?.description}</TableCell>
                          <TableCell align="left">
                            {/* eslint-disable-next-line no-nested-ternary */}
                            {row?.status !== 'cancelled' ? (
                              row?.approved ? (
                                <CheckIcon />
                              ) : (
                                <CloseIcon />
                              )
                            ) : (
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'end',
                                }}
                              >
                                <Tooltip title="See Refusal Comment">
                                  <IconButton
                                    onClick={() =>
                                      setOpenCancel({
                                        toggle: true,
                                        comment: row?.comment,
                                      })
                                    }
                                  >
                                    <CancelIcon />
                                  </IconButton>
                                </Tooltip>
                                <small>cancelled</small>
                              </div>
                            )}
                          </TableCell>
                          <TableCell align="left">
                            {moment(row?.date).format('DD MMMM YYYY HH:mm')}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={rows?.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>
        </CardBody>
      </Card>
    </div>
  );
}
