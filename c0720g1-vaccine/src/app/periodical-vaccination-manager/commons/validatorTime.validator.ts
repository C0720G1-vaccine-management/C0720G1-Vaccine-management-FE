import {AbstractControl} from '@angular/forms';
/**TrungTQ Code: Valid thời gian bắt đầu vào phải sau  thời gian kết thúc*/
export function TimeValidator(control: AbstractControl): { [key: string]: boolean } | null {
  let start = new Date();
  let startTime = control.get('startTime').value.toString().split(':');
  start.setHours((parseInt(startTime[0]) - 1 + 24) % 24);
  start.setMinutes(parseInt(startTime[1]));


  let end = new Date();
  let endTime = control.get('endTime').value.toString().split(':');
  end.setHours((parseInt(endTime[0]) - 1 + 24) % 24);
  end.setMinutes(parseInt(endTime[1]));

  if (startTime > endTime) {
    return {
      timeValid: true
    };
  }
}
