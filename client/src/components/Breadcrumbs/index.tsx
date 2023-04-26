import { NavLink } from 'react-router-dom';
import { Link } from '@mui/material';
import BreadcrumbsComponent from '@mui/material/Breadcrumbs';
import { CrumbType } from 'src/types';
import HomeIcon from '@mui/icons-material/Home';

type BreadcrumbsType = {
  crumbs: CrumbType[]
};

const Breadcrumbs = ({ crumbs = [] }: BreadcrumbsType): JSX.Element => (
  <BreadcrumbsComponent aria-label="breadcrumb" sx={{ my: 2 }}>
    {crumbs.map((el, index) => {
      const isHome: boolean = !index && crumbs.length > 1;

      return (
        <Link
          key={el.label}
          underline="hover"
          component={NavLink}
          sx={{
            fontSize: '20px',
            display: 'flex',
            alignItems: 'center',
            fontWeight: isHome ? '700' : '400',
          }}
          color={isHome ? '#ed6c02' : '#000000'}
          to={el.path}
        >
          {isHome && <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />}
          {el.label}
        </Link>
      );
    })}
  </BreadcrumbsComponent>
);

export default Breadcrumbs;
