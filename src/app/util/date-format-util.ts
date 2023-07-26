export class dateFormatter{

    private static currentDate?:string;
    private static now = new Date();


    public static getProcessDate() :string{
        let processDate : string;
        let month : number;
        let monthName : string;
        let year : number;
        month = dateFormatter.now.getMonth();
        year = dateFormatter.now.getFullYear();
        switch(month){
            case 0: {
                monthName = 'Enero';
                break;
            }
            case 1: {
                monthName = 'Febrero';
                break;
            }
            case 2: {
                monthName = 'Marzo';
                break;
            }
            case 3: {
                monthName = 'Abril';
                break;
            }
            case 4: {
                monthName = 'Mayo';
                break;
            }
            case 5: {
                monthName = 'Junio';
                break;
            }
            case 6: {
                monthName = 'Julio';
                break;
            }
            case 7: {
                monthName = 'Agosto';
                break;
            }
            case 8: {
                monthName = 'Septiembre';
                break;
            }
            case 9: {
                monthName = 'Octubre';
                break;
            }
            case 10: {
                monthName = 'Noviembre';
                break;
            }
            default: {
                monthName = 'Diciembre';
                break;
            }
        }

        processDate = `${monthName} - ${year.toString()}`
        return processDate;
    }

    public static getStringDate(date: Date): string{
        let processDate : string;
        let month : number;
        let monthName : string;
        let year : number;
        let day : number = date.getDate();
        month = date.getMonth();
        year = date.getFullYear();
        switch(month){
            case 0: {
                monthName = 'Enero';
                break;
            }
            case 1: {
                monthName = 'Febrero';
                break;
            }
            case 2: {
                monthName = 'Marzo';
                break;
            }
            case 3: {
                monthName = 'Abril';
                break;
            }
            case 4: {
                monthName = 'Mayo';
                break;
            }
            case 5: {
                monthName = 'Junio';
                break;
            }
            case 6: {
                monthName = 'Julio';
                break;
            }
            case 7: {
                monthName = 'Agosto';
                break;
            }
            case 8: {
                monthName = 'Septiembre';
                break;
            }
            case 9: {
                monthName = 'Octubre';
                break;
            }
            case 10: {
                monthName = 'Noviembre';
                break;
            }
            default: {
                monthName = 'Diciembre';
                break;
            }
        }

        processDate = `${year.toString()}-${monthName}-${day.toString()}`;
        return processDate;
    }

}