import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuStore from '@stores/menu';
interface ILayoutBase {
  title: string;
  children: React.ReactNode;
}
export const LayoutBase: React.FC<ILayoutBase> = ({ children, title }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const {toogleOpenMenu} = MenuStore();

  return (
    <Box height='100%' display='flex' flexDirection={'column'} gap={1}>
      <Box
        p={1}
        height={theme.spacing(8)}
        display={'flex'}
        alignItems={'center'}
        gap={1}
      >
        {smDown && <MenuIcon onClick={toogleOpenMenu} />}
        <Typography
          textOverflow={'ellipsis'}
          whiteSpace={'nowrap'}
          overflow={'hidden'}
          variant={smDown ? 'h6' : mdDown ? 'h5' : 'h4'}
        >
          {title}
        </Typography>
      </Box>
      <Box flex={1} overflow={'auto'}>
        {children}
      </Box>
    </Box>
  );
};
