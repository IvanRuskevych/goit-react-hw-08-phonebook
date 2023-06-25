import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import css from './UserMenu.module.css';
import { Button } from '@mui/material';
import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <Button
        onClick={() => dispatch(logOut())}
        size="small"
        type="submit"
        variant="outlined"
        className={css.btn}
      >
        Log out
      </Button>
    </div>
  );
};
