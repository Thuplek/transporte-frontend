import { useSnackbar, VariantType } from 'notistack';

type useSnackBarType = {
  text: string;
  variant: VariantType;
  preventDuplicate?: boolean;
  options?: unknown;
};

export default function useNotificar() {
  const { enqueueSnackbar } = useSnackbar();

  function notificar({
    text,
    variant,
    preventDuplicate = true,
  }: useSnackBarType) {
    enqueueSnackbar(text, {
      variant: variant,
      preventDuplicate: preventDuplicate,
    });
  }

  return { notificar };
}
