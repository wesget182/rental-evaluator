import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Link from '@material-ui/core/Link';
import TenantForm from './TenantForm';

const useStyles = makeStyles((theme) => ({
  avatarContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: '10px'
  },
  fullName: {
    marginLeft: '10px',
  },
}));

export default function TenantAvatar({ tenant = {} }) {
  const classes = useStyles();
  const [showTenant, setShowTenant] = useState(false);

  const handleCloseTenant = () => setShowTenant(false);

  return (
    <div className={classes.avatarContainer}>
      <Avatar>
        <PermIdentityIcon />
      </Avatar>
      <Link className={classes.fullName} onClick={() => setShowTenant(true)}>{tenant.fullName}</Link>
      <TenantForm open={showTenant} handleClose={handleCloseTenant} tenant={tenant}/>
    </div>
  );
}
