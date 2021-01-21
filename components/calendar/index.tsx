import type { Moment } from 'moment';
import momentGenerateConfig from 'rc-picker/lib/generate/moment';
import generateCalendar from './generateCalendar';

export type { CalendarProps } from './generateCalendar';

const Calendar = generateCalendar<Moment>(momentGenerateConfig);

export default Calendar;
