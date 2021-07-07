import { Button, ButtonGroup, Popper, ClickAwayListener } from '@material-ui/core/';

const BedBath = ({ setBaths, setBeds, classes }) => {
  const resetBeds = {
    bed0: 'outlined',
    bed1: 'outlined',
    bed2: 'outlined',
    bed3: 'outlined',
    bed4: 'outlined',
  };
  const resetBaths = {
    bed0: 'outlined',
    bed1: 'outlined',
    bed2: 'outlined',
    bed3: 'outlined',
    bed4: 'outlined',
  };

  const [bedState, setBedState] = useState(resetBeds);
  const [bathState, setBathState] = useState(resetBaths);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(anchorEl ? null : e.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const handleBeds = (e, id) => {
    const bedNum = 'bed' + id;
    const newBedState = { ...resetBeds };
    newBedState[bedNum] = 'contained';
    setBedState(newBedState);
    id === 0 ? setBeds(null) : setBeds(id);
  };

  const handleBaths = (e, id) => {
    const bathNum = 'bath' + id;
    const newBathState = { ...resetBaths };
    newBathState[bathNum] = 'contained';
    setBathState(newBathState);
    id === 0 ? setBaths(null) : setBaths(id);
  };

  const handleClickAway = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button variant="contained" aria-describedby={id} type="button" onClick={handleClick}>
        Beds & Baths
      </Button>

      <Popper id={id} open={open} anchorEl={anchorEl}>
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className={classes.paper}>
            <div>
              Bedrooms &nbsp;
              <ButtonGroup
                variant="outlined"
                color="primary"
                aria-label="outlined primary button group"
              >
                <Button
                  variant={bedState.bed0}
                  aria-describedby={id}
                  type="button"
                  onClick={(e) => handleBeds(e, 0)}
                >
                  {' '}
                  Any{' '}
                </Button>
                <Button
                  variant={bedState.bed1}
                  aria-describedby={id}
                  type="button"
                  onClick={(e) => handleBeds(e, 1)}
                >
                  {' '}
                  1+{' '}
                </Button>
                <Button
                  variant={bedState.bed2}
                  aria-describedby={id}
                  type="button"
                  onClick={(e) => handleBeds(e, 2)}
                >
                  {' '}
                  2+{' '}
                </Button>
                <Button
                  variant={bedState.bed3}
                  aria-describedby={id}
                  type="button"
                  onClick={(e) => handleBeds(e, 3)}
                >
                  {' '}
                  3+{' '}
                </Button>
                <Button
                  variant={bedState.bed4}
                  aria-describedby={id}
                  type="button"
                  onClick={(e) => handleBeds(e, 4)}
                >
                  {' '}
                  4+{' '}
                </Button>
              </ButtonGroup>
            </div>
            <div>
              Bathrooms &nbsp;
              <ButtonGroup
                variant="outlined"
                color="primary"
                aria-label="contained primary button group"
              >
                <Button
                  variant={bathState.bath0}
                  aria-describedby={id}
                  type="button"
                  onClick={(e) => handleBaths(e, 0)}
                >
                  {' '}
                  Any{' '}
                </Button>
                <Button
                  variant={bathState.bath1}
                  aria-describedby={id}
                  type="button"
                  onClick={(e) => handleBaths(e, 1)}
                >
                  {' '}
                  1+{' '}
                </Button>
                <Button
                  variant={bathState.bath2}
                  aria-describedby={id}
                  type="button"
                  onClick={(e) => handleBaths(e, 2)}
                >
                  {' '}
                  2+{' '}
                </Button>
                <Button
                  variant={bathState.bath3}
                  aria-describedby={id}
                  type="button"
                  onClick={(e) => handleBaths(e, 3)}
                >
                  {' '}
                  3+{' '}
                </Button>
                <Button
                  variant={bathState.bath4}
                  aria-describedby={id}
                  type="button"
                  onClick={(e) => handleBaths(e, 4)}
                >
                  {' '}
                  4+{' '}
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </ClickAwayListener>
      </Popper>
    </div>
  );
};

export default BedBath;
