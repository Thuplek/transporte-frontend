import DinamicoJson from '@app/PDF/template/dinamicoJson';
import { AppBar, Dialog, IconButton, MenuItem, Toolbar } from '@mui/material';
import {
  GridApi,
  GridExportMenuItemProps,
  gridFilteredSortedRowIdsSelector,
  gridVisibleColumnFieldsSelector,
  useGridApiContext,
} from '@mui/x-data-grid';
import { PDFViewer } from '@react-pdf/renderer';
import * as React from 'react';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const getJson = (
  apiRef: React.MutableRefObject<GridApi>
): { [key: string]: string | number | Date | null }[] => {
  // Select rows and columns
  const filteredSortedRowIds = gridFilteredSortedRowIdsSelector(apiRef);
  const visibleColumnsField = gridVisibleColumnFieldsSelector(apiRef);

  // Format the data. Here we only keep the value
  const data = filteredSortedRowIds.map((id) => {
    const row: Record<string, any> = {};
    visibleColumnsField.forEach((field) => {
      row[field] = apiRef.current.getCellParams(id, field).value;
    });
    return row;
  });
  return data;

  // Stringify with some indentation
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#parameters
  // return JSON.stringify(data, null, 2);
};

export function GerarPdf(props: GridExportMenuItemProps<{}>) {
  const apiRef = useGridApiContext();
  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>
  ) {
    return <Slide direction='up' ref={ref} {...props} />;
  });

  const { hideMenu } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    hideMenu?.();
  };

  return (
    <>
      <MenuItem onClick={() => handleClickOpen()}>Download</MenuItem>

      {/* <div>
        <BlobProvider document={<DinamicoJson json={getJson(apiRef)} />}>
        {({ blob, url, loading, error }) =>
        loading ? (
          'Loading document...'
          ) : (
            <a href={url} target='_blank' onClick={() => {handleClickOpen();hideMenu?.()}}>
            Download
            </a>
            )
          }
          </BlobProvider>
        </div> */}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleClose}
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
              Sound
            </Typography>
            <Button autoFocus color='inherit' onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <PDFViewer height={'100%'}>
          <DinamicoJson json={getJson(apiRef)} />
        </PDFViewer>
      </Dialog>
    </>
  );
}
