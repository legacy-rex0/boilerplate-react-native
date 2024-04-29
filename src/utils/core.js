import moment from "moment";


export const FilterDate = (val) => {
    let d = new Date();
    let t = new Date();

    if(val === "week"){
        const from = d.setDate(d.getDate() - 7);
        const data = {
            from: moment(from).format("YYYY/MM/DD"),
            to: moment().format("YYYY/MM/DD"),
        }
        return data;
    } else if(val === "month"){
        const data = {
            from: moment().format("YYYY/MM/01"),
            to: moment().format("YYYY/MM/DD"),
        }
        return data;
    } else if(val === "week"){
        const from = d.setDate(d.getDate() - 7);
        const data = {
            from: moment(from).format("YYYY/MM/DD"),
            to: moment().format("YYYY/MM/DD"),
        }
        return data;
    } else if(val === "1_month"){
        const from = d.setMonth(d.getMonth() - 1);
        const data = {
            from: moment(from).format(),
            to: moment().format(),
        }
        return data;
    } else if(val === "3_month") {
        const from = d.setMonth(d.getMonth() - 6);
        const data = {
            from: moment(from).format(),
            to: moment().format(),
        }
        return data;
    } else if(val === "12_months") {
        const from = d.setMonth(d.getMonth() - 12);
        const data = {
            from: moment(from).format("YYYY/MM/DD"),
            to: moment().format("YYYY/MM/DD"),
        }
        return data;
    } else {
        return null
    }

}

export const formatCurrency = (num, currencySymbol) => {
    let p = num.toFixed(2).split(".");
    return `${currencySymbol ?? "₦"}` + p[0].split("").reverse().reduce(function(acc, num, i, orig) {
        return num + (num != "-" && i && !(i % 3) ? "," : "") + acc;
    }, "") + "." + p[1];
}
