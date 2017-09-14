import moment from 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.js';

export function spreadOperator(oldArray) {
  console.log(moment);
  return [
    ...oldArray,
    `Add now to time ${moment()}`,
  ];
}
