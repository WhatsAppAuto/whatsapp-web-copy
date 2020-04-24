import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default {
  dateFormat(date, formatStr = "dd/MM/yyyy") {
    return format(date, formatStr, { locale: ptBR });
  }
};
