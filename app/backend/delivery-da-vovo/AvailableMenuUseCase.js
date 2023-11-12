import { DailyMenuRepository } from "./DailyMenuRepository.js"
import ValidationError from "./ValidationError.js"
import { add, differenceInDays, eachDayOfInterval, format, isAfter, isValid, parse, startOfDay } from "date-fns" 

const repository = new DailyMenuRepository()
const dateFormat = 'yyyy-MM-dd'
const formatDateToId = (date) => format(date, dateFormat)

const isValidDates = (begin, end) => {
    if (!begin || !end || !isValid(begin) || !isValid(end) || isAfter(begin, end) || differenceInDays(end, begin) > 10) {
        return false
    }
    return true
}


const execute = async ({ begin = startOfDay(new Date()), end = add(startOfDay(new Date()), { days: 7 }) }) => {
    begin = typeof begin == 'string' ? parse(begin, dateFormat, startOfDay(new Date())) : begin;
    end = typeof end == 'string' ? parse(end, dateFormat, startOfDay(new Date())) : end;

    if (!isValidDates(begin, end)) {
        throw new ValidationError('Invalid dates', 422)
    }

    const ids = eachDayOfInterval({ start: begin, end: end }).map(formatDateToId);

    return {
        dailyMenus: await repository.findById(ids)
    }
}

export { execute }