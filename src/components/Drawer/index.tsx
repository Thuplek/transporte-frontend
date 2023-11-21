import {
  Box,
  Collapse,
  Divider,
  Drawer as DrawerMaterial,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ItensMenu from './ItensMenu.json';
import React, { useState } from 'react';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import StarBorder from '@mui/icons-material/StarBorder';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

interface IDrawer {
  children: React.ReactNode;
}
interface iListItemLink {
  label: string;
  onClick?: () => void;
  to: string;
  icon?: string;
  children?: iListItemLink[];
}

const ListItemLink: React.FC<iListItemLink> = ({
  label,
  icon,
  onClick,
  to,
  children,
}) => {
  const navigate = useNavigate();
  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname, end: false });
  const [opeColapse, setopenColapse] = useState<boolean>(false);

  const toggleColapse = () => {
    setopenColapse(!opeColapse);
  };
  const handleClick = () => {
    onClick?.();
    navigate(to);
  };

  return (
    <>
      <ListItemButton key={label} onClick={handleClick} selected={!!match}>
        {icon && (
          <ListItemIcon>
            <Icon>{icon}</Icon>
          </ListItemIcon>
        )}

        <ListItemText primary={label} />
        {children &&
          (opeColapse ? (
            <ExpandLess onClick={toggleColapse} />
          ) : (
            <ExpandMore onClick={toggleColapse} />
          ))}
      </ListItemButton>
      <Collapse in={opeColapse} timeout='auto' unmountOnExit>
        {children?.map((menu, index) => {
          return (
            <ListItemLink
              key={`subitem-menu-${index}`}
              icon={menu?.icon}
              label={menu.label}
              to={menu.to}
              children={menu.children}
            />
          );
        })}
      </Collapse>
    </>
  );
};

export const Drawer: React.FC<IDrawer> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState<boolean>(false);

  const toogleOpenMenu = () => {
    setOpen(!open);
  };
  return (
    <>
      <DrawerMaterial
        open={open}
        variant={smDown ? 'temporary' : 'permanent'}
        onClose={toogleOpenMenu}
      >
        <Box
          width={theme.spacing(28)}
          display={'flex'}
          flexDirection={'column'}
        >
          <Box>Gerenciamento</Box>
          <Divider />
          <Box flex={1}>
            <List component={'nav'}>
              {ItensMenu.map((menu) => {
                return (
                  <ListItemLink
                    icon={menu?.icon}
                    label={menu.label}
                    to={menu.to}
                    children={menu.children}
                  />
                );
              })}
            </List>
          </Box>
        </Box>
      </DrawerMaterial>
      <Box height={'100vh'} marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
